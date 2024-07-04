<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root"; // Change to your MySQL username if different
$password = "";     // Change to your MySQL password if set
$dbname = "brewery_accounts"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$emailPhone = $_POST['email_phone'];
$password = $_POST['password'];

// Check if the user exists in the database
$sql = "SELECT * FROM users WHERE (email = '$emailPhone' OR phone = '$emailPhone') AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // User exists, set session variables
    $_SESSION['loggedin'] = true;
    $_SESSION['email_phone'] = $emailPhone;
    
    // Redirect to accounts page
    header("Location: home.html");
    exit();
} else {
    // User does not exist or password is incorrect
    echo "Invalid email/phone or password. Please try again.";
}

$conn->close();
?>
