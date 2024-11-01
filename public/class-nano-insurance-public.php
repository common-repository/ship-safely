<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://ship-safely.com
 * @since      1.0.0
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/public
 * @author     Sandy Lokas <developer@ship-safely.com>
 */
class SHIPSAFELY_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $nano_insurance    The ID of this plugin.
	 */
	private $nano_insurance;

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
	 * @param      string    $nano_insurance       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $nano_insurance, $version ) {

		$this->nano_insurance = $nano_insurance;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
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
      wp_enqueue_style( $this->nano_insurance, 'http://localhost:8082/css/app.css', [], rand(1, 100), 'all' );
   } else {
      wp_enqueue_style( $this->nano_insurance, plugin_dir_url( __DIR__ ) . 'public/dist/css/app.css', [], rand(1, 100), 'all' );
   }
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
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

		// wp_enqueue_script( $this->nano_insurance, plugin_dir_url( __FILE__ ) . 'js/nano-insurance-public.js', array( 'jquery' ), rand(1, 100), false );

    if ( $this->shpsafe_is_develop_serve() ) {
      wp_enqueue_script( $this->nano_insurance . '_chunks', 'http://localhost:8082/js/chunk-vendors.js', [], rand(1, 100), true );
      wp_enqueue_script( $this->nano_insurance, 'http://localhost:8082/js/app.js', [], rand(1, 100), true );
    } else {
      wp_enqueue_script( $this->nano_insurance . '_chunks', plugin_dir_url( __DIR__ ) . 'public/dist/js/chunk-vendors.js', [], rand(1, 100), true );
      wp_enqueue_script( $this->nano_insurance, plugin_dir_url( __DIR__ ) . 'public/dist/js/app.js', [], rand(1, 100), true );
    }

    require_once plugin_dir_path(__FILE__) . "../includes/config.php";
    
    $shop_page_url = home_url();
    $hostname = parse_url( get_site_url(), PHP_URL_HOST );
    wp_localize_script($this->nano_insurance, 'credential', [
      "token" => SHIPSAFELY_Config::shpsafe_user_credential(),
      "nonce" => wp_create_nonce( 'wp_rest' ),
      "context" => $hostname
    ]);
    wp_localize_script($this->nano_insurance, 'url', [
      "API" => SHIPSAFELY_Config::shpsafe_server_url(),
      "context" => $shop_page_url,
      "plugin" => plugins_url()
    ]);
    wp_localize_script($this->nano_insurance, 'config', [
      "mode" => SHIPSAFELY_Config::shpsafe_dev_mode() ? 'dev' : 'prod',
    ]);
	}  

  /**
   * Add nano reminder before submit button of checkout page.
   *
   * @since    1.0.0
   */
  public function shpsafe_add_reminder() {
      ?>
        <div id="nano_reminder"></div>
      <?php
  }
  /**
   * Add nano hook after order completed
   *
   * @since    1.0.0
   */
  public function shpsafe_add_order_completed() {

      // Only in thankyou "Order-received" page
      if (! is_wc_endpoint_url( 'order-received' )) {
        return null; // Exit
      }

      global $wp;

      // Get the order ID
      $order_id = absint($wp->query_vars["order-received"]);

      if (empty($order_id) || $order_id == 0) {
        return null;
      } // Exit;

      ?>
        <div id="nano_order_completed" data-orderid="<?php echo esc_attr($order_id) ?>" ></div>
      <?php
  }

  /**
   * for dev
   * */
  private function shpsafe_is_develop_serve(){
    require_once plugin_dir_path(__FILE__) . "../includes/config.php";
    return SHIPSAFELY_Config::shpsafe_dev_mode();
  }

}
