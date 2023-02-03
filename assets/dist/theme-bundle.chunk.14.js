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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwibGVuZ3RoIiwiaXMiLCJhZGRDbGFzcyIsImF0dHIiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJwcm9kdWN0cyIsIiRjaGVja2VkIiwiJCIsIiRjb21wYXJlTGluayIsImVsZW1lbnQiLCJ2YWx1ZSIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiSG9tZSIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsInJlbW92ZVNsaWNrIiwidGFiQ2Fyb3VzZWwiLCJwcm9kdWN0X25ld190YWIiLCJwcm9kdWN0c1Nob3dNb3JlIiwiY3VzdG9tQXJyb3dCdXR0b24iLCJpbml0QWpheFByb2R1Y3RzSUQiLCJpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzIiwiaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicyIsImluaXRQb3B1cFZpZGVvIiwiZSIsIndyYXBwZXIiLCJwYXJlbnRzIiwic2xpY2siLCJ0ZW1wbGF0ZSIsInVybEtleSIsImVhY2giLCJpIiwicGxhY2Vob2xkZXIiLCJQYWNlIiwiaWdub3JlIiwicmVxdWVzdCIsIiRwbGFjZWhvbGRlciIsInRtcGwiLCJkYXRhIiwidXJsIiwicmVwbGFjZSIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3AiLCJwcm9kdWN0X2lkIiwiQ291bnRkb3duIiwid2luZG93Iiwid2lkdGgiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInJlcXVlc3QyIiwidGFiIiwicmVxdWVzdDMiLCJyZXF1ZXN0NCIsIiRvcHRpb25zIiwiY29uZmlnIiwibmV3IiwibGltaXQiLCIkdGhpc1Byb2QiLCJlbXB0eSIsIiRwcm9kSWQiLCJwb3NpdGlvbiIsInBhcmVudCIsImNvbnRhaW5lciIsIm9mZnNldCIsImdldEJ5SWQiLCJyZXNwb25zZSIsInRvZ2dsZUNsYXNzIiwiY3NzIiwidG9wIiwibGVmdCIsImRvY3VtZW50IiwiaGFzQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJvZHVjdHNUb1Nob3ciLCJOdW1iZXIiLCJsZW4iLCJhcHBlbmQiLCJsaXN0UHJvZHVjdHMiLCJzaG93IiwicmVzaXplIiwidGhpc0l0ZW0iLCJjYXRfaWQiLCJzb3J0X25ldyIsInJlbW92ZSIsInRoZW1lU2V0dGluZ3MiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIiRjb250ZW50IiwidXBkYXRlQ29udGVudCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFFekMsU0FBU0EsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNGLElBQUksQ0FBQztFQUVuQyxJQUFJQyxL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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBwcm9kdWN0cztcblxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBwcm9kdWN0cyA9IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgUGFjZSBmcm9tICdwYWNlJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfQ291bnRkb3duJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTbGljaygpO1xyXG4gICAgICAgIHRoaXMudGFiQ2Fyb3VzZWwoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RfbmV3X3RhYigpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHNTaG93TW9yZSgpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tQXJyb3dCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNJRCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnkoKTtcclxuICAgICAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlJZFRhYnMoKTtcclxuICAgICAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5U29ydGluZ1RhYnMoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3B1cFZpZGVvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDdXN0b20gYXJyb3cgYnV0dG9uIChzbGljaylcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY3VzdG9tQXJyb3dCdXR0b24oKSB7XHJcbiAgICAgICAgJCgnLmJ0bi1hcnJvdy1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gJCh0aGlzKS5wYXJlbnRzKCcudGhlbWV2YWxlX3Byb2R1Y3RzQ2Fyb3VzZWwtY3VzdG9tJyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuZmluZCgnW2RhdGEtc2xpY2tdJykuc2xpY2soXCJzbGlja1ByZXZcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmJ0bi1hcnJvdy1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gJCh0aGlzKS5wYXJlbnRzKCcudGhlbWV2YWxlX3Byb2R1Y3RzQ2Fyb3VzZWwtY3VzdG9tJyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuZmluZCgnW2RhdGEtc2xpY2tdJykuc2xpY2soXCJzbGlja05leHRcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFqYXggbG9hZCBwcm9kdWN0cyBpbiBhIGNhdGVnb3J5IHRhYnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5KCkge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtcmVzdWx0JywgXHJcbiAgICAgICAgICAgIHVybEtleSA9ICd0aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQnO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWRdJykuZWFjaCgoaSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0KCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKSkgeyB0ZW1wbGF0ZSA9ICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpOyB9XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9odHRwcz86XFwvXFwvW14vXSsvLCAnJyk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5maW5kKCcuY2FyZC1zYWxlJykuYXR0cignZGF0YS1wcm9kdWN0LWlkJyk7XHJcbiAgICAgICAgICAgICAgICBDb3VudGRvd24ocHJvZHVjdF9pZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5U29ydGluZ1RhYnMoKSB7XHJcbiAgICAgICAgdmFyIHVybEtleSA9ICd0aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy10YWJzJyxcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctdGFicy1yZXN1bHQnO1xyXG5cclxuICAgICAgICAvLyBBamF4IHJlcXVlc3QgbG9hZGluZyBwcm9kdWN0cyBpbiB0aGUgYWN0aXZlIHRhYlxyXG4gICAgICAgICQoJy5pcy1hY3RpdmVbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy10YWJzXScpLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdDIoJChwbGFjZWhvbGRlciksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydFRhYnMgW2RhdGEtdGFiXScpLm9uKCd0b2dnbGVkJywgKGV2ZW50LCB0YWIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0MigkKCQoJ2EnLCB0YWIpLmF0dHIoJ2hyZWYnKSksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlcXVlc3QyKCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKSkgeyB0ZW1wbGF0ZSA9ICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpOyB9XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9odHRwcz86XFwvXFwvW14vXSsvLCAnJyk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrXScsICRwbGFjZWhvbGRlcikuc2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeUlkVGFicygpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnMtcmVzdWx0JywgXHJcbiAgICAgICAgICAgIHVybEtleSA9ICd0aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFicyc7XHJcblxyXG4gICAgICAgIC8vIEFqYXggcmVxdWVzdCBsb2FkaW5nIHByb2R1Y3RzIGluIHRoZSBhY3RpdmUgdGFiXHJcbiAgICAgICAgJCgnLmlzLWFjdGl2ZSBbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFic10nKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdDMoJChwbGFjZWhvbGRlciksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdJykub24oJ3RvZ2dsZWQnLCAoZXZlbnQsIHRhYikgPT4ge1xyXG4gICAgICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QzKCQoJ1tkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXScsICQoJ2EnLCB0YWIpLmF0dHIoJ2hyZWYnKSksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlcXVlc3QzKCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKSkgeyB0ZW1wbGF0ZSA9ICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpOyB9XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9odHRwcz86XFwvXFwvW14vXSsvLCAnJyk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrXScsICRwbGFjZWhvbGRlcikuc2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeUdyaWQoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC1ncmlkLXJlc3VsdCcsIFxyXG4gICAgICAgICAgICB1cmxLZXkgPSAndGhlbWV2YWxlLXByb2R1Y3RzLWdyaWQtYnktY2F0ZWdvcnktaWQnO1xyXG5cclxuICAgICAgICAkKCcudGhlbWV2YWxlX3Byb2R1Y3RzQnlDYXRlZ29yeUlkLWdyaWQgW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWdyaWQtYnktY2F0ZWdvcnktaWRdJykuZWFjaCgoaSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0NCgkKHBsYWNlaG9sZGVyKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdDQoJHBsYWNlaG9sZGVyLCB0bXBsLCB1cmxLZXkpIHtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRtcGw7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpKSB7IHRlbXBsYXRlID0gJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJyk7IH1cclxuXHJcbiAgICAgICAgbGV0IHVybCA9ICRwbGFjZWhvbGRlci5kYXRhKHVybEtleSk7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC9bXi9dKy8sICcnKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IHRlbXBsYXRlIH0sIChlcnIsIHJlc3ApID0+IHtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwocmVzcCk7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1Nob3dNb3JlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFiQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdJykub24oJ3RvZ2dsZWQnLCBmdW5jdGlvbiAoZXZlbnQsIHRhYikge1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdENhcm91c2VsW2RhdGEtc2xpY2tdJykuc2xpY2soJ3NldFBvc2l0aW9uJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBamF4IGxvYWQgcHJvZHVjdHMgSUQgaW4gYSBjYXRlZ29yeSBiYW5uZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgaW5pdEFqYXhQcm9kdWN0c0lEKCkge1xyXG4gICAgICAgIGNvbnN0ICRvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdC1pZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0ICR0aGlzUHJvZCA9ICQoJyNwcm9kdWN0LXBvcHVwJyk7XHJcbiAgICAgICAgJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1wcm9kdWN0LWl0ZW0gLnBvc2l0aW9uLXBvaW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICR0aGlzUHJvZC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB2YXIgJHByb2RJZCA9ICQodGhpcykuZGF0YSgncHJvZHVjdC1pZCcpO1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKHRoaXMpLnBhcmVudCgpLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWJhbm5lciA+IC5jb250YWluZXInKS5vZmZzZXQoKTtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCAkb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkdGhpc1Byb2QuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkdGhpc1Byb2QudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpc1Byb2QuY3NzKHsndG9wJzogcG9zaXRpb24udG9wLCAnbGVmdCc6IHBvc2l0aW9uLmxlZnQgKyBjb250YWluZXIubGVmdCAtICR0aGlzUHJvZC53aWR0aCgpfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpc1Byb2QuY3NzKHsndG9wJzogcG9zaXRpb24udG9wICsgMTUsICdsZWZ0JzogMzB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtcHJvZHVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJHRoaXNQcm9kLmhhc0NsYXNzKFwic2hvd1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJHRoaXNQcm9kLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCR0aGlzUHJvZC5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJHRoaXNQcm9kKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnBvc2l0aW9uLXBvaW50JykubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzUHJvZC5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFByb2R1Y3RzIFNob3cgTW9yZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwcm9kdWN0c1Nob3dNb3JlKGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgcHJvZHVjdHNUb1Nob3cgPSBOdW1iZXIoJCgnW2RhdGEtbnVtYmVyLXByb2R1Y3RdJykuYXR0cignZGF0YS1udW1iZXItcHJvZHVjdCcpKTtcclxuICAgICAgICBpZiAoJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykubGVuZ3RoID4gcHJvZHVjdHNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5jc3MoeyAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IHByb2R1Y3RzVG9TaG93ICsgMSwgbGVuID0gJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykubGVuZ3RoOyBpIDw9IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdDpudGgtY2hpbGQoJytpKycpJykuY3NzKHsgJ2Rpc3BsYXknOiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ0aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0XCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1iaWdcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlNob3cgTW9yZTwvYT48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1RvU2hvdyA9IDQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykubGVuZ3RoID4gcHJvZHVjdHNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3QnKS5jc3MoeyAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdDpudGgtY2hpbGQobiArIDcpJykuY3NzKHsgJ2Rpc3BsYXknOiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAudGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3RcIj48YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWJpZ1wiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+U2hvdyBNb3JlPC9hPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3QgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0UHJvZHVjdHMgPSAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBsaXN0UHJvZHVjdHMuZmluZCgnLnByb2R1Y3RHcmlkIC5wcm9kdWN0OmhpZGRlbjpsdCgnICsgcHJvZHVjdHNUb1Nob3cgKyAnKScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0UHJvZHVjdHMuZmluZCgnLnByb2R1Y3RHcmlkIC5wcm9kdWN0OmhpZGRlbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKHsgJ2Rpc3BsYXknOiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJlbW92ZSBzbGljayBzbGlkZXIgKG1vYmlsZSlcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcmVtb3ZlU2xpY2soKSB7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLmJyYW5kU2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmJyYW5kU2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kU2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgIGlmICgkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmJyYW5kU2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5icmFuZFNsaWRlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5icmFuZFNsaWRlcicpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYnJhbmRTbGlkZXInKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByb2R1Y3RfbmV3X3RhYigpIHtcclxuICAgICAgICBpZigkKCcjdGhlbWV2YWxlX25ld19wcm9kdWN0JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcHJvZHVjdHNDYXRlZ29yeVNvcnROZXcgLnRhYnMtY29udGVudHMgLnRhYi1jb250ZW50JykuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYoIGluZGV4ID09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNJdGVtID0gJCh0aGlzKS5wYXJlbnRzKCcjdGhlbWV2YWxlX25ld19wcm9kdWN0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdF9pZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCd0YWItJywnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXNJdGVtLmZpbmQoJ1tjYXQtaWQ9XCInK2NhdF9pZCsnXCJdJykuYXR0cignY2F0LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0X25ldyA9ICc/c29ydD1uZXdlc3QnO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBzb3J0X25ldztcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGU6ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy1uZXctcmVzdWx0JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzSXRlbS5maW5kKCcjdGFiLScrY2F0X2lkKS5maW5kKCcudGhlbWV2YWxlX3Byb2R1Y3RMb2FkaW5nJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtLmZpbmQoJyN0YWItJytjYXRfaWQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCB0aGlzSXRlbSkuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcHJvZHVjdHNDYXRlZ29yeVNvcnROZXcgLnRhYi10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNJdGVtID0gJCh0aGlzKS5wYXJlbnRzKCcjdGhlbWV2YWxlX25ld19wcm9kdWN0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5hdHRyKCdjYXQtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSAkKHRoaXMpLnBhcmVudCgpLmF0dHIoJ2NhdC11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0X25ldyA9ICc/c29ydD1uZXdlc3QnO1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IHNvcnRfbmV3O1xyXG4gICAgICAgICAgICAgICAgaWYoJCgnI3RoZW1ldmFsZV9uZXdfcHJvZHVjdCAjdGFiLScrY2F0X2lkKS5maW5kKCcudGhlbWV2YWxlX3Byb2R1Y3RMb2FkaW5nJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCB7IHRlbXBsYXRlOiAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctbmV3LXJlc3VsdCcgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0l0ZW0uZmluZCgnI3RhYi0nK2NhdF9pZCkuZmluZCgnLnRoZW1ldmFsZV9wcm9kdWN0TG9hZGluZycpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzSXRlbS5maW5kKCcjdGFiLScrY2F0X2lkKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QgI3RhYi0nK2NhdF9pZCkuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRQb3B1cFZpZGVvKCkge1xyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1sndGhlbWV2YWxlX2NhdGVnb3J5LWJhbm5lci12aWRlby11cmwnXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8nKVswXTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1sndGhlbWV2YWxlX2NhdGVnb3J5LWJhbm5lci12aWRlby11cmwnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzEnXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tMScpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tMVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8xJ10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8yJ10gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3BvcHVwLXZpZGVvLTInKVswXTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTJcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMiddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMyddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlby0zJylbMF07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby0zXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzMnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzQnXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tNCcpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tNFwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF80J10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF81J10gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3BvcHVwLXZpZGVvLTUnKVswXTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTVcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfNSddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9