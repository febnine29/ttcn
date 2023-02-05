<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST");
    include 'connectDb.php';
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $movie = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO moviedb.movie(id, title, type, thumbnail, trailer, description) VALUES(null, :title, :type, :thumbnail, :trailer, :description)";
    $stmt = $conn->prepare($sql); 
    $stmt->bindParam(':title', $movie->title);
    $stmt->bindParam(':type', $movie->type);
    $stmt->bindParam(':thumbnail', $movie->thumbnail);
    $stmt->bindParam(':trailer', $movie->trailer);
    $stmt->bindParam(':description', $movie->description);
    // if($stmt->rowCount() < 4){
    //     http_response_code(415);
    //     echo 'Missing some fields';
    // }
    // else 
    if($stmt->execute()){
        http_response_code(201);
        echo 'Save Movie Successfully';
    } else {
        http_response_code(500);
    }
?>