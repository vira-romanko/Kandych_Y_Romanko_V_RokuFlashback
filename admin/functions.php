<?php
    require('connect.php');

    function getUser($conn) {
        //validate that the post method is working form our Js file
        $username = $_POST['username'];
        //echo $username;
        $getUser = 'SELECT * FROM users where uname="' .$username.'"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }



    //GETTING ALL MOVIES
  function get_movies($conn)
  {
      
     
      $movie_query = "SELECT m.*, c.`category_name` FROM tbl_movie m INNER JOIN tbl_movie_category l INNER JOIN tbl_category c ON m.`movie_id` = l.`movie_id` AND l.`category_id` = c.`category_id`  ORDER BY m.`movie_year` DESC LIMIT 40;";

      $get_movies = $conn->prepare($movie_query);
      $get_movies->execute();

      $movies = array();

      while ($row = $get_movies->fetch(PDO::FETCH_ASSOC)) {
          $movies[] = $row;
      }
      return $movies;
  }


  function myList_movies()
  {
      include('connect.php');

      $movie_query = "SELECT * FROM tbl_movie WHERE `movie_favourite` = 1;";

      $get_movie_fav = $pdo->prepare($movie_query);
      $get_movie_fav->execute();

      $myList_moviefav = [];

      while ($row = $get_movie_fav->fetch(PDO::FETCH_ASSOC)) {
          $myList_moviefav[] = $row;
      }

      return $myList_moviefav;
  }


    