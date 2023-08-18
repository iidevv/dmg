__webpack_public_path__ = window.__webpack_public_path__; // eslint-disable-line

import $ from "jquery";
import Global from "./theme/global";

const getAccount = () => import("./theme/account");
const getLogin = () => import("./theme/auth");
const noop = null;

const pageClasses = {
  account_orderstatus: getAccount,
  account_order: getAccount,
  account_addressbook: getAccount,
  shippingaddressform: getAccount,
  account_new_return: getAccount,
  "add-wishlist": () => import("./theme/wishlist"),
  account_recentitems: getAccount,
  account_downloaditem: getAccount,
  editaccount: getAccount,
  account_inbox: getAccount,
  account_saved_return: getAccount,
  account_returns: getAccount,
  account_paymentmethods: getAccount,
  account_addpaymentmethod: getAccount,
  account_editpaymentmethod: getAccount,
  login: getLogin,
  createaccount_thanks: getLogin,
  createaccount: getLogin,
  getnewpassword: getLogin,
  forgotpassword: getLogin,
  blog: noop,
  blog_post: noop,
  brand: () => import("./theme/brand"),
  brands: () => import("./theme/brands"),
  cart: () => import("./theme/cart"),
  category: () => import("./theme/category"),
  compare: () => import("./theme/compare"),
  page_contact_form: () => import("./theme/contact-us"),
  error: noop,
  404: noop,
  giftcertificates: () => import("./theme/gift-certificate"),
  giftcertificates_balance: () => import("./theme/gift-certificate"),
  giftcertificates_redeem: () => import("./theme/gift-certificate"),
  default: () => import("./theme/home"),
  page: noop,
  product: () => import("./theme/product"),
  amp_product_options: () => import("./theme/product"),
  search: () => import("./theme/search"),
  rss: noop,
  sitemap: noop,
  newsletter_subscribe: noop,
  wishlist: () => import("./theme/wishlist"),
  wishlists: () => import("./theme/wishlist"),
};

const customClasses = {};

/**
 * This function gets added to the global window and then called
 * on page load with the current template loaded and JS Context passed in
 * @param pageType String
 * @param contextJSON
 * @returns {*}
 */
window.stencilBootstrap = function stencilBootstrap(
  pageType,
  contextJSON = null,
  loadGlobal = true
) {
  const context = JSON.parse(contextJSON || "{}");

  return {
    load() {
      $(() => {
        // Load globals
        if (loadGlobal) {
          Global.load(context);
        }

        const importPromises = [];

        // Find the appropriate page loader based on pageType
        const pageClassImporter = pageClasses[pageType];
        if (typeof pageClassImporter === "function") {
          importPromises.push(pageClassImporter());
        }

        // See if there is a page class default for a custom template
        const customTemplateImporter = customClasses[context.template];
        if (typeof customTemplateImporter === "function") {
          importPromises.push(customTemplateImporter());
        }

        // Wait for imports to resolve, then call load() on them
        Promise.all(importPromises).then((imports) => {
          imports.forEach((imported) => {
            imported.default.load(context);
          });
        });
      });
    },
  };
};

// header vehicle
$(function () {
  const input = $(".search__input");
  const suggestions = $(".search__dropdown--suggestions");
  const vehiclePicker = $(".search__dropdown--vehicle-picker");
  const vehiclePickerButton = $(".search__button--start");

  input.on("focus", function () {
    suggestions.addClass("search__dropdown--open");
  });
  input.on("blur", function () {
    suggestions.removeClass("search__dropdown--open");
  });

  vehiclePickerButton.on("click", function () {
    vehiclePickerButton.toggleClass("search__button--hover");
    vehiclePicker.toggleClass("search__dropdown--open");
  });

  vehiclePicker.on("transitionend", function (event) {
    if (
      event.originalEvent.propertyName === "visibility" &&
      vehiclePicker.is(event.target)
    ) {
      vehiclePicker
        .find(".vehicle-picker__panel:eq(0)")
        .addClass("vehicle-picker__panel--active");
      vehiclePicker
        .find(".vehicle-picker__panel:gt(0)")
        .removeClass("vehicle-picker__panel--active");
    }
    if (
      event.originalEvent.propertyName === "height" &&
      vehiclePicker.is(event.target)
    ) {
      vehiclePicker.css("height", "");
    }
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(
        ".search__dropdown--vehicle-picker, .search__button--start"
      ).length
    ) {
      vehiclePickerButton.removeClass("search__button--hover");
      vehiclePicker.removeClass("search__dropdown--open");
    }
  });

  $(".vehicle-picker [data-to-panel]").on("click", function (event) {
    event.preventDefault();

    const toPanel = $(this).data("to-panel");
    const currentPanel = vehiclePicker.find(".vehicle-picker__panel--active");
    const nextPanel = vehiclePicker.find('[data-panel="' + toPanel + '"]');

    currentPanel.removeClass("vehicle-picker__panel--active");
    nextPanel.addClass("vehicle-picker__panel--active");
  });
});

