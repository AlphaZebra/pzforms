<?php
/**
 * Render the block content.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 */

// Generate a nonce for this form
$nonce = wp_create_nonce('do-form');

?>


        <input type="hidden" name="pzforms_nonce" value="<?php echo esc_attr($nonce); ?>">
        


