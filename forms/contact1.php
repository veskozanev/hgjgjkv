<?php
// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validate form data
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("HTTP/1.1 400 Bad Request");
        exit("Please complete all required fields.");
    }

    // Set email recipient
    $to = "scrtempire@gmail.com";

    // Set email subject and body
    $subject = "New Contact Form Submission from $name";
    $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";

    // Set email headers
    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        header("HTTP/1.1 200 OK");
    } else {
        header("HTTP/1.1 500 Internal Server Error");
    }
}
?>