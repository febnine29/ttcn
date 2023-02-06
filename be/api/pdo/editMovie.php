<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: PUT");
    include 'connectDb.php';
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $movie = json_decode(file_get_contents('php://input'));
    $sql = "UPDATE moviedb.movie SET title= :title,type=:type, 
    thumbnail= :thumbnail, trailer= :trailer, 
    description= :description WHERE id= :id";
    $stmt = $conn->prepare($sql); 
    $stmt->bindParam(':id', $movie->id);
    $stmt->bindParam(':type', $movie->type);
    $stmt->bindParam(':title', $movie->title);
    $stmt->bindParam(':thumbnail', $movie->thumbnail);
    $stmt->bindParam(':trailer', $movie->trailer);
    $stmt->bindParam(':description', $movie->description);
    
    if($stmt->execute()){
        http_response_code(201);
        echo 'Edit Movie Successfully';
    } else {
        http_response_code(500);
    }
?>