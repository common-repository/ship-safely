<?php

/**
 * Fired during plugin got token and keys
 *
 * @link       https://www.nanoinsurancelimited.com/
 * @since      1.0.0
 *
 * @package    Ship_Safely
 * @subpackage Ship_Safely/controllers
 */

class SHIPSAFELY_Cart
{
  /**
   * add nano insurance from cart
   *
   */
  public static function shpsafe_get_variant($request)
  {
    try {
      defined("WC_ABSPATH") || exit();

      // Load cart functions which are loaded only on the front-end.
      include_once WC_ABSPATH . "includes/wc-cart-functions.php";
      include_once WC_ABSPATH . "includes/class-wc-cart.php";

      if (is_null(WC()->cart)) {
        wc_load_cart();
      }

      global $woocommerce;
      $items = $woocommerce->cart->get_cart();

      $parameters = $request->get_params();
      $id = $parameters["id"];
      $price = $parameters["price"];

      $variations = wc_get_product($id)->get_available_variations();

      if (!$variations || count($variations) <= 0) {
        return new WP_Error("Cart", "Failed to get nano insurance product.", [
          "status" => 400,
        ]);
      }

      $var = null;
      foreach ($variations as $key => $variation) {
        if ($variation["display_regular_price"] >= $price) {
          $var = $variation;
          break;
        }
      }

      if (!$var) {
        return new WP_Error("Cart", "Can't find the product", [
          "status" => 400,
        ]);
      }

      return $var;
    } catch (\Exception $error) {
      return new WP_Error(
        "Cart",
        "Failed to find 'Ship-Safely Shipping Protection' product.",
        [
          "status" => 400,
        ]
      );
    }

    return "Success";
  }

  /**
   * add nano insurance from cart
   *
   */
  public static function shpsafe_add_to_cart($request)
  {
    try {
      defined("WC_ABSPATH") || exit();

      // Load cart functions which are loaded only on the front-end.
      include_once WC_ABSPATH . "includes/wc-cart-functions.php";
      include_once WC_ABSPATH . "includes/class-wc-cart.php";

      if (is_null(WC()->cart)) {
        wc_load_cart();
      }

      global $woocommerce;
      $items = $woocommerce->cart->get_cart();

      $parameters = $request->get_params();
      $variation = $parameters["variation"];
      $id = $parameters["id"];
      // $price = $parameters["price"];

      if (!$variation) {
        return new WP_Error("Cart", "Can't find Ship-Safely products.", [
          "status" => 400,
        ]);
      }

      // delete a cart item
      foreach ($items as $item) {
        if ($item["product_id"] == $id) {
          $r = $woocommerce->cart->remove_cart_item($item["key"]);
        }
      }

      $res = $woocommerce->cart->add_to_cart($id, 1, $variation);

      return true;
    } catch (\Exception $error) {
      return new WP_Error(
        "Cart",
        "Failed to add 'Ship-Safely Shipping Protection' product to cart.",
        [
          "status" => 400,
        ]
      );
    }

    return "Success";
  }

  /**
   * remove nano insurance from cart
   *
   */
  public static function shpsafe_remove_from_cart($request)
  {
    try {
      defined("WC_ABSPATH") || exit();

      // Load cart functions which are loaded only on the front-end.
      include_once WC_ABSPATH . "includes/wc-cart-functions.php";
      include_once WC_ABSPATH . "includes/class-wc-cart.php";

      if (is_null(WC()->cart)) {
        wc_load_cart();
      }

      global $woocommerce;
      $items = $woocommerce->cart->get_cart();

      $parameters = $request->get_params();

      $id = $parameters["id"];

      // delete a cart item
      foreach ($items as $item) {
        if ($item["product_id"] == $id) {
          $r = $woocommerce->cart->remove_cart_item($item["key"]);
        }
      }
    } catch (\Exception $error) {
      return new WP_Error(
        "Cart",
        "Failed to delete 'Ship-Safely Shipping Protection' product from cart.",
        [
          "status" => 400,
        ]
      );
    }

    return "Success";
  }

  /**
   * Get cart price
   *
   */
  public static function shpsafe_cart_price($request)
  {
    try {
      defined("WC_ABSPATH") || exit();

      // Load cart functions which are loaded only on the front-end.
      include_once WC_ABSPATH . "includes/wc-cart-functions.php";
      include_once WC_ABSPATH . "includes/class-wc-cart.php";

      if (is_null(WC()->cart)) {
        wc_load_cart();
      }

      global $woocommerce;
      $items = $woocommerce->cart->get_cart();

      $parameters = $request->get_params();
      $id = $parameters["id"];

      $insurance = null;
      // delete a cart item
      foreach ($items as $item) {
        if ($item["product_id"] == $id) {
          $insurance = $item;
          break;
        }
      }

      if ($insurance) {
        return $woocommerce->cart->get_cart_contents_total() -
          $insurance["line_total"];
      }

      return $woocommerce->cart->get_cart_contents_total();
    } catch (\Exception $error) {
      return new WP_Error("Cart", "Failed to get cart price.", [
        "status" => 400,
      ]);
    }

    return new WP_Error("Cart", "Failed to get cart price.", [
      "status" => 400,
    ]);
  }

  /**
   * Get cart insurance instance
   *
   */
  public static function shpsafe_cart_insurance($request)
  {
    try {
      defined("WC_ABSPATH") || exit();

      // Load cart functions which are loaded only on the front-end.
      include_once WC_ABSPATH . "includes/wc-cart-functions.php";
      include_once WC_ABSPATH . "includes/class-wc-cart.php";

      if (is_null(WC()->cart)) {
        wc_load_cart();
      }

      global $woocommerce;
      $items = $woocommerce->cart->get_cart();

      $parameters = $request->get_params();

      $id = $parameters["id"];

      foreach ($items as $item) {
        if ($item["product_id"] == $id) {
          return $item["line_total"];
        }
      }

      return null;
    } catch (\Exception $error) {
      return new WP_Error("Cart", "Failed to get nano insurance.", [
        "status" => 400,
      ]);
    }

    return new WP_Error("Cart", "Failed to get nano insurance.", [
      "status" => 400,
    ]);
  }
}
