<?php

require "functions.php";

if (isset($_GET['tbl_movie'])) {

    $data = get_movies($pdo);
}



echo json_encode($data);
?>