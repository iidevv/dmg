(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themevale/themevale_AZbrands */ "./assets/js/theme/themevale/themevale_AZbrands.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);
  function Brands(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    Object(_themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/themevale/themevale_AZbrands.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_AZbrands.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var azWrapper = $('#haloAZBrandsWrapper'),
    azNavigation = $('#haloAZBrandsTable');
  var requestOptions = {
    config: {
      blog: {
        posts: {
          limit: context.themeSettings.brandpage_brands_per_page
        }
      }
    },
    template: 'themevale/halo-all-brands'
  };
  if (context.themeSettings.halo_brandlayout === 'aztable') {
    getAllBrand();
    brandNavigationEvent();
  }
  function getAllBrand() {
    azWrapper.addClass('is-loading');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.getPage('/brands.php', requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function brandNavigationEvent() {
    azNavigation.on('click', 'a', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      azNavigation.children('li').removeClass('is-active');
      $target.parent().addClass('is-active');
      var letter = $target.data('href');
      if (letter !== undefined || letter) {
        azWrapper.removeClass('active-all');
        azWrapper.find('.azBrands-group').removeClass('is-active');
        azWrapper.find('[data-letter=' + letter + ']').addClass('is-active');
      } else {
        azWrapper.addClass('active-all');
      }
    });
  }
  function parseListBrand(list) {
    azWrapper.find('.azBrands-group').each(function (index, element) {
      var letter = $(element).data('letter');
      if (!isLetter(letter)) {
        for (var i = 0; i < 10; i++) {
          $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + i + ']'));
        }
      } else {
        $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + letter + ']'));
      }
      if ($('.azBrands-group-list', element).children().length > 0) {
        azNavigation.find('[data-letter=' + letter + ']').removeClass('disable').addClass('has-letter');
      }
    });
  }
  function loadMoreBrands(url) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS90aGVtZXZhbGUvdGhlbWV2YWxlX0FaYnJhbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyJdLCJuYW1lcyI6WyJCcmFuZHMiLCJjb250ZXh0Iiwib25SZWFkeSIsImhhbG9BWkJyYW5kcyIsIlBhZ2VNYW5hZ2VyIiwiYXpXcmFwcGVyIiwiJCIsImF6TmF2aWdhdGlvbiIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYmxvZyIsInBvc3RzIiwibGltaXQiLCJ0aGVtZVNldHRpbmdzIiwiYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSIsInRlbXBsYXRlIiwiaGFsb19icmFuZGxheW91dCIsImdldEFsbEJyYW5kIiwiYnJhbmROYXZpZ2F0aW9uRXZlbnQiLCJhZGRDbGFzcyIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVycm9yIiwicmVzcG9uc2UiLCJsaXN0IiwicGFyc2VMaXN0QnJhbmQiLCJuZXh0VXJsIiwiZGF0YSIsImxvYWRNb3JlQnJhbmRzIiwicmVtb3ZlQ2xhc3MiLCJpc0xldHRlciIsInN0ciIsImxlbmd0aCIsIm1hdGNoIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjaGlsZHJlbiIsInBhcmVudCIsImxldHRlciIsInVuZGVmaW5lZCIsImZpbmQiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiaSIsImFwcGVuZCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNpQjtBQUFBLElBRXJDQSxNQUFNO0VBQUE7RUFDdkIsZ0JBQVlDLE9BQU8sRUFBRTtJQUFBLE9BQ2pCLHdCQUFNQSxPQUFPLENBQUM7RUFDbEI7RUFBQztFQUFBLE9BRUpDLE9B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Q2tCLFFBQVEsQ0FBQztNQUV0QkUsY0FBYyxDQUFDRCxJQUFJLENBQUM7TUFFcEIsSUFBTUUsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztNQUU3QyxJQUFJRCxPQUFPLEVBQUU7UUFDVEUsY0FBYyxDQUFDRixPQUFPLENBQUM7TUFDM0IsQ0FBQyxNQUFLO1FBQ0Z0QixTQUFTLENBQUN5QixXQUFXLENBQUMsWUFBWSxDQUFDO01BQ3ZDO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDOzs7Ozs7Ozs7Ozs7O0FDM0dhOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQyxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMseUJBQXlCLG1CQUFPLENBQUMsd0ZBQXlCO0FBQzFELGlCQUFpQixtQkFBTyxDQUFDLHdGQUF5Qjs7QUFFbEQ7QUFDQSxtQkFBTyxDQUFDLG9FQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgaGFsb0FaQnJhbmRzIGZyb20gJy4vdGhlbWV2YWxlL3RoZW1ldmFsZV9BWmJyYW5kcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZHMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHRvblJlYWR5KCkge1xyXG5cdFx0aGFsb0FaQnJhbmRzKHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICBjb25zdCBheldyYXBwZXIgPSAkKCcjaGFsb0FaQnJhbmRzV3JhcHBlcicpLFxyXG4gICAgICAgIGF6TmF2aWdhdGlvbiA9ICQoJyNoYWxvQVpCcmFuZHNUYWJsZScpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBibG9nOiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBjb250ZXh0LnRoZW1lU2V0dGluZ3MuYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogJ3RoZW1ldmFsZS9oYWxvLWFsbC1icmFuZHMnLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fYnJhbmRsYXlvdXQgPT09ICdhenRhYmxlJykge1xyXG4gICAgICAgIGdldEFsbEJyYW5kKCk7XHJcbiAgICAgICAgYnJhbmROYXZpZ2F0aW9uRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxCcmFuZCgpe1xyXG4gICAgICAgIGF6V3JhcHBlci5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnL2JyYW5kcy5waHAnLCByZXF1ZXN0T3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIHBhcnNlTGlzdEJyYW5kKGxpc3QpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV4dFVybCA9IGxpc3QuZGF0YSgnYnJhbmRzLWxpc3QtbmV4dCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRVcmwpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRNb3JlQnJhbmRzKG5leHRVcmwpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTGV0dGVyKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvW2Etel0vaSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnJhbmROYXZpZ2F0aW9uRXZlbnQoKXtcclxuICAgICAgICBhek5hdmlnYXRpb24ub24oJ2NsaWNrJywgJ2EnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgYXpOYXZpZ2F0aW9uLmNoaWxkcmVuKCdsaScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICR0YXJnZXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gJHRhcmdldC5kYXRhKCdocmVmJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV0dGVyICE9PSB1bmRlZmluZWQgfHwgbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1hbGwnKTtcclxuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5maW5kKCcuYXpCcmFuZHMtZ3JvdXAnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIuZmluZCgnW2RhdGEtbGV0dGVyPScrbGV0dGVyKyddJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmFkZENsYXNzKCdhY3RpdmUtYWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUxpc3RCcmFuZChsaXN0KXtcclxuICAgICAgICBheldyYXBwZXIuZmluZCgnLmF6QnJhbmRzLWdyb3VwJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICQoZWxlbWVudCkuZGF0YSgnbGV0dGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZighaXNMZXR0ZXIobGV0dGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmFwcGVuZChsaXN0LmZpbmQoJ1tkYXRhLWJyYW5kLWxldHRlcj0nK2krJ10nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmFwcGVuZChsaXN0LmZpbmQoJ1tkYXRhLWJyYW5kLWxldHRlcj0nK2xldHRlcisnXScpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoJCgnLmF6QnJhbmRzLWdyb3VwLWxpc3QnLCBlbGVtZW50KS5jaGlsZHJlbigpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgYXpOYXZpZ2F0aW9uLmZpbmQoJ1tkYXRhLWxldHRlcj0nK2xldHRlcisnXScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJykuYWRkQ2xhc3MoJ2hhcy1sZXR0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRNb3JlQnJhbmRzKHVybCkge1xyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBwYXJzZUxpc3RCcmFuZChsaXN0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSBsaXN0LmRhdGEoJ2JyYW5kcy1saXN0LW5leHQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkTW9yZUJyYW5kcyhuZXh0VXJsKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRtYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=