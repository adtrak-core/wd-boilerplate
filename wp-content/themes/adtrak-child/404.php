<?php
/**
 * The template for displaying 404 pages within your theme.
 * @author  Adtrak
 * @package AdtrakChild
 * @version 1.0.0
 */

get_header(); ?>

	<main role="main" class="site-content container">

			<article class="grid grid8_12">

				<div class="pad-1-1 copy">

					<h1>Sorry!</h1>

					<p>This page can't be found.</p>

					<p><a href="<?php echo site_url('/'); ?>">Please go home</a></p>

				</div>

			</article>

	</main>
	
<?php get_footer(); ?>