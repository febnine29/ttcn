<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET");
    include "connectDb.php";
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $sql = "SELECT * FROM moviedb.userdb";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    if(isset($path[4])  && is_numeric($path[4])){
        $sql .= " WHERE id= :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id',$path[4]);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($user);
    } else{
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);}
?>