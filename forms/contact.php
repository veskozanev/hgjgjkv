<?php 


 


  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $subject = $_POST['subject'];
    // Validate form data
    $errors = array();
    if (empty($name)) {
      $errors[] = "Name is required";
    }
    if (empty($email)) {
      $errors[] = "Email is required";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = "Invalid email format";
    }
    if (empty($subject)) {
      $errors[] = "Subject is required";
    }
    if (empty($message)) {
      $errors[] = "Message is required";
    }
  
    // Send email if no errors
    if (empty($errors)) {
        $to = "ipirinska18@gmail.com";//$to = "ipirinska18@gmail.com"; // Replace with your own email address 
        $subject = "Subject $subject - New message from $name";
        $body = "Name: $name\nEmail: $email\n\n$message";
        $headers = "From: $email";
      
        if (mail($to, $subject, $body, $headers)) {
            
            //unset($_POST['name']); 
            //unset($_POST['email']); 
            //unset($_POST['message']); 
            //unset($_POST['subject']); 
            echo "Thank you for your message!"; 

        } else {
            echo "An error occurred. Please try again later.";
        }

    } else {
      echo implode("<br>", $errors);
    }
  }
 
 


/*

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

*/
?>
