const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submit");

const STORAGE_KEY = "lastMessageSent";


/**
 * Create a random 9 digit number
 * @returns {number}
 */
function createRandomRefNumber() {
    return Math.ceil(Math.random() * 1000000000);
}


/**
 * Create and show a confirmation message
 */
function getConfirmation() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    console.log(savedMessage)
    if (savedMessage !== null) {
        const confirmation = document.getElementById("confirmation");
        confirmation.innerHTML = `
            <h2>Thank you for your message!</h2>
            <p>Your reference number is: ${createRandomRefNumber()}</p> 
            <p>You sent us the following:</p>
            <p>Name: ${savedMessage.name}</p>
            <p>Email: ${savedMessage.email}</p>
            <p>Message: ${savedMessage.message}</p>`
    }
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the user's data
    const userName = name.value;
    const userEmail = email.value;
    const userMessage = message.value;

    // Put the data in an object for storage
    const toStore = {
        name: userName,
        email: userEmail,
        message: userMessage
    }
    // Store the data
    localStorage.setItem(STORAGE_KEY, toStore);

    // Clear the form fields
    name.value = "";
    email.value = "";
    message.value = "";

    // Show a confirmation message
    getConfirmation();
});

getConfirmation();