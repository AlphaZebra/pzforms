<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueues scripts and localizes data for PZForms
 */
function pzforms_enqueue_scripts() {
    // Enqueue the main script
    wp_enqueue_script(
        'pzforms-script',
        plugins_url('../build/pzformwrap/index.js', __FILE__),
        array('wp-blocks', 'wp-element'),
        '1.0.0',
        true
    );

    // Localize the script with new data
    wp_localize_script(
        'pzforms-script',
        'pzforms_submit',  
        array(
            'nonce' => wp_create_nonce('do_form','pzforms_submit'),
            'adminUrl' => admin_url('admin-post.php')
        )
    );
}
// Add to both frontend and editor contexts
add_action('wp_enqueue_scripts', 'pzforms_enqueue_scripts');
add_action('enqueue_block_editor_assets', 'pzforms_enqueue_scripts'); 