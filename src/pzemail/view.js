document.addEventListener("DOMContentLoaded", function () {
	const emailInputs = document.querySelectorAll('input[type="email"]');

	function validateEmail(email) {
		const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return re.test(String(email).toLowerCase());
	}

	emailInputs.forEach(function (input) {
		const warningElement = document.getElementById(`${input.id}-warning`);

		input.addEventListener("blur", function () {
			if (this.value && !validateEmail(this.value)) {
				warningElement.style.display = "block";
				this.style.borderColor = "#dc3232";
			} else {
				warningElement.style.display = "none";
				this.style.borderColor = "";
			}
		});

		input.addEventListener("input", function () {
			if (validateEmail(this.value) || !this.value) {
				warningElement.style.display = "none";
				this.style.borderColor = "";
			}
		});
	});
});
