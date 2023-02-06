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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwibGVuZ3RoIiwiaXMiLCJhZGRDbGFzcyIsImF0dHIiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJwcm9kdWN0cyIsIiRjaGVja2VkIiwiJCIsIiRjb21wYXJlTGluayIsImVsZW1lbnQiLCJ2YWx1ZSIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiSG9tZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsInJlbW92ZVNsaWNrIiwidGFiQ2Fyb3VzZWwiLCJwcm9kdWN0X25ld190YWIiLCJwcm9kdWN0c1Nob3dNb3JlIiwiY3VzdG9tQXJyb3dCdXR0b24iLCJpbml0QWpheFByb2R1Y3RzSUQiLCJpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzIiwiaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicyIsImluaXRQb3B1cFZpZGVvIiwiZSIsIndyYXBwZXIiLCJwYXJlbnRzIiwic2xpY2siLCJ0ZW1wbGF0ZSIsInVybEtleSIsImVhY2giLCJpIiwicGxhY2Vob2xkZXIiLCJQYWNlIiwiaWdub3JlIiwicmVxdWVzdCIsIiRwbGFjZWhvbGRlciIsInRtcGwiLCJkYXRhIiwidXJsIiwicmVwbGFjZSIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3AiLCJwcm9kdWN0X2lkIiwiQ291bnRkb3duIiwid2luZG93Iiwid2lkdGgiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInJlcXVlc3QyIiwidGFiIiwicmVxdWVzdDMiLCJyZXF1ZXN0NCIsIiRvcHRpb25zIiwiY29uZmlnIiwibmV3IiwibGltaXQiLCIkdGhpc1Byb2QiLCJlbXB0eSIsIiRwcm9kSWQiLCJwb3NpdGlvbiIsInBhcmVudCIsImNvbnRhaW5lciIsIm9mZnNldCIsImdldEJ5SWQiLCJyZXNwb25zZSIsInRvZ2dsZUNsYXNzIiwiY3NzIiwidG9wIiwibGVmdCIsImRvY3VtZW50IiwiaGFzQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJvZHVjdHNUb1Nob3ciLCJOdW1iZXIiLCJkaXNwbGF5IiwibGVuIiwiYXBwZW5kIiwibGlzdFByb2R1Y3RzIiwic2hvdyIsInJlc2l6ZSIsInRoaXNJdGVtIiwiY2F0X2lkIiwic29ydF9uZXciLCJyZW1vdmUiLCJ0aGVtZVNldHRpbmdzIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCIkY29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBRXpDLFNBQVNBLGdCQUFnQixDQUFDQyxPQUFPLEVBQUVDLElBQUksRUFBRTtFQUNyQyxJQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDRixJQUFJLENBQUM7RUFF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LENBQUM7RUFBQTtBQUFBLEVBNzBCK0JFLHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgcHJvZHVjdHM7XG5cbiAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgIGlmICgkY2hlY2tlZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcHJvZHVjdHMgPSBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KHByb2R1Y3RzLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBhcmVDb3VudGVyID0gcHJvZHVjdHMgfHwgW107XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSBcIi4vcGFnZS1tYW5hZ2VyXCI7XHJcbmltcG9ydCBQYWNlIGZyb20gXCJwYWNlXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHNcIjtcclxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwiLi90aGVtZXZhbGUvdGhlbWV2YWxlX0NvdW50ZG93blwiO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gXCIuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzXCI7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tIFwiLi9nbG9iYWwvbW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgb25SZWFkeSgpIHtcclxuICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVTbGljaygpO1xyXG4gICAgdGhpcy50YWJDYXJvdXNlbCgpO1xyXG4gICAgdGhpcy5wcm9kdWN0X25ld190YWIoKTtcclxuICAgIHRoaXMucHJvZHVjdHNTaG93TW9yZSgpO1xyXG4gICAgdGhpcy5jdXN0b21BcnJvd0J1dHRvbigpO1xyXG4gICAgdGhpcy5pbml0QWpheFByb2R1Y3RzSUQoKTtcclxuICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnkoKTtcclxuICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlHcmlkKCk7XHJcbiAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzKCk7XHJcbiAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5U29ydGluZ1RhYnMoKTtcclxuICAgIHRoaXMuaW5pdFBvcHVwVmlkZW8oKTtcclxuICAgIC8vIHRoaXMuaW5pdEluc3RhZ3JhbSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gaW5zdGFncmFtXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQ3VzdG9tIGFycm93IGJ1dHRvbiAoc2xpY2spXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgY3VzdG9tQXJyb3dCdXR0b24oKSB7XHJcbiAgICAkKFwiLmJ0bi1hcnJvdy1wcmV2XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgd3JhcHBlciA9ICQodGhpcykucGFyZW50cyhcIi50aGVtZXZhbGVfcHJvZHVjdHNDYXJvdXNlbC1jdXN0b21cIik7XHJcbiAgICAgIHdyYXBwZXIuZmluZChcIltkYXRhLXNsaWNrXVwiKS5zbGljayhcInNsaWNrUHJldlwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuYnRuLWFycm93LW5leHRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciB3cmFwcGVyID0gJCh0aGlzKS5wYXJlbnRzKFwiLnRoZW1ldmFsZV9wcm9kdWN0c0Nhcm91c2VsLWN1c3RvbVwiKTtcclxuICAgICAgd3JhcHBlci5maW5kKFwiW2RhdGEtc2xpY2tdXCIpLnNsaWNrKFwic2xpY2tOZXh0XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBamF4IGxvYWQgcHJvZHVjdHMgaW4gYSBjYXRlZ29yeSB0YWJzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5KCkge1xyXG4gICAgdmFyIHRlbXBsYXRlID1cclxuICAgICAgICBcInRoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC1yZXN1bHRcIixcclxuICAgICAgdXJsS2V5ID0gXCJ0aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWRcIjtcclxuXHJcbiAgICAkKFwiW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkXVwiKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVxdWVzdCgkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlTG9hZGVkXCIpKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZVRlbXBsYXRlXCIpKSB7XHJcbiAgICAgIHRlbXBsYXRlID0gJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVUZW1wbGF0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9odHRwcz86XFwvXFwvW14vXSsvLCBcIlwiKTtcclxuXHJcbiAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVMb2FkZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICRwbGFjZWhvbGRlci5maW5kKFwiLnByb2R1Y3RDYXJvdXNlbC1zbGlkZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQodGhpcykuZmluZChcIi5jYXJkLXNhbGVcIikuYXR0cihcImRhdGEtcHJvZHVjdC1pZFwiKTtcclxuICAgICAgICBDb3VudGRvd24ocHJvZHVjdF9pZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChcIltkYXRhLXNsaWNrXVwiLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcclxuICAgICAgICAkKFwiLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZFwiKS5zbGljayh7XHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA3NTAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5U29ydGluZ1RhYnMoKSB7XHJcbiAgICB2YXIgdXJsS2V5ID0gXCJ0aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy10YWJzXCIsXHJcbiAgICAgIHRlbXBsYXRlID1cclxuICAgICAgICBcInRoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLXRhYnMtcmVzdWx0XCI7XHJcblxyXG4gICAgLy8gQWpheCByZXF1ZXN0IGxvYWRpbmcgcHJvZHVjdHMgaW4gdGhlIGFjdGl2ZSB0YWJcclxuICAgICQoXCIuaXMtYWN0aXZlW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctdGFic11cIikuZWFjaChcclxuICAgICAgKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0MigkKHBsYWNlaG9sZGVyKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgJChcIi50aGVtZXZhbGVfcHJvZHVjdHNDYXRlZ29yeVNvcnRUYWJzIFtkYXRhLXRhYl1cIikub24oXHJcbiAgICAgIFwidG9nZ2xlZFwiLFxyXG4gICAgICAoZXZlbnQsIHRhYikgPT4ge1xyXG4gICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdDIoJCgkKFwiYVwiLCB0YWIpLmF0dHIoXCJocmVmXCIpKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHJlcXVlc3QyKCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVMb2FkZWRcIikpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlVGVtcGxhdGVcIikpIHtcclxuICAgICAgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZVRlbXBsYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sIFwiXCIpO1xyXG5cclxuICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZUxvYWRlZFwiLCB0cnVlKTtcclxuICAgICAgJChcIltkYXRhLXNsaWNrXVwiLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzKCkge1xyXG4gICAgdmFyIHRlbXBsYXRlID1cclxuICAgICAgICBcInRoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzLXJlc3VsdFwiLFxyXG4gICAgICB1cmxLZXkgPSBcInRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXCI7XHJcblxyXG4gICAgLy8gQWpheCByZXF1ZXN0IGxvYWRpbmcgcHJvZHVjdHMgaW4gdGhlIGFjdGl2ZSB0YWJcclxuICAgICQoXCIuaXMtYWN0aXZlIFtkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXVwiKS5lYWNoKFxyXG4gICAgICAoaSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QzKCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAkKFwiW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdXCIpLm9uKFxyXG4gICAgICBcInRvZ2dsZWRcIixcclxuICAgICAgKGV2ZW50LCB0YWIpID0+IHtcclxuICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QzKFxyXG4gICAgICAgICAgICAkKFxyXG4gICAgICAgICAgICAgIFwiW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdXCIsXHJcbiAgICAgICAgICAgICAgJChcImFcIiwgdGFiKS5hdHRyKFwiaHJlZlwiKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgdXJsS2V5XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICByZXF1ZXN0MygkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlTG9hZGVkXCIpKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZVRlbXBsYXRlXCIpKSB7XHJcbiAgICAgIHRlbXBsYXRlID0gJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVUZW1wbGF0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9odHRwcz86XFwvXFwvW14vXSsvLCBcIlwiKTtcclxuXHJcbiAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVMb2FkZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICQoXCJbZGF0YS1zbGlja11cIiwgJHBsYWNlaG9sZGVyKS5zbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeUdyaWQoKSB7XHJcbiAgICB2YXIgdGVtcGxhdGUgPVxyXG4gICAgICAgIFwidGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLWdyaWQtcmVzdWx0XCIsXHJcbiAgICAgIHVybEtleSA9IFwidGhlbWV2YWxlLXByb2R1Y3RzLWdyaWQtYnktY2F0ZWdvcnktaWRcIjtcclxuXHJcbiAgICAkKFxyXG4gICAgICBcIi50aGVtZXZhbGVfcHJvZHVjdHNCeUNhdGVnb3J5SWQtZ3JpZCBbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtZ3JpZC1ieS1jYXRlZ29yeS1pZF1cIlxyXG4gICAgKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0NCgkKHBsYWNlaG9sZGVyKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlcXVlc3Q0KCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoXCJ0aGVtZXZhbGVMb2FkZWRcIikpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKFwidGhlbWV2YWxlVGVtcGxhdGVcIikpIHtcclxuICAgICAgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZVRlbXBsYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sIFwiXCIpO1xyXG5cclxuICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAkcGxhY2Vob2xkZXIuZGF0YShcInRoZW1ldmFsZUxvYWRlZFwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5wcm9kdWN0c1Nob3dNb3JlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRhYkNhcm91c2VsKCkge1xyXG4gICAgJChcIltkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXVwiKS5vbihcclxuICAgICAgXCJ0b2dnbGVkXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChldmVudCwgdGFiKSB7XHJcbiAgICAgICAgJChcIi5wcm9kdWN0Q2Fyb3VzZWxbZGF0YS1zbGlja11cIikuc2xpY2soXCJzZXRQb3NpdGlvblwiKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFqYXggbG9hZCBwcm9kdWN0cyBJRCBpbiBhIGNhdGVnb3J5IGJhbm5lclxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGluaXRBamF4UHJvZHVjdHNJRCgpIHtcclxuICAgIGNvbnN0ICRvcHRpb25zID0ge1xyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgbmV3OiB7XHJcbiAgICAgICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGU6IFwidGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3QtaWRcIixcclxuICAgIH07XHJcbiAgICBjb25zdCAkdGhpc1Byb2QgPSAkKFwiI3Byb2R1Y3QtcG9wdXBcIik7XHJcbiAgICAkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1wcm9kdWN0LWl0ZW0gLnBvc2l0aW9uLXBvaW50XCIpLm9uKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkdGhpc1Byb2QuZW1wdHkoKTtcclxuICAgICAgICB2YXIgJHByb2RJZCA9ICQodGhpcykuZGF0YShcInByb2R1Y3QtaWRcIik7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gJCh0aGlzKS5wYXJlbnQoKS5wb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSAkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1iYW5uZXIgPiAuY29udGFpbmVyXCIpLm9mZnNldCgpO1xyXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICR0aGlzUHJvZC5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkdGhpc1Byb2QudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcclxuICAgICAgICAgICR0aGlzUHJvZC5jc3Moe1xyXG4gICAgICAgICAgICB0b3A6IHBvc2l0aW9uLnRvcCxcclxuICAgICAgICAgICAgbGVmdDogcG9zaXRpb24ubGVmdCArIGNvbnRhaW5lci5sZWZ0IC0gJHRoaXNQcm9kLndpZHRoKCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHRoaXNQcm9kLmNzcyh7IHRvcDogcG9zaXRpb24udG9wICsgMTUsIGxlZnQ6IDMwIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuY2xvc2UtcHJvZHVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkdGhpc1Byb2QuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgJHRoaXNQcm9kLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoJHRoaXNQcm9kLmhhc0NsYXNzKFwic2hvd1wiKSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCR0aGlzUHJvZCkubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5wb3NpdGlvbi1wb2ludFwiKS5sZW5ndGggPT09IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICR0aGlzUHJvZC5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFByb2R1Y3RzIFNob3cgTW9yZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHByb2R1Y3RzU2hvd01vcmUoY29udGV4dCkge1xyXG4gICAgdmFyIHByb2R1Y3RzVG9TaG93ID0gTnVtYmVyKFxyXG4gICAgICAkKFwiW2RhdGEtbnVtYmVyLXByb2R1Y3RdXCIpLmF0dHIoXCJkYXRhLW51bWJlci1wcm9kdWN0XCIpXHJcbiAgICApO1xyXG4gICAgaWYgKCQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJykubGVuZ3RoKSB7XHJcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aCA+XHJcbiAgICAgICAgICBwcm9kdWN0c1RvU2hvd1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykuY3NzKHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgdmFyIGkgPSBwcm9kdWN0c1RvU2hvdyArIDEsXHJcbiAgICAgICAgICAgICAgbGVuID0gJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykubGVuZ3RoO1xyXG4gICAgICAgICAgICBpIDw9IGxlbjtcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcclxuICAgICAgICAgICAgICAnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0Om50aC1jaGlsZCgnICtcclxuICAgICAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAgICAgXCIpXCJcclxuICAgICAgICAgICAgKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgISQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0JykubGVuZ3RoXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0XCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1iaWdcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlNob3cgTW9yZTwvYT48L2Rpdj4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2R1Y3RzVG9TaG93ID0gNDtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5sZW5ndGggPlxyXG4gICAgICAgICAgcHJvZHVjdHNUb1Nob3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXHJcbiAgICAgICAgICAgICdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3Q6bnRoLWNoaWxkKG4gKyA3KSdcclxuICAgICAgICAgICkuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAudGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdCcpLmxlbmd0aFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJykuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdFwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tYmlnXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5TaG93IE1vcmU8L2E+PC9kaXY+J1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJChcIi50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0IGFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgbGlzdFByb2R1Y3RzID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXScpO1xyXG4gICAgICAgIGxpc3RQcm9kdWN0c1xyXG4gICAgICAgICAgLmZpbmQoXCIucHJvZHVjdEdyaWQgLnByb2R1Y3Q6aGlkZGVuOmx0KFwiICsgcHJvZHVjdHNUb1Nob3cgKyBcIilcIilcclxuICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgaWYgKGxpc3RQcm9kdWN0cy5maW5kKFwiLnByb2R1Y3RHcmlkIC5wcm9kdWN0OmhpZGRlblwiKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFJlbW92ZSBzbGljayBzbGlkZXIgKG1vYmlsZSlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICByZW1vdmVTbGljaygpIHtcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcclxuICAgICAgaWYgKCQoXCIuYnJhbmRTbGlkZXJcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIuYnJhbmRTbGlkZXJcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICQoXCIuYnJhbmRTbGlkZXJcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlclwiKS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXJcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCQoXCIucmVjZW50X3Bvc3RDYXJvdXNlbFwiKS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoJChcIi5yZWNlbnRfcG9zdENhcm91c2VsXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAkKFwiLnJlY2VudF9wb3N0Q2Fyb3VzZWxcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCQoXCIuYnJhbmRzSW1hZ2Utc2xpZGVyXCIpLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICgkKFwiLmJyYW5kc0ltYWdlLXNsaWRlclwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsXCIpLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbFwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgJChcIi50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWxcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsXCIpLmxlbmd0aCkge1xyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbFwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b21cIikubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgISQoXCIudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkXCIpLmhhc0NsYXNzKFxyXG4gICAgICAgICAgICBcInNsaWNrLXNsaWRlclwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZFwiKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSB7XHJcbiAgICAgICAgaWYgKCQoXCIuYnJhbmRTbGlkZXJcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoJChcIi5icmFuZFNsaWRlclwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgICAkKFwiLmJyYW5kU2xpZGVyXCIpLnNsaWNrKFwidW5zbGlja1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXJcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICQoXCIudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlclwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoXCIudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlclwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi5yZWNlbnRfcG9zdENhcm91c2VsXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKCQoXCIucmVjZW50X3Bvc3RDYXJvdXNlbFwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgICAkKFwiLnJlY2VudF9wb3N0Q2Fyb3VzZWxcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoXCIuYnJhbmRzSW1hZ2Utc2xpZGVyXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKCQoXCIuYnJhbmRzSW1hZ2Utc2xpZGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnJhbmRzSW1hZ2Utc2xpZGVyXCIpLnNsaWNrKFwidW5zbGlja1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbFwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICgkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbFwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbFwiKS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikuc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoXCIudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b21cIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEkKFwiLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZFwiKS5oYXNDbGFzcyhcclxuICAgICAgICAgICAgICBcInNsaWNrLXNsaWRlclwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFwiLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZFwiKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTAwLFxyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoJChcIi5icmFuZFNsaWRlclwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICghJChcIi5icmFuZFNsaWRlclwiKS5oYXNDbGFzcyhcInNsaWNrLXNsaWRlclwiKSkge1xyXG4gICAgICAgICAgICAkKFwiLmJyYW5kU2xpZGVyXCIpLnNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhJChcIi50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyXCIpLnNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi5yZWNlbnRfcG9zdENhcm91c2VsXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKCEkKFwiLnJlY2VudF9wb3N0Q2Fyb3VzZWxcIikuaGFzQ2xhc3MoXCJzbGljay1zbGlkZXJcIikpIHtcclxuICAgICAgICAgICAgJChcIi5yZWNlbnRfcG9zdENhcm91c2VsXCIpLnNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi5icmFuZHNJbWFnZS1zbGlkZXJcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoISQoXCIuYnJhbmRzSW1hZ2Utc2xpZGVyXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnJhbmRzSW1hZ2Utc2xpZGVyXCIpLnNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWxcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoISQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsXCIpLnNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWxcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAoISQoXCIudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsXCIpLmhhc0NsYXNzKFwic2xpY2stc2xpZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsXCIpLnNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbVwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWRcIikuaGFzQ2xhc3MoXHJcbiAgICAgICAgICAgICAgXCJzbGljay1zbGlkZXJcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcIi50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWRcIikuc2xpY2soXHJcbiAgICAgICAgICAgICAgXCJ1bnNsaWNrXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvZHVjdF9uZXdfdGFiKCkge1xyXG4gICAgaWYgKCQoXCIjdGhlbWV2YWxlX25ld19wcm9kdWN0XCIpLmxlbmd0aCkge1xyXG4gICAgICAkKFwiLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFicy1jb250ZW50cyAudGFiLWNvbnRlbnRcIikuZWFjaChcclxuICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSXRlbSA9ICQodGhpcykucGFyZW50cyhcIiN0aGVtZXZhbGVfbmV3X3Byb2R1Y3RcIiksXHJcbiAgICAgICAgICAgICAgY2F0X2lkID0gJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZShcInRhYi1cIiwgXCJcIiksXHJcbiAgICAgICAgICAgICAgdXJsID0gdGhpc0l0ZW0uZmluZCgnW2NhdC1pZD1cIicgKyBjYXRfaWQgKyAnXCJdJykuYXR0cihcImNhdC11cmxcIiksXHJcbiAgICAgICAgICAgICAgc29ydF9uZXcgPSBcIj9zb3J0PW5ld2VzdFwiO1xyXG4gICAgICAgICAgICB1cmwgKz0gc29ydF9uZXc7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKFxyXG4gICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTpcclxuICAgICAgICAgICAgICAgICAgXCJ0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy1uZXctcmVzdWx0XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpc0l0ZW1cclxuICAgICAgICAgICAgICAgICAgLmZpbmQoXCIjdGFiLVwiICsgY2F0X2lkKVxyXG4gICAgICAgICAgICAgICAgICAuZmluZChcIi50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpc0l0ZW0uZmluZChcIiN0YWItXCIgKyBjYXRfaWQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIltkYXRhLXNsaWNrXVwiLCB0aGlzSXRlbSkuc2xpY2soKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFiLXRpdGxlXCIpLm9uKFxyXG4gICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB2YXIgdGhpc0l0ZW0gPSAkKHRoaXMpLnBhcmVudHMoXCIjdGhlbWV2YWxlX25ld19wcm9kdWN0XCIpLFxyXG4gICAgICAgICAgICBjYXRfaWQgPSAkKHRoaXMpLnBhcmVudCgpLmF0dHIoXCJjYXQtaWRcIiksXHJcbiAgICAgICAgICAgIHVybCA9ICQodGhpcykucGFyZW50KCkuYXR0cihcImNhdC11cmxcIiksXHJcbiAgICAgICAgICAgIHNvcnRfbmV3ID0gXCI/c29ydD1uZXdlc3RcIjtcclxuICAgICAgICAgIHVybCArPSBzb3J0X25ldztcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgJChcIiN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QgI3RhYi1cIiArIGNhdF9pZCkuZmluZChcclxuICAgICAgICAgICAgICBcIi50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmdcIlxyXG4gICAgICAgICAgICApLmxlbmd0aFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKFxyXG4gICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTpcclxuICAgICAgICAgICAgICAgICAgXCJ0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy1uZXctcmVzdWx0XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpc0l0ZW1cclxuICAgICAgICAgICAgICAgICAgLmZpbmQoXCIjdGFiLVwiICsgY2F0X2lkKVxyXG4gICAgICAgICAgICAgICAgICAuZmluZChcIi50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpc0l0ZW0uZmluZChcIiN0YWItXCIgKyBjYXRfaWQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJChcclxuICAgICAgICAgICAgICAgICAgXCJbZGF0YS1zbGlja11cIixcclxuICAgICAgICAgICAgICAgICAgXCIjdGhlbWV2YWxlX25ld19wcm9kdWN0ICN0YWItXCIgKyBjYXRfaWRcclxuICAgICAgICAgICAgICAgICkuc2xpY2soKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFBvcHVwVmlkZW8oKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1widGhlbWV2YWxlX2NhdGVnb3J5LWJhbm5lci12aWRlby11cmxcIl0gIT0gXCJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KFwiI3BvcHVwLXZpZGVvXCIpWzBdO1xyXG4gICAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlb1wiXScsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY29udGVudCA9XHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyArXHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1tcInRoZW1ldmFsZV9jYXRlZ29yeS1iYW5uZXItdmlkZW8tdXJsXCJdICtcclxuICAgICAgICAgICdcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfMVwiXSAhPSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KFwiI3BvcHVwLXZpZGVvLTFcIilbMF07XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTFcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicgK1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfMVwiXSArXHJcbiAgICAgICAgICAnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1wiaG9tZXBhZ2VfdmlkZW9fdXJsXzJcIl0gIT0gXCJcIikge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeShcIiNwb3B1cC12aWRlby0yXCIpWzBdO1xyXG4gICAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby0yXCJdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50ID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInICtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1wiaG9tZXBhZ2VfdmlkZW9fdXJsXzJcIl0gK1xyXG4gICAgICAgICAgJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1tcImhvbWVwYWdlX3ZpZGVvX3VybF8zXCJdICE9IFwiXCIpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoXCIjcG9wdXAtdmlkZW8tM1wiKVswXTtcclxuICAgICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tM1wiXScsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY29udGVudCA9XHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyArXHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1tcImhvbWVwYWdlX3ZpZGVvX3VybF8zXCJdICtcclxuICAgICAgICAgICdcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfNFwiXSAhPSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KFwiI3BvcHVwLXZpZGVvLTRcIilbMF07XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTRcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicgK1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbXCJob21lcGFnZV92aWRlb191cmxfNFwiXSArXHJcbiAgICAgICAgICAnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1wiaG9tZXBhZ2VfdmlkZW9fdXJsXzVcIl0gIT0gXCJcIikge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeShcIiNwb3B1cC12aWRlby01XCIpWzBdO1xyXG4gICAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby01XCJdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50ID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInICtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzW1wiaG9tZXBhZ2VfdmlkZW9fdXJsXzVcIl0gK1xyXG4gICAgICAgICAgJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9