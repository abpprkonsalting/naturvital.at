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

</head>




<body id="top" <?php body_class($style." ".$avia_config['font_stack']." ".$blank." ".$sidebar_styling); avia_markup_helper(array('context' => 'body')); ?>>

	<?php 
		
	if("av-preloader-active av-preloader-enabled" === $preloader)
	{
		echo avia_preload_screen(); 
	}
		
	?>

	<div id='wrap_all'>
	<?php 
	
	$menu .= "<nav class='main_menu' data-selectname='".__('Select a page','avia_framework')."' ".avia_markup_helper(array('context' => 'nav', 'echo' => false)).">";
	$avia_theme_location = 'avia';
	$avia_menu_class = $avia_theme_location . '-menu';
	$args = array(
		'theme_location'	=> $avia_theme_location,
		'menu_id' 			=> $avia_menu_class,
		'menu_class'		=> 'menu av-main-nav',
		'container_class'	=> $avia_menu_class.' av-main-nav-wrap',
		'fallback_cb' 		=> 'avia_fallback_menu',
		'echo' 				=>	false, 
		'walker' 			=> new avia_responsive_mega_menu()
	);

	$main_nav = wp_nav_menu($args);
	
	
	
	
	
	?>
	<?php if(!$blank) {?>
		<style>.logo.bg-logo {position:relative !important;}.logo.bg-logo a{display: flex;align-items: center;justify-content: center;}.logo.bg-logo a img {margin-left:5px;}</style>
		<div class="container_wrap" style="background:#97be0e;">
    		<div class="container" style="height: 150px;display: flex;padding-right: 0;max-width: 4000px;">
		 		<div style="width: 5%;height: 150px;"></div>
				<div style="width: 95%;height: 150px;display: flex;">
					<div style="width: 150px;height: 150px;padding: 10px;">
						<div style="height: 95%;background: white;border: 1px solid white;border-radius: 200px;">
							<?php echo avia_logo(AVIA_BASE_URL.'images/layout/logo.png', $addition, 'strong', true); ?> 
						</div>
					</div>
					<div style="flex: 1;display:flex;flex-direction:column;height: 150px;">
						<div style="height: 50%;"></div>
						<div style="height: 20%;transform: scaleX(1.1);background: white;"></div>
						<div style="height: 30%;display: flex;align-items: center;justify-content: flex-end;padding-right: 100px;">
							<?php echo $main_nav ?>
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
