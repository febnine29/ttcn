<?php
    $servername = "localhost";
    $dbname = 'moviedb';
    $username = "root";
    $password = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected database successfully";
    echo "</br>";
    // $sql = "SELECT username, password FROM user.authentication";
    // $result = mysqli_query($conn, $sql);

    // if (mysqli_num_rows($result) > 0) {
    // // output data of each row
    // while($row = $result->fetch_assoc()) {
    //     echo "username: " . $row["username"]. " - password: " . $row["password"];
    //   }
    // } else {
    // echo "0 results";
    // }

    // mysqli_close($conn);
?>