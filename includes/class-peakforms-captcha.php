<?php
/**
 * Handles reCAPTCHA validation
 */
class PeakForms_Captcha {
    /**
     * The reCAPTCHA secret key
     */
    private $secret_key;

    /**
     * Constructor
     */
    public function __construct() {
        // Get the options array
        $options = get_option('peakforms_option_name', array());
        
        // Get the secret key from the options array
        $this->secret_key = isset($options['peakforms_recaptcha_secret_key']) 
            ? $options['peakforms_recaptcha_secret_key'] 
            : '';
        
        error_log('Secret key retrieved: ' . (empty($this->secret_key) ? 'EMPTY' : 'NOT EMPTY'));
        
        // Add filter to validate form submission
        add_filter('peakforms_validate_submission', array($this, 'validate_captcha'), 10, 2);
    }

    /**
     * Validates the reCAPTCHA response
     * 
     * @param array $errors Current validation errors
     * @param array $data Form submission data
     * @return array Updated validation errors
     */
    public function validate_captcha($errors, $data) {
        error_log('Starting reCAPTCHA validation');
        error_log('All POST data: ' . print_r($_POST, true));
        error_log('Data passed to validate_captcha: ' . print_r($data, true));
        
        if (empty($data['g-recaptcha-response'])) {
            error_log('No reCAPTCHA response found in data');
            $errors[] = __('Please complete the reCAPTCHA challenge.', 'peakforms');
            return $errors;
        }

        // Log the exact values we're about to send
        $request_body = array(
            'secret' => $this->secret_key,
            'response' => sanitize_text_field($data['g-recaptcha-response']),
            'remoteip' => $_SERVER['REMOTE_ADDR']
        );
        error_log('Request body being sent to Google: ' . print_r($request_body, true));

        $response = wp_remote_post('https://www.google.com/recaptcha/api/siteverify', array(
            'body' => $request_body
        ));

        // Check for API errors
        if (is_wp_error($response)) {
            error_log('WP Error in reCAPTCHA verification: ' . $response->get_error_message());
            $errors[] = __('Failed to verify reCAPTCHA response.', 'peakforms');
            return $errors;
        }

        $body = wp_remote_retrieve_body($response);
        $result = json_decode($body, true);

        error_log('Decoded response from Google: ' . print_r($result, true));

        // Validate the response
        if (empty($result['success'])) {
            $errors[] = __('reCAPTCHA verification failed. Please try again.', 'peakforms');
            $error_codes = isset($result['error-codes']) ? implode(', ', $result['error-codes']) : '';
            error_log('reCAPTCHA verification failed. Error codes: ' . $error_codes);
        }

        return $errors;
    }
} 