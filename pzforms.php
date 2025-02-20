<?php
/**
 * Plugin Name:       pzForms
 * Description:       Standalone block-based form builder.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            PeakZebra / Robert Richardson
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       peakzebra
 *
 * @package peakzebra
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
			register_block_type( $block_folder );
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
            'title' => __( 'PeakZebra', 'peakzebra' ),
            'icon'  => null,
        )
    );
    return $block_categories;
}
add_filter( 'block_categories_all', 'filter_block_categories', 10, 2 );



// create a new post type called "peakfunctions"
function create_peakfunctions_post_type() {
	if (!current_user_can('manage_options')) {
		return;
	}
	register_post_type( 'peakfunctions',
		array(
			'labels' => array(
				'name' => __( 'Peak Functions' ),
				'singular_name' => __( 'Peak Function' ),
				'add_new' => __( 'Add New' ),
				'add_new_item' => __( 'Add New Peak Function' ),
				'edit_item' => __( 'Edit Peak Function' ),
				'new_item' => __( 'New Peak Function' ),
				'view_item' => __( 'View Peak Function' ),
				'search_items' => __( 'Search Peak Functions' ),
				'not_found' => __( 'No peak functions found' ),
				'not_found_in_trash' => __( 'No peak functions found in trash' )
			),
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'supports' => array( 'title', 'editor' ),
			'menu_position' => 99,
		)
	);
	
}
add_action( 'init', 'create_peakfunctions_post_type' );

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
            <h1>pzForms Settings</h1>
            <form method="post" action="options.php">
            <?php
                // This prints out all hidden setting fields
                settings_fields( 'peakforms_option_group' );
                do_settings_sections( 'my-setting-admin' );
                submit_button();
            ?>
            </form>
            <h2>Getting Started</h2>
            <p>Welcome to Peakforms! This plugin is designed to help you create beautiful, responsive forms using the WordPress block editor and blocks that implement each
                form field type. Follow the steps below to get started:</p>
            <ol>
                <li>Set the configurations above.</li>
                <li>(coming soon) The encryption key is used to encrypt any local JavaScript you create to verify or process data entered in some fields.</li>    
                <li>The email field lets you enter the email address where form submissions will be sent.</li>
                <li>Create a new post or page.</li>
                <li>Add a new PZ Form Wrapper block to the page where you'd like the form to appear.</li>
                <li>Inside the dotted lines that mark the area of the PZ Form Wrapper block, add field blocks.</li>
                <li>You can of course add any field blocks as you'd like, but pretty much any other block as well.</li>
                <li>Configure the settings for each.</li>
                <li>Repeat until the form is the way you want it.</li>
            </ol>
            <h2>Creating Functions</h2>
            <p>Functions are used to process data on submission. They are created in the <a href="<?php echo admin_url( 'edit.php?post_type=peakfunctions' ); ?>">Peak Functions</a> post type.</p>
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
            array( $this, 'sanitize' ) // Sanitize
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
    public function sanitize( $input )
    {
        $new_input = array();

        if( isset( $input['peakforms_key'] ) )
            $new_input['peakforms_key'] = sanitize_text_field( $input['peakforms_key'] );
        if( isset( $input['peakforms_email'] ) )
            $new_input['peakforms_email'] = sanitize_text_field( $input['peakforms_email'] );
        if( isset( $input['peakforms_recaptcha_secret_key'] ) )
            $new_input['peakforms_recaptcha_secret_key'] = sanitize_text_field( $input['peakforms_recaptcha_secret_key'] );
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


