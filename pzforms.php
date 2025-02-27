<?php
/**
 * Plugin Name:       pzForms
 * Description:       Standalone block-based form builder.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.1.2
 * Author:            PeakZebra / Robert Richardson
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pzforms
 *
 * @package pzforms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}



require plugin_dir_path(__FILE__) . 'includes/class-peakforms-captcha.php';

//include the pz_do_form.php file
require_once( plugin_dir_path( __FILE__ ) . 'includes/pz_do_form.php' );



/**
 * Registers all blocks within the plugin.
 *
 * @return void
 */
function peakforms_register_blocks() {
	// Get all block.json files from the build directory
	$block_folders = glob( __DIR__ . '/build/*', GLOB_ONLYDIR );
	
	foreach ( $block_folders as $block_folder ) {
		if ( file_exists( $block_folder . '/block.json' ) ) {
			if( register_block_type( $block_folder ) == false ) {
				echo( esc_html('Failed to register block type: ' . $block_folder) );
                exit;
			}
		}
	}
}

add_action( 'init', 'peakforms_register_blocks' );

// create PeakZebra block category
function filter_block_categories( $block_categories, $editor_context ) {
    array_push(
        $block_categories,
        array(
            'slug'  => 'peakzebra',
            'title' => __( 'PeakZebra', 'pzforms' ),
            'icon'  => null,
        )
    );
    return $block_categories;
}
add_filter( 'block_categories_all', 'filter_block_categories', 10, 2 );



class MySettingsPage
{
    /**
     * Holds the values to be used in the fields callbacks
     */
    private $options;

