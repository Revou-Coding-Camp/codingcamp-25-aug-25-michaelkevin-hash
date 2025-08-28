function askUserName() {
    let name = prompt("What's your name?");
    if (name) {
        document.getElementById("welcome-text").innerText = `Hi ${name}, Welcome To Website`;
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let message = document.getElementById("messageText").value;

    if (!name || !dob || !message) {
        alert("Please fill in all fields.");
        return false;
    }

    let result = `
        <strong>Form Data:</strong><br>
        Name: ${name}<br>
        Date of Birth: ${dob}<br>
        Gender: ${gender}<br>
        Message: ${message}
    `;

    document.getElementById("result").innerHTML = result;
    return false; // Prevent actual form submission
}
