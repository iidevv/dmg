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
  }

  // ========================================================================
  // Custom arrow button (slick)
  // ========================================================================
  ;
  _proto.customArrowButton = function customArrowButton() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.btn-arrow-prev').on('click', function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.themevale_productsCarousel-custom');
      wrapper.find('[data-slick]').slick("slickPrev");
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.btn-arrow-next').on('click', function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.themevale_productsCarousel-custom');
      wrapper.find('[data-slick]').slick("slickNext");
    });
  }

  // ========================================================================
  // Ajax load products in a category tabs
  // ========================================================================
  ;
  _proto.initAjaxProductsByCategory = function initAjaxProductsByCategory() {
    var _this = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-result',
      urlKey = 'themevale-products-by-category-id';
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this.request(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request = function request($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      $placeholder.find('.productCarousel-slide').each(function () {
        var product_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.card-sale').attr('data-product-id');
        Object(_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_8__["default"])(product_id);
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', $placeholder).slick();
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() < 1025) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick({
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
    var urlKey = 'themevale-products-by-category-sorting-tabs',
      template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result';

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.is-active[data-themevale-products-by-category-sorting-tabs]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsCategorySortTabs [data-tab]').on('toggled', function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_4___default()('a', tab).attr('href')), template, urlKey);
      });
    });
  };
  _proto.request2 = function request2($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryIdTabs = function initAjaxProductsByCategoryIdTabs() {
    var _this3 = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-tabs-result',
      urlKey = 'themevale-products-by-category-id-tabs';

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.is-active [data-themevale-products-by-category-id-tabs]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id-tabs]', jquery__WEBPACK_IMPORTED_MODULE_4___default()('a', tab).attr('href')), template, urlKey);
      });
    });
  };
  _proto.request3 = function request3($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryGrid = function initAjaxProductsByCategoryGrid() {
    var _this4 = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-grid-result',
      urlKey = 'themevale-products-grid-by-category-id';
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsByCategoryId-grid [data-themevale-products-grid-by-category-id]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this4.request4(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request4 = function request4($placeholder, tmpl, urlKey) {
    var _this5 = this;
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      _this5.productsShowMore();
    });
  };
  _proto.tabCarousel = function tabCarousel() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.productCarousel[data-slick]').slick('setPosition');
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
      template: 'themevale/homepage/component/ajax-product-id'
    };
    var $thisProd = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#product-popup');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-product-item .position-point').on('click', function () {
      $thisProd.empty();
      var $prodId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data('product-id');
      var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().position();
      var container = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-banner > .container').offset();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $thisProd.html(response);
      });
      $thisProd.toggleClass("show");
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 1024) {
        $thisProd.css({
          'top': position.top,
          'left': position.left + container.left - $thisProd.width()
        });
      } else {
        $thisProd.css({
          'top': position.top + 15,
          'left': 30
        });
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.close-product', function () {
      if ($thisProd.hasClass("show")) {
        $thisProd.removeClass("show");
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', function (event) {
      if ($thisProd.hasClass("show")) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.target).closest($thisProd).length === 0 && jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.target).closest('.position-point').length === 0) {
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
    var productsToShow = Number(jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-number-product]').attr('data-number-product'));
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 551) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').css({
            'display': 'inline-block'
          });
          for (var i = productsToShow + 1, len = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length; i <= len; i++) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product:nth-child(' + i + ')').css({
              'display': 'none'
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
            'display': 'inline-block'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product:nth-child(n + 7)').css({
            'display': 'none'
          });
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .themevale_showMoreProduct').length) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
          }
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_showMoreProduct a').on('click', function (e) {
        e.preventDefault();
        var listProducts = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('[data-event="show more"]');
        listProducts.find('.productGrid .product:hidden:lt(' + productsToShow + ')').show();
        if (listProducts.find('.productGrid .product:hidden').length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().css({
            'display': 'none'
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
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom').length) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick({
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
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick({
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
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick('unslick');
          }
        }
      }
    });
  };
  _proto.product_new_tab = function product_new_tab() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#themevale_new_product').length) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsCategorySortNew .tabs-contents .tab-content').each(function (index) {
        if (index == 0) {
          var thisItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('#themevale_new_product'),
            cat_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('id').replace('tab-', ''),
            url = thisItem.find('[cat-id="' + cat_id + '"]').attr('cat-url'),
            sort_new = '?sort=newest';
          url += sort_new;
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
            template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result'
          }, function (err, response) {
            thisItem.find('#tab-' + cat_id).find('.themevale_productLoading').remove();
            thisItem.find('#tab-' + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', thisItem).slick();
          });
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsCategorySortNew .tab-title').on('click', function (event) {
        event.preventDefault();
        var thisItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('#themevale_new_product'),
          cat_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().attr('cat-id'),
          url = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().attr('cat-url'),
          sort_new = '?sort=newest';
        url += sort_new;
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#themevale_new_product #tab-' + cat_id).find('.themevale_productLoading').length) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
            template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result'
          }, function (err, response) {
            thisItem.find('#tab-' + cat_id).find('.themevale_productLoading').remove();
            thisItem.find('#tab-' + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', '#themevale_new_product #tab-' + cat_id).slick();
          });
        }
      });
    }
  };
  _proto.initPopupVideo = function initPopupVideo() {
    var _this6 = this;
    if (this.context.themeSettings['themevale_category-banner-video-url'] != "") {
      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video"]', function () {
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
                                src="' + _this6.context.themeSettings['themevale_category-banner-video-url'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        modal.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_1'] != "") {
      var _modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-1')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-1"]', function () {
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
                                src="' + _this6.context.themeSettings['homepage_video_url_1'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_2'] != "") {
      var _modal2 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-2')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-2"]', function () {
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
                                src="' + _this6.context.themeSettings['homepage_video_url_2'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal2.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_3'] != "") {
      var _modal3 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-3')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-3"]', function () {
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
                                src="' + _this6.context.themeSettings['homepage_video_url_3'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal3.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_4'] != "") {
      var _modal4 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-4')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-4"]', function () {
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
                                src="' + _this6.context.themeSettings['homepage_video_url_4'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal4.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_5'] != "") {
      var _modal5 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-5')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-5"]', function () {
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
                                src="' + _this6.context.themeSettings['homepage_video_url_5'] + '"\
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwibGVuZ3RoIiwiaXMiLCJhZGRDbGFzcyIsImF0dHIiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJwcm9kdWN0cyIsIiRjaGVja2VkIiwiJCIsIiRjb21wYXJlTGluayIsImVsZW1lbnQiLCJ2YWx1ZSIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiSG9tZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsInJlbW92ZVNsaWNrIiwidGFiQ2Fyb3VzZWwiLCJwcm9kdWN0X25ld190YWIiLCJwcm9kdWN0c1Nob3dNb3JlIiwiY3VzdG9tQXJyb3dCdXR0b24iLCJpbml0QWpheFByb2R1Y3RzSUQiLCJpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzIiwiaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicyIsImluaXRQb3B1cFZpZGVvIiwiZSIsIndyYXBwZXIiLCJwYXJlbnRzIiwic2xpY2siLCJ0ZW1wbGF0ZSIsInVybEtleSIsImVhY2giLCJpIiwicGxhY2Vob2xkZXIiLCJQYWNlIiwiaWdub3JlIiwicmVxdWVzdCIsIiRwbGFjZWhvbGRlciIsInRtcGwiLCJkYXRhIiwidXJsIiwicmVwbGFjZSIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3AiLCJwcm9kdWN0X2lkIiwiQ291bnRkb3duIiwid2luZG93Iiwid2lkdGgiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInJlcXVlc3QyIiwidGFiIiwicmVxdWVzdDMiLCJyZXF1ZXN0NCIsIiRvcHRpb25zIiwiY29uZmlnIiwibmV3IiwibGltaXQiLCIkdGhpc1Byb2QiLCJlbXB0eSIsIiRwcm9kSWQiLCJwb3NpdGlvbiIsInBhcmVudCIsImNvbnRhaW5lciIsIm9mZnNldCIsImdldEJ5SWQiLCJyZXNwb25zZSIsInRvZ2dsZUNsYXNzIiwiY3NzIiwidG9wIiwibGVmdCIsImRvY3VtZW50IiwiaGFzQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJvZHVjdHNUb1Nob3ciLCJOdW1iZXIiLCJsZW4iLCJhcHBlbmQiLCJsaXN0UHJvZHVjdHMiLCJzaG93IiwicmVzaXplIiwidGhpc0l0ZW0iLCJjYXRfaWQiLCJzb3J0X25ldyIsInJlbW92ZSIsInRoZW1lU2V0dGluZ3MiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIiRjb250ZW50IiwidXBkYXRlQ29udGVudCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFFekMsU0FBU0EsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNGLElBQUksQ0FBQztFQUVuQyxJQUFJQyxL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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuXHJcbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XHJcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcclxuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xyXG4gICAgbGV0IHByb2R1Y3RzO1xyXG5cclxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHByb2R1Y3RzID0gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBQYWNlIGZyb20gJ3BhY2UnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ291bnRkb3duIGZyb20gJy4vdGhlbWV2YWxlL3RoZW1ldmFsZV9Db3VudGRvd24nO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlbW92ZVNsaWNrKCk7XHJcbiAgICAgICAgdGhpcy50YWJDYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdF9uZXdfdGFiKCk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0c1Nob3dNb3JlKCk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21BcnJvd0J1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0lEKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlHcmlkKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeUlkVGFicygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvcHVwVmlkZW8oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEN1c3RvbSBhcnJvdyBidXR0b24gKHNsaWNrKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjdXN0b21BcnJvd0J1dHRvbigpIHtcclxuICAgICAgICAkKCcuYnRuLWFycm93LXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSAkKHRoaXMpLnBhcmVudHMoJy50aGVtZXZhbGVfcHJvZHVjdHNDYXJvdXNlbC1jdXN0b20nKTtcclxuICAgICAgICAgICAgd3JhcHBlci5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljayhcInNsaWNrUHJldlwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYnRuLWFycm93LW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSAkKHRoaXMpLnBhcmVudHMoJy50aGVtZXZhbGVfcHJvZHVjdHNDYXJvdXNlbC1jdXN0b20nKTtcclxuICAgICAgICAgICAgd3JhcHBlci5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljayhcInNsaWNrTmV4dFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQWpheCBsb2FkIHByb2R1Y3RzIGluIGEgY2F0ZWdvcnkgdGFic1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnkoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC1yZXN1bHQnLCBcclxuICAgICAgICAgICAgdXJsS2V5ID0gJ3RoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZCc7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZF0nKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoJChwbGFjZWhvbGRlciksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlcXVlc3QoJHBsYWNlaG9sZGVyLCB0bXBsLCB1cmxLZXkpIHtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRtcGw7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpKSB7IHRlbXBsYXRlID0gJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJyk7IH1cclxuXHJcbiAgICAgICAgbGV0IHVybCA9ICRwbGFjZWhvbGRlci5kYXRhKHVybEtleSk7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sICcnKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwocmVzcCk7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RfaWQgPSAkKHRoaXMpLmZpbmQoJy5jYXJkLXNhbGUnKS5hdHRyKCdkYXRhLXByb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgICAgIENvdW50ZG93bihwcm9kdWN0X2lkKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrXScsICRwbGFjZWhvbGRlcikuc2xpY2soKTtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicygpIHtcclxuICAgICAgICB2YXIgdXJsS2V5ID0gJ3RoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLXRhYnMnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy10YWJzLXJlc3VsdCc7XHJcblxyXG4gICAgICAgIC8vIEFqYXggcmVxdWVzdCBsb2FkaW5nIHByb2R1Y3RzIGluIHRoZSBhY3RpdmUgdGFiXHJcbiAgICAgICAgJCgnLmlzLWFjdGl2ZVtkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLXRhYnNdJykuZWFjaCgoaSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0MigkKHBsYWNlaG9sZGVyKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcudGhlbWV2YWxlX3Byb2R1Y3RzQ2F0ZWdvcnlTb3J0VGFicyBbZGF0YS10YWJdJykub24oJ3RvZ2dsZWQnLCAoZXZlbnQsIHRhYikgPT4ge1xyXG4gICAgICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QyKCQoJCgnYScsIHRhYikuYXR0cignaHJlZicpKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdDIoJHBsYWNlaG9sZGVyLCB0bXBsLCB1cmxLZXkpIHtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRtcGw7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpKSB7IHRlbXBsYXRlID0gJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJyk7IH1cclxuXHJcbiAgICAgICAgbGV0IHVybCA9ICRwbGFjZWhvbGRlci5kYXRhKHVybEtleSk7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sICcnKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwocmVzcCk7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgJHBsYWNlaG9sZGVyKS5zbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzKCkge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFicy1yZXN1bHQnLCBcclxuICAgICAgICAgICAgdXJsS2V5ID0gJ3RoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzJztcclxuXHJcbiAgICAgICAgLy8gQWpheCByZXF1ZXN0IGxvYWRpbmcgcHJvZHVjdHMgaW4gdGhlIGFjdGl2ZSB0YWJcclxuICAgICAgICAkKCcuaXMtYWN0aXZlIFtkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXScpLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0MygkKHBsYWNlaG9sZGVyKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFic10nKS5vbigndG9nZ2xlZCcsIChldmVudCwgdGFiKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdDMoJCgnW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdJywgJCgnYScsIHRhYikuYXR0cignaHJlZicpKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdDMoJHBsYWNlaG9sZGVyLCB0bXBsLCB1cmxLZXkpIHtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRtcGw7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpKSB7IHRlbXBsYXRlID0gJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJyk7IH1cclxuXHJcbiAgICAgICAgbGV0IHVybCA9ICRwbGFjZWhvbGRlci5kYXRhKHVybEtleSk7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sICcnKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwocmVzcCk7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgJHBsYWNlaG9sZGVyKS5zbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCgpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLWdyaWQtcmVzdWx0JywgXHJcbiAgICAgICAgICAgIHVybEtleSA9ICd0aGVtZXZhbGUtcHJvZHVjdHMtZ3JpZC1ieS1jYXRlZ29yeS1pZCc7XHJcblxyXG4gICAgICAgICQoJy50aGVtZXZhbGVfcHJvZHVjdHNCeUNhdGVnb3J5SWQtZ3JpZCBbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtZ3JpZC1ieS1jYXRlZ29yeS1pZF0nKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3Q0KCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0NCgkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJykpIHsgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKTsgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgJycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzU2hvd01vcmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJDYXJvdXNlbCgpIHtcclxuICAgICAgICAkKCdbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFic10nKS5vbigndG9nZ2xlZCcsIGZ1bmN0aW9uIChldmVudCwgdGFiKSB7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWxbZGF0YS1zbGlja10nKS5zbGljaygnc2V0UG9zaXRpb24nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFqYXggbG9hZCBwcm9kdWN0cyBJRCBpbiBhIGNhdGVnb3J5IGJhbm5lclxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBpbml0QWpheFByb2R1Y3RzSUQoKSB7XHJcbiAgICAgICAgY29uc3QgJG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0LWlkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgJHRoaXNQcm9kID0gJCgnI3Byb2R1Y3QtcG9wdXAnKTtcclxuICAgICAgICAkKCcudGhlbWV2YWxlX2NhdGVnb3J5LXByb2R1Y3QtaXRlbSAucG9zaXRpb24tcG9pbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJHRoaXNQcm9kLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIHZhciAkcHJvZElkID0gJCh0aGlzKS5kYXRhKCdwcm9kdWN0LWlkJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICQodGhpcykucGFyZW50KCkucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyID4gLmNvbnRhaW5lcicpLm9mZnNldCgpO1xyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR0aGlzUHJvZC5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICR0aGlzUHJvZC50b2dnbGVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgICR0aGlzUHJvZC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AsICdsZWZ0JzogcG9zaXRpb24ubGVmdCArIGNvbnRhaW5lci5sZWZ0IC0gJHRoaXNQcm9kLndpZHRoKCl9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICR0aGlzUHJvZC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgKyAxNSwgJ2xlZnQnOiAzMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1wcm9kdWN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkdGhpc1Byb2QuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpc1Byb2QucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJHRoaXNQcm9kLmhhc0NsYXNzKFwic2hvd1wiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkdGhpc1Byb2QpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucG9zaXRpb24tcG9pbnQnKS5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNQcm9kLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUHJvZHVjdHMgU2hvdyBNb3JlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHByb2R1Y3RzU2hvd01vcmUoY29udGV4dCkge1xyXG4gICAgICAgIHZhciBwcm9kdWN0c1RvU2hvdyA9IE51bWJlcigkKCdbZGF0YS1udW1iZXItcHJvZHVjdF0nKS5hdHRyKCdkYXRhLW51bWJlci1wcm9kdWN0JykpO1xyXG4gICAgICAgIGlmICgkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5sZW5ndGggPiBwcm9kdWN0c1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmNzcyh7ICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gcHJvZHVjdHNUb1Nob3cgKyAxLCBsZW4gPSAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5sZW5ndGg7IGkgPD0gbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0Om50aC1jaGlsZCgnK2krJyknKS5jc3MoeyAnZGlzcGxheSc6ICdub25lJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAudGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3RcIj48YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWJpZ1wiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+U2hvdyBNb3JlPC9hPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzVG9TaG93ID0gNDtcclxuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5sZW5ndGggPiBwcm9kdWN0c1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmNzcyh7ICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0Om50aC1jaGlsZChuICsgNyknKS5jc3MoeyAnZGlzcGxheSc6ICdub25lJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdFwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tYmlnXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5TaG93IE1vcmU8L2E+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcudGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RQcm9kdWN0cyA9ICQodGhpcykucGFyZW50cygnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKTtcclxuICAgICAgICAgICAgICAgIGxpc3RQcm9kdWN0cy5maW5kKCcucHJvZHVjdEdyaWQgLnByb2R1Y3Q6aGlkZGVuOmx0KCcgKyBwcm9kdWN0c1RvU2hvdyArICcpJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RQcm9kdWN0cy5maW5kKCcucHJvZHVjdEdyaWQgLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoeyAnZGlzcGxheSc6ICdub25lJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUmVtb3ZlIHNsaWNrIHNsaWRlciAobW9iaWxlKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW1vdmVTbGljaygpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYnJhbmRTbGlkZXInKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZFNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kU2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZFNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLmJyYW5kU2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5icmFuZFNsaWRlcicpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdF9uZXdfdGFiKCkge1xyXG4gICAgICAgIGlmKCQoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFicy1jb250ZW50cyAudGFiLWNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiggaW5kZXggPT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc0l0ZW0gPSAkKHRoaXMpLnBhcmVudHMoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2lkID0gJCh0aGlzKS5hdHRyKCdpZCcpLnJlcGxhY2UoJ3RhYi0nLCcnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpc0l0ZW0uZmluZCgnW2NhdC1pZD1cIicrY2F0X2lkKydcIl0nKS5hdHRyKCdjYXQtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRfbmV3ID0gJz9zb3J0PW5ld2VzdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IHNvcnRfbmV3O1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZTogJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLW5ldy1yZXN1bHQnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtLmZpbmQoJyN0YWItJytjYXRfaWQpLmZpbmQoJy50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmcnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0l0ZW0uZmluZCgnI3RhYi0nK2NhdF9pZCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrXScsIHRoaXNJdGVtKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFiLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0l0ZW0gPSAkKHRoaXMpLnBhcmVudHMoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRfaWQgPSAkKHRoaXMpLnBhcmVudCgpLmF0dHIoJ2NhdC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICQodGhpcykucGFyZW50KCkuYXR0cignY2F0LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRfbmV3ID0gJz9zb3J0PW5ld2VzdCc7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gc29ydF9uZXc7XHJcbiAgICAgICAgICAgICAgICBpZigkKCcjdGhlbWV2YWxlX25ld19wcm9kdWN0ICN0YWItJytjYXRfaWQpLmZpbmQoJy50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGU6ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy1uZXctcmVzdWx0JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzSXRlbS5maW5kKCcjdGFiLScrY2F0X2lkKS5maW5kKCcudGhlbWV2YWxlX3Byb2R1Y3RMb2FkaW5nJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtLmZpbmQoJyN0YWItJytjYXRfaWQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAnI3RoZW1ldmFsZV9uZXdfcHJvZHVjdCAjdGFiLScrY2F0X2lkKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBvcHVwVmlkZW8oKSB7XHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWyd0aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyLXZpZGVvLXVybCddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlbycpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW9cIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWyd0aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyLXZpZGVvLXVybCddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMSddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlby0xJylbMF07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby0xXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzEnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzInXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tMicpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tMlwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8yJ10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8zJ10gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3BvcHVwLXZpZGVvLTMnKVswXTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTNcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMyddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfNCddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlby00JylbMF07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby00XCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzQnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzUnXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tNScpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tNVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF81J10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=