<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://ship-safely.com
 * @since             1.0.0
 * @package           Ship_Safely
 *
 * @wordpress-plugin
 * Plugin Name:       Ship-Safely 
 * Plugin URI:        http://ship-safely.com
 * Description:       WooCommerce extension to enable you to start offering Ship-Safely shipping protection to your customer.
 * Version:           3.0.0
 * Author:            Nano Insurance Limited
 * Author URI:        http://ship-safely.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       nano-insurance
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined("WPINC")) {
  die();
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
if(!defined("SHIPSAFELY_VERSION")){
  define("SHIPSAFELY_VERSION", "1.0.0");
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-nano-insurance-activator.php
 */
function shpsafe_activate_plugin()
{
  require_once plugin_dir_path(__FILE__) .
    "includes/class-nano-insurance-activator.php";

  SHIPSAFELY_Activator::shpsafe_activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-nano-insurance-deactivator.php
 */
function shpsafe_deactivate_plugin()
{
  require_once plugin_dir_path(__FILE__) .
    "includes/class-nano-insurance-deactivator.php";
  SHIPSAFELY_Deactivator::shpsafe_deactivate();
}

/**
 * Add main menu 
 */
function shpsafe_addMenu()
{
  require_once plugin_dir_path(__FILE__) . "admin/menu/main.php";
  SHIPSAFELY_Menu::shpsafe_register_menu();
}
shpsafe_addMenu();


/**
 * Register all plugin routes
 */
function shpsafe_register_routes(){
  require_once plugin_dir_path(__FILE__) . 'route/index.php';
}
shpsafe_register_routes();

register_activation_hook(__FILE__, "shpsafe_activate_plugin");
register_deactivation_hook(__FILE__, "shpsafe_deactivate_plugin");

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . "includes/class-nano-insurance.php";

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function shpsafe_run()
{
  $plugin = new Ship_Safely();
  $plugin->run();
}
shpsafe_run();

