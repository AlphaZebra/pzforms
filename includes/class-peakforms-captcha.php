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
        if (empty($data['g-recaptcha-response'])) {
            $errors[] = __('Please complete the reCAPTCHA challenge.', 'pzforms');
            return $errors;
        }

        $request_body = array(
            'secret' => sanitize_text_field($this->secret_key),
            'response' => sanitize_text_field($data['g-recaptcha-response']),
            'remoteip' => isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : ''
        );

        $response = wp_remote_post('https://www.google.com/recaptcha/api/siteverify', array(
            'body' => $request_body
        ));

        // Check for API errors
        if (is_wp_error($response)) {
            $errors[] = __('Failed to verify reCAPTCHA response.', 'pzforms');
            return $errors;
        }

        $body = wp_remote_retrieve_body($response);
        $result = json_decode($body, true);

        // Validate the response
        if (empty($result['success'])) {
            $errors[] = __('reCAPTCHA verification failed. Please try again.', 'pzforms');
        }

        return $errors;
    }
} 