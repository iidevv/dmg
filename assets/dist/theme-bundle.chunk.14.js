(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");



function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');
  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
  }
  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pace */ "./node_modules/pace-js/pace.min.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");




function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context.urls);
    this.removeSlick();
    this.tabCarousel();
    this.product_new_tab();
    this.productsShowMore();
    this.customArrowButton();
    this.initAjaxProductsID();
    this.initAjaxProductsByCategory();
    this.initAjaxProductsByCategoryGrid();
    this.initAjaxProductsByCategoryIdTabs();
    this.initAjaxProductsByCategorySortingTabs();
    this.initPopupVideo();
    // this.initInstagram();
  }

  // ========================================================================
  // instagram
  // ========================================================================

  // ========================================================================
  // Custom arrow button (slick)
  // ========================================================================
  ;
  _proto.customArrowButton = function customArrowButton() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(".btn-arrow-prev").on("click", function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents(".themevale_productsCarousel-custom");
      wrapper.find("[data-slick]").slick("slickPrev");
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(".btn-arrow-next").on("click", function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents(".themevale_productsCarousel-custom");
      wrapper.find("[data-slick]").slick("slickNext");
    });
  }

  // ========================================================================
  // Ajax load products in a category tabs
  // ========================================================================
  ;
  _proto.initAjaxProductsByCategory = function initAjaxProductsByCategory() {
    var _this = this;
    var template = "themevale/homepage/component/ajax-products-by-category-id-result",
      urlKey = "themevale-products-by-category-id";
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-themevale-products-by-category-id]").each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this.request(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request = function request($placeholder, tmpl, urlKey) {
    if ($placeholder.data("themevaleLoaded")) return;
    var template = tmpl;
    if ($placeholder.data("themevaleTemplate")) {
      template = $placeholder.data("themevaleTemplate");
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, "");
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data("themevaleLoaded", true);
      $placeholder.find(".productCarousel-slide").each(function () {
        var product_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find(".card-sale").attr("data-product-id");
        Object(_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_8__["default"])(product_id);
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-slick]", $placeholder).slick();
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() < 1025) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom .productGrid").slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }, {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 551,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }]
        });
      }
    });
  };
  _proto.initAjaxProductsByCategorySortingTabs = function initAjaxProductsByCategorySortingTabs() {
    var _this2 = this;
    var urlKey = "themevale-products-by-category-sorting-tabs",
      template = "themevale/homepage/component/ajax-products-by-category-sorting-tabs-result";

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(".is-active[data-themevale-products-by-category-sorting-tabs]").each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_productsCategorySortTabs [data-tab]").on("toggled", function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_4___default()("a", tab).attr("href")), template, urlKey);
      });
    });
  };
  _proto.request2 = function request2($placeholder, tmpl, urlKey) {
    if ($placeholder.data("themevaleLoaded")) return;
    var template = tmpl;
    if ($placeholder.data("themevaleTemplate")) {
      template = $placeholder.data("themevaleTemplate");
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, "");
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data("themevaleLoaded", true);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-slick]", $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryIdTabs = function initAjaxProductsByCategoryIdTabs() {
    var _this3 = this;
    var template = "themevale/homepage/component/ajax-products-by-category-id-tabs-result",
      urlKey = "themevale-products-by-category-id-tabs";

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(".is-active [data-themevale-products-by-category-id-tabs]").each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-themevale-products-by-category-id-tabs]").on("toggled", function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-themevale-products-by-category-id-tabs]", jquery__WEBPACK_IMPORTED_MODULE_4___default()("a", tab).attr("href")), template, urlKey);
      });
    });
  };
  _proto.request3 = function request3($placeholder, tmpl, urlKey) {
    if ($placeholder.data("themevaleLoaded")) return;
    var template = tmpl;
    if ($placeholder.data("themevaleTemplate")) {
      template = $placeholder.data("themevaleTemplate");
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, "");
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data("themevaleLoaded", true);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-slick]", $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryGrid = function initAjaxProductsByCategoryGrid() {
    var _this4 = this;
    var template = "themevale/homepage/component/ajax-products-by-category-id-grid-result",
      urlKey = "themevale-products-grid-by-category-id";
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_productsByCategoryId-grid [data-themevale-products-grid-by-category-id]").each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this4.request4(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request4 = function request4($placeholder, tmpl, urlKey) {
    var _this5 = this;
    if ($placeholder.data("themevaleLoaded")) return;
    var template = tmpl;
    if ($placeholder.data("themevaleTemplate")) {
      template = $placeholder.data("themevaleTemplate");
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, "");
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data("themevaleLoaded", true);
      _this5.productsShowMore();
    });
  };
  _proto.tabCarousel = function tabCarousel() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-themevale-products-by-category-id-tabs]").on("toggled", function (event, tab) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".productCarousel[data-slick]").slick("setPosition");
    });
  }

  // ========================================================================
  // Ajax load products ID in a category banner
  // ========================================================================
  ;
  _proto.initAjaxProductsID = function initAjaxProductsID() {
    var $options = {
      config: {
        products: {
          new: {
            limit: 20
          }
        }
      },
      template: "themevale/homepage/component/ajax-product-id"
    };
    var $thisProd = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#product-popup");
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-product-item .position-point").on("click", function () {
      $thisProd.empty();
      var $prodId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data("product-id");
      var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().position();
      var container = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-banner > .container").offset();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $thisProd.html(response);
      });
      $thisProd.toggleClass("show");
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 1024) {
        $thisProd.css({
          top: position.top,
          left: position.left + container.left - $thisProd.width()
        });
      } else {
        $thisProd.css({
          top: position.top + 15,
          left: 30
        });
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", ".close-product", function () {
      if ($thisProd.hasClass("show")) {
        $thisProd.removeClass("show");
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", function (event) {
      if ($thisProd.hasClass("show")) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.target).closest($thisProd).length === 0 && jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.target).closest(".position-point").length === 0) {
          $thisProd.removeClass("show");
        }
      }
    });
  }

  // ========================================================================
  // Products Show More
  // ========================================================================
  ;
  _proto.productsShowMore = function productsShowMore(context) {
    var productsToShow = Number(jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-number-product]").attr("data-number-product"));
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 551) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').css({
            display: "inline-block"
          });
          for (var i = productsToShow + 1, len = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length; i <= len; i++) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product:nth-child(' + i + ")").css({
              display: "none"
            });
          }
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .themevale_showMoreProduct').length) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
          }
        }
      } else {
        productsToShow = 4;
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').css({
            display: "inline-block"
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product:nth-child(n + 7)').css({
            display: "none"
          });
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .themevale_showMoreProduct').length) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
          }
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_showMoreProduct a").on("click", function (e) {
        e.preventDefault();
        var listProducts = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('[data-event="show more"]');
        listProducts.find(".productGrid .product:hidden:lt(" + productsToShow + ")").show();
        if (listProducts.find(".productGrid .product:hidden").length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().css({
            display: "none"
          });
        }
      });
    }
  }

  // ========================================================================
  // Remove slick slider (mobile)
  // ========================================================================
  ;
  _proto.removeSlick = function removeSlick() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() < 1025) {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").hasClass("slick-slider")) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").slick("unslick");
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").hasClass("slick-slider")) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").slick("unslick");
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").hasClass("slick-slider")) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").slick("unslick");
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").hasClass("slick-slider")) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").slick("unslick");
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").hasClass("slick-slider")) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").slick("unslick");
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").hasClass("slick-slider")) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").slick("unslick");
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom").length) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom .productGrid").hasClass("slick-slider")) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom .productGrid").slick({
            dots: true,
            arrows: false,
            infinite: false,
            mobileFirst: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }, {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }, {
              breakpoint: 551,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }]
          });
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() < 1025) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").slick("unslick");
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").slick("unslick");
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").slick("unslick");
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").slick("unslick");
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").slick("unslick");
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").slick("unslick");
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom").length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom .productGrid").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom .productGrid").slick({
              dots: true,
              arrows: false,
              infinite: false,
              mobileFirst: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              responsive: [{
                breakpoint: 1100,
                settings: "unslick"
              }, {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }, {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }, {
                breakpoint: 551,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }]
            });
          }
        }
      } else {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandSlider").slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_featuredCategory-wrapper").slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".recent_postCarousel").slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".brandsImage-slider").slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_category-carousel").slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_video_carousel").slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom").length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom .productGrid").hasClass("slick-slider")) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_section-flash-sale.custom .productGrid").slick("unslick");
          }
        }
      }
    });
  };
  _proto.product_new_tab = function product_new_tab() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()("#themevale_new_product").length) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_productsCategorySortNew .tabs-contents .tab-content").each(function (index) {
        if (index == 0) {
          var thisItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents("#themevale_new_product"),
            cat_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr("id").replace("tab-", ""),
            url = thisItem.find('[cat-id="' + cat_id + '"]').attr("cat-url"),
            sort_new = "?sort=newest";
          url += sort_new;
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
            template: "themevale/homepage/component/ajax-products-by-category-sorting-new-result"
          }, function (err, response) {
            thisItem.find("#tab-" + cat_id).find(".themevale_productLoading").remove();
            thisItem.find("#tab-" + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-slick]", thisItem).slick();
          });
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".themevale_productsCategorySortNew .tab-title").on("click", function (event) {
        event.preventDefault();
        var thisItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents("#themevale_new_product"),
          cat_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().attr("cat-id"),
          url = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().attr("cat-url"),
          sort_new = "?sort=newest";
        url += sort_new;
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()("#themevale_new_product #tab-" + cat_id).find(".themevale_productLoading").length) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
            template: "themevale/homepage/component/ajax-products-by-category-sorting-new-result"
          }, function (err, response) {
            thisItem.find("#tab-" + cat_id).find(".themevale_productLoading").remove();
            thisItem.find("#tab-" + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-slick]", "#themevale_new_product #tab-" + cat_id).slick();
          });
        }
      });
    }
  };
  _proto.initPopupVideo = function initPopupVideo() {
    var _this6 = this;
    if (this.context.themeSettings["themevale_category-banner-video-url"] != "") {
      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])("#popup-video")[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", '[data-reveal-id="popup-video"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings["themevale_category-banner-video-url"] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        modal.updateContent($content);
      });
    }
    if (this.context.themeSettings["homepage_video_url_1"] != "") {
      var _modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])("#popup-video-1")[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", '[data-reveal-id="popup-video-1"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings["homepage_video_url_1"] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal.updateContent($content);
      });
    }
    if (this.context.themeSettings["homepage_video_url_2"] != "") {
      var _modal2 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])("#popup-video-2")[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", '[data-reveal-id="popup-video-2"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings["homepage_video_url_2"] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal2.updateContent($content);
      });
    }
    if (this.context.themeSettings["homepage_video_url_3"] != "") {
      var _modal3 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])("#popup-video-3")[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", '[data-reveal-id="popup-video-3"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings["homepage_video_url_3"] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal3.updateContent($content);
      });
    }
    if (this.context.themeSettings["homepage_video_url_4"] != "") {
      var _modal4 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])("#popup-video-4")[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", '[data-reveal-id="popup-video-4"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings["homepage_video_url_4"] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal4.updateContent($content);
      });
    }
    if (this.context.themeSettings["homepage_video_url_5"] != "") {
      var _modal5 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])("#popup-video-5")[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on("click", '[data-reveal-id="popup-video-5"]', function () {
        var $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="' + _this6.context.themeSettings["homepage_video_url_5"] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal5.updateContent($content);
      });
    }
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwibGVuZ3RoIiwiaXMiLCJhZGRDbGFzcyIsImF0dHIiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJwcm9kdWN0cyIsIiRjaGVja2VkIiwiJCIsIiRjb21wYXJlTGluayIsImVsZW1lbnQiLCJ2YWx1ZSIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiSG9tZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsInJlbW92ZVNsaWNrIiwidGFiQ2Fyb3VzZWwiLCJwcm9kdWN0X25ld190YWIiLCJwcm9kdWN0c1Nob3dNb3JlIiwiY3VzdG9tQXJyb3dCdXR0b24iLCJpbml0QWpheFByb2R1Y3RzSUQiLCJpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzIiwiaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicyIsImluaXRQb3B1cFZpZGVvIiwiZSIsIndyYXBwZXIiLCJwYXJlbnRzIiwic2xpY2siLCJ0ZW1wbGF0ZSIsInVybEtleSIsImVhY2giLCJpIiwicGxhY2Vob2xkZXIiLCJQYWNlIiwiaWdub3JlIiwicmVxdWVzdCIsIiRwbGFjZWhvbGRlciIsInRtcGwiLCJkYXRhIiwidXJsIiwicmVwbGFjZSIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3AiLCJwcm9kdWN0X2lkIiwiQ291bnRkb3duIiwid2luZG93Iiwid2lkdGgiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInJlcXVlc3QyIiwidGFiIiwicmVxdWVzdDMiLCJyZXF1ZXN0NCIsIiRvcHRpb25zIiwiY29uZmlnIiwibmV3IiwibGltaXQiLCIkdGhpc1Byb2QiLCJlbXB0eSIsIiRwcm9kSWQiLCJwb3NpdGlvbiIsInBhcmVudCIsImNvbnRhaW5lciIsIm9mZnNldCIsImdldEJ5SWQiLCJyZXNwb25zZSIsInRvZ2dsZUNsYXNzIiwiY3NzIiwidG9wIiwibGVmdCIsImRvY3VtZW50IiwiaGFzQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJvZHVjdHNUb1Nob3ciLCJOdW1iZXIiLCJkaXNwbGF5IiwibGVuIiwiYXBwZW5kIiwibGlzdFByb2R1Y3RzIiwic2hvdyIsInJlc2l6ZSIsInRoaXNJdGVtIiwiY2F0X2lkIiwic29ydF9uZXciLCJyZW1vdmUiLCJ0aGVtZVNldHRpbmdzIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCIkY29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBRXpDLFNBQVNBLGdCQUFnQixDQUFDQyxPQUFPLEVBQUVDLElBQUksRUFBRTtFQUNyQyxJQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDRixJQUFJLENBQUM7RUFF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LENBQUM7RUFBQTtBQUFBLEVBNzBCK0JFLHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xyXG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XHJcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcclxuICAgIGxldCBwcm9kdWN0cztcclxuXHJcbiAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgIGlmICgkY2hlY2tlZC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBwcm9kdWN0cyA9IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xyXG5cclxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KHByb2R1Y3RzLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbXBhcmVDb3VudGVyID0gcHJvZHVjdHMgfHwgW107XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tIFwiLi9wYWdlLW1hbmFnZXJcIjtcclxuaW1wb3J0IFBhY2UgZnJvbSBcInBhY2VcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlsc1wiO1xyXG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCIuL3RoZW1ldmFsZS90aGVtZXZhbGVfQ291bnRkb3duXCI7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSBcIi4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHNcIjtcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gXCIuL2dsb2JhbC9tb2RhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICBvblJlYWR5KCkge1xyXG4gICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVNsaWNrKCk7XHJcbiAgICB0aGlzLnRhYkNhcm91c2VsKCk7XHJcbiAgICB0aGlzLnByb2R1Y3RfbmV3X3RhYigpO1xyXG4gICAgdGhpcy5wcm9kdWN0c1Nob3dNb3JlKCk7XHJcbiAgICB0aGlzLmN1c3RvbUFycm93QnV0dG9uKCk7XHJcbiAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNJRCgpO1xyXG4gICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSgpO1xyXG4gICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeUdyaWQoKTtcclxuICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlJZFRhYnMoKTtcclxuICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicygpO1xyXG4gICAgdGhpcy5pbml0UG9wdXBWaWRlbygpO1xyXG4gICAgLy8gdGhpcy5pbml0SW5zdGFncmFtKCk7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBpbnN0YWdyYW1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBDdXN0b20gYXJyb3cgYnV0dG9uIChzbGljaylcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBjdXN0b21BcnJvd0J1dHRvbigpIHtcclxuICAgICQoXCIuYnRuLWFycm93LXByZXZcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciB3cmFwcGVyID0gJCh0aGlzKS5wYXJlbnRzKFwiLnRoZW1ldmFsZV9wcm9kdWN0c0Nhcm91c2VsLWN1c3RvbVwiKTtcclxuICAgICAgd3JhcHBlci5maW5kKFwiW2RhdGEtc2xpY2tdXCIpLnNsaWNrKFwic2xpY2tQcmV2XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5idG4tYXJyb3ctbmV4dFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIHdyYXBwZXIgPSAkKHRoaXMpLnBhcmVudHMoXCIudGhlbWV2YWxlX3Byb2R1Y3RzQ2Fyb3VzZWwtY3VzdG9tXCIpO1xyXG4gICAgICB3cmFwcGVyLmZpbmQoXCJbZGF0YS1zbGlja11cIikuc2xpY2soXCJzbGlja05leHRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFqYXggbG9hZCBwcm9kdWN0cyBpbiBhIGNhdGVnb3J5IHRhYnNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnkoKSB7XHJcbiAgICB2YXIgdGVtcGxhdGUgPVxyXG4gICAgICAgIFwidGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXJlc3VsdFwiLFxyXG4gICAgICB1cmxLZXkgPSBcInRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZFwiO1xyXG5cclxuICAgICQoXCJbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWRdXCIpLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlcXVlc3QoJChwbGFjZWhvbGRlciksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXF1ZXN0KCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVMb2FkZWRcIikpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlVGVtcGxhdGVcIikpIHtcclxuICAgICAgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZVRlbXBsYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sIFwiXCIpO1xyXG5cclxuICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZUxvYWRlZFwiLCB0cnVlKTtcclxuICAgICAgJHBsYWNlaG9sZGVyLmZpbmQoXCIucHJvZHVjdENhcm91c2VsLXNsaWRlXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5maW5kKFwiLmNhcmQtc2FsZVwiKS5hdHRyKFwiZGF0YS1wcm9kdWN0LWlkXCIpO1xyXG4gICAgICAgIENvdW50ZG93bihwcm9kdWN0X2lkKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKFwiW2RhdGEtc2xpY2tdXCIsICRwbGFjZWhvbGRlcikuc2xpY2soKTtcclxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICAgICQoXCIudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkXCIpLnNsaWNrKHtcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicygpIHtcclxuICAgIHZhciB1cmxLZXkgPSBcInRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLXRhYnNcIixcclxuICAgICAgdGVtcGxhdGUgPVxyXG4gICAgICAgIFwidGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctdGFicy1yZXN1bHRcIjtcclxuXHJcbiAgICAvLyBBamF4IHJlcXVlc3QgbG9hZGluZyBwcm9kdWN0cyBpbiB0aGUgYWN0aXZlIHRhYlxyXG4gICAgJChcIi5pcy1hY3RpdmVbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy10YWJzXVwiKS5lYWNoKFxyXG4gICAgICAoaSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QyKCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAkKFwiLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydFRhYnMgW2RhdGEtdGFiXVwiKS5vbihcclxuICAgICAgXCJ0b2dnbGVkXCIsXHJcbiAgICAgIChldmVudCwgdGFiKSA9PiB7XHJcbiAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0MigkKCQoXCJhXCIsIHRhYikuYXR0cihcImhyZWZcIikpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgcmVxdWVzdDIoJHBsYWNlaG9sZGVyLCB0bXBsLCB1cmxLZXkpIHtcclxuICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZUxvYWRlZFwiKSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IHRtcGw7XHJcbiAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVUZW1wbGF0ZVwiKSkge1xyXG4gICAgICB0ZW1wbGF0ZSA9ICRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlVGVtcGxhdGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVybCA9ICRwbGFjZWhvbGRlci5kYXRhKHVybEtleSk7XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgXCJcIik7XHJcblxyXG4gICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcclxuICAgICAgJHBsYWNlaG9sZGVyLmh0bWwocmVzcCk7XHJcbiAgICAgICRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlTG9hZGVkXCIsIHRydWUpO1xyXG4gICAgICAkKFwiW2RhdGEtc2xpY2tdXCIsICRwbGFjZWhvbGRlcikuc2xpY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlJZFRhYnMoKSB7XHJcbiAgICB2YXIgdGVtcGxhdGUgPVxyXG4gICAgICAgIFwidGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnMtcmVzdWx0XCIsXHJcbiAgICAgIHVybEtleSA9IFwidGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNcIjtcclxuXHJcbiAgICAvLyBBamF4IHJlcXVlc3QgbG9hZGluZyBwcm9kdWN0cyBpbiB0aGUgYWN0aXZlIHRhYlxyXG4gICAgJChcIi5pcy1hY3RpdmUgW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdXCIpLmVhY2goXHJcbiAgICAgIChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdDMoJChwbGFjZWhvbGRlciksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgICQoXCJbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFic11cIikub24oXHJcbiAgICAgIFwidG9nZ2xlZFwiLFxyXG4gICAgICAoZXZlbnQsIHRhYikgPT4ge1xyXG4gICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdDMoXHJcbiAgICAgICAgICAgICQoXHJcbiAgICAgICAgICAgICAgXCJbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFic11cIixcclxuICAgICAgICAgICAgICAkKFwiYVwiLCB0YWIpLmF0dHIoXCJocmVmXCIpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRlbXBsYXRlLFxyXG4gICAgICAgICAgICB1cmxLZXlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHJlcXVlc3QzKCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVMb2FkZWRcIikpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlVGVtcGxhdGVcIikpIHtcclxuICAgICAgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZVRlbXBsYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sIFwiXCIpO1xyXG5cclxuICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZUxvYWRlZFwiLCB0cnVlKTtcclxuICAgICAgJChcIltkYXRhLXNsaWNrXVwiLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCgpIHtcclxuICAgIHZhciB0ZW1wbGF0ZSA9XHJcbiAgICAgICAgXCJ0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtZ3JpZC1yZXN1bHRcIixcclxuICAgICAgdXJsS2V5ID0gXCJ0aGVtZXZhbGUtcHJvZHVjdHMtZ3JpZC1ieS1jYXRlZ29yeS1pZFwiO1xyXG5cclxuICAgICQoXHJcbiAgICAgIFwiLnRoZW1ldmFsZV9wcm9kdWN0c0J5Q2F0ZWdvcnlJZC1ncmlkIFtkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ncmlkLWJ5LWNhdGVnb3J5LWlkXVwiXHJcbiAgICApLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlcXVlc3Q0KCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVxdWVzdDQoJHBsYWNlaG9sZGVyLCB0bXBsLCB1cmxLZXkpIHtcclxuICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZUxvYWRlZFwiKSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IHRtcGw7XHJcbiAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVUZW1wbGF0ZVwiKSkge1xyXG4gICAgICB0ZW1wbGF0ZSA9ICRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlVGVtcGxhdGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVybCA9ICRwbGFjZWhvbGRlci5kYXRhKHVybEtleSk7XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgXCJcIik7XHJcblxyXG4gICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcclxuICAgICAgJHBsYWNlaG9sZGVyLmh0bWwocmVzcCk7XHJcbiAgICAgICRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlTG9hZGVkXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLnByb2R1Y3RzU2hvd01vcmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGFiQ2Fyb3VzZWwoKSB7XHJcbiAgICAkKFwiW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdXCIpLm9uKFxyXG4gICAgICBcInRvZ2dsZWRcIixcclxuICAgICAgZnVuY3Rpb24gKGV2ZW50LCB0YWIpIHtcclxuICAgICAgICAkKFwiLnByb2R1Y3RDYXJvdXNlbFtkYXRhLXNsaWNrXVwiKS5zbGljayhcInNldFBvc2l0aW9uXCIpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQWpheCBsb2FkIHByb2R1Y3RzIElEIGluIGEgY2F0ZWdvcnkgYmFubmVyXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgaW5pdEFqYXhQcm9kdWN0c0lEKCkge1xyXG4gICAgY29uc3QgJG9wdGlvbnMgPSB7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICBuZXc6IHtcclxuICAgICAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB0ZW1wbGF0ZTogXCJ0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdC1pZFwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0ICR0aGlzUHJvZCA9ICQoXCIjcHJvZHVjdC1wb3B1cFwiKTtcclxuICAgICQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LXByb2R1Y3QtaXRlbSAucG9zaXRpb24tcG9pbnRcIikub24oXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICR0aGlzUHJvZC5lbXB0eSgpO1xyXG4gICAgICAgIHZhciAkcHJvZElkID0gJCh0aGlzKS5kYXRhKFwicHJvZHVjdC1pZFwiKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSAkKHRoaXMpLnBhcmVudCgpLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWJhbm5lciA+IC5jb250YWluZXJcIikub2Zmc2V0KCk7XHJcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCAkb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHRoaXNQcm9kLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICR0aGlzUHJvZC50b2dnbGVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgJHRoaXNQcm9kLmNzcyh7XHJcbiAgICAgICAgICAgIHRvcDogcG9zaXRpb24udG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5sZWZ0ICsgY29udGFpbmVyLmxlZnQgLSAkdGhpc1Byb2Qud2lkdGgoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkdGhpc1Byb2QuY3NzKHsgdG9wOiBwb3NpdGlvbi50b3AgKyAxNSwgbGVmdDogMzAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5jbG9zZS1wcm9kdWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCR0aGlzUHJvZC5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAkdGhpc1Byb2QucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICgkdGhpc1Byb2QuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJHRoaXNQcm9kKS5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLnBvc2l0aW9uLXBvaW50XCIpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgJHRoaXNQcm9kLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gUHJvZHVjdHMgU2hvdyBNb3JlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgcHJvZHVjdHNTaG93TW9yZShjb250ZXh0KSB7XHJcbiAgICB2YXIgcHJvZHVjdHNUb1Nob3cgPSBOdW1iZXIoXHJcbiAgICAgICQoXCJbZGF0YS1udW1iZXItcHJvZHVjdF1cIikuYXR0cihcImRhdGEtbnVtYmVyLXByb2R1Y3RcIilcclxuICAgICk7XHJcbiAgICBpZiAoJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKS5sZW5ndGgpIHtcclxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUxKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykubGVuZ3RoID5cclxuICAgICAgICAgIHByb2R1Y3RzVG9TaG93XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5jc3Moe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICB2YXIgaSA9IHByb2R1Y3RzVG9TaG93ICsgMSxcclxuICAgICAgICAgICAgICBsZW4gPSAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGkgPD0gbGVuO1xyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFxyXG4gICAgICAgICAgICAgICdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3Q6bnRoLWNoaWxkKCcgK1xyXG4gICAgICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgICAgICBcIilcIlxyXG4gICAgICAgICAgICApLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3QnKS5sZW5ndGhcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXScpLmFwcGVuZChcclxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3RcIj48YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWJpZ1wiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+U2hvdyBNb3JlPC9hPjwvZGl2PidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvZHVjdHNUb1Nob3cgPSA0O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aCA+XHJcbiAgICAgICAgICBwcm9kdWN0c1RvU2hvd1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykuY3NzKHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcclxuICAgICAgICAgICAgJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdDpudGgtY2hpbGQobiArIDcpJ1xyXG4gICAgICAgICAgKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgISQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0JykubGVuZ3RoXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0XCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1iaWdcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlNob3cgTW9yZTwvYT48L2Rpdj4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkKFwiLnRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3QgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBsaXN0UHJvZHVjdHMgPSAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJyk7XHJcbiAgICAgICAgbGlzdFByb2R1Y3RzXHJcbiAgICAgICAgICAuZmluZChcIi5wcm9kdWN0R3JpZCAucHJvZHVjdDpoaWRkZW46bHQoXCIgKyBwcm9kdWN0c1RvU2hvdyArIFwiKVwiKVxyXG4gICAgICAgICAgLnNob3coKTtcclxuICAgICAgICBpZiAobGlzdFByb2R1Y3RzLmZpbmQoXCIucHJvZHVjdEdyaWQgLnByb2R1Y3Q6aGlkZGVuXCIpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gUmVtb3ZlIHNsaWNrIHNsaWRlciAobW9iaWxlKVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHJlbW92ZVNsaWNrKCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICBpZiAoJChcIi5icmFuZFNsaWRlclwiKS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoJChcIi5icmFuZFNsaWRlclwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgJChcIi5icmFuZFNsaWRlclwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJChcIi50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyXCIpLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXJcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICQoXCIudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlclwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJChcIi5yZWNlbnRfcG9zdENhcm91c2VsXCIpLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICgkKFwiLnJlY2VudF9wb3N0Q2Fyb3VzZWxcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICQoXCIucmVjZW50X3Bvc3RDYXJvdXNlbFwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIuYnJhbmRzSW1hZ2Utc2xpZGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAkKFwiLmJyYW5kc0ltYWdlLXNsaWRlclwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJChcIi50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWxcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbFwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAkKFwiLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbFwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJChcIi50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbVwiKS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhJChcIi50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWRcIikuaGFzQ2xhc3MoXHJcbiAgICAgICAgICAgIFwic2xpY2stc2xpZGVyXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICQoXCIudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcclxuICAgICAgICBpZiAoJChcIi5icmFuZFNsaWRlclwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICgkKFwiLmJyYW5kU2xpZGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnJhbmRTbGlkZXJcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlclwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyXCIpLnNsaWNrKFwidW5zbGlja1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnJlY2VudF9wb3N0Q2Fyb3VzZWxcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoJChcIi5yZWNlbnRfcG9zdENhcm91c2VsXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIucmVjZW50X3Bvc3RDYXJvdXNlbFwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICAgJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsXCIpLnNsaWNrKFwidW5zbGlja1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbFwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgICAkKFwiLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbFwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbVwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgISQoXCIudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkXCIpLmhhc0NsYXNzKFxyXG4gICAgICAgICAgICAgIFwic2xpY2stc2xpZGVyXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoXCIudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkXCIpLnNsaWNrKHtcclxuICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExMDAsXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NTAsXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgkKFwiLmJyYW5kU2xpZGVyXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKCEkKFwiLmJyYW5kU2xpZGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnJhbmRTbGlkZXJcIikuc2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXJcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEkKFwiLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXJcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXJcIikuc2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnJlY2VudF9wb3N0Q2Fyb3VzZWxcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoISQoXCIucmVjZW50X3Bvc3RDYXJvdXNlbFwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgICAkKFwiLnJlY2VudF9wb3N0Q2Fyb3VzZWxcIikuc2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLmJyYW5kc0ltYWdlLXNsaWRlclwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICghJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICAgJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikuc2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICghJChcIi50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWxcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWxcIikuc2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICghJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikuc2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZFwiKS5oYXNDbGFzcyhcclxuICAgICAgICAgICAgICBcInNsaWNrLXNsaWRlclwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZFwiKS5zbGljayhcclxuICAgICAgICAgICAgICBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm9kdWN0X25ld190YWIoKSB7XHJcbiAgICBpZiAoJChcIiN0aGVtZXZhbGVfbmV3X3Byb2R1Y3RcIikubGVuZ3RoKSB7XHJcbiAgICAgICQoXCIudGhlbWV2YWxlX3Byb2R1Y3RzQ2F0ZWdvcnlTb3J0TmV3IC50YWJzLWNvbnRlbnRzIC50YWItY29udGVudFwiKS5lYWNoKFxyXG4gICAgICAgIGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNJdGVtID0gJCh0aGlzKS5wYXJlbnRzKFwiI3RoZW1ldmFsZV9uZXdfcHJvZHVjdFwiKSxcclxuICAgICAgICAgICAgICBjYXRfaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKS5yZXBsYWNlKFwidGFiLVwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICB1cmwgPSB0aGlzSXRlbS5maW5kKCdbY2F0LWlkPVwiJyArIGNhdF9pZCArICdcIl0nKS5hdHRyKFwiY2F0LXVybFwiKSxcclxuICAgICAgICAgICAgICBzb3J0X25ldyA9IFwiP3NvcnQ9bmV3ZXN0XCI7XHJcbiAgICAgICAgICAgIHVybCArPSBzb3J0X25ldztcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoXHJcbiAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOlxyXG4gICAgICAgICAgICAgICAgICBcInRoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLW5ldy1yZXN1bHRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzSXRlbVxyXG4gICAgICAgICAgICAgICAgICAuZmluZChcIiN0YWItXCIgKyBjYXRfaWQpXHJcbiAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnRoZW1ldmFsZV9wcm9kdWN0TG9hZGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzSXRlbS5maW5kKFwiI3RhYi1cIiArIGNhdF9pZCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiW2RhdGEtc2xpY2tdXCIsIHRoaXNJdGVtKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIudGhlbWV2YWxlX3Byb2R1Y3RzQ2F0ZWdvcnlTb3J0TmV3IC50YWItdGl0bGVcIikub24oXHJcbiAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHZhciB0aGlzSXRlbSA9ICQodGhpcykucGFyZW50cyhcIiN0aGVtZXZhbGVfbmV3X3Byb2R1Y3RcIiksXHJcbiAgICAgICAgICAgIGNhdF9pZCA9ICQodGhpcykucGFyZW50KCkuYXR0cihcImNhdC1pZFwiKSxcclxuICAgICAgICAgICAgdXJsID0gJCh0aGlzKS5wYXJlbnQoKS5hdHRyKFwiY2F0LXVybFwiKSxcclxuICAgICAgICAgICAgc29ydF9uZXcgPSBcIj9zb3J0PW5ld2VzdFwiO1xyXG4gICAgICAgICAgdXJsICs9IHNvcnRfbmV3O1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkKFwiI3RoZW1ldmFsZV9uZXdfcHJvZHVjdCAjdGFiLVwiICsgY2F0X2lkKS5maW5kKFxyXG4gICAgICAgICAgICAgIFwiLnRoZW1ldmFsZV9wcm9kdWN0TG9hZGluZ1wiXHJcbiAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoXHJcbiAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOlxyXG4gICAgICAgICAgICAgICAgICBcInRoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLW5ldy1yZXN1bHRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzSXRlbVxyXG4gICAgICAgICAgICAgICAgICAuZmluZChcIiN0YWItXCIgKyBjYXRfaWQpXHJcbiAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnRoZW1ldmFsZV9wcm9kdWN0TG9hZGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzSXRlbS5maW5kKFwiI3RhYi1cIiArIGNhdF9pZCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKFxyXG4gICAgICAgICAgICAgICAgICBcIltkYXRhLXNsaWNrXVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIiN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QgI3RhYi1cIiArIGNhdF9pZFxyXG4gICAgICAgICAgICAgICAgKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0UG9wdXBWaWRlbygpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJ0aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyLXZpZGVvLXVybFwiXSAhPSBcIlwiXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoXCIjcG9wdXAtdmlkZW9cIilbMF07XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvXCJdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50ID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInICtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1widGhlbWV2YWxlX2NhdGVnb3J5LWJhbm5lci12aWRlby11cmxcIl0gK1xyXG4gICAgICAgICAgJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1tcImhvbWVwYWdlX3ZpZGVvX3VybF8xXCJdICE9IFwiXCIpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoXCIjcG9wdXAtdmlkZW8tMVwiKVswXTtcclxuICAgICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tMVwiXScsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY29udGVudCA9XHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyArXHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1tcImhvbWVwYWdlX3ZpZGVvX3VybF8xXCJdICtcclxuICAgICAgICAgICdcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfMlwiXSAhPSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KFwiI3BvcHVwLXZpZGVvLTJcIilbMF07XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTJcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicgK1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfMlwiXSArXHJcbiAgICAgICAgICAnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1wiaG9tZXBhZ2VfdmlkZW9fdXJsXzNcIl0gIT0gXCJcIikge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeShcIiNwb3B1cC12aWRlby0zXCIpWzBdO1xyXG4gICAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby0zXCJdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50ID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInICtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1wiaG9tZXBhZ2VfdmlkZW9fdXJsXzNcIl0gK1xyXG4gICAgICAgICAgJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1tcImhvbWVwYWdlX3ZpZGVvX3VybF80XCJdICE9IFwiXCIpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoXCIjcG9wdXAtdmlkZW8tNFwiKVswXTtcclxuICAgICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tNFwiXScsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY29udGVudCA9XHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyArXHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1tcImhvbWVwYWdlX3ZpZGVvX3VybF80XCJdICtcclxuICAgICAgICAgICdcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfNVwiXSAhPSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KFwiI3BvcHVwLXZpZGVvLTVcIilbMF07XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTVcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicgK1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfNVwiXSArXHJcbiAgICAgICAgICAnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=