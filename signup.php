<?php
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
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password']; // You should hash the password for security, use password_hash() function

// Check if the email already exists
$email_check_query = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($email_check_query);
if ($result->num_rows > 0) {
    // Account already exists
    echo "Error: This email is already registered.";
    exit();
}

// Insert user data into the database
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    // Registration successful
    // Redirect to the account page
    header("Location: login.html");
    exit(); // Make sure no other output is sent
} else {
    // If there was an error during registration, display an error message
    echo "Error: " . $sql . "<br>" . $conn->error;
}

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$conn->close();
?>
