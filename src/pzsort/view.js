document.addEventListener("DOMContentLoaded", function () {
	let items = document.querySelectorAll("#items-list > li");

	items.forEach((item) => {
		item.draggable = true;
		item.addEventListener("dragstart", dragStart);
		item.addEventListener("drop", dropped);
		item.addEventListener("dragenter", cancelDefault);
		item.addEventListener("dragover", cancelDefault);
	});

	function dragStart(e) {
		// Get the index of the dragged item relative to its siblings
		let items = Array.from(e.target.parentNode.children);
		let index = items.indexOf(e.target);
		e.dataTransfer.setData("text/plain", index);
	}

	function dropped(e) {
		cancelDefault(e);

		// Get the dragged item's index from the dataTransfer
		let oldIndex = parseInt(e.dataTransfer.getData("text/plain"));
		let items = document.querySelectorAll("#items-list > li");
		let draggedItem = items[oldIndex];

		// Remove the dragged item from its original position
		draggedItem.parentNode.removeChild(draggedItem);

		// Insert before or after the drop target based on position
		if (e.offsetY < e.target.offsetHeight / 2) {
			e.target.parentNode.insertBefore(draggedItem, e.target);
		} else {
			e.target.parentNode.insertBefore(draggedItem, e.target.nextSibling);
		}
	}

	function cancelDefault(e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	// This is to save the sorted items to the form

	const form = document.querySelector('form:has(input[name="formName"])');
	const itemsList = document.querySelector("#items-list");
	const fieldName = itemsList.dataset.slug || "sorted_items"; // Fallback if slug not set

	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();

			const sortedItems = Array.from(itemsList.children).map((item) => {
				return item.textContent
					.trim()
					.replace(/\\/g, "\\\\")
					.replace(/"/g, '\\"');
			});

			const hiddenInput = document.createElement("input");
			hiddenInput.type = "hidden";
			hiddenInput.name = fieldName;
			hiddenInput.value = JSON.stringify(sortedItems);

			const existingInput = form.querySelector(`input[name="${fieldName}"]`);
			if (existingInput) {
				existingInput.remove();
			}

			form.appendChild(hiddenInput);
			form.submit();
		});
	} else {
		console.error("Form not found!");
	}
});
