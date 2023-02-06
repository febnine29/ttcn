<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET");
    include "connectDb.php";
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $login = json_decode(file_get_contents('php://input'));
    $sql = "SELECT * FROM moviedb.auth";
    $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql .= " WHERE username= :username AND password= :password AND accessToken= :accessToken ";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username',$login->username);
        $stmt->bindParam(':password',$login->password);
        $stmt->bindParam(':accessToken',$login->accessToken);
        $stmt->execute();
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($stmt->execute()){
            http_response_code(200);
            echo json_encode($admin);
        } else {
            http_response_code(500);
        }
?>