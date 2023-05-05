const counterElement = document.getElementById("counter");
		const addButton = document.getElementById("addButton");
		const subtractButton = document.getElementById("subtractButton");

		// Retrieve the counter value from localStorage, or set to 0 if it doesn't exist
		let counterValue = localStorage.getItem("counter") || 0;
		counterElement.textContent = counterValue;

		addButton.addEventListener("click", () => {
			counterValue++;
			counterElement.textContent = counterValue;
			localStorage.setItem("counter", counterValue);
		});

		subtractButton.addEventListener("click", () => {
			counterValue--;
			counterElement.textContent = counterValue;
			localStorage.setItem("counter", counterValue);
		});