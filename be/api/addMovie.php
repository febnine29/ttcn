<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST");
    include("connectDb.php");
    $method = $_SERVER['REQUEST_METHOD'];
    $movie = file_get_contents("php://input");
    // switch ($method) {
    //     case("POST"):
            if(isset($movie) && !empty($movie)){
                $request = json_decode($movie);
        
                $title = $request->title;
                $thumbnail = $request->thumbnail;
                $description = $request->description;
                if(empty($title && $thumbnail && $description)){
                    echo 'missing fields';
                    http_response_code(400);
                } else {
                    $sqli = "INSERT INTO moviedb.movie (title,thumbnail,description) 
                        VALUES ('$title','$thumbnail','$description')";
                        
                    if(mysqli_query($conn,$sqli)){
                        http_response_code(201);
                    }
                    else{
                        http_response_code(401); 
                    }
                }
                
            }
            // break;
        // case ("GET") :
            // $sqli = "SELECT * FROM user.movie";
            // $result = mysqli_query($conn,$sqli);
            // //     echo "test GET";
            // $movie = mysqli_fetch_assoc($result);
            // if(mysqli_query($conn,$sqli)){
            //     http_response_code(208);
            //     echo json_encode($result);
            // } else{
            //     http_response_code(500);
            // }

            // }
    
?>