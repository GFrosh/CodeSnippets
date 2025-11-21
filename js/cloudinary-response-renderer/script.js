let responseObject;
const formElement = document.getElementById("upload-form");
const outputElement = document.querySelector(".value");
const CLOUD_NAME = "dkvtqbj4p";
const UPLOAD_PRESET = "demo-preset";



// RENDER FUNCTION
const renderResponse = (obj) => {
	// Clear old content
	outputElement.innerHTML = "";

	// Loop through each key-value pair
	Object.entries(obj).forEach(([key, value]) => {
		const wrapper = document.createElement("div");
		wrapper.classList.add("response-item");

		// Key
		const keyEl = document.createElement("h4");
		keyEl.textContent = key;

		// Value
		const valueEl = document.createElement("pre");
		valueEl.textContent = formatValue(value);

		// Appendicitis 🤭
		wrapper.append(keyEl, valueEl);
		outputElement.append(wrapper);
	});
};



// FORMAT THE NESTED ELEMENTS
const formatValue = (val) => {
	if (typeof val === "object") {
		return JSON.stringify(val, null, 2);
	}
	return String(val);
};

// UPLOAD BLOCK
document.getElementById("upload-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	const fileInput = document.getElementById("fileInput");
	const file = fileInput.files[0];

	const formData = new FormData();
	formData.append("file", file);
	formData.append("upload_preset", UPLOAD_PRESET);
  

	const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
		method: "POST",
		body: formData
	});

	const data = await res.json();
	console.log(data);
	renderResponse(data);


  document.getElementById("upload-form").reset();
});
