<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET");
    include "connectDb.php";
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $sql = "SELECT * FROM moviedb.movie";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    if(isset($path[4])  && is_numeric($path[4])){
        $sql .= " WHERE id= :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id',$path[4]);
        $stmt->execute();
        $movie = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($movie);
        // return json_encode($movie);
    } else{
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $movies = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($movies);
    // return json_encode($movies);
    }
?>