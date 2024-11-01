<?php

/**
 * Fired during plugin activation
 *
 * @link       https://www.nanoinsurancelimited.com/
 * @since      1.0.0
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/admin
 */

class SHIPSAFELY_Menu
{
  /**
   * Register menu function
   */
  public static function shpsafe_register_menu()
  {
    if (is_admin()) {
      add_action("admin_menu", ["SHIPSAFELY_Menu", "shpsafe_add_menu"]);
    }
  }

  /**
   * Add menu and sub-menu
   */
  public static function shpsafe_add_menu()
  {
    add_menu_page(
      "Ship Safely",
      "Ship Safely",
      "manage_options",
      "nano-settings"
      
    );
    add_submenu_page(
      "nano-settings",
      "Settings",
      "Settings",
      "manage_options",
      "nano-settings",
      "SHIPSAFELY_Menu::shpsafe_render_settings"
    );
  }

  public static function shpsafe_render_settings()
  {
    ?>
      <div id="app"> Your browser does not support Vue3.</div>
    <?php
  }
}
