<?php
$adminemail = "1234@dekystudio.com";

if ($_GET['send'] == 'comments')
{
						
	$_uname = $_POST['uname'];
	$_uemail = $_POST['uemail'];

	$_title	=	$_POST['title'];
	$_comments	=	stripslashes($_POST['message']);

						
						
	$email_check = '';
	$return_arr = array();

	if($_uname=="" || $_uemail=="" || $_title=="" || $_comments=="")
	{
		$return_arr["frm_check"] = 'error';
		$return_arr["msg"] = "Please fill in all required fields!";
	} 
	else if(filter_var($_uemail, FILTER_VALIDATE_EMAIL)) 
	{
	
	$to = $adminemail;
	$from = $_uemail;
	$subject = "New Contact Us Message: " .$_title;
	$message = $_comments;

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$headers .= "Content-Transfer-Encoding: 7bit\r\n";
	$headers .= "From: " . $from . "\r\n";

	@mail($to, $subject, $message, $headers);	
	
	} else {
   
   
	$return_arr["frm_check"] = 'error';
	$return_arr["msg"] = "Please enter a valid email address!";


}

echo json_encode($return_arr);
}

?>