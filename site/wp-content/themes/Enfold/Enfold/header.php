<?php
	if ( !defined('ABSPATH') ){ die(); }
	
	global $avia_config;

	$style 				= $avia_config['box_class'];
	$responsive			= avia_get_option('responsive_active') != "disabled" ? "responsive" : "fixed_layout";
	$blank 				= isset($avia_config['template']) ? $avia_config['template'] : "";	
	$av_lightbox		= avia_get_option('lightbox_active') != "disabled" ? 'av-default-lightbox' : 'av-custom-lightbox';
	$preloader			= avia_get_option('preloader') == "preloader" ? 'av-preloader-active av-preloader-enabled' : 'av-preloader-disabled';
	$sidebar_styling 	= avia_get_option('sidebar_styling');
	$filterable_classes = avia_header_class_filter( avia_header_class_string() );

	
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="<?php echo "html_{$style} ".$responsive." ".$preloader." ".$av_lightbox." ".$filterable_classes ?> ">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<?php
/*
 * outputs a rel=follow or nofollow tag to circumvent google duplicate content for archives
 * located in framework/php/function-set-avia-frontend.php
 */
 if (function_exists('avia_set_follow')) { echo avia_set_follow(); }

?>


<!-- mobile setting -->
<?php

if( strpos($responsive, 'responsive') !== false ) echo '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">';
?>


<!-- Scripts/CSS and wp_head hook -->
<?php
/* Always have wp_head() just before the closing </head>
 * tag of your theme, or you will break many plugins, which
 * generally use this hook to add elements to <head> such
 * as styles, scripts, and meta tags.
 */

wp_head();

?>
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">

</head>




<body id="top" <?php body_class($style." ".$avia_config['font_stack']." ".$blank." ".$sidebar_styling); avia_markup_helper(array('context' => 'body')); ?>>

	<?php 
		
	if("av-preloader-active av-preloader-enabled" === $preloader)
	{
		echo avia_preload_screen(); 
	}
		
	?>

	<div id='wrap_all'>
	
	<?php if(!$blank) {?>
		<style>.avia-menu-text {color:white;font-family:'Roboto Condensed', sans-serif;;}.logo {position:relative !important;}.logo a{display: flex;align-items: center;justify-content: center;}.logo a img {margin-left:5px;}</style>
		<div id="container_wrap" class="container_wrap" style="background:#618d33;">
    		<div class="container" style="height: 150px;display: flex;padding-right: 0;max-width: 6000px;width: 100%;">
		 		<div class="padding-five" style="width: 5%;height: 150px;"></div>
				<div style="width: 100%;height: 150px;display: flex;">
					<div style="width: 225px;">
						<div style="height: 95%;background:#618d33;border: 0px solid white;border-radius: 200px;">
							<?php echo avia_logo(AVIA_BASE_URL.'images/layout/logo.png', $addition, 'strong', true); ?> 
						</div>
					</div>
					<div style="flex: 1;display:flex;flex-direction:column;height: 150px;">
						<div style="height: 45%;"></div>
						<div id="search-placeholder" style="height: 25%;margin-left: -130px;;background: white;display: flex;justify-content: flex-end;align-items: center;"></div>
						<div style="height: 30%;display: flex;align-items: center;justify-content: flex-end;position: absolute;left:0;bottom:0;width:100%;">
							<?php get_template_part( 'includes/helper', 'main-menu' ); ?>
						</div>
					</div>
				</div>
			 </div>
		</div>
	<?php } ?>
		
	<div id='main' class='all_colors' data-scroll-offset='<?php echo avia_header_setting('header_scroll_offset'); ?>'>

	<?php 
		
		if(isset($avia_config['temp_logo_container'])) echo $avia_config['temp_logo_container'];
		do_action('ava_after_main_container'); 
		
	?>
