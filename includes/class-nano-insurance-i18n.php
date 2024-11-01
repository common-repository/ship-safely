<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://ship-safely.com
 * @since      1.0.0
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Ship_Safely
 * @subpackage Ship_Safely/includes
 * @author     Sandy Lokas <developer@ship-safely.com>
 */
class SHIPSAFELY_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function shpsafe_load_plugin_textdomain() {

		load_plugin_textdomain(
			'nano-insurance',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
