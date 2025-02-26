document.addEventListener("DOMContentLoaded", function () {
  const rangeInputs = document.querySelectorAll('input[type="range"]');

  rangeInputs.forEach(function (slider) {
    const output = document.getElementById(`${slider.dataset.rangeId}-output`);
    if (output) {
      // Set initial value
      output.textContent = slider.value;

      // Update value on input event for real-time updates
      slider.addEventListener("input", function () {
        output.textContent = this.value;
      });
    }
  });
});
