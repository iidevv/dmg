import $ from 'jquery';
import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import 'fancybox';

export default class Category extends CatalogPage {
    onReady() {
        compareProducts(this.context.urls);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        this.showmore_product();
        this.showmore_htmltext();
        this.categoryImage_fancybox();
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            // $('html, body').animate({
            //     scrollTop: 0,
            // }, 100);
        });
    }

    showmore_product() {
        var check_link = $(".pagination-item--current").next();
        if (check_link.length === 0) {
            $('#button-showmore-category').css('display', 'none');
        } else {
            $(document).on('click', '#button-showmore-category', function(e){
                e.preventDefault();
                var nextPage = $(".pagination-item--current").next(),
                    link = nextPage.find("a").attr("href");
                $('#button-showmore-category').addClass('loadding');
                $.ajax({
                    type: 'get',
                    url: link.replace("http://", "//"),
                    success: function(data) {
                        if ($(data).find('#productLayout').length > 0) {
                            $('#productLayout').append($(data).find('#productLayout').children());
                            $('.pagination-list').html($(data).find(".pagination-list").html());
                            $('#button-showmore-category').removeClass('loadding');
                            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
                                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .end').text());
                            } else {
                                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .total').text());
                            }
                            nextPage = $(".pagination-item--current").next();
                            if (nextPage.length === 0) {
                                $('#button-showmore-category').css('display', 'none');
                            }
                        }
                    }
                })
            })
        }
    }

    showmore_htmltext() {
        var showChar = 600,
            ellipsestext = "...",
            moretext = "Read more",
            lesstext = "Read less";
        $('.custom-html-category .custom-html').each(function() {
            var content = $(this).html();
            if(content.length > showChar) {
 
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
     
                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';
     
                $(this).html(html);
            }
        });
        $('#button-showmore-html').on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).find('.text').html(moretext);
                $(this).parent().prev().removeClass('showmore');
            } else {
                $(this).addClass("less");
                $(this).find('.text').html(lesstext);
                $(this).parent().prev().addClass('showmore');
            }
        });
    }

    categoryImage_fancybox() {
        $('.fancybox').fancybox({
            // openEffect  : 'elastic'
        });
    }
}
