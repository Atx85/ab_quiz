<?php
/**
 * Plugin Name: AB Quiz
 * Plugin URI:  https://example.com/plugins/the-basics/
 * Description: A REST API Quiz
 * Version:     1.0
 * Author:      Attila Banko
 * Author URI:  https://oneltd.co.uk
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wporg
 * Domain Path: /languages
 */

define('AB_QUIZ_VERSION', '1.0');

define('AB_QUIZ_DEV', true);

define('AB_QUIZ_PATH', dirname(__FILE__));
define('AB_QUIZ_URL', plugins_url('', __FILE__));
define('AB_QUIZ_FILE', __FILE__);
define('AB_QUIZ_PPATH', dirname(plugin_basename(__FILE__)));
define('AB_QUIZ_PLUGIN_PATH', AB_QUIZ_PATH . '/plugin');



function wporg_options_page_html()
{
    enqueueScript();
    // check user capabilities
    if (!current_user_can('manage_options')) {
        return;
    }
    ?>
    <div class="wrap">
        <div id="ab_quiz_admin_app"></div>
    </div>
    <?php
}

function enqueueScript()
{
    wp_enqueue_script(
        'AB_QUIZ_admin_javascript',
        plugins_url('js/AB_QUIZ_admin' . '.js', AB_QUIZ_FILE),
        array('jquery', 'jquery-ui-sortable', 'jquery-ui-datepicker'),
        AB_QUIZ_VERSION
    );

} 

if ( is_admin() ) {
    // add_action( 'wp_ajax_my_frontend_action', 'my_frontend_action' );
    // add_action( 'wp_ajax_nopriv_my_frontend_action', 'my_frontend_action' );
    add_action( 'wp_ajax_ab_quiz_save', 'ab_quiz_save' );
} 

function ab_quiz_save() {
    echo 'saving data .. nooo not yet';
}

function wporg_options_page()
{
    add_submenu_page(
        'options-general.php',
        'Quiz Options',
        'Quiz Options',
        'manage_options',
        'wporg',
        'wporg_options_page_html'
    );
    
}
add_action('admin_menu', 'wporg_options_page');