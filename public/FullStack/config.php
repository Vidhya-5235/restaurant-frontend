<?php
$server = "localhost";  // Server name (localhost for XAMPP)
$username = "root";     // Default username for XAMPP
$password = "";         // Default password is empty in XAMPP
$dbname = "user_db";    // Your database name

// Create connection
$conn = new mysqli($server, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>