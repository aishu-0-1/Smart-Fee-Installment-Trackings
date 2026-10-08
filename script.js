<div class="login-box">
    function login() {
    let usn = document.getElementById("usn").value;
    let password = document.getElementById("password").value;

    if (usn === "003" && password === "1234") {
    document.getElementById("loginMessage").innerHTML =
        "✅ Login successful!";

    document.getElementById("dashboard").style.display = "block";
}
    } else {
        document.getElementById("loginMessage").innerHTML =
            "❌ Invalid Student ID or Password.";
    }
}
    <h2>Student Login</h2>

    <input type="text" id="usn" placeholder="Enter Student ID">

    <input type="password" id="password" placeholder="Enter Password">

    <button onclick="login()">Login</button>

    <p id="loginMessage"></p>
</div>

function showNotification() {
    alert(
        "Fee Payment Notification\n\n" +
        "Payment information has been updated.\n" +
        "Remaining Balance: ₹2,00,000"
    );
}
