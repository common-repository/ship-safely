<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://ship-safely.com
 * @since      1.0.0
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/admin
 * @author     Sandy Lokas <developer@ship-safely.com>
 */
class SHIPSAFELY_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $ship_safely    The ID of this plugin.
	 */
	private $ship_safely;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $ship_safely       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $ship_safely, $version ) {

		$this->nano_insurance = $ship_safely;
		$this->version = $version;
	}

  /**
   * Check if API token is saved to options as "shpsafe_woo_user_api_token"
   *
   * @since    1.0.0
   */
  public function shpsafe_woo_api_token_check() {
    if(!is_user_logged_in()){
      return;
    }

    $token = get_option( 'shpsafe_woo_admin_api_token' );
    if(!$token){
      try{
        require_once plugin_dir_path(__FILE__) . "../includes/config.php";
        $base_url = SHIPSAFELY_Config::shpsafe_server_url();
        $hostname = parse_url( get_site_url(), PHP_URL_HOST );
        $response = wp_remote_post($base_url . "/apitoken", [
          "method" => "POST",
          "timeout" => 45,
          "blocking" => true,
          "body" => [
            "context" => $hostname,
          ],
        ]);
        if ($response["response"]["code"] !== 200) {
          throw new \Exception("faled.", 1);
        }
        update_option("shpsafe_woo_user_api_token", json_decode($response["body"])->user_token);
        update_option("shpsafe_woo_admin_api_token", json_decode($response["body"])->admin_token);
      }catch (\Exception $error){
          add_action('admin_notices', function() {
              ?>
              <div class="error notice"><p><?php _e( "Can't connect to Ship Safely server.", 'API errors.' ); ?></p></div>
              <?php
          });
          return;
      }

    }
  }

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function shpsafe_enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in SHIPSAFELY_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The SHIPSAFELY_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

   if ( $this->shpsafe_is_develop_serve() ) {
      wp_enqueue_style( $this->nano_insurance . '_dev', 'http://localhost:8081/css/app.css', [], $this->version, 'all' );
   } else {
      wp_enqueue_style( $this->nano_insurance, plugin_dir_url( __DIR__ ) . 'admin/dist/css/app.css', [], $this->version, 'all' );
   }

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function shpsafe_enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in SHIPSAFELY_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The SHIPSAFELY_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

    if ( $this->shpsafe_is_develop_serve() ) {
      wp_enqueue_script( $this->nano_insurance . '_chunks_dev', 'http://localhost:8081/js/chunk-vendors.js', [], rand(1, 100), false );
      wp_enqueue_script( $this->nano_insurance, 'http://localhost:8081/js/app.js', [], rand(1, 100), false );
    } else {
      wp_enqueue_script( $this->nano_insurance . '_chunks', plugin_dir_url( __DIR__ ) . 'admin/dist/js/chunk-vendors.js', [], rand(1, 100), false );
      wp_enqueue_script( $this->nano_insurance, plugin_dir_url( __DIR__ ) . 'admin/dist/js/app.js', [], rand(1, 100), false );
    }

    $shop_page_url = home_url();
    require_once plugin_dir_path(__FILE__) . "../includes/config.php";

    $hostname = parse_url( get_site_url(), PHP_URL_HOST );
    wp_localize_script($this->nano_insurance, 'credential', [
      "token" => SHIPSAFELY_Config::shpsafe_admin_credential(),
      "context" => $hostname
    ]);
    wp_localize_script($this->nano_insurance, 'url', [
      "API" => SHIPSAFELY_Config::shpsafe_server_url(),
      "context" => $shop_page_url,
      "callback" => SHIPSAFELY_Config::shpsafe_callback_url(),
      "plugin" => plugins_url()
    ]);    
    wp_localize_script($this->nano_insurance, 'config', [
      "mode" => SHIPSAFELY_Config::shpsafe_dev_mode() ? 'dev' : 'prod',
    ]);
	}

  /**
   * for dev
   * */
  private function shpsafe_is_develop_serve(){
    require_once plugin_dir_path(__FILE__) . "../includes/config.php";
    return SHIPSAFELY_Config::shpsafe_dev_mode();
  }
}
