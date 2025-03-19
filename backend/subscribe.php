<?php

// get get request with email subscriber to newsletter and insert it into the newsletter table (id, email)
// use pdo
$email = $_GET['email'];	

$dsn ='mysql:host=sql100.ezyro.com;dbname=ezyro_38550468_subscribers';
$username = 'ezyro_38550468';
$password = '1674cbd7';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // first check for existing of email in subscribers table
    $stmt = $pdo->prepare('SELECT consent FROM subscribers WHERE email = :email');
    $stmt->execute([':email' => $email]);
    $count = $stmt->fetch();
   
    if ($count) {
        if ($count['consent'] == 1) {
            // email already exists in subscribers table
            echo json_encode(['error' => 'Email subscribed.']);
        } else {
            // email already exists in subscribers table but consent is not granted
            echo json_encode(['error' => 'Email subscribed but consent not granted. Check your email']);
        }
        
        exit;
    }
    // generate random consent code
    $consentCode = bin2hex(random_bytes(10));
    $stmt = $pdo->prepare('INSERT INTO subscribers (email, consent_code) VALUES (:email, :consentCode)');
    $success = $stmt->execute([':email' => $email, ':consentCode' => $consentCode]);

    // return json response with success response
    echo json_encode(['success' => $success]);
} catch (PDOException $e) {
    // return json response with error message
    echo json_encode(['error' => $e->getMessage()]);
}