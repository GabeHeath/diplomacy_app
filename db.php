<?php
include '../../php-lib/config.php';

// Create connection
$con=mysqli_connect("$mysql_host","$mysql_login","$mysql_pw","$mysql_db");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM stats WHERE name='Andrew'");

while($row = mysqli_fetch_array($result))
  {
  $data[] = $row['rating'];
  }

ob_start();
echo json_encode($data, JSON_NUMERIC_CHECK);
$contents = ob_get_contents();
ob_end_clean();

mysqli_close($con);
?>
