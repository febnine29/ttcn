<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: DELETE");
    include "connectDb.php";
    $objDb = new connectDb;
    $conn = $objDb->connect();

    $sql = "DELETE FROM moviedb.movie WHERE id = :id";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $path[5]);

    if($stmt->execute()){
        $response = ['status' => 200, 'message' => 'Deleted successfully'];
    } else {
        $response = ['status' => 401, 'message' => 'Delete failed'];
    }
?>