/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/pzcaptcha/view.js ***!
  \*******************************/
/* global grecaptcha */

document.addEventListener("DOMContentLoaded", function () {
  // Load the reCAPTCHA script dynamically
  const loadRecaptchaScript = async () => {
    const recaptchaBlocks = document.querySelectorAll(".wp-block-pzforms-pzcaptcha");
    if (!recaptchaBlocks.length) return;

    // Get the site key from the first block's data attribute
    const siteKey = recaptchaBlocks[0].dataset.sitekey;

    // Validate site key format (should be a string of ~40 characters)
    if (!siteKey || !/^[A-Za-z0-9_-]{30,50}$/.test(siteKey)) {
      recaptchaBlocks.forEach(block => {
        block.innerHTML = '<p class="components-placeholder__error">Invalid reCAPTCHA site key format.</p>';
      });
      return;
    }

    // Load the reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?onload=pzCaptchaOnload&render=explicit`;
    script.async = true;
    script.defer = true;

    // Define the callback function that Google will call when API is ready
    window.pzCaptchaOnload = function () {
      try {
        // Initialize each reCAPTCHA block
        recaptchaBlocks.forEach(block => {
          const size = block.dataset.size || "normal";
          const theme = block.dataset.theme || "light";

          // Create a container for the reCAPTCHA
          const container = document.createElement("div");
          block.appendChild(container);

          // Render the reCAPTCHA
          grecaptcha.render(container, {
            sitekey: siteKey,
            size: size,
            theme: theme,
            callback: token => {
              console.log("reCAPTCHA callback received token:", token);
              // Create a hidden input to store the token
              let input = block.querySelector('input[name="g-recaptcha-response"]');
              if (!input) {
                input = document.createElement("input");
                input.type = "hidden";
                input.name = "g-recaptcha-response";
                block.appendChild(input);
                console.log("Created new hidden input for token");
              }
              input.value = token;
              console.log("Token stored in hidden input");
            },
            "error-callback": () => {
              console.error("reCAPTCHA error occurred");
            }
          });
        });
      } catch (error) {
        console.error("Error initializing reCAPTCHA:", error);
        recaptchaBlocks.forEach(block => {
          block.innerHTML = '<p class="components-placeholder__error">Error initializing reCAPTCHA. Please check your site key.</p>';
        });
      }
    };
    script.onerror = () => {
      recaptchaBlocks.forEach(block => {
        block.innerHTML = '<p class="components-placeholder__error">Failed to load reCAPTCHA script.</p>';
      });
    };
    document.head.appendChild(script);
  };
  loadRecaptchaScript();
});
/******/ })()
;
//# sourceMappingURL=view.js.map