<?php
/**
 * Plugin Name:       pzForms
 * Description:       Standalone block-based form builder.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.1.1
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
    }

    /**
     * Add options page
     */
    public function add_plugin_page()
    {
        // This page will be under "Settings"
		add_options_page(
            'Peakforms Settings',     // page title
            'Peakforms',              // menu title
            'manage_options',         // capability
            'peakforms-settings',     // menu slug
            array( $this, 'create_admin_page' )  // callback
        );
    }

    /**
     * Options page callback
     */
    public function create_admin_page()
    {
        // Set class property
        $this->options = get_option( 'peakforms_option_name' );
        ?>
        <div class="wrap">
            <h1><?php echo esc_html__('pzForms Settings', 'pzforms'); ?></h1>
            <form method="post" action="options.php">
            <?php
                wp_nonce_field('peakforms_settings_nonce', 'peakforms_nonce');
                settings_fields( 'peakforms_option_group' );
                do_settings_sections( 'my-setting-admin' );
                submit_button();
            ?>
            </form>
            <h2><?php echo esc_html__('Getting Started', 'pzforms'); ?></h2>
            <p><?php echo esc_html__('Welcome to Peakforms! This plugin is designed to help you create beautiful, responsive forms using the WordPress block editor and blocks that implement each form field type. Follow the steps below to get started:', 'pzforms'); ?></p>
            <ol>
                <li><?php echo esc_html__('Set the configurations above.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('(coming soon) The encryption key is used to encrypt any local JavaScript you create to verify or process data entered in some fields.', 'pzforms'); ?></li>    
                <li><?php echo esc_html__('The email field lets you enter the email address where form submissions will be sent.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Create a new post or page.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Add a new PZ Form Wrapper block to the page where you\'d like the form to appear.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Inside the dotted lines that mark the area of the PZ Form Wrapper block, add field blocks.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('You can of course add any field blocks as you\'d like, but pretty much any other block as well.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Configure the settings for each.', 'pzforms'); ?></li>
                <li><?php echo esc_html__('Repeat until the form is the way you want it.', 'pzforms'); ?></li>
            </ol>
            <h2><?php echo esc_html__('Creating Functions', 'pzforms'); ?></h2>
            <p>
                <?php 
                echo wp_kses(
                    sprintf(
                        /* translators: %s: URL to Peak Functions admin page */
                        __('Functions are used to process data on submission. They are created in the <a href="%s">Peak Functions</a> post type.', 'pzforms'),
                        esc_url(admin_url('edit.php?post_type=peakfunctions'))
                    ),
                    array(
                        'a' => array('href' => array())
                    )
                );
                ?>
            </p>
        </div>
        <?php
    }

    /**
     * Register and add settings
     */
    public function page_init()
    {        
        register_setting(
            'peakforms_option_group', // Option group
            'peakforms_option_name', // Option name
            array('MySettingsPage', 'sanitize') // Callback
        );

        add_settings_section(
            'setting_section_id', // ID
            'Encryption Key and Email', // Title
            array( $this, 'print_section_info' ), // Callback
            'my-setting-admin' // Page
        );  

    

        add_settings_field(
            'peakforms_key', 
            'Peakforms Key', 
            array( $this, 'peakforms_key_callback' ), 
            'my-setting-admin', 
            'setting_section_id'
        );      

        add_settings_field(
            'peakforms_email', 
            'Email where form submissions will be sent', 
            array( $this, 'peakforms_email_callback' ), 
            'my-setting-admin', 
            'setting_section_id'
        );     

        add_settings_field(
            'peakforms_recaptcha_secret_key',
            'reCAPTCHA Secret Key',
            array( $this, 'peakforms_recaptcha_secret_key_callback' ),
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
        if (!isset($_POST['peakforms_nonce']) || !wp_verify_nonce(wp_unslash($_POST['peakforms_nonce']), 'peakforms_settings_nonce')) {
            add_settings_error('peakforms_messages', 'peakforms_message', __('Security check failed.', 'pzforms'), 'error');
            return get_option('peakforms_option_name'); // Return existing options
        }

        // Verify user capabilities
        if (!current_user_can('manage_options')) {
            add_settings_error('peakforms_messages', 'peakforms_message', __('You do not have sufficient permissions.', 'pzforms'), 'error');
            return get_option('peakforms_option_name'); // Return existing options
        }

        $new_input = array();

        if(isset($input['peakforms_key'])) {
            $new_input['peakforms_key'] = sanitize_text_field($input['peakforms_key']);
        }
        if(isset($input['peakforms_email'])) {
            $new_input['peakforms_email'] = sanitize_email($input['peakforms_email']);
        }
        if(isset($input['peakforms_recaptcha_secret_key'])) {
            $new_input['peakforms_recaptcha_secret_key'] = sanitize_text_field($input['peakforms_recaptcha_secret_key']);
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
    public function peakforms_key_callback()
    {
        printf(
            '<input type="text" id="peakforms_key" name="peakforms_option_name[peakforms_key]" value="%s" />',
            isset( $this->options['peakforms_key'] ) ? esc_attr( $this->options['peakforms_key']) : ''
        );
    }

    public function peakforms_email_callback()
    {
        printf(
            '<input type="text" id="peakforms_email" name="peakforms_option_name[peakforms_email]" value="%s" />',
            isset( $this->options['peakforms_email'] ) ? esc_attr( $this->options['peakforms_email']) : ''
        );
    }	

    public function peakforms_recaptcha_secret_key_callback()
    {
        printf(
            '<input type="text" id="peakforms_recaptcha_secret_key" name="peakforms_option_name[peakforms_recaptcha_secret_key]" value="%s" />',
            isset( $this->options['peakforms_recaptcha_secret_key'] ) ? esc_attr( $this->options['peakforms_recaptcha_secret_key']) : ''
        );
    }
}

    $my_settings_page = new MySettingsPage();


    // Initialize the captcha handler
    $captcha = new PeakForms_Captcha();  


