<style>
	input, textarea, button {
	    display: block;
	    width: 100%;
	    border: 1px solid #CCC;
	}

	label {
	    visibility: hidden;
	}

	.submit {
	    margin-top: 10px;
	}
	
	#send-success, #send-fail {
		font: normal normal normal 17px/1.4em din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif;
		color: #605E5E;
		text-align: center;
		text-decoration: none;
	}

	#contact-form input[type="text"],
	#contact-form input[type="email"],
	#contact-form input[type="tel"],
	#contact-form input[type="url"],
	#contact-form textarea,
	#contact-form button[type="submit"] {
		font:400 12px/12px "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	#contact-form {
		text-shadow:0 1px 0 #FFF;
		border-radius:4px;
		-webkit-border-radius:4px;
		-moz-border-radius:4px;
		background:#F9F9F9;
		padding:25px;
	}
	#contact-form h3 {
		color:#991D57;
		display:block;
		font-size:28px;
	}
	#contact-form h4 {
		margin:5px 0 15px;
		display:block;
		font-size:13px;
	}
	#contact-form label span {
		cursor:pointer;
		color:#991D57;
		display:block;
		margin:5px 0;
		font-weight:900;
	}
	#contact-form input[type="text"],
	#contact-form input[type="email"],
	#contact-form input[type="tel"],
	#contact-form input[type="url"],
	#contact-form textarea {
		width:100%;
		box-shadow:inset 0 1px 2px #DDD, 0 1px 0 #FFF;
		-webkit-box-shadow:inset 0 1px 2px #DDD, 0 1px 0 #FFF;
		-moz-box-shadow:inset 0 1px 2px #DDD, 0 1px 0 #FFF;
		border:1px solid #CCC;
		background:#FFF;
		margin:0 0 5px;
		padding:10px;
		border-radius:5px;
	}
	#contact-form input[type="text"]:hover,
	#contact-form input[type="email"]:hover,
	#contact-form input[type="tel"]:hover,
	#contact-form input[type="url"]:hover,
	#contact-form textarea:hover {
		-webkit-transition:border-color 0.3s ease-in-out;
		-moz-transition:border-color 0.3s ease-in-out;
		transition:border-color 0.3s ease-in-out;
		border:1px solid #AAA;
	}
	#contact-form textarea {
		height:100px;
		max-width:100%;
	}
	#contact-form button[type="submit"] {
		cursor:pointer;
		width:100%;
		border:none;
		background:#991D57;
		background-image:linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
		background-image:-moz-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
		background-image:-webkit-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
		color:#FFF;
		margin:0 0 5px;
		padding:10px;
		border-radius:5px;
	}
	#contact-form button[type="submit"]:hover {
		background-image:linear-gradient(bottom, #9C215A 0%, #A82767 52%);
		background-image:-moz-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
		background-image:-webkit-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
		-webkit-transition:background 0.3s ease-in-out;
		-moz-transition:background 0.3s ease-in-out;
		transition:background-color 0.3s ease-in-out;
	}
	#contact-form button[type="submit"]:active {
		box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);
	}
	#contact-form input:focus,
	#contact-form textarea:focus {
		outline:0;
		border:1px solid #999;
	}
	::-webkit-input-placeholder {
	    color:#888;
	}
	:-moz-placeholder {
	    color:#888;
	}
	::-moz-placeholder {
	    color:#888;
	}
	:-ms-input-placeholder {
	    color:#888;
	}
</style>

<?php
	$action=$_REQUEST['action'];
	if ($action=="") {
		/* display the contact form */
?>
	<form id="contact-form" action="" method="POST" enctype="multipart/form-data">
		<input type="hidden" name="action" value="submit">
		<label for="name">Name:</label>
		<input name="name" placeholder="Name" type="text">
		<label for="email">Email:</label>
		<input name="email" placeholder="Email" type="email">
		<label for="phone">Phone:</label>
		<input name="phone" placeholder="Phone" type="tel">
		<label for="music">Music suggestions:</label>
		<input name="music" placeholder="Music suggestions" type="text">
		<label for="message">Your message:</label>
		<textarea name="message" placeholder="Message"></textarea>
		<button name="submit" type="submit" class="submit" id="contact-submit">Send It</button>
	</form>
<?php
	} else {
		/* send the submitted data */
	   	$name=$_REQUEST['name'];
		$email=$_REQUEST['email'];
		$phone=$_REQUEST['phone'];
		$music=$_REQUEST['music'];
		$message=$_REQUEST['message'];
		
		if (($name=="") && ($email=="") && ($phone=="") && ($music=="") && ($message=="")) {
			echo "<div id=\"send-fail\">Yo, enter some text!<br><a href=\"\">&laquo; Back</a></div>";
		} else {
			$from="From: $name<$email>\r\nReturn-path: $email";
			$subject="Wedding message received!";
			
			$formData = "From: $name\r\nEmail: $email\r\nPhone: $phone\r\nMusic suggestions: $music\r\nnMessage: $message\r\n";
			
			mail("teamlp.party@gmail.com", $subject, $formData, $from);
			echo "<div id=\"send-success\">Message sent!</div>";
		}
	}
?>