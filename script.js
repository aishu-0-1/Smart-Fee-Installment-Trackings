<div class="login-box">
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
