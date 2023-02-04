(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");









var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_8__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });

    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

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

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_stickyAddToCart */ "./assets/js/theme/themevale/themevale_stickyAddToCart.js");
/* harmony import */ var _themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themevale/themevale_fbt */ "./assets/js/theme/themevale/themevale_fbt.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*
 Import all product specific js
 */










var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context.urls);

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();

    // countdown time
    var product_id = $('[data-cart-item-add] [name="product_id"]').val();
    Object(_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__["default"])(product_id);
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    Object(_themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(_themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    if ($('.description-slider').length) {
      this.descriptionSlider();
      $('[data-collapsible]').on('click', function (event) {
        $('.description-slider').slick('setPosition');
      });
    }
    if ($('.description-slider-2').length) {
      this.descriptionSlider2();
      $('[data-collapsible]').on('click', function (event) {
        $('.description-slider-2').slick('setPosition');
      });
    }
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.descriptionSlider = function descriptionSlider() {
    $('.description-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      mobileFirst: true,
      responsive: [{
        breakpoint: 551,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }]
    });
  };
  _proto.descriptionSlider2 = function descriptionSlider2() {
    $('.description-slider-2').slick({
      dots: true,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      mobileFirst: true,
      responsive: [{
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
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.$collapsible2 = $('.productView-reviewTabLink');
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    var $content2 = $('#product-reviews');
    $('.review-link a').on('click', function (e) {
      e.preventDefault();
      $('.is-open[data-collapsible]', $('.tabs-vertical')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      if ($('.themevale_productDescription-3').length) {
        $('.is-open[data-collapsible]', $('.themevale_productDescription-3')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
        if ($(window).width() > 1024) {
          $('html, body').animate({
            scrollTop: $('#tab-review').offset().top - $('.header').height()
          }, 700);
        } else {
          $('html, body').animate({
            scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
          }, 700);
        }
      } else {
        $('html, body').animate({
          scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
        }, 700);
      }
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      }
      if ($('.themevale_productDescription-3').length) {
        if (!$content2.hasClass('is-active')) {
          _this.$collapsible2.trigger('click');
        }
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    // this.$collapsible2.trigger(CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_fbt.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_fbt.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");









function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }








/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var relate_tab = "#product-related";
  var previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_16__["default"])('#previewModal')[0];

  // check custom field fbt
  showFBT();
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.themvale-fbt-toggle-options', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().is(':visible') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().slideDown();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().slideUp();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('change', '.themvale-fbt-detail-checkbox', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('id').replace('fbt_product', '');
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).is(':checked') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parents('form').find('.themvale-fbt-detail-options').slideUp();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').addClass('isChecked');
    }
    totalPrice();
  });
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '#themvale-fbt-addAll', function (event) {
    var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('form', jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt'));
    var arrPro = new Array();
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-detail-checkbox').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).is(':checked')) {
        arrPro.push(i);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .loadingOverlay').show();
        addToCart($form, 0, arrPro);
      }
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_15___default()({
        text: 'Please make sure all options have been filled in.',
        type: 'warning'
      });
    }
    event.preventDefault();
  });
  function showFBT() {
    // related product
    var options = {
      template: {
        item: 'themevale/fbt-item',
        options: 'themevale/fbt-options'
      }
    };
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-name.fbt').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(relate_tab + ' .card').each(function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()(relate_tab + ' .card').length) showList(list);
          });
        }
      });
    } else if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-name.fbt-product').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').each(function (i) {
        list.push({
          i: i,
          data: ""
        });
        if (!isNaN(Number(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text()))) {
          var productId = Number(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text());
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.product.getById(productId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        } else {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.getPage(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text(), options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt').remove();
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-list').append(response.item);
      if (response.options.trim() != "") {
        var pId = jquery__WEBPACK_IMPORTED_MODULE_13___default()(response.item).data('product-id');
        var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-list .themvale-fbt-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_13___default()(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var attributesData = response.data || {};
            var attributesContent = response.content || {};
            updateProductAttributes($form, attributesData);
            if (hasDefaultOptions) {
              updateView($form, attributesData, attributesContent);
            } else {
              updateDefaultAttributesForOOS(attributesData);
            }
          });
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt').show();
    productOptions();
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-wrapper').append('<div class="themvale-fbt-total fbt__total">\
          <p class="themevale-text-price"><span>Total:</span> <span class="themvale-fbt-total-price" id="themvale-fbt-totalPrice"></span></p>\
          <a class="button button--primary themvale-fbt-total-button" id="themvale-fbt-addAll" href="#">Add all to Cart</a>\
        </div>');
    slick_slider();
    totalPrice();
  }
  function slick_slider() {
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.product-layout-3').length) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        }]
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        }]
      });
    }
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0, len = arrPro.length; i < len; i++) {
      var k = arrPro[i];
      var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) return false;
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true;
    $attributes.find('input:text, input:password, input:file, textarea').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {}
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP) {
    if (i >= arrP.length) {
      window.location = '/cart.php';
      return;
    }
    if (window.FormData === undefined) {
      return;
    }
    var k = arrP[i];
    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
      var errorMessage = err || response.data.error;

      // Guard statement
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
      }
      i++;
      if (i >= arrP.length) {
        // window.location = '/cart.php';
        if (previewModal) {
          previewModal.open();
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .loadingOverlay').hide();
          updateCartContent(previewModal, response.data.cart_item.id);
        } else {
          // if no modal, redirect to the cart page
          window.location = '/cart.php';
        }
        return;
      }
      addToCart(form, i, arrP);
      // return response.data.cart_item.product_id;
    });
  }

  function updateCartContent(modal, cartItemId, onComplete) {
    getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);

      // Update cart counter
      var $body = jquery__WEBPACK_IMPORTED_MODULE_13___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-cart-quantity]', modal.$content);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_13___default()('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }
    });
  }
  function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.getContent(options, onComplete);
  }
  function totalPrice() {
    var total = 0;
    var pos = 0;
    var symbol = "$";
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item.isChecked').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withTax').length) var currency = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withTax').text();else var currency = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withoutTax').text();
      var price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
      var s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
      if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) symbol = s;
      if (currency.indexOf(symbol) != -1) pos = currency.indexOf(symbol);
      total = total + price;
    });
    total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (pos == 0) total = symbol + total;else total = total + symbol;
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt-totalPrice').html(total);
  }
  function productOptions() {
    totalPrice();
    var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('form', jquery__WEBPACK_IMPORTED_MODULE_13___default()(document));

    // var arrPro = new Array();
    // for (var i = 0, len = $form.length; i < len; i++) {
    var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $form);
    jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
    });
    // }

    jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.close-options', function () {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parent().slideUp();
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_13___default()(event.target);
    var $form = $changedOption.parents('form');
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $form).val();
    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      totalPrice();
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_13___default()(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].tools.image.getSrc(data.image.data, context.themeSettings.product_size);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('src')
      });
    } else {
      var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr('data-src');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': _mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('src')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.rrp-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.rrp-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.non-sale-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.non-sale-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-section--saving', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-now-label', $scope)
      },
      priceLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-label', $scope)
      },
      $weight: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_13___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-sku]'),
      $upc: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-upc]'),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-bulkPricing', $scope)
    };
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return formData;
  }
});

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_stickyAddToCart.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_stickyAddToCart.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').offset();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top + 100) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 30);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
        }
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').removeClass('show_sticky');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", 40);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 40);
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + 30);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 15);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight());
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 0);
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.choose_options_add', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').toggleClass('is-open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.pop-up-option .close', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pop-up-option").removeClass('is-open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
  });
  window.onload = function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top - 160) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 30);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
        }
      }
    }
  };
});

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvdGhlbWV2YWxlL3RoZW1ldmFsZV9mYnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3RoZW1ldmFsZS90aGVtZXZhbGVfc3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWFwLmpzIl0sIm5hbWVzIjpbImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwibGVuZ3RoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFmdGVyIiwiVmFsaWRhdG9ycyIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkYXRvciIsImZpZWxkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJub2QiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwiaXMiLCJhdHRyIiwiY29tcGFyZSIsImh0bWwiLCJwcm9kdWN0cyIsIiRjaGVja2VkIiwiJGNvbXBhcmVMaW5rIiwiZWxlbWVudCIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiUHJvZHVjdCIsImNvbnRleHQiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxzIiwiZG9jdW1lbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJwYXRobmFtZSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInByb2R1Y3RfaWQiLCJDb3VudGRvd24iLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCIkcmV2aWV3Rm9ybSIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwic3RpY2t5QWRkVG9DYXJ0IiwiRkJUIiwiZGVzY3JpcHRpb25TbGlkZXIiLCJzbGljayIsImRlc2NyaXB0aW9uU2xpZGVyMiIsInRyaWdnZXIiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIlBhZ2VNYW5hZ2VyIiwic3VibWl0IiwiJHJldmlld3NDb250ZW50IiwiJGNvbGxhcHNpYmxlIiwiJGNvbGxhcHNpYmxlMiIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiJGNvbnRlbnQiLCIkY29udGVudDIiLCJlIiwiQ29sbGFwc2libGVFdmVudHMiLCJjbGljayIsIndpZHRoIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsIiR0YXJnZXQiLCJpZCIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsIiRlbCIsImlzSW5pdGlhbGl6ZWQiLCJyZWxhdGVfdGFiIiwicHJldmlld01vZGFsIiwibW9kYWxGYWN0b3J5Iiwic2hvd0ZCVCIsIm5leHQiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwicmVwbGFjZSIsInBhcmVudHMiLCJ0b3RhbFByaWNlIiwiYXJyUHJvIiwiQXJyYXkiLCJpIiwiY2hlY2siLCJjaGVja1Byb2R1Y3QiLCJzaG93IiwiYWRkVG9DYXJ0Iiwic3dhbCIsInRleHQiLCJ0ZW1wbGF0ZSIsIm51bSIsImxpc3QiLCJwSWQiLCJ1bmRlZmluZWQiLCJ1dGlscyIsImFwaSIsImdldEJ5SWQiLCJlcnIiLCJyZXNwb25zZSIsInNob3dMaXN0IiwiaXNOYU4iLCJOdW1iZXIiLCJwcm9kdWN0SWQiLCJnZXRQYWdlIiwicmVtb3ZlIiwiYXBwZW5kIiwidHJpbSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJwcm9kdWN0T3B0aW9ucyIsInNsaWNrX3NsaWRlciIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImxlbiIsImsiLCJjaGVja0JlZm9yZUFkZCIsIiRhdHRyaWJ1dGVzIiwiZm9jdXMiLCJhdHQiLCJhcnJQIiwiRm9ybURhdGEiLCJjYXJ0IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhbGVydCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0Iiwib3BlbiIsImhpZGUiLCJ1cGRhdGVDYXJ0Q29udGVudCIsImNhcnRfaXRlbSIsIm1vZGFsIiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJnZXRDYXJ0Q29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCIkYm9keSIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydENvdW50ZXIiLCJxdWFudGl0eSIsInBhcmFtcyIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImxpbWl0IiwiZ2V0Q29udGVudCIsInRvdGFsIiwicG9zIiwic3ltYm9sIiwiY3VycmVuY3kiLCJwcmljZSIsInBhcnNlRmxvYXQiLCJzIiwidG9GaXhlZCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsIiRjaGFuZ2VkT3B0aW9uIiwidGFyZ2V0IiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50Iiwic2hvd1Byb2R1Y3RJbWFnZSIsIiRzY29wZSIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsInBhcnNlSW50IiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwiY2xvc2VzdCIsImltYWdlIiwibWFpbkltYWdlVXJsIiwidG9vbHMiLCJnZXRTcmMiLCJ0aGVtZVNldHRpbmdzIiwicHJvZHVjdF9zaXplIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwidXBkYXRlUHJpY2VWaWV3IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkY29udGFpbmVyIiwiJHNrdSIsIiR1cGMiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwid2l0aF90YXgiLCJmb3JtYXR0ZWQiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsImZvcm1EYXRhIiwia2V5IiwiRmlsZSIsInNpemUiLCJkZWxldGUiLCJjb25zb2xlIiwic2Nyb2xsIiwiY3NzIiwib3V0ZXJIZWlnaHQiLCJ0b2dnbGVDbGFzcyIsIm9ubG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QjtBQUNXO0FBRW5DLElBQU1BLGFBQWEsR0FBRyxDQUNsQixPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsQ0FDYjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxhQUFhLENBQUNDLEtBQUssRUFBRUMsY0FBYyxFQUFFO0VBQzFDLElBQU1DLE1BQU0sR0FBR0MsQ0FBQyxDQUFDSCxLQUFLLENBQUM7RUFDdkIsSUFBTUksVUFBVSxHQUFHRixNQUFNLENBQUNHLE1BQU0sT0FBS0osY0FBYyxDQUFHO0VBQ3RELElBQU1LLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNDLFdBQVcsRUFBRTtFQUVwRCxJQUFJQyxTQUFTLEdBQU1SLGNBQWMsVUFBS0ssT0FBUztFQUMvQyxJQUFJSSxpQkFBaUI7O0VBRXJCO0VBQ0EsSUFBSUosT0FBTyxLQUFLLE9BQU8sRUFBRTtJQUNyQixJQUFNSyxTQUFTLEdBQUdULE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUVyQyxJQUFJLHVEQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRUksU0FBUyxDQUFDLEVBQUU7TUFDeEQ7TUFDQUYsU0FBUyxHQUFNUixjQUFjLFVBQUssd0RBQVlVLFNBQVMsQ0FBRztJQUM5RCxDQUFDLE1BQU07TUFDSDtNQUNBRCxpQkFBaUIsUUFBTUQsU0FBUyxHQUFHLHlEQUFhRSxTQUFTLENBQUc7SUFDaEU7RUFDSjs7RUFFQTtFQUNBLE9BQU9QLFVBQVUsQ0FDWlEsUUFBUSxDQUFDSCxTQUFTLENBQUMsQ0FDbkJHLFFBQVEsQ0FBQ0YsaUJBQWlCLENBQUM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNHLFlBQVksQ0FBQ0MsWUFBWSxFQUFFQyxPQUFPLEVBQU87RUFBQSxJQUFkQSxPQUFPO0lBQVBBLE9BQU8sR0FBRyxDQUFDLENBQUM7RUFBQTtFQUNuRCxJQUFNQyxLQUFLLEdBQUdiLENBQUMsQ0FBQ1csWUFBWSxDQUFDO0VBQzdCLElBQU1HLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxJQUFJLENBQUNwQixhQUFhLENBQUNxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0VBRXBEO0VBQ0EsZUFBMENKLE9BQU87SUFBQSxpQ0FBekNkLGNBQWM7SUFBZEEsY0FBYyxzQ0FBRyxZQUFZOztFQUVyQztFQUNBZ0IsT0FBTyxDQUFDRyxJQUFJLENBQUMsVUFBQ0MsRUFBRSxFQUFFckIsS0FBSyxFQUFLO0lBQ3hCRCxhQUFhLENBQUNDLEtBQUssRUFBRUMsY0FBYyxDQUFDO0VBQ3hDLENBQUMsQ0FBQztFQUVGLE9BQU9lLEtBQUs7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNNLFVBQVUsQ0FBQ0MsTUFBTSxFQUFFO0VBQ3hCLElBQU1DLE9BQU8sR0FBR0QsTUFBTSxDQUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDa0IsS0FBSyxDQUFDLFVBQVUsQ0FBQztFQUVyRCxJQUFJRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUNqQyxPQUFPRixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3JCO0VBRUEsT0FBTyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTRyxzQkFBc0IsQ0FBQ0MsV0FBVyxFQUFFO0VBQ3pDLElBQU1KLE9BQU8sR0FBR0YsVUFBVSxDQUFDTSxXQUFXLENBQUM7RUFDdkMsSUFBTUMsZUFBZSxHQUFHO0lBQ3BCQyxJQUFJLEVBQUUsUUFBUTtJQUNkQyxJQUFJLHNCQUFvQlAsT0FBUztJQUNqQ1EsS0FBSyxFQUFFO0VBQ1gsQ0FBQztFQUVESixXQUFXLENBQUNLLEtBQUssQ0FBQzlCLENBQUMsQ0FBQyxXQUFXLEVBQUUwQixlQUFlLENBQUMsQ0FBQztBQUN0RDtBQUVBLElBQU1LLFVBQVUsR0FBRztFQUNmO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsa0JBQWtCLEVBQUUsNEJBQUNDLFNBQVMsRUFBRUMsS0FBSyxFQUFLO0lBQ3RDLElBQUlBLEtBQUssRUFBRTtNQUNQRCxTQUFTLENBQUNFLEdBQUcsQ0FBQztRQUNWQyxRQUFRLEVBQUVGLEtBQUs7UUFDZkcsUUFBUSxFQUFFLGtCQUFDQyxFQUFFLEVBQUVDLEdBQUcsRUFBSztVQUNuQixJQUFNQyxNQUFNLEdBQUdDLHFEQUFLLENBQUNDLEtBQUssQ0FBQ0gsR0FBRyxDQUFDO1VBRS9CRCxFQUFFLENBQUNFLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDREcsWUFBWSxFQUFFO01BQ2xCLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUMscUJBQXFCLEVBQUUsK0JBQUNYLFNBQVMsRUFBRVksZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBSztJQUNqRyxJQUFNQyxTQUFTLEdBQUdqRCxDQUFDLENBQUM2QyxnQkFBZ0IsQ0FBQztJQUNyQyxJQUFNSyxtQkFBbUIsR0FBRyxDQUN4QjtNQUNJZCxRQUFRLEVBQUVTLGdCQUFnQjtNQUMxQlIsUUFBUSxFQUFFLGtCQUFDQyxFQUFFLEVBQUVDLEdBQUcsRUFBSztRQUNuQixJQUFNQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ2hCLE1BQU07UUFFekIsSUFBSXlCLFVBQVUsRUFBRTtVQUNaLE9BQU9WLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbkI7UUFFQUEsRUFBRSxDQUFDRSxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RHLFlBQVksRUFBRTtJQUNsQixDQUFDLEVBQ0Q7TUFDSVAsUUFBUSxFQUFFUyxnQkFBZ0I7TUFDMUJSLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRSxFQUFFQyxHQUFHLEVBQUs7UUFDbkIsSUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNqQixLQUFLLENBQUMsSUFBSTZCLE1BQU0sQ0FBQ0osWUFBWSxDQUFDSyxLQUFLLENBQUMsQ0FBQyxJQUNqRGIsR0FBRyxDQUFDakIsS0FBSyxDQUFDLElBQUk2QixNQUFNLENBQUNKLFlBQVksQ0FBQ00sT0FBTyxDQUFDLENBQUMsSUFDM0NkLEdBQUcsQ0FBQ2hCLE1BQU0sSUFBSXdCLFlBQVksQ0FBQ08sU0FBUzs7UUFFM0M7UUFDQSxJQUFJTixVQUFVLElBQUlULEdBQUcsQ0FBQ2hCLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDaEMsT0FBT2UsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNuQjtRQUVBQSxFQUFFLENBQUNFLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDREcsWUFBWSxFQUFFSSxZQUFZLENBQUNRO0lBQy9CLENBQUMsRUFDRDtNQUNJbkIsUUFBUSxFQUFFVSxpQkFBaUI7TUFDM0JULFFBQVEsRUFBRSxrQkFBQ0MsRUFBRSxFQUFFQyxHQUFHLEVBQUs7UUFDbkIsSUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNoQixNQUFNO1FBRXpCLElBQUl5QixVQUFVLEVBQUU7VUFDWixPQUFPVixFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ25CO1FBRUFBLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNERyxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxFQUNEO01BQ0lQLFFBQVEsRUFBRVUsaUJBQWlCO01BQzNCVCxRQUFRLEVBQUUsa0JBQUNDLEVBQUUsRUFBRUMsR0FBRyxFQUFLO1FBQ25CLElBQU1DLE1BQU0sR0FBR0QsR0FBRyxLQUFLVSxTQUFTLENBQUNWLEdBQUcsRUFBRTtRQUV0Q0QsRUFBRSxDQUFDRSxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RHLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQ0o7SUFFRFYsU0FBUyxDQUFDRSxHQUFHLENBQUNlLG1CQUFtQixDQUFDO0VBQ3RDLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJTSx3QkFBd0IsRUFBRSxrQ0FBQ3ZCLFNBQVMsRUFBRXdCLFNBQVMsRUFBSztJQUNoRCxJQUNJQyxhQUFhLEdBS2JELFNBQVMsQ0FMVEMsYUFBYTtNQUNiQyxnQkFBZ0IsR0FJaEJGLFNBQVMsQ0FKVEUsZ0JBQWdCO01BQ2hCaEQsWUFBWSxHQUdaOEMsU0FBUyxDQUhUOUMsWUFBWTtNQUNaaUQsZ0JBQWdCLEdBRWhCSCxTQUFTLENBRlRHLGdCQUFnQjtNQUNoQkMsZ0JBQWdCLEdBQ2hCSixTQUFTLENBRFRJLGdCQUFnQjtJQUdwQjVCLFNBQVMsQ0FBQzZCLFNBQVMsQ0FBQztNQUNoQkMsSUFBSSxFQUFFcEQsWUFBWTtNQUNsQnFELGFBQWEsRUFBRSxJQUFJO01BQ25CQyxZQUFZLEVBQUUsR0FBRyxDQUFFO0lBQ3ZCLENBQUMsQ0FBQzs7SUFFRmhDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO01BQ1ZRLFlBQVksRUFBRSx5Q0FBeUM7TUFDdkRQLFFBQVEsRUFBRXlCLGdCQUFnQjtNQUMxQnhCLFFBQVEsZUFBYXdCLGdCQUFnQixTQUFJRDtJQUM3QyxDQUFDLENBQUM7SUFFRjNCLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO01BQ1ZRLFlBQVksRUFBRSx5Q0FBeUM7TUFDdkRQLFFBQVEsRUFBRXdCLGdCQUFnQjtNQUMxQnZCLFFBQVEsZUFBYXdCLGdCQUFnQixTQUFJRDtJQUM3QyxDQUFDLENBQUM7SUFFRjNCLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO01BQ1ZRLFlBQVksRUFBRSx5QkFBeUI7TUFDdkNQLFFBQVEsRUFBRXdCLGdCQUFnQjtNQUMxQnZCLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGSixTQUFTLENBQUNFLEdBQUcsQ0FBQztNQUNWUSxZQUFZLEVBQUUseUJBQXlCO01BQ3ZDUCxRQUFRLEVBQUV5QixnQkFBZ0I7TUFDMUJ4QixRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7SUFFRkosU0FBUyxDQUFDRSxHQUFHLENBQUM7TUFDVlEsWUFBWSxFQUFFLCtCQUErQjtNQUM3Q1AsUUFBUSxFQUFFLENBQUN5QixnQkFBZ0IsRUFBRUQsZ0JBQWdCLENBQUM7TUFDOUN2QixRQUFRLEVBQUU7SUFDZCxDQUFDLENBQUM7SUFFRkosU0FBUyxDQUFDaUMsaUJBQWlCLENBQUM7TUFDeEI5QixRQUFRLEVBQUUsQ0FBQ3lCLGdCQUFnQixFQUFFRCxnQkFBZ0IsQ0FBQztNQUM5QzFELE1BQU0sRUFBRXlELGdCQUFnQjtNQUN4QlEsU0FBUyxFQUFFVDtJQUNmLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lVLHlCQUF5QixFQUFFLG1DQUFDbkMsU0FBUyxFQUFFQyxLQUFLLEVBQUs7SUFDN0MsSUFBSUEsS0FBSyxFQUFFO01BQ1BELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO1FBQ1ZDLFFBQVEsRUFBRUYsS0FBSztRQUNmRyxRQUFRLEVBQUUsVUFBVTtRQUNwQk0sWUFBWSxFQUFFO01BQ2xCLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0kwQixzQkFBc0IsRUFBRSxnQ0FBQ25DLEtBQUssRUFBSztJQUMvQixJQUFNb0Msa0JBQWtCLEdBQUd0RSxDQUFDLG1CQUFpQmtDLEtBQUssQ0FBQ3FDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBTTtJQUUxRUMsTUFBTSxDQUFDQyxJQUFJLENBQUNDLDRDQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQy9DLEtBQUssRUFBSztNQUN4QyxJQUFJeUMsa0JBQWtCLENBQUNPLFFBQVEsQ0FBQ0gsNENBQUcsQ0FBQ0MsT0FBTyxDQUFDOUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNqRHlDLGtCQUFrQixDQUFDUSxXQUFXLENBQUNKLDRDQUFHLENBQUNDLE9BQU8sQ0FBQzlDLEtBQUssQ0FBQyxDQUFDO01BQ3REO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hTRDtBQUFBLElBQU1ZLEtBQUssR0FBRztFQUNWQyxLQUFLLGlCQUFDYixLQUFLLEVBQUU7SUFDVCxJQUFNa0QsRUFBRSxHQUFHLFlBQVk7SUFDdkIsT0FBT0EsRUFBRSxDQUFDQyxJQUFJLENBQUNuRCxLQUFLLENBQUM7RUFDekIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSW9ELFFBQVEsb0JBQUNwRCxLQUFLLEVBQUU7SUFDWixPQUFPLElBQUksQ0FBQ3FELFFBQVEsQ0FBQ3JELEtBQUssQ0FBQztFQUMvQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lxRCxRQUFRLG9CQUFDckQsS0FBSyxFQUFFO0lBQ1osT0FBT0EsS0FBSyxDQUFDTixNQUFNLEdBQUcsQ0FBQztFQUMzQjtBQUNKLENBQUM7QUFFY2tCLG9FQUFLLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJxQjtBQUV6QyxTQUFTMEMsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNGLElBQUksQ0FBQztFQUVuQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWkYsT0FBTyxDQUFDSSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDNUI7QUFDSjtBQUVBLFNBQVNHLGdCQUFnQixDQUFDTCxPQUFPLEVBQUVDLElBQUksRUFBRTtFQUNyQ0QsT0FBTyxDQUFDTSxJQUFJLENBQUNMLElBQUksQ0FBQztBQUN0QjtBQUVBLFNBQVNNLGdCQUFnQixDQUFDUCxPQUFPLEVBQUVRLEtBQUssRUFBRUMsVUFBVSxFQUFFO0VBQ2xELElBQUlULE9BQU8sQ0FBQzdELE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDdEIsSUFBSSxDQUFDcUUsS0FBSyxDQUFDRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDdEJGLEtBQUssQ0FBQ25GLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDMUI7SUFDQW1GLEtBQUssQ0FBQ0csSUFBSSxDQUFDLE1BQU0sRUFBS0YsVUFBVSxDQUFDRyxPQUFPLFNBQUlaLE9BQU8sQ0FBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRztJQUNoRTRFLEtBQUssQ0FBQzdFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDa0YsSUFBSSxDQUFDYixPQUFPLENBQUM3RCxNQUFNLENBQUM7RUFDckQsQ0FBQyxNQUFNO0lBQ0hxRSxLQUFLLENBQUNkLFdBQVcsQ0FBQyxNQUFNLENBQUM7RUFDN0I7QUFDSjtBQUVlLHlFQUFVZSxVQUFVLEVBQUU7RUFDakMsSUFBSUssUUFBUTtFQUVaLElBQU1DLFFBQVEsR0FBR25HLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0VBQ3JFLElBQU1xRixZQUFZLEdBQUdwRyxDQUFDLENBQUMscUJBQXFCLENBQUM7RUFFN0MsSUFBSW1HLFFBQVEsQ0FBQzVFLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDdkIyRSxRQUFRLEdBQUcsa0RBQU1DLFFBQVEsRUFBRSxVQUFBRSxPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUFDeEUsS0FBSztJQUFBLEVBQUM7SUFFcEQ4RCxnQkFBZ0IsQ0FBQ08sUUFBUSxFQUFFRSxZQUFZLEVBQUVQLFVBQVUsQ0FBQztFQUN4RDtFQUVBLElBQU1TLGNBQWMsR0FBR0osUUFBUSxJQUFJLEVBQUU7RUFFckNsRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1RyxFQUFFLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUNoRCxJQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxDQUFDN0UsS0FBSztJQUN6QyxJQUFNOEUsbUJBQW1CLEdBQUczRyxDQUFDLENBQUMscUJBQXFCLENBQUM7SUFFcEQsSUFBSXdHLEtBQUssQ0FBQ0UsYUFBYSxDQUFDRSxPQUFPLEVBQUU7TUFDN0JuQixnQkFBZ0IsQ0FBQ2EsY0FBYyxFQUFFRyxPQUFPLENBQUM7SUFDN0MsQ0FBQyxNQUFNO01BQ0h0QixnQkFBZ0IsQ0FBQ21CLGNBQWMsRUFBRUcsT0FBTyxDQUFDO0lBQzdDO0lBRUFkLGdCQUFnQixDQUFDVyxjQUFjLEVBQUVLLG1CQUFtQixFQUFFZCxVQUFVLENBQUM7RUFDckUsQ0FBQyxDQUFDO0VBRUY3RixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1RyxFQUFFLENBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUN0RCxJQUFNSyxLQUFLLEdBQUc3RyxDQUFDLENBQUN3RyxLQUFLLENBQUNFLGFBQWEsQ0FBQztJQUNwQyxJQUFNSSxpQkFBaUIsR0FBR0QsS0FBSyxDQUFDOUYsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRTFFLElBQUkrRixpQkFBaUIsQ0FBQ3ZGLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDL0J3Riw2REFBYyxDQUFDLGtEQUFrRCxDQUFDO01BQ2xFUCxLQUFLLENBQUNRLGNBQWMsRUFBRTtJQUMxQjtFQUNKLENBQUMsQ0FBQztFQUVGaEgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFNO0lBQy9DLElBQU1VLG9CQUFvQixHQUFHakgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZSxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFFakYsSUFBSWtHLG9CQUFvQixDQUFDMUYsTUFBTSxJQUFJLENBQUMsRUFBRTtNQUNsQ3dGLDZEQUFjLENBQUMsa0RBQWtELENBQUM7TUFDbEUsT0FBTyxLQUFLO0lBQ2hCO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUN5QztBQUNGO0FBQ2U7QUFDQTtBQUNIO0FBQ0E7QUFDSztBQUNZO0FBQ3hCO0FBQ1k7QUFBQSxJQUVuQ0csT0FBTztFQUFBO0VBQ3hCLGlCQUFZQyxPQUFPLEVBQUU7SUFBQTtJQUNqQixnQ0FBTUEsT0FBTyxDQUFDO0lBQ2QsTUFBS0MsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtJQUMvQixNQUFLQyxXQUFXLEdBQUd4SCxDQUFDLENBQUMsc0NBQXNDLENBQUM7SUFBQztFQUNqRTtFQUFDO0VBQUEsT0FFRHlILE9BQU8sR0FBUCxtQkFBVTtJQUFBO0lBQ05DLHlFQUFlLENBQUMsSUFBSSxDQUFDUCxPQUFPLENBQUNRLElBQUksQ0FBQzs7SUFFbEM7SUFDQTNILENBQUMsQ0FBQzRILFFBQVEsQ0FBQyxDQUFDckIsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQU07TUFDdkMsSUFBSSxNQUFJLENBQUNhLEdBQUcsQ0FBQzdCLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxPQUFPOEIsTUFBTSxDQUFDUSxPQUFPLENBQUNDLFlBQVksS0FBSyxVQUFVLEVBQUU7UUFDL0ZULE1BQU0sQ0FBQ1EsT0FBTyxDQUFDQyxZQUFZLENBQUMsSUFBSSxFQUFFRixRQUFRLENBQUNHLEtBQUssRUFBRVYsTUFBTSxDQUFDQyxRQUFRLENBQUNVLFFBQVEsQ0FBQztNQUMvRTtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUkvRixTQUFTOztJQUViO0lBQ0FnRyxtRUFBa0IsRUFBRTs7SUFFcEI7SUFDQSxJQUFJQyxVQUFVLEdBQUdsSSxDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQ3VDLEdBQUcsRUFBRTtJQUNwRTRGLDhFQUFTLENBQUNELFVBQVUsQ0FBQztJQUVyQixJQUFJLENBQUNFLGNBQWMsR0FBRyxJQUFJQywrREFBYyxDQUFDckksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ21ILE9BQU8sRUFBRUUsTUFBTSxDQUFDaUIsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQztJQUMzRyxJQUFJLENBQUNILGNBQWMsQ0FBQ0ksaUJBQWlCLEVBQUU7SUFFdkNDLHNFQUFZLEVBQUU7SUFFZCxJQUFNQyxXQUFXLEdBQUdoSSx1RUFBWSxDQUFDLG1CQUFtQixDQUFDO0lBQ3JELElBQU1pSSxNQUFNLEdBQUcsSUFBSUMsd0RBQU0sQ0FBQ0YsV0FBVyxDQUFDO0lBRXRDMUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxZQUFNO01BQ2hFdEUsU0FBUyxHQUFHMEcsTUFBTSxDQUFDRSxrQkFBa0IsQ0FBQyxNQUFJLENBQUMxQixPQUFPLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUZ1QixXQUFXLENBQUNuQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQU07TUFDM0IsSUFBSXRFLFNBQVMsRUFBRTtRQUNYQSxTQUFTLENBQUM2RyxZQUFZLEVBQUU7UUFDeEIsT0FBTzdHLFNBQVMsQ0FBQzhHLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDcEM7TUFFQSxPQUFPLEtBQUs7SUFDaEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtJQUMzQkMsb0ZBQWUsRUFBRTtJQUNqQkMsd0VBQUcsQ0FBQyxJQUFJLENBQUMvQixPQUFPLENBQUM7SUFFakIsSUFBSW5ILENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDdUIsTUFBTSxFQUFFO01BQ2pDLElBQUksQ0FBQzRILGlCQUFpQixFQUFFO01BQ3hCbkosQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUN1RyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtRQUNqRHhHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb0osS0FBSyxDQUFDLGFBQWEsQ0FBQztNQUNqRCxDQUFDLENBQUM7SUFDTjtJQUVBLElBQUlwSixDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3VCLE1BQU0sRUFBRTtNQUNuQyxJQUFJLENBQUM4SCxrQkFBa0IsRUFBRTtNQUN6QnJKLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDdUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVQyxLQUFLLEVBQUU7UUFDakR4RyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ29KLEtBQUssQ0FBQyxhQUFhLENBQUM7TUFDbkQsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBQUEsT0FFREosb0JBQW9CLEdBQXBCLGdDQUF1QjtJQUNuQixJQUFJLElBQUksQ0FBQzVCLEdBQUcsQ0FBQzdCLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUMxQyxJQUFJLENBQUNpQyxXQUFXLENBQUM4QixPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3JDO0VBQ0osQ0FBQztFQUFBLE9BRURILGlCQUFpQixHQUFqQiw2QkFBb0I7SUFDaEJuSixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ29KLEtBQUssQ0FBQztNQUMzQkcsSUFBSSxFQUFFLElBQUk7TUFDVkMsTUFBTSxFQUFFLEtBQUs7TUFDYkMsUUFBUSxFQUFFLEtBQUs7TUFDZkMsWUFBWSxFQUFFLENBQUM7TUFDZkMsY0FBYyxFQUFFLENBQUM7TUFDakJDLFdBQVcsRUFBRSxJQUFJO01BQ2pCQyxVQUFVLEVBQUUsQ0FDWjtRQUNJQyxVQUFVLEVBQUUsR0FBRztRQUNmQyxRQUFRLEVBQUU7VUFDTkwsWUFBWSxFQUFFLENBQUM7VUFDZkMsY0FBYyxFQUFFO1FBQ3BCO01BQ0osQ0FBQztJQUNMLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVETixrQkFBa0IsR0FBbEIsOEJBQXFCO0lBQ2pCckosQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNvSixLQUFLLENBQUM7TUFDN0JHLElBQUksRUFBRSxJQUFJO01BQ1ZDLE1BQU0sRUFBRSxLQUFLO01BQ2JDLFFBQVEsRUFBRSxLQUFLO01BQ2ZDLFlBQVksRUFBRSxDQUFDO01BQ2ZDLGNBQWMsRUFBRSxDQUFDO01BQ2pCQyxXQUFXLEVBQUUsSUFBSTtNQUNqQkMsVUFBVSxFQUFFLENBQ1o7UUFDSUMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsUUFBUSxFQUFFO1VBQ05MLFlBQVksRUFBRSxDQUFDO1VBQ2ZDLGNBQWMsRUFBRTtRQUNwQjtNQUNKLENBQUMsRUFDRDtRQUNJRyxVQUFVLEVBQUUsR0FBRztRQUNmQyxRQUFRLEVBQUU7VUFDTkwsWUFBWSxFQUFFLENBQUM7VUFDZkMsY0FBYyxFQUFFO1FBQ3BCO01BQ0osQ0FBQztJQUNMLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTtBQUFBLEVBbkhnQ0sscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkaEI7QUFDMEI7QUFDZjtBQUFBO0VBR3ZDLGtCQUFZdEIsV0FBVyxFQUFFO0lBQ3JCLElBQUksQ0FBQ3pHLFNBQVMsR0FBR3lDLDJEQUFHLENBQUM7TUFDakJ1RixNQUFNLEVBQUV2QixXQUFXLENBQUMzSCxJQUFJLENBQUMsc0JBQXNCO0lBQ25ELENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ21KLGVBQWUsR0FBR2xLLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QyxJQUFJLENBQUNtSyxZQUFZLEdBQUduSyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDa0ssZUFBZSxDQUFDO0lBQ2pFLElBQUksQ0FBQ0UsYUFBYSxHQUFHcEssQ0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBRXBELElBQUksQ0FBQ3FLLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLG9CQUFvQixFQUFFO0lBQzNCLElBQUksQ0FBQ0MsZUFBZSxFQUFFO0VBQzFCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0VBSEk7RUFBQSxPQUlBRixZQUFZLEdBQVosd0JBQWU7SUFBQTtJQUNaLElBQU1HLFFBQVEsR0FBR3hLLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNrSyxlQUFlLENBQUM7SUFDbkUsSUFBTU8sU0FBUyxHQUFHekssQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQ3RDQSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3VHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ21FLENBQUMsRUFBSztNQUNuQ0EsQ0FBQyxDQUFDMUQsY0FBYyxFQUFFO01BQ2xCaEgsQ0FBQyxDQUFDLDRCQUE0QixFQUFFQSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDc0osT0FBTyxDQUFDcUIscUVBQWlCLENBQUNDLEtBQUssQ0FBQztNQUVyRixJQUFHNUssQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUN1QixNQUFNLEVBQUU7UUFDNUN2QixDQUFDLENBQUMsNEJBQTRCLEVBQUVBLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUNzSixPQUFPLENBQUNxQixxRUFBaUIsQ0FBQ0MsS0FBSyxDQUFDO1FBQ3RHLElBQUk1SyxDQUFDLENBQUNxSCxNQUFNLENBQUMsQ0FBQ3dELEtBQUssRUFBRSxHQUFHLElBQUksRUFBRTtVQUMxQjdLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzhLLE9BQU8sQ0FBQztZQUNwQkMsU0FBUyxFQUFFL0ssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDZ0wsTUFBTSxFQUFFLENBQUNDLEdBQUcsR0FBR2pMLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ2tMLE1BQU07VUFDbEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNYLENBQUMsTUFBTTtVQUNIbEwsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDOEssT0FBTyxDQUFDO1lBQ3BCQyxTQUFTLEVBQUUsS0FBSSxDQUFDYixlQUFlLENBQUNjLE1BQU0sRUFBRSxDQUFDQyxHQUFHLEdBQUdqTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNrTCxNQUFNO1VBQ3RFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDWDtNQUNKLENBQUMsTUFBTTtRQUNIbEwsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDOEssT0FBTyxDQUFDO1VBQ3BCQyxTQUFTLEVBQUUsS0FBSSxDQUFDYixlQUFlLENBQUNjLE1BQU0sRUFBRSxDQUFDQyxHQUFHLEdBQUdqTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNrTCxNQUFNO1FBQ3RFLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDWDtNQUVBLElBQUksQ0FBQ1YsUUFBUSxDQUFDM0YsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQy9CLEtBQUksQ0FBQ3NGLFlBQVksQ0FBQ2IsT0FBTyxDQUFDcUIscUVBQWlCLENBQUNDLEtBQUssQ0FBQztNQUN0RDtNQUVBLElBQUc1SyxDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQ3VCLE1BQU0sRUFBRTtRQUM1QyxJQUFJLENBQUNrSixTQUFTLENBQUM1RixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7VUFDbEMsS0FBSSxDQUFDdUYsYUFBYSxDQUFDZCxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3ZDO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FFRGlCLGVBQWUsR0FBZiwyQkFBa0I7SUFDZDtJQUNBLElBQUlsRCxNQUFNLENBQUNDLFFBQVEsQ0FBQzZELElBQUksSUFBSTlELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDNkQsSUFBSSxDQUFDNUYsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO01BQ2hGO0lBQ0o7O0lBRUE7SUFDQTtFQUNKOztFQUVBO0FBQ0o7QUFDQSxLQUZJO0VBQUEsT0FHQStFLG9CQUFvQixHQUFwQixnQ0FBdUI7SUFDbkIsSUFBTWMsU0FBUyxHQUFHcEwsQ0FBQyxDQUFDLHlDQUF5QyxFQUFFLElBQUksQ0FBQ2tLLGVBQWUsQ0FBQztJQUNwRixJQUFNbUIsU0FBUyxHQUFHckwsQ0FBQyxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQ2tLLGVBQWUsQ0FBQztJQUV4RixJQUFJa0IsU0FBUyxDQUFDN0osTUFBTSxFQUFFO01BQ2xCNkosU0FBUyxDQUFDckYsSUFBSSxDQUFDLE1BQU0sRUFBS3FGLFNBQVMsQ0FBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQW9CO0lBQ3hFO0lBRUEsSUFBSXNGLFNBQVMsQ0FBQzlKLE1BQU0sRUFBRTtNQUNsQjhKLFNBQVMsQ0FBQ3RGLElBQUksQ0FBQyxNQUFNLEVBQUtzRixTQUFTLENBQUN0RixJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUFvQjtJQUN4RTtFQUNKLENBQUM7RUFBQSxPQUVEOEMsa0JBQWtCLEdBQWxCLDRCQUFtQjFCLE9BQU8sRUFBRTtJQUN4QixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNsRixTQUFTLENBQUNFLEdBQUcsQ0FBQyxDQUFDO01BQ2hCQyxRQUFRLEVBQUUsb0JBQW9CO01BQzlCQyxRQUFRLEVBQUUsVUFBVTtNQUNwQk0sWUFBWSxFQUFFLElBQUksQ0FBQ3dFLE9BQU8sQ0FBQ21FO0lBQy9CLENBQUMsRUFBRTtNQUNDbEosUUFBUSxFQUFFLG1CQUFtQjtNQUM3QkMsUUFBUSxFQUFFLFVBQVU7TUFDcEJNLFlBQVksRUFBRSxJQUFJLENBQUN3RSxPQUFPLENBQUNvRTtJQUMvQixDQUFDLEVBQUU7TUFDQ25KLFFBQVEsRUFBRSxrQkFBa0I7TUFDNUJDLFFBQVEsRUFBRSxVQUFVO01BQ3BCTSxZQUFZLEVBQUUsSUFBSSxDQUFDd0UsT0FBTyxDQUFDcUU7SUFDL0IsQ0FBQyxFQUFFO01BQ0NwSixRQUFRLEVBQUUsZ0JBQWdCO01BQzFCQyxRQUFRLEVBQUUsa0JBQUNDLEVBQUUsRUFBRUMsR0FBRyxFQUFLO1FBQ25CLElBQU1DLE1BQU0sR0FBR0MsNERBQUssQ0FBQ0MsS0FBSyxDQUFDSCxHQUFHLENBQUM7UUFDL0JELEVBQUUsQ0FBQ0UsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNERyxZQUFZLEVBQUUsSUFBSSxDQUFDd0UsT0FBTyxDQUFDc0U7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQ3hKLFNBQVM7RUFDekIsQ0FBQztFQUFBLE9BRURJLFFBQVEsR0FBUixvQkFBVztJQUNQLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUM2RyxZQUFZLEVBQUU7RUFDeEMsQ0FBQztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhFLElBQU00QyxZQUFZO0VBQ3JCLHNCQUFZQyxRQUFRLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdELFFBQVEsQ0FBQzVLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNuRCxJQUFJLENBQUM4SyxPQUFPLEdBQUdGLFFBQVEsQ0FBQzVLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRCxJQUFJLENBQUMrSyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ3JCO0VBQUM7RUFBQSxPQUVEQyxjQUFjLEdBQWQsd0JBQWV0QixDQUFDLEVBQUU7SUFDZEEsQ0FBQyxDQUFDMUQsY0FBYyxFQUFFO0lBRWxCLElBQU1pRixPQUFPLEdBQUdqTSxDQUFDLENBQUMwSyxDQUFDLENBQUNoRSxhQUFhLENBQUM7SUFFbEMsSUFBSSxDQUFDb0YsWUFBWSxHQUFHO01BQ2hCSSxFQUFFLEVBQUVELE9BQU8sQ0FBQzFILElBQUksQ0FBQyxTQUFTLENBQUM7TUFDM0I0SCxjQUFjLEVBQUVGO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLGNBQWMsRUFBRTtFQUN6QixDQUFDO0VBQUEsT0FFREQsWUFBWSxHQUFaLHdCQUFlO0lBQ1gsSUFBSSxDQUFDUixPQUFPLENBQUM3RixJQUFJLENBQUMsS0FBSywrQkFBNkIsSUFBSSxDQUFDK0YsWUFBWSxDQUFDSSxFQUFFLENBQUc7RUFDL0UsQ0FBQztFQUFBLE9BRURHLGNBQWMsR0FBZCwwQkFBaUI7SUFDYixJQUFJLENBQUNSLE9BQU8sQ0FBQy9HLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDckMsSUFBSSxDQUFDZ0gsWUFBWSxDQUFDSyxjQUFjLENBQUMxTCxRQUFRLENBQUMsV0FBVyxDQUFDO0VBQzFELENBQUM7RUFBQSxPQUVEc0wsVUFBVSxHQUFWLHNCQUFhO0lBQ1QsSUFBSSxDQUFDRixPQUFPLENBQUN0RixFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3lGLGNBQWMsQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVELENBQUM7RUFBQTtBQUFBO0FBR1UsU0FBUzdELFlBQVksR0FBRztFQUNuQyxJQUFNOEQsU0FBUyxHQUFHLGVBQWU7RUFDakMsSUFBTUMsYUFBYSxHQUFHeE0sQ0FBQyxZQUFVdU0sU0FBUyxPQUFJO0VBRTlDQyxhQUFhLENBQUN2TCxJQUFJLENBQUMsVUFBQ3FFLEtBQUssRUFBRWUsT0FBTyxFQUFLO0lBQ25DLElBQU1vRyxHQUFHLEdBQUd6TSxDQUFDLENBQUNxRyxPQUFPLENBQUM7SUFDdEIsSUFBTXFHLGFBQWEsR0FBR0QsR0FBRyxDQUFDbEksSUFBSSxDQUFDZ0ksU0FBUyxDQUFDLFlBQVliLFlBQVk7SUFFakUsSUFBSWdCLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQUQsR0FBRyxDQUFDbEksSUFBSSxDQUFDZ0ksU0FBUyxFQUFFLElBQUliLFlBQVksQ0FBQ2UsR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRHVCO0FBQ3dCO0FBQ2hCO0FBRWdDO0FBRWhELHlFQUFTdEYsT0FBTyxFQUFFO0VBQzdCLElBQU13RixVQUFVLEdBQUcsa0JBQWtCO0VBQ3JDLElBQU1DLFlBQVksR0FBR0MsOERBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRXJEO0VBQ0FDLE9BQU8sRUFBRTtFQUVUOU0sOENBQUMsQ0FBQzRILFFBQVEsQ0FBQyxDQUFDckIsRUFBRSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxZQUFXO0lBQy9ELElBQUl2Ryw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK00sSUFBSSxFQUFFLENBQUNqSCxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxFQUFFO01BQ3hDOUYsOENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytNLElBQUksRUFBRSxDQUFDQyxTQUFTLEVBQUU7SUFDOUIsQ0FBQyxNQUFNO01BQ0hoTiw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK00sSUFBSSxFQUFFLENBQUNFLE9BQU8sRUFBRTtJQUM1QjtFQUNKLENBQUMsQ0FBQztFQUVGak4sOENBQUMsQ0FBQzRILFFBQVEsQ0FBQyxDQUFDckIsRUFBRSxDQUFDLFFBQVEsRUFBRSwrQkFBK0IsRUFBRSxZQUFXO0lBQ2pFLElBQUkyRixFQUFFLEdBQUdsTSw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDbUgsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDdEQsSUFBSWxOLDhDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM4RixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxFQUFFO01BQ2pDOUYsOENBQUMsQ0FBQyw4Q0FBOEMsR0FBR2tNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQ3BILFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFDdEY5RSw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDbU4sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDcE0sSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUNrTSxPQUFPLEVBQUU7SUFDMUUsQ0FBQyxNQUFNO01BQ0hqTiw4Q0FBQyxDQUFDLDhDQUE4QyxHQUFHa00sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDekwsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUN2RjtJQUNBMk0sVUFBVSxFQUFFO0VBQ2hCLENBQUMsQ0FBQztFQUVGcE4sOENBQUMsQ0FBQzRILFFBQVEsQ0FBQyxDQUFDckIsRUFBRSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFTQyxLQUFLLEVBQUU7SUFDNUQsSUFBTTNGLEtBQUssR0FBR2IsOENBQUMsQ0FBQyxNQUFNLEVBQUVBLDhDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsSUFBSXFOLE1BQU0sR0FBRyxJQUFJQyxLQUFLLEVBQUU7SUFDeEJ0Tiw4Q0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNpQixJQUFJLENBQUMsVUFBU3NNLENBQUMsRUFBRWhMLEdBQUcsRUFBRTtNQUNyRCxJQUFJdkMsOENBQUMsQ0FBQ3VDLEdBQUcsQ0FBQyxDQUFDdUQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3ZCdUgsTUFBTSxDQUFDM0gsSUFBSSxDQUFDNkgsQ0FBQyxDQUFDO01BQ2xCO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSUMsS0FBSyxHQUFHLEtBQUs7SUFFakIsSUFBSUgsTUFBTSxDQUFDOUwsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNuQmlNLEtBQUssR0FBR0MsWUFBWSxDQUFDNU0sS0FBSyxFQUFFd00sTUFBTSxDQUFDO0lBQ3ZDO0lBRUEsSUFBSUcsS0FBSyxFQUFFO01BQ1AsSUFBSUgsTUFBTSxDQUFDOUwsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuQnZCLDhDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQzBOLElBQUksRUFBRTtRQUN6Q0MsU0FBUyxDQUFDOU0sS0FBSyxFQUFFLENBQUMsRUFBRXdNLE1BQU0sQ0FBQztNQUMvQjtJQUNKLENBQUMsTUFBTTtNQUNITyxtREFBSSxDQUFDO1FBQ0RDLElBQUksRUFBRSxtREFBbUQ7UUFDekRsTSxJQUFJLEVBQUU7TUFDVixDQUFDLENBQUM7SUFDTjtJQUVBNkUsS0FBSyxDQUFDUSxjQUFjLEVBQUU7RUFDMUIsQ0FBQyxDQUFDO0VBRUYsU0FBUzhGLE9BQU8sR0FBRztJQUNmO0lBQ0EsSUFBTWxNLE9BQU8sR0FBRztNQUNSa04sUUFBUSxFQUFFO1FBQ056SSxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCekUsT0FBTyxFQUFFO01BQ2I7SUFDSixDQUFDO0lBRUwsSUFBSVosOENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDdUIsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUM1QyxJQUFJd00sR0FBRyxHQUFHLENBQUM7TUFDWCxJQUFJQyxJQUFJLEdBQUcsRUFBRTtNQUViaE8sOENBQUMsQ0FBQzJNLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQzFMLElBQUksQ0FBQyxVQUFTc00sQ0FBQyxFQUFFaEwsR0FBRyxFQUFFO1FBQzNDeUwsSUFBSSxDQUFDdEksSUFBSSxDQUFFO1VBQUM2SCxDQUFDLEVBQUNBLENBQUM7VUFBRWhKLElBQUksRUFBRTtRQUFFLENBQUMsQ0FBRTtRQUM1QixJQUFJMEosR0FBRyxHQUFHak8sOENBQUMsQ0FBQ3VDLEdBQUcsQ0FBQyxDQUFDZ0MsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuQyxJQUFJMEosR0FBRyxJQUFJQyxTQUFTLEVBQUU7VUFDbEJDLG1FQUFLLENBQUNDLEdBQUcsQ0FBQzNILE9BQU8sQ0FBQzRILE9BQU8sQ0FBQ0osR0FBRyxFQUFFck4sT0FBTyxFQUFFLFVBQUMwTixHQUFHLEVBQUVDLFFBQVEsRUFBSztZQUN2RCxJQUFJRCxHQUFHLEVBQUU7Y0FDTCxPQUFPLEVBQUU7WUFDYjtZQUNBTixJQUFJLENBQUNwSixPQUFPLENBQUMsVUFBU3lCLE9BQU8sRUFBRTtjQUMzQixJQUFHQSxPQUFPLENBQUNrSCxDQUFDLElBQUlBLENBQUMsRUFBQztnQkFDZGxILE9BQU8sQ0FBQzlCLElBQUksR0FBR2dLLFFBQVE7Y0FDM0I7WUFDSixDQUFDLENBQUM7WUFFRlIsR0FBRyxFQUFFO1lBQ0wsSUFBR0EsR0FBRyxJQUFJL04sOENBQUMsQ0FBQzJNLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQ3BMLE1BQU0sRUFDckNpTixRQUFRLENBQUNSLElBQUksQ0FBQztVQUN0QixDQUFDLENBQUM7UUFDTjtNQUVKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTSxJQUFJaE8sOENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDdUIsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUMzRCxJQUFJd00sR0FBRyxHQUFHLENBQUM7TUFDWCxJQUFJQyxJQUFJLEdBQUcsRUFBRTtNQUViaE8sOENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDaUIsSUFBSSxDQUFDLFVBQVNzTSxDQUFDLEVBQUU7UUFDdERTLElBQUksQ0FBQ3RJLElBQUksQ0FBRTtVQUFDNkgsQ0FBQyxFQUFDQSxDQUFDO1VBQUVoSixJQUFJLEVBQUU7UUFBRSxDQUFDLENBQUU7UUFDNUIsSUFBSSxDQUFDa0ssS0FBSyxDQUFDQyxNQUFNLENBQUMxTyw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNk4sSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO1VBQ2hDLElBQUljLFNBQVMsR0FBR0QsTUFBTSxDQUFDMU8sOENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzZOLElBQUksRUFBRSxDQUFDO1VBQ3RDTSxtRUFBSyxDQUFDQyxHQUFHLENBQUMzSCxPQUFPLENBQUM0SCxPQUFPLENBQUNNLFNBQVMsRUFBRS9OLE9BQU8sRUFBRSxVQUFDME4sR0FBRyxFQUFFQyxRQUFRLEVBQUs7WUFDN0QsSUFBSUQsR0FBRyxFQUFFO2NBQ0wsT0FBTyxFQUFFO1lBQ2I7WUFDQU4sSUFBSSxDQUFDcEosT0FBTyxDQUFDLFVBQVN5QixPQUFPLEVBQUU7Y0FDM0IsSUFBR0EsT0FBTyxDQUFDa0gsQ0FBQyxJQUFJQSxDQUFDLEVBQUM7Z0JBQ2RsSCxPQUFPLENBQUM5QixJQUFJLEdBQUdnSyxRQUFRO2NBQzNCO1lBQ0osQ0FBQyxDQUFDO1lBQ0ZSLEdBQUcsRUFBRTtZQUNMLElBQUdBLEdBQUcsSUFBSS9OLDhDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQ3VCLE1BQU0sRUFDckRpTixRQUFRLENBQUNSLElBQUksQ0FBQztVQUN0QixDQUFDLENBQUM7UUFDTixDQUFDLE1BQU07VUFDSEcsbUVBQUssQ0FBQ0MsR0FBRyxDQUFDUSxPQUFPLENBQUM1Tyw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNk4sSUFBSSxFQUFFLEVBQUVqTixPQUFPLEVBQUUsVUFBQzBOLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1lBQzFELElBQUlELEdBQUcsRUFBRTtjQUNMLE9BQU8sRUFBRTtZQUNiO1lBQ0FOLElBQUksQ0FBQ3BKLE9BQU8sQ0FBQyxVQUFTeUIsT0FBTyxFQUFFO2NBQzNCLElBQUdBLE9BQU8sQ0FBQ2tILENBQUMsSUFBSUEsQ0FBQyxFQUFDO2dCQUNkbEgsT0FBTyxDQUFDOUIsSUFBSSxHQUFHZ0ssUUFBUTtjQUMzQjtZQUNKLENBQUMsQ0FBQztZQUNGUixHQUFHLEVBQUU7WUFDTCxJQUFHQSxHQUFHLElBQUkvTiw4Q0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUN1QixNQUFNLEVBQ3JEaU4sUUFBUSxDQUFDUixJQUFJLENBQUM7VUFDdEIsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSGhPLDhDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM2TyxNQUFNLEVBQUU7SUFDL0I7RUFDSjtFQUVBLFNBQVNMLFFBQVEsQ0FBQ1IsSUFBSSxFQUFDO0lBQ25CQSxJQUFJLENBQUNwSixPQUFPLENBQUMsVUFBU3lCLE9BQU8sRUFBRTtNQUMzQixJQUFJa0ksUUFBUSxHQUFHbEksT0FBTyxDQUFDOUIsSUFBSTtNQUMzQnZFLDhDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQzhPLE1BQU0sQ0FBQ1AsUUFBUSxDQUFDbEosSUFBSSxDQUFDO01BQ25FLElBQUlrSixRQUFRLENBQUMzTixPQUFPLENBQUNtTyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDL0IsSUFBSWQsR0FBRyxHQUFHak8sOENBQUMsQ0FBQ3VPLFFBQVEsQ0FBQ2xKLElBQUksQ0FBQyxDQUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQU0xRCxLQUFLLEdBQUdiLDhDQUFDLENBQUMsdUZBQXVGLEdBQUdpTyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQzFIcE4sS0FBSyxDQUFDaU8sTUFBTSxDQUFDUCxRQUFRLENBQUMzTixPQUFPLENBQUM7UUFDOUIsSUFBTW9PLHNCQUFzQixHQUFHaFAsOENBQUMsQ0FBQywwQkFBMEIsRUFBRWEsS0FBSyxDQUFDO1FBQ25FLElBQU1vTyxVQUFVLEdBQUdELHNCQUFzQixDQUFDL0ksSUFBSSxFQUFFLENBQUM4SSxJQUFJLEVBQUUsQ0FBQ3hOLE1BQU07UUFDOUQsSUFBTTJOLGlCQUFpQixHQUFHbFAsOENBQUMsQ0FBQ3VPLFFBQVEsQ0FBQzNOLE9BQU8sQ0FBQyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1EsTUFBTTtRQUMzRSxJQUFLMk4saUJBQWlCLElBQUlELFVBQVUsRUFBRTtVQUNsQ2QsbUVBQUssQ0FBQ0MsR0FBRyxDQUFDZSxpQkFBaUIsQ0FBQ0MsWUFBWSxDQUFDbkIsR0FBRyxFQUFFcE4sS0FBSyxDQUFDd08sU0FBUyxFQUFFLEVBQUUsOEJBQThCLEVBQUUsVUFBQ2YsR0FBRyxFQUFFQyxRQUFRLEVBQUs7WUFDaEgsSUFBTWUsY0FBYyxHQUFHZixRQUFRLENBQUNoSyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQU1nTCxpQkFBaUIsR0FBR2hCLFFBQVEsQ0FBQ2lCLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDaERDLHVCQUF1QixDQUFDNU8sS0FBSyxFQUFFeU8sY0FBYyxDQUFDO1lBQzlDLElBQUlKLGlCQUFpQixFQUFFO2NBQ25CUSxVQUFVLENBQUM3TyxLQUFLLEVBQUV5TyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDO1lBQ3hELENBQUMsTUFBTTtjQUNISSw2QkFBNkIsQ0FBQ0wsY0FBYyxDQUFDO1lBQ2pEO1VBQ0osQ0FBQyxDQUFDO1FBQ047TUFDSjtJQUNKLENBQUMsQ0FBQztJQUNGdFAsOENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzBOLElBQUksRUFBRTtJQUN6QmtDLGNBQWMsRUFBRTtJQUNoQjVQLDhDQUFDLENBQUMsNkNBQTZDLENBQUMsQ0FBQzhPLE1BQU0sQ0FBQztBQUNoRTtBQUNBO0FBQ0EsZUFBZSxDQUFDO0lBQ1JlLFlBQVksRUFBRTtJQUNkekMsVUFBVSxFQUFFO0VBQ2hCO0VBRUEsU0FBU3lDLFlBQVksR0FBRztJQUNwQixJQUFJN1AsOENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDdUIsTUFBTSxFQUFFO01BQy9CdkIsOENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDb0osS0FBSyxDQUFDO1FBQ2xDRyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxNQUFNLEVBQUUsS0FBSztRQUNiRSxZQUFZLEVBQUUsQ0FBQztRQUNmQyxjQUFjLEVBQUUsQ0FBQztRQUNqQkMsV0FBVyxFQUFFLElBQUk7UUFDakJILFFBQVEsRUFBRSxLQUFLO1FBQ2ZxRyxTQUFTLEVBQUUscUZBQXFGO1FBQ2hHQyxTQUFTLEVBQUUscUZBQXFGO1FBQ2hHbEcsVUFBVSxFQUFFLENBQ1I7VUFDSUMsVUFBVSxFQUFFLElBQUk7VUFDaEJDLFFBQVEsRUFBRTtZQUNOSixjQUFjLEVBQUUsQ0FBQztZQUNqQkQsWUFBWSxFQUFFLENBQUM7WUFDZkgsSUFBSSxFQUFFLEtBQUs7WUFDWEMsTUFBTSxFQUFFO1VBQ1o7UUFDSixDQUFDLEVBQ0Q7VUFDSU0sVUFBVSxFQUFFLEdBQUc7VUFDZkMsUUFBUSxFQUFFO1lBQ05KLGNBQWMsRUFBRSxDQUFDO1lBQ2pCRCxZQUFZLEVBQUU7VUFDbEI7UUFDSixDQUFDLEVBQ0Q7VUFDSUksVUFBVSxFQUFFLEdBQUc7VUFDZkMsUUFBUSxFQUFFO1lBQ05KLGNBQWMsRUFBRSxDQUFDO1lBQ2pCRCxZQUFZLEVBQUU7VUFDbEI7UUFDSixDQUFDO01BRVQsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0gxSiw4Q0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNvSixLQUFLLENBQUM7UUFDbENHLElBQUksRUFBRSxJQUFJO1FBQ1ZDLE1BQU0sRUFBRSxLQUFLO1FBQ2JFLFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRSxDQUFDO1FBQ2pCQyxXQUFXLEVBQUUsSUFBSTtRQUNqQkgsUUFBUSxFQUFFLEtBQUs7UUFDZnFHLFNBQVMsRUFBRSxxRkFBcUY7UUFDaEdDLFNBQVMsRUFBRSxxRkFBcUY7UUFDaEdsRyxVQUFVLEVBQUUsQ0FDUjtVQUNJQyxVQUFVLEVBQUUsSUFBSTtVQUNoQkMsUUFBUSxFQUFFO1lBQ05KLGNBQWMsRUFBRSxDQUFDO1lBQ2pCRCxZQUFZLEVBQUUsQ0FBQztZQUNmSCxJQUFJLEVBQUUsS0FBSztZQUNYQyxNQUFNLEVBQUU7VUFDWjtRQUNKLENBQUMsRUFDRDtVQUNJTSxVQUFVLEVBQUUsR0FBRztVQUNmQyxRQUFRLEVBQUU7WUFDTkosY0FBYyxFQUFFLENBQUM7WUFDakJELFlBQVksRUFBRTtVQUNsQjtRQUNKLENBQUMsRUFDRDtVQUNJSSxVQUFVLEVBQUUsR0FBRztVQUNmQyxRQUFRLEVBQUU7WUFDTkosY0FBYyxFQUFFLENBQUM7WUFDakJELFlBQVksRUFBRTtVQUNsQjtRQUNKLENBQUM7TUFFVCxDQUFDLENBQUM7SUFFTjtFQUNKO0VBRUEsU0FBUytELFlBQVksQ0FBQzFKLElBQUksRUFBRXNKLE1BQU0sRUFBRTtJQUNoQyxJQUFJRyxLQUFLLEdBQUcsSUFBSTtJQUVoQixLQUFLLElBQUlELENBQUMsR0FBRyxDQUFDLEVBQUV5QyxHQUFHLEdBQUczQyxNQUFNLENBQUM5TCxNQUFNLEVBQUVnTSxDQUFDLEdBQUd5QyxHQUFHLEVBQUV6QyxDQUFDLEVBQUUsRUFBRTtNQUMvQyxJQUFJMEMsQ0FBQyxHQUFHNUMsTUFBTSxDQUFDRSxDQUFDLENBQUM7TUFDakIsSUFBSTFNLEtBQUssR0FBR2IsOENBQUMsQ0FBQytELElBQUksQ0FBQ2tNLENBQUMsQ0FBQyxDQUFDO01BQ3RCLElBQUlwUCxLQUFLLENBQUNFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDUSxNQUFNLEVBQUU7UUFDL0NpTSxLQUFLLEdBQUcwQyxjQUFjLENBQUNyUCxLQUFLLENBQUM7UUFDN0IsSUFBSTJNLEtBQUssSUFBSSxLQUFLLEVBQ2QsT0FBTyxLQUFLO01BQ3BCO0lBQ0o7SUFDQSxPQUFPQSxLQUFLO0VBQ2hCO0VBRUEsU0FBUzBDLGNBQWMsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2pDLElBQUkzQyxLQUFLLEdBQUcsSUFBSTtJQUNoQjJDLFdBQVcsQ0FBQ3BQLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDRSxJQUFJLENBQUMsWUFBVztNQUVqRixJQUFJLENBQUNqQiw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDbkMsSUFBSUosOENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3VDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1VBQ3ZCdkMsOENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29RLEtBQUssRUFBRTtVQUNmNUMsS0FBSyxHQUFHLEtBQUs7UUFDakI7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGMkMsV0FBVyxDQUFDcFAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDRSxJQUFJLENBQUMsWUFBVztNQUV2QyxJQUFJLENBQUNqQiw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FFL0IsQ0FBQyxNQUFNO1FBQ0gsSUFBSUosOENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3VDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1VBQ3ZCdkMsOENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29RLEtBQUssRUFBRTtVQUNmNUMsS0FBSyxHQUFHLEtBQUs7UUFDakI7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUk2QyxHQUFHLEdBQUcsRUFBRTtJQUNaRixXQUFXLENBQUNwUCxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFlBQVc7TUFDNUQsSUFBSW9QLEdBQUcsSUFBSXJRLDhDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMrRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFFN0JzSyxHQUFHLEdBQUdyUSw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0YsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMvRiw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7VUFDM0IsSUFBSUosOENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLEVBQUU7WUFDcEMsSUFBSS9GLDhDQUFDLENBQUMsU0FBUyxHQUFHcVEsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDOU4sR0FBRyxFQUFFLEVBQUUsQ0FBQztVQUNsRDtVQUNBLElBQUl2Qyw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUNqQyxJQUFJL0YsOENBQUMsQ0FBQyxTQUFTLEdBQUdxUSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM5TixHQUFHLEVBQUUsRUFBRSxDQUFDO1VBQ2xEO1FBQ0osQ0FBQyxNQUFNO1VBQ0gsSUFBSXZDLDhDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMrRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO1lBQ3BDLElBQUkvRiw4Q0FBQyxDQUFDLFNBQVMsR0FBR3FRLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQzlOLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO2NBQ2pEaUwsS0FBSyxHQUFHLEtBQUs7WUFDakI7VUFDSjtVQUNBLElBQUl4Tiw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUNqQyxJQUFJL0YsOENBQUMsQ0FBQyxTQUFTLEdBQUdxUSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM5TixHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTTtjQUNqRGlMLEtBQUssR0FBRyxLQUFLO1lBQ2pCO1VBQ0o7UUFDSjtNQUNKO0lBQ0osQ0FBQyxDQUFDO0lBRUYsT0FBT0EsS0FBSztFQUNoQjtFQUVBLFNBQVNHLFNBQVMsQ0FBQzVKLElBQUksRUFBRXdKLENBQUMsRUFBRStDLElBQUksRUFBRTtJQUU5QixJQUFJL0MsQ0FBQyxJQUFJK0MsSUFBSSxDQUFDL08sTUFBTSxFQUFFO01BQ2xCOEYsTUFBTSxDQUFDQyxRQUFRLEdBQUcsV0FBVztNQUM3QjtJQUNKO0lBRUEsSUFBSUQsTUFBTSxDQUFDa0osUUFBUSxLQUFLckMsU0FBUyxFQUFFO01BQy9CO0lBQ0o7SUFDQSxJQUFJK0IsQ0FBQyxHQUFHSyxJQUFJLENBQUMvQyxDQUFDLENBQUM7SUFDZjtJQUNBWSxtRUFBSyxDQUFDQyxHQUFHLENBQUNvQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0Msd0JBQXdCLENBQUMsSUFBSUgsUUFBUSxDQUFDeE0sSUFBSSxDQUFDa00sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUMzQixHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUN2RixJQUFNNUwsWUFBWSxHQUFHMkwsR0FBRyxJQUFJQyxRQUFRLENBQUNoSyxJQUFJLENBQUNoQixLQUFLOztNQUUvQztNQUNBLElBQUlaLFlBQVksRUFBRTtRQUNkO1FBQ0EsSUFBTWdPLEdBQUcsR0FBRy9JLFFBQVEsQ0FBQ2dKLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDekNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHbE8sWUFBWTtRQUM1Qm1PLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSSxXQUFXLElBQUlKLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDO01BQzNDO01BQ0F6RCxDQUFDLEVBQUU7TUFDSCxJQUFJQSxDQUFDLElBQUkrQyxJQUFJLENBQUMvTyxNQUFNLEVBQUU7UUFDbEI7UUFDQSxJQUFJcUwsWUFBWSxFQUFFO1VBQ2RBLFlBQVksQ0FBQ3FFLElBQUksRUFBRTtVQUNuQmpSLDhDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ2tSLElBQUksRUFBRTtVQUN6Q0MsaUJBQWlCLENBQUN2RSxZQUFZLEVBQUUyQixRQUFRLENBQUNoSyxJQUFJLENBQUM2TSxTQUFTLENBQUNsRixFQUFFLENBQUM7UUFDL0QsQ0FBQyxNQUFNO1VBQ0g7VUFDQTdFLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLFdBQVc7UUFDakM7UUFDQTtNQUNKO01BQ0FxRyxTQUFTLENBQUM1SixJQUFJLEVBQUV3SixDQUFDLEVBQUUrQyxJQUFJLENBQUM7TUFDeEI7SUFDSixDQUFDLENBQUM7RUFDTjs7RUFDQSxTQUFTYSxpQkFBaUIsQ0FBQ0UsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRTtJQUN0REMsY0FBYyxDQUFDRixVQUFVLEVBQUUsVUFBQ2hELEdBQUcsRUFBRUMsUUFBUSxFQUFLO01BQzFDLElBQUlELEdBQUcsRUFBRTtRQUNMO01BQ0o7TUFFQStDLEtBQUssQ0FBQ0ksYUFBYSxDQUFDbEQsUUFBUSxDQUFDOztNQUU3QjtNQUNBLElBQU1tRCxLQUFLLEdBQUcxUiw4Q0FBQyxDQUFDLE1BQU0sQ0FBQztNQUN2QixJQUFNMlIsYUFBYSxHQUFHM1IsOENBQUMsQ0FBQyxzQkFBc0IsRUFBRXFSLEtBQUssQ0FBQzdHLFFBQVEsQ0FBQztNQUMvRCxJQUFNb0gsWUFBWSxHQUFHNVIsOENBQUMsQ0FBQyw2QkFBNkIsQ0FBQztNQUNyRCxJQUFNNlIsUUFBUSxHQUFHRixhQUFhLENBQUNwTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztNQUV4RHFOLFlBQVksQ0FBQ25SLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztNQUM3Q2lSLEtBQUssQ0FBQ3BJLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRXVJLFFBQVEsQ0FBQztNQUUvQyxJQUFJTixVQUFVLEVBQUU7UUFDWkEsVUFBVSxDQUFDaEQsUUFBUSxDQUFDO01BQ3hCO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTaUQsY0FBYyxDQUFDRixVQUFVLEVBQUVDLFVBQVUsRUFBRTtJQUM1QyxJQUFNM1EsT0FBTyxHQUFHO01BQ1prTixRQUFRLEVBQUUsY0FBYztNQUN4QmdFLE1BQU0sRUFBRTtRQUNKQyxPQUFPLEVBQUVUO01BQ2IsQ0FBQztNQUNEVSxNQUFNLEVBQUU7UUFDSnhCLElBQUksRUFBRTtVQUNGeUIsV0FBVyxFQUFFO1lBQ1RDLEtBQUssRUFBRTtVQUNYO1FBQ0o7TUFDSjtJQUNKLENBQUM7SUFFRC9ELG1FQUFLLENBQUNDLEdBQUcsQ0FBQ29DLElBQUksQ0FBQzJCLFVBQVUsQ0FBQ3ZSLE9BQU8sRUFBRTJRLFVBQVUsQ0FBQztFQUNsRDtFQUVBLFNBQVNuRSxVQUFVLEdBQUc7SUFDbEIsSUFBSWdGLEtBQUssR0FBRyxDQUFDO0lBQ2IsSUFBSUMsR0FBRyxHQUFHLENBQUM7SUFDWCxJQUFJQyxNQUFNLEdBQUcsR0FBRztJQUNoQnRTLDhDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQ2lCLElBQUksQ0FBQyxVQUFTc00sQ0FBQyxFQUFFaEwsR0FBRyxFQUFFO01BQzVELElBQUl2Qyw4Q0FBQyxDQUFDdUMsR0FBRyxDQUFDLENBQUN4QixJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQ1EsTUFBTSxFQUMxRCxJQUFJZ1IsUUFBUSxHQUFHdlMsOENBQUMsQ0FBQ3VDLEdBQUcsQ0FBQyxDQUFDeEIsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM4TSxJQUFJLEVBQUUsQ0FBQyxLQUUxRSxJQUFJMEUsUUFBUSxHQUFHdlMsOENBQUMsQ0FBQ3VDLEdBQUcsQ0FBQyxDQUFDeEIsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM4TSxJQUFJLEVBQUU7TUFDaEYsSUFBSTJFLEtBQUssR0FBR0MsVUFBVSxDQUFDRixRQUFRLENBQUNyRixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQzFELElBQUl3RixDQUFDLEdBQUdILFFBQVEsQ0FBQ3JGLE9BQU8sQ0FBQ3VGLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ3pGLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDaEcsSUFBSXVCLEtBQUssQ0FBQ2dFLFVBQVUsQ0FBQ0MsQ0FBQyxDQUFDeEYsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzlDb0YsTUFBTSxHQUFHSSxDQUFDO01BQ2QsSUFBSUgsUUFBUSxDQUFDaE4sT0FBTyxDQUFDK00sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzlCRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ2hOLE9BQU8sQ0FBQytNLE1BQU0sQ0FBQztNQUNsQ0YsS0FBSyxHQUFHQSxLQUFLLEdBQUdJLEtBQUs7SUFDekIsQ0FBQyxDQUFDO0lBQ0ZKLEtBQUssR0FBR0ssVUFBVSxDQUFDTCxLQUFLLENBQUMsQ0FBQ08sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDekYsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQztJQUMxRSxJQUFJbUYsR0FBRyxJQUFJLENBQUMsRUFDUkQsS0FBSyxHQUFHRSxNQUFNLEdBQUdGLEtBQUssQ0FBQyxLQUV2QkEsS0FBSyxHQUFHQSxLQUFLLEdBQUdFLE1BQU07SUFDMUJ0Uyw4Q0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNpRyxJQUFJLENBQUNtTSxLQUFLLENBQUM7RUFDN0M7RUFFQSxTQUFTeEMsY0FBYyxHQUFHO0lBQ3RCeEMsVUFBVSxFQUFFO0lBQ1osSUFBTXZNLEtBQUssR0FBR2IsOENBQUMsQ0FBQyxNQUFNLEVBQUVBLDhDQUFDLENBQUM0SCxRQUFRLENBQUMsQ0FBQzs7SUFFcEM7SUFDQTtJQUNJLElBQU1vSCxzQkFBc0IsR0FBR2hQLDhDQUFDLENBQUMsMEJBQTBCLEVBQUVhLEtBQUssQ0FBQztJQUNuRWIsOENBQUMsQ0FBQzRILFFBQVEsQ0FBQyxDQUFDckIsRUFBRSxDQUFDLFFBQVEsRUFBRXlJLHNCQUFzQixFQUFFLFVBQUF4SSxLQUFLLEVBQUk7TUFDdERvTSxxQkFBcUIsQ0FBQ3BNLEtBQUssQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFDTjs7SUFFQXhHLDhDQUFDLENBQUM0SCxRQUFRLENBQUMsQ0FBQ3JCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBVztNQUNqRHZHLDhDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNFLE1BQU0sRUFBRSxDQUFDK00sT0FBTyxFQUFFO0lBQzlCLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBUzJGLHFCQUFxQixDQUFDcE0sS0FBSyxFQUFFO0lBQ2xDLElBQU1xTSxjQUFjLEdBQUc3Uyw4Q0FBQyxDQUFDd0csS0FBSyxDQUFDc00sTUFBTSxDQUFDO0lBQ3RDLElBQU1qUyxLQUFLLEdBQUdnUyxjQUFjLENBQUMxRixPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzVDLElBQU13QixTQUFTLEdBQUczTyw4Q0FBQyxDQUFDLHFCQUFxQixFQUFFYSxLQUFLLENBQUMsQ0FBQzBCLEdBQUcsRUFBRTtJQUN2RDtJQUNBLElBQUlzUSxjQUFjLENBQUM5TSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJc0IsTUFBTSxDQUFDa0osUUFBUSxLQUFLckMsU0FBUyxFQUFFO01BQ3pFO0lBQ0o7SUFDQSxJQUFJMkUsY0FBYyxDQUFDOU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGFBQWEsR0FBRzRJLFNBQVMsRUFBRTtNQUN6RDtJQUNKO0lBRUFSLG1FQUFLLENBQUNDLEdBQUcsQ0FBQ2UsaUJBQWlCLENBQUNDLFlBQVksQ0FBQ1QsU0FBUyxFQUFFOU4sS0FBSyxDQUFDd08sU0FBUyxFQUFFLEVBQUUsOEJBQThCLEVBQUUsVUFBQ2YsR0FBRyxFQUFFQyxRQUFRLEVBQUs7TUFDdEgsSUFBTXdFLHFCQUFxQixHQUFHeEUsUUFBUSxDQUFDaEssSUFBSSxJQUFJLENBQUMsQ0FBQztNQUNqRCxJQUFNeU8sd0JBQXdCLEdBQUd6RSxRQUFRLENBQUNpQixPQUFPLElBQUksQ0FBQyxDQUFDO01BQ3ZEeUQsZ0JBQWdCLENBQUN0RSxTQUFTLEVBQUVvRSxxQkFBcUIsQ0FBQztNQUNsRHRELHVCQUF1QixDQUFDNU8sS0FBSyxFQUFFa1MscUJBQXFCLENBQUM7TUFDckRyRCxVQUFVLENBQUM3TyxLQUFLLEVBQUVrUyxxQkFBcUIsRUFBRUMsd0JBQXdCLENBQUM7TUFDbEU1RixVQUFVLEVBQUU7SUFDaEIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxLQUFLO0VBQ2hCO0VBRUEsU0FBU3FDLHVCQUF1QixDQUFDeUQsTUFBTSxFQUFFM08sSUFBSSxFQUFFO0lBQzNDLElBQU00TyxRQUFRLEdBQUc1TyxJQUFJLENBQUM2TyxxQkFBcUI7SUFDM0MsSUFBTUMsVUFBVSxHQUFHOU8sSUFBSSxDQUFDK08sbUJBQW1CO0lBQzNDLElBQU1DLGlCQUFpQixVQUFRaFAsSUFBSSxDQUFDaVAsb0JBQW9CLE1BQUc7SUFFM0QsSUFBSUwsUUFBUSxLQUFLLGFBQWEsSUFBSUEsUUFBUSxLQUFLLGNBQWMsRUFBRTtNQUMzRDtJQUNKO0lBRUFuVCw4Q0FBQyxDQUFDLGdDQUFnQyxFQUFFa1QsTUFBTSxDQUFDLENBQUNqUyxJQUFJLENBQUMsVUFBQ3NNLENBQUMsRUFBRWtHLFNBQVMsRUFBSztNQUMvRCxJQUFNQyxVQUFVLEdBQUcxVCw4Q0FBQyxDQUFDeVQsU0FBUyxDQUFDO01BQy9CLElBQU1FLE1BQU0sR0FBR0MsUUFBUSxDQUFDRixVQUFVLENBQUNuUCxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxFQUFFLENBQUM7TUFHckUsSUFBSThPLFVBQVUsQ0FBQzlOLE9BQU8sQ0FBQ29PLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ25DRSxlQUFlLENBQUNILFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsQ0FBQztNQUM1RCxDQUFDLE1BQU07UUFDSE8sZ0JBQWdCLENBQUNKLFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsQ0FBQztNQUM3RDtJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBU08sZ0JBQWdCLENBQUNKLFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsRUFBRTtJQUMvRCxJQUFJUSxnQkFBZ0IsQ0FBQ0wsVUFBVSxDQUFDLEtBQUssWUFBWSxFQUFFO01BQy9DLE9BQU9NLDRCQUE0QixDQUFDTixVQUFVLEVBQUVQLFFBQVEsRUFBRUksaUJBQWlCLENBQUM7SUFDaEY7SUFFQSxJQUFJSixRQUFRLEtBQUssYUFBYSxFQUFFO01BQzVCTyxVQUFVLENBQUN4QyxJQUFJLEVBQUU7SUFDckIsQ0FBQyxNQUFNO01BQ0h3QyxVQUFVLENBQUNqVCxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3RDO0VBQ0o7RUFFQSxTQUFTdVQsNEJBQTRCLENBQUNOLFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsRUFBRTtJQUMzRSxJQUFNVSxPQUFPLEdBQUdQLFVBQVUsQ0FBQ3hULE1BQU0sRUFBRTtJQUVuQyxJQUFJaVQsUUFBUSxLQUFLLGFBQWEsRUFBRTtNQUM1Qk8sVUFBVSxDQUFDUSxZQUFZLENBQUMsS0FBSyxDQUFDO01BQzlCO01BQ0EsSUFBSUQsT0FBTyxDQUFDMVIsR0FBRyxFQUFFLEtBQUttUixVQUFVLENBQUMzTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUNrTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLGFBQWEsR0FBRyxDQUFDO01BQ2hDO0lBQ0osQ0FBQyxNQUFNO01BQ0hULFVBQVUsQ0FBQzNOLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO01BQ3ZDMk4sVUFBVSxDQUFDek4sSUFBSSxDQUFDeU4sVUFBVSxDQUFDek4sSUFBSSxFQUFFLENBQUNpSCxPQUFPLENBQUNxRyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsR0FBR0EsaUJBQWlCLENBQUM7SUFDekY7RUFDSjtFQUVBLFNBQVNNLGVBQWUsQ0FBQ0gsVUFBVSxFQUFFUCxRQUFRLEVBQUVJLGlCQUFpQixFQUFFO0lBQzlELElBQUlRLGdCQUFnQixDQUFDTCxVQUFVLENBQUMsS0FBSyxZQUFZLEVBQUU7TUFDL0MsT0FBT1UsMkJBQTJCLENBQUNWLFVBQVUsRUFBRVAsUUFBUSxFQUFFSSxpQkFBaUIsQ0FBQztJQUMvRTtJQUVBLElBQUlKLFFBQVEsS0FBSyxhQUFhLEVBQUU7TUFDNUJPLFVBQVUsQ0FBQ2hHLElBQUksRUFBRTtJQUNyQixDQUFDLE1BQU07TUFDSGdHLFVBQVUsQ0FBQzVPLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDekM7RUFDSjtFQUVBLFNBQVNzUCwyQkFBMkIsQ0FBQ1YsVUFBVSxFQUFFUCxRQUFRLEVBQUVJLGlCQUFpQixFQUFFO0lBQzFFLElBQUlKLFFBQVEsS0FBSyxhQUFhLEVBQUU7TUFDNUJPLFVBQVUsQ0FBQ1EsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDLE1BQU07TUFDSFIsVUFBVSxDQUFDdFQsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFDbENzVCxVQUFVLENBQUN6TixJQUFJLENBQUN5TixVQUFVLENBQUN6TixJQUFJLEVBQUUsQ0FBQ2lILE9BQU8sQ0FBQ3FHLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFO0VBQ0o7RUFFQSxTQUFTUSxnQkFBZ0IsQ0FBQ0wsVUFBVSxFQUFFO0lBQ2xDLElBQU1XLE9BQU8sR0FBR1gsVUFBVSxDQUFDWSxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFFOUQsT0FBT0QsT0FBTyxHQUFHQSxPQUFPLENBQUM5UCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJO0VBQzVEO0VBRUEsU0FBUzBPLGdCQUFnQixDQUFDdEUsU0FBUyxFQUFFcEssSUFBSSxFQUFFO0lBQ3ZDLElBQUksNERBQWdCQSxJQUFJLENBQUNnUSxLQUFLLENBQUMsRUFBRTtNQUU3QixJQUFNQyxZQUFZLEdBQUdyRyxtRUFBSyxDQUFDc0csS0FBSyxDQUFDRixLQUFLLENBQUNHLE1BQU0sQ0FDekNuUSxJQUFJLENBQUNnUSxLQUFLLENBQUNoUSxJQUFJLEVBQ2Y0QyxPQUFPLENBQUN3TixhQUFhLENBQUNDLFlBQVksQ0FDckM7TUFFRDVVLDhDQUFDLENBQUMsOENBQThDLEdBQUcyTyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM1TixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUNnRixJQUFJLENBQUM7UUFDbEYsS0FBSyxFQUFFeU8sWUFBWTtRQUNuQixVQUFVLEVBQUV4VSw4Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0YsSUFBSSxDQUFDLEtBQUs7TUFDbEMsQ0FBQyxDQUFDO0lBRU4sQ0FBQyxNQUFNO01BQ0gsSUFBTXlPLGFBQVksR0FBR3hVLDhDQUFDLENBQUMsOENBQThDLEdBQUcyTyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM1TixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUNnRixJQUFJLENBQUMsVUFBVSxDQUFDO01BQ3RIL0YsOENBQUMsQ0FBQyw4Q0FBOEMsR0FBRzJPLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQzVOLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQ2dGLElBQUksQ0FBQztRQUNsRixLQUFLLEVBQUV5TyxhQUFZO1FBQ25CLFVBQVUsRUFBRXhVLDhDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMrRixJQUFJLENBQUMsS0FBSztNQUNsQyxDQUFDLENBQUM7SUFDTjtFQUNKO0VBRUEsU0FBUzJKLFVBQVUsQ0FBQ3dELE1BQU0sRUFBRTNPLElBQUksRUFBRWlMLE9BQU8sRUFBUztJQUFBLElBQWhCQSxPQUFPO01BQVBBLE9BQU8sR0FBRyxJQUFJO0lBQUE7SUFDNUMsSUFBTXFGLFNBQVMsR0FBR0MsWUFBWSxDQUFDNUIsTUFBTSxDQUFDO0lBRXRDLElBQUksdURBQVczTyxJQUFJLENBQUNpTyxLQUFLLENBQUMsRUFBRTtNQUN4QnVDLGVBQWUsQ0FBQ0YsU0FBUyxFQUFFdFEsSUFBSSxDQUFDaU8sS0FBSyxDQUFDO0lBQzFDO0lBQ0EsSUFBSTdELFNBQVMsR0FBRzNPLDhDQUFDLENBQUMscUJBQXFCLEVBQUVrVCxNQUFNLENBQUMsQ0FBQzNRLEdBQUcsRUFBRTtJQUV0RCxJQUFJLENBQUNnQyxJQUFJLENBQUN5USxXQUFXLElBQUksQ0FBQ3pRLElBQUksQ0FBQzBRLE9BQU8sRUFBRTtNQUNwQ2pWLDhDQUFDLENBQUMsOENBQThDLEdBQUcyTyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM3SixXQUFXLENBQUMsV0FBVyxDQUFDO01BQzdGOUUsOENBQUMsQ0FBQyxjQUFjLEdBQUcyTyxTQUFTLENBQUMsQ0FBQ3ZPLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUNBLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzNFSiw4Q0FBQyxDQUFDLDhDQUE4QyxHQUFHMk8sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDN0osV0FBVyxDQUFDLHNCQUFzQixDQUFDO0lBQzVHLENBQUMsTUFBTTtNQUNIOUUsOENBQUMsQ0FBQyw4Q0FBOEMsR0FBRzJPLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQ2xPLFFBQVEsQ0FBQyxXQUFXLENBQUM7TUFDMUZULDhDQUFDLENBQUMsY0FBYyxHQUFHMk8sU0FBUyxDQUFDLENBQUN2TyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUUzRSxJQUFJOFMsTUFBTSxDQUFDblMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUNRLE1BQU0sRUFBRTtRQUNoRCxJQUFJaU0sS0FBSyxHQUFHMEMsY0FBYyxDQUFDZ0QsTUFBTSxDQUFDO1FBQ2xDLElBQUkxRixLQUFLLElBQUksSUFBSSxFQUFFO1VBQ2Z4Tiw4Q0FBQyxDQUFDLDhDQUE4QyxHQUFHMk8sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDbE8sUUFBUSxDQUFDLHNCQUFzQixDQUFDO1VBQ3JHVCw4Q0FBQyxDQUFDLDBCQUEwQixFQUFFa1QsTUFBTSxDQUFDLENBQUNqRyxPQUFPLEVBQUU7UUFDbkQ7TUFDSjtJQUNKO0VBQ0o7RUFFQSxTQUFTMEMsNkJBQTZCLENBQUN1RCxNQUFNLEVBQUUzTyxJQUFJLEVBQUU7SUFDakQsSUFBSW9LLFNBQVMsR0FBRzNPLDhDQUFDLENBQUMscUJBQXFCLEVBQUVrVCxNQUFNLENBQUMsQ0FBQzNRLEdBQUcsRUFBRTtJQUV0RCxJQUFJLENBQUNnQyxJQUFJLENBQUN5USxXQUFXLElBQUksQ0FBQ3pRLElBQUksQ0FBQzBRLE9BQU8sRUFBRTtNQUNwQ2pWLDhDQUFDLENBQUMsOENBQThDLEdBQUcyTyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM3SixXQUFXLENBQUMsV0FBVyxDQUFDO01BQzdGOUUsOENBQUMsQ0FBQyxjQUFjLEdBQUcyTyxTQUFTLENBQUMsQ0FBQ3ZPLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUNBLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzNFSiw4Q0FBQyxDQUFDLDhDQUE4QyxHQUFHMk8sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDN0osV0FBVyxDQUFDLHNCQUFzQixDQUFDO0lBQzVHLENBQUMsTUFBTTtNQUNIOUUsOENBQUMsQ0FBQyw4Q0FBOEMsR0FBRzJPLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQ2xPLFFBQVEsQ0FBQyxXQUFXLENBQUM7TUFDMUZULDhDQUFDLENBQUMsY0FBYyxHQUFHMk8sU0FBUyxDQUFDLENBQUN2TyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUUzRSxJQUFJOFMsTUFBTSxDQUFDblMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUNRLE1BQU0sRUFBRTtRQUNoRCxJQUFJaU0sS0FBSyxHQUFHMEMsY0FBYyxDQUFDZ0QsTUFBTSxDQUFDO1FBQ2xDLElBQUkxRixLQUFLLElBQUksSUFBSSxFQUFFO1VBQ2Z4Tiw4Q0FBQyxDQUFDLDhDQUE4QyxHQUFHMk8sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDbE8sUUFBUSxDQUFDLHNCQUFzQixDQUFDO1VBQ3JHVCw4Q0FBQyxDQUFDLDBCQUEwQixFQUFFa1QsTUFBTSxDQUFDLENBQUNqRyxPQUFPLEVBQUU7UUFDbkQ7TUFDSjtJQUNKO0VBQ0o7RUFFQSxTQUFTNkgsWUFBWSxDQUFDNUIsTUFBTSxFQUFFO0lBQzFCLE9BQU87TUFDSGdDLGFBQWEsRUFBRWxWLDhDQUFDLENBQUMsK0JBQStCLEVBQUVrVCxNQUFNLENBQUM7TUFDekRpQyxnQkFBZ0IsRUFBRW5WLDhDQUFDLENBQUMsa0NBQWtDLEVBQUVrVCxNQUFNLENBQUM7TUFDL0RrQyxVQUFVLEVBQUU7UUFDUkMsSUFBSSxFQUFFclYsOENBQUMsQ0FBQyxxQkFBcUIsRUFBRWtULE1BQU0sQ0FBQztRQUN0Q29DLEtBQUssRUFBRXRWLDhDQUFDLENBQUMsNkJBQTZCLEVBQUVrVCxNQUFNO01BQ2xELENBQUM7TUFDRHFDLGFBQWEsRUFBRTtRQUNYRixJQUFJLEVBQUVyViw4Q0FBQyxDQUFDLHdCQUF3QixFQUFFa1QsTUFBTSxDQUFDO1FBQ3pDb0MsS0FBSyxFQUFFdFYsOENBQUMsQ0FBQyxzQ0FBc0MsRUFBRWtULE1BQU07TUFDM0QsQ0FBQztNQUNEc0MsY0FBYyxFQUFFO1FBQ1pILElBQUksRUFBRXJWLDhDQUFDLENBQUMsMEJBQTBCLEVBQUVrVCxNQUFNLENBQUM7UUFDM0NvQyxLQUFLLEVBQUV0Viw4Q0FBQyxDQUFDLHdDQUF3QyxFQUFFa1QsTUFBTTtNQUM3RCxDQUFDO01BQ0R1QyxpQkFBaUIsRUFBRTtRQUNmSixJQUFJLEVBQUVyViw4Q0FBQyxDQUFDLDZCQUE2QixFQUFFa1QsTUFBTSxDQUFDO1FBQzlDb0MsS0FBSyxFQUFFdFYsOENBQUMsQ0FBQywyQ0FBMkMsRUFBRWtULE1BQU07TUFDaEUsQ0FBQztNQUNEd0MsVUFBVSxFQUFFO1FBQ1JMLElBQUksRUFBRXJWLDhDQUFDLENBQUMsd0JBQXdCLEVBQUVrVCxNQUFNLENBQUM7UUFDekNvQyxLQUFLLEVBQUV0Viw4Q0FBQyxDQUFDLDRCQUE0QixFQUFFa1QsTUFBTTtNQUNqRCxDQUFDO01BQ0R5QyxhQUFhLEVBQUU7UUFDWEwsS0FBSyxFQUFFdFYsOENBQUMsQ0FBQyxrQkFBa0IsRUFBRWtULE1BQU07TUFDdkMsQ0FBQztNQUNEMEMsVUFBVSxFQUFFO1FBQ1JOLEtBQUssRUFBRXRWLDhDQUFDLENBQUMsY0FBYyxFQUFFa1QsTUFBTTtNQUNuQyxDQUFDO01BQ0QyQyxPQUFPLEVBQUU3Viw4Q0FBQyxDQUFDLHlDQUF5QyxFQUFFa1QsTUFBTSxDQUFDO01BQzdENEMsV0FBVyxFQUFFOVYsOENBQUMsQ0FBQyxnQ0FBZ0MsRUFBRWtULE1BQU0sQ0FBQztNQUN4RDZDLFVBQVUsRUFBRS9WLDhDQUFDLENBQUMsd0JBQXdCLEVBQUVrVCxNQUFNLENBQUM7TUFDL0M4QyxrQkFBa0IsRUFBRWhXLDhDQUFDLENBQUMsMkNBQTJDLEVBQUVrVCxNQUFNLENBQUM7TUFDMUUrQyxLQUFLLEVBQUU7UUFDSEMsVUFBVSxFQUFFbFcsOENBQUMsQ0FBQyxvQkFBb0IsRUFBRWtULE1BQU0sQ0FBQztRQUMzQ25ULE1BQU0sRUFBRUMsOENBQUMsQ0FBQyxzQkFBc0IsRUFBRWtULE1BQU07TUFDNUMsQ0FBQztNQUNEaUQsSUFBSSxFQUFFblcsOENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztNQUM3Qm9XLElBQUksRUFBRXBXLDhDQUFDLENBQUMsb0JBQW9CLENBQUM7TUFDN0I2UixRQUFRLEVBQUU7UUFDTndFLEtBQUssRUFBRXJXLDhDQUFDLENBQUMsaUJBQWlCLEVBQUVrVCxNQUFNLENBQUM7UUFDbkNuVCxNQUFNLEVBQUVDLDhDQUFDLENBQUMsa0JBQWtCLEVBQUVrVCxNQUFNO01BQ3hDLENBQUM7TUFDRG9ELFlBQVksRUFBRXRXLDhDQUFDLENBQUMsK0JBQStCLEVBQUVrVCxNQUFNO0lBQzNELENBQUM7RUFDTDtFQUVBLFNBQVNxRCxvQkFBb0IsQ0FBQzFCLFNBQVMsRUFBRTtJQUNyQ0EsU0FBUyxDQUFDTyxVQUFVLENBQUNDLElBQUksQ0FBQ25FLElBQUksRUFBRTtJQUNoQzJELFNBQVMsQ0FBQ1UsYUFBYSxDQUFDRixJQUFJLENBQUNuRSxJQUFJLEVBQUU7SUFDbkMyRCxTQUFTLENBQUNXLGNBQWMsQ0FBQ0gsSUFBSSxDQUFDbkUsSUFBSSxFQUFFO0lBQ3BDMkQsU0FBUyxDQUFDWSxpQkFBaUIsQ0FBQ0osSUFBSSxDQUFDbkUsSUFBSSxFQUFFO0lBQ3ZDMkQsU0FBUyxDQUFDYSxVQUFVLENBQUNMLElBQUksQ0FBQ25FLElBQUksRUFBRTtJQUNoQzJELFNBQVMsQ0FBQ2MsYUFBYSxDQUFDTCxLQUFLLENBQUNwRSxJQUFJLEVBQUU7SUFDcEMyRCxTQUFTLENBQUNlLFVBQVUsQ0FBQ04sS0FBSyxDQUFDcEUsSUFBSSxFQUFFO0VBQ3JDO0VBQ0E7QUFDSjtBQUNBO0FBQ0E7RUFDSSxTQUFTNkQsZUFBZSxDQUFDRixTQUFTLEVBQUVyQyxLQUFLLEVBQUU7SUFDdkMrRCxvQkFBb0IsQ0FBQzFCLFNBQVMsQ0FBQztJQUUvQixJQUFJckMsS0FBSyxDQUFDZ0UsUUFBUSxFQUFFO01BQ2hCM0IsU0FBUyxDQUFDZSxVQUFVLENBQUNOLEtBQUssQ0FBQzVILElBQUksRUFBRTtNQUNqQ21ILFNBQVMsQ0FBQ0ssYUFBYSxDQUFDalAsSUFBSSxDQUFDdU0sS0FBSyxDQUFDZ0UsUUFBUSxDQUFDQyxTQUFTLENBQUM7SUFDMUQ7SUFFQSxJQUFJakUsS0FBSyxDQUFDa0UsV0FBVyxFQUFFO01BQ25CN0IsU0FBUyxDQUFDZSxVQUFVLENBQUNOLEtBQUssQ0FBQzVILElBQUksRUFBRTtNQUNqQ21ILFNBQVMsQ0FBQ00sZ0JBQWdCLENBQUNsUCxJQUFJLENBQUN1TSxLQUFLLENBQUNrRSxXQUFXLENBQUNELFNBQVMsQ0FBQztJQUNoRTtJQUVBLElBQUlqRSxLQUFLLENBQUNtRSxZQUFZLEVBQUU7TUFDcEI5QixTQUFTLENBQUNPLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDM0gsSUFBSSxFQUFFO01BQ2hDbUgsU0FBUyxDQUFDTyxVQUFVLENBQUNFLEtBQUssQ0FBQ3JQLElBQUksQ0FBQ3VNLEtBQUssQ0FBQ21FLFlBQVksQ0FBQ0YsU0FBUyxDQUFDO0lBQ2pFO0lBRUEsSUFBSWpFLEtBQUssQ0FBQ29FLGVBQWUsRUFBRTtNQUN2Qi9CLFNBQVMsQ0FBQ1UsYUFBYSxDQUFDRixJQUFJLENBQUMzSCxJQUFJLEVBQUU7TUFDbkNtSCxTQUFTLENBQUNVLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDclAsSUFBSSxDQUFDdU0sS0FBSyxDQUFDb0UsZUFBZSxDQUFDSCxTQUFTLENBQUM7SUFDdkU7SUFFQSxJQUFJakUsS0FBSyxDQUFDcUUsS0FBSyxFQUFFO01BQ2JoQyxTQUFTLENBQUNhLFVBQVUsQ0FBQ0wsSUFBSSxDQUFDM0gsSUFBSSxFQUFFO01BQ2hDbUgsU0FBUyxDQUFDYSxVQUFVLENBQUNKLEtBQUssQ0FBQ3JQLElBQUksQ0FBQ3VNLEtBQUssQ0FBQ3FFLEtBQUssQ0FBQ0osU0FBUyxDQUFDO0lBQzFEO0lBRUEsSUFBSWpFLEtBQUssQ0FBQ3NFLHVCQUF1QixFQUFFO01BQy9CakMsU0FBUyxDQUFDZSxVQUFVLENBQUNOLEtBQUssQ0FBQ3BFLElBQUksRUFBRTtNQUNqQzJELFNBQVMsQ0FBQ1csY0FBYyxDQUFDSCxJQUFJLENBQUMzSCxJQUFJLEVBQUU7TUFDcENtSCxTQUFTLENBQUNjLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDNUgsSUFBSSxFQUFFO01BQ3BDbUgsU0FBUyxDQUFDVyxjQUFjLENBQUNGLEtBQUssQ0FBQ3JQLElBQUksQ0FBQ3VNLEtBQUssQ0FBQ3NFLHVCQUF1QixDQUFDTCxTQUFTLENBQUM7SUFDaEY7SUFFQSxJQUFJakUsS0FBSyxDQUFDdUUsMEJBQTBCLEVBQUU7TUFDbENsQyxTQUFTLENBQUNlLFVBQVUsQ0FBQ04sS0FBSyxDQUFDcEUsSUFBSSxFQUFFO01BQ2pDMkQsU0FBUyxDQUFDWSxpQkFBaUIsQ0FBQ0osSUFBSSxDQUFDM0gsSUFBSSxFQUFFO01BQ3ZDbUgsU0FBUyxDQUFDYyxhQUFhLENBQUNMLEtBQUssQ0FBQzVILElBQUksRUFBRTtNQUNwQ21ILFNBQVMsQ0FBQ1ksaUJBQWlCLENBQUNILEtBQUssQ0FBQ3JQLElBQUksQ0FBQ3VNLEtBQUssQ0FBQ3VFLDBCQUEwQixDQUFDTixTQUFTLENBQUM7SUFDdEY7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFTL0Ysd0JBQXdCLENBQUNzRyxRQUFRLEVBQUU7SUFDeEMsSUFBSTtNQUNBLHFEQUF5QkEsUUFBUSx3Q0FBRTtRQUFBO1VBQXZCQyxHQUFHO1VBQUUxVSxHQUFHO1FBQ2hCLElBQUlBLEdBQUcsWUFBWTJVLElBQUksSUFBSSxDQUFDM1UsR0FBRyxDQUFDWCxJQUFJLElBQUksQ0FBQ1csR0FBRyxDQUFDNFUsSUFBSSxFQUFFO1VBQy9DSCxRQUFRLENBQUNJLE1BQU0sQ0FBQ0gsR0FBRyxDQUFDO1FBQ3hCO01BQ0o7SUFDSixDQUFDLENBQUMsT0FBT3ZNLENBQUMsRUFBRTtNQUNSMk0sT0FBTyxDQUFDOVQsS0FBSyxDQUFDbUgsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0Qjs7SUFDQSxPQUFPc00sUUFBUTtFQUNuQjtBQUVKLEM7Ozs7Ozs7Ozs7OztBQzV0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ3dCO0FBQ2hCO0FBR2hCLDJFQUFVO0VBQ3JCLElBQUlNLE1BQU0sR0FBR3RYLDZDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2dMLE1BQU0sRUFBRTtFQUVqRGhMLDZDQUFDLENBQUNxSCxNQUFNLENBQUMsQ0FBQ2lRLE1BQU0sQ0FBQyxZQUFVO0lBQ3ZCLElBQUd0WCw2Q0FBQyxDQUFDcUgsTUFBTSxDQUFDLENBQUMwRCxTQUFTLEVBQUUsR0FBR3VNLE1BQU0sQ0FBQ3JNLEdBQUcsR0FBRyxHQUFHLEVBQUM7TUFDeEMsSUFBRyxDQUFDakwsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDNkUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFDO1FBQy9DN0UsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUlULDZDQUFDLENBQUNxSCxNQUFNLENBQUMsQ0FBQ3dELEtBQUssRUFBRSxHQUFHLElBQUksRUFBRTtVQUMxQjdLLDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3VYLEdBQUcsQ0FBQyxRQUFRLEVBQUV2WCw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN3WCxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7VUFDbkZ4WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN1WCxHQUFHLENBQUMsUUFBUSxFQUFFdlgsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd1gsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3hGLENBQUMsTUFBTSxJQUFJeFgsNkNBQUMsQ0FBQ3FILE1BQU0sQ0FBQyxDQUFDd0QsS0FBSyxFQUFFLEdBQUcsR0FBRyxFQUFFO1VBQ2hDN0ssNkNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDdVgsR0FBRyxDQUFDLFFBQVEsRUFBRXZYLDZDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxHQUFHeFgsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd1gsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1VBQy9IeFgsNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDdVgsR0FBRyxDQUFDLFFBQVEsRUFBRXZYLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBRTtRQUN6RixDQUFDLE1BQU07VUFDSHhYLDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3VYLEdBQUcsQ0FBQyxRQUFRLEVBQUV2WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN3WCxXQUFXLEVBQUUsR0FBR3hYLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxDQUFDO1VBQzFIeFgsNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDdVgsR0FBRyxDQUFDLFFBQVEsRUFBRXZYLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxDQUFDO1FBQ25GO01BQ0o7SUFDSixDQUFDLE1BQUs7TUFDRnhYLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzhFLFdBQVcsQ0FBQyxhQUFhLENBQUM7TUFDakQ5RSw2Q0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM4RSxXQUFXLENBQUMsU0FBUyxDQUFDO01BQzFDOUUsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOEUsV0FBVyxDQUFDLFdBQVcsQ0FBQztNQUNqRCxJQUFJOUUsNkNBQUMsQ0FBQ3FILE1BQU0sQ0FBQyxDQUFDd0QsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFO1FBQzFCN0ssNkNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDdVgsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDNUN2WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN1WCxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztNQUNqRCxDQUFDLE1BQU0sSUFBSXZYLDZDQUFDLENBQUNxSCxNQUFNLENBQUMsQ0FBQ3dELEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtRQUNoQzdLLDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3VYLEdBQUcsQ0FBQyxRQUFRLEVBQUV2WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN3WCxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDeEZ4WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN1WCxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztNQUNqRCxDQUFDLE1BQU07UUFDSHZYLDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3VYLEdBQUcsQ0FBQyxRQUFRLEVBQUV2WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN3WCxXQUFXLEVBQUUsQ0FBQztRQUNuRnhYLDZDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ3VYLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO01BQ2hEO0lBQ0o7RUFDSixDQUFDLENBQUM7RUFFRnZYLDZDQUFDLENBQUM0SCxRQUFRLENBQUMsQ0FBQ3JCLEVBQUUsQ0FBQyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsVUFBU0MsS0FBSyxFQUFDO0lBQ3pEeEcsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lYLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDaEN6WCw2Q0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUN5WCxXQUFXLENBQUMsU0FBUyxDQUFDO0VBQzlDLENBQUMsQ0FBQztFQUVGelgsNkNBQUMsQ0FBQzRILFFBQVEsQ0FBQyxDQUFDckIsRUFBRSxDQUFDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxVQUFTQyxLQUFLLEVBQUM7SUFDM0R4Ryw2Q0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM4RSxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQzFDOUUsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOEUsV0FBVyxDQUFDLFdBQVcsQ0FBQztFQUNyRCxDQUFDLENBQUM7RUFFRnVDLE1BQU0sQ0FBQ3FRLE1BQU0sR0FBRyxZQUFVO0lBQ3RCLElBQUcxWCw2Q0FBQyxDQUFDcUgsTUFBTSxDQUFDLENBQUMwRCxTQUFTLEVBQUUsR0FBR3VNLE1BQU0sQ0FBQ3JNLEdBQUcsR0FBRyxHQUFHLEVBQUM7TUFDeEMsSUFBRyxDQUFDakwsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDNkUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFDO1FBQy9DN0UsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUlULDZDQUFDLENBQUNxSCxNQUFNLENBQUMsQ0FBQ3dELEtBQUssRUFBRSxHQUFHLElBQUksRUFBRTtVQUMxQjdLLDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3VYLEdBQUcsQ0FBQyxRQUFRLEVBQUV2WCw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN3WCxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7VUFDbkZ4WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN1WCxHQUFHLENBQUMsUUFBUSxFQUFFdlgsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd1gsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3hGLENBQUMsTUFBTSxJQUFJeFgsNkNBQUMsQ0FBQ3FILE1BQU0sQ0FBQyxDQUFDd0QsS0FBSyxFQUFFLEdBQUcsR0FBRyxFQUFFO1VBQ2hDN0ssNkNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDdVgsR0FBRyxDQUFDLFFBQVEsRUFBRXZYLDZDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxHQUFHeFgsNkNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDd1gsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1VBQy9IeFgsNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDdVgsR0FBRyxDQUFDLFFBQVEsRUFBRXZYLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBRTtRQUN6RixDQUFDLE1BQU07VUFDSHhYLDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3VYLEdBQUcsQ0FBQyxRQUFRLEVBQUV2WCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN3WCxXQUFXLEVBQUUsR0FBR3hYLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxDQUFDO1VBQzFIeFgsNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDdVgsR0FBRyxDQUFDLFFBQVEsRUFBRXZYLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dYLFdBQVcsRUFBRSxDQUFDO1FBQ25GO01BQ0o7SUFDSjtFQUNKLENBQUM7QUFDTCxDOzs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay42LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XHJcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XHJcblxyXG5jb25zdCBpbnB1dFRhZ05hbWVzID0gW1xyXG4gICAgJ2lucHV0JyxcclxuICAgICdzZWxlY3QnLFxyXG4gICAgJ3RleHRhcmVhJyxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcclxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRmllbGRDbGFzc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcykge1xyXG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XHJcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XHJcbiAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xyXG4gICAgbGV0IHNwZWNpZmljQ2xhc3NOYW1lO1xyXG5cclxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xyXG5cclxuICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3N1Ym1pdCddLCBpbnB1dFR5cGUpKSB7XHJcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxyXG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IGNsYXNzIG1vZGlmaWVyXHJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxyXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXHJcbiAgICAgICAgLmFkZENsYXNzKHNwZWNpZmljQ2xhc3NOYW1lKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBCZWZvcmVcclxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XHJcbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gKiAgICAgPC9kaXY+XHJcbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG4gKiAgICAgICAgIDxzZWxlY3Q+Li4uPC9zZWxlY3Q+XHJcbiAqICAgICA8L2Rpdj5cclxuICogPC9mb3JtPlxyXG4gKlxyXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xyXG4gKlxyXG4gKiAvLyBBZnRlclxyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cclxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xyXG4gKiBAcmV0dXJuIHtqUXVlcnl9IEVsZW1lbnQgaXRzZWxmXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcclxuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XHJcblxyXG4gICAgLy8gT2J0YWluIG9wdGlvbnNcclxuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgLy8gQ2xhc3NpZnkgZWFjaCBpbnB1dCBpbiBhIGZvcm1cclxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICRmb3JtO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGlkIGZyb20gZ2l2ZW4gZmllbGRcclxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XHJcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xyXG5cclxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICogSW5zZXJ0IGhpZGRlbiBmaWVsZCBhZnRlciBTdGF0ZS9Qcm92aW5jZSBmaWVsZFxyXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkc3RhdGVGaWVsZCkge1xyXG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xyXG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xyXG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxyXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcclxuICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcclxufVxyXG5cclxuY29uc3QgVmFsaWRhdG9ycyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXHJcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcclxuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXHJcbiAgICAgKi9cclxuICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgcGFzc3dvcmRTZWxlY3RvciwgcGFzc3dvcmQyU2VsZWN0b3IsIHJlcXVpcmVtZW50cywgaXNPcHRpb25hbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiByZXF1aXJlbWVudHMuZXJyb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwgPT09ICRwYXNzd29yZC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xyXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5lcnJvclNlbGVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1heFByaWNlU2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxyXG4gICAgICovXHJcbiAgICBzZXRNaW5NYXhQcmljZVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHNlbGVjdG9ycykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcclxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcclxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxyXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XHJcblxyXG4gICAgICAgIHZhbGlkYXRvci5jb25maWd1cmUoe1xyXG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ18nLCAvLyBLTFVER0U6IERvbid0IGFwcGx5IHN1Y2Nlc3MgY2xhc3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcclxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcclxuICAgICAgICBjb25zdCAkZmllbGRDbGFzc0VsZW1lbnQgPSAkKChgW2RhdGEtdHlwZT1cIiR7ZmllbGQuZGF0YSgnZmllbGRUeXBlJyl9XCJdYCkpO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCRmaWVsZENsYXNzRWxlbWVudC5oYXNDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pKSB7XHJcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcclxuIiwiY29uc3QgZm9ybXMgPSB7XHJcbiAgICBlbWFpbCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcclxuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHBhc3N3b3JkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbm90RW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuXHJcbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XHJcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcclxuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xyXG4gICAgbGV0IHByb2R1Y3RzO1xyXG5cclxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHByb2R1Y3RzID0gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIi8qXHJcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcclxuICovXHJcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XHJcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xyXG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcclxuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfQ291bnRkb3duJztcclxuaW1wb3J0IHN0aWNreUFkZFRvQ2FydCBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfc3RpY2t5QWRkVG9DYXJ0JztcclxuaW1wb3J0IEZCVCBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfZmJ0JztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIC8vIGNvdW50ZG93biB0aW1lXHJcbiAgICAgICAgdmFyIHByb2R1Y3RfaWQgPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXSBbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKTtcclxuICAgICAgICBDb3VudGRvd24ocHJvZHVjdF9pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuXHJcbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoJHJldmlld0Zvcm0pO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcclxuICAgICAgICBzdGlja3lBZGRUb0NhcnQoKTtcclxuICAgICAgICBGQlQodGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKCQoJy5kZXNjcmlwdGlvbi1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNsaWRlcigpO1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kZXNjcmlwdGlvbi1zbGlkZXInKS5zbGljaygnc2V0UG9zaXRpb24nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnLmRlc2NyaXB0aW9uLXNsaWRlci0yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25TbGlkZXIyKCk7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRlc2NyaXB0aW9uLXNsaWRlci0yJykuc2xpY2soJ3NldFBvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcclxuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaXB0aW9uU2xpZGVyKCkge1xyXG4gICAgICAgICQoJy5kZXNjcmlwdGlvbi1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmlwdGlvblNsaWRlcjIoKSB7XHJcbiAgICAgICAgJCgnLmRlc2NyaXB0aW9uLXNsaWRlci0yJykuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcclxuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xyXG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xyXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlMiA9ICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XHJcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xyXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cclxuICAgICAqL1xyXG4gICAgaW5pdExpbmtCaW5kKCkge1xyXG4gICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuICAgICAgIGNvbnN0ICRjb250ZW50MiA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcclxuICAgICAgICAkKCcucmV2aWV3LWxpbmsgYScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnLmlzLW9wZW5bZGF0YS1jb2xsYXBzaWJsZV0nLCAkKCcudGFicy12ZXJ0aWNhbCcpKS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCQoJy50aGVtZXZhbGVfcHJvZHVjdERlc2NyaXB0aW9uLTMnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5pcy1vcGVuW2RhdGEtY29sbGFwc2libGVdJywgJCgnLnRoZW1ldmFsZV9wcm9kdWN0RGVzY3JpcHRpb24tMycpKS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcclxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnI3RhYi1yZXZpZXcnKS5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNzAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuJHJldmlld3NDb250ZW50Lm9mZnNldCgpLnRvcCAtICQoJy5oZWFkZXInKS5oZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy4kcmV2aWV3c0NvbnRlbnQub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgfSwgNzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCEkY29udGVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoJCgnLnRoZW1ldmFsZV9wcm9kdWN0RGVzY3JpcHRpb24tMycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkY29udGVudDIuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XHJcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcclxuICAgICAgICAvLyB0aGlzLiRjb2xsYXBzaWJsZTIudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXHJcbiAgICAgKi9cclxuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xyXG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cImVtYWlsXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xyXG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXHJcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW5WaWRlbygpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xyXG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcclxuXHJcbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcclxuXHJcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlbGF0ZV90YWIgPSBcIiNwcm9kdWN0LXJlbGF0ZWRcIjtcclxuICAgIGNvbnN0IHByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xyXG5cclxuICAgIC8vIGNoZWNrIGN1c3RvbSBmaWVsZCBmYnRcclxuICAgIHNob3dGQlQoKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnRoZW12YWxlLWZidC10b2dnbGUtb3B0aW9ucycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLm5leHQoKS5pcygnOnZpc2libGUnKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudGhlbXZhbGUtZmJ0LWRldGFpbC1jaGVja2JveCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCdmYnRfcHJvZHVjdCcsICcnKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKS5maW5kKCcudGhlbXZhbGUtZmJ0LWRldGFpbC1vcHRpb25zJykuc2xpZGVVcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjdGhlbXZhbGUtZmJ0LWFkZEFsbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJCgnI3RoZW12YWxlLWZidCcpKTtcclxuICAgICAgICB2YXIgYXJyUHJvID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgJCgnLnRoZW12YWxlLWZidC1kZXRhaWwtY2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoJCh2YWwpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJQcm8ucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNoZWNrID0gY2hlY2tQcm9kdWN0KCRmb3JtLCBhcnJQcm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI3RoZW12YWxlLWZidCAubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoJGZvcm0sIDAsIGFyclBybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdQbGVhc2UgbWFrZSBzdXJlIGFsbCBvcHRpb25zIGhhdmUgYmVlbiBmaWxsZWQgaW4uJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0ZCVCgpIHtcclxuICAgICAgICAvLyByZWxhdGVkIHByb2R1Y3RcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtOiAndGhlbWV2YWxlL2ZidC1pdGVtJyxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiAndGhlbWV2YWxlL2ZidC1vcHRpb25zJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctaW5mby1uYW1lLmZidCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAkKHJlbGF0ZV90YWIgKyAnIC5jYXJkJykuZWFjaChmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCgge2k6aSwgZGF0YTogXCJcIn0gKTtcclxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHZhbCkuZGF0YSgncHJvZHVjdC1pZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBJZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHBJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSAkKHJlbGF0ZV90YWIgKyAnIC5jYXJkJykubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQoJy5wcm9kdWN0Vmlldy1pbmZvLW5hbWUuZmJ0LXByb2R1Y3QnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUuZmJ0LXByb2R1Y3QnKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCgge2k6aSwgZGF0YTogXCJcIn0gKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKCQodGhpcykudGV4dCgpKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gTnVtYmVyKCQodGhpcykudGV4dCgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocHJvZHVjdElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaSA9PSBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJCgnLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUuZmJ0LXByb2R1Y3QnKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJCh0aGlzKS50ZXh0KCksIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pID09IGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSAkKCcucHJvZHVjdFZpZXctaW5mby12YWx1ZS5mYnQtcHJvZHVjdCcpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dMaXN0KGxpc3Qpe1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVsZW1lbnQuZGF0YTtcclxuICAgICAgICAgICAgJCgnI3RoZW12YWxlLWZidCAudGhlbXZhbGUtZmJ0LXByb2R1Y3QtbGlzdCcpLmFwcGVuZChyZXNwb25zZS5pdGVtKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9wdGlvbnMudHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHJlc3BvbnNlLml0ZW0pLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJCgnI3RoZW12YWxlLWZidCAudGhlbXZhbGUtZmJ0LXByb2R1Y3QtbGlzdCAudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcElkICsgJ1wiXSBmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQocmVzcG9uc2Uub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICQocmVzcG9uc2Uub3B0aW9ucykuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGhhc0RlZmF1bHRPcHRpb25zICYmIGhhc09wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHBJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI3RoZW12YWxlLWZidCcpLnNob3coKTtcclxuICAgICAgICBwcm9kdWN0T3B0aW9ucygpO1xyXG4gICAgICAgICQoJyN0aGVtdmFsZS1mYnQgLnRoZW12YWxlLWZidC1wcm9kdWN0LXdyYXBwZXInKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ0aGVtdmFsZS1mYnQtdG90YWwgZmJ0X190b3RhbFwiPlxcXHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRoZW1ldmFsZS10ZXh0LXByaWNlXCI+PHNwYW4+VG90YWw6PC9zcGFuPiA8c3BhbiBjbGFzcz1cInRoZW12YWxlLWZidC10b3RhbC1wcmljZVwiIGlkPVwidGhlbXZhbGUtZmJ0LXRvdGFsUHJpY2VcIj48L3NwYW4+PC9wPlxcXHJcbiAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgdGhlbXZhbGUtZmJ0LXRvdGFsLWJ1dHRvblwiIGlkPVwidGhlbXZhbGUtZmJ0LWFkZEFsbFwiIGhyZWY9XCIjXCI+QWRkIGFsbCB0byBDYXJ0PC9hPlxcXHJcbiAgICAgICAgPC9kaXY+Jyk7XHJcbiAgICAgICAgc2xpY2tfc2xpZGVyKCk7XHJcbiAgICAgICAgdG90YWxQcmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWNrX3NsaWRlcigpIHtcclxuICAgICAgICBpZiAoJCgnLnByb2R1Y3QtbGF5b3V0LTMnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWxpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyc+PHVzZSB4bGluazpocmVmPScjaWNvbi1zbGljay1uZXh0Jz48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93Jz48dXNlIHhsaW5rOmhyZWY9JyNpY29uLXNsaWNrLXByZXYnPjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnPjx1c2UgeGxpbms6aHJlZj0nI2ljb24tc2xpY2stbmV4dCc+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyc+PHVzZSB4bGluazpocmVmPScjaWNvbi1zbGljay1wcmV2Jz48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrUHJvZHVjdChmb3JtLCBhcnJQcm8pIHtcclxuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyUHJvLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBrID0gYXJyUHJvW2ldO1xyXG4gICAgICAgICAgICB2YXIgJGZvcm0gPSAkKGZvcm1ba10pO1xyXG4gICAgICAgICAgICBpZiAoJGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRmb3JtKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQmVmb3JlQWRkKCRhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDp0ZXh0LCBpbnB1dDpwYXNzd29yZCwgaW5wdXQ6ZmlsZSwgdGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQodGhpcykucHJvcCgncmVxdWlyZWQnKSkge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgYXR0ID0gXCJcIjtcclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDpyYWRpbywgaW5wdXQ6Y2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoYXR0ICE9ICQodGhpcykuYXR0cihcIm5hbWVcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHQgPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwiY2hlY2tib3hcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCkge1xyXG5cclxuICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2NhcnQucGhwJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGsgPSBhcnJQW2ldO1xyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybVtrXSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gJy9jYXJ0LnBocCc7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlld01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld01vZGFsLm9wZW4oKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RoZW12YWxlLWZidCAubG9hZGluZ092ZXJsYXknKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FydENvbnRlbnQocHJldmlld01vZGFsLCByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jYXJ0LnBocCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0ucHJvZHVjdF9pZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnRDb250ZW50KG1vZGFsLCBjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIG1vZGFsLiRjb250ZW50KTtcclxuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xyXG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdDogY2FydEl0ZW1JZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3RhbFByaWNlKCkge1xyXG4gICAgICAgIHZhciB0b3RhbCA9IDA7XHJcbiAgICAgICAgdmFyIHBvcyA9IDA7XHJcbiAgICAgICAgdmFyIHN5bWJvbCA9IFwiJFwiO1xyXG4gICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtLmlzQ2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRoVGF4JykubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5ID0gJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aFRheCcpLnRleHQoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5ID0gJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aG91dFRheCcpLnRleHQoKTtcclxuICAgICAgICAgICAgdmFyIHByaWNlID0gcGFyc2VGbG9hdChjdXJyZW5jeS5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpO1xyXG4gICAgICAgICAgICB2YXIgcyA9IGN1cnJlbmN5LnJlcGxhY2UocGFyc2VGbG9hdChwcmljZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIiksIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChzLnJlcGxhY2UoL1teMC05Li1dKy9nLCBcIlwiKSkpKVxyXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gcztcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIHBvcyA9IGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKTtcclxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHByaWNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PSAwKVxyXG4gICAgICAgICAgICB0b3RhbCA9IHN5bWJvbCArIHRvdGFsO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHN5bWJvbDtcclxuICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0LXRvdGFsUHJpY2UnKS5odG1sKHRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9kdWN0T3B0aW9ucygpIHtcclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJChkb2N1bWVudCkpO1xyXG5cclxuICAgICAgICAvLyB2YXIgYXJyUHJvID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgLy8gZm9yICh2YXIgaSA9IDAsIGxlbiA9ICRmb3JtLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2Utb3B0aW9ucycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNsaWRlVXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XHJcbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxyXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCdpZCcpID09PSAnZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkc2NvcGUsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xyXG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XHJcbiAgICAgICAgY29uc3Qgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke2RhdGEub3V0X29mX3N0b2NrX21lc3NhZ2V9KWA7XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXHJcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIGRhdGEpIHtcclxuICAgICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEuaW1hZ2UpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZS5nZXRTcmMoXHJcbiAgICAgICAgICAgICAgICBkYXRhLmltYWdlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zaXplLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdzcmMnOiBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmMnOiAkKHRoaXMpLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKCdkYXRhLXNyYycpO1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6IG1haW5JbWFnZVVybCxcclxuICAgICAgICAgICAgICAgICdkYXRhLXNyYyc6ICQodGhpcykuYXR0cignc3JjJyksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KCRzY29wZSwgZGF0YSwgY29udGVudCA9IG51bGwpIHtcclxuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSBnZXRWaWV3TW9kZWwoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcclxuICAgICAgICAgICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCgnI2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkc2NvcGUpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUygkc2NvcGUsIGRhdGEpIHtcclxuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCgnI2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJHNjb3BlKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Vmlld01vZGVsKCRzY29wZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJHByaWNlV2l0aG91dFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIHN0b2NrOiB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRza3U6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScpLFxyXG4gICAgICAgICAgICAkdXBjOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nKSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcclxuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XHJcbiAgICAgICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcclxuICAgICAqIFNhZmFyaSBicm93c2VyIHdpdGgganF1ZXJ5IDMuMy4xIGhhcyBhbiBpc3N1ZSB1cGxvYWRpbmcgZW1wdHkgZmlsZSBwYXJhbWV0ZXJzLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHNjcm9sbCA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnKS5vZmZzZXQoKTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsLnRvcCArIDEwMCl7XHJcbiAgICAgICAgICAgIGlmKCEkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcclxuICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLm91dGVySGVpZ2h0KCkgKyAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyAxNSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLm91dGVySGVpZ2h0KCkgKyAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5yZW1vdmVDbGFzcygnc2hvd19zdGlja3knKTtcclxuICAgICAgICAgICAgJCgnLnBvcC11cC1vcHRpb24nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgNDApO1xyXG4gICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCA0MCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTApIHtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0Jykub3V0ZXJIZWlnaHQoKSArIDMwKTtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgMTUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcuY2hvb3NlX29wdGlvbnNfYWRkJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5wb3AtdXAtb3B0aW9uIC5jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAkKFwiLnBvcC11cC1vcHRpb25cIikucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsLnRvcCAtIDE2MCl7XHJcbiAgICAgICAgICAgIGlmKCEkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcclxuICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLm91dGVySGVpZ2h0KCkgKyAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyAxNSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLm91dGVySGVpZ2h0KCkgKyAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==