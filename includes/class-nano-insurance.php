<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://ship-safely.com
 * @since      1.0.0
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Ship_Safely
 * @subpackage Ship_Safely/includes
 * @author     Sandy Lokas <developer@ship-safely.com>
 */
class Ship_Safely {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      SHIPSAFELY_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $nano_insurance    The string used to uniquely identify this plugin.
	 */
	protected $nano_insurance;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'SHIPSAFELY_VERSION' ) ) {
			$this->version = SHIPSAFELY_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->nano_insurance = 'nano-insurance';

		$this->shpsafe_load_dependencies(); //
		$this->shpsafe_set_locale();
		$this->shpsafe_define_admin_hooks();
		$this->shpsafe_define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - SHIPSAFELY_Loader. Orchestrates the hooks of the plugin.
	 * - SHIPSAFELY_i18n. Defines internationalization functionality.
	 * - SHIPSAFELY_Admin. Defines all hooks for the admin area.
	 * - SHIPSAFELY_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function shpsafe_load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-nano-insurance-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-nano-insurance-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-nano-insurance-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-nano-insurance-public.php';

		$this->loader = new SHIPSAFELY_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the SHIPSAFELY_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function shpsafe_set_locale() {

		$plugin_i18n = new SHIPSAFELY_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'shpsafe_load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function shpsafe_define_admin_hooks() {

		$plugin_admin = new SHIPSAFELY_Admin( $this->shpsafe_get_nano_insurance(), $this->shpsafe_get_version() );

    // for upgrade checking
    $this->loader->add_action( 'plugins_loaded', $plugin_admin, 'shpsafe_woo_api_token_check' );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'shpsafe_enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'shpsafe_enqueue_scripts' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function shpsafe_define_public_hooks() {
    $plugin_public = new SHIPSAFELY_Public( $this->shpsafe_get_nano_insurance(), $this->shpsafe_get_version() );

    $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'shpsafe_enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'shpsafe_enqueue_scripts' );

		$this->loader->add_action( 'woocommerce_checkout_before_customer_details', $plugin_public, 'shpsafe_add_reminder' );
		$this->loader->add_action( 'woocommerce_before_thankyou', $plugin_public, 'shpsafe_add_order_completed' );
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function shpsafe_get_nano_insurance() {
		return $this->nano_insurance;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    SHIPSAFELY_Loader    Orchestrates the hooks of the plugin.
	 */
	public function shpsafe_get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function shpsafe_get_version() {
		return $this->version;
	}

}
