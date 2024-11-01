<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://ship-safely.com
 * @since      1.0.0
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Ship_Safely
 * @subpackage Ship_Safely/includes
 * @author     Sandy Lokas <developer@ship-safely.com>
 */
class SHIPSAFELY_Deactivator
{
  /**
   * Short Description. (use period)
   *
   * Long Description.
   *
   * @since    1.0.0
   */
  public static function shpsafe_deactivate()
  {
    try{
        require_once plugin_dir_path(__FILE__) . "../includes/config.php";
        $token = SHIPSAFELY_Config::shpsafe_admin_credential();
        $base_url = SHIPSAFELY_Config::shpsafe_server_url();
        $hostname = parse_url( get_site_url(), PHP_URL_HOST );
        $response = wp_remote_post($base_url . "/apitoken", [
          "method" => "DELETE",
          "timeout" => 45,
          "blocking" => true,
          "headers" => [
            "Authorization" => "Bearer " . $token
          ],
          "body" => [
            "context" => $hostname,
          ],
        ]);
      }catch (\Exception $error){
      }

    delete_option("shpsafe_woo_user_api_token");
    delete_option("shpsafe_woo_admin_api_token");
  }
}
