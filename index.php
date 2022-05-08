<?php
require_once('adm/include/connect.php');
?>
<!DOCTYPE html>
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="en">
<![endif]-->
<!--[if gt IE 8]><!-->
<html class=" js no-touch svg inlinesvg svgclippaths no-ie8compat" style="" lang="en">
<!--<![endif]-->
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title><?php echo strCompanyName; ?></title>

    <link rel="icon" href="favicon.ico?v=1.1" type="image/png" />
    
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/jquery-parallax.css">
	<link rel="stylesheet" href="css/core-bc382a.css" data-theme="core.css">
		
	<script src="js/custom.js"></script>
	<script type="text/javascript">
		var countdownDate = '2022/12/04 15:45:00';
	</script>
</head>
<body>

	<div class="parallax-container" style="display: block; width: 1366px; height: 632px; top: 0px; left: 0px; z-index: 1;">
		<div class="parallax-item parallax-size-cover"></div>
		<div class="parallax-item parallax-repeat parallax-overlay" style="width: 1475px; height: 682px; z-index: 3; left: -73px; top: 0px;"></div>
	</div>

	<section class="wrap" style="display: block; width: 1366px;">
		<section class="section subscribe" style="height: 456px;">
			<div class="content" style="margin-top: 71px;">
				<div class="row">
					<div class="small-12 columns header">
						<div class="logo">
							<img src="images/logo.png" alt="Totally - Coming Soon Page">
						</div>
						<h2><font color="#002060"><?php echo strCompanyName; ?></font> </h2>
						<h4><font color="#5880C5"><?php echo strCompanySlogan; ?></font></h4>
						<h5>https://gapin.uk</h5>
					</div>
					<div class="small-12 columns">
						<h3>Nature of business:</h3>
						<br>
						<ul style="margin-left: 15px;">
							<li>Book publishing </li>
							<li>Research and experimental development on natural sciences and engineering </li>
							<li>Technical and vocational secondary education </li>
							<li>First-degree level higher education </li>
						</ul>
						<br>
					</div>
					<div class="small-12 columns header">
						<h3><font color="#C00000">The website is under construction . . .</font></h3>
						<h3>To be published soon</h3>
					</div>
				</div>
				<br>
				<div class="row social">
					<div class="small-12 columns">
                        <?php
                        if (strCompanyFacebook != ''){
                            ?>
                            <a href="<?php echo strCompanyFacebook;?>"><img src="images/icon-facebook.png" alt="" style="opacity: 0.4;"></a>
                            <?php
                        }
                        ?>
						<?php
						if (strCompanyInstagram != ''){
						    ?>
                            <a href="#"><img src="images/icon-instagram.png" alt="" style="opacity: 0.4;"></a>
							<?php
						}
						?>
						<?php
						if (strCompanyYouTube != ''){
						    ?>
                            <a href="#"><img src="images/icon-youtube.png" alt="" style="opacity: 0.4;"></a>
							<?php
						}
						?>
						<?php
						if (strCompanyPinterest != ''){
                            ?>
                            <a href="#"><img src="images/icon-pinterest.png" alt="" style="opacity: 0.4;"></a>
							<?php
						}
						?>
						<?php
						if (strCompanyLinkedIn != ''){
							?>
                            <a href="#"><img src="images/icon-linkedin.png" alt="" style="opacity: 0.4;"></a>
                            <?php
						}
						?>
					</div>
				</div>
			</div>
		</section>
	</section>

	<script src="js/jquery-1.js"></script>
	<script src="js/foundation.js"></script>
	<script src="js/jquery_002.js"></script>
	<script src="js/jquery.js"></script>
	<script src="js/core.js"></script>
	<script type="text/javascript">$(document).foundation();</script>
	
	<?php
	require_once('popup.php');
	?>

</body></html>