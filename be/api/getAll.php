<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET");
    include("connectDb.php");
    $sqli = "SELECT * FROM moviedb.movie";
    $result = mysqli_query($conn, $sqli);

    if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo json_encode($row);
    }
    } else {
    echo "0 results";
    }
    // $sql = "SELECT * FROM user.movie";
    // $stmt = $conn->prepare($sql);
    // $stmt->execute();
    // $movies = $stmt->fetch(PDO::FETCH_ASSOC);
    // echo json_encode($movies);
?>