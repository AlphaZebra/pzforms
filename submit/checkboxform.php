<?php

// This is a sample submit handler for a form named "checkboxform"
// If you have a form named "checkboxform", you can use this file manipulate
// the $_POST data before it is emailed (or saved to the database in premium version)


//change password1 field in $_POST to password123
$_POST['password1'] = 'password123';

//change email field in $_POST to test@test.com
$_POST['email'] = 'test@test.com';


