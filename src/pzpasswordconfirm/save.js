import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    passwordPrompt,
    confirmPrompt,
    field_id,
    field_name,
    width,
    required,
    marginValues,
    paddingValues,
    showAsterisk,
  } = attributes;

  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div
        className="pz-password-confirm-wrapper"
        style={{
          width: width,
          margin: `${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left}`,
          padding: `${paddingValues.top} ${paddingValues.right} ${paddingValues.bottom} ${paddingValues.left}`,
        }}
      >
        <div className="pz-password-field">
          <label htmlFor={`${field_id}_password`}>
            {passwordPrompt}
            {required && showAsterisk && <span className="required">*</span>}
          </label>
          <input
            type="password"
            id={`${field_id}_password`}
            name={`${field_name}_password`}
            required={required}
            className="pz-password-input"
          />
        </div>
        <div className="pz-confirm-field">
          <label htmlFor={`${field_id}_confirm`}>
            {confirmPrompt}
            {required && showAsterisk && <span className="required">*</span>}
          </label>
          <input
            type="password"
            id={`${field_id}_confirm`}
            name={`${field_name}_confirm`}
            required={required}
            className="pz-confirm-input"
          />
        </div>
        <div className="pz-password-match-message"></div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                document.addEventListener('DOMContentLoaded', function() {
                    const passwordInput = document.getElementById('${field_id}_password');
                    const confirmInput = document.getElementById('${field_id}_confirm');
                    const messageDiv = passwordInput.closest('.pz-password-confirm-wrapper').querySelector('.pz-password-match-message');

                    function validatePasswords() {
                        const password = passwordInput.value;
                        const confirm = confirmInput.value;
                        
                        if (confirm.length === 0) {
                            messageDiv.textContent = '';
                            messageDiv.className = 'pz-password-match-message';
                            return;
                        }

                        if (password === confirm) {
                            messageDiv.textContent = 'Passwords match';
                            messageDiv.className = 'pz-password-match-message match';
                            confirmInput.setCustomValidity('');
                        } else {
                            messageDiv.textContent = 'Passwords do not match';
                            messageDiv.className = 'pz-password-match-message no-match';
                            confirmInput.setCustomValidity('Passwords do not match');
                        }
                    }

                    passwordInput.addEventListener('input', validatePasswords);
                    confirmInput.addEventListener('input', validatePasswords);
                });
                `,
        }}
      />
    </div>
  );
}