// .departments
$(function () {
  $(".departments__button").on("click", function (event) {
    event.preventDefault();

    $(this).closest(".departments").toggleClass("departments--open");
  });

  $(document).on("click", function (event) {
    $(".departments")
      .not($(event.target).closest(".departments"))
      .removeClass("departments--open");
  });

  // megamenu
  let currentItem = null;
  const container = $(".departments__menu-container");

  const catalogList = document.querySelector(".departments__list");
  const catalogBtn = document.querySelector(".departments__button");
  const isDesktop = window.innerWidth > 800;
  if (isDesktop) {
    let clicked = false;

    catalogBtn.addEventListener("click", () => {
      if (clicked === true) return;
      clicked = true;
      catalogList.innerHTML = `<li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/motorcycle-helmets/" class="departments__item-link">Helmets
            <span class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
        <div class="departments__item-menu">
            <div class="megamenu departments__megamenu departments__megamenu--size--md">
                <div class="megamenu__image"><img style="max-width: 230px;" loading="lazy"
                        src="https://cdn11.bigcommerce.com/s-4n3dh09e13/images/stencil/original/image-manager/helmets-img.png"
                        alt="helmets"></div>
                <div class="row">
                    <div class="col-4">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link"
                                    href="/motorcycle-helmets/">All
                                    Helmets</a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/full-face-motorcycle-helmets/">
                                            Full Face Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/modular-motorcycle-helmets/">
                                            Modular Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/half-motorcycle-helmets/">
                                            Half Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/open-face-and-34-motorcycle-helmets/">
                                            Open Face & 3/4 Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dual-sport-motorcycle-helmets/">
                                            Dual Sport Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dirt-motorcycle-helmets/">
                                            Dirt Bike Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/snowmobile-motorcycle-helmets/">
                                            Snowmobile Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/mountain-bike-helmets/">
                                            Mountain Bike
                                        </a>
                                    </li>
    
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item">
                                <a class="megamenu-links__item-link"
                                    href="/bluetooth-communication-and-intercoms/">
                                    Bluetooth & Intercoms
                                </a>
                            </li>
                            <li class="megamenu-links__item">
                                <a class="megamenu-links__item-link"
                                    href="/motorcycle-helmet-closeouts/">
                                    Closeouts
                                </a>
                            </li>
                            <li class="megamenu-links__item">
                                <a class="megamenu-links__item-link"
                                    href="/dmg-warehouse-motorcycle-helmets/">
                                    DMG Warehouse - Helmets
                                </a>
                            </li>
                            <li class="megamenu-links__item">
                                <a class="megamenu-links__item-link"
                                    href="/warehouse-shields-dmg/">
                                    DMG Warehouse - Shields
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/apparel/" class="departments__item-link">Apparel<span
                class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
        <div class="departments__item-menu">
            <div class="megamenu departments__megamenu departments__megamenu--size--lg">
                <div class="departments__megamenu-inner">
                    <div class="megamenu__image"><img loading="lazy" style="max-width: 360px;"
                            src="https://cdn11.bigcommerce.com/s-4n3dh09e13/images/stencil/original/image-manager/motorcycle-gear.png"
                            alt="apparel"></div>
                    <div class="row">
                        <div class="col-3">
                            <ul class="megamenu__links megamenu-links megamenu-links--root">
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-jackets/">
                                        Jackets
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/textile-motorcycle-jackets/">
                                                Textile
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/leather-motorcycle-jackets/">
                                                Leather
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mesh-motorcycle-jackets/">
                                                Mesh
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/waterproof-jackets/">
                                                Waterproof
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/riding-shirts/">
                                                Riding Shirts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-jackets-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dmg-warehouse-jackets/">
                                                DMG Warehouse
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-pants/">
                                        Pants
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/textile-motorcycle-pants/">
                                                Textile
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/leather-motorcycle-pants/">
                                                Leather
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mesh-motorcycle-pants/">
                                                Mesh
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-jeans/">
                                                Jeans
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dirt-bike-pants/">
                                                Dirt
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-pants-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dmg-warehouse-pants/">
                                                DMG Warehouse
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-gloves/">
                                        Gloves
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/gauntlet-motorcycle-gloves/">
                                                Gauntlet
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/short-cuff-motorcycle-gloves/">
                                                Short Cuff
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dirt-motorcycle-gloves/">
                                                Dirt
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/waterproof-motorcycle-gloves/">
                                                Waterproof
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/winter-motorcycle-gloves/">
                                                Winter
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-gloves-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dmg-warehouse-gloves/">
                                                DMG Warehouse
                                            </a>
                                        </li>
                                    </ul>
                                </li>
    
                            </ul>
                        </div>
                        <div class="col-3">
                            <ul class="megamenu__links megamenu-links megamenu-links--root">
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-boots-and-shoes/">
                                        Boots & Shoes
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/track-motorcycle-boots/">
                                                Track
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/touring-motorcycle-boots/">
                                                Touring
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/cruiser-motorcycle-boots/">
                                                Cruiser
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dirt-motorcycle-boots/">
                                                Dirt
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/snow-motorcycle-boots/">
                                                Snow
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-shoes/">
                                                Shoes
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-boots-and-shoes-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dmg-warehouse-boots-and-shoes/">
                                                DMG Warehouse
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-suits/">
                                        Suits
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/leather-motorcycle-suits/">
                                                Leather
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/textile-motorcycle-suits/">
                                                Textile
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/snow-motorcycle-suits/">
                                                Snow
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/rain-motorcycle-suits/">
                                                Rain
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-suits-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dmg-warehouse-suits/">
                                                DMG Warehouse
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-protection/">
                                        Protection
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-air-bags/">
                                                Air Bags
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-back-protectors/">
                                                Back Protectors
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-chest-protectors/">
                                                Chest Protectors
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-neck-braces/">
                                                Neck Braces
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-knee-guards/">
                                                Knee Guards
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-elbow-guards/">
                                                Elbow Guards
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-armored-pants/">
                                                Armored Pants
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-armored-shorts/">
                                                Armored Shorts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-kidney-belts/">
                                                Kidney Belts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-protection-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <ul class="megamenu__links megamenu-links megamenu-links--root">
    
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-casual/">
                                        Casual
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-jackets/">
                                                Jackets
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-flannels/">
                                                Flannels
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-hoodies/">
                                                Hoodies
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-shirts/">
                                                Shirts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-shorts/">
                                                Shorts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-hats/">
                                                Hats
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-beanies/">
                                                Beanies
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/motorcycle-casual-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link" href="/dirt-apparel/">
                                        Dirt
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dirt-bike-jerseys/">
                                                Jerseys
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dirt-bike-pants/">
                                                Pants
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/dirt-bike-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
    
                                <li class="megamenu-links__item">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-jerseys/">
                                        Jerseys
                                    </a>
                                </li>
                                <li class="megamenu-links__item">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-vests/">
                                        Vests
                                    </a>
                                </li>
                                <li class="megamenu-links__item">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-goggles/">
                                        Goggles
                                    </a>
                                </li>
                                <li class="megamenu-links__item">
                                    <a class="megamenu-links__item-link"
                                        href="/motorcycle-eyewear/">
                                        Eyewear
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <ul class="megamenu__links megamenu-links megamenu-links--root">
    
    
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link" href="/water-apparel/">
                                        Water
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/waterproof-wetsuits/">
                                                Wetsuits
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/waterproof-vests/">
                                                Vests
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/waterproof-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="megamenu-links__item megamenu-links__item--has-submenu">
                                    <a class="megamenu-links__item-link"
                                        href="/mountain-bike-apparel/">
                                        Mountain Bike
                                    </a>
                                    <ul class="megamenu-links">
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mountain-bike-jackets/">
                                                Jackets
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mountain-bike-pants/">
                                                Pants
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mountain-bike-shirts/">
                                                Shirts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mountain-bike-shorts/">
                                                Shorts
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mountain-bike-shoes/">
                                                Shoes
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mountain-bike-gloves/">
                                                Gloves
                                            </a>
                                        </li>
                                        <li class="megamenu-links__item">
                                            <a class="megamenu-links__item-link"
                                                href="/mountain-bike-closeouts/">
                                                Closeouts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li class="departments__item departments__item--parts-main">
        <a href="/#search-by-vehicle" class="departments__item-link">Parts<span
                class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span>
        </a>
    </li>
    <li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/accessories/" class="departments__item-link">Accessories<span
                class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
        <div class="departments__item-menu">
            <div class="megamenu departments__megamenu departments__megamenu--size--lg">
                <div class="megamenu__image"><img loading="lazy" style="max-width: 220px;"
                        src="https://cdn11.bigcommerce.com/s-4n3dh09e13/images/stencil/original/image-manager/moto-accessories.png"
                        alt=""></div>
                <div class="row">
                    <div class="col-3">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link"
                                    href="/motorcycle-accessories/">Motorcycle</a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-audio/">
                                            Audio
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-battery-chargers/">
                                            Battery Chargers
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-camping/">
                                            Camping
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-cleaning-supplies/">
                                            Cleaning Supplies
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-electronics-and-mounts/">
                                            Electronics & Mounts
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-gifts/">
                                            Gifts
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-luggage-and-backpacks/">
                                            Luggage & Backpacks
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-masks-and-headwear/">Masks &
                                            Headwear</a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-oil-and-fluids/">
                                            Oil & Fluids
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-security/">
                                            Security
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-tools/">
                                            Tools
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-transport-and-storage/">Transport
                                            &
                                            Storage</a>
                                    </li>
                                </ul>
    
    
                            </li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link"
                                    href="/utv-atv-accessories/">UTV/ATV</a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-battery-chargers/">
                                            Battery Chargers
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-cab-and-interior/">
                                            Cab & Interior
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-camping/">
                                            Camping
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-cargo-and-storage/">
                                            Cargo & Storage
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-fire-exstinguisher-and-safety/">
                                            Fire Exstinguisher & Safety
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utvatv-flags-and-whips/">
                                            Flags & Whips
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-gps/">
                                            GPS
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-hunting-and-fishing/">
                                            Hunting & Fishing
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-intercoms-and-communications/">
                                            Intercoms & Communications
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-oil-and-chemical/">
                                            Oil & Chemical
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-speakers/">
                                            Speakers
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-tools/">
                                            Tools
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/utv-atv-transport-and-storage/">
                                            Transport & Storage
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/covers/">Covers</a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link" href="/motorcycle-covers/">
                                            Motorcycle
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link" href="/utv-atv-covers/">
                                            UTV/ATV
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link" href="/watercraft-covers/">
                                            Watercraft
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/warehouse-covers-dmg/">
                                            DMG Warehouse
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="megamenu-links__item">
                                <a class="megamenu-links__item-link"
                                    href="/warehouse-luggage-dmg/">
                                    DMG Warehouse - Luggage
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-3">
    
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/tire-search/" class="departments__item-link">Tires
            <span class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
    </li>
    <li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/vehicles/" class="departments__item-link">Vehicles
            <span class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
        <div class="departments__item-menu">
            <div class="megamenu departments__megamenu departments__megamenu--size--nl">
                <div class="megamenu__image"><img style="max-width: 220px;" loading="lazy"
                        src="https://cdn11.bigcommerce.com/s-4n3dh09e13/images/stencil/original/image-manager/edbb7a90-6ad2-4ea9-97ae-fb87d32b9bfe-72007.png"
                        alt=""></div>
                <div class="row">
                    <div class="col-6">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/vehicles/">All
                                    Vehicles</a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/electric-bikes/">
                                            Electric Bikes
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/women-apparel/" class="departments__item-link">Women<span
                class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
        <div class="departments__item-menu">
            <div class="megamenu departments__megamenu departments__megamenu--size--md">
                <div class="megamenu__image"><img loading="lazy" style="max-width: 360px;"
                        src="https://cdn11.bigcommerce.com/s-4n3dh09e13/images/stencil/original/image-manager/motorcycle-gear.png"
                        alt="Women's apparel"></div>
                <div class="row">
                    <div class="col-4">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/womens-jackets/">
                                    Jackets
                                </a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-textile-jackets/">
                                            Textile
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-leather-jackets/">
                                            Leather
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-mesh-jackets/">
                                            Mesh
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-riding-shirts/">
                                            Riding Shirts
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-closeouts/">
                                            Closeouts
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-womens-jackets/">
                                            DMG Warehouse
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/womens-pants/">
                                    Pants
                                </a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-textile-pants/">
                                            Textile
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-leather-pants/">
                                            Leather
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-mesh-pants/">
                                            Mesh
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-jeans/">
                                            Jeans
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-dirt-bike-pants/">
                                            Dirt
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-pants-closeouts/">
                                            Closeouts
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-womens-pants/">
                                            DMG Warehouse
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/womens-gloves/">
                                    Gloves
                                </a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-gauntlet-gloves/">
                                            Gauntlet
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-short-cuff-gloves/">
                                            Short Cuff
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-dirt-bike-gloves/">
                                            Dirt
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-waterproof-gloves/">
                                            Waterproof
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-winter-gloves/">
                                            Winter
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-gloves-closeouts/">
                                            Closeouts
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
    
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/womens-suits/">
                                    Suits
                                </a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-leather-suits/">
                                            Leather
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-snow-suits/">
                                            Snow
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-waterproof-gloves/">
                                            Rain
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-gloves-closeouts/">
                                            Closeouts
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/womens-protection/">
                                    Protection
                                </a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-air-bags-protection/">
                                            Air Bags
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/motorcycle-back-protectors/">
                                            Back Protectors
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-neck-braces/">
                                            Neck Braces
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-knee-guards/">
                                            Knee Guards
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-elbow-guards/">
                                            Elbow Guards
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-armored-pants/">
                                            Armored Pants
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-armored-shorts/">
                                            Armored Shorts
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-kidney-belts/">
                                            Kidney Belts
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-protection-closeouts/">
                                            Closeouts
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item">
                                <a class="megamenu-links__item-link" href="/womens-jerseys/">
                                    Jerseys
                                </a>
                            </li>
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link"
                                    href="/womens-boots-and-shoes/">
                                    Boots & Shoes
                                </a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-track-boots/">
                                            Track
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-touring-boots/">
                                            Touring
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-cruiser-boots/">
                                            Cruiser
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-dirt-bike-boots/">
                                            Dirt
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-snowmobile-boots/">
                                            Snow
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-shoes/">
                                            Shoes
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/womens-boots-closeouts/">
                                            Closeouts
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/youth-apparel/" class="departments__item-link">Youth<span
                class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
        <div class="departments__item-menu">
            <div class="megamenu departments__megamenu departments__megamenu--size--nl">
                <div class="megamenu__image"><img loading="lazy" style="max-width: 220px;"
                        src="https://cdn11.bigcommerce.com/s-4n3dh09e13/images/stencil/original/image-manager/women-moto-gear.png"
                        alt=""></div>
                <div class="row">
                    <div class="col-6">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link"
                                    href="/youth-apparel/">Youth</a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-helmets/">
                                            Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-jerseys/">
                                            Jerseys
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-jackets/">
                                            Jackets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-pants/">
                                            Pants
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-boots-and-shoes/">
                                            Boots & Shoes
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-gloves/">
                                            Gloves
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-goggles/">
                                            Goggles
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-casual/">
                                            Casual
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/youth-protection/">
                                            Protection
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li
        class="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
        <a href="/warehouse/" class="departments__item-link">DMG Warehouse<span
                class="departments__item-arrow"><svg width="7" height="11">
                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                </svg></span></a>
        <div class="departments__item-menu">
            <div class="megamenu departments__megamenu departments__megamenu--size--nl">
                <div class="megamenu__image"><img loading="lazy" style="max-width: 220px;"
                        src="https://cdn11.bigcommerce.com/s-4n3dh09e13/images/stencil/original/image-manager/women-moto-gear.png"
                        alt=""></div>
                <div class="row">
                    <div class="col-6">
                        <ul class="megamenu__links megamenu-links megamenu-links--root">
                            <li class="megamenu-links__item megamenu-links__item--has-submenu">
                                <a class="megamenu-links__item-link" href="/warehouse/">DMG
                                    Warehouse</a>
                                <ul class="megamenu-links">
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-motorcycle-helmets/">
                                            Helmets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-jackets/">
                                            Jackets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-womens-jackets/">
                                            Women's Jackets
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-pants/">
                                            Pants
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-boots-and-shoes/">
                                            Boots & Shoes
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-womens-pants/">
                                            Women's Pants
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-suits/">
                                            Suits
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/warehouse-shields-dmg/">
                                            Shields
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/warehouse-luggage-dmg/">
                                            Luggage
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/warehouse-covers-dmg/">
                                            Covers
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-gloves/">
                                            Gloves
                                        </a>
                                    </li>
                                    <li class="megamenu-links__item">
                                        <a class="megamenu-links__item-link"
                                            href="/dmg-warehouse-rain-gear/">
                                            Rain Gear
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </li>`;
      $(".departments__item").on("mouseenter", function () {
        if (currentItem) {
          const megamenu = currentItem.data("megamenu");

          if (megamenu) {
            megamenu.removeClass("departments__megamenu--open");
          }

          currentItem.removeClass("departments__item--hover");
          currentItem = null;
        }

        currentItem = $(this).addClass("departments__item--hover");

        if (currentItem.is(".departments__item--submenu--megamenu")) {
          let megamenu = currentItem.data("megamenu");

          if (!megamenu) {
            megamenu = $(this).find(".departments__megamenu");

            currentItem.data("megamenu", megamenu);

            container.append(megamenu);
          }

          megamenu.addClass("departments__megamenu--open");
        }
      });
      $(".departments__list-padding").on("mouseenter", function () {
        if (currentItem) {
          const megamenu = currentItem.data("megamenu");

          if (megamenu) {
            megamenu.removeClass("departments__megamenu--open");
          }

          currentItem.removeClass("departments__item--hover");
          currentItem = null;
        }
      });
      $(".departments__body").on("mouseleave", function () {
        if (currentItem) {
          const megamenu = currentItem.data("megamenu");

          if (megamenu) {
            megamenu.removeClass("departments__megamenu--open");
          }

          currentItem.removeClass("departments__item--hover");
          currentItem = null;
        }
      });
    });
  }

  // scroll menu
  const menuBlock = document.querySelector(".header");
  const body = document.querySelector("body");
  const megaMenu = document.querySelector(".departments");
  let menuBlockHeight = menuBlock.offsetHeight;

  window.addEventListener("scroll", function () {
    if (
      window.pageYOffset >= 300 &&
      !megaMenu.classList.contains("departments--open")
    ) {
      menuBlock.classList.add("header--fixed");
      body.style.marginTop = `${menuBlockHeight}px`;
    } else if (
      window.pageYOffset < 300 &&
      !megaMenu.classList.contains("departments--open")
    ) {
      menuBlock.classList.remove("header--fixed");
      body.style.marginTop = 0;
    }
  });
  // mobile menu

  const menuBtn = document.querySelector(".menu-btn"),
    menuClose = document.querySelector(".menu__close"),
    menu = document.querySelector(".menu__inner");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == menuBtn;
    const menu_is_active = menu.classList.contains("active");
    const its_closeBtn = target == menuClose;

    if ((!its_menu && !its_btnMenu && menu_is_active) || its_closeBtn) {
      menu.classList.remove("active");
      body.classList.remove("lock");
    }
  });

  // плавный скролл

  const smoothLinks = document.querySelectorAll('a[href^="/#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      const id = smoothLink.getAttribute("href").substring(1);

      if (document.querySelector(id) !== null) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  const subCategories = document.querySelectorAll(".dmg-subcategories__list a");
  const subCategoriesBtn = document.querySelector(".dmg-subcategories__btn");
  if (subCategories[0]) {
    if (subCategories.length > 6) {
      for (let i = 6; i < subCategories.length; i++) {
        subCategories[i].style.display = "none";
      }
      subCategoriesBtn.addEventListener("click", () => {
        subCategoriesBtn.style.display = "none";

        for (let i = 6; i < subCategories.length; i++) {
          subCategories[i].style.height = "0px";
          subCategories[i].style.display = "block";
          subCategories[i].style.height = subCategories[i].scrollHeight + "px";
        }
      });
    } else {
      subCategoriesBtn.style.display = "none";
    }
  }

  // sort product variants
  const optionsContainer = document.querySelector(
    '.form-field[data-product-attribute="set-rectangle"]'
  );

  if (optionsContainer) {
    const options = Array.from(
      optionsContainer.getElementsByClassName("form-option-wrapper")
    );

    const sizeOrder = {
      xs: 0,
      xsmall: 0,
      extrasmall: 0,
      s: 1,
      sm: 1,
      small: 1,
      m: 2,
      md: 2,
      med: 2,
      medium: 2,
      l: 3,
      lg: 3,
      large: 3,
      xl: 4,
      xlarge: 4,
      extralarge: 4,
      "2x": 5,
      "2xl": 5,
      xxl: 5,
      doublexl: 5,
      "3x": 6,
      "3xl": 6,
      xxxl: 6,
      triplexl: 6,
      "4x": 7,
      "4xl": 7,
      "5x": 8,
      "5xl": 8,
    };

    let i = 0; // index to track the position of the element
    let currentColor = ""; // current color to track the group

    options
      .sort(function (a, b) {
        const aLength = a.textContent.trim().split(" ").length;
        const bLength = b.textContent.trim().split(" ").length;
        let aColor = "";
        let bColor = "";
        let aSize = a.textContent
          .trim()
          .split(" ")
          .slice(-1)
          .pop()
          .toLowerCase();
        let bSize = b.textContent
          .trim()
          .split(" ")
          .slice(-1)
          .pop()
          .toLowerCase();

        if (aLength > 1 && bLength > 1) {
          aColor = a.textContent
            .trim()
            .slice(0, a.textContent.trim().lastIndexOf(" "))
            .toLowerCase();
          bColor = b.textContent
            .trim()
            .slice(0, b.textContent.trim().lastIndexOf(" "))
            .toLowerCase();
        }

        if (Number(aSize) && Number(bSize)) {
          aSize = +aSize;
          bSize = +bSize;
        }

        if (Number(aSize) && Number(bSize) && aColor === bColor) {
          return aSize - bSize;
        } else if (aColor === bColor) {
          return sizeOrder[aSize] - sizeOrder[bSize];
        }

        return aColor.localeCompare(bColor);
      })
      .forEach(function (option) {
        let color = option.textContent
          .trim()
          .slice(0, option.textContent.trim().lastIndexOf(" "))
          .toLowerCase();

        if (color !== currentColor) {
          currentColor = color;
          i++; // increment index by 1 when a new group starts
        }

        option.querySelector(".form-option").style.backgroundColor =
          i % 2 === 0 ? "#f6f6f6" : "#fff";
        optionsContainer.appendChild(option);
      });
  }
});
