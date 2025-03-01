<?php
/**
 * Premium features check for PZForms
 *
 * @package pzforms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Check if premium features are enabled
 *
 * @return bool Always returns true for now
 */
function pz_check_license() {
    global $is_premium;
    $is_premium = true;
    return true;
} 