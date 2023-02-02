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
});

// departments megamenu
$(function () {
  let currentItem = null;
  const container = $(".departments__menu-container");

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

document.addEventListener("DOMContentLoaded", () => {
  // scroll menu
  const menuBlock = document.querySelector(".header"),
    body = document.querySelector("body");
  let menuBlockHeight = menuBlock.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 300) {
      menuBlock.classList.add("header--fixed");
      body.style.marginTop = `${menuBlockHeight}px`;
    } else if (window.pageYOffset < 300) {
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
});
