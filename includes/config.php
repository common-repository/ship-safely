<?php

class SHIPSAFELY_Config
{

  /**
   * get plugin mode.
   *
   * @since     1.0.0
   * @return    bool
   *
   */
  public static function shpsafe_dev_mode()
  {
    return file_exists(plugin_dir_path( dirname( __FILE__ ) ) . "dev") ? true : false;
  }

  /**
   *
   * @since     2.0.0
   * @return    string
   */
  public static function shpsafe_user_credential()
  {
    return get_option( 'shpsafe_woo_user_api_token' );
  }  

  /**
   *
   * @since     2.0.0
   * @return    string
   */
  public static function shpsafe_admin_credential()
  {
    return get_option( 'shpsafe_woo_admin_api_token' );
  }

  /**
   *
   * @since     1.0.0
   * @return    string
   */
  public static function shpsafe_server_url()
  {
    return "https://app.ship-safely.com/api/v2";
  }

  /**
   *
   * @since     1.0.0
   * @return    string
   */
  public static function shpsafe_callback_url()
  {
    return "https://app.ship-safely.com";
  }
}
