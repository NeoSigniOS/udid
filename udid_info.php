<?php 
// udid_info.php
$subject = "This is my UDID from iOS device";
$body  = "Hello<br /> This is my UDID: {$_GET['UDID']} <br />";
$body .= "Device product: {$_GET['DEVICE_PRODUCT']} <br />";
$body .= "Device version: {$_GET['DEVICE_VERSION']} <br />";
$body .= "Device name: {$_GET['DEVICE_NAME']} <br />";
?>

<!-- You can output this file content dynamically when needed -->
