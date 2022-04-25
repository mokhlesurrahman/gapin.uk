<?php 
function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}
$data['success'] = false;
$to_email = 'rezababu@gmail.com';
$subject = 'Subscribe Mail From Under Construction Page';
$message = 'Subscribe Mail From Under Construction Page';
$headers = 'From: noreply@gapin.uk';
//check if the email address is invalid $secure_check
$secure_check = sanitize_my_email($to_email);
if ($secure_check == false) {
    echo "Invalid input";
} else { //send email 
    mail($to_email, $subject, $message, $headers);
    $data['success'] = true;
    echo json_encode($data);
}
?>