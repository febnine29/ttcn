<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET");
    include "connectDb.php";
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $check = json_decode(file_get_contents('php://input'));
    $sql = "SELECT * FROM moviedb.userdb";
    $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql .= " WHERE username= :username ";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username',$check->username);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if($user != false){
            http_response_code(200);
            echo json_encode($user);
        } else {
            http_response_code(404);
        }
        // if($stmt->execute()){
        //     http_response_code(200);
        //     echo json_encode($user);
        // } else {
        //     http_response_code(500);
        // }