<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST");
    include 'connectDb.php';
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $user = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO moviedb.userdb(id, username, password, email, fullname, accessToken) VALUES(null, :username, :password, :email, :fullname, :accessToken)";
    $stmt = $conn->prepare($sql); 
    $stmt->bindParam(':username', $user->username);
    $stmt->bindParam(':password', $user->password);
    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':fullname', $user->fullname);
    $stmt->bindParam(':accessToken', $user->accessToken);
    // if($stmt->rowCount() < 4){
    //     http_response_code(415);
    //     echo 'Missing some fields';
    // }
    // else 
    if($stmt->execute()){
        http_response_code(201);
        echo 'Registered successfully!';
    } else {
        http_response_code(500);
    }
?>