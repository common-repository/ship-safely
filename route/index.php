<?php

require_once __DIR__ . "/../controllers/cart.php";

function shpsafe_register_route()
{
  $baseurl = "nanoinsurance/v1";

  // get insurance price
  register_rest_route($baseurl, "cart/insuranceprice", [
    "methods" => "POST",
    "callback" => "SHIPSAFELY_Cart::shpsafe_get_variant",
    "permission_callback" => "__return_true",
  ]);

  // add insurance to cart
  register_rest_route($baseurl, "cart/insurance", [
    "methods" => "PUT",
    "callback" => "SHIPSAFELY_Cart::shpsafe_add_to_cart",
    "permission_callback" => "__return_true",
  ]);

  // remove insurance from cart
  register_rest_route($baseurl, "cart/insurance/(?P<id>\d+)", [
    "methods" => "DELETE",
    "callback" => "SHIPSAFELY_Cart::shpsafe_remove_from_cart",
    "permission_callback" => "__return_true",
  ]);

  // get cart price
  register_rest_route($baseurl, "cart/price/(?P<id>\d+)", [
    "methods" => "get",
    "callback" => "SHIPSAFELY_Cart::shpsafe_cart_price",
    "permission_callback" => "__return_true",
  ]);

  // get cart insurance
  register_rest_route($baseurl, "cart/insurance/(?P<id>\d+)", [
    "methods" => "get",
    "callback" => "SHIPSAFELY_Cart::shpsafe_cart_insurance",
    "permission_callback" => "__return_true",
  ]);
}

add_action("rest_api_init", "shpsafe_register_route");
