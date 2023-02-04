(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
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
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fancybox__WEBPACK_IMPORTED_MODULE_9__);




function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context.urls);
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    this.showmore_product();
    this.showmore_htmltext();
    this.categoryImage_fancybox();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_8__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);

      // $('html, body').animate({
      //     scrollTop: 0,
      // }, 100);
    });
  };
  _proto.showmore_product = function showmore_product() {
    var check_link = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".pagination-item--current").next();
    if (check_link.length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').css('display', 'none');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '#button-showmore-category', function (e) {
        e.preventDefault();
        var nextPage = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').addClass('loadding');
        jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
          type: 'get',
          url: link.replace("http://", "//"),
          success: function success(data) {
            if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('#productLayout').length > 0) {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('#productLayout').append(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('#productLayout').children());
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.pagination-list').html(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find(".pagination-list").html());
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').removeClass('loadding');
              if (Number(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .end').text()) <= Number(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .total').text())) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .end').text());
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_4___default()(data).find('.pagination-info .total').text());
              }
              nextPage = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".pagination-item--current").next();
              if (nextPage.length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-category').css('display', 'none');
              }
            }
          }
        });
      });
    }
  };
  _proto.showmore_htmltext = function showmore_htmltext() {
    var showChar = 600,
      ellipsestext = "...",
      moretext = "Read more",
      lesstext = "Read less";
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.custom-html-category .custom-html').each(function () {
      var content = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).html(html);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('#button-showmore-html').on('click', function (e) {
      e.preventDefault();
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).hasClass("less")) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).removeClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.text').html(moretext);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().prev().removeClass('showmore');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).addClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.text').html(lesstext);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().prev().addClass('showmore');
      }
    });
  };
  _proto.categoryImage_fancybox = function categoryImage_fancybox() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.fancybox').fancybox({
      // openEffect  : 'elastic'
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_6__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwic2hvd21vcmVfcHJvZHVjdCIsInNob3dtb3JlX2h0bWx0ZXh0IiwiY2F0ZWdvcnlJbWFnZV9mYW5jeWJveCIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsImNoZWNrX2xpbmsiLCJuZXh0IiwiY3NzIiwiZG9jdW1lbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsImxpbmsiLCJmaW5kIiwiYXR0ciIsImFkZENsYXNzIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRhdGEiLCJhcHBlbmQiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwiTnVtYmVyIiwidGV4dCIsInNob3dDaGFyIiwiZWxsaXBzZXN0ZXh0IiwibW9yZXRleHQiLCJsZXNzdGV4dCIsImVhY2giLCJjIiwic3Vic3RyIiwiaCIsImhhc0NsYXNzIiwicGFyZW50IiwicHJldiIsImZhbmN5Ym94IiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDLENBQUMsSUFBSSxDQUFDLENBQUMwRCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekIxRCw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUMzQi9DLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNvQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNULElBQUksQ0FBQ3lCLFFBQVEsQ0FBQztRQUNwQ3BELDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRCxNQUFNLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFLENBQUNiLFdBQVcsQ0FBQyxVQUFVLENBQUM7TUFDbkQsQ0FBQyxNQUFNO1FBQ0gvQyw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QnRDLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNvQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNULElBQUksQ0FBQzBCLFFBQVEsQ0FBQztRQUNwQ3JELDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRCxNQUFNLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFLENBQUN0QixRQUFRLENBQUMsVUFBVSxDQUFDO01BQ2hEO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BRUQ3QixzQkFBc0IsR0FBdEIsa0NBQXlCO0lBQ3JCVCw2Q0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDNkQsUUFBUSxDQUFDO01BQ3BCO0lBQUEsQ0FDSCxDQUFDO0VBQ04sQ0FBQztFQUFBO0FBQUEsRUFuSGlDQyxnREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XHJcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcclxuaW1wb3J0ICdmYW5jeWJveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd21vcmVfcHJvZHVjdCgpO1xyXG4gICAgICAgIHRoaXMuc2hvd21vcmVfaHRtbHRleHQoKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5SW1hZ2VfZmFuY3lib3goKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAvLyAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICAvLyB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dtb3JlX3Byb2R1Y3QoKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrX2xpbmsgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XHJcbiAgICAgICAgaWYgKGNoZWNrX2xpbmsubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmFkZENsYXNzKCdsb2FkZGluZycpO1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCIvL1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0TGF5b3V0JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3RMYXlvdXQnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdExheW91dCcpLmNoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLnJlbW92ZUNsYXNzKCdsb2FkZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSkgPD0gTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLmh0bWwoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dtb3JlX2h0bWx0ZXh0KCkge1xyXG4gICAgICAgIHZhciBzaG93Q2hhciA9IDYwMCxcclxuICAgICAgICAgICAgZWxsaXBzZXN0ZXh0ID0gXCIuLi5cIixcclxuICAgICAgICAgICAgbW9yZXRleHQgPSBcIlJlYWQgbW9yZVwiLFxyXG4gICAgICAgICAgICBsZXNzdGV4dCA9IFwiUmVhZCBsZXNzXCI7XHJcbiAgICAgICAgJCgnLmN1c3RvbS1odG1sLWNhdGVnb3J5IC5jdXN0b20taHRtbCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gJCh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgICAgIGlmKGNvbnRlbnQubGVuZ3RoID4gc2hvd0NoYXIpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjb250ZW50LnN1YnN0cigwLCBzaG93Q2hhcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGNvbnRlbnQuc3Vic3RyKHNob3dDaGFyLCBjb250ZW50Lmxlbmd0aCAtIHNob3dDaGFyKTtcclxuICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBodG1sID0gYyArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGxpcHNlc1wiPicgKyBlbGxpcHNlc3RleHQrICcmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJtb3JlY29udGVudFwiPjxzcGFuPicgKyBoICsgJzwvc3Bhbj48L3NwYW4+JztcclxuICAgICBcclxuICAgICAgICAgICAgICAgICQodGhpcykuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtaHRtbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKFwibGVzc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy50ZXh0JykuaHRtbChtb3JldGV4dCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5yZW1vdmVDbGFzcygnc2hvd21vcmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJsZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcudGV4dCcpLmh0bWwobGVzc3RleHQpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuYWRkQ2xhc3MoJ3Nob3dtb3JlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXRlZ29yeUltYWdlX2ZhbmN5Ym94KCkge1xyXG4gICAgICAgICQoJy5mYW5jeWJveCcpLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgLy8gb3BlbkVmZmVjdCAgOiAnZWxhc3RpYydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9