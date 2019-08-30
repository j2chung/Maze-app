<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="StyleSheet.css">
</head>
<body>
  <form id="generate_maze" name="generate_maze" method="post">
    Maze Size: <input type="text" id="maze_size" name="maze_size">
    <button type="submit" id="generate" name="generate">Generate</button>
  </form>

  <table id="maze_pic" name="maze_pic">
  </table>

</body>
<script src="jquery-3.4.1.min.js" charset="utf-8"></script>
<script src="maze.js" charset="utf-8"></script>
<?php include 'generate_maze.php'; ?>
</html>
