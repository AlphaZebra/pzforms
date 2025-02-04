<?php

 /**
   * Handle form submissions (from all forms)
   */

/**
 * Register form handler
 */
add_action('admin_post_do-form', 'do_form');
add_action('admin_post_nopriv_do-form', 'do_form');

/** 
 * utility function to find Russian language messages, which are invariably spam
 */
function isRussian($text) {
    return preg_match('/[А-Яа-яЁё]/u', $text);
}

/**
 * Form handler
 */
function do_form () {
	$captcha = new PeakForms_Captcha();
	
	$errors = array();
	if( $errors = $captcha->validate_captcha( $errors, $_POST ) ) {

		$errorURL = isset($_POST['errorURL']) ? $_POST['errorURL'] : '';
		wp_redirect( $errorURL || '/' );
		exit;
	}



	
	// add hook for user customization
	$_POST = apply_filters( 'pz_pre_form_processing', $_POST );


	$_POST = wp_unslash( $_POST ); // wordpress escapes form input, sigh... so we remove the slashes
	extract( $_POST, EXTR_OVERWRITE ); // let's break the form input into separate variables

	// this php-code-in-form capability is not currently used in pzGather, but is used in pzForm
	if( isset( $_POST['phpFunctionName']) ) {
		if( $_POST['phpFunctionName'] != "" ) {
			// get function record from pz_function   WHERE function_name = $_POST['phpFunctionName']
			$temp = $_POST['phpFunctionName'];
			$results = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}pz_function WHERE function_name = '$temp'", ARRAY_A );
			eval( $results[0]['function_text'] ); // and evaluate the code written by the form creator (not the end user)

			}
		}

    // let's get the encryption key and email from the database
    $options = get_option('peakforms_option_name');
    $encryption_key = isset($options['peakforms_key']) ? $options['peakforms_key'] : '';
    $email = isset($options['peakforms_email']) ? $options['peakforms_email'] : '';
	
	// Get rid of the g-recaptcha-response field
	unset($_POST['g-recaptcha-response']);

	// send an email if the form included a send-to address
	if( isset($email) && $email != '' ) {
		$message = json_encode( $_POST );
		$subject = "Form data from " . $_POST['formName'];
		wp_mail( $email, $subject, $message );
	}

	hook_and_redirect( 0, $_POST['successURL'] );
      

	}  

function hook_and_redirect( $id, $url ) {
	if( $id != 0 ) {
		// add hook for user customization
		do_action( 'pz_data_written', $id );
	}
	

	$redirectURL = apply_filters( 'pz_filter_redirectURL', $url );
	if( isset( $redirectURL ) && $redirectURL != '' ) {
		wp_redirect( $redirectURL );
		exit;
	} else if (isset($url)) {
		wp_redirect( $url);
		exit;
	} else {
		wp_redirect( '/'  );
		exit;
	}

}

