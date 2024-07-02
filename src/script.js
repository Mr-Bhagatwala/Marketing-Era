const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const courseInput = document.getElementById('course');
const dateInput = document.getElementById('date');
const genderInput = document.getElementById('Gender');
const registerButton = document.getElementById('register-btn');

// add a click event listener to the register button
registerButton.addEventListener('click', function(event) {
	event.preventDefault();
	if (validateForm()) {
		alert('Registration successful!');
	}
});

// validate the form fields
function validateForm() {
	let isValid = true;
	// check if name is valid
	if (!nameInput.value.trim()) {
		isValid = false;
		setError(nameInput, 'Please enter your name');
	} else {
		setSuccess(nameInput);
	}
	// check if email is valid
	if (!emailInput.value.trim()) {
		isValid = false;
		setError(emailInput, 'Please enter your email');
	} else if (!isValidEmail(emailInput.value.trim())) {
		isValid = false;
		setError(emailInput, 'Please enter a valid email');
	} else {
		setSuccess(emailInput);
	}
	// check if phone number is valid
	if (!phoneInput.value.trim()) {
		isValid = false;
		setError(phoneInput, 'Please enter your phone number');
	} else if (!isValidPhone(phoneInput.value.trim())) {
		isValid = false;
		setError(phoneInput, 'Please enter a valid phone number');
	} else {
		setSuccess(phoneInput);
	}
	// check if course is selected
	if (!courseInput.value) {
		isValid = false;
		setError(courseInput, 'Please select a course');
	} else {
		setSuccess(courseInput);
	}
	// check if date is selected
	if (!dateInput.value) {
		isValid = false;
		setError(dateInput, 'Please select a date');
	} else {
		setSuccess(dateInput);
	}
	// check if time is selected
	if (!genderInput.value) {
		isValid = false;
		setError(genderInput, 'Please select a Gender');
	} else {
		setSuccess(genderInput);
	}
	return isValid;
}

// set the field error message and style
function setError(field, message) {
	field.classList.add('error');
	const errorElem = document.createElement('p');
	errorElem.classList.add('error-message');
	errorElem.innerText = message;
	field.parentNode.insertBefore(errorElem, field.nextSibling);
}

// remove the field error message and style
function setSuccess(field) {
	field.classList.remove('error');
	const errorElem = field.parentNode.querySelector('.error-message');
	if (errorElem) {
		errorElem.remove();
	}
}

// validate email format
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// validate phone number format
function isValidPhone(phone) {
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phone);
}