    /**
     * Start up
     */
    public function __construct()
    {
        add_action( 'admin_menu', array( $this, 'add_plugin_page' ) );
        add_action( 'admin_init', array( $this, 'page_init' ) );
        // Add REST API endpoint registration
        add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );
    }

    /**
     * Add options page
     */
    public function add_plugin_page()
    {
        // This page will be under "Settings"
		add_options_page(
            'PZForms Settings',     // page title
            'PZForms',              // menu title
            'manage_options',         // capability
            'pzforms-settings',     // menu slug
            array( $this, 'create_admin_page' )  // callback
        );
    }

    /**
     * Options page callback
     */
    public function create_admin_page()
    {
        // Set class property
        $this->options = get_option( 'pzforms_option_name' );
        ?>
        <div class="wrap">
            <h1><?php echo esc_html__('pzForms Settings', 'pzforms'); ?></h1>
            <form method="post" action="options.php">
            <?php
                wp_nonce_field('pzforms_settings_nonce', 'pzforms_nonce');
                settings_fields( 'pzforms_option_group' );
                do_settings_sections( 'my-setting-admin' );
                submit_button();
            ?>
            </form>
            <h2><?php echo esc_html__('Getting Started', 'pzforms'); ?></h2>
            <p><?php echo esc_html__('Welcome to PZForms! This plugin is designed to help you create beautiful, responsive forms using the WordPress block editor and blocks that implement each form field type. Follow the steps below to get started:', 'pzforms'); ?></p>
            <ol>
                <li><?php echo esc_html__('Set the configurations above.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('(coming soon) The encryption key is used to encrypt any local JavaScript you create to verify or process data entered in some fields.', 'pzforms'); ?></li>    
                <li><?php echo esc_html__('The email field lets you enter the email address where form submissions will be sent.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Create a new post or page.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Add a new PZ Form Wrapper block to the page where you\'d like the form to appear.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Inside the dotted lines that mark the area of the PZ Form Wrapper block, add field blocks.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('You can of course add any field blocks as you\'d like, but pretty much any other block as well.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Configure the settings for each field you add.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Repeat until the form is the way you want it.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('If you need to process the form data in some way, you can create a submit handler in the submit folder.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('The submit handler must be in the submit folder and must be named the same as the form.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('The submit handler will receive the form data as $_POST data.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Find full documentation at https://peakzebra.com', 'pzforms'); ?></li>
            </ol>
          
        </div>
        <?php
    }

    /**
     * Register and add settings
     */
    public function page_init()
    {        
        register_setting(
            'pzforms_option_group', // Option group
            'pzforms_option_name', // Option name
            array('MySettingsPage', 'sanitize') // Callback
        );

        add_settings_section(
            'setting_section_id', // ID
            'Encryption Key and Email', // Title
            array( $this, 'print_section_info' ), // Callback
            'my-setting-admin' // Page
        );  

    

        add_settings_field(
            'pzforms_key', 
            'PZForms Key', 
            array( $this, 'pzforms_key_callback' ), 
            'my-setting-admin', 
            'setting_section_id'
        );      

        add_settings_field(
            'pzforms_email', 
            'Email where form submissions will be sent', 
            array( $this, 'pzforms_email_callback' ), 
            'my-setting-admin', 
            'setting_section_id'
        );     

        add_settings_field(
            'pzforms_recaptcha_secret_key',
            'reCAPTCHA Secret Key',
            array( $this, 'pzforms_recaptcha_secret_key_callback' ),
            'my-setting-admin',
            'setting_section_id'
        );
        add_settings_field(
            'pzforms_recaptcha_site_key',
            'reCAPTCHA Site Key',
            array( $this, 'pzforms_recaptcha_site_key_callback' ),
            'my-setting-admin',
            'setting_section_id'
        );
    }

    /**
     * Sanitize each setting field as needed
     *
     * @param array $input Contains all settings fields as array keys
     */
    public static function sanitize( $input )
    {
        // Verify nonce
        if (!isset($_POST['pzforms_nonce']) || !wp_verify_nonce(wp_unslash($_POST['pzforms_nonce']), 'pzforms_settings_nonce')) {
            add_settings_error('pzforms_messages', 'pzforms_message', __('Security check failed.', 'pzforms'), 'error');
            return get_option('pzforms_option_name'); // Return existing options
        }

        // Verify user capabilities
        if (!current_user_can('manage_options')) {
            add_settings_error('pzforms_messages', 'pzforms_message', __('You do not have sufficient permissions.', 'pzforms'), 'error');
            return get_option('pzforms_option_name'); // Return existing options
        }

        $new_input = array();

        if(isset($input['pzforms_key'])) {
            $new_input['pzforms_key'] = sanitize_text_field($input['pzforms_key']);
        }
        if(isset($input['pzforms_email'])) {
            $new_input['pzforms_email'] = sanitize_email($input['pzforms_email']);
        }
        if(isset($input['pzforms_recaptcha_secret_key'])) {
            $new_input['pzforms_recaptcha_secret_key'] = sanitize_text_field($input['pzforms_recaptcha_secret_key']);
        }
        if(isset($input['pzforms_recaptcha_site_key'])) {
            $new_input['pzforms_recaptcha_site_key'] = sanitize_text_field($input['pzforms_recaptcha_site_key']);
        }
        return $new_input;
    }

    /** 
     * Print the Section text
     */
    public function print_section_info()
    {
        print 'Enter pzForms settings below:';
    }

    

    /** 
     * Get the settings option array and print one of its values
     */
    public function pzforms_key_callback()
    {
        printf(
            '<input type="text" id="pzforms_key" name="pzforms_option_name[pzforms_key]" value="%s" />',
            isset( $this->options['pzforms_key'] ) ? esc_attr( $this->options['pzforms_key']) : ''
        );
    }

    public function pzforms_email_callback()
    {
        printf(
            '<input type="text" id="pzforms_email" name="pzforms_option_name[pzforms_email]" value="%s" />',
            isset( $this->options['pzforms_email'] ) ? esc_attr( $this->options['pzforms_email']) : ''
        );
    }	

    public function pzforms_recaptcha_secret_key_callback()
    {
        printf(
            '<input type="text" id="pzforms_recaptcha_secret_key" name="pzforms_option_name[pzforms_recaptcha_secret_key]" value="%s" />',
            isset( $this->options['pzforms_recaptcha_secret_key'] ) ? esc_attr( $this->options['pzforms_recaptcha_secret_key']) : ''
        );
    }

    public function pzforms_recaptcha_site_key_callback()
    {
        printf(
            '<input type="text" id="pzforms_recaptcha_site_key" name="pzforms_option_name[pzforms_recaptcha_site_key]" value="%s" />',
            isset( $this->options['pzforms_recaptcha_site_key'] ) ? esc_attr( $this->options['pzforms_recaptcha_site_key']) : ''
        );
    }

    // Add this new method
    public function register_rest_routes() {
        register_rest_route( 'pzforms/v1', '/recaptcha-site-key', array(
            'methods' => 'GET',
            'callback' => array( $this, 'get_recaptcha_site_key' ),
            'permission_callback' => '__return_true'
        ));
    }

    // Add this new method
    public function get_recaptcha_site_key() {
        $options = get_option('pzforms_option_name');
        $site_key = isset($options['pzforms_recaptcha_site_key']) ? $options['pzforms_recaptcha_site_key'] : '';
        return rest_ensure_response(array('siteKey' => $site_key));
    }
}

    $my_settings_page = new MySettingsPage();


    // Initialize the captcha handler
    $captcha = new PeakForms_Captcha();  


