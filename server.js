require.config({
    'paths': {
        'cartApp': '../../imports/scripts/components/cart/cartApp',
        'itemsView': '../../imports/scripts/components/cart/ItemsView',
        'upsellMessageView': '../../imports/scripts/components/cart/UpsellMessageView',
        'itemView': '../../assets/scripts/components/cart/ItemView',
        'itemModel': '../../imports/scripts/components/cart/ItemModel',
        'itemsCollection': '../../imports/scripts/components/cart/ItemsCollection',
        'itemCartDetailView': '../../assets/scripts/components/cart/ItemCartDetailView',
        'itemOrderDetailView': '../../imports/scripts/components/cart/ItemOrderDetailView',
        'headerCartView': '../../imports/scripts/components/cart/HeaderCartView',
        'orderSummaryView': '../../imports/scripts/components/cart/OrderSummaryView',
        'orderSummaryModel': '../../imports/scripts/components/cart/OrderSummaryModel',
        'orderSummaryCollection': '../../imports/scripts/components/cart/OrderSummaryCollection',
        'myFavoriteModel': '../../imports/scripts/components/cart/MyFavoriteModel',
        'myFavoritesCollection': '../../imports/scripts/components/cart/MyFavoritesCollection',
        'myFavoritesView': '../../imports/scripts/components/cart/MyFavoritesView',
        'myFavoriteItemView': '../../imports/scripts/components/cart/MyFavoriteItemView',
        'myFavoritesHeaderView': '../../imports/scripts/components/cart/MyFavoritesHeaderView',
        'youMayAlsoLikeView': '../../imports/scripts/components/cart/YouMayAlsoLikeView',
        'youMayAlsoLikeItemView': '../../imports/scripts/components/cart/YouMayAlsoLikeItemView',
        'youMayAlsoLikeModel': '../../imports/scripts/components/cart/YouMayAlsoLikeModel',
        'youMayAlsoLikeCollection': '../../imports/scripts/components/cart/YouMayAlsoLikeCollection',
        'discountsCollection': '../../imports/scripts/components/cart/DiscountsCollection',
        'promoCodeView': '../../imports/scripts/components/cart/PromoCodeView',
        'brandLoyaltyView': '../../imports/scripts/components/cart/BrandLoyaltyView',
        'brandDollarsMessageView': '../../imports/scripts/components/cart/BrandDollarsMessageView',
        'modalEmailCartView': '../../imports/scripts/components/cart/ModalEmailCartView',
        'quickView': '../../imports/scripts/components/shared/QuickView',
        'giftItemsView': '../../imports/scripts/components/cart/GiftItemsView',
        'giftItemView': '../../imports/scripts/components/cart/GiftItemView',
        'giftTabView': '../../imports/scripts/components/cart/GiftTabView',
        'giftItemCollection': '../../imports/scripts/components/cart/GiftItemCollection',
        'giftItemsModel': '../../imports/scripts/components/cart/GiftItemsModel',
        'freeGiftModuleView': '../../imports/scripts/components/cart/FreeGiftModuleView',
        'discountModel': '../../imports/scripts/components/cart/DiscountModel',
        'discountsView': '../../imports/scripts/components/cart/DiscountsView',
        'discountItemView': '../../imports/scripts/components/cart/DiscountItemView',
        'modalItemEditView': '../../assets/scripts/components/cart/ModalItemEditView',
        'itemSizeTabView': '../../imports/scripts/components/shared/ItemSizeTabView',
        'itemSizesView': '../../imports/scripts/components/shared/ItemSizesView',
        'itemColorsView': '../../imports/scripts/components/shared/ItemColorsView',
        'currentPromotionsModel': '../../assets/scripts/components/cart/CurrentPromotionsModel',
        'currentPromotionsView': '../../assets/scripts/components/cart/CurrentPromotionsView',
        'AOSPriceAdjustmentModel': '../../imports/scripts/components/cart/AOSPriceAdjustmentModel',
        'AOSPriceAdjustmentView': '../../imports/scripts/components/cart/AOSPriceAdjustmentView',
        'CustomerLookupModel': '../../imports/scripts/components/cart/CustomerLookupModel',
        'CustomerLookupView': '../../imports/scripts/components/cart/CustomerLookupView',
        'CustomerLookupCollection': '../../imports/scripts/components/cart/CustomerLookupCollection',
        'CustomerLookupResultsView': '../../imports/scripts/components/cart/CustomerLookupResultsView',
        'modalItemRemoveView': '../../assets/scripts/components/cart/ModalItemRemoveView',
        'ModalImageView': '../../assets/scripts/components/cart/ModalImageView',
        'ProductColorModel': '../../assets/scripts/components/quickview/ProductColorModel',
        'ProductColorSelectCollection': '../../assets/scripts/components/quickview/ProductColorSelectCollection',
        'ProductColorSelectView': '../../assets/scripts/components/quickview/ProductColorSelectView',
        'ProductSKUModel': '../../assets/scripts/components/quickview/ProductSKUModel',
        'ProductSKUCollection': '../../assets/scripts/components/quickview/ProductSKUCollection',
        'ProductInventoryModel': '../../assets/scripts/components/quickview/ProductInventoryModel',
        'ProductInventoryCollection': '../../assets/scripts/components/quickview/ProductInventoryCollection',
        'certonaAppCollection': '../../imports/scripts/components/cart/CertonaAppCollection',
        'certonaApp': '../../imports/scripts/components/cart/CertonaApp',
        'promoCodeCollection': '../../imports/scripts/components/checkout/PromoCodeCollection',
        'promoCodeModel': '../../imports/scripts/components/checkout/PromoCodeModel',
        'upsellMsgCollection': '../../imports/scripts/components/cart/UpsellMsgCollection',
        'itemsViewReturn': '../../imports/scripts/components/cart/ItemsViewReturn',
        'itemViewReturn': '../../assets/scripts/components/cart/ItemViewReturn'
    }
});

define("app-config/maurices-cart-config", function () {
});

/**
 * Copyright 2012 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * bullsfirst/framework/MessageBus
 *
 * Provides the ability to publish and subscribe to messages.
 *
 * @author Naresh Bhatia
 */
define(
    'MessageBus', [],
    function () {
        'use strict';

        var _messageBus = _.extend({}, Backbone.Events);

        return {
            on: function (events, callback, context) {
                _messageBus.on(events, callback, context);
            },

            off: function (events, callback, context) {
                _messageBus.off(events, callback, context);
            },

            trigger: function (/*events*/) {
                _messageBus.trigger.apply(_messageBus, arguments);
            }
        };
    }
);
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq, Modernizr*/
/*
 This script will pull in JSON from script tag on the page.
 */
define('api', [
    'MessageBus'
], function (MessageBus) {
    'use strict';

    var endpoints = $.parseJSON($('#endpoints').html()).data.endpoints,
        userState,
        favoritesState,
        $exclusionSetModal = $(".secureFrame");

    var _defaults = {
        'actions': {
            'getUserState': 'Header.userState',
            'getFavorites': 'Favorites.getFavorites'
        }
    };

    var messages = function () {
        if ($('#messages').length > 0) {
            return $.parseJSON($('#messages').html()).messages;
        }
    };

    //Create user state as its own object
    var UserState = function () {
        //create our resolver
        this.dataFetched = false;
        this.options = $.extend(true, {}, _defaults);

        var that = this;

        this.getUserDFD = $.ajax({
            'url': endpoints.userState,
            'dataType': 'json',
            'data': {
                'Action': this.options.actions.getUserState,
                'userState_id': $('#userState_id').val()
            }
        }).done(function (data) {
            //if the data was successfully fetched, set the resolver to 'true'
            that.dataFetched = true;
            that.ajaxData = data;
        }).fail(function (data) {
            console.log("could not reach end point");
        });
    };

    //return either the requested ajax or a deferred object depending on the state of the call
    UserState.prototype.getUserState = function () {
        var that = this,
            userData = this.getUserDFD,
            ajaxData = this.ajaxData;

        if (this.dataFetched === true) {
            return ajaxData;
        } else {
            return userData;
        }
    };


    //create only one instance of user state, and therefore only request the user state once
    if (!$exclusionSetModal[0]) {
        userState = new UserState();
    } else if ($exclusionSetModal[0] && endpoints.ageGateOpen !== undefined) {
        userState = new UserState();
    }

    if (!String.trim) {
        (function () {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, '');
            };
        })();
    }
    //public getters
    var getUserState = function () {
        return userState.getUserState();
    };

    var Favorites = function () {
        //create our resolver
        this.dataFetched = false;
        this.options = $.extend(true, {}, _defaults);

        this.$exclusionSet = $(".cmn-checkout-header");
        this.$exclusionSetCartPage = $("#mar-cart .cmn-checkout-header");
        //removed dashboard call from exclusion set-Sanity CI issue after merge
        //this.$exclusionSetDashboard = $(".cmn-dashboard");
        this.$exclusionSetModal = $(".secureFrame");
        var that = this;

        //Return from here if we are on checkout pages [Performance AJAX calls Removal]
        if (!that.$exclusionSetCartPage[0] && that.$exclusionSet[0] || that.$exclusionSetModal[0]) {
            return {};
        } else {

            //else run this update call for other pages
            this.updateFavorites();
        }
    };

    //return either the requested ajax or a deferred object depending on the state of the call
    Favorites.prototype.getFavorites = function (update) {
        var that = this,
            userData,
            ajaxData;

        //Return from here if we are on checkout pages [Performance AJAX calls Removal]
        if (!that.$exclusionSetCartPage[0] && that.$exclusionSet[0] || that.$exclusionSetModal[0]) {
            return {};
        }

        if (update === true) {
            this.updateFavorites();
        }

        userData = this.getFavoritesDFD;
        ajaxData = this.ajaxData;
        if (this.dataFetched === true) {
            return ajaxData;
        } else {
            return userData;
        }
    };

    Favorites.prototype.updateFavorites = function () {
        var that = this;

        this.getFavoritesDFD = $.ajax({
            'url': endpoints.userFavorites,
            'dataType': 'json',
            'data': {
                'Action': this.options.actions.getFavorites
            }
        }).done(function (data) {
            //if the data was successfully fetched, set the resolver to 'true'
            if (typeof data === "object" && data.status && data.status.toLowerCase() === "invalidsession") {
                window.location.href = data.redirectURLSessionTimout;
            }
            that.dataFetched = true;
            that.ajaxData = data;
        }).fail(function (data) {
            console.log("could not reach end point");
        });
    };


    favoritesState = new Favorites();

    var getFavorites = function () {
        favoritesState.dataFetched = false;
        return favoritesState.getFavorites();
    };

    var updateFavorites = function () {
        favoritesState.dataFetched = false;
        return favoritesState.getFavorites(true);
    };

    // temporary solution to see associate experience add ?aos to url
    // TODO: remove this when backend adds class to body tag
    if (window.location.href.indexOf("?aos") > -1) {
        $('body').addClass('aos');
    }

    var checkIfRIOPage = function () {
        var $rio,
            rioMarkup,
            rioJSON,
            rioHTML;

        if ($('#rio-page-json').length > 0) {
            $rio = $('#rio-page-json');
            rioHTML = $rio.html();
            //if empty
            if ($.trim(rioHTML)) {
                rioJSON = $.parseJSON(rioHTML);

                if (rioJSON.rio_page === "true") {
                    console.log('this is a rio page');
                    return true;
                }
            }
        }

        //console.log('this is a regular page');
        return false;
    };

    // borrowed from Head.js
    var scriptTag = function (src, callback, attributes, async) {

        var s = document.createElement('script');
        s.type = 'text/' + (src.type || 'javascript');

        if (attributes) {
            for (var key in attributes) {
                s.setAttribute(key, attributes[key]);
            }
        }
        s.src = src.src || src;
        s.async = async || false;

        // Changes for IE9/10 Chat options
        if (s.addEventListener) {
            s.addEventListener("load", function () {
                if (!callback.done) {
                    callback.done = true;
                    callback();
                }
            });
        } else {
            s.onreadystatechange = function () {
                var state = s.readyState;

                if (!callback.done && (!state || /loaded|complete/.test(state))) {
                    callback.done = true;
                    callback();
                }
            };
        }

        document.getElementsByTagName('head')[0].appendChild(s);
    };

    var isMobileOrTabletDevice = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    var isMobileDevice = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    var parseQuerystring = function (doNotDecode, sBaseStringParam) {
        var sBaseString = $.trim((sBaseStringParam || location.search).replace('?', '')),
            querystring = [];

        if (sBaseString.length > 0) {
            querystring = sBaseString.split('&');
        }
        //we may have data in the query string
        var queryObj = {},
            i, iLen, name, value;

        iLen = querystring.length;

        // loop through each name-value pair and populate object
        for (i = 0; i < iLen; i++) {
            // get name and value
            name = querystring[i].split('=')[0];
            value = (doNotDecode) ? querystring[i].split('=')[1] : decodeURIComponent(querystring[i].split('=')[1]);
            // populate object
            if (queryObj[name]) {
                if (ICA.fn.typeOf(queryObj[name]) == "array") {
                    if (queryObj[name].indexOf(value) == -1) {
                        queryObj[name].push(value);
                    }
                } else {
                    queryObj[name] = [queryObj[name]].concat([value]);
                }
            } else {
                queryObj[name] = value;
            }
        }
        return queryObj;
    };

    //The following five methods create, read, appendTo and delete cookies.
    var createCookie = function (name, value, days, path, domain) {
        if (name.length === 0) {
            return;
        }
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }

        document.cookie = name + "=" + value + expires + "; path=" + path + "; domain=" + domain;
    };

    var readCookie = function (name) {
        if (name.length === 0) {
            return null;
        }
        var cName = name + "=",
            cArray = document.cookie.split(';'),
            cACount = cArray.length;

        while (cACount) {
            cACount--;
            var c = cArray[cACount];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(cName) === 0) return c.substring(cName.length, c.length);
        }

        return null;
    };

    var appendToCookie = function (name, value, days, path, domain) {
        createCookie(name, readCookie(name) + value, days, path, domain);
    };

    var removeValueFromCookie = function (name, value, days, path, domain) {
        var oldCookieValue = readCookie(name),
            newCookieValue = oldCookieValue.replace(value, "");

        createCookie(name, newCookieValue, days, path, domain);
    };

    var updateCookieValue = function (name, value, newValue, days, path, domain) {
        var oldCookieValue = readCookie(name),
            newCookieValue = oldCookieValue.replace(value, newValue);

        createCookie(name, newCookieValue, days, path, domain);
    };

    var deleteCookie = function (name, domain) {
        if (name.length === 0) {
            return;
        }
        createCookie(name, "", -1, "/", domain);
    };

    //	All viewport related methods
    var viewport = {
        /*
         *	@Usage Example :
         *	add API.viewport.init( viewports ) in a gobal file
         *	viewports = [
         {
         lowerLimit: 320,
         upperLimit: 700,
         viewportName: "mobile"
         },
         {
         lowerLimit: 701,
         upperLimit: 1023,
         viewportName: "tab"
         },
         {
         lowerLimit: 701,
         upperLimit: 1023,
         viewportName: "desktop"
         }
         ]
         then use methods like, API.viewport.size() to get size of current viewport
         */
        init: function (viewports) {
            this.viewports = viewports || null;
        },
        // Gets current viewport Size
        size: function () {
            var size = [0, 0];
            if (typeof window.innerWidth != 'undefined') {
                size = [window.innerWidth, window.innerHeight];
            } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
                size = [document.documentElement.clientWidth, document.documentElement.clientHeight];
            } else {
                size = [document.getElementsByTagName('body')[0].clientWidth, document.getElementsByTagName('body')[0].clientHeight];
            }
            return size;
        },
        // Gets current viewport Name
        name: function () {
            var i, viewportWidth, viewportName;
            if (!this.viewports) {
                return false;
            }

            viewportWidth = this.size()[0];

            for (i = 0; i < this.viewports.length; i++) {
                if (viewportWidth >= this.viewports[i]["lowerLimit"] && viewportWidth <= this.viewports[i]["upperLimit"]) {
                    return this.viewports[i]["viewportName"];
                }
            }
            return false;
        },

        /**
         *    Starts brodcasting viewport change events on MessageBus
         *
         *    usage:
         *    MessageBus.on('viewport.change', function(e){
		*		alert(e.new); // new viewport - mobile, tab or desktop
		*		alert(e.old); // old viewport
		*	});
         */
        listenChange: function () {
            // Detects Internet Explorer
            var IE = (/MSIE (\d+\.\d+);/.test(navigator.userAgent) === true) ? true : false;

            var _this = this;

            // Current viewport of app
            var currViewport = this.name();

            // null indicates ready to process event
            var ctxTimeout = null;

            // handler for native resize event
            var hResize = function () {
                var newViewport = _this.name();
                var size = _this.size();

                // for every Resize
                MessageBus.trigger('viewport.resize', {
                    size: size
                });
                if (currViewport !== newViewport) {
                    MessageBus.trigger('viewport.change', {
                        old: currViewport,
                        new: newViewport,
                        size: size
                    });
                    currViewport = newViewport;
                }

                ctxTimeout = null;
            }

            var proxy = function () {
                if (!ctxTimeout) {
                    ctxTimeout = setTimeout(hResize, 60);
                }
            }

            // add Event Listener
            if (document.addEventListener) {
                window.addEventListener("resize", proxy, false);
            } else if (document.attachEvent) {
                window.attachEvent("on" + "resize", proxy);
            }
        }
    }

    //Get Viewport Related Stuff ready before everything else
    if (endpoints && endpoints.responsive && endpoints.responsive.viewports) {
        // Init viewport Events
        viewport.init(endpoints.responsive.viewports);
        viewport.listenChange();
    }

    /**
     *    To determine whether mobileView for component needs to be displayed under current
     *    circumstances, it considers factors like currentViewport, configuredViewport and touch
     *    devices
     *
     *    Accepts component name as a string
     *    returns true / false
     */
    var showMobileView = function (compName) {
        var show = false;
        var vn = viewport.name();
        var touch = Modernizr.touch;
        var comp = endpoints.responsive && endpoints.responsive[compName || ''];

        // If component is not configured
        if (!comp) {
            show = false;
        }
        // If component is configured for current viewport
        else if (comp.hasOwnProperty(vn) && comp[vn]) {
            show = true;
        }
        // Component is configured for touch device and we are on touch device
        else if (comp.hasOwnProperty('touch') && comp.touch && touch) {
            show = true;
        }

        return show;
    };

    var isIOS = function () {
        if (Modernizr.touch && (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)) {
            return true;
        } else {
            return false;
        }
    };

    var removeParam = function (key, sourceURL) {
        var rtn = sourceURL.split("?")[0],
            param,
            params_arr = [],
            queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
        if (queryString !== "") {
            params_arr = queryString.split("&");
            for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                param = params_arr[i].split("=")[0];
                if (param === key) {
                    params_arr.splice(i, 1);
                }
            }
            rtn = rtn + "?" + params_arr.join("&");
        }
        return rtn;
    };

    var scrollTo = function (elementSelector) {
        var target = $(elementSelector);
        if (target.length > 0) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 'slow');
        }

    };

    var changeZipValidation = function (params) {
        if (params.options.selectedCountry !== params.value) {
            if (params.value === 'US') {
                params.$target.attr({
                    'data-parsley-pattern': "^[0-9]{5}(?:-[0-9]{4})?$",
                    'data-parsley-length': '[5, 10]',
                    'maxlength': '10'
                });
                // set zip validation to 4+ zip
            } else if (params.value === 'CA') {
                // set zip validation to canadian zip

                params.$target.attr({
                    'data-parsley-pattern': "^(?!.*[DFIOQU|dfioqu])[A-VXY|a-vxy][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$",
                    'data-parsley-length': '[6, 7]',
                    'maxlength': '7'
                });
            }
            params.options.selectedCountry = params.value;
            if (/([^\s])/.test(params.$target.val()) && params.validateOnChange) {
                params.$target.parsley().destroy();
                params.$target.parsley().validate();
            }
        }
    };

    var detectIE = function () {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return 0;
    };

    return {
        'endpoints': endpoints,
        'getUserState': getUserState,
        'getFavorites': getFavorites,
        'updateFavorites': updateFavorites,
        'favorites': favoritesState,
        'messages': messages(),
        'isRIO': checkIfRIOPage(),
        'loadScriptWithCallback': scriptTag,
        'isMobileOrTabletDevice': isMobileOrTabletDevice,
        'isMobileDevice': isMobileDevice,
        'createCookie': createCookie,
        'readCookie': readCookie,
        'appendToCookie': appendToCookie,
        'removeValueFromCookie': removeValueFromCookie,
        'updateCookieValue': updateCookieValue,
        'deleteCookie': deleteCookie,
        'parseQuerystring': parseQuerystring,
        'removeQueryParam': removeParam,
        'scrollTo': scrollTo,
        'changeZipValidation': changeZipValidation,
        'isIEBrowser': detectIE,
        'viewport': viewport,
        'showMobileView': showMobileView,
        'isIOS': isIOS
    };
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq, s7viewers*/

define('thirdPartyLoader', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {
    'use strict';

    var _defaults = {};

    var ThirdPartyLoader = function () {
    };

    /**
     * init
     * @return {[type]} [description]
     */
    ThirdPartyLoader.prototype.init = function (customOptions) {
        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);
        //console.log("thirpartyloder");
        //this.attachEvents();
    };

    ThirdPartyLoader.prototype.attachEvents = function () {
        var that = this;

        $(document).ready(function () {
            that.getScene7Video();
            that.getScene7MixedMedia();
        });
    };

    ThirdPartyLoader.prototype.getScene7Video = function () {
        $.when(
            $.getScript(API.endpoints.scene7Paths.videoViewerJS),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
        ).done(function () {

            //place your code here, the scripts are all loaded
            //console.log("scene 7 video ready");
            var videoViewer = new s7viewers.VideoViewer({
                "containerId": "s7video",
                "params": {
                    "asset": "Scene7SharedAssets/Glacier_Climber_MP4",
                    "serverurl": API.endpoints.scene7Paths.imageServerUrl,
                    "videoserverurl": API.endpoints.scene7Paths.videoServerUrl,
                    "autoplay": "true",
                    "playback": "native"
                }
            });

            videoViewer.init();

        });

    };

    ThirdPartyLoader.prototype.getScene7MixedMedia = function () {
        //console.log('scene7 mixed media');
        $.when(
            $.getScript(API.endpoints.scene7Paths.mixedMediaViewerJS),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
        ).done(function () {

            //place your code here, the scripts are all loaded
            //console.log("scene 7 mixed media ready");

            var mixedMediaViewer = new s7viewers.MixedMediaViewer({
                "containerId": "s7mixedMedia",
                "params": {
                    "asset": "Scene7SharedAssets/Mixed_Media_Set_Sample",
                    "serverurl": API.endpoints.scene7Paths.imageServerUrl,
                    "videoserverurl": API.endpoints.scene7Paths.videoServerUrl
                }
            });

            mixedMediaViewer.init();

        });
    };

    return new ThirdPartyLoader();
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, console, define, window, document, _gaq*/

define('emailUsApp', [
    'MessageBus',
    'api'
], function (MessageBus,
             API) {

    'use strict';
    // setup some defaults that we can use later
    var _defaults = {};

    var EmailUsApp = function () {

    };

    EmailUsApp.prototype.init = function (customOptions) {
        var that = this;

        // do the parsley validation
        that.attachEvents();
        that.initDropdowns();
    };

    EmailUsApp.prototype.attachEvents = function () {

        // $("#emailContactUsForm").parsley().subscribe('parsley:form:validated',function(e) {
        //     // MessageBus.trigger('emailModalSendEvent', $emailForm);
        //     e.submitEvent.preventDefault();
        //     // console.log("working submit form", e);
        // });

    };

    EmailUsApp.prototype.initDropdowns = function () {
        $("#contactSubject").customSelect();
    };


    return new EmailUsApp();
});

define('HeroCarouselView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var HeroCarouselView = Backbone.View.extend({
        'selectors': {
            'heroCarousel': '.asc-hero-carousel'
        },

        'initialize': function (options) {
            this.options = options || {};

            this.$el = $(this.selectors.heroCarousel);
            //only enable slick if there are enough items for a carousel (more than 1)
            if (this.$el.children().length > 1) {
                $(this.selectors.heroCarousel).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    speed: 500,
                    arrows: true,
                    infinite: true,
                    slide: '.asc-hero',
                    placeholders: false
                });
            }

            this.$el.find('li.asc-hero').show();
        }
    });

    return HeroCarouselView;
});
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 */

(function (window) {



// -------------------------- utils -------------------------- //

    var slice = Array.prototype.slice;

    function noop() {
    }

// -------------------------- definition -------------------------- //

    function defineBridget($) {

// bail if no jQuery
        if (!$) {
            return;
        }

// -------------------------- addOptionMethod -------------------------- //

        /**
         * adds option method -> $().plugin('option', {...})
         * @param {Function} PluginClass - constructor class
         */
        function addOptionMethod(PluginClass) {
            // don't overwrite original option method
            if (PluginClass.prototype.option) {
                return;
            }

            // option setter
            PluginClass.prototype.option = function (opts) {
                // bail out if not an object
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }


// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
        var logError = typeof console === 'undefined' ? noop :
            function (message) {
                console.error(message);
            };

        /**
         * jQuery plugin bridge, access methods like $elem.plugin('method')
         * @param {String} namespace - plugin name
         * @param {Function} PluginClass - constructor class
         */
        function bridge(namespace, PluginClass) {
            // add to jQuery fn namespace
            $.fn[namespace] = function (options) {
                if (typeof options === 'string') {
                    // call plugin method when first argument is a string
                    // get arguments for method
                    var args = slice.call(arguments, 1);

                    for (var i = 0, len = this.length; i < len; i++) {
                        var elem = this[i];
                        var instance = $.data(elem, namespace);
                        if (!instance) {
                            logError("cannot call methods on " + namespace + " prior to initialization; " +
                                "attempted to call '" + options + "'");
                            continue;
                        }
                        if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                            logError("no such method '" + options + "' for " + namespace + " instance");
                            continue;
                        }

                        // trigger method with arguments
                        var returnValue = instance[options].apply(instance, args);

                        // break look and return first value if provided
                        if (returnValue !== undefined) {
                            return returnValue;
                        }
                    }
                    // return this if no return value
                    return this;
                } else {
                    return this.each(function () {
                        var instance = $.data(this, namespace);
                        if (instance) {
                            // apply options & init
                            instance.option(options);
                            instance._init();
                        } else {
                            // initialize new instance
                            instance = new PluginClass(this, options);
                            $.data(this, namespace, instance);
                        }
                    });
                }
            };

        }

// -------------------------- bridget -------------------------- //

        /**
         * converts a Prototypical class into a proper jQuery plugin
         *   the class must have a ._init method
         * @param {String} namespace - plugin name, used in $().pluginName
         * @param {Function} PluginClass - constructor class
         */
        $.bridget = function (namespace, PluginClass) {
            addOptionMethod(PluginClass);
            bridge(namespace, PluginClass);
        };

        return $.bridget;

    }

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('jquery-bridget/jquery.bridget', ['jquery'], defineBridget);
    } else {
        // get jquery from browser global
        defineBridget(window.jQuery);
    }

})(window);

/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

(function (window) {


    var docElem = document.documentElement;

    var bind = function () {
    };

    function getIEEvent(obj) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }

    if (docElem.addEventListener) {
        bind = function (obj, type, fn) {
            obj.addEventListener(type, fn, false);
        };
    } else if (docElem.attachEvent) {
        bind = function (obj, type, fn) {
            obj[type + fn] = fn.handleEvent ?
                function () {
                    var event = getIEEvent(obj);
                    fn.handleEvent.call(fn, event);
                } :
                function () {
                    var event = getIEEvent(obj);
                    fn.call(obj, event);
                };
            obj.attachEvent("on" + type, obj[type + fn]);
        };
    }

    var unbind = function () {
    };

    if (docElem.removeEventListener) {
        unbind = function (obj, type, fn) {
            obj.removeEventListener(type, fn, false);
        };
    } else if (docElem.detachEvent) {
        unbind = function (obj, type, fn) {
            obj.detachEvent("on" + type, obj[type + fn]);
            try {
                delete obj[type + fn];
            } catch (err) {
                // can't delete window object properties
                obj[type + fn] = undefined;
            }
        };
    }

    var eventie = {
        bind: bind,
        unbind: unbind
    };

// ----- module definition ----- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('eventie/eventie', eventie);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = eventie;
    } else {
        // browser global
        window.eventie = eventie;
    }

})(this);

/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false */

(function (window) {


    var document = window.document;
// collection of functions to be triggered on ready
    var queue = [];

    function docReady(fn) {
        // throw out non-functions
        if (typeof fn !== 'function') {
            return;
        }

        if (docReady.isReady) {
            // ready now, hit it
            fn();
        } else {
            // queue function when ready
            queue.push(fn);
        }
    }

    docReady.isReady = false;

// triggered on various doc ready events
    function init(event) {
        // bail if IE8 document is not ready just yet
        var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
        if (docReady.isReady || isIE8NotReady) {
            return;
        }
        docReady.isReady = true;

        // process queue
        for (var i = 0, len = queue.length; i < len; i++) {
            var fn = queue[i];
            fn();
        }
    }

    function defineDocReady(eventie) {
        eventie.bind(document, 'DOMContentLoaded', init);
        eventie.bind(document, 'readystatechange', init);
        eventie.bind(window, 'load', init);

        return docReady;
    }

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        // if RequireJS, then doc is already ready
        docReady.isReady = typeof requirejs === 'function';
        define('doc-ready/doc-ready', ['eventie/eventie'], defineDocReady);
    } else {
        // browser global
        window.docReady = defineDocReady(window.eventie);
    }

})(this);

/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {


    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {
    }

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in it's storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after it's first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of it's properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter', [], function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = EventEmitter;
    }
    else {
        this.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

(function (window) {


    var prefixes = 'Webkit Moz ms Ms O'.split(' ');
    var docElemStyle = document.documentElement.style;

    function getStyleProperty(propName) {
        if (!propName) {
            return;
        }

        // test standard property first
        if (typeof docElemStyle[propName] === 'string') {
            return propName;
        }

        // capitalize
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);

        // test vendor specific properties
        var prefixed;
        for (var i = 0, len = prefixes.length; i < len; i++) {
            prefixed = prefixes[i] + propName;
            if (typeof docElemStyle[prefixed] === 'string') {
                return prefixed;
            }
        }
    }

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('get-style-property/get-style-property', [], function () {
            return getStyleProperty;
        });
    } else if (typeof exports === 'object') {
        // CommonJS for Component
        module.exports = getStyleProperty;
    } else {
        // browser global
        window.getStyleProperty = getStyleProperty;
    }

})(window);

/**
 * getSize v1.1.7
 * measure size of elements
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false */

(function (window, undefined) {



// -------------------------- helpers -------------------------- //

    var getComputedStyle = window.getComputedStyle;
    var getStyle = getComputedStyle ?
        function (elem) {
            return getComputedStyle(elem, null);
        } :
        function (elem) {
            return elem.currentStyle;
        };

// get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') === -1 && !isNaN(num);
        return isValid && num;
    }

// -------------------------- measurements -------------------------- //

    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0, len = measurements.length; i < len; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }


    function defineGetSize(getStyleProperty) {

// -------------------------- box sizing -------------------------- //

        var boxSizingProp = getStyleProperty('boxSizing');
        var isBoxSizeOuter;

        /**
         * WebKit measures the outer-width on style.width on border-box elems
         * IE & Firefox measures the inner-width
         */
        (function () {
            if (!boxSizingProp) {
                return;
            }

            var div = document.createElement('div');
            div.style.width = '200px';
            div.style.padding = '1px 2px 3px 4px';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px 2px 3px 4px';
            div.style[boxSizingProp] = 'border-box';

            var body = document.body || document.documentElement;
            body.appendChild(div);
            var style = getStyle(div);

            isBoxSizeOuter = getStyleSize(style.width) === 200;
            body.removeChild(div);
        })();


// -------------------------- getSize -------------------------- //

        function getSize(elem) {
            // use querySeletor if elem is string
            if (typeof elem === 'string') {
                elem = document.querySelector(elem);
            }

            // do not proceed on non-objects
            if (!elem || typeof elem !== 'object' || !elem.nodeType) {
                return;
            }

            var style = getStyle(elem);

            // if hidden, everything is 0
            if (style.display === 'none') {
                return getZeroSize();
            }

            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;

            var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
            style[boxSizingProp] && style[boxSizingProp] === 'border-box' );

            // get all measurements
            for (var i = 0, len = measurements.length; i < len; i++) {
                var measurement = measurements[i];
                var value = style[measurement];
                value = mungeNonPixel(elem, value);
                var num = parseFloat(value);
                // any 'auto', 'medium' value will be 0
                size[measurement] = !isNaN(num) ? num : 0;
            }

            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;

            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

            // overwrite width and height if we can get it from style
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== false) {
                size.width = styleWidth +
                        // add padding and border unless it's already including it
                    ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
            }

            var styleHeight = getStyleSize(style.height);
            if (styleHeight !== false) {
                size.height = styleHeight +
                        // add padding and border unless it's already including it
                    ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
            }

            size.innerWidth = size.width - ( paddingWidth + borderWidth );
            size.innerHeight = size.height - ( paddingHeight + borderHeight );

            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;

            return size;
        }

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
        function mungeNonPixel(elem, value) {
            // IE8 and has percent value
            if (getComputedStyle || value.indexOf('%') === -1) {
                return value;
            }
            var style = elem.style;
            // Remember the original values
            var left = style.left;
            var rs = elem.runtimeStyle;
            var rsLeft = rs && rs.left;

            // Put in the new values to get a computed value out
            if (rsLeft) {
                rs.left = elem.currentStyle.left;
            }
            style.left = value;
            value = style.pixelLeft;

            // Revert the changed values
            style.left = left;
            if (rsLeft) {
                rs.left = rsLeft;
            }

            return value;
        }

        return getSize;

    }

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD for RequireJS
        define('get-size/get-size', ['get-style-property/get-style-property'], defineGetSize);
    } else if (typeof exports === 'object') {
        // CommonJS for Component
        module.exports = defineGetSize(require('get-style-property'));
    } else {
        // browser global
        window.getSize = defineGetSize(window.getStyleProperty);
    }

})(window);

/**
 * matchesSelector helper v1.0.1
 *
 * @name matchesSelector
 *   @param {Element} elem
 *   @param {String} selector
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false */

(function (global, ElemProto) {


    var matchesMethod = (function () {
        // check un-prefixed
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        // check vendor prefixes
        var prefixes = ['webkit', 'moz', 'ms', 'o'];

        for (var i = 0, len = prefixes.length; i < len; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    })();

    // ----- match ----- //

    function match(elem, selector) {
        return elem[matchesMethod](selector);
    }

    // ----- appendToFragment ----- //

    function checkParent(elem) {
        // not needed if already has parent
        if (elem.parentNode) {
            return;
        }
        var fragment = document.createDocumentFragment();
        fragment.appendChild(elem);
    }

    // ----- query ----- //

    // fall back to using QSA
    // thx @jonathantneal https://gist.github.com/3062955
    function query(elem, selector) {
        // append to fragment if no parent
        checkParent(elem);

        // match elem with all selected elems of parent
        var elems = elem.parentNode.querySelectorAll(selector);
        for (var i = 0, len = elems.length; i < len; i++) {
            // return true if match
            if (elems[i] === elem) {
                return true;
            }
        }
        // otherwise return false
        return false;
    }

    // ----- matchChild ----- //

    function matchChild(elem, selector) {
        checkParent(elem);
        return match(elem, selector);
    }

    // ----- matchesSelector ----- //

    var matchesSelector;

    if (matchesMethod) {
        // IE9 supports matchesSelector, but doesn't work on orphaned elems
        // check for that
        var div = document.createElement('div');
        var supportsOrphans = match(div, 'div');
        matchesSelector = supportsOrphans ? match : matchChild;
    } else {
        matchesSelector = query;
    }

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('matches-selector/matches-selector', [], function () {
            return matchesSelector;
        });
    } else {
        // browser global
        window.matchesSelector = matchesSelector;
    }

})(this, Element.prototype);

/**
 * Outlayer Item
 */

(function (window) {



// ----- get style ----- //

    var getComputedStyle = window.getComputedStyle;
    var getStyle = getComputedStyle ?
        function (elem) {
            return getComputedStyle(elem, null);
        } :
        function (elem) {
            return elem.currentStyle;
        };


// extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }

    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    function toDash(str) {
        return str.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
        });
    }

// -------------------------- Outlayer definition -------------------------- //

    function outlayerItemDefinition(EventEmitter, getSize, getStyleProperty) {

// -------------------------- CSS3 support -------------------------- //

        var transitionProperty = getStyleProperty('transition');
        var transformProperty = getStyleProperty('transform');
        var supportsCSS3 = transitionProperty && transformProperty;
        var is3d = !!getStyleProperty('perspective');

        var transitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'otransitionend',
            transition: 'transitionend'
        }[transitionProperty];

// properties that could have vendor prefix
        var prefixableProperties = [
            'transform',
            'transition',
            'transitionDuration',
            'transitionProperty'
        ];

// cache all vendor properties
        var vendorProperties = (function () {
            var cache = {};
            for (var i = 0, len = prefixableProperties.length; i < len; i++) {
                var prop = prefixableProperties[i];
                var supportedProp = getStyleProperty(prop);
                if (supportedProp && supportedProp !== prop) {
                    cache[prop] = supportedProp;
                }
            }
            return cache;
        })();

// -------------------------- Item -------------------------- //

        function Item(element, layout) {
            if (!element) {
                return;
            }

            this.element = element;
            // parent layout class, i.e. Masonry, Isotope, or Packery
            this.layout = layout;
            this.position = {
                x: 0,
                y: 0
            };

            this._create();
        }

// inherit EventEmitter
        extend(Item.prototype, EventEmitter.prototype);

        Item.prototype._create = function () {
            // transition objects
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            };

            this.css({
                position: 'absolute'
            });
        };

// trigger specified handler for event type
        Item.prototype.handleEvent = function (event) {
            var method = 'on' + event.type;
            if (this[method]) {
                this[method](event);
            }
        };

        Item.prototype.getSize = function () {
            this.size = getSize(this.element);
        };

        /**
         * apply CSS styles to element
         * @param {Object} style
         */
        Item.prototype.css = function (style) {
            var elemStyle = this.element.style;

            for (var prop in style) {
                // use vendor property if available
                var supportedProp = vendorProperties[prop] || prop;
                elemStyle[supportedProp] = style[prop];
            }
        };

        // measure position, and sets it
        Item.prototype.getPosition = function () {
            var style = getStyle(this.element);
            var layoutOptions = this.layout.options;
            var isOriginLeft = layoutOptions.isOriginLeft;
            var isOriginTop = layoutOptions.isOriginTop;
            var x = parseInt(style[isOriginLeft ? 'left' : 'right'], 10);
            var y = parseInt(style[isOriginTop ? 'top' : 'bottom'], 10);

            // clean up 'auto' or other non-integer values
            x = isNaN(x) ? 0 : x;
            y = isNaN(y) ? 0 : y;
            // remove padding from measurement
            var layoutSize = this.layout.size;
            x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
            y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

            this.position.x = x;
            this.position.y = y;
        };

// set settled position, apply padding
        Item.prototype.layoutPosition = function () {
            var layoutSize = this.layout.size;
            var layoutOptions = this.layout.options;
            var style = {};

            if (layoutOptions.isOriginLeft) {
                style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
                // reset other property
                style.right = '';
            } else {
                style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
                style.left = '';
            }

            if (layoutOptions.isOriginTop) {
                style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
                style.bottom = '';
            } else {
                style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
                style.top = '';
            }

            this.css(style);
            this.emitEvent('layout', [this]);
        };


// transform translate function
        var translate = is3d ?
            function (x, y) {
                return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            } :
            function (x, y) {
                return 'translate(' + x + 'px, ' + y + 'px)';
            };


        Item.prototype._transitionTo = function (x, y) {
            this.getPosition();
            // get current x & y from top/left
            var curX = this.position.x;
            var curY = this.position.y;

            var compareX = parseInt(x, 10);
            var compareY = parseInt(y, 10);
            var didNotMove = compareX === this.position.x && compareY === this.position.y;

            // save end position
            this.setPosition(x, y);

            // if did not move and not transitioning, just go to layout
            if (didNotMove && !this.isTransitioning) {
                this.layoutPosition();
                return;
            }

            var transX = x - curX;
            var transY = y - curY;
            var transitionStyle = {};
            // flip cooridinates if origin on right or bottom
            var layoutOptions = this.layout.options;
            transX = layoutOptions.isOriginLeft ? transX : -transX;
            transY = layoutOptions.isOriginTop ? transY : -transY;
            transitionStyle.transform = translate(transX, transY);

            this.transition({
                to: transitionStyle,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: true
            });
        };

// non transition + transform support
        Item.prototype.goTo = function (x, y) {
            this.setPosition(x, y);
            this.layoutPosition();
        };

// use transition and transforms if supported
        Item.prototype.moveTo = supportsCSS3 ?
            Item.prototype._transitionTo : Item.prototype.goTo;

        Item.prototype.setPosition = function (x, y) {
            this.position.x = parseInt(x, 10);
            this.position.y = parseInt(y, 10);
        };

// ----- transition ----- //

        /**
         * @param {Object} style - CSS
         * @param {Function} onTransitionEnd
         */

// non transition, just trigger callback
        Item.prototype._nonTransition = function (args) {
            this.css(args.to);
            if (args.isCleaning) {
                this._removeStyles(args.to);
            }
            for (var prop in args.onTransitionEnd) {
                args.onTransitionEnd[prop].call(this);
            }
        };

        /**
         * proper transition
         * @param {Object} args - arguments
         *   @param {Object} to - style to transition to
         *   @param {Object} from - style to start transition from
         *   @param {Boolean} isCleaning - removes transition styles after transition
         *   @param {Function} onTransitionEnd - callback
         */
        Item.prototype._transition = function (args) {
            // redirect to nonTransition if no transition duration
            if (!parseFloat(this.layout.options.transitionDuration)) {
                this._nonTransition(args);
                return;
            }

            var _transition = this._transn;
            // keep track of onTransitionEnd callback by css property
            for (var prop in args.onTransitionEnd) {
                _transition.onEnd[prop] = args.onTransitionEnd[prop];
            }
            // keep track of properties that are transitioning
            for (prop in args.to) {
                _transition.ingProperties[prop] = true;
                // keep track of properties to clean up when transition is done
                if (args.isCleaning) {
                    _transition.clean[prop] = true;
                }
            }

            // set from styles
            if (args.from) {
                this.css(args.from);
                // force redraw. http://blog.alexmaccaw.com/css-transitions
                var h = this.element.offsetHeight;
                // hack for JSHint to hush about unused var
                h = null;
            }
            // enable transition
            this.enableTransition(args.to);
            // set styles that are transitioning
            this.css(args.to);

            this.isTransitioning = true;

        };

        var itemTransitionProperties = transformProperty && ( toDash(transformProperty) +
            ',opacity' );

        Item.prototype.enableTransition = function (/* style */) {
            // only enable if not already transitioning
            // bug in IE10 were re-setting transition style will prevent
            // transitionend event from triggering
            if (this.isTransitioning) {
                return;
            }

            // make transition: foo, bar, baz from style object
            // TODO uncomment this bit when IE10 bug is resolved
            // var transitionValue = [];
            // for ( var prop in style ) {
            //   // dash-ify camelCased properties like WebkitTransition
            //   transitionValue.push( toDash( prop ) );
            // }
            // enable transition styles
            // HACK always enable transform,opacity for IE10
            this.css({
                transitionProperty: itemTransitionProperties,
                transitionDuration: this.layout.options.transitionDuration
            });
            // listen for transition end event
            this.element.addEventListener(transitionEndEvent, this, false);
        };

        Item.prototype.transition = Item.prototype[transitionProperty ? '_transition' : '_nonTransition'];

// ----- events ----- //

        Item.prototype.onwebkitTransitionEnd = function (event) {
            this.ontransitionend(event);
        };

        Item.prototype.onotransitionend = function (event) {
            this.ontransitionend(event);
        };

// properties that I munge to make my life easier
        var dashedVendorProperties = {
            '-webkit-transform': 'transform',
            '-moz-transform': 'transform',
            '-o-transform': 'transform'
        };

        Item.prototype.ontransitionend = function (event) {
            // disregard bubbled events from children
            if (event.target !== this.element) {
                return;
            }
            var _transition = this._transn;
            // get property name of transitioned property, convert to prefix-free
            var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

            // remove property that has completed transitioning
            delete _transition.ingProperties[propertyName];
            // check if any properties are still transitioning
            if (isEmptyObj(_transition.ingProperties)) {
                // all properties have completed transitioning
                this.disableTransition();
            }
            // clean style
            if (propertyName in _transition.clean) {
                // clean up style
                this.element.style[event.propertyName] = '';
                delete _transition.clean[propertyName];
            }
            // trigger onTransitionEnd callback
            if (propertyName in _transition.onEnd) {
                var onTransitionEnd = _transition.onEnd[propertyName];
                onTransitionEnd.call(this);
                delete _transition.onEnd[propertyName];
            }

            this.emitEvent('transitionEnd', [this]);
        };

        Item.prototype.disableTransition = function () {
            this.removeTransitionStyles();
            this.element.removeEventListener(transitionEndEvent, this, false);
            this.isTransitioning = false;
        };

        /**
         * removes style property from element
         * @param {Object} style
         **/
        Item.prototype._removeStyles = function (style) {
            // clean up transition styles
            var cleanStyle = {};
            for (var prop in style) {
                cleanStyle[prop] = '';
            }
            this.css(cleanStyle);
        };

        var cleanTransitionStyle = {
            transitionProperty: '',
            transitionDuration: ''
        };

        Item.prototype.removeTransitionStyles = function () {
            // remove transition
            this.css(cleanTransitionStyle);
        };

// ----- show/hide/remove ----- //

// remove element from DOM
        Item.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element);
            this.emitEvent('remove', [this]);
        };

        Item.prototype.remove = function () {
            // just remove element if no transition support or no transition
            if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
                this.removeElem();
                return;
            }

            // start transition
            var _this = this;
            this.on('transitionEnd', function () {
                _this.removeElem();
                return true; // bind once
            });
            this.hide();
        };

        Item.prototype.reveal = function () {
            delete this.isHidden;
            // remove display: none
            this.css({display: ''});

            var options = this.layout.options;
            this.transition({
                from: options.hiddenStyle,
                to: options.visibleStyle,
                isCleaning: true
            });
        };

        Item.prototype.hide = function () {
            // set flag
            this.isHidden = true;
            // remove display: none
            this.css({display: ''});

            var options = this.layout.options;
            this.transition({
                from: options.visibleStyle,
                to: options.hiddenStyle,
                // keep hidden stuff hidden
                isCleaning: true,
                onTransitionEnd: {
                    opacity: function () {
                        // check if still hidden
                        // during transition, item may have been un-hidden
                        if (this.isHidden) {
                            this.css({display: 'none'});
                        }
                    }
                }
            });
        };

        Item.prototype.destroy = function () {
            this.css({
                position: '',
                left: '',
                right: '',
                top: '',
                bottom: '',
                transition: '',
                transform: ''
            });
        };

        return Item;

    }

// -------------------------- transport -------------------------- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('outlayer/item', [
                'eventEmitter/EventEmitter',
                'get-size/get-size',
                'get-style-property/get-style-property'
            ],
            outlayerItemDefinition);
    } else {
        // browser global
        window.Outlayer = {};
        window.Outlayer.Item = outlayerItemDefinition(
            window.EventEmitter,
            window.getSize,
            window.getStyleProperty
        );
    }

})(window);

/*!
 * Outlayer v1.2.0
 * the brains and guts of a layout library
 * MIT license
 */

(function (window) {



// ----- vars ----- //

    var document = window.document;
    var console = window.console;
    var jQuery = window.jQuery;

    var noop = function () {
    };

// -------------------------- helpers -------------------------- //

// extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }


    var objToString = Object.prototype.toString;

    function isArray(obj) {
        return objToString.call(obj) === '[object Array]';
    }

// turn element or nodeList into an array
    function makeArray(obj) {
        var ary = [];
        if (isArray(obj)) {
            // use object if already an array
            ary = obj;
        } else if (obj && typeof obj.length === 'number') {
            // convert nodeList to array
            for (var i = 0, len = obj.length; i < len; i++) {
                ary.push(obj[i]);
            }
        } else {
            // array of single index
            ary.push(obj);
        }
        return ary;
    }

// http://stackoverflow.com/a/384380/182183
    var isElement = ( typeof HTMLElement === 'object' ) ?
        function isElementDOM2(obj) {
            return obj instanceof HTMLElement;
        } :
        function isElementQuirky(obj) {
            return obj && typeof obj === 'object' &&
                obj.nodeType === 1 && typeof obj.nodeName === 'string';
        };

// index of helper cause IE8
    var indexOf = Array.prototype.indexOf ? function (ary, obj) {
        return ary.indexOf(obj);
    } : function (ary, obj) {
        for (var i = 0, len = ary.length; i < len; i++) {
            if (ary[i] === obj) {
                return i;
            }
        }
        return -1;
    };

    function removeFrom(obj, ary) {
        var index = indexOf(ary, obj);
        if (index !== -1) {
            ary.splice(index, 1);
        }
    }

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    function toDashed(str) {
        return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    }


    function outlayerDefinition(eventie, docReady, EventEmitter, getSize, matchesSelector, Item) {

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
        var GUID = 0;
// internal store of all Outlayer intances
        var instances = {};


        /**
         * @param {Element, String} element
         * @param {Object} options
         * @constructor
         */
        function Outlayer(element, options) {
            // use element as selector string
            if (typeof element === 'string') {
                element = document.querySelector(element);
            }

            // bail out if not proper element
            if (!element || !isElement(element)) {
                if (console) {
                    console.error('Bad ' + this.constructor.namespace + ' element: ' + element);
                }
                return;
            }

            this.element = element;

            // options
            this.options = extend({}, this.constructor.defaults);
            this.option(options);

            // add id for Outlayer.getFromElement
            var id = ++GUID;
            this.element.outlayerGUID = id; // expando
            instances[id] = this; // associate via id

            // kick it off
            this._create();

            if (this.options.isInitLayout) {
                this.layout();
            }
        }

// settings are for internal use only
        Outlayer.namespace = 'outlayer';
        Outlayer.Item = Item;

// default options
        Outlayer.defaults = {
            containerStyle: {
                position: 'relative'
            },
            isInitLayout: true,
            isOriginLeft: true,
            isOriginTop: true,
            isResizeBound: true,
            isResizingContainer: true,
            // item options
            transitionDuration: '0.4s',
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            }
        };

// inherit EventEmitter
        extend(Outlayer.prototype, EventEmitter.prototype);

        /**
         * set options
         * @param {Object} opts
         */
        Outlayer.prototype.option = function (opts) {
            extend(this.options, opts);
        };

        Outlayer.prototype._create = function () {
            // get items from children
            this.reloadItems();
            // elements that affect layout, but are not laid out
            this.stamps = [];
            this.stamp(this.options.stamp);
            // set container style
            extend(this.element.style, this.options.containerStyle);

            // bind resize method
            if (this.options.isResizeBound) {
                this.bindResize();
            }
        };

// goes through all children again and gets bricks in proper order
        Outlayer.prototype.reloadItems = function () {
            // collection of item elements
            this.items = this._itemize(this.element.children);
        };


        /**
         * turn elements into Outlayer.Items to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - collection of new Outlayer Items
         */
        Outlayer.prototype._itemize = function (elems) {

            var itemElems = this._filterFindItemElements(elems);
            var Item = this.constructor.Item;

            // create new Outlayer Items for collection
            var items = [];
            for (var i = 0, len = itemElems.length; i < len; i++) {
                var elem = itemElems[i];
                var item = new Item(elem, this);
                items.push(item);
            }

            return items;
        };

        /**
         * get item elements to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - item elements
         */
        Outlayer.prototype._filterFindItemElements = function (elems) {
            // make array of elems
            elems = makeArray(elems);
            var itemSelector = this.options.itemSelector;
            var itemElems = [];

            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                // check that elem is an actual element
                if (!isElement(elem)) {
                    continue;
                }
                // filter & find items if we have an item selector
                if (itemSelector) {
                    // filter siblings
                    if (matchesSelector(elem, itemSelector)) {
                        itemElems.push(elem);
                    }
                    // find children
                    var childElems = elem.querySelectorAll(itemSelector);
                    // concat childElems to filterFound array
                    for (var j = 0, jLen = childElems.length; j < jLen; j++) {
                        itemElems.push(childElems[j]);
                    }
                } else {
                    itemElems.push(elem);
                }
            }

            return itemElems;
        };

        /**
         * getter method for getting item elements
         * @returns {Array} elems - collection of item elements
         */
        Outlayer.prototype.getItemElements = function () {
            var elems = [];
            for (var i = 0, len = this.items.length; i < len; i++) {
                elems.push(this.items[i].element);
            }
            return elems;
        };

// ----- init & layout ----- //

        /**
         * lays out all items
         */
        Outlayer.prototype.layout = function () {
            this._resetLayout();
            this._manageStamps();

            // don't animate first layout
            var isInstant = this.options.isLayoutInstant !== undefined ?
                this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, isInstant);

            // flag for initalized
            this._isLayoutInited = true;
        };

// _init is alias for layout
        Outlayer.prototype._init = Outlayer.prototype.layout;

        /**
         * logic before any new layout
         */
        Outlayer.prototype._resetLayout = function () {
            this.getSize();
        };


        Outlayer.prototype.getSize = function () {
            this.size = getSize(this.element);
        };

        /**
         * get measurement from option, for columnWidth, rowHeight, gutter
         * if option is String -> get element from selector string, & get size of element
         * if option is Element -> get size of element
         * else use option as a number
         *
         * @param {String} measurement
         * @param {String} size - width or height
         * @private
         */
        Outlayer.prototype._getMeasurement = function (measurement, size) {
            var option = this.options[measurement];
            var elem;
            if (!option) {
                // default to 0
                this[measurement] = 0;
            } else {
                // use option as an element
                if (typeof option === 'string') {
                    elem = this.element.querySelector(option);
                } else if (isElement(option)) {
                    elem = option;
                }
                // use size of element, if element
                this[measurement] = elem ? getSize(elem)[size] : option;
            }
        };

        /**
         * layout a collection of item elements
         * @api public
         */
        Outlayer.prototype.layoutItems = function (items, isInstant) {
            items = this._getItemsForLayout(items);

            this._layoutItems(items, isInstant);

            this._postLayout();
        };

        /**
         * get the items to be laid out
         * you may want to skip over some items
         * @param {Array} items
         * @returns {Array} items
         */
        Outlayer.prototype._getItemsForLayout = function (items) {
            var layoutItems = [];
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                if (!item.isIgnored) {
                    layoutItems.push(item);
                }
            }
            return layoutItems;
        };

        /**
         * layout items
         * @param {Array} items
         * @param {Boolean} isInstant
         */
        Outlayer.prototype._layoutItems = function (items, isInstant) {
            var _this = this;

            function onItemsLayout() {
                _this.emitEvent('layoutComplete', [_this, items]);
            }

            if (!items || !items.length) {
                // no items, emit event with empty array
                onItemsLayout();
                return;
            }

            // emit layoutComplete when done
            this._itemsOn(items, 'layout', onItemsLayout);

            var queue = [];

            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                // get x/y object from method
                var position = this._getItemLayoutPosition(item);
                // enqueue
                position.item = item;
                position.isInstant = isInstant || item.isLayoutInstant;
                queue.push(position);
            }

            this._processLayoutQueue(queue);
        };

        /**
         * get item layout position
         * @param {Outlayer.Item} item
         * @returns {Object} x and y position
         */
        Outlayer.prototype._getItemLayoutPosition = function (/* item */) {
            return {
                x: 0,
                y: 0
            };
        };

        /**
         * iterate over array and position each item
         * Reason being - separating this logic prevents 'layout invalidation'
         * thx @paul_irish
         * @param {Array} queue
         */
        Outlayer.prototype._processLayoutQueue = function (queue) {
            for (var i = 0, len = queue.length; i < len; i++) {
                var obj = queue[i];
                this._positionItem(obj.item, obj.x, obj.y, obj.isInstant);
            }
        };

        /**
         * Sets position of item in DOM
         * @param {Outlayer.Item} item
         * @param {Number} x - horizontal position
         * @param {Number} y - vertical position
         * @param {Boolean} isInstant - disables transitions
         */
        Outlayer.prototype._positionItem = function (item, x, y, isInstant) {
            if (isInstant) {
                // if not transition, just set CSS
                item.goTo(x, y);
            } else {
                item.moveTo(x, y);
            }
        };

        /**
         * Any logic you want to do after each layout,
         * i.e. size the container
         */
        Outlayer.prototype._postLayout = function () {
            this.resizeContainer();
        };

        Outlayer.prototype.resizeContainer = function () {
            if (!this.options.isResizingContainer) {
                return;
            }
            var size = this._getContainerSize();
            if (size) {
                this._setContainerMeasure(size.width, true);
                this._setContainerMeasure(size.height, false);
            }
        };

        /**
         * Sets width or height of container if returned
         * @returns {Object} size
         *   @param {Number} width
         *   @param {Number} height
         */
        Outlayer.prototype._getContainerSize = noop;

        /**
         * @param {Number} measure - size of width or height
         * @param {Boolean} isWidth
         */
        Outlayer.prototype._setContainerMeasure = function (measure, isWidth) {
            if (measure === undefined) {
                return;
            }

            var elemSize = this.size;
            // add padding and border width if border box
            if (elemSize.isBorderBox) {
                measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth :
                elemSize.paddingBottom + elemSize.paddingTop +
                elemSize.borderTopWidth + elemSize.borderBottomWidth;
            }

            measure = Math.max(measure, 0);
            this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
        };

        /**
         * trigger a callback for a collection of items events
         * @param {Array} items - Outlayer.Items
         * @param {String} eventName
         * @param {Function} callback
         */
        Outlayer.prototype._itemsOn = function (items, eventName, callback) {
            var doneCount = 0;
            var count = items.length;
            // event callback
            var _this = this;

            function tick() {
                doneCount++;
                if (doneCount === count) {
                    callback.call(_this);
                }
                return true; // bind once
            }

            // bind callback
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                item.on(eventName, tick);
            }
        };

// -------------------------- ignore & stamps -------------------------- //


        /**
         * keep item in collection, but do not lay it out
         * ignored items do not get skipped in layout
         * @param {Element} elem
         */
        Outlayer.prototype.ignore = function (elem) {
            var item = this.getItem(elem);
            if (item) {
                item.isIgnored = true;
            }
        };

        /**
         * return item to layout collection
         * @param {Element} elem
         */
        Outlayer.prototype.unignore = function (elem) {
            var item = this.getItem(elem);
            if (item) {
                delete item.isIgnored;
            }
        };

        /**
         * adds elements to stamps
         * @param {NodeList, Array, Element, or String} elems
         */
        Outlayer.prototype.stamp = function (elems) {
            elems = this._find(elems);
            if (!elems) {
                return;
            }

            this.stamps = this.stamps.concat(elems);
            // ignore
            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                this.ignore(elem);
            }
        };

        /**
         * removes elements to stamps
         * @param {NodeList, Array, or Element} elems
         */
        Outlayer.prototype.unstamp = function (elems) {
            elems = this._find(elems);
            if (!elems) {
                return;
            }

            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                // filter out removed stamp elements
                removeFrom(elem, this.stamps);
                this.unignore(elem);
            }

        };

        /**
         * finds child elements
         * @param {NodeList, Array, Element, or String} elems
         * @returns {Array} elems
         */
        Outlayer.prototype._find = function (elems) {
            if (!elems) {
                return;
            }
            // if string, use argument as selector string
            if (typeof elems === 'string') {
                elems = this.element.querySelectorAll(elems);
            }
            elems = makeArray(elems);
            return elems;
        };

        Outlayer.prototype._manageStamps = function () {
            if (!this.stamps || !this.stamps.length) {
                return;
            }

            this._getBoundingRect();

            for (var i = 0, len = this.stamps.length; i < len; i++) {
                var stamp = this.stamps[i];
                this._manageStamp(stamp);
            }
        };

// update boundingLeft / Top
        Outlayer.prototype._getBoundingRect = function () {
            // get bounding rect for container element
            var boundingRect = this.element.getBoundingClientRect();
            var size = this.size;
            this._boundingRect = {
                left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
                top: boundingRect.top + size.paddingTop + size.borderTopWidth,
                right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
                bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
            };
        };

        /**
         * @param {Element} stamp
         **/
        Outlayer.prototype._manageStamp = noop;

        /**
         * get x/y position of element relative to container element
         * @param {Element} elem
         * @returns {Object} offset - has left, top, right, bottom
         */
        Outlayer.prototype._getElementOffset = function (elem) {
            var boundingRect = elem.getBoundingClientRect();
            var thisRect = this._boundingRect;
            var size = getSize(elem);
            var offset = {
                left: boundingRect.left - thisRect.left - size.marginLeft,
                top: boundingRect.top - thisRect.top - size.marginTop,
                right: thisRect.right - boundingRect.right - size.marginRight,
                bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
            };
            return offset;
        };

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
        Outlayer.prototype.handleEvent = function (event) {
            var method = 'on' + event.type;
            if (this[method]) {
                this[method](event);
            }
        };

        /**
         * Bind layout to window resizing
         */
        Outlayer.prototype.bindResize = function () {
            // bind just one listener
            if (this.isResizeBound) {
                return;
            }
            eventie.bind(window, 'resize', this);
            this.isResizeBound = true;
        };

        /**
         * Unbind layout to window resizing
         */
        Outlayer.prototype.unbindResize = function () {
            if (this.isResizeBound) {
                eventie.unbind(window, 'resize', this);
            }
            this.isResizeBound = false;
        };

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
        Outlayer.prototype.onresize = function () {
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
            }

            var _this = this;

            function delayed() {
                _this.resize();
                delete _this.resizeTimeout;
            }

            this.resizeTimeout = setTimeout(delayed, 100);
        };

// debounced, layout on resize
        Outlayer.prototype.resize = function () {
            // don't trigger if size did not change
            // or if resize was unbound. See #9
            if (!this.isResizeBound || !this.needsResizeLayout()) {
                return;
            }

            this.layout();
        };

        /**
         * check if layout is needed post layout
         * @returns Boolean
         */
        Outlayer.prototype.needsResizeLayout = function () {
            var size = getSize(this.element);
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var hasSizes = this.size && size;
            return hasSizes && size.innerWidth !== this.size.innerWidth;
        };

// -------------------------- methods -------------------------- //

        /**
         * add items to Outlayer instance
         * @param {Array or NodeList or Element} elems
         * @returns {Array} items - Outlayer.Items
         **/
        Outlayer.prototype.addItems = function (elems) {
            var items = this._itemize(elems);
            // add items to collection
            if (items.length) {
                this.items = this.items.concat(items);
            }
            return items;
        };

        /**
         * Layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */
        Outlayer.prototype.appended = function (elems) {
            var items = this.addItems(elems);
            if (!items.length) {
                return;
            }
            // layout and reveal just the new items
            this.layoutItems(items, true);
            this.reveal(items);
        };

        /**
         * Layout prepended elements
         * @param {Array or NodeList or Element} elems
         */
        Outlayer.prototype.prepended = function (elems) {
            var items = this._itemize(elems);
            if (!items.length) {
                return;
            }
            // add items to beginning of collection
            var previousItems = this.items.slice(0);
            this.items = items.concat(previousItems);
            // start new layout
            this._resetLayout();
            this._manageStamps();
            // layout new stuff without transition
            this.layoutItems(items, true);
            this.reveal(items);
            // layout previous items
            this.layoutItems(previousItems);
        };

        /**
         * reveal a collection of items
         * @param {Array of Outlayer.Items} items
         */
        Outlayer.prototype.reveal = function (items) {
            var len = items && items.length;
            if (!len) {
                return;
            }
            for (var i = 0; i < len; i++) {
                var item = items[i];
                item.reveal();
            }
        };

        /**
         * hide a collection of items
         * @param {Array of Outlayer.Items} items
         */
        Outlayer.prototype.hide = function (items) {
            var len = items && items.length;
            if (!len) {
                return;
            }
            for (var i = 0; i < len; i++) {
                var item = items[i];
                item.hide();
            }
        };

        /**
         * get Outlayer.Item, given an Element
         * @param {Element} elem
         * @param {Function} callback
         * @returns {Outlayer.Item} item
         */
        Outlayer.prototype.getItem = function (elem) {
            // loop through items to get the one that matches
            for (var i = 0, len = this.items.length; i < len; i++) {
                var item = this.items[i];
                if (item.element === elem) {
                    // return item
                    return item;
                }
            }
        };

        /**
         * get collection of Outlayer.Items, given Elements
         * @param {Array} elems
         * @returns {Array} items - Outlayer.Items
         */
        Outlayer.prototype.getItems = function (elems) {
            if (!elems || !elems.length) {
                return;
            }
            var items = [];
            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                var item = this.getItem(elem);
                if (item) {
                    items.push(item);
                }
            }

            return items;
        };

        /**
         * remove element(s) from instance and DOM
         * @param {Array or NodeList or Element} elems
         */
        Outlayer.prototype.remove = function (elems) {
            elems = makeArray(elems);

            var removeItems = this.getItems(elems);
            // bail if no items to remove
            if (!removeItems || !removeItems.length) {
                return;
            }

            this._itemsOn(removeItems, 'remove', function () {
                this.emitEvent('removeComplete', [this, removeItems]);
            });

            for (var i = 0, len = removeItems.length; i < len; i++) {
                var item = removeItems[i];
                item.remove();
                // remove item from collection
                removeFrom(item, this.items);
            }
        };

// ----- destroy ----- //

// remove and disable Outlayer instance
        Outlayer.prototype.destroy = function () {
            // clean up dynamic styles
            var style = this.element.style;
            style.height = '';
            style.position = '';
            style.width = '';
            // destroy items
            for (var i = 0, len = this.items.length; i < len; i++) {
                var item = this.items[i];
                item.destroy();
            }

            this.unbindResize();

            delete this.element.outlayerGUID;
            // remove data for jQuery
            if (jQuery) {
                jQuery.removeData(this.element, this.constructor.namespace);
            }

        };

// -------------------------- data -------------------------- //

        /**
         * get Outlayer instance from element
         * @param {Element} elem
         * @returns {Outlayer}
         */
        Outlayer.data = function (elem) {
            var id = elem && elem.outlayerGUID;
            return id && instances[id];
        };


// -------------------------- create Outlayer class -------------------------- //

        /**
         * create a layout class
         * @param {String} namespace
         */
        Outlayer.create = function (namespace, options) {
            // sub-class Outlayer
            function Layout() {
                Outlayer.apply(this, arguments);
            }

            // inherit Outlayer prototype, use Object.create if there
            if (Object.create) {
                Layout.prototype = Object.create(Outlayer.prototype);
            } else {
                extend(Layout.prototype, Outlayer.prototype);
            }
            // set contructor, used for namespace and Item
            Layout.prototype.constructor = Layout;

            Layout.defaults = extend({}, Outlayer.defaults);
            // apply new options
            extend(Layout.defaults, options);
            // keep prototype.settings for backwards compatibility (Packery v1.2.0)
            Layout.prototype.settings = {};

            Layout.namespace = namespace;

            Layout.data = Outlayer.data;

            // sub-class Item
            Layout.Item = function LayoutItem() {
                Item.apply(this, arguments);
            };

            Layout.Item.prototype = new Item();

            // -------------------------- declarative -------------------------- //

            /**
             * allow user to initialize Outlayer via .js-namespace class
             * options are parsed from data-namespace-option attribute
             */
            docReady(function () {
                var dashedNamespace = toDashed(namespace);
                var elems = document.querySelectorAll('.js-' + dashedNamespace);
                var dataAttr = 'data-' + dashedNamespace + '-options';

                for (var i = 0, len = elems.length; i < len; i++) {
                    var elem = elems[i];
                    var attr = elem.getAttribute(dataAttr);
                    var options;
                    try {
                        options = attr && JSON.parse(attr);
                    } catch (error) {
                        // log error, do not initialize
                        if (console) {
                            console.error('Error parsing ' + dataAttr + ' on ' +
                                elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
                                error);
                        }
                        continue;
                    }
                    // initialize
                    var instance = new Layout(elem, options);
                    // make available via $().data('layoutname')
                    if (jQuery) {
                        jQuery.data(elem, namespace, instance);
                    }
                }
            });

            // -------------------------- jQuery bridge -------------------------- //

            // make into jQuery plugin
            if (jQuery && jQuery.bridget) {
                jQuery.bridget(namespace, Layout);
            }

            return Layout;
        };

// ----- fin ----- //

// back in global
        Outlayer.Item = Item;

        return Outlayer;

    }

// -------------------------- transport -------------------------- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('outlayer/outlayer', [
                'eventie/eventie',
                'doc-ready/doc-ready',
                'eventEmitter/EventEmitter',
                'get-size/get-size',
                'matches-selector/matches-selector',
                './item'
            ],
            outlayerDefinition);
    } else {
        // browser global
        window.Outlayer = outlayerDefinition(
            window.eventie,
            window.docReady,
            window.EventEmitter,
            window.getSize,
            window.matchesSelector,
            window.Outlayer.Item
        );
    }

})(window);

/**
 * Isotope Item
 **/

(function (window) {



// -------------------------- Item -------------------------- //

    function itemDefinition(Outlayer) {

// sub-class Outlayer Item
        function Item() {
            Outlayer.Item.apply(this, arguments);
        }

        Item.prototype = new Outlayer.Item();

        Item.prototype._create = function () {
            // assign id, used for original-order sorting
            this.id = this.layout.itemGUID++;
            Outlayer.Item.prototype._create.call(this);
            this.sortData = {};
        };

        Item.prototype.updateSortData = function () {
            if (this.isIgnored) {
                return;
            }
            // default sorters
            this.sortData.id = this.id;
            // for backward compatibility
            this.sortData['original-order'] = this.id;
            this.sortData.random = Math.random();
            // go thru getSortData obj and apply the sorters
            var getSortData = this.layout.options.getSortData;
            var sorters = this.layout._sorters;
            for (var key in getSortData) {
                var sorter = sorters[key];
                this.sortData[key] = sorter(this.element, this);
            }
        };

        return Item;

    }

// -------------------------- transport -------------------------- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('isotope/js/item', [
                'outlayer/outlayer'
            ],
            itemDefinition);
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = itemDefinition(
            window.Outlayer
        );
    }

})(window);

(function (window) {



// --------------------------  -------------------------- //

    function layoutModeDefinition(getSize, Outlayer) {

        // layout mode class
        function LayoutMode(isotope) {
            this.isotope = isotope;
            // link properties
            if (isotope) {
                this.options = isotope.options[this.namespace];
                this.element = isotope.element;
                this.items = isotope.filteredItems;
                this.size = isotope.size;
            }
        }

        /**
         * some methods should just defer to default Outlayer method
         * and reference the Isotope instance as `this`
         **/
        (function () {
            var facadeMethods = [
                '_resetLayout',
                '_getItemLayoutPosition',
                '_manageStamp',
                '_getContainerSize',
                '_getElementOffset',
                'needsResizeLayout'
            ];

            for (var i = 0, len = facadeMethods.length; i < len; i++) {
                var methodName = facadeMethods[i];
                LayoutMode.prototype[methodName] = getOutlayerMethod(methodName);
            }

            function getOutlayerMethod(methodName) {
                return function () {
                    return Outlayer.prototype[methodName].apply(this.isotope, arguments);
                };
            }
        })();

        // -----  ----- //

        // for horizontal layout modes, check vertical size
        LayoutMode.prototype.needsVerticalResizeLayout = function () {
            // don't trigger if size did not change
            var size = getSize(this.isotope.element);
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var hasSizes = this.isotope.size && size;
            return hasSizes && size.innerHeight !== this.isotope.size.innerHeight;
        };

        // ----- measurements ----- //

        LayoutMode.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments);
        };

        LayoutMode.prototype.getColumnWidth = function () {
            this.getSegmentSize('column', 'Width');
        };

        LayoutMode.prototype.getRowHeight = function () {
            this.getSegmentSize('row', 'Height');
        };

        /**
         * get columnWidth or rowHeight
         * segment: 'column' or 'row'
         * size 'Width' or 'Height'
         **/
        LayoutMode.prototype.getSegmentSize = function (segment, size) {
            var segmentName = segment + size;
            var outerSize = 'outer' + size;
            // columnWidth / outerWidth // rowHeight / outerHeight
            this._getMeasurement(segmentName, outerSize);
            // got rowHeight or columnWidth, we can chill
            if (this[segmentName]) {
                return;
            }
            // fall back to item of first element
            var firstItemSize = this.getFirstItemSize();
            this[segmentName] = firstItemSize && firstItemSize[outerSize] ||
                    // or size of container
                this.isotope.size['inner' + size];
        };

        LayoutMode.prototype.getFirstItemSize = function () {
            var firstItem = this.isotope.filteredItems[0];
            return firstItem && firstItem.element && getSize(firstItem.element);
        };

        // ----- methods that should reference isotope ----- //

        LayoutMode.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments);
        };

        LayoutMode.prototype.getSize = function () {
            this.isotope.getSize();
            this.size = this.isotope.size;
        };

        // -------------------------- create -------------------------- //

        LayoutMode.modes = {};

        LayoutMode.create = function (namespace, options) {

            function Mode() {
                LayoutMode.apply(this, arguments);
            }

            Mode.prototype = new LayoutMode();

            // default options
            if (options) {
                Mode.options = options;
            }

            Mode.prototype.namespace = namespace;
            // register in Isotope
            LayoutMode.modes[namespace] = Mode;

            return Mode;
        };


        return LayoutMode;

    }

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-mode', [
                'get-size/get-size',
                'outlayer/outlayer'
            ],
            layoutModeDefinition);
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = layoutModeDefinition(
            window.getSize,
            window.Outlayer
        );
    }


})(window);

/*!
 * Masonry v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function (window) {



// -------------------------- helpers -------------------------- //

    var indexOf = Array.prototype.indexOf ?
        function (items, value) {
            return items.indexOf(value);
        } :
        function (items, value) {
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                if (item === value) {
                    return i;
                }
            }
            return -1;
        };

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
    function masonryDefinition(Outlayer, getSize) {
        // create an Outlayer layout class
        var Masonry = Outlayer.create('masonry');

        Masonry.prototype._resetLayout = function () {
            this.getSize();
            this._getMeasurement('columnWidth', 'outerWidth');
            this._getMeasurement('gutter', 'outerWidth');
            this.measureColumns();

            // reset column Y
            var i = this.cols;
            this.colYs = [];
            while (i--) {
                this.colYs.push(0);
            }

            this.maxY = 0;
        };

        Masonry.prototype.measureColumns = function () {
            this.getContainerWidth();
            // if columnWidth is 0, default to outerWidth of first item
            if (!this.columnWidth) {
                var firstItem = this.items[0];
                var firstItemElem = firstItem && firstItem.element;
                // columnWidth fall back to item of first element
                this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
                        // if first elem has no width, default to size of container
                    this.containerWidth;
            }

            this.columnWidth += this.gutter;

            this.cols = Math.floor(( this.containerWidth + this.gutter ) / this.columnWidth);
            this.cols = Math.max(this.cols, 1);
        };

        Masonry.prototype.getContainerWidth = function () {
            // container is parent if fit width
            var container = this.options.isFitWidth ? this.element.parentNode : this.element;
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var size = getSize(container);
            this.containerWidth = size && size.innerWidth;
        };

        Masonry.prototype._getItemLayoutPosition = function (item) {
            item.getSize();
            // how many columns does this brick span
            var remainder = item.size.outerWidth % this.columnWidth;
            var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
            // round if off by 1 pixel, otherwise use ceil
            var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
            colSpan = Math.min(colSpan, this.cols);

            var colGroup = this._getColGroup(colSpan);
            // get the minimum Y value from the columns
            var minimumY = Math.min.apply(Math, colGroup);
            var shortColIndex = indexOf(colGroup, minimumY);

            // position the brick
            var position = {
                x: this.columnWidth * shortColIndex,
                y: minimumY
            };

            // apply setHeight to necessary columns
            var setHeight = minimumY + item.size.outerHeight;
            var setSpan = this.cols + 1 - colGroup.length;
            for (var i = 0; i < setSpan; i++) {
                this.colYs[shortColIndex + i] = setHeight;
            }

            return position;
        };

        /**
         * @param {Number} colSpan - number of columns the element spans
         * @returns {Array} colGroup
         */
        Masonry.prototype._getColGroup = function (colSpan) {
            if (colSpan < 2) {
                // if brick spans only one column, use all the column Ys
                return this.colYs;
            }

            var colGroup = [];
            // how many different places could this brick fit horizontally
            var groupCount = this.cols + 1 - colSpan;
            // for each group potential horizontal position
            for (var i = 0; i < groupCount; i++) {
                // make an array of colY values for that one group
                var groupColYs = this.colYs.slice(i, i + colSpan);
                // and get the max value of the array
                colGroup[i] = Math.max.apply(Math, groupColYs);
            }
            return colGroup;
        };

        Masonry.prototype._manageStamp = function (stamp) {
            var stampSize = getSize(stamp);
            var offset = this._getElementOffset(stamp);
            // get the columns that this stamp affects
            var firstX = this.options.isOriginLeft ? offset.left : offset.right;
            var lastX = firstX + stampSize.outerWidth;
            var firstCol = Math.floor(firstX / this.columnWidth);
            firstCol = Math.max(0, firstCol);
            var lastCol = Math.floor(lastX / this.columnWidth);
            // lastCol should not go over if multiple of columnWidth #425
            lastCol -= lastX % this.columnWidth ? 0 : 1;
            lastCol = Math.min(this.cols - 1, lastCol);
            // set colYs to bottom of the stamp
            var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
                stampSize.outerHeight;
            for (var i = firstCol; i <= lastCol; i++) {
                this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
            }
        };

        Masonry.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var size = {
                height: this.maxY
            };

            if (this.options.isFitWidth) {
                size.width = this._getContainerFitWidth();
            }

            return size;
        };

        Masonry.prototype._getContainerFitWidth = function () {
            var unusedCols = 0;
            // count unused columns
            var i = this.cols;
            while (--i) {
                if (this.colYs[i] !== 0) {
                    break;
                }
                unusedCols++;
            }
            // fit container to columns that have been used
            return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
        };

        Masonry.prototype.needsResizeLayout = function () {
            var previousWidth = this.containerWidth;
            this.getContainerWidth();
            return previousWidth !== this.containerWidth;
        };

        return Masonry;
    }

// -------------------------- transport -------------------------- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('masonry/masonry', [
                'outlayer/outlayer',
                'get-size/get-size'
            ],
            masonryDefinition);
    } else {
        // browser global
        window.Masonry = masonryDefinition(
            window.Outlayer,
            window.getSize
        );
    }

})(window);

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

(function (window) {



// -------------------------- helpers -------------------------- //

// extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
    function masonryDefinition(LayoutMode, Masonry) {
        // create an Outlayer layout class
        var MasonryMode = LayoutMode.create('masonry');

        // save on to these methods
        var _getElementOffset = MasonryMode.prototype._getElementOffset;
        var layout = MasonryMode.prototype.layout;
        var _getMeasurement = MasonryMode.prototype._getMeasurement;

        // sub-class Masonry
        extend(MasonryMode.prototype, Masonry.prototype);

        // set back, as it was overwritten by Masonry
        MasonryMode.prototype._getElementOffset = _getElementOffset;
        MasonryMode.prototype.layout = layout;
        MasonryMode.prototype._getMeasurement = _getMeasurement;

        var measureColumns = MasonryMode.prototype.measureColumns;
        MasonryMode.prototype.measureColumns = function () {
            // set items, used if measuring first item
            this.items = this.isotope.filteredItems;
            measureColumns.call(this);
        };

        // HACK copy over isOriginLeft/Top options
        var _manageStamp = MasonryMode.prototype._manageStamp;
        MasonryMode.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft;
            this.options.isOriginTop = this.isotope.options.isOriginTop;
            _manageStamp.apply(this, arguments);
        };

        return MasonryMode;
    }

// -------------------------- transport -------------------------- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-modes/masonry', [
                '../layout-mode',
                'masonry/masonry'
            ],
            masonryDefinition);
    } else {
        // browser global
        masonryDefinition(
            window.Isotope.LayoutMode,
            window.Masonry
        );
    }

})(window);

(function (window) {


    function fitRowsDefinition(LayoutMode) {

        var FitRows = LayoutMode.create('fitRows');

        FitRows.prototype._resetLayout = function () {
            this.x = 0;
            this.y = 0;
            this.maxY = 0;
        };

        FitRows.prototype._getItemLayoutPosition = function (item) {
            item.getSize();

            // if this element cannot fit in the current row
            if (this.x !== 0 && item.size.outerWidth + this.x > this.isotope.size.innerWidth) {
                this.x = 0;
                this.y = this.maxY;
            }

            var position = {
                x: this.x,
                y: this.y
            };

            this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
            this.x += item.size.outerWidth;

            return position;
        };

        FitRows.prototype._getContainerSize = function () {
            return {height: this.maxY};
        };

        return FitRows;

    }

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-modes/fit-rows', [
                '../layout-mode'
            ],
            fitRowsDefinition);
    } else {
        // browser global
        fitRowsDefinition(
            window.Isotope.LayoutMode
        );
    }

})(window);

(function (window) {


    function verticalDefinition(LayoutMode) {

        var Vertical = LayoutMode.create('vertical', {
            horizontalAlignment: 0
        });

        Vertical.prototype._resetLayout = function () {
            this.y = 0;
        };

        Vertical.prototype._getItemLayoutPosition = function (item) {
            item.getSize();
            var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
                this.options.horizontalAlignment;
            var y = this.y;
            this.y += item.size.outerHeight;
            return {x: x, y: y};
        };

        Vertical.prototype._getContainerSize = function () {
            return {height: this.y};
        };

        return Vertical;

    }

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-modes/vertical', [
                '../layout-mode'
            ],
            verticalDefinition);
    } else {
        // browser global
        verticalDefinition(
            window.Isotope.LayoutMode
        );
    }

})(window);

/*!
 * Isotope v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function (window) {



// -------------------------- vars -------------------------- //

    var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

// extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }

    var trim = String.prototype.trim ?
        function (str) {
            return str.trim();
        } :
        function (str) {
            return str.replace(/^\s+|\s+$/g, '');
        };

    var docElem = document.documentElement;

    var getText = docElem.textContent ?
        function (elem) {
            return elem.textContent;
        } :
        function (elem) {
            return elem.innerText;
        };

    var objToString = Object.prototype.toString;

    function isArray(obj) {
        return objToString.call(obj) === '[object Array]';
    }

// index of helper cause IE8
    var indexOf = Array.prototype.indexOf ? function (ary, obj) {
        return ary.indexOf(obj);
    } : function (ary, obj) {
        for (var i = 0, len = ary.length; i < len; i++) {
            if (ary[i] === obj) {
                return i;
            }
        }
        return -1;
    };

// turn element or nodeList into an array
    function makeArray(obj) {
        var ary = [];
        if (isArray(obj)) {
            // use object if already an array
            ary = obj;
        } else if (obj && typeof obj.length === 'number') {
            // convert nodeList to array
            for (var i = 0, len = obj.length; i < len; i++) {
                ary.push(obj[i]);
            }
        } else {
            // array of single index
            ary.push(obj);
        }
        return ary;
    }

    function removeFrom(obj, ary) {
        var index = indexOf(ary, obj);
        if (index !== -1) {
            ary.splice(index, 1);
        }
    }

// -------------------------- isotopeDefinition -------------------------- //

// used for AMD definition and requires
    function isotopeDefinition(Outlayer, getSize, matchesSelector, Item, LayoutMode) {
        // create an Outlayer layout class
        var Isotope = Outlayer.create('isotope', {
            layoutMode: "masonry",
            isJQueryFiltering: true,
            sortAscending: true
        });

        Isotope.Item = Item;
        Isotope.LayoutMode = LayoutMode;

        Isotope.prototype._create = function () {
            this.itemGUID = 0;
            // functions that sort items
            this._sorters = {};
            this._getSorters();
            // call super
            Outlayer.prototype._create.call(this);

            // create layout modes
            this.modes = {};
            // start filteredItems with all items
            this.filteredItems = this.items;
            // keep of track of sortBys
            this.sortHistory = ['original-order'];
            // create from registered layout modes
            for (var name in LayoutMode.modes) {
                this._initLayoutMode(name);
            }
        };

        Isotope.prototype.reloadItems = function () {
            // reset item ID counter
            this.itemGUID = 0;
            // call super
            Outlayer.prototype.reloadItems.call(this);
        };

        Isotope.prototype._itemize = function () {
            var items = Outlayer.prototype._itemize.apply(this, arguments);
            // assign ID for original-order
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                item.id = this.itemGUID++;
            }
            this._updateItemsSortData(items);
            return items;
        };


        // -------------------------- layout -------------------------- //

        Isotope.prototype._initLayoutMode = function (name) {
            var Mode = LayoutMode.modes[name];
            // set mode options
            // HACK extend initial options, back-fill in default options
            var initialOpts = this.options[name] || {};
            this.options[name] = Mode.options ?
                extend(Mode.options, initialOpts) : initialOpts;
            // init layout mode instance
            this.modes[name] = new Mode(this);
        };


        Isotope.prototype.layout = function () {
            // if first time doing layout, do all magic
            if (!this._isLayoutInited && this.options.isInitLayout) {
                this.arrange();
                return;
            }
            this._layout();
        };

        // private method to be used in layout() & magic()
        Isotope.prototype._layout = function () {
            // don't animate first layout
            var isInstant = this._getIsInstant();
            // layout flow
            this._resetLayout();
            this._manageStamps();
            this.layoutItems(this.filteredItems, isInstant);

            // flag for initalized
            this._isLayoutInited = true;
        };

        // filter + sort + layout
        Isotope.prototype.arrange = function (opts) {
            // set any options pass
            this.option(opts);
            this._getIsInstant();
            // filter, sort, and layout
            this.filteredItems = this._filter(this.items);
            this._sort();
            this._layout();
        };
        // alias to _init for main plugin method
        Isotope.prototype._init = Isotope.prototype.arrange;

        // HACK
        // Don't animate/transition first layout
        // Or don't animate/transition other layouts
        Isotope.prototype._getIsInstant = function () {
            var isInstant = this.options.isLayoutInstant !== undefined ?
                this.options.isLayoutInstant : !this._isLayoutInited;
            this._isInstant = isInstant;
            return isInstant;
        };

        // -------------------------- filter -------------------------- //

        Isotope.prototype._filter = function (items) {
            var filter = this.options.filter;
            filter = filter || '*';
            var matches = [];
            var hiddenMatched = [];
            var visibleUnmatched = [];

            var test = this._getFilterTest(filter);

            // test each item
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                if (item.isIgnored) {
                    continue;
                }
                // add item to either matched or unmatched group
                var isMatched = test(item);
                // item.isFilterMatched = isMatched;
                // add to matches if its a match
                if (isMatched) {
                    matches.push(item);
                }
                // add to additional group if item needs to be hidden or revealed
                if (isMatched && item.isHidden) {
                    hiddenMatched.push(item);
                } else if (!isMatched && !item.isHidden) {
                    visibleUnmatched.push(item);
                }
            }

            var _this = this;

            function hideReveal() {
                _this.reveal(hiddenMatched);
                _this.hide(visibleUnmatched);
            }

            if (this._isInstant) {
                this._noTransition(hideReveal);
            } else {
                hideReveal();
            }

            return matches;
        };

        // get a jQuery, function, or a matchesSelector test given the filter
        Isotope.prototype._getFilterTest = function (filter) {
            if (jQuery && this.options.isJQueryFiltering) {
                // use jQuery
                return function (item) {
                    return jQuery(item.element).is(filter);
                };
            }
            if (typeof filter === 'function') {
                // use filter as function
                return function (item) {
                    return filter(item.element);
                };
            }
            // default, use filter as selector string
            return function (item) {
                return matchesSelector(item.element, filter);
            };
        };

        // -------------------------- sorting -------------------------- //

        /**
         * @params {Array} elems
         * @public
         */
        Isotope.prototype.updateSortData = function (elems) {
            this._getSorters();
            // update item sort data
            // default to all items if none are passed in
            elems = makeArray(elems);
            var items = this.getItems(elems);
            // if no items found, update all items
            items = items.length ? items : this.items;
            this._updateItemsSortData(items);
        };

        Isotope.prototype._getSorters = function () {
            var getSortData = this.options.getSortData;
            for (var key in getSortData) {
                var sorter = getSortData[key];
                this._sorters[key] = mungeSorter(sorter);
            }
        };

        /**
         * @params {Array} items - of Isotope.Items
         * @private
         */
        Isotope.prototype._updateItemsSortData = function (items) {
            for (var i = 0, len = items.length; i < len; i++) {
                var item = items[i];
                item.updateSortData();
            }
        };

        // ----- munge sorter ----- //

        // encapsulate this, as we just need mungeSorter
        // other functions in here are just for munging
        var mungeSorter = (function () {
            // add a magic layer to sorters for convienent shorthands
            // `.foo-bar` will use the text of .foo-bar querySelector
            // `[foo-bar]` will use attribute
            // you can also add parser
            // `.foo-bar parseInt` will parse that as a number
            function mungeSorter(sorter) {
                // if not a string, return function or whatever it is
                if (typeof sorter !== 'string') {
                    return sorter;
                }
                // parse the sorter string
                var args = trim(sorter).split(' ');
                var query = args[0];
                // check if query looks like [an-attribute]
                var attrMatch = query.match(/^\[(.+)\]$/);
                var attr = attrMatch && attrMatch[1];
                var getValue = getValueGetter(attr, query);
                // use second argument as a parser
                var parser = Isotope.sortDataParsers[args[1]];
                // parse the value, if there was a parser
                sorter = parser ? function (elem) {
                    return elem && parser(getValue(elem));
                } :
                    // otherwise just return value
                    function (elem) {
                        return elem && getValue(elem);
                    };

                return sorter;
            }

            // get an attribute getter, or get text of the querySelector
            function getValueGetter(attr, query) {
                var getValue;
                // if query looks like [foo-bar], get attribute
                if (attr) {
                    getValue = function (elem) {
                        return elem.getAttribute(attr);
                    };
                } else {
                    // otherwise, assume its a querySelector, and get its text
                    getValue = function (elem) {
                        var child = elem.querySelector(query);
                        return child && getText(child);
                    };
                }
                return getValue;
            }

            return mungeSorter;
        })();

        // parsers used in getSortData shortcut strings
        Isotope.sortDataParsers = {
            'parseInt': function (val) {
                return parseInt(val, 10);
            },
            'parseFloat': function (val) {
                return parseFloat(val);
            }
        };

        // ----- sort method ----- //

        // sort filteredItem order
        Isotope.prototype._sort = function () {
            var sortByOpt = this.options.sortBy;
            if (!sortByOpt) {
                return;
            }
            // concat all sortBy and sortHistory
            var sortBys = [].concat.apply(sortByOpt, this.sortHistory);
            // sort magic
            var itemSorter = getItemSorter(sortBys, this.options.sortAscending);
            this.filteredItems.sort(itemSorter);
            // keep track of sortBy History
            if (sortByOpt !== this.sortHistory[0]) {
                // add to front, oldest goes in last
                this.sortHistory.unshift(sortByOpt);
            }
        };

        // returns a function used for sorting
        function getItemSorter(sortBys, sortAsc) {
            return function sorter(itemA, itemB) {
                // cycle through all sortKeys
                for (var i = 0, len = sortBys.length; i < len; i++) {
                    var sortBy = sortBys[i];
                    var a = itemA.sortData[sortBy];
                    var b = itemB.sortData[sortBy];
                    if (a > b || a < b) {
                        // if sortAsc is an object, use the value given the sortBy key
                        var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                        var direction = isAscending ? 1 : -1;
                        return ( a > b ? 1 : -1 ) * direction;
                    }
                }
                return 0;
            };
        }

        // -------------------------- methods -------------------------- //

        // get layout mode
        Isotope.prototype._mode = function () {
            var layoutMode = this.options.layoutMode;
            var mode = this.modes[layoutMode];
            if (!mode) {
                // TODO console.error
                throw new Error('No layout mode: ' + layoutMode);
            }
            // HACK sync mode's options
            // any options set after init for layout mode need to be synced
            mode.options = this.options[layoutMode];
            return mode;
        };

        Isotope.prototype._resetLayout = function () {
            // trigger original reset layout
            Outlayer.prototype._resetLayout.call(this);
            this._mode()._resetLayout();
        };

        Isotope.prototype._getItemLayoutPosition = function (item) {
            return this._mode()._getItemLayoutPosition(item);
        };

        Isotope.prototype._manageStamp = function (stamp) {
            this._mode()._manageStamp(stamp);
        };

        Isotope.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize();
        };

        Isotope.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout();
        };

        // -------------------------- adding & removing -------------------------- //

        // HEADS UP overwrites default Outlayer appended
        Isotope.prototype.appended = function (elems) {
            var items = this.addItems(elems);
            if (!items.length) {
                return;
            }
            var filteredItems = this._filterRevealAdded(items);
            // add to filteredItems
            this.filteredItems = this.filteredItems.concat(filteredItems);
        };

        // HEADS UP overwrites default Outlayer prepended
        Isotope.prototype.prepended = function (elems) {
            var items = this._itemize(elems);
            if (!items.length) {
                return;
            }
            // add items to beginning of collection
            var previousItems = this.items.slice(0);
            this.items = items.concat(previousItems);
            // start new layout
            this._resetLayout();
            this._manageStamps();
            // layout new stuff without transition
            var filteredItems = this._filterRevealAdded(items);
            // layout previous items
            this.layoutItems(previousItems);
            // add to filteredItems
            this.filteredItems = filteredItems.concat(this.filteredItems);
        };

        Isotope.prototype._filterRevealAdded = function (items) {
            var filteredItems = this._noTransition(function () {
                return this._filter(items);
            });
            // layout and reveal just the new items
            this.layoutItems(filteredItems, true);
            this.reveal(filteredItems);
            return items;
        };

        /**
         * Filter, sort, and layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */
        Isotope.prototype.insert = function (elems) {
            var items = this.addItems(elems);
            if (!items.length) {
                return;
            }
            // append item elements
            var i, item;
            var len = items.length;
            for (i = 0; i < len; i++) {
                item = items[i];
                this.element.appendChild(item.element);
            }
            // filter new stuff
            /*
             // this way adds hides new filtered items with NO transition
             // so user can't see if new hidden items have been inserted
             var filteredInsertItems;
             this._noTransition( function() {
             filteredInsertItems = this._filter( items );
             // hide all new items
             this.hide( filteredInsertItems );
             });
             // */
            // this way hides new filtered items with transition
            // so user at least sees that something has been added
            var filteredInsertItems = this._filter(items);
            // hide all newitems
            this._noTransition(function () {
                this.hide(filteredInsertItems);
            });
            // */
            // set flag
            for (i = 0; i < len; i++) {
                items[i].isLayoutInstant = true;
            }
            this.arrange();
            // reset flag
            for (i = 0; i < len; i++) {
                delete items[i].isLayoutInstant;
            }
            this.reveal(filteredInsertItems);
        };

        var _remove = Isotope.prototype.remove;
        Isotope.prototype.remove = function (elems) {
            elems = makeArray(elems);
            var removeItems = this.getItems(elems);
            // do regular thing
            _remove.call(this, elems);
            // bail if no items to remove
            if (!removeItems || !removeItems.length) {
                return;
            }
            // remove elems from filteredItems
            for (var i = 0, len = removeItems.length; i < len; i++) {
                var item = removeItems[i];
                // remove item from collection
                removeFrom(item, this.filteredItems);
            }
        };

        /**
         * trigger fn without transition
         * kind of hacky to have this in the first place
         * @param {Function} fn
         * @returns ret
         * @private
         */
        Isotope.prototype._noTransition = function (fn) {
            // save transitionDuration before disabling
            var transitionDuration = this.options.transitionDuration;
            // disable transition
            this.options.transitionDuration = 0;
            // do it
            var returnValue = fn.call(this);
            // re-enable transition for reveal
            this.options.transitionDuration = transitionDuration;
            return returnValue;
        };

        // -----  ----- //

        return Isotope;
    }

// -------------------------- transport -------------------------- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('isotope', [
                'outlayer/outlayer',
                'get-size/get-size',
                'matches-selector/matches-selector',
                'isotope/js/item',
                'isotope/js/layout-mode',
                // include default layout modes
                'isotope/js/layout-modes/masonry',
                'isotope/js/layout-modes/fit-rows',
                'isotope/js/layout-modes/vertical'
            ],
            isotopeDefinition);
    } else {
        // browser global
        window.Isotope = isotopeDefinition(
            window.Outlayer,
            window.getSize,
            window.matchesSelector,
            window.Isotope.Item,
            window.Isotope.LayoutMode
        );
    }

})(window);


define('RecommendationsView', [
    'MessageBus',
    'api',
    'isotope'
], function (MessageBus,
             API,
             Isotope) {

    'use strict';

    var RecommendationsView = Backbone.View.extend({
        'selectors': {
            'grid': '.asc-recommendations-grid',
            'gridItem': '.asc-recommendation-item',
            'quickViewTrigger': '.mar-quickview-btn'
        },
        'actions': {
            'getRecommendations': 'Recommendations.getRecommendations'
        },

        'initialize': function (options) {
            this.options = options || {};

            this.$el = $(this.selectors.grid);

            this.getInitialData();
        },
        'getInitialData': function () {
            this.updateRecommendations(API.endpoints.getRecommendations, {
                'Action': this.actions.getRecommendations
            });
        },
        'updateRecommendations': function (url, urlParams) {
            var that = this;

            MessageBus.trigger("indicator.show");

            this.options.dfd = $.ajax({
                'url': url,
                'data': urlParams,
                'type': 'post'
            }).done(function (data) {
                MessageBus.trigger("indicator.hide");

                that.processData(data);
            }).fail(function (data) {

            }).always(function () {
                MessageBus.trigger("indicator.hide");
            });

            return this.options.dfd;
        },

        'processData': function (data) {
            var items = data.data.items,
                itemLength = items.length,
                that = this;

            for (var i = 0; i < itemLength; i++) {
                this.$el.append(items[i]);
            }

            this.attachEvents();
        },
        'attachEvents': function () {
            var that = this;

            this.$el.on('click', '.mar-quickview-btn', function (e) {
                e.preventDefault();
                $(that.$el.find(that.selectors.quickViewTrigger)).data('modalevent', 'quickView.modal.openModal').data('modalclass', 'modal-quick-view').modal({'target': '#quickView'});
            });
        }
    });

    return RecommendationsView;
});
define('productFavoritesView', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {

    'use strict';

    var ProductFavoritesView = Backbone.View.extend({

        'selectors': {
            'active': 'active'
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            //console.log("ProductFavoritesView.initialize()");
            var that = this;

            this.options = options || {};

            this.productID = this.options.productID && this.options.productID.toString();

            //if(that.$el){

            //}

            this.getFavorites();
            this.attachEvents();
        },
        'attachEvents': function () {
            //console.log("ProductFavoritesView.attachEvents()");
            var that = this;

            this.$el.on('click', function (e) {
                //console.log("ProductFavoritesView.click $el EVENT");
                e.preventDefault();

                //if the element has a class of active, it WAS favorited and needs to be unfavorited
                if (that.$el.hasClass('active') === true) {
                    MessageBus.trigger("ProductFavoritesView.removeFavorite", that.productID);

                    //if the element was not active, it should be added to favorites
                } else {
                    MessageBus.trigger("ProductFavoritesView.addFavorite", that.productID);
                }
            });

            MessageBus.on("API.FavoritesUpdated", this.verifyFavorite, this);

            // MessageBus.on('modal.openErrorModal', function(context){
            //     that.$el.modal({'target': '#asc-error-modal'});
            // });
        },
        'getFavorites': function () {
            //console.log("ProductFavoritesView.getFavorites()");
            var that = this,
                deferredObj = API.getFavorites();

            $.when(deferredObj)
                .then(function (data) {
                    //console.log("ProductFavoritesView.deferred().then()");
                    that.verifyFavorite(data.favorites.products);
                });
        },
        //check if this product is favorited
        'verifyFavorite': function (favorites) {
            //console.log("ProductFavoritesView.verifyFavorite()");
            var favoritesLength = favorites.length,
                i = 0;

            this.$el.removeClass(this.selectors.active);

            if (this.options.labels !== null && this.options.labels !== undefined) {
                this.$el.html(this.options.labels.label.add_to_fav_button);
            }

            for (i; i < favoritesLength; i++) {
                if (favorites[i].id === this.productID) {
                    this.$el.addClass(this.selectors.active);

                    if (this.options.labels !== null && this.options.labels !== undefined) {
                        this.$el.html(this.options.labels.label.added_to_fav_button);
                    }
                    break;
                }
            }
        },
        close: function () {
            //console.log("ProductFavoritesView.close()");
            MessageBus.off("API.FavoritesUpdated", this.verifyFavorite, this);
            this.unbind();
            this.remove();
        }

    });
    return ProductFavoritesView;
});

define('ShopStoryView', [
    'MessageBus',
    'productFavoritesView'
], function (MessageBus,
             ProductFavoritesView) {

    'use strict';

    var ShopStoryView = Backbone.View.extend({
        'selectors': {
            'container': '.asc-shop-story-items-container'
        },

        'initialize': function (options) {
            this.options = options || {};

            this.$el = $(this.selectors.container);

            this.setupFavorites();
        },
        'setupFavorites': function () {
            var i = 0,
                $items = this.$el.find('.asc-shop-story-item'),
                itemLength = $items.length,
                $current;

            for (i; i < itemLength; i++) {
                $current = $($items.get(i));

                this.productFavoritesView = new ProductFavoritesView({
                    'el': $current.find('.asc-favorite'),
                    'productID': $current.attr('data-productid'),
                    'labels': null
                });
            }
        }
    });

    return ShopStoryView;
});
define('ShopLookView', [
    'MessageBus',
    'productFavoritesView'
], function (MessageBus,
             ProductFavoritesView) {

    'use strict';

    var ShopLookView = Backbone.View.extend({
        'selectors': {
            'container': '.asc-shop-look-more-items-container'
        },

        'initialize': function (options) {
            this.options = options || {};

            this.$el = $(this.selectors.container);

            this.setupFavorites();
        },
        'setupFavorites': function () {
            var i = 0,
                $items = this.$el.find('.asc-favorite'),
                itemLength = $items.length,
                $current;

            for (i; i < itemLength; i++) {
                $current = $($items.get(i));

                this.productFavoritesView = new ProductFavoritesView({
                    'el': $current,
                    'productID': $current.attr('data-productid'),
                    'labels': null
                });
            }
        }
    });

    return ShopLookView;
});
/***
 Usage:
 <a class="your-class-here" data-modalevent="" data-modaltarget="" data-modalclass="">link</a>

 data-modalevent == custom event that is fired by modal when engaged
 data-modaltarget == trigger value, could be a jQuery selector or url
 data-modalclass == class that is added to the modal so that modal gets different width
 data-modaldatatype == default html if JSON only events will be triggered but no data will be insterted into the content
 data-modalonload == default FALSE set to true if you do not have a trigger and you want the element to be the content. To be used with modals that auto open on page load

 $('.your-class-here').modal();

 Custom event passes in a reference of modal content window so it will be readily available to use.
 Add a generic class like trigger-modal to actually call the $().modal() event on


 @requirements
 jQuery, MessageBus

 */
define('modal', ['api', "MessageBus"],
    function (API, MessageBus) {
        "use strict";

        // Create the defaults once
        var pluginName = "modal",
            defaults = {
                'events': {
                    'custom': 'custom.modal',
                    'open': 'open.modal',
                    'onBeforeClose': 'onBeforeClose.modal',
                    'close': 'closed.modal',
                    'closeModal': 'modal.close',
                    'mobileOpenEvent': 'GlobalModalOpenEvent',
                    'customClose': 'customClose'
                },
                'classNames': {
                    'modalVisible': 'active',
                    'modalAnimate': 'modal-animate',
                    'hiddenClass': 'visuallyhidden',
                    'childClass': 'childModal'
                },
                'selectors': {
                    'modalHolder': '#modal-holder',
                    'modalOverlay': '#db-modal-overlay, #mar-modal-overlay',
                    'innerOverlay': '.inner-overlay',
                    'modalWindow': '.modal-window',
                    'contentHolder': '.modal-content'
                },
                'target': '',
                'dataType': 'html',
                'customClass': 'modal',
                'modalType': 'parent',
                'modalhold': false,
                'cache': {
                    'modalHolder': {},
                    'modalOverlay': {},
                    'innerOverlay': {},
                    'modalWindow': {},
                    'modalContent': {}
                },
                'autoModal': false,
                'topTreshold': 40,
                'modalIsSmaller': false,
                'oldModalState': true,
                'originalTop': 0,
                'modalAnimate': true,
                'animation': {
                    'transform': 'translateY(0) scale(1)',
                    'msopacity': '1',
                    'filter': '1',
                    'opacity': '1',
                    'time': 0.3
                }
            };

        // The actual plugin constructor
        function Modal(element, customOptions) {
            var property;

            this.element = element;
            this.options = $.extend(true, {}, defaults, customOptions);
            this.$el = $(element);
            this._name = pluginName;

            // assign some values
            this.options.events.custom = this.$el.data('modalevent');

            if (this.$el.data('modaltarget')) {
                this.options.target = this.$el.data('modaltarget');
            }

            if (this.$el.data('modalhold')) {
                this.options.modalhold = this.$el.data('modalhold');
                //this.options.modalhold = false;
            }

            if (this.$el.data('modalanimate') === false) {
                this.options.modalAnimate = this.$el.data('modalanimate');
            }

            if (this.$el.data('modaltype')) {
                this.options.modalType = this.$el.data('modaltype');
            }

            this.options.customClass = this.$el.data('modalclass');

            if (this.$el.data('modaldatatype')) {
                this.options.dataType = this.$el.data('modaldatatype').toLowerCase();
            }

            if (this.options.modalType === "parent") {
                this.options.modalStateClick = false;
            }
            var customClose = this.$el.data('modalclosecustomevent');
            if (customClose) {
                this.options.events.customClose = customClose;
            }
            // cache our modal
            this.options.cache.modalHolder = $(this.options.selectors.modalHolder);
            this.options.cache.modalOverlay = $(this.options.selectors.modalOverlay);
            this.options.cache.innerOverlay = this.options.cache.modalHolder.find(this.options.selectors.innerOverlay);
            this.options.cache.modalWindow = this.options.cache.modalHolder.find(this.options.selectors.modalWindow);
            this.options.cache.modalContent = this.options.cache.modalHolder.find(this.options.selectors.contentHolder);

            this.init();

            // set stuff in our ModalManager class
            if (window.ModalManager && this.options.target.indexOf('/') === -1) {
                if (this.$el.data('modalonload') === true) {
                    property = this.$el.prop('id');
                    // check if there is an ID and if not assing one
                    // defensive code if there is no id genereated for this object
                    if (property) {
                        this.options.target = '#' + property;
                    } else {
                        //get a random number
                        property = 'modalGeneratedId' + Math.floor(Math.random() * (1000 - 3)) + 3;
                        this.$el.prop({
                            'id': property
                        });
                        this.options.target = '#' + property;
                    }

                }
                window.ModalManager.set(this.options.target);
            }

            // check if our modal is supposed to open imedialy
            if (this.$el.data('modalonload') === true) {
                this.options.autoModal = true;
                this.openModal();
            }
        }

        /**
         * Attach events for the modal
         * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
         * @returns Describe what it returns
         * @type String|Object|Array|Boolean|Number
         */

        Modal.prototype.init = function () {
            this.attachEvents();
        };

        Modal.prototype.attachEvents = function () {
            var that = this,
                $contxt;

            this.$el.on('click', function (e) {
                e.preventDefault();
                var currentModalType = $(this).data("modaltype");

                if (currentModalType === "children") {
                    that.options.modalType = "children";
                } else {
                    that.options.modalType = "parent";
                }

                if (that.options.modalStateClick === false || currentModalType === "children") {
                    if (currentModalType === "parent") {
                        that.options.modalStateClick = true;
                    }

                    if (that.options.modalhold === true) {
                        console.log("Modal hold: true");
                        MessageBus.trigger('doAgeGateAjax');
                    } else {
                        that.openModal();
                    }

                } else {
                    return false;
                }
            });

            MessageBus.on('openAgeGatePopup', function (openflag) {

                that.options.modalhold = false;
            });

            MessageBus.on('Modal.openMobileModal', function ($contxt) {
                that.mobileModal($contxt);
            });

        };

        /**
         * Opens the modal
         * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
         * @returns Describe what it returns
         * @type String|Object|Array|Boolean|Number
         */

        Modal.prototype.openModal = function () {
            var that = this,
                targetObject = {},
                $modalMarkup = "";

            if (that.options.modalType === "children") {
                that.options.cache.modalContent.children().addClass(that.options.classNames.hiddenClass);
            } else {
                this.options.cache.modalContent.empty();
            }

            if (this.options.autoModal === true) {
                if (!window.ModalManager) {
                    targetObject = this.$el;
                } else {
                    targetObject.length = 1;
                }

            } else {
                // check if we have slashes in our url because that throws an error
                if (this.options.target.indexOf('/') !== -1) {
                    targetObject.length = 0;
                } else if (!window.ModalManager) {
                    targetObject = $(this.options.target);
                }
            }

            // TODO: restrcuture this to use promisse
            // load the content
            if (targetObject.length === 0) {
                if (this.options.dataType === 'json') {
                    // just notify our listener that we are ready for bisuness
                    MessageBus.trigger(that.options.events.open);
                    MessageBus.trigger(that.options.events.custom, that.options.cache.modalContent, that.$el);
                    //handle modal height
                    that.modalHeight();
                    MessageBus.trigger(that.options.events.mobileOpenEvent, that.options.cache.modalContent);
                } else {
                    // do the ajax request
                    $.ajax({
                        'url': (typeof this.$el.data('https') == 'string') ? ('https://' + location.host + this.options.target) : this.options.target,
                        'success': function (data) {
                            // populate content
                            $modalMarkup = $(data).data("backupCustomClass", that.options.customClass).removeClass(that.options.classNames.hiddenClass);
                            if (that.options.modalType === "children") {
                                that.options.cache.modalContent.append($modalMarkup.addClass(that.options.classNames.childClass));
                            } else {
                                that.options.cache.modalContent.html($modalMarkup);
                            }
                            // trigger modal open event
                            MessageBus.trigger(that.options.events.open);
                            MessageBus.trigger(that.options.events.custom, that.options.cache.modalContent, that.$el);

                            //handle modal height
                            that.modalHeight();
                            MessageBus.trigger(that.options.events.mobileOpenEvent, that.options.cache.modalContent);
                        },
                        'fail': function (data) {
                            that.options.modalStateClick = false;
                        }
                    });
                }
            } else {
                // use the object that you have
                // clone it and remove hidden class
                $modalMarkup = window.ModalManager.get(that.options.target).removeClass(that.options.classNames.hiddenClass);
                if (that.options.modalType === "children") {
                    that.options.cache.modalContent.append($modalMarkup.data("backupCustomClass", this.options.customClass).addClass(that.options.classNames.childClass));
                } else {
                    this.options.cache.modalContent.html($modalMarkup);
                }
                // trigger open event
                MessageBus.trigger(that.options.events.open);
                MessageBus.trigger(that.options.events.custom, that.options.cache.modalContent, that.$el);
                // set height on the element
                //handle modal height
                that.modalHeight();
                MessageBus.trigger(that.options.events.mobileOpenEvent, that.options.cache.modalContent);
            }

            if (that.options.modalType === "parent") {
                this.options.cache.modalContent.children().last().data("backupCustomClass", this.options.customClass);
            }

            this.options.cache.modalHolder.attr('class', this.options.customClass + " " + this.options.classNames.modalVisible);

            // Apply the Animation logic
            if (API.viewport.name() !== 'mobile') {
                if (this.options.modalAnimate) {
                    this.options.cache.modalWindow
                        // Add the modalAnimate class to apply original styling
                        .addClass(this.options.classNames.modalAnimate)
                        // Perform Animation
                        .animate({
                            '-ms-filter': this.options.animation.msfilter,
                            'filter': this.options.animation.filter,
                            'opacity': this.options.animation.opacity
                        }, this.options.animation.time).css({
                        '-moz-transform': this.options.animation.transform,
                        '-ms-transform': this.options.animation.transform,
                        '-o-transform': this.options.animation.transform,
                        '-webkit-transform': this.options.animation.transform,
                        'transform': this.options.animation.transform
                    });

                    if (that.options.modalType === "parent") {
                        this.options.cache.innerOverlay.on('click.modal', function (e) {
                            // close modal
                            that.closeModal();
                        });
                    }
                }
            }

            // get the top value
            this.options.originalTop = this.options.cache.modalWindow.css('top');
            // event for modal overlay
            this.options.cache.modalOverlay.addClass(this.options.classNames.modalVisible);

            if (that.options.modalType === "parent") {
                this.options.cache.modalOverlay.on('click.modal', function (e) {
                    // close modal
                    that.closeModal();
                });

                this.options.cache.modalHolder.on('click.modal', '.modal-close', function () {
                    // close modal
                    that.closeModal();
                });

                // add escape button
                $(document).on('keyup.modal', function (e) {
                    if (e.keyCode === 27) {
                        that.closeModal();
                    }
                });
                // add event listener for resizing the window
                $(window).resize(function (e) {
                    that.modalHeight();
                    // On orientation change, re-calculation of Modal Height
                    that.mobileModal();
                });

                // setup event listerner to close modal from outside
                MessageBus.on(this.options.events.closeModal, function () {
                    // close our modal when this event fires
                    that.closeModal();
                });
            }

            //focus inside the modal when it opens to enable tab navigation
            this.options.cache.modalHolder.find('.modal-close:first').focus();
        };

        //To set mobile specific modal attributes
        Modal.prototype.mobileModal = function ($target) {
            var $viewPrtHeight = $(window).height(),
                $getHeadHeight,
                $getContentHeight,
                $targetModal = $target || $('.modal-content');

            if (API.viewport.name() === 'mobile') {
                if ($targetModal.find('.mar-modal-inner-con').length === 0) {
                    $targetModal.addClass('addScroll');
                }
                _.delay(function () {
                    if (!$targetModal.is(':empty') && $targetModal.closest('#modal-holder').hasClass('active')) {

                        $getHeadHeight = $targetModal.find('.mar-modal-header').outerHeight(),
                            $getContentHeight = $viewPrtHeight - $getHeadHeight;
                        $targetModal.find('.mar-modal-inner-con').css({
                            'height': $getContentHeight,
                            'padding-top': $getHeadHeight + "px"
                        });
                        $('.modal-window').addClass('mobile-modal-animate-in').removeClass('modal-animate');

                        $('body').addClass('mobile-body-no-scroll');


                    }
                }, 500);
            }
        }
        /**
         * Determines if we need to set the height of the element and modify anything
         * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
         * @returns Describe what it returns
         * @type String|Object|Array|Boolean|Number
         */

        /**
         * Calculate modal Height based on the content that populates it
         */
        Modal.prototype.modalHeight = function () {
            var that = this,
                fromTop = this.options.cache.modalWindow.offset().top - $(window).scrollTop(),
                modalHeight = this.options.cache.modalContent.outerHeight(),
                windowHeight, modalWindow, windowSmaller;

            // recursively call this function until append is successful
            // TODO: race condition try to find a fix for it
            if (modalHeight <= 0) {
                setTimeout(function () {
                    that.modalHeight();
                }, 1);
            } else {
                windowHeight = $(window).height();
                modalWindow = this.options.cache.modalWindow;

                //if modal height is less that window height including margins
                if ((windowHeight - this.options.topTreshold) > (modalHeight + fromTop)) {
                    // if our modal can fit in the area we can just make it
                    this.options.cache.modalHolder.css({
                        'position': 'absolute',
                        'top': $(window).scrollTop()
                    });
                    /*
                     modalWindow.css({
                     'top' : this.options.originalTop
                     });
                     */
                    //set flag to window being larger
                    this.options.modalIsSmaller = false;
                } else {
                    // all other cases where modal is smaller
                    var modalOffset = this.options.cache.modalHolder.offset();
                    //if modal is largers than window, fit to window
                    if (!this.options.modalIsSmaller) {
                        this.options.cache.modalHolder.css({
                            'position': 'absolute',
                            'top': $(window).scrollTop()
                        });
                        this.options.modalIsSmaller = true;
                    }
                }
                // set listener here where we get modal height
                setTimeout(function (e) {
                    that.options.cache.innerOverlay.on('click.modal', function (e) {
                        // close modal
                        that.closeModal();
                    });
                }, 1500);

            }
        };
        /**
         * Close modal and clean out all the events
         * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
         * @returns Describe what it returns
         * @type String|Object|Array|Boolean|Number
         */

        Modal.prototype.closeModal = function () {
            var that = this;

            //unfreez body once modal window closed Mobile
            if (API.viewport.name() === 'mobile') {
                $('body').removeClass('mobile-body-no-scroll');
                $('.modal-window').removeClass('mobile-modal-animate-in');
            }

            var $childModal = that.options.cache.modalContent.find("." + that.options.classNames.childClass).last(),
                childModalCustomClasses = $childModal.data("backupCustomClass") || "";

            if ($childModal[0]) {

                $childModal.remove();
                that.options.cache.modalHolder.removeClass(childModalCustomClasses);

                var $prevChildModals = that.options.cache.modalContent.find("." + that.options.classNames.childClass).last(),
                    prevChildCustomClass = $prevChildModals.data("backupCustomClass") || "";

                if ($prevChildModals[0]) {
                    $prevChildModals.removeClass(that.options.classNames.hiddenClass);
                    that.options.cache.modalHolder.addClass(prevChildCustomClass).addClass(that.options.classNames.modalVisible);
                } else {
                    var $parentModal = that.options.cache.modalContent.children(),
                        parentModalCustomClasses = $parentModal.data("backupCustomClass") || "";

                    $parentModal.removeClass(that.options.classNames.hiddenClass);
                    that.options.cache.modalHolder.addClass(parentModalCustomClasses).addClass(that.options.classNames.modalVisible);
                }
                //handle modal height
                that.modalHeight();

                return true;
            }

            this.options.modalStateClick = false;

            // send on before close event
            MessageBus.trigger(this.options.events.onBeforeClose, this.options.cache.modalContent);

            // remove element
            this.options.cache.modalHolder.removeClass(this.options.customClass + " " + this.options.classNames.modalVisible).off('click.modal');

            // Remove modalVisible class from modalWindow for animation
            this.options.cache.modalWindow.attr('style', '');

            // close overlay and attached event
            this.options.cache.modalOverlay.removeClass(this.options.classNames.modalVisible).off('click.modal');

            // close inner overlay listener
            this.options.cache.innerOverlay.off('click.modal');

            // trun off keyup listener
            $(document).off('keyup.modal');

            // turn off messagebus listener to close the modal
            MessageBus.off(this.options.events.closeModal);

            MessageBus.trigger(this.options.events.close);
            if (this.options.events.customClose !== "customClose") {
                MessageBus.trigger(this.options.events.customClose, this.options.cache.modalContent);
            }

            MessageBus.trigger('cbys.reset');

            //to follow the tabbing order in case of model close
            if (!(this.$el.attr("id") === "marketingEntryBox")) {
                this.$el.focus();
            }
        };
        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations

        $.fn[pluginName] = function (options) {
            this.each(function () {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Modal(this, options));
                }
            });

            window.executeOnce = window.executeOnce || {};
            //Setting event listener on MessageBus for opening mobile modals
            if (!window.executeOnce["GlobalModalOpenEvent"]) {
                MessageBus.on("GlobalModalOpenEvent", Modal.prototype.mobileModal);
                window.executeOnce["GlobalModalOpenEvent"] = true;
            }

            //chain jQuery functions
            return this;
        };
    });

define('ProductSKUModel', [], function () {
    'use strict';

    var ProductSKUModel = Backbone.Model.extend({
        'defaults': {},

        'initialize': function () {

        }
    });

    // make it available
    return ProductSKUModel;
});
define('ProductSKUCollection', [
    './ProductSKUModel'
], function (ProductSKUModel) {
    'use strict';
    var ProductSKUCollection = Backbone.Collection.extend({
        'model': ProductSKUModel
    });
    return ProductSKUCollection;
});

define('components/quickview/QuickViewView', [
    'MessageBus',
    'api',
    'ProductSKUCollection'
], function (MessageBus,
             API,
             ProductSKUCollection) {

    'use strict';

    var QuickViewView = Backbone.View.extend({

        'selectors': {
            'selectorContainer': '.mar-product-selection-container',
            'optionContainer': '.mar-option-container',
            'thresholdClass': '.mar-product-quantity-message',
            'quantityClass': '.mar-input-qty'
        },

        'initialize': function (options) {
            //console.log("QuickViewView.initialize()");
            this.options = options || {};

            if ($('#quick-view-template').length > 0) {
                this.template = _.template($('#quick-view-template').html());
                this.render();
                this.attachEvents();
            }

            if ($('#item-msg-json').length > 0) {
                var msg = $.parseJSON($('#item-msg-json').html());
                this.msg = msg.messages;
            }
        },
        'render': function () {
            //console.log("QuickViewView.render()");
            this.templateData = this.collection.models[0].attributes;

            this.templateData.labels = this.options.labels.label;

            this.templateData.productQuantity = this.options.productQuantity;
            this.templateData.modalActionType = this.options.modalActionType;
            this.templateData.product_url = this.collection.models[0].attributes.productUrl;


            this.collection.models[0].set({'realm': API.endpoints.realm});

            this.$el.append(this.template(this.collection.models[0].attributes));
            this.options.$parent.append(this.$el);

        },
        'attachEvents': function () {
            //console.log("QuickViewView.attachEvents()");
            var that = this;

            this.options.$parent.on('click', '.asc-bag-action', function (e) {
                //console.log("QuickViewView.click .asc-bag-action EVENT");
                e.preventDefault();
                that.verifyQuantity(true);
            });

            this.options.$parent.on('click', '.mar-item-qty', function (e) {
                //console.log("QuickViewView.click .mar-item-qty EVENT");
                e.preventDefault();
                MessageBus.trigger("QuickView.selectionMade-" + that.options.prefixID);
            });

            //ALM-352 | JU
            this.options.$parent.on('mousedown', 'a.bv-rating-stars-container:first', function (e) {
                var redUrl = that.options.$parent.find('.mar-full-details').attr('href'),
                    $this = $(this);

                if ($this.find('.bv-rating-stars-on').width() > 0) {
                    window.location.href = redUrl + "/BVRRContainer";
                }
            });

            this.options.$parent.on('mousedown', '.bv-rating-ratio-count', function (e) {
                var redUrl = that.options.$parent.find('.mar-full-details').attr('href');

                window.location.href = redUrl + "/BVRRContainer";

            });


            /*
             this.options.$parent.on('click','.mar-add-to-favorites', function(e) {
             e.preventDefault();
             that.addToFavorites(e);
             });

             this.options.$parent.on('click','.mar-full-details', function(e) {
             e.preventDefault();
             that.viewFullDetails(e);
             });*/

            MessageBus.on("QuickView.selectionMade-" + this.options.prefixID, this.onSelectionMade, this);
        },
        onSelectionMade: function () {
            //console.log("QuickViewView.onSelectionMade()");
            var $selectContainer = this.options.$parent.find(this.selectors.selectorContainer),
                $containerLen = this.options.$parent.find(this.selectors.optionContainer).length,
                $selected = $selectContainer.find('input:checked, option:selected');

            this.updateThresholdMsg(null);
            this.updateBagBtn(null);

            if ($selected.length === $containerLen) {
                this.filteredSKUCollection = new ProductSKUCollection();

                for (var i = 0; i < $selected.length; i++) {
                    var $selectedItem = $($selected.get(i)),
                        optionKey = $selectedItem.attr('data-option-key'),
                        optionID = $selectedItem.val();

                    if (i === 0) {
                        this.filteredSKUCollection.add(this.filterSKUs(this.options.skuCollection, optionKey, optionID));
                    } else {
                        this.tempSKUCollection = new ProductSKUCollection();
                        this.tempSKUCollection.add(this.filterSKUs(this.filteredSKUCollection, optionKey, optionID));
                        this.filteredSKUCollection = this.tempSKUCollection;
                    }
                }

                this.updateBagBtn(this.filteredSKUCollection);
                this.updateThresholdMsg(this.filteredSKUCollection);
            }
        },
        'filterSKUs': function (collection, optionKey, optionID) {
            //console.log("QuickViewView.filterSKUs()");
            //console.log(collection,optionKey,optionID);
            var filtered = _.filter(collection.models, function (sku) {
                if (sku.get(optionKey) === optionID) {
                    return sku;
                }
            });

            return filtered;
        },
        'updateBagBtn': function (skuItem) {
            //console.log("QuickViewView.updateBagBtn()");
            var $bagBtn = this.options.$parent.find('.asc-bag-action'),
                quantity = 0,
                threshold = 0;

            if (skuItem !== null && skuItem.length > 0) {
                quantity = skuItem.models[0].attributes.quantity;

                if (skuItem.models[0].attributes.show_threshold_message) {
                    threshold = skuItem.models[0].attributes.show_threshold_message;
                }

                if (quantity > 0) {
                    if ($bagBtn.attr('disabled') === 'disabled') {
                        $bagBtn.removeAttr('disabled');
                        this.verifyQuantity(false);
                    }
                } else {
                    $bagBtn.attr('disabled', 'disabled');
                }
            } else {
                $bagBtn.attr('disabled', 'disabled');
            }
        },
        'updateThresholdMsg': function (skuItem) {
            //console.log("QuickViewView.updateThresholdMsg()");
            var threshold = false,
                $thresholdMsg = this.options.$parent.find(this.selectors.thresholdClass);

            if (skuItem !== null && skuItem.length > 0) {
                if (skuItem.models[0].attributes.show_threshold_message) {
                    threshold = skuItem.models[0].attributes.show_threshold_message;
                }

                if (threshold === "true") {
                    $thresholdMsg.html(this.msg.threshold_message);
                }
            } else {
                $thresholdMsg.empty();
            }
        },
        'verifyQuantity': function (addToBag) {
            //console.log("QuickViewView.verifyQuantity()");
            var inventory = 0,
                qty = 0,
                $qty = this.options.$parent.find(this.selectors.quantityClass),
                $thresholdMsg = this.options.$parent.find(this.selectors.thresholdClass),
                msg = "",
                productId = this.templateData.product_id,
                sku;

            if (this.filteredSKUCollection.models.length > 0) {
                inventory = this.filteredSKUCollection.models[0].attributes.quantity;
                qty = parseInt($qty.val());

                if (inventory > 99) {
                    $qty.attr('data-max', 99);
                } else {
                    $qty.attr('data-max', inventory);
                }
                $qty.trigger('change', false);

                if (qty > inventory) {
                    $qty.val(inventory);

                    $qty.trigger('change');
                    msg = this.msg.quantity_request_exceeds_stock.replace("%%XXX%%", inventory);

                    $thresholdMsg.html(msg);
                } else {
                    if (qty < inventory) {
                        $thresholdMsg.empty();
                    }

                    sku = this.filteredSKUCollection.models[0].attributes.sku_id;
                    if (addToBag === true) {
                        MessageBus.trigger('QuickView.addToCart', sku, qty, productId);
                    }
                }
            } else {
                $thresholdMsg.empty();
            }
        },
        'addToFavorites': function (e) {
            //console.log("QuickViewView.addToFavorites()");
            MessageBus.trigger('QuickView.addToFavorites', this.collection.models[0].attributes.product_id);
        },
        'viewFullDetails': function (e) {
            //console.log("QuickViewView.viewFullDetails()");
            MessageBus.trigger('modal.close');
        },
        close: function () {
            //console.log("QuickViewView.close()");
            MessageBus.off("QuickView.selectionMade-" + this.options.prefixID, this.onSelectionMade, this);
            if (typeof this.filteredSKUCollection !== "undefined") {
                this.filteredSKUCollection.reset();
                delete this.filteredSKUCollection;
            }
            if ($('#quick-view-template').length > 0) {
                this.options.$parent.off('click', '.asc-bag-action');
                this.options.$parent.off('click', '.mar-item-qty');
            }
            this.unbind();
            this.remove();
        }

    });
    return QuickViewView;
});

define('components/quickview/ProductDetailModel', [], function () {
    'use strict';

    var ProductDetailModel = Backbone.Model.extend({

        'defaults': {
            "product_id": "",
            "product_name": "",
            "defaultType": "",
            "default_color": "",
            "size_chart": "",
            "product_message": [],
            "isGWP": "",
            "badge": "",
            "unitPrice": 0,
            "originalPrice": 0,
            "label": {},
            "out_of_stock_message": "",
            "all_skus_out_of_stock": ""
        },


        /**
         @function
         @description Fires after every instance intialization.
         */
        'initialize': function () {

        }
    });

    // make it available
    return ProductDetailModel;
});
define('components/quickview/ProductDetailCollection', [
    './ProductDetailModel'
], function (ProductDetailModel) {
    'use strict';
    var ProductDetailCollection = Backbone.Collection.extend({
        'model': ProductDetailModel
    });
    return ProductDetailCollection;
});

define('components/quickview/ProductDetailView', [
    'MessageBus',
    'api'
], function (MessageBus,
             API) {

    'use strict';

    var ProductDetailView = Backbone.View.extend({

        'initialize': function (options) {
            //console.log("ProductDetailView.initialize()");
            this.options = options || {};

            var userStateInfo = API.getUserState(),
                that = this;

            $.when(userStateInfo).then(function (data) {
                that.userStateObj = data;
            });

            if ($('body').hasClass('aos')) {
                this.aos = true;
            }

            this.listenTo(this.collection, 'add', this.render);

            var template = '';

            if (this.options.multi === true) {
                template = '#multi-quick-view-detail-template';
            } else {
                template = '#product-detail-template';
            }
            if ($(template).length > 0) {
                this.template = _.template($(template).html());
                this.render();
                this.attachEvents();
            }
        },
        'attachEvents': function () {
            var that = this;

            //fallback if bazaarvoice script has not loaded yet
            MessageBus.off('quickview.BVLoaded');
            MessageBus.on('quickview.BVLoaded', function () {
                that.setupBazaarVoice(that.collection.models[0].get('product_id'));
            });
        },
        'render': function () {
            //console.log("ProductDetailView.render()");
            this.template(this.collection.models[0].set({'label': this.options.labels}));
            this.$el.append(this.template(this.collection.models[0].attributes));
            this.options.$parent.html(this.$el);
        },
        'setupBazaarVoice': function (pid) {

            var that = this;

            if (this.userStateObj.userToken) {
                this.userToken = this.userStateObj.userToken;
            } else {
                this.userToken = "";
            }

            if (window.$BV) {
                window.$BV.configure('global', {
                    productId: pid,
                    allowSamePageSubmission: true,
                    userToken: this.userToken,
                    doLogin: function (successCallback, successUrl) {
                        console.log("No Login Found!!!!");

                        that.doAfterLogin(pid);
                    }
                });

                window.$BV.ui('rr', 'show_reviews', {});

                //set up BV inline rating module if AOS
                if (this.aos) {
                    window.$BV.ui('rr', 'inline_ratings', {
                        productIds: [pid],
                        containerPrefix: 'BVRRInlineRating'
                    });
                }
            }
            else {
                console.log('BV not loaded');
            }
        },
        doAfterLogin: function (pid) {
            var that = this,
                userToken = this.userToken,
                loginUrl,
                productId = pid,
                pathArray = $(".mar-full-details").attr('href').split("#"),
                currentUrl = "",
                hrefArray = window.location.href.split("/"),
                i;

            console.log("In Login");

            currentUrl = "http://" + window.location.hostname + "/" + hrefArray[3] + pathArray[0];

            if (typeof userToken !== 'undefined' && userToken !== '') {
                // call the show write review method
                //successCallback(userToken);
                window.$BV.ui('rr', 'submit_review', {productId: pid, userToken: userToken});

            } else {

                loginUrl = API.endpoints.BVAgeGateLogin + "?reffererURL=" + currentUrl + "#/review_submit";
                window.location = loginUrl;
            }

        },
        cleanView: function () {
            //console.log("ProductDetailView.cleanView()");
            MessageBus.off('quickview.BVLoaded');
            this.unbind();
            this.remove();
        },
        close: function () {
            //console.log("ProductDetailView.close()");
            this.cleanView();
        }
    });
    return ProductDetailView;
});

define('ProductColorModel', [], function () {
    'use strict';

    var ProductColorModel = Backbone.Model.extend({
        'defaults': {},

        'initialize': function () {

        }
    });

    // make it available
    return ProductColorModel;
});
define('ProductColorSelectCollection', [
    'ProductColorModel'
], function (ProductColorModel) {
    'use strict';
    var ProductColorSelectCollection = Backbone.Collection.extend({
        'model': ProductColorModel
    });
    return ProductColorSelectCollection;
});

define('components/quickview/ProductColorCollection', [
    'ProductColorModel'
], function (ProductColorModel) {
    'use strict';
    var ProductColorCollection = Backbone.Collection.extend({
        'model': ProductColorModel
    });
    return ProductColorCollection;
});

define('components/quickview/ProductColorView', [
    'api',
    'MessageBus'
], function (API, MessageBus) {

    'use strict';

    var ColorView = Backbone.View.extend({

        'tagName': 'li',
        'className': 'cmn-radio-container',

        'events': {
            'click input': 'updateSelectedColor'
        },

        'initialize': function (options) {
            //console.log("ProductColorView.initialize()");
            this.options = options || {};
            var i, noInventory = 0, that = this;
            this.delegatedEvents = true;
            this.colorQuantityMap = {};
            window.userActions = {
                mouseEnterCall: null,
                mouseLeaveCall: null,
                selectedColor: null
            };
            //this.listenTo(this.collection, 'reset', this.render);

            if ($('#product-detail-color-template').length > 0) {
                this.template = _.template($('#product-detail-color-template').html());
                this.render();

                //only have hover functionality on for desktop
                if (!Modernizr.touch || !API.isMobileOrTabletDevice()) {

                    /*var debouncedAdd = _.debounce(function() {
                     //console.log('debounced add');
                     that.updateHoverColor();
                     },600);*/

                    this.$el.on('mouseenter', 'label', function () {
                        //console.log("ProductColorView.mouseEnter label EVENT");
                        //console.log('mouseenter');
                        //console.log($(this).prev());
                        clearTimeout(window.userActions.mouseEnterCall || 0);
                        clearTimeout(window.userActions.mouseLeaveCall || 0);
                        window.userActions.mouseEnterCall = setTimeout(function () {
                            that.updateHoverColor();
                        }, 130);
                    });


                    /*var debouncedRemove = _.debounce(function() {
                     //console.log('debounced remove');
                     that.removeHoverColor();
                     },900);*/

                    this.$el.on('mouseleave', 'label', function () {
                        //console.log("ProductColorView.mouseLeave label EVENT");
                        //console.log('mouseout');
                        //console.log($(this).prev());
                        clearTimeout(window.userActions.mouseEnterCall || 0);
                        clearTimeout(window.userActions.mouseLeaveCall || 0);
                        var thisColor = $(this).siblings("input[type='radio']").val();
                        //console.log("hi-------------", thisColor, " - ", window.userActions.selectedColor);
                        if (thisColor === window.userActions.selectedColor) {
                            return;
                        }
                        window.userActions.mouseLeaveCall = setTimeout(function () {
                            that.removeHoverColor();
                        }, 600);
                    });

                }

                this.$input = this.$el.find('input');

                this.listenToSizeUpdates();
                this.listenToColorUpdates();

                // Show disabled state when no inventory for all sizes
                for (i = 0; i < this.model.sku_data.length; i++) {
                    if (!this.model.sku_data[i].attributes.quantity) {
                        noInventory++;
                    }
                }
                this.colorQuantityMap[this.model.id] = {
                    'sku_data_length': this.model.sku_data.length,
                    'inventory': noInventory
                };
            }
        },
        'render': function () {
            //console.log("ProductColorView.render()");
            var that = this;
            that.model.prefix_id = this.options.prefixID;
            that.model.product_id = this.options.productID;
            that.model.hasUnits = false;
            if (that.model.prefix_id === "giftitem") {
                $.each(that.model.sku_data, function (index, item) {
                    if (item.attributes.quantity > 0) {
                        that.model.hasUnits = true;
                        return false;
                    }
                });
            }

            this.$el.append(that.template(this.model));
            if (!(that.model.prefix_id === "giftitem" && that.model.hasUnits === false)) {
                this.options.$parent.append(that.$el);
            }
        },
        'listenToSizeUpdates': function () {
            //console.log("ProductColorView.listenToSizeUpdated()");
            MessageBus.on('ProductSizeView.sizeUpdated-' + this.options.productID, this.onSizeUpdated, this);
            MessageBus.on('ProductSizeView.updateCheckedSizes', this.onUpdateCheckedSizes, this);
        },

        onUpdateCheckedSizes: function () {
            //console.log("ProductColorView.onUpdateCheckedSizes()");
            var $checked = this.options.$parent.parent().find('.mar-product-size-container input:checked, .mar-product-size-container option:checked'),
                checkedLen = $checked.length,
                $current;

            this.selectedSizes = {};

            for (var i = 0; i < checkedLen; i++) {
                $current = $($checked.get(i));
                var checkedSizeID = $current.val();
                var checkedSizeType = $current.attr('data-option-key');

                this.selectedSizes[sizeType] = sizeID;
            }
        },
        onSizeUpdated: function (sizeType, sizeID, productID) {
            //console.log("ProductColorView.onSizeUpdate()");
            if (this.options.productID === productID) {
                var skus = _.filter(this.model.sku_data, function (sku) {
                    if ((sku.get(sizeType) === sizeID) && (sku.get('quantity') > 0)) {
                        return sku;
                    }
                });

                if (_.isEmpty(skus)) {
                    //this.showDisabledState(true);
                } else {
                    //this.showDisabledState(false);
                }
            }
        },

        'listenToColorUpdates': function () {
            //console.log("ProductColorView.listenToColorUpdates()");
            MessageBus.on('ProductMediaView.ProductZoomView.setMedia-' + this.options.prefixID, this.onProductZoomSetMedia, this);
            MessageBus.on('QuickView.setDefaultColor-' + this.options.prefixID, this.onSetDefaultColor, this);
            MessageBus.on('QuickView.setNextDefaultColor-' + this.options.prefixID, this.onSetNextDefaultColor, this);
        },
        onSetDefaultColor: function (colorID, productID) {
            //console.log("ProductColorView.onSetDefaultColor()");
            if (productID === this.options.productID) {

                if (colorID === this.model.id) {
                    var skuDataLength = this.colorQuantityMap[this.model.id].sku_data_length,
                        inventory = this.colorQuantityMap[this.model.id].inventory;

                    if (skuDataLength !== inventory) {
                        this.updateSelectedColor(null, true);
                    } else {
                        MessageBus.trigger('PDP.setNextDefaultColor');
                        // JU ALM-150 - Narahari
                        var $multiPdp = $('.mar-pdp-multiproduct');
                        if ($multiPdp[0]) {
                            MessageBus.trigger('ProductColorView.priceUpdated', this.model.prices, this.options.productID);
                        }
                    }
                }
            }
        },
        onSetNextDefaultColor: function (productID) {
            if (productID === this.options.productID) {
                var skuDataLength = this.colorQuantityMap[this.model.id].sku_data_length,
                    inventory = this.colorQuantityMap[this.model.id].inventory,
                    isDefaultSet = this.options.$parent.find(':checked').length;

                if (skuDataLength !== inventory && isDefaultSet === 0) {
                    this.updateSelectedColor(null, true);
                }
            }
        },
        onProductZoomSetMedia: function (assets, productID, colorID, prefixID) {
            //console.log("ProductColorView.onProductZoomSetMedia()");
            if (productID === this.options.productID && colorID === this.model.id && prefixID === this.options.prefixID) {
                this.model.mediaAssets = assets;
            }
        },
        'showDisabledState': function (isDisabled) {
            //console.log("ProductColorView.showDisabledState(" + isDisabled + ")");
            var $input = this.$input;

            if (isDisabled === true) {
                $input.attr('disabled', 'disabled');
                $input.next('label').attr('title', 'Unavailable');
                if (this.delegatedEvents === true) {
                    this.undelegateEvents();
                    this.delegatedEvents = false;
                }

                if ($input.is(':checked')) {
                    $input.removeAttr('checked');
                }
            } else {
                $input.removeAttr('disabled');
                $input.next('label').removeAttr('title');
                if (this.delegatedEvents === false) {
                    this.delegateEvents();
                    this.delegatedEvents = true;
                }
            }
        },
        'updateColor': function (eventType) {
            MessageBus.trigger('ProductColorView.colorUpdated', this.model.option_key, this.model.id, this.options.productID, this.model.background, eventType, this.selectedSizes);
            MessageBus.trigger('ProductColorView.priceUpdated', this.model.prices, this.options.productID);
            MessageBus.trigger('ProductColorView.promoUpdated', this.model, this.options.productID, this.model.prefix_id);
            //ALM-141 (MAR-CR-5075)
            this.restoreSize();
        },
        'restoreSize': function () {
            //ALM-141 (MAR-CR-5075)
            var $colorSizeContainer = this.$el.closest(".mar-product-selection-container"),
                $sizeContainer = $colorSizeContainer.find(".asc-product-size-container"),
                $sizeToSelect = $sizeContainer.find("input[data-size-id='" + $colorSizeContainer.data("selected-size") + "'][disabled!='disabled']"),
                $lengthToSelect;
            if ($sizeContainer.length < 2) {
                if ($sizeToSelect[0]) {
                    $sizeToSelect.trigger("click");
                }
            }
            else {
                $lengthToSelect = $sizeContainer.find("input[data-size-id='" + $colorSizeContainer.data("selected-length") + "'][disabled!='disabled']");
                if ($sizeToSelect[0] && $lengthToSelect[0]) {
                    $sizeToSelect.trigger("click");
                    $lengthToSelect.trigger("click");
                }
            }
        },
        'updateSelectedColor': function (e, updateSelection) {
            //console.log("ProductColorView.updateSelectedColor()");
            clearTimeout(window.userActions.mouseLeaveCall || 0);
            clearTimeout(window.userActions.mouseEnterCall || 0);
            if (typeof updateSelection === 'undefined') {
                /*
                 * Ensighten Tracking Start:
                 * Event: quickViewColorClick:- Color swatch is clicked
                 */
                var $clickedElement = $(e.currentTarget),
                    $quickView = $clickedElement.parents("#quickView");

                if ($quickView[0]) {
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {"name": "quickViewColorClick"});
                }

                /*
                 * Ensighten Tracking End
                 */

                MessageBus.trigger('ProductSizeView.resetSelection');
            }

            var $link = $('.mar-full-details'),
                productURL,
                currentColor = this.$input.val(),
                $colorListWrap = this.$input.closest(".mar-filter-color");

            window.userActions.selectedColor = currentColor;

            /*Fix Start for ART-4933*/
            $colorListWrap.find('input[type="radio"]').removeProp("checked").removeAttr("checked");

            this.$input.prop("checked", true).attr("checked", true);
            /*Fix End for ART-4933*/
            if ($link.length > 0 && $link.attr("href") !== undefined) {
                productURL = $link.attr('href').split("#");
                $link.attr("href", productURL[0] + '#color/' + currentColor);
            }

            this.updateColor('selected');

            if (updateSelection === undefined || updateSelection === true) {
                MessageBus.trigger('ProductColorView.updateSelectedColor-' + this.model.prefix_id, this.model.name, this.options.productID, this.model.id, this.model.background, this.model.mediaAssets, this.model.prefix_id, this.model.imageset);
                MessageBus.trigger('QuickView.selectionMade-' + this.options.prefixID);
            }

            /*Tanvi - [ALM 3808] The following code is responsible to enable the length if its the single length available, when the user
             * switches from one color to another.
             */
            /*if (typeof updateSelection === 'undefined') {
             var $lengthContainer = this.options.$parent.parents('.mar-product-selection-container').find('.mar-product-size-container:first').find('.asc-product-size-container:nth-child(2)').find('.mar-product-sizes'),
             totalLengths = 0;

             if ($lengthContainer[0]) {
             totalLengths = $lengthContainer.children().length;

             if(totalLengths === 1) {
             $lengthContainer.find('li:first-child input:enabled').prop('checked', true);
             }
             }
             }*/
            //ART-8038
            if (typeof updateSelection === 'undefined') {
                //var $lengthContainer = this.options.$parent.parents('.mar-product-selection-container').find('.mar-product-size-container:first').find('.asc-product-size-container:nth-child(2)').find('.mar-product-sizes'),
                var $lengthContainer = this.options.$parent.parents('.mar-product-selection-container').find('.mar-product-size-container:first').find('.asc-product-size-container').find('.mar-product-sizes'),
                    totalLengths = 0;

                if ($lengthContainer) {
                    totalLengths = $lengthContainer.length;

                    if (totalLengths > 1) {

                        if ($($lengthContainer[0]).find('li').length === 1) {
                            $($lengthContainer[0]).find('li:first-child input:enabled').prop('checked', true).attr('checked', true);
                        }

                        if ($($lengthContainer[1]).find('li').length === 1) {
                            $($lengthContainer[1]).find('li:first-child input:enabled').prop('checked', true).attr('checked', true);
                        }

                    } else {

                        if ($($lengthContainer[0]).find('li').length === 1) {
                            $($lengthContainer[0]).find('li:first-child input:enabled').prop('checked', true).attr('checked', true);
                        }

                    }
                }
            }
        },
        'updateHoverColor': function () {
            var el = this.$el.find('input');
            if (!el.is(':checked')) {
                MessageBus.trigger('ProductSizeView.storeSelection', this.options.$parent.parents('.mar-product-selection-container').find('.mar-product-size-container:first'));
            }

            MessageBus.trigger('ProductColorView.updateHoverColor-' + this.model.prefix_id, this.model.name, true, this.options.productID, this.model.id, this.model.background, this.model.mediaAssets, this.model.prefix_id, this.model.imageset);
            this.updateColor('hover');

        },
        'removeHoverColor': function () {
            //console.log("ProductColorView.removeHoverColor()");
            MessageBus.trigger('ProductColorView.updateHoverColor-' + this.model.prefix_id, '', false, this.options.productID, this.model.id, this.model.background, this.model.mediaAssets, this.model.prefix_id, this.model.imageset);

            var el = this.$el.find('input');
            if (!el.is(':checked')) {
                MessageBus.trigger('ProductSizeView.restoreSelection');
            }
        },
        'cleanView': function () {
            //console.log("ProductColorView.cleanView()");
            //this.turnOffEvents();
            //this.options.$parent.empty();
        },
        'turnOffEvents': function () {
            //console.log("ProductColorView.turnOffEvents()");
            MessageBus.off('ProductMediaView.ProductZoomView.setMedia-' + this.options.prefixID, this.onProductZoomSetMedia, this);
            MessageBus.off('QuickView.setDefaultColor-' + this.options.prefixID, this.onSetDefaultColor, this);
            MessageBus.off('ProductSizeView.sizeUpdated-' + this.options.productID, this.onSizeUpdated, this);
            MessageBus.off('ProductSizeView.updateCheckedSizes', this.onUpdateCheckedSizes, this);
            this.undelegateEvents();
            this.unbind();
            this.remove();
        }
    });
    return ColorView;
});

define('ProductColorSelectView', [
    'MessageBus',
    'components/quickview/ProductColorCollection',
    'components/quickview/ProductColorView'
], function (MessageBus,
             ProductColorCollection,
             ProductColorView) {

    'use strict';

    var ProductColorSelectView = Backbone.View.extend({

        'events': {},

        'selectors': {
            'selectedColor': '.mar-selected-color',
            'hoverColor': '.mar-hover-color'
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            //console.log("ProductColorSelectView.initialize()");
            var that = this;

            this.options = options || {};

            if ($('#product-detail-color-template').length > 0) {

                this.colorViews = [];

                if (this.options.$parent.length > 0) {
                    this.$el = this.options.$parent;
                }

                this.listenTo(this.collection, 'reset', function () {
                    //console.log("ProductColorSelectView.on.collection.reset EVENT");
                    that.options.$parent.empty();
                    that.setupViews(that);
                });

                this.updateColorNameEvents();

                this.setupViews(this);
            }
        },
        'setupViews': function (context) {
            //console.log("ProductColorSelectView.setupViews()");
            this.cleanViews();
            //console.log('begin');
            // create a new view
            context.colorCollection = new ProductColorCollection();
            context.colorCollection.add(context.collection.models[0].attributes.values);
            context.render();
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            //console.log("ProductColorSelectView.render()");
            var that = this,
                color_key = that.collection.models[0].attributes.option_key;

            this.$el.empty();

            _.each(this.colorCollection.models, function (item, i) {

                item.set('option_key', that.collection.models[0].attributes.option_key);

                var color_id = item.collection.models[i].attributes.id;

                var matchingSKUs = _.filter(that.options.skuCollection.models, function (sku) {
                    if (sku.get(color_key) === color_id) {
                        var skuItem = that.options.inventoryCollection.models[0].attributes[sku.get('sku_id')];

                        if (skuItem !== undefined) {
                            var threshold = false;

                            if (skuItem.show_threshold_message) {
                                sku.set("show_threshold_message", skuItem.show_threshold_message);
                            }
                            sku.set("quantity", skuItem.quantity);
                            return sku;
                        }
                    }
                });

                item.set('sku_data', matchingSKUs);

                //gift pdp does not show out of stock colors whereas pdp shows them as disabled, so this special
                //case is required.

                if (that.options.prefixID === 'giftpdp' && item.attributes.sku_data[0].attributes.quantity === 0) {

                } else {
                    var color = new ProductColorView({
                        'model': item.attributes,
                        '$parent': that.$el,
                        'productID': that.options.productID,
                        'prefixID': that.options.prefixID
                    });

                    that.colorViews.push(color);
                }
            });
        },
        'updateColorNameEvents': function () {
            //console.log("ProductColorSelectView.updateColorNameEvents()");
            var that = this;
            // selector changed from '.mar-filter-color' to '.mar-filter-color li'
            this.options.$colorContainer.find('.mar-filter-color li').on('mouseleave', function () {
                //console.log("ProductColorSelectView.on.mouseLeave .mar-filter-color EVENT");
                var $selectionContainer = that.options.$parent,
                    $checked = $selectionContainer.find(':checked'),
                    checkedLen = $checked.length;

                if (checkedLen > 0) {
                    $checked.trigger('click', true);
                }
            });
            MessageBus.on("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.on("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
        },
        onUpdateHoverColor: function (color, isActive, productID, colorID) {
            //console.log("ProductColorSelectView.onUpdateHoverColor()");
            var $selectionContainer = this.options.$parent,
                $checked = $selectionContainer.find(':checked'),
                checkedLen = $checked.length;

            if (this.options.$colorContainer) {
                if (this.options.$colorContainer.hasClass('inactive')) {
                    return;
                }
            }
            if (this.options.productID === productID && productID !== undefined) {
                if (isActive !== this.lastActive) {
                    $(this.options.$colorContainer.find(this.selectors.hoverColor)).toggleClass('active');
                }

                $(this.options.$colorContainer.find(this.selectors.hoverColor)).html(color);

                if (isActive !== false) {
                    this.options.$colorContainer.attr('data-color-id', colorID);
                    //MessageBus.trigger('GiftItemView.changeGiftItem' );
                } else {
                    //if not active, go back to the last active color
                    if (checkedLen > 0) {
                        $checked.trigger('click', false);
                    }
                }

                this.lastActive = isActive;
            }
        },
        onUpdateSelectedColor: function (color, productID, background, colorID) {
            //console.log("ProductColorSelectView.onUpdateSelectedColor()");
            if (this.options.$colorContainer) {
                if (this.options.$colorContainer.hasClass('inactive')) {
                    return;
                }
            }
            // there was an edge case where both of these were undefined

            if (this.options.productID === productID && productID !== undefined) {
                //if change of color, enable all colors
                /*this.options.$colorContainer.find('input').each(function(key, val){
                 var $val = $(val);
                 if($val.hasClass('disabled')){
                 $val.removeClass('disabled');
                 }
                 });*/

                $(this.options.$colorContainer.find(this.selectors.selectedColor)).html(color);
                this.options.$colorContainer.attr('data-color-id', colorID);
                var $isGiftItemWrap = this.options.$colorContainer.parents('.asc-free-gift-slider-item:first');
                if ($isGiftItemWrap[0]) {
                    MessageBus.trigger('GiftItemView.selectGiftItem', this.options.$colorContainer);
                    _.throttle(function () {
                        MessageBus.trigger('GiftItemView.changeGiftItem');
                    }, 100);
                }
                //pass along data pinterest href setup
                var pinterestDescription = $('.mar-product-title').html() +
                    " (original price, " + $('.mar-price').html() +
                    ") available at #Maurices";
                MessageBus.trigger("SocialApp.pinterestUpdate", {
                    'description': pinterestDescription
                });
            }
            MessageBus.trigger("PDP.autoSelectSingleSize");
        },
        'cleanViews': function () {
            //console.log("ProductColorSelectView.cleanView()");
            var i = 0,
                colorViewLength = this.colorViews.length;

            _.each(this.colorViews, function (colorView) {
                colorView.cleanView();
            });

            this.colorViews = [];
        },
        'turnOffEvents': function () {
            //console.log("ProductColorSelectView.turnOffEvents()");
            MessageBus.off("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.off("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
        },
        close: function () {
            //console.log("ProductColorSelectView.close()");
            this.turnOffEvents();
            this.cleanViews();
            this.unbind();
            this.remove();
        }
    });
    return ProductColorSelectView;
});

define('components/quickview/ProductSizeModel', [], function () {
    'use strict';

    var ProductSizeModel = Backbone.Model.extend({
        'defaults': {},

        'initialize': function () {

        }
    });

    // make it available
    return ProductSizeModel;
});
define('components/quickview/ProductSizeSelectCollection', [
    './ProductSizeModel'
], function (ProductSizeModel) {
    'use strict';
    var ProductSizeSelectCollection = Backbone.Collection.extend({
        'model': ProductSizeModel
    });
    return ProductSizeSelectCollection;
});

define('components/quickview/ProductSizeCollection', [
    './ProductSizeModel'
], function (ProductSizeModel) {
    'use strict';
    var ProductSizeCollection = Backbone.Collection.extend({
        'model': ProductSizeModel
    });
    return ProductSizeCollection;
});

define('components/quickview/ProductSizeView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var SizeView = Backbone.View.extend({

        'className': 'cmn-radio-container',

        'events': {
            'click input': 'updateSize',
            'mouseover': 'updatePriceOnSize',
            'mouseout': 'updatePriceOnSize'
        },

        'initialize': function (options) {
            //console.log("ProductSizeView.initialize()");
            this.options = options || {};

            // hoverstate object keeps track is colors are being hovers and
            // if this item has changed because of hovering
            this.hoverState = {
                isActive: false, //if hoverover is active
                itemToggled: false //if item has toggle for hoverstate
            };
            this.delegatedEvents = true;

            // If mobile view is desired
            if (this.options.mobile) {
                this.renderMobile();
            } else if ($('#product-detail-size-template').length > 0) {
                this.template = _.template($('#product-detail-size-template').html());
                this.render();
            }

            //size needs to update for both color and size
            this.listenToSizeUpdates();
            this.listenToColorUpdates();

            this.currentColor = null;
            this.selectedSizes = {};
            //ALM-141 (MAR-CR-5075)
            this.$colorSizeContainer = this.$el.closest(".mar-product-selection-container");
        },

        'render': function () {
            //console.log("ProductSizeView.render()");
            this.sizeData = this.model;

            this.sizeData.itemType = this.options.sizeType;
            this.sizeData.prefix_id = this.options.prefixID;

            this.$el.append(this.template(this.sizeData));
            if (!(this.sizeData.prefix_id === "giftitem" && this.sizeData.sku_data[0].attributes.quantity < 1)) {
                this.options.$parent.append(this.$el);
            }

            this.totalSizes = this.options.$parent.parents('.mar-product-size-container').find('.asc-product-size-container').length;
        },

        // rending for mobilr view
        renderMobile: function () {
            this.sizeData = this.model;

            this.$el.text(this.sizeData.value);
            this.$el.attr('id', this.sizeData.prefix_id || 'pdp' + '-' + this.sizeData.product_id + '-' + this.sizeData.size_type + '-' + this.sizeData.id);
            this.$el.attr('data-size-id', this.sizeData.id);
            this.$el.attr('data-size-type', this.sizeData.size_type);
            this.$el.attr('data-size-value', this.sizeData.value);
            this.$el.attr('name', this.sizeData.product_id + '-' + this.sizeData.size_type);
            this.$el.attr('value', this.sizeData.id);
            this.$el.attr('data-option-key', this.sizeData.option_key);

            this.options.$parent.append(this.$el);
        },

        'listenToSizeUpdates': function () {
            //console.log("ProductSizeView.listentoSizeUpdates()");
            MessageBus.on('ProductSizeView.sizeUpdated-' + this.options.productID, this.onSizeUpdated, this);

            // For mobile component, when any size is selected
            MessageBus.on('ProductSizeView.size.selected.' + this.$el.attr('value'), this.updateSize, this);
        },
        onSizeUpdated: function (sizeType, sizeID, productID, selectedSizes) {
            //console.log("ProductSizeView.onSizeUpdated()");

            if (this.$el.hasClass('inactive') || _.isEmpty(selectedSizes)) {
                return;
            }
            if (this.options.productID === productID) {
                /* before i messed with it
                 var skus = _.filter(that.model.sku_data,function(sku) {
                 if((sku.get(sizeType) === sizeID) && (sku.get('quantity') > 0)) {
                 return sku;
                 }
                 });*/

                var sizesExist,
                    sizeMatched,
                    that = this;

                this.selectedSizes = selectedSizes;
                var skus = _.filter(this.model.sku_data, function (sku) {
                    sizesExist = false;
                    sizeMatched = 0;

                    for (var selectedSizeType in that.selectedSizes) {
                        if (that.selectedSizes[selectedSizeType] === sku.get(selectedSizeType)) {
                            sizeMatched++;
                        }
                    }

                    var sizeLnMatch = that.getObjectLength(that.selectedSizes);
                    if (sizeMatched === sizeLnMatch) {
                        sizesExist = true;
                    }

                    if (that.totalSizes === 1) {
                        sizesExist = true;
                    }

                    if (sizesExist === true && sku.get('quantity') > 0) {
                        //if a color is selected it better match
                        if ((that.currentColor !== null) && (sku.get('color') === that.currentColor)) {
                            return sku;

                            //no color selected? ok
                        } else {
                            if (that.currentColor === null) {
                                return sku;
                            }
                        }
                    }
                });

                if (sizeType !== this.model.option_key) {
                    if (_.isEmpty(skus)) {
                        this.showDisabledState(true, false);
                    } else {
                        if (skus.length === 1) {
                            that.showDisabledState(false, true);
                        } else {
                            this.showDisabledState(false, false);
                        }
                    }
                }
            }
        },
        'listenToColorUpdates': function () {
            //console.log("ProductSizeView.listenToColorUpdates()");
            var that = this;

            MessageBus.on('ProductColorView.colorUpdated', this.onColorUpdated, this);
            //This listener is needed because 'ProductColorView.colorUpdated' does not pass if over on or off
            MessageBus.on('ProductColorView.updateHoverColor-' + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.on('ProductColorView.updateCurrentColor-' + this.options.prefixID, this.onUpdateCurrentColor, this);
        },
        onColorUpdated: function (colorType, colorID, productID, background, eventType, selectedSizes) {
            //console.log("ProductSizeView.onColorUpdated()");
            var that = this;
            //set flag if in hover state or not
            if (eventType === 'hover') {
                that.hoverState.isActive = true;
            }
            else {//event triggered is not cause by hover so reset hoverState
                that.hoverState = {
                    isActive: false,
                    itemToggled: false
                };
            }

            if (that.$el.hasClass('inactive')) {
                return;
            }
            if (that.options.productID === productID) {
                /* before me
                 var skus = _.filter(that.model.sku_data,function(sku) {
                 if((sku.get(colorType) === colorID) && (sku.get('quantity') > 0)) {
                 return sku;
                 }
                 });*/

                /* Tanvi - [ALM 3808] we were using that.selectedSizes which was refering to the old collection.
                 * I have made the changes to use the selectedSizes from the function argument instead.
                 */
                that.currentColor = colorID;

                var sizesExist,
                    sizeMatched;

                var skus = _.filter(that.model.sku_data, function (sku) {
                    sizesExist = false;
                    sizeMatched = 0;

                    for (var selectedSizeType in selectedSizes) {
                        if (selectedSizes[selectedSizeType] === sku.get(selectedSizeType)) {
                            sizeMatched++;
                        }
                    }

                    var sizeLengthMatch = that.getObjectLength(selectedSizes);

                    if (sizeMatched === sizeLengthMatch) {
                        sizesExist = true;
                    }

                    if (that.totalSizes === 1) {
                        sizesExist = true;
                    }

                    if (sku.get(colorType) === that.currentColor && sizesExist === true && sku.get('quantity') > 0) {
                        return sku;

                        //no color selected? ok
                    } else {
                        if (that.currentColor === null) {
                            return sku;
                        }
                    }
                });

                if (_.isEmpty(skus)) {
                    that.showDisabledState(true, false);
                } else {
                    that.showDisabledState(false, false);
                }
            }
        },
        onUpdateHoverColor: function (color, isActive) {
            //console.log("ProductSizeView.onUpdateHoverColor()");
            this.hoverState.isActive = isActive;
            //on hover off: if item toggled because of hover change, untoggle item
            if (!this.hoverState.isActive && this.hoverState.itemToggled) {
                var $input = this.$el.find('input');
                if ($input.attr('disabled') === 'disabled') {
                    $input.removeAttr('disabled');
                } else {
                    $input.attr('disabled', 'disabled');
                }
            }
        },
        onUpdateCurrentColor: function (color) {
            //console.log("ProductSizeView.onUpdateCurrentColor()");
            this.currentColor = color;
        },
        'showDisabledState': function (isDisabled, toBeChecked) {
            //console.log("ProductSizeView.showDisabledState(" + isDisabled + ")");
            //console.log(this);
            var $size = this.$el.find('input');

            var selectBtn = this.$el.parent().siblings('.asc-selected').children('button');

            // check for mobile version
            $size = $size.length ? $size : this.$el;

            if (isDisabled === true) {
                $size.attr('disabled', 'disabled');
                if (this.delegatedEvents === true) {
                    this.undelegateEvents();
                    this.delegatedEvents = false;
                }

                // indicate disables state on select menu
                $size.addClass('disabled');

                if ($size.is(':checked')) {
                    $size.removeAttr('checked');

                    // indicate disables state on select Button
                    if (this.options.mobile) {
                        selectBtn.addClass('disabled');
                    }
                }

                /*else if ( $size.is(':selected') ){
                 $size.removeAttr('selected');
                 this.options.$parent.change();
                 }*/
            } else {
                $size.removeAttr('disabled');
                if (this.delegatedEvents === false) {
                    this.delegateEvents();
                    this.delegatedEvents = true;
                }

                // remove disables state on select menu
                $size.removeClass('disabled');
                // remove disabled state on select Button
                if (this.options.mobile) {
                    selectBtn.removeClass('disabled');
                }
                // Might need to trigger change for mobile
            }
        },
        'updateSize': function (e) {
            //console.log("ProductSizeView.updateSize()");
            var that = this,
                $input = this.$el.find('input');

            // if desktop version
            if ($input.length) {
                $input.attr("checked", "checked");
            }
            //ALM-141 (MAR-CR-5075)
            if ($input.attr("data-size-type") !== undefined && $input.attr("data-size-type").toLowerCase() === "size") {
                this.$colorSizeContainer.data("selected-size", $input.attr("data-size-id"));
            }
            else {
                this.$colorSizeContainer.data("selected-length", $input.attr("data-size-id"));
            }
            //MessageBus.trigger('ProductSizeView.sizeUpdated',this.model.option_key,this.model.id,this.options.productID);
            MessageBus.trigger('ProductSizeView.updateCheckedSizes', this.model.option_key, this.model.id, this.options.productID);
            //select length if none of the enabled lengths selected
            if ($(".mar-product-sizes")[1]) {
                this.updateLength();
            }
            if (this.options.skuBasedPrice) {
                var skuPrices = that.getCurrentSkuModel();
                setTimeout(function () {
                    MessageBus.trigger('QuickView.selectionMade-' + that.options.prefixID);
                    MessageBus.trigger('ProductColorView.priceUpdated', skuPrices, that.options.productID);
                }, 0);
            }
            else {
                setTimeout(function () {
                    MessageBus.trigger('QuickView.selectionMade-' + that.options.prefixID);
                }, 0);
            }
            // update promo msg
            this.updatePromo(e || {});
        },
        // To update the promo message
        'updatePromo': function (e) {
            var that = this;
            if (this.options.skuBasedPromotion) {
                var matchedSKU, promoMsg;
                $.each(this.model.sku_data, function (key, value) {
                    if (value.attributes.color === that.currentColor) {
                        matchedSKU = value;
                        return false;
                    }
                });
                if (matchedSKU) {
                    promoMsg = matchedSKU.attributes;
                } else {
                    promoMsg = this.model.sku_data[0].attributes;
                }
                // save promo msg for selected-size ( useful for mouseout event )
                if (e.type == "click") {
                    $(document).data('promoMsg', promoMsg);
                } else if (e.type == "mouseout") {
                    promoMsg = $(document).data('promoMsg') || '';
                }
                MessageBus.trigger("ProductPromoView.render." + that.options.prefixID, promoMsg);
            }
        },
        getCurrentPrice: function () {
            var $price = $('.asc-product-price');
            var currentPrice = {};

            if ($price.find('.mar-price.strikethrough').length && $price.find('.mar-price.mar-price').length) {
                currentPrice.sale_price = $price.find('.mar-price.mar-price').text() * 1;
                currentPrice.list_price = $price.find('.mar-price.strikethrough').text() * 1;
            } else {
                currentPrice.list_price = $price.find('.mar-price.mar-price').text() * 1;
            }

            return currentPrice;
        },
        'updatePriceOnSize': function (e) {
            //console.log("ProductSizeView.updatePriceOnSize()");
            if (this.options.skuBasedPrice) {
                var that = this,
                    skuPrices = that.getCurrentSkuModel(),
                    isDisabled = $(this.$el).find('input').attr("disabled");

                if (e.type == "mouseout" && !($(e.target).prev().is(':checked'))) {
                    setTimeout(function () {
                        MessageBus.trigger('ProductColorView.priceUpdated', this.currentprice, that.options.productID);
                    }, 0);
                } else {
                    // Save existing state
                    this.currentprice = this.getCurrentPrice();

                    if (isDisabled === "disabled") {
                        setTimeout(function () {
                            MessageBus.trigger('ProductColorView.priceUpdated', null, that.options.productID);
                        }, 0);
                    } else if (skuPrices) {
                        setTimeout(function () {
                            MessageBus.trigger('ProductColorView.priceUpdated', skuPrices, that.options.productID);
                        }, 0);
                    }
                }
            }
            // update promo msg
            this.updatePromo(e);
        },
        'getCurrentSkuModel': function () {
            var that = this,
                skuItem = _.filter(that.model.sku_data, function (sku) {
                    if (that.currentColor === sku.get("color")) {
                        return sku;
                    }
                });
            if (skuItem.length > 0)
                return skuItem[0].get("prices");
        },
        'updateLength': function () {
            //var $lengthContainer=$(".mar-product-sizes:eq( 1 )");
            // Narahari - JU ALM - 145
            var $lengthContainer = this.$el.parents('.mar-product-size-container').find(".mar-product-sizes:eq( 1 )");
            //$lengthItems=$lengthContainer.find("input[type='radio']");
            if ($lengthContainer.find("input[data-option-key='size_length'][disabled!='disabled']").length === 1) {
                $lengthContainer.find("input[data-option-key='size_length'][disabled!='disabled']:eq(0)").prop("checked", true);
            }

        },
        'cleanView': function () {
            //console.log("ProductSizeView.cleanView()");
            this.turnOffEvents();
        },
        'turnOffEvents': function () {
            //console.log("ProductSizeView.turnOffEvents()");
            MessageBus.off('ProductSizeView.sizeUpdated-' + this.options.productID, this.onSizeUpdated, this);
            MessageBus.off('ProductColorView.colorUpdated', this.onColorUpdated, this);
            MessageBus.off('ProductColorView.updateHoverColor-' + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.off('ProductColorView.updateCurrentColor-' + this.options.prefixID, this.onUpdateCurrentColor, this);
            this.undelegateEvents();
            this.unbind();
            this.$el.remove();
        },
        'getObjectLength': function (obj) {

            var objLength = 0;

            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    objLength++;
                }
            }

            return objLength;

        }
    });
    return SizeView;
});

define('components/quickview/ProductSizeSelectView', [
    'MessageBus',
    'components/quickview/ProductSizeCollection',
    'components/quickview/ProductSizeView'
], function (MessageBus,
             ProductSizeCollection,
             ProductSizeView) {

    'use strict';

    var ProductSizeSelectView = Backbone.View.extend({

        'tagName': 'div',

        'className': 'asc-product-size-container',

        'events': {},

        'initialize': function (options) {
            //console.log("ProductSizeSelectView.initialize()");
            var that = this;

            this.options = options || {};

            // use mobile template, if using mobile view
            this.templateSel = this.options.mobile ? '#mobile-product-size-container-template' : '#product-size-container-template';

            if ($(this.templateSel).length > 0) {
                this.template = _.template($(this.templateSel).html());


                this.listenTo(this.options.collection, 'reset', function () {
                    //console.log("ProductSizeSelectView.on.collection.reset EVENT");
                    that.setupViews(that);
                    this.setupEvents();
                    this.render();
                });

                this.selectedSizes = [];
                this.sizeViews = [];
                this.setupViews(this);
                this.setupEvents();
                this.render();
            }
        },
        'setupEvents': function () {
            //console.log("ProductSizeSelectView.setupEvents()");
            this.turnOffEvents();
            MessageBus.on('ProductSizeView.updateCheckedSizes', this.onUpdateCheckedSizes, this);

            // Bind mobile view specific events
            if (this.options.mobile) {
                this.$container.on('change', this.sizeChange);
                MessageBus.on('ProductColorView.colorUpdated', this.colorUpdated, this);
            }
        },

        // Broadcast size change to individual options, so that they can update their state
        sizeChange: function (e) {
            var $target = $(e.target),
                $targetValue = $target.val(),
                $bagBtn = $(".mar-add-to-bag");
            if ($targetValue === "") {
                $bagBtn.attr("disabled", "true");
            }
            // Broadcast selected size
            MessageBus.trigger('ProductSizeView.size.selected.' + $target.val());
        },

        // Reset select-box when a color is selected
        // JU JIRA-ART-9373 Narahari
        //colorUpdated: function(e){
        colorUpdated: function (e, modelId, productID) {
            var options, value;

            // for single size value, auto select size
            options = this.$container.find('option');
            if (options.length === 2) {
                value = options[1].value;
            }

            // JU JIRA-ART-9373 Narahari
            //this.$container.val( value );
            this.$container.find('option[name=' + productID + '-Size]').parent('select').val(value);
            this.$container.change();
        },

        onUpdateCheckedSizes: function (sizeType, sizeID, productID) {
            //console.log("ProductSizeSelectView.onUpdateCheckedSizes()");
            var $checked = this.options.$parent.find('input:checked, option:checked'),
                checkedLen = $checked.length,
                $current;

            this.selectedSizes = {};

            for (var i = 0; i < checkedLen; i++) {
                $current = $($checked.get(i));
                var checkedSizeID = $current.val();
                var checkedSizeType = $current.attr('data-option-key');

                this.selectedSizes[sizeType] = sizeID;
            }
            MessageBus.trigger('ProductSizeView.sizeUpdated-' + productID, sizeType, sizeID, productID, this.selectedSizes);

            var $isGiftItemWrap = this.options.$parent.parents('.asc-free-gift-slider-item:first');
            if ($isGiftItemWrap[0]) {
                MessageBus.trigger('GiftItemView.selectGiftItem', $isGiftItemWrap);
                _.throttle(function () {
                    MessageBus.trigger('GiftItemView.changeGiftItem');
                }, 100);
            }
        },
        'setupViews': function (context) {
            //console.log("ProductSizeSelectView.setupViews()");
            //this.cleanViews();
            context.$el.empty();
            context.$el.append(context.template(context.collection.models[0].attributes));

            context.options.$parent.append(context.$el);
            context.$container = context.options.$parent.find('.mar-product-sizes').last();
            context.sizeCollection = new ProductSizeCollection();
            context.sizeCollection.add(context.collection.models[0].attributes.values);
        },
        'render': function () {
            //console.log("ProductSizeSelectView.render()");
            var that = this,
                size_key = that.collection.models[0].attributes.option_key;

            _.each(this.sizeCollection.models, function (item, i) {

                item.set('size_type', that.collection.models[0].attributes.type);
                item.set('option_key', that.collection.models[0].attributes.option_key);
                item.set('product_id', that.options.productID);

                var size_id = item.collection.models[i].attributes.id;
                var matchingSKUs = _.filter(that.options.skuCollection.models, function (sku) {

                    if (sku.get(size_key) === size_id) {
                        var qty = that.options.inventoryCollection.models[0].attributes[sku.get('sku_id')];

                        if (qty !== undefined) {
                            sku.set("quantity", qty.quantity);
                            return sku;
                        }
                    }
                });

                item.set('sku_data', matchingSKUs);

                var size = new ProductSizeView({
                    'model': item.attributes,
                    '$parent': that.$container,
                    'productID': that.options.productID,
                    'prefixID': that.options.prefixID,
                    'skuBasedPrice': that.options.skuBasedPrice,
                    'skuBasedPromotion': that.options.skuBasedPromotion,
                    'tagName': that.options.mobile ? 'option' : 'li',
                    'mobile': that.options.mobile
                });

                that.sizeViews.push(size);
            });

            // init custom select for mobile view
            if (this.options.mobile) {
                this.$container.customSelect();
            }
        },
        'cleanViews': function () {
            //console.log("ProductSizeSelectView.cleanViews()");
            var i = 0,
                sizeViewLength = this.sizeViews.length;

            _.each(this.sizeViews, function (sizeView) {
                sizeView.cleanView();
            });
            this.sizeViews = [];
        },
        turnOffEvents: function () {
            //console.log("ProductSizeSelectView.turnOffEvents()");
            MessageBus.off('ProductSizeView.updateCheckedSizes', this.onUpdateCheckedSizes, this);

            this.$container.off('change', this.sizeChange);
            MessageBus.off('ProductColorView.colorUpdated', this.colorUpdated, this);
        },
        close: function () {
            //console.log("ProductSizeSelectView.close()");
            this.cleanViews();
            this.turnOffEvents();
            this.unbind();
            this.$el.remove();
        }
    });
    return ProductSizeSelectView;
});

define('components/pdp/ProductImageView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var ProductImageView = Backbone.View.extend({

        'events': {},

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;

            this.options = options || {};
            this.render();

        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {

        }

    });

    return ProductImageView;
});

define('components/pdp/ProductPriceView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var ProductPriceView = Backbone.View.extend({

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            //console.log("ProductPriceView.initialize()");
            var that = this;

            this.options = options || {};


            if ($('#product-detail-price-template').length > 0) {
                this.template = _.template($('#product-detail-price-template').html());
                this.listenForPriceUpdate();
            }
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function (data) {
            //console.log("ProductPriceView.render()");

            var defaultPriceData = ($.isEmptyObject(data)) ? this.options.priceRange : data;
            // this code is written to display range price in two lines
            if (defaultPriceData && (defaultPriceData.list_price || defaultPriceData.sale_price)) {
                /* toString() is used in below line for typecasting */
                var priceStr = defaultPriceData.list_price ? defaultPriceData.list_price.toString().indexOf('-') != -1 : defaultPriceData.sale_price.toString().indexOf('-') != -1;
                if (priceStr) {
                    this.$el.addClass("product-price-range");
                } else {
                    this.$el.removeClass("product-price-range");
                }
            }

            // if(typeof defaultPriceData.currency === "undefined"){
            // 	defaultPriceData.currency = this.options.priceRange.currency || "$";
            // }

            this.$el.html(this.template(defaultPriceData));
            if (this.options.$parent) {
                this.options.$parent.html(this.$el);
            }
        },
        'listenForPriceUpdate': function () {
            //console.log("ProductPriceView.listenForPriceUpdate()");
            MessageBus.on("ProductColorView.priceUpdated", this.onPriceUpdated, this);
        },
        onPriceUpdated: function (data, productID) {
            //console.log("ProductPriceView.onPriceUpdated()");
            if (this.options.productID === productID) {
                this.render(data);
            }
        },
        close: function () {
            //console.log("ProductPriceView.close()");
            MessageBus.off("ProductColorView.priceUpdated", this.onPriceUpdated, this);
            this.unbind();
            this.remove();
        }

    });
    return ProductPriceView;
});

define('ProductInventoryCollection', [
    './ProductSKUModel'
], function (ProductInventoryModel) {
    'use strict';
    var ProductInventoryCollection = Backbone.Collection.extend({
        'model': ProductInventoryModel
    });
    return ProductInventoryCollection;
});

define('components/quickview/ProductSizeContainerView', [
    'MessageBus',
    'components/quickview/ProductSizeSelectCollection',
    'components/quickview/ProductSizeSelectView',
    'api'
], function (MessageBus,
             ProductSizeSelectCollection,
             ProductSizeSelectView,
             API) {

    'use strict';

    var ProductSizeContainerView = Backbone.View.extend({

        'tagName': 'div',

        'className': 'asc-product-size-container',

        'events': {},

        'initialize': function (options) {
            //console.log("ProductSizeContainerView.initialize()");
            var that = this;

            this.options = options || {};

            this.selectedItems = null;

            // JU fix for ART-8466 - Narahari
            if (this.retainSelectedItems === undefined) {
                this.retainSelectedItems = null;
            }
            this.listenTo(this.collection, 'reset', this.resetCollections);

            this.sizeCollectionArray = [];
            this.attachEvents();
            this.sizeViews = [];
            this.setupViews(true);
        },
        'attachEvents': function () {
            var that = this;
            MessageBus.off('ProductSizeView.resetSelection');
            MessageBus.on('ProductSizeView.resetSelection', this.resetSelection, this);
            MessageBus.off('ProductSizeView.storeSelection');
            MessageBus.on('ProductSizeView.storeSelection', this.storeSelection, this);
            MessageBus.off('ProductSizeView.restoreSelection');
            MessageBus.on('ProductSizeView.restoreSelection', this.restoreSelection, this);
            // Renders product sizes as viewport changes
            //MessageBus.on( "viewport.change", this.renderProductSizeView , this );
            MessageBus.on("viewport.change", function mobileTabletViewReRender(e) {
                var oldView = e.old,
                    newView = e.new;
                if ((oldView === "mobile" && newView !== "mobile") || (oldView !== "mobile" && newView === "mobile")) {
                    that.renderProductSizeView(that);
                }
            });
        },

        'renderProductSizeView': function () {
            var mobileProductSize = API.showMobileView('mobileProductSize');

            // Destroy Existing View
            // JU fix for ART-8466 - Narahari
            if (this.retainSelectedItems === null) {
                this.retainSelectedItems = this.options.$container.find('input:checked, option:checked');
                this.close();
            }
            this.options.mobile = mobileProductSize;

            // Create new View
            this.initialize(this.options);
            // JU fix for ART-8466 - Narahari
            _.each(this.retainSelectedItems, function (element) {
                if (element.localName === 'input') {
                    $('#' + element.id).trigger('click');
                }
            });
            this.retainSelectedItems = null;
        },

        'resetSelection': function () {
            this.selectedItems = null;
        },
        'storeSelection': function ($container) {
            this.selectedItems = $container.find('input:checked, option:checked');
            if (this.selectedItems && this.selectedItems[0]) {
                $.each(this.selectedItems, function (index, item) {
                    $(item).removeAttr('checked');
                });
            }
        },
        'restoreSelection': function () {
            if (this.selectedItems && this.selectedItems[0]) {
                $.each(this.selectedItems, function (index, item) {
                    $(item).first().trigger("click");
                });
                this.selectedItems = null;
            }
        },
        'setupViews': function (updateSizeArray) {
            //console.log("ProductSizeContainerView.setupViews()");
            var i = 0,
                that = this,
                $container = this.options.$container,
                productSizeData;
            // JU fix for ART-8466 - Narahari
            if (this.retainSelectedItems === null || this.retainSelectedItems.length === 0) {
                this.retainSelectedItems = this.options.$container.find('input:checked, option:checked');
            }
            this.options.$parent.empty();

            _.each(this.collection.models, function (item) {

                if (updateSizeArray === true) {
                    productSizeData = new ProductSizeSelectCollection();
                    productSizeData.add(item);
                    that.sizeCollectionArray.push(productSizeData);

                    var productSizeView = new ProductSizeSelectView({
                        '$parent': that.options.$parent,
                        'collection': productSizeData,
                        'skuCollection': that.options.skuCollection,
                        'inventoryCollection': that.options.inventoryCollection,
                        'productID': that.options.productID,
                        'prefixID': that.options.prefixID,
                        'skuBasedPrice': that.options.skuBasedPrice,
                        'skuBasedPromotion': that.options.skuBasedPromotion,
                        'mobile': that.options.mobile
                    });
                    that.sizeViews.push(productSizeView);
                } else {
                    productSizeData = that.sizeCollectionArray[i];
                }

                i++;
            });
        },
        'resetCollections': function () {
            //console.log("ProductSizeContainerView.resetCollections()");
            var i = 0;

            this.setupViews(true);

            for (i; i < this.collection.models.length; i++) {
                var productSizeData = this.collection.models[i];

                if (productSizeData) {
                    this.sizeCollectionArray[i] = productSizeData;
                }
            }
        },
        cleanViews: function () {
            //console.log("ProductSizeContainerView.cleanViews()");
            var i,
                sizeViewLength = this.sizeViews.length;

            for (i = 0; i < sizeViewLength; i++) {
                this.sizeViews[i].cleanViews();
            }

            this.sizeViews = [];
        },
        closeViews: function () {
            //console.log("ProductSizeContainerView.closeViews()");
            var i,
                sizeViewLength = this.sizeViews.length;

            for (i = 0; i < sizeViewLength; i++) {
                this.sizeViews[i].close();
            }

            this.sizeViews = [];
        },
        close: function () {
            //console.log("ProductSizeContainerView.close()");
            this.closeViews();
            this.unbind();
            this.turnOffEvents();
            this.selectedItems = null;
        },
        'turnOffEvents': function () {
            MessageBus.off('ProductSizeView.resetSelection', this.resetSelection, this);
            MessageBus.off('ProductSizeView.storeSelection', this.storeSelection, this);
            MessageBus.off('ProductSizeView.restoreSelection', this.restoreSelection, this);
            // MessageBus.off( "viewport.change", this.renderProductSizeView , this );
            MessageBus.off("viewport.change", this.mobileTabletViewReRender);
        }
    });
    return ProductSizeContainerView;
});

define('components/shared/ProductImageView', [
    'MessageBus'
], function (MessageBus) {
    'use strict';

    //this is a view that is closely integrated with scene 7 functionality. please be careful when editing this file.
    var ProductImageView = Backbone.View.extend({

        'initialize': function (options) {
            //console.log("ProductImageView.initialize()");
            var that = this;

            var defaults = {
                'containerID': '#productContainer',
                'assets': {
                    'mediaServerURL': '',
                    'videoServerURL': '',
                    'asset': ''
                }
            };

            this.options = $.extend({}, defaults, options);

            this.scene7Params = this.options.collection.models[0].attributes.scene7_params;

            this.options.assets.mediaServerURL = this.scene7Params.server_url;
            this.options.assets.videoServerURL = this.scene7Params.video_server_url;
            this.options.assets.accountID = this.scene7Params.account_id;

            this.options.waitingForImage = false;

            this.attachEvents();
        },
        'attachEvents': function () {
            //console.log("ProductImageView.attachEvents()");
            //only update the image set when a new color has been selected
            MessageBus.on("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.on("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.on("Scene7.ImageSetRetrieved", this.onImageSetRetrieved, this);
        },
        onUpdateSelectedColor: function (colorType, productID, colorID, background, assets, prefixID, imageSet) {
            //console.log("ProductImageView.onUpdateSelectedColor()");
            //if this is the product that updated AND the component that updated, do stuff
            if ((productID === this.options.productID) &&
                (prefixID === this.options.prefixID)) {
                this.productID = productID;
                this.colorID = colorID;
                this.imageSet = imageSet;

                this.options.requestURL = this.options.assets.mediaServerURL + this.options.assets.accountID + '/' + imageSet + '?req=imageset,json';

                if (assets === undefined) {
                    this.selectedAssets = {
                        assets: this.options.assets.asset
                    };
                    this.requestScene7Data(this.options.requestURL);
                } else {
                    this.updateImage(assets, 'click');
                }
            }
        },
        onUpdateHoverColor: function (color, hoverIsActive, productID, colorID, background, assets, prefixID, imageSet) {
            //console.log("ProductImageView.onUpdateHoverColor()");
            if ((productID === this.options.productID) &&
                (prefixID === this.options.prefixID)) {

                this.hoverIsActive = hoverIsActive;

                if (hoverIsActive) { //hover over color
                    this.productID = productID;
                    this.colorID = colorID;
                    this.imageSet = imageSet;

                    if (assets === undefined) {
                        this.options.requestURL = this.options.assets.mediaServerURL + this.options.assets.accountID + '/' + imageSet + '?req=imageset,json';
                        this.requestScene7Data(this.options.requestURL);
                    } else {
                        this.updateImage(assets, 'hover');
                    }
                }
                else { //hover out color
                    this.updateImage(this.selectedAssets.assets, 'hover');
                }
            }
        },
        onImageSetRetrieved: function (data) {
            //console.log("ProductImageView.onImageSetRetrieved()");
            //if(that.options.waitingForImage === true) {
            this.parseScene7Data(data);
            //}
        },
        //make a request to scene7 for images based on the URL we built
        'requestScene7Data': function (url) {
            //console.log("ProductImageView.requestScene7Data()");
            this.options.waitingForImage = true;

            $.ajax({
                'jsonp': true,
                'dataType': 'jsonp',
                'type': 'get',
                'url': url
            });
        },
        //figure out whether we need to pull in the default back image
        'parseScene7Data': function (data) {
            //console.log("ProductImageView.parseScene7Data()");
            var mainImageRef,
                set = null,
                prefixLength;

            //ALM-5603 added preset for edit cart item


            prefixLength = this.options.prefixID.indexOf("multiqv");
            mainImageRef = this.imageSet + "?$CTLLarge$";

            if (this.options.prefixID == "giftpdp") {
                mainImageRef = this.imageSet + "?$gcpdp_large$";
            } else if (prefixLength > -1) {
                mainImageRef = this.imageSet + "?$xsmall$";
            }

            //add it as the 3rd & 4th image in the array (scene 7 requires full image AND thumbnail)
            set = this.options.assets.mediaServerURL + this.options.assets.accountID + '/' + mainImageRef;

            this.options.waitingForImage = false;

            MessageBus.trigger('ProductMediaView.ProductZoomView.setMedia-' + this.options.prefixID, set, this.productID, this.colorID, this.options.prefixID);

            if (this.hoverIsActive === false || this.hoverIsActive === undefined) {
                this.updateImage(set, 'click');
            } else {
                this.updateImage(set, 'hover');
            }
        },
        'updateImage': function (assets, eventType) {
            //console.log("ProductImageView.uploadImage()");
            var $img;

            if (eventType.toLowerCase() === 'click') {
                this.selectedAssets = {
                    assets: assets
                };
            }

            if (this.$el.find('img').length === 0) {
                this.$el.append('<img src="' + assets + '">');
            } else {
                $img = this.$el.find('img');
                $img.attr('src', assets);
            }
        },
        close: function () {
            //console.log("ProductImageView.close()");
            MessageBus.off("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.off("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.off("Scene7.ImageSetRetrieved", this.onImageSetRetrieved, this);
            this.unbind();
            this.remove();
        }

    });
    return ProductImageView;
});

define('components/quickview/MultiQuickViewView', [
    'MessageBus',
    'ProductSKUCollection'
], function (MessageBus,
             ProductSKUCollection) {

    'use strict';

    var MultiQuickViewView = Backbone.View.extend({

        'selectors': {
            'selectorContainer': '.mar-product-selection-container',
            'optionContainer': '.mar-option-container',
            'thresholdClass': '.mar-product-quantity-message',
            'quantityClass': '.mar-input-qty',
            'productErrorContainer': '.mar-product-error',
            'selectedColor': '.mar-selected-color'
        },

        'initialize': function (options) {
            //console.log("MultiQuickViewView.initialize()");
            this.options = options || {};
            if ($('#item-msg-json').length > 0) {
                var msg = $.parseJSON($('#item-msg-json').html());
                this.msg = msg.messages;
            }

            if ($('#multi-quick-view-template').length > 0) {
                this.template = _.template($('#multi-quick-view-template').html());
                this.render();
                this.attachEvents();
            }
            this.productID = this.options.collection.models[0].get('product_id');


        },
        'render': function () {
            //console.log("MultiQuickViewView.render()");
            this.templateData = this.collection.models[0].attributes;
            this.templateData.all_skus_out_of_stock = this.options.all_skus_out_of_stock;
            this.templateData.out_of_stock_message = this.msg.out_of_stock_message;
            this.templateData.product_message = this.options.collection.models[0].get('product_message');
            this.templateData.labels = this.options.labels.label;
            this.$el.append(this.template(this.collection.models[0].attributes));
            this.options.$parent.append(this.$el);
            this.$container = $($(this.options.$parent.find('.mar-pdp-section')).get(this.options.iteration));

        },
        'attachEvents': function () {
            //console.log("MultiQuickViewView.attachEvents()");
            var that = this;

            this.$container.find('.mar-select-item').on("click", function (e) {
                //console.log("MultiQuickViewView.click .mar-select-item EVENT");
                if ($(e.target).is(':checked')) {
                    that.verifySelections("none");
                } else {
                    that.removeSelections();
                    MessageBus.trigger('MultiProductQuickView.verifyModal');
                }
            });

            MessageBus.on("ProductColorView.updateSelectedColor", this.onUpdateSelectedColor, this);
            this.$container.find(this.selectors.quantityClass).on("change", function (e, updateSelections) {
                //console.log("MultiQuickViewView.change quantity EVENT");
                if (updateSelections !== false) {
                    //Passing true here as we want to show low threshold message only on size select
                    that.verifySelections(true);
                }
            });

            MessageBus.on("QuickView.selectionMade-" + this.options.prefixID, this.onSelectionMade, this);
        },
        onUpdateSelectedColor: function (a, ProductId, BackgroundColor) {
            //console.log("MultiQuickViewView.onUpdateSelectedColor()");
            if (ProductId === that.productID) {
                if (BackgroundColor === null || BackgroundColor === undefined) {
                    this.$el.find(".mar-pdp-section").css("background-color", "#fff");
                } else {
                    this.$el.find(".mar-pdp-section").css("background-color", BackgroundColor);
                }
            }
        },
        onSelectionMade: function () {
            //console.log("MultiQuickViewView.onSelectionMade()");
            var that = this;
            setTimeout(function () {
                that.verifySelections(false);
            }, 0);
        },
        'verifySelections': function (showErrorMsg) {
            //console.log("MultiQuickViewView.verifySelection()");
            var that = this,
                $selectContainer = this.$container.find(that.selectors.selectorContainer),
                $containerLen = this.$container.find(that.selectors.optionContainer).length,
                $selected = $selectContainer.find('input:checked, option:checked').not('option[value=""]'),
                available = false;

            if ($selected.length === $containerLen) {
                that.updateSizeColorMsg(false);
                that.filteredSKUCollection = new ProductSKUCollection();

                for (var i = 0; i < $selected.length; i++) {
                    var $selectedItem = $($selected.get(i)),
                        optionKey = $selectedItem.attr('data-option-key'),
                        optionID = $selectedItem.val();

                    if (i === 0) {
                        that.filteredSKUCollection.add(that.filterSKUs(that.options.skuCollection, optionKey, optionID));
                    } else {
                        that.tempSKUCollection = new ProductSKUCollection();
                        that.tempSKUCollection.add(that.filterSKUs(that.filteredSKUCollection, optionKey, optionID));
                        that.filteredSKUCollection = that.tempSKUCollection;
                    }
                }

                available = that.updateQuantityMsg(that.filteredSKUCollection, showErrorMsg);

            } else {
                that.updateSizeColorMsg(true);
                this.$container.attr("data-valid", "false");
            }

            MessageBus.trigger('MultiProductQuickView.verifyModal');
        },
        'removeSelections': function () {
            //console.log("MultiQuickViewView.removeSelection()");
            var $input = this.$container.find('.mar-product-selection-container input'),
                $selections = this.$container.find('.mar-product-selection-container input:checked'),
                $selectedColor = this.$container.find(this.selectors.selectedColor);

            this.updateSizeColorMsg(false);

            $selections.removeAttr("checked");
            // JU | Fix for ALM 890 : Narahari
            $input.removeAttr("disabled").removeClass('disabled');
            this.$container.removeAttr("data-valid");
            $selectedColor.empty();
        },
        'filterSKUs': function (collection, optionKey, optionID) {
            //console.log("MultiQuickViewView.filterSKUs()");
            var filtered = _.filter(collection.models, function (sku) {
                if (sku.get(optionKey) === optionID) {
                    return sku;
                }
            });

            return filtered;
        },

        'updateSizeColorMsg': function (showMsg) {
            //console.log("MultiQuickViewView.updateSizeColorMsg()");
            var $error = this.$container.find(this.selectors.productErrorContainer);

            if (this.$container.find('.mar-select-item:checked').length > 0) {
                if (showMsg === true) {
                    $error.html(this.msg.color_and_size_not_selected);
                } else {
                    $error.empty();
                }
            } else {
                $error.empty();
            }

        },
        'updateQuantityMsg': function (skuItem, updateQuantity) {
            //console.log("MultiQuickViewView.updateQuantityMsg()");
            var threshold = false,
                $thresholdMsg = this.$container.find(this.selectors.productErrorContainer),
                inventory = 0,
                qty = 0,
                $qty = this.$container.find(this.selectors.quantityClass),
                msg = "",
                sku;


            if (this.filteredSKUCollection.models.length > 0) {
                inventory = this.filteredSKUCollection.models[0].attributes.quantity;
                qty = parseInt($qty.val());
                sku = this.filteredSKUCollection.models[0].attributes.sku_id;

                if (this.filteredSKUCollection.models[0].attributes.show_threshold_message) {
                    threshold = this.filteredSKUCollection.models[0].attributes.show_threshold_message;
                }

                if (updateQuantity === true) {
                    if (inventory > 99) {
                        $qty.attr('data-max', 99);
                    } else {
                        $qty.attr('data-max', inventory);
                    }
                    //$qty.trigger('change',false);

                    if (qty > inventory) {
                        $qty.val(inventory);

                        $qty.trigger('change');
                        this.$container.attr("data-valid", "false");
                        msg = this.msg.quantity_request_exceeds_stock.replace("%%XXX%%", inventory);
                        $thresholdMsg.html(msg);
                        if (this.$container.find('.mar-select-item:checked').length > 0) {
                            this.$container.attr("data-valid", "true");
                            this.$container.attr("data-sku-id", sku);
                        }
                    } else {
                        if (qty <= inventory) {
                            $thresholdMsg.empty();
                        }


                        if (this.$container.find('.mar-select-item:checked').length > 0) {
                            this.$container.attr("data-valid", "true");
                            this.$container.attr("data-sku-id", sku);
                        }
                    }
                } else if (updateQuantity === false) {
                    if (threshold === "true") {
                        $thresholdMsg.html(this.msg.threshold_message);
                    }

                    if (this.$container.find('.mar-select-item:checked').length > 0) {
                        this.$container.attr("data-valid", "true");
                        this.$container.attr("data-sku-id", sku);
                    }
                }
                else {
                    if (this.$container.find('.mar-select-item:checked').length > 0) {
                        this.$container.attr("data-valid", "true");
                        this.$container.attr("data-sku-id", sku);
                    }
                }


            } else {
                $thresholdMsg.empty();
                this.$container.attr("data-valid", "false");
            }
        },
        close: function () {
            //console.log("MultiQuickViewView.close()");
            MessageBus.off("QuickView.selectionMade-" + this.options.prefixID, this.onSelectionMade, this);
            MessageBus.off("ProductColorView.updateSelectedColor", this.onUpdateSelectedColor, this);

            this.$container.find('.mar-select-item').off("click");

            if (typeof this.filteredSKUCollection !== "undefined") {
                this.filteredSKUCollection.reset();
                delete this.filteredSKUCollection;
            }
            if ($('#multi-quick-view-template').length > 0) {
                this.$container.find('.mar-select-item').off("click");
                this.$container.find(this.selectors.quantityClass).off("change");
            }

            this.unbind();
            this.remove();
        }
    });
    return MultiQuickViewView;
});

define('components/shared/ProductMediaView', [
    'MessageBus', 'api'
], function (MessageBus, API) {
    'use strict';

    //this is a view that is closely integrated with scene 7 functionality. please be careful when editing this file.
    var ProductMediaView = Backbone.View.extend({

        'initialize': function (options) {
            //console.log("ProductMediaView.initialize()");
            var that = this;

            var defaults = {
                'containerID': '#productContainer',
                'assets': {
                    'mediaServerURL': '',
                    'videoServerURL': '',
                    'asset': '',
                    'accountID': '',
                    'videos': ''
                },
                'instanceIDs': {
                    'flyout': 'flyout',
                    'swatches': 's7swatches',
                    'zoom': 's7zoomView',
                    'video': 's7videoplayer',
                    'mediaSet': 's7mediaSet'
                },
                'instanceClasses': {
                    'container': 's7container',
                    'flyout': 's7flyoutzoom'
                },
                'initialized': false,
                'setSwatches': false
            };

            this.options = $.extend({}, defaults, options);

            this.scene7Params = this.options.collection.models[0].attributes.scene7_params;
            if (this.scene7Params.server_url.indexOf("http") === -1) {
                this.scene7Params.server_url = window.location.protocol + this.scene7Params.server_url;
            }

            if (this.scene7Params.video_server_url.indexOf("http") === -1) {
                this.scene7Params.video_server_url = window.location.protocol + this.scene7Params.video_server_url;
            }
            this.options.assets.mediaServerURL = this.scene7Params.server_url;
            this.options.assets.videoServerURL = this.scene7Params.video_server_url;
            this.options.assets.accountID = this.scene7Params.account_id;
            this.options.assets.videos = this.options.videos;

            this.options.setSwatches = false;

            //this.options.waitingForResponse = false;
            this.selectedAssets = {
                assets: null
            };

            this.attachEvents();
        },
        'attachEvents': function () {
            //console.log("ProductMediaView.attachEvents()");
            var that = this,
                imageSetURL;

            //only update the image set when a new color has been selected
            MessageBus.on("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.on("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.on("Scene7.ImageSetRetrieved", this.onImageSetRetrieved, this);
            if (that.options.prefixID.indexOf('qv') > -1) {
                MessageBus.on("removeScene7", this.onRemoveScene7, this);
            }
            /*MessageBus.on("Scene7.ImageExists",function(data) {
             if(that.options.waitingForResponse === true) {
             that.parseScene7Data(data);
             }
             });*/
        },
        onUpdateSelectedColor: function (colorType, productID, colorID, background, assets, prefixID, imageSet) {
            //console.log("ProductMediaView.onUpdateSelectedColor()");
            this.options.updateSwatches = true;
            this.options.setSwatches = true;
            this.options.retrieveSet = true;

            //if this is the product that updated AND the component that updated, do stuff
            if ((productID === this.options.productID) &&
                (prefixID === this.options.prefixID)) {

                this.productID = productID;
                this.colorID = colorID;
                this.imageSet = imageSet;
                this.selectedId = productID;

                var requestURL = this.options.assets.mediaServerURL + this.options.assets.accountID + '/' + imageSet,
                    pinterestURL = this.options.assets.mediaServerURL + this.options.assets.accountID + '/' + productID + '_' + colorID;

                if (pinterestURL.substr(0, 4) != "http") {
                    pinterestURL = "http:" + pinterestURL;
                }
                MessageBus.trigger("SocialApp.pinterestUpdate", {'media': pinterestURL});

                if (assets === undefined) {
                    this.selectedAssets = {
                        assets: this.options.assets.asset
                    };
                    this.requestScene7Data(requestURL + '?req=set,json&id=' + this.colorID);
                } else {
                    this.displayImages(assets, 'click');
                }
            }
        },

        onUpdateHoverColor: function (color, hoverIsActive, productID, colorID, background, assets, prefixID, imageSet) {
            //console.log("ProductMediaView.onUpdateHoverColor()");
            if ((productID === this.options.productID) &&
                (prefixID === this.options.prefixID)) {
                //_.delay(function() {
                this.processHover(this, productID, colorID, hoverIsActive, assets, imageSet);
                //},300);
            }
        },
        onImageSetRetrieved: function (data) {
            //console.log("ProductMediaView.onImageSetRetrieved()");
            if (this.options.retrieveSet === true) {
                this.options.retrieveSet = false;
                this.parseScene7Data(data);
            }

        },
        onRemoveScene7: function () {
            //console.log("ProductMediaView.onRemoveScene7()");
            //this.s7params.removeEventListener(s7sdk.Event.SDK_READY,function(e) {},false);
            //this.mediaSet.removeEventListener(s7sdk.event.AssetEvent.NOTF_SET_PARSED, function(e) {},false);
            //this.s7swatches.removeEventListener(s7sdk.event.AssetEvent.SWATCH_SELECTED_EVENT, function(e) {},false);
            MessageBus.off("Scene7.ImageSetRetrieved", this.onImageSetRetrieved, this);
            if (this.options.assets.asset.set && this.options.assets.asset.set.n) {
                this.options.assets.asset.set.n = "";
            }
            delete this.s7params;
            delete this.mediaSet;
            delete this.s7swatches;
            delete this.s7zoomview;
            delete this.s7videoplayer;
            this.$el.empty();
        },
        'processHover': function (that, productID, colorID, hoverIsActive, assets, imageSet) {
            //console.log("ProductMediaView.processHover()");
            that.options.updateSwatches = true;
            that.options.setSwatches = true;
            that.options.retrieveSet = true;

            that.hoverIsActive = hoverIsActive;

            if (hoverIsActive) { //hover over color
                that.productID = productID;
                that.colorID = colorID;

                if (assets === undefined) {
                    that.options.requestURL = that.options.assets.mediaServerURL + that.options.assets.accountID + '/' + imageSet + '?req=set,json&id=' + this.colorID;
                    that.requestScene7Data(that.options.requestURL);
                } else {
                    that.displayImages(assets, 'hover');
                }
            }
            else { //hover out color
                that.displayImages(that.selectedAssets.assets, 'hover');
            }
        },
        //make a request to scene7 for images based on the URL we built
        'requestScene7Data': function (url) {
            var that = this;
            //console.log("ProductMediaView.requestScene7Data()");
            //this.options.waitingForResponse = true;
            MessageBus.trigger('elementIndicator.show', that.$el);
            $.ajax({
                'jsonp': true,
                'dataType': 'jsonp',
                'type': 'get',
                'url': url
            }).always(function () {
                console.log('ajax done!');
                MessageBus.trigger('elementIndicator.hide', that.$el);
            });
        },
        //figure out whether we need to pull in the default back image
        'parseScene7Data': function (data) {
            //console.log("ProductMediaView.parseScene7Data()");
            var assets = data,
                set = null,
                i = 0,
                videoStr = "";

            //this.options.waitingForResponse = false;
            //if(data.indexOf(this.productID) > 0 && data.indexOf(this.colorID) > 0) {
            this.currentSet = data;

            set = assets;
            MessageBus.trigger('ProductMediaView.ProductZoomView.setMedia-' + this.options.prefixID, set, this.productID, this.colorID, this.options.prefixID);

            if (this.hoverIsActive === false || this.hoverIsActive === undefined) {
                this.displayImages(set, 'click');
            } else {
                this.displayImages(set, 'hover');
            }
            //}
        },
        //set up the viewer OR update the images in the set depending on whether the viewer has been created already
        'displayImages': function (assetList, eventType) {
            //console.log("ProductMediaView.displayImages()");

            if (assetList !== null && assetList !== undefined) {
                this.options.assets.asset = assetList;
                // console.log(assetList);
                if (eventType.toLowerCase() === 'click') {
                    this.selectedAssets = {
                        assets: this.options.assets.asset
                    };
                }

                if (this.options.initialized === false) {
                    this.options.initialized = true;
                    this.setUpViewer();
                } else {
                    if (this.mediaSet) {
                        this.mediaSet.setAsset(this.options.assets.asset.set.n + "?" + API.endpoints.pdpImageConfigParams);
                    }
                }
            }
        },
        'setUpViewer': function () {
            //console.log("ProductMediaView.setUpViewer()");
            var that = this;

            this.options.containerID = this.$el.attr('id');
            this.options.instanceIDs.zoom = this.options.containerID + this.options.instanceIDs.zoom;
            this.options.instanceIDs.video = this.options.containerID + this.options.instanceIDs.video;
            this.options.instanceIDs.flyout = this.options.containerID + this.options.instanceIDs.flyout;
            this.options.instanceIDs.swatches = this.options.containerID + this.options.instanceIDs.swatches;

            s7sdk.Util.lib.include('s7sdk.common.Container');
            s7sdk.Util.lib.include('s7sdk.set.MediaSet');
            s7sdk.Util.lib.include('s7sdk.set.Swatches');
            s7sdk.Util.lib.include('s7sdk.image.FlyoutZoomView');
            s7sdk.Util.lib.include('s7sdk.video.VideoPlayer');

            s7sdk.Util.init();

            /* Create an instance of the ParameterManager component to collect
             components' configuration that can come from a viewer preset, URL, or the HTML page itself. The ParameterManager
             component also sends a notification s7sdk.Event.SDK_READY when all needed files are loaded and the configuration
             parameters are processed. The other components should never be initialized outside of this handler. After
             defining the handler for the s7sdk.Event.SDK_READY event, it is safe to initiate
             configuration initialization by calling ParameterManager.init(). */
            this.s7params = new s7sdk.ParameterManager(null, null, {"asset": "MediaSet.asset"});
            //this.s7container, this.s7mediaSet, this.s7zoomview, this.s7spinview, this.s7swatches, this.s7videoplayer;

            /* Add event handler for the s7sdk.Event.SDK_READY event dispatched by the ParameterManager when all modifiers are
             processed and it is safe to initialize the viewer. */
            this.s7params.addEventListener(s7sdk.Event.SDK_READY, function () {
                //console.log("ProductMediaView.SDK_READY EVENT");
                that.initViewer();
                MessageBus.trigger("SocialApp.initSocial");
            }, false);

            /* Initiate configuration initialization of ParameterManager. */
            this.s7params.init();

        },

        /* Event handler for s7sdk.Event.SDK_READY dispatched by ParameterManager to initialize various components of
         this viewer. */
        'initViewer': function () {
            //console.log("ProductMediaView.initViewer()");
            var that = this,
                tipConfig = "";

            //ALM-5391 | Show Tip message only once

            if (typeof(localStorage.getItem('s7tipMsg')) !== "undefined" && localStorage.getItem('s7tipMsg') !== "" && localStorage.getItem('s7tipMsg') !== null) {
                tipConfig = "0,0,0";
            }
            else {
                localStorage.setItem('s7tipMsg', "true");
                tipConfig = "3,1,0.3";
            }

            /* Explicitly specify default modifiers in the viewer code by calling push().
             Specify the default video by pushing serverurl, videoserverurl and asset */
            this.s7params.push("serverurl", that.options.assets.mediaServerURL);
            this.s7params.push("videoserverurl", that.options.assets.videoServerURL);
            this.s7params.push("MediaSet.asset", that.options.assets.asset);

            /* Specifies columns, or rows, or both to limit the number of cells per row and column, respectively */
            this.s7params.push("Swatches.tmblayout", "0,1");
            this.s7params.push("tip", tipConfig);
            this.s7params.push("preloadtiles", "1,0");


            if (Modernizr.video && Modernizr.touch) {
                this.s7params.push("playback", "native");
                this.s7params.push("autoplay", "1");
            }
            if (API.showMobileView('plpResponsive')) {
                this.s7params.push("playback", "native");
            }
            // Create MediaSet to manage assets and add event listener to the NOTF_SET_PARSED event
            this.mediaSet = new s7sdk.set.MediaSet(null, this.s7params, this.options.mediaSet);

            this.mediaSet.setAsset(this.options.assets.asset.set.n + "?" + API.endpoints.pdpImageConfigParams);
            // Add MediaSet event listeners
            this.mediaSet.addEventListener(s7sdk.event.AssetEvent.NOTF_SET_PARSED, function (e) {
                //console.log("ProductMediaView.NOTF_SET_PARSED EVENT");
                if (that.options.setSwatches === true) {
                    that.onSetParsed(e);
                }
            }, false);

            //this.mediaSet.setAsset(this.options.assets.asset.set.n);


            /* Create a viewer container as a parent component for other UI components that are part of the viewer application and
             associate event handlers for resize notification.
             The advantage of using Container as the parent is the component's ability to resize and bring itself and its
             children to full screen. */
            /*this.s7container = new s7sdk.common.Container(this.options.containerID, this.s7params, this.options.instanceClasses.container);
             this.s7container.addEventListener(s7sdk.event.ResizeEvent.COMPONENT_RESIZE, function(e) {
             that.onResize(e);
             }, false);*/

            /* Create swatches to reference different images, spin set and video, and associate event handler for the
             s7sdk.event.AssetEvent.SWATCH_SELECTED_EVENT to display the view of interest and hide the others. */
            this.s7swatches = new s7sdk.set.Swatches(this.options.containerID, this.s7params, this.options.instanceIDs.swatches);
            this.s7swatches.addEventListener(s7sdk.event.AssetEvent.SWATCH_SELECTED_EVENT, function (e) {
                //console.log("ProductMediaView.SWATCH_SELECTED_EVENT EVENT");
                that.swatchSelected(e);
            }, false);


            /* Initialize view components to null and create them later to display assets as needed. */
            this.s7zoomview = null;
            this.s7videoplayer = null;
            this.s7spinview = null;

        },


        /* Event handler for s7sdk.event.AssetEvent.SWATCH_SELECTED_EVENT events dispatched by Swatches to switch
         among views displaying different assets in the main view. */
        'swatchSelected': function (event) {
            //console.log("ProductMediaView.swatchSelected()");

            if (!Modernizr.video) {
                this.addIE8Mods();
            }

            // asset is a s7sdk.ItemDesc
            var asset = event.s7event.asset;

            // pause video playback, just in case the previous active item was a video
            if (this.s7videoplayer)
                this.s7videoplayer.pause();

            // Hide all, only the active component should be visible
            this.displayElement(this.options.instanceIDs.zoom, false);
            this.displayElement(this.options.instanceIDs.video, false);
            //displayElement("s7spinview", false);

            /* Determine which view to show or hide depending on the type of asset to display */
            if (asset.type === s7sdk.ItemDescType.IMG) { // the selected item is an image

                /* Create a ZoomView component that displays in image, if not already created. */
                if (this.s7zoomview === null) {
                    this.s7zoomview = new s7sdk.image.FlyoutZoomView(this.options.containerID, this.s7params, this.options.instanceIDs.flyout);
                }

                /* Assign image asset to zoom view and show */
                this.s7zoomview.setItem(asset);

                this.displayElement(this.options.instanceIDs.zoom, true);
            }
            else if (asset.type === s7sdk.ItemDescType.VIDEO ||     // the selected item is a video or video set
                asset.type === s7sdk.ItemDescType.VIDEO_SET) {

                /* Create a VideoPlayer component that displays an MP4 or Adaptive Video Set video, if not already created. */
                if (this.s7videoplayer === null) {
                    this.s7videoplayer = new s7sdk.video.VideoPlayer(this.options.instanceIDs.flyout, this.s7params, this.options.instanceIDs.video);
                }

                /* Assign video asset to the video player and show */
                this.s7videoplayer.setItem(asset);
                this.displayElement(this.options.instanceIDs.video, true);
                if (this.s7videoplayer)
                    this.s7videoplayer.play();

                // Temp Patch for video not working on QA incase of flash
                if (!Modernizr.video && this.$el.prop('id') === 'productMediaContainerQuickView') {
                    //this.patchQVVideo();
                }

            }
            else if (asset.type === s7sdk.ItemDescType.SPIN_SET) {  // the selected item is a spin set

                /* Create a SpinView that displays a SpinSet if not already created.
                 if (s7spinview == null) {
                 s7spinview = new s7sdk.set.SpinView("s7container", s7params, "s7spinview");
                 }

                 /* Assign spin set asset to the spin view and show
                 s7spinview.setMediaSet(asset);
                 displayElement("s7spinview", true);*/

            }
            this.carouselMods();
        },
        'patchQVVideo': function (elementId, show) {
            var _this = this;
            this.timeId = setInterval(function () {
                _this.s7videoplayer.pause();
                if (_this.s7videoplayer.getCapabilityState().state === 14) {
                    $('#productMediaContainerQuickViews7videoplayer > div').css('pointer-events', 'auto');
                    clearInterval(_this.timeId);
                }
                _this.s7videoplayer.play();
            }, 200);
        },

        /* Show or hide an element specified by its id. */
        'displayElement': function (elementId, show) {
            //console.log("ProductMediaView.displayElement()");
            var element = document.getElementById(elementId),
                zoom = $('.' + this.options.instanceClasses.flyout),
                parent,
                n;

            //console.log(elementId);
            if (element) {
                //is there a zoom component?
                if (zoom.length > 0) {
                    //is this a video element? don't show the flyout
                    if ((elementId === this.options.instanceIDs.video) && (show === true)) {
                        $(zoom).addClass("zoom-view-disabled");
                        //$(zoom).cssheight('0px');
                    } else {
                        $(zoom).removeClass("zoom-view-disabled");
                    }
                }

                if (!show) {
                    $(element).css({
                        'left': '-99999px'
                    });
                } else {
                    //element.style.zIndex = 90;
                    $(element).css({
                        'left': '0'
                    });
                }
                // specific browser fix

                if (s7sdk.browser.name == 'safari' && s7sdk.browser.version.major == 5) {
                    element.style.visibility = show ? 'inherit' : 'hidden';
                }
            }


            // if there are 3 or more thumbs then we unhide the right carousel arrow
            n = $('.s7swatches').find('.s7thumb').length;
            //console.log('number of thumbs ', n);
            // ALM-246-JU
            if (n <= 3) {
                $('.asc-product-media.mar-product-gallery-container .s7button.s7scrollrightbutton').css("display", "none");
            }

        },

        /* Event handler for the s7sdk.event.AssetEvent.NOTF_SET_PARSED event dispatched by MediaSet to
         assign the asset to the Swatches when parsing is complete. */
        'onSetParsed': function (event) {
            //console.log("ProductMediaView.onSetParsed()");
            // set media set for Swatches to display
            this.s7swatches.setMediaSet(event.s7event.asset);

            // then select the first swatch
            this.s7swatches.selectSwatch(0, true);
            this.options.setSwatches = false;
        },

        //inline styling for the swatches viewer
        carouselMods: function () {
            var $container = $('#' + this.options.containerID);

            $("#productMediaContainers7swatches div:first-child").css("width", "100%");
            $("#productMediaContainerQuickViews7swatches div:first-child").css("width", "100%");
            /*
             The scene 7 video player is taking the width of the parent ,so commenting the explicit width setter
             as part of ALM defect id 4094
             */
            //$container.find('.s7videoplayer').find('object,embed').attr('width','960');
            /*
             if (this.s7videoplayer){
             this.s7videoplayer.resize(960,650);
             }*/
            //$container.find('.s7videoplayer embed').attr();
        },
        addIE8Mods: function (assetType) {

            var $container = $('#' + this.options.containerID),
                thumbHeight = $container.find('.s7swatches div:first-child div:first-child').height();

            $container.find('.s7staticimage img').removeAttr('height').removeAttr('width');
            $container.find('.s7swatches div:first-child').css('height', thumbHeight + 'px');
        },
        close: function () {
            //console.log("ProductMediaView.close()");
            MessageBus.off("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.off("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.off("Scene7.ImageSetRetrieved", this.onImageSetRetrieved, this);
            MessageBus.off("removeScene7", this.onRemoveScene7, this);
            delete this.s7params;
            delete this.mediaSet;
            delete this.s7swatches;
            delete this.s7zoomview;
            delete this.s7videoplayer;
            this.unbind();
            this.remove();
        }
    });
    return ProductMediaView;
});


define('components/shared/ProductZoomView', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {
    'use strict';

    //this is a view that is closely integrated with scene 7 functionality. please be careful when editing this file.
    var ProductZoomView = Backbone.View.extend({

        'initialize': function (options) {
            //console.log("ProductZoomView.initialize()");
            var that = this;

            var defaults = {
                'containerID': '#productContainer',
                'assets': {
                    'mediaServerURL': '',
                    'videoServerURL': '',
                    'asset': ''
                },
                'instanceIDs': {
                    'flyout': 'flyout',
                    'swatches': 's7swatches',
                    'zoom': 's7zoomView',
                    'video': 's7videoplayer',
                    'mediaSet': 's7mediaSet'
                },
                'instanceClasses': {
                    'container': 's7container',
                    'flyout': 's7flyoutzoom'
                },
                'setSwatches': false,
                'waitingForData': false,
                'initialized': false
            };

            this.options = $.extend({}, defaults, options);

            this.$el = $(this.options.$el);

            this.scene7Params = this.options.collection.models[0].attributes.scene7_params;

            this.options.assets.mediaServerURL = this.scene7Params.server_url;
            this.options.assets.videoServerURL = this.scene7Params.video_server_url;
            this.options.assets.accountID = this.scene7Params.account_id;

            this.attachEvents();
            //this.setUpViewer();
        },
        'attachEvents': function () {
            //console.log("ProductZoomView.attachEvents()");
            //only update the image set when a new color has been selected
            MessageBus.on("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.on("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.on("Scene7.ImageSetRetrieved", this.onImageSetRetrieved, this);
        },
        onUpdateSelectedColor: function (colorType, productID, colorID, background, assets, prefixID, imageSet) {
            //console.log("ProductZoomView.onUpdateSelectedColor()");
            this.options.setSwatches = true;

            //if this is the product that updated AND the component that updated, do stuff
            if ((productID === this.options.productID) &&
                (prefixID === this.options.prefixID)) {
                this.productID = productID;
                this.colorID = colorID;
                this.imageSet = imageSet;
                this.selectedId = productID;

                this.options.requestURL = this.options.assets.mediaServerURL + this.options.assets.accountID + '/' + imageSet + '?req=imageset,json';

                if (assets === undefined) {
                    this.selectedAssets = {
                        assets: this.options.assets.asset
                    };
                    this.requestScene7Data(this.options.requestURL);
                } else {
                    this.displayImages(assets, 'click');
                }
            }
        },
        onUpdateHoverColor: function (color, hoverIsActive, productID, colorID, background, assets, prefixID, imageSet) {
            //console.log("ProductZoomView.onUpdateHoverColor()");
            if ((productID === this.options.productID) &&
                (prefixID === this.options.prefixID)) {
                this.options.setSwatches = true;

                this.hoverIsActive = hoverIsActive;

                if (hoverIsActive) { //hover over color
                    this.productID = productID;
                    this.colorID = colorID;

                    if (assets === undefined) {
                        this.options.requestURL = this.options.assets.mediaServerURL + this.options.assets.accountID + '/' + imageSet + '?req=imageset,json';
                        this.requestScene7Data(this.options.requestURL);
                    } else {
                        this.displayImages(assets, 'hover');
                    }
                } else { //hover out color
                    this.displayImages(this.selectedAssets.assets, 'hover');
                }
            }
        },
        onImageSetRetrieved: function (data) {
            //console.log("ProductZoomView.onImageSetRetrieved()");
            if (data.IMAGE_SET.indexOf(this.productID) > -1) {
                this.savedData = data.IMAGE_SET;
                this.parseScene7Data(data.IMAGE_SET);
            }
        },
        'setUpViewer': function () {
            //console.log("ProductZoomView.setUpViewer()");
            var that = this;

            this.$el.empty();

            this.options.containerID = this.$el.attr('id');
            this.options.instanceIDs.zoom = this.options.containerID + this.options.instanceIDs.zoom;
            this.options.instanceIDs.flyout = this.options.containerID + this.options.instanceIDs.flyout;

            s7sdk.Util.lib.include('s7sdk.common.Container');
            s7sdk.Util.lib.include('s7sdk.set.MediaSet');
            s7sdk.Util.lib.include('s7sdk.image.FlyoutZoomView');

            s7sdk.Util.init();

            /* Create an instance of the ParameterManager component to collect
             components' configuration that can come from a viewer preset, URL, or the HTML page itself. The ParameterManager
             component also sends a notification s7sdk.Event.SDK_READY when all needed files are loaded and the configuration
             parameters are processed. The other components should never be initialized outside of this handler. After
             defining the handler for the s7sdk.Event.SDK_READY event, it is safe to initiate
             configuration initialization by calling ParameterManager.init(). */
            this.s7params = new s7sdk.ParameterManager(null, null, {"asset": "MediaSet.asset"});
            //this.s7container, this.s7mediaSet, this.s7zoomview, this.s7spinview, this.s7swatches, this.s7videoplayer;

            /* Add event handler for the s7sdk.Event.SDK_READY event dispatched by the ParameterManager when all modifiers are
             processed and it is safe to initialize the viewer. */
            this.s7params.addEventListener(s7sdk.Event.SDK_READY, function () {
                //console.log("ProductZoomView.SDK_READY EVENT");
                that.initViewer();
            }, false);

            /* Initiate configuration initialization of ParameterManager. */
            this.s7params.init();

        },

        //make a request to scene7 for images based on the URL we built
        'requestScene7Data': function (url) {
            //console.log("ProductZoomView.requestScene7Data()");
            var that = this;

            $.ajax({
                'jsonp': true,
                'dataType': 'jsonp',
                'type': 'get',
                'url': url,
                'complete': function () {
                    that.options.waitingForData = true;
                }
            });
        },
        //figure out whether we need to pull in the default back image
        'parseScene7Data': function (data) {
            //console.log("ProductZoomView.parseScene7Data()");
            var set = data;

            MessageBus.trigger('ProductMediaView.ProductZoomView.setMedia-' + this.options.prefixID, set, this.productID, this.colorID, this.options.prefixID);

            if (this.hoverIsActive === false || this.hoverIsActive === undefined) {
                this.displayImages(set, 'click');
            } else {
                this.displayImages(set, 'hover');
            }
        },
        //set up the viewer OR update the images in the set depending on whether the viewer has been created already
        'displayImages': function (assetList, eventType) {
            //console.log("ProductZoomView.displayImages()");
            if (assetList !== null && assetList !== undefined) {
                this.options.assets.asset = assetList;

                this.options.assets.asset = assetList;
                // console.log(assetList);
                if (eventType.toLowerCase() === 'click') {
                    this.selectedAssets = {
                        assets: this.options.assets.asset
                    };
                }

                if (this.options.initialized === false) {
                    this.options.initialized = true;
                    this.setUpViewer();
                } else {
                    if (this.mediaSet) {
                        if (this.options.assets.asset.set && this.options.assets.asset.set.n) {
                            this.options.assets.asset.set.n = this.options.assets.asset.set.n + "?" + API.endpoints.pdpImageConfigParams;
                        }
                        this.mediaSet.setAsset(this.options.assets.asset);

                    }
                }
            }
        },

        /* Event handler for s7sdk.Event.SDK_READY dispatched by ParameterManager to initialize various components of
         this viewer. */
        'initViewer': function () {
            //console.log("ProductZoomView.initViewer()");
            var that = this,
                tipeConfig = "";

            //ALM-5617 | Show Tip message only once
            if (typeof(localStorage.getItem('s7eGifttipMsg')) !== "undefined" && localStorage.getItem('s7eGifttipMsg') !== "" && localStorage.getItem('s7eGifttipMsg') !== null) {
                tipeConfig = "0,0,0";
            }
            else {
                localStorage.setItem('s7eGifttipMsg', "true");
                tipeConfig = "3,1,0.3";
            }
            /* Explicitly specify default modifiers in the viewer code by calling push().
             Specify the default video by pushing serverurl, videoserverurl and asset */
            this.s7params.push("serverurl", that.options.assets.mediaServerURL);
            this.s7params.push("videoserverurl", that.options.assets.videoServerURL);


            this.s7params.push("MediaSet.asset", that.options.assets.asset);
            /* Specifies columns, or rows, or both to limit the number of cells per row and column, respectively */
            this.s7params.push("Swatches.tmblayout", "0,1");
            this.s7params.push("tip", tipeConfig);

            // Create MediaSet to manage assets and add event listener to the NOTF_SET_PARSED event
            this.mediaSet = new s7sdk.set.MediaSet(null, this.s7params, this.options.mediaSet);
            // Add MediaSet event listeners

            /* Initialize view components to null and create them later to display assets as needed. */
            this.s7zoomview = null;

            /* Create a ZoomView component that displays in image, if not already created. */
            if (this.s7zoomview === null) {
                this.s7zoomview = new s7sdk.image.FlyoutZoomView(this.options.containerID, this.s7params, this.options.instanceIDs.flyout);
            }

            /* Create a viewer container as a parent component for other UI components that are part of the viewer application and
             associate event handlers for resize notification.
             The advantage of using Container as the parent is the component's ability to resize and bring itself and its
             children to full screen.
             this.s7container = new s7sdk.common.Container(this.options.containerID, this.s7params, null);
             this.s7container.addEventListener(s7sdk.event.ResizeEvent.COMPONENT_RESIZE, function(e) {
             that.onResize(e);
             }, false);*/

            this.mediaSet.addEventListener(s7sdk.event.AssetEvent.NOTF_SET_PARSED, function (e) {
                //console.log("ProductZoomView.NOTF_SET_PARSED EVENT()");
                if (that.savedData.indexOf(that.productID) > -1) {
                    that.onSetParsed(e);
                }
            }, false);
        },

        /* Event handler for s7sdk.event.ResizeEvent.COMPONENT_RESIZE events dispatched by Container to resize
         various view components included in this viewer. */
        'onResize': function (event) {
            //console.log("ProductZoomView.onResize()");
            if (this.s7zoomview)
                this.s7zoomview.resize(event.s7event.w, event.s7event.h);
        },

        /* Event handler for the s7sdk.event.AssetEvent.NOTF_SET_PARSED event dispatched by MediaSet to
         assign the asset to the Swatches when parsing is complete. */
        'onSetParsed': function (event) {
            //console.log("ProductZoomView.onSetParsed()");
            var asset = event.s7event.asset;
            this.s7zoomview.setItem(asset.items[0]);
            this.options.setSwatches = false;
        },
        close: function () {
            //console.log("ProductZoomView.close()");
            MessageBus.off("ProductColorView.updateSelectedColor-" + this.options.prefixID, this.onUpdateSelectedColor, this);
            MessageBus.off("ProductColorView.updateHoverColor-" + this.options.prefixID, this.onUpdateHoverColor, this);
            MessageBus.off("Scene7.ImageSetRetrieved", this.onImageSetRetrieved, this);
            this.unbind();
            this.remove();
        }
    });

    return ProductZoomView;
});

define('components/quickview/ProductPromoView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var ProductPromoView = Backbone.View.extend({
        'initialize': function (options) {
            //console.log("ProductPromoView.initialize()");
            var that = this;

            this.options = options || {};


            if ($('#product-detail-promo-template').length > 0) {
                this.template = _.template($('#product-detail-promo-template').html());
                this.attachEvents();
            }
        },
        'render': function (data) {
            //console.log("ProductPromoView.render()");
            var $container = this.$el;

            if (this.options.$parent)
                $container = this.options.$parent;

            if (data) {
                $container.html(this.template(data));
            } else {
                $container.empty();
            }
        },
        'attachEvents': function () {
            var that = this,
                $holder = this.$el;

            //This if condition is for checking that this promo view coming on quickview or pdp
            if (this.options.$parent)
                $holder = this.options.$parent;

            //console.log("ProductPromoView.attachEvents()");
            MessageBus.on("ProductColorView.promoUpdated", this.onProductPromoView, this);

            if (this.options.skuBasedPromotion) {
                // To render the promo message
                MessageBus.on("ProductPromoView.render." + that.options.prefixID, this.render, this);
            }

            //Events for controlling show/hide of legal text related to promo message
            $holder.on('click', '.asc-pop-message-close', function (e) {
                e.preventDefault();
                $holder.find('div.asc-item-adjustment-popup').addClass('pdp-promo-msg-hide');
            });

            $holder.on('click', '.pdp-msg-holder-promo', function (e) {
                e.preventDefault();
                $holder.find('div.asc-item-adjustment-popup').removeClass('pdp-promo-msg-hide');
            });
        },
        onProductPromoView: function (data, productID, prefixID) {
            //console.log("ProductPromoView.onProductPromoView()");
            if (this.options.productID === productID && prefixID === this.options.prefixID) {
                this.render(data);
            }
        },
        close: function () {
            //console.log("ProductPromoView.close()");
            MessageBus.off("ProductColorView.promoUpdated", this.onProductPromoView, this);
            this.unbind();
            this.remove();
        }

    });
    return ProductPromoView;
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50*/
/*global jQuery, WorkPage, console, define, window, document, _gaq, twttr, FB*/

define('socialApp', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {
    'use strict';

    //defaults for use throughout the module
    var _defaults = {
        'selectors': {
            'pinterestBtn': '.asc-pinterest-button'
        },
        'pinterest': {
            'urlBase': API.endpoints.socialAPIConfig.pinitBaseUrl,
            'parameters': {
                'media': '',
                'description': ''
            },
            'url': ''
        },
        'apiKey': API.endpoints.socialAPIConfig.fbAPIKey
    };

    var SocialApp = function () {
        this.init();
    };

    /**
     * init
     * @return {[type]} [description]
     */
    SocialApp.prototype.init = function (customOptions) {
        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        this.attachEvents();
        // TODO: Figure out how to determine when to add the scripts
        // this.attachScripts();

    };

    SocialApp.prototype.attachEvents = function () {
        var that = this;
        // listen for scene7 and attach scripts
        MessageBus.on("SocialApp.initSocial", function () {
            console.log("trigger attach scripts");
            that.attachScripts();
        });

        MessageBus.on("SocialApp.pinterestUpdate", function (data) {
            that.updatePinterestURL(data);
        });

    };

    SocialApp.prototype.attachScripts = function () {
        // check for the scripts on the page
        var pinterest, twitter;

        if (this.options.apiKey === '') {
            console.log("Facebook is missing an API key");
        } else {
            this.buildFacebook(document, 'script', 'facebook-jssdk');
        }

        //pinterest = $('script[src="'+ API.endpoints.socialAPIConfig.pinitAPI +'"]').length;

        twitter = $('script[src="' + API.endpoints.socialAPIConfig.twitterAPI + '"]').length;


        // Remove pinterest JS, and made the button redirect user to pinterest link
        // var pinterest = $('script[src="//assets.pinterest.com/js/pinit.js"]').length;
        // if (pinterest === 0 ){
        // 	//console.log("no pinterest, add it");
        // 	// pinterest
        // 	this.buildPinterest();
        // }else {
        // 	// reinit it
        // 	console.log("reinit pinterest");
        // }

        if (twitter === 0) {
            //console.log("no twitter, add it");
            // twitter
            this.buildTwitter();
        } else {
            // reinit it
            //console.log("reinit Twitter");
            // console.log("twitter: ", twttr);

            if (window.twttr) {
                window.twttr.widgets.load();
            } else {
                console.log("twitter isn't ready");
            }

        }
    };

    SocialApp.prototype.buildPinterest = function () {
        var apiPath = API.endpoints.socialAPIConfig.pinitAPI || "";
        if (apiPath && /^\s*$/.test(apiPath) === false) {
            var p = document.createElement("script");
            p.type = "text/javascript";
            p.src = apiPath;
            p.async = true;
            // pinterest should go at the end of the body tag.
            document.getElementsByTagName('body')[0].appendChild(p);
        } else {
            console.log("PinIt Disabled");
        }
    };

    SocialApp.prototype.buildTwitter = function () {
        var apiPath = API.endpoints.socialAPIConfig.twitterAPI || "";
        if (apiPath && /^\s*$/.test(apiPath) === false) {
            var t = document.createElement("script");
            t.type = "text/javascript";
            t.src = apiPath;
            t.async = true;
            document.getElementsByTagName('body')[0].appendChild(t);

            /*
             * Ensighten Tracking Start:
             * Event: socialMediaClick - Twitter:- User clicks on social media link on Product Detail Page
             */

            $(t).load(function () {
                twttr.events.bind('tweet', function (response) {
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {
                        "name": "socialMediaClick",
                        "target": "Tweeter"
                    });
                });
            });

            /*
             * Ensighten Tracking End
             */
        }
    };

    SocialApp.prototype.buildFacebook = function (d, s, id) {
        // create the fb root div
        if (!$('#fb-root')) {
            var div = document.createElement('div');
            div.id = "fb-root";
            document.getElementsByTagName('body')[0].appendChild(div);
        }

        var js, fjs = d.getElementsByTagName(s)[0];

        if (d.getElementById(id) && window.FB) {
            //console.log('scripts already attached');
            MessageBus.trigger('facebookReady');

        } else if ($('#facebook-jssdk').length < 1) {
            var apiPath = API.endpoints.socialAPIConfig.fbSDK || "";
            if (apiPath && /^\s*$/.test(apiPath) === false) {
                var source = apiPath;
                source += this.options.apiKey;
                source += API.endpoints.socialAPIConfig.fbAPIVersion;
                // console.log('source: ', source);
                js = d.createElement(s);
                js.id = id;
                js.async = true; // make a async call to load SDK before event handling
                js.src = source;
                fjs.parentNode.insertBefore(js, fjs);
            }
        }

        /*
         * Ensighten Tracking Start:
         * Event: socialMediaClick - Facebook :- User clicks on social media link on Product Detail Page
         */
        window.fbAsyncInit = function () {
            MessageBus.on('facebookReady', function () {
                console.log('Facebook is Ready');
                var $quickViewForm = $('#quickViewForm');
                if ($quickViewForm[0]) {
                    window.FB.XFBML.parse($quickViewForm.find('.asc-social-buttons')[0]);
                }
                return;
            });
            FB.Event.subscribe('edge.create', function (response) {
                $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {
                    "name": "socialMediaClick",
                    "target": "Facebook"
                });
            });
        };

        /*
         * Ensighten Tracking End
         */

    };

    SocialApp.prototype.updatePinterestURL = function (data) {
        this.options.pinterest.parameters = $.extend(true, {}, this.options.pinterest.parameters, data);

        if (this.options.pinterest.parameters.media &&
            this.options.pinterest.parameters.description) {

            var url = this.options.pinterest.urlBase + '?media=' + encodeURIComponent(this.options.pinterest.parameters.media) + '&description=' + encodeURIComponent(this.options.pinterest.parameters.description);

            if (this.options.pinterest.parameters.url) {
                url += '&url=' + encodeURIComponent(this.options.pinterest.parameters.url);
            }

            if (url !== this.options.pinterest.url) {
                this.options.pinterest.url = url;

                var $pinterestBtn = $(this.options.selectors.pinterestBtn);

                // change href, check if data attr or not first
                if ($pinterestBtn.attr('href')) {
                    $pinterestBtn.attr('href', this.options.pinterest.url);
                } else {
                    $pinterestBtn.attr('data-pin-href', this.options.pinterest.url);
                }

                /*
                 * Ensighten Tracking Start:
                 * Event: socialMediaClick - Pinterest :- User clicks on social media link on Product Detail Page
                 */
                $('body').on('click', this.options.selectors.pinterestBtn, function (e) {
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {
                        "name": "socialMediaClick",
                        "target": "Pinterest"
                    });
                });

                /*
                 * Ensighten Tracking End
                 */
            }
        }
    };

    return new SocialApp();
});

define('bazaarvoiceLoader', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {
    'use strict';

    var _defaults = {};

    var BazaarvoiceLoader = function (customOptions) {
        this.options = $.extend(true, {}, _defaults, customOptions);

        this.init();

    };


    BazaarvoiceLoader.prototype.init = function () {
        var that = this,
            config = API.endpoints.borderFreeConfig,
            bvScript = API.endpoints.bazaarvoiceURL,
            contextCookieText = API.readCookie(config.contextCookie);

        /* International-context user should not be able to write a Review */
        if (config.enableState && contextCookieText && /^\s*$/.test(contextCookieText) === false) {
            var contextCookieValue = contextCookieText.split("|");
            // if context-country is not US, different bvapi.js will be executed
            if (contextCookieValue[0].match(new RegExp(config.defaultCountry, "i")) === null) {
                bvScript = API.endpoints.BVURL_international;
                $.getScript(bvScript, function () {
                    that.render();
                });
            }
        }

        console.timeline = console.time;
        console.timelineEnd = console.timeEnd;

        // load bazaarvoice if not loaded on the page yet
        if (!window.$BV) {
            $.getScript(bvScript, function () {
                that.render();
            });
        }
        else {
            that.render();
        }

    };


    BazaarvoiceLoader.prototype.render = function () {
        //add RIO tracking on confirmation page
        if (window.BVtransactionPageViewData) {
            $BV.SI.trackTransactionPageView(window.BVtransactionPageViewData);
        }

        if (this.options.callback) {
            this.options.callback();
        }
    };

    return BazaarvoiceLoader;

});


/**
 *
 *    It provides scene7 inline-zoom and video components. It has two variation
 *    1. Creates list of components (zoom and video)
 *    2. Creates a single zoom component
 *    This component directly works with scene7 API's
 *
 *    Supported Options
 *    type : list / single, default is list
 *    It decides one of the two variations this component comes in.
 *    mediaSet : Scene7 ID for media
 *    serverurl : URL of Image server
 *    videoServerURL : URL of Video server
 *    accountId : Scene7 Account ID
 *
 *    @author Lakha Singh
 */
/*jshint multistr: true */
define('common/MobileProductMediaView', [
    'MessageBus'
], function (MessageBus) {

    // Default options
    var _defaults = {
        type: 'list',
        mediaSet: 'Adobe_QBP-AVS',
        serverURL: 'http://s7d1.scene7.com/is/image',
        videoServerURL: 'http://s7d1.scene7.com/is/content/',
        accountId: 'Scene7SharedAssets',
        // In number of columns on page for each viewport
        width: {
            mobile: 1,
            tab: 2,
            desktop: 2
        },
        // In Pixels for each viewport
        height: {
            mobile: 410,
            tab: 410,
            desktop: 410
        }
    };

    var API = require('api');

    var MobileProductMediaView = Backbone.View.extend({
        initialize: function (options) {
            console.log('MobileProductMediaView.initialize()');

            var viewport = API.viewport.name();
            var pinterestURL;

            this.options = $.extend({}, _defaults, options || {});
            this.template = _.template($('#mobile-product-view-template').html());

            // Define component dimensions
            this.height = this.options.height[viewport];
            this.width = this.$el.width();

            this.loadLibs();
            s7sdk.Util.init();
            this.params = new s7sdk.ParameterManager();
            this.params.addEventListener(s7sdk.Event.SDK_READY, $.proxy(this._initViewer, this), false);
            this.params.init();
            this.attachEvents();
            //init pintrest
            pinterestURL = this.options.serverURL + this.options.accountId + '/' + this.options.mediaSet;
            if (pinterestURL.substr(0, 4) != "http") {
                pinterestURL = "http:" + pinterestURL;
            }
            MessageBus.trigger("SocialApp.pinterestUpdate", {'media': pinterestURL});
        },

        // Loads scene7 Libraries
        loadLibs: function () {
            console.log('MobileProductMediaView.loadLibs()');

            if (!window.s7sdk) {
                throw('Scene7\'s utils.js not Found!');
            }

            s7sdk.image = s7sdk.image || {};

            if (!s7sdk.image.ZoomView) {
                s7sdk.Util.lib.include('s7sdk.image.ZoomView');
                s7sdk.Util.lib.include('s7sdk.set.MediaSet');
                s7sdk.Util.lib.include('s7sdk.common.Container');
                s7sdk.Util.lib.include('s7sdk.video.VideoPlayer');
            }
        },

        // add event listeners here
        attachEvents: function () {
            console.log('MobileProductMediaView.attachEvents()');

            $(window).on('resize', this.resize());
        },

        // resize component
        resize: function () {
            var _this = this;
            var ctxTimeout = null;

            var callback = function () {
                var i, width, height, viewport;

                viewport = API.viewport.name();
                height = _this.options.height[viewport];
                width = _this.$el.width();

                if (_this.comp) {
                    _this.comp.resize(width, height);
                } else if (_this.comps) {
                    for (i = 0; i < _this.comps.length; i++) {
                        _this.comps[i].resize(width, height);
                    }
                }

                // ready to process next resize
                ctxTimeout = null;
            };

            return function () {
                if (!ctxTimeout) {
                    ctxTimeout = setTimeout(callback, 60);
                }
            };
        },

        // Scene7 Ready event handler
        _initViewer: function () {
            console.log('MobileProductMediaView._initViewer()');

            this.params.push("serverurl", this.options.serverURL);
            this.params.push("videoserverurl", this.options.videoServerURL);
            this.params.push("MediaSet.asset", this.options.accountId + '/' + this.options.mediaSet);
            //this.params.push( "playback", "native" );
            this.params.push("autoplay", "0");
            // to support video replay in IOS
            if (API.isIOS()) {
                this.params.push("loop", "1");
            }
            this.params.push("swipe", 'false');

            if (typeof API.endpoints.mobileZoomIconFlag === "undefined" || API.endpoints.mobileZoomIconFlag === true) {
                this.params.push("iconeffect", '1,-1,0.3,0');
            } else {
                this.params.push("iconeffect", '0,1,0.3,0');
            }


            // Create MediaSet to manage assets and add event listener to the NOTF_SET_PARSED event
            this.mediaSet = new s7sdk.set.MediaSet(null, this.params, "mediaSet");

            // Add MediaSet event listener
            this.mediaSet.addEventListener(s7sdk.event.AssetEvent.NOTF_SET_PARSED, $.proxy(this.parseMediaSet, this), false);
            MessageBus.trigger("SocialApp.initSocial");
        },

        // once AJAX response is recieved from scene7 containing media assets
        parseMediaSet: function (e) {
            console.log('MobileProductMediaView.parseMediaSet()');

            var i, temp, htmlID;

            // Media assets
            this.items = e.s7event.asset.items;

            if (this.options.type === 'single') {
                this.compId = Math.floor(Math.random() * 1000);
                this.render();
                this.comp = this.createComp(this.items[0], this.compId);
            } else if (this.options.type === 'list') {
                this.render();
                this.comps = [];

                for (i = 0; i < this.items.length; i++) {
                    temp = this.createComp(this.items[i], i);
                    this.comps.push(temp);
                }
            }

            // Broadcast ready state
            MessageBus.trigger('MobileProductMediaView.ready');
        },

        // Creates components (zoomview and videoview), once mediaset is parsed
        createComp: function (mediaAsset, compId) {
            console.log('MobileProductMediaView.createComp()');

            var s7Comp;

            // Process Image
            if (mediaAsset.type === s7sdk.ItemDescType.IMG) {
                // create a zoomview component
                s7Comp = new s7sdk.image.ZoomView('media-container-' + compId, this.params, 'zoom-view-' + compId);

                // to maintain zoom-in / zoom-out state
                s7Comp.addEventListener(s7sdk.event.CapabilityStateEvent.NOTF_ZOOM_CAPABILITY_STATE, this.zoomImage);
            }
            // process video
            else if (mediaAsset.type === s7sdk.ItemDescType.VIDEO || mediaAsset.type === s7sdk.ItemDescType.VIDEO_SET) {
                // create a zoomview component
                s7Comp = new s7sdk.video.VideoPlayer('media-container-' + compId, this.params, 'video-view-' + compId);

                // add play capability
                $('#media-container-' + compId).on('click', this.playVideo(s7Comp));
            }

            // assign image to zoomview
            s7Comp.setItem(mediaAsset);

            // resize as per viewport
            s7Comp.resize(this.width, this.height);

            return s7Comp;
        },

        zoomImage: function (event) {
            var state;

            if (!event.s7event.state.hasCapability(s7sdk.ZoomCapabilityState.ZOOM_OUT)) {
                state = 'zoom-out';
            } else {
                state = 'zoom-in';
            }
            MessageBus.trigger('MobileProductMediaView.image.zoom', state);
        },

        // plays video on click
        playVideo: function (v) {
            var video = v;

            return function () {
                video.togglePause();

                // Broadcast currently playing video
                MessageBus.trigger('MobileProductMediaView.video.play', video);
            };
        },

        // Renders skeleton
        render: function () {
            console.log('ProductlistView.render()');

            var data = {
                type: this.options.type
            };

            if (this.options.type === 'single') {
                data.compId = this.compId;
            } else if (this.options.type === 'list') {
                data.items = this.items;
            }

            this.$el.empty();
            this.$el.append(this.template(data));
        },

        // Destroys component and does cleanup
        destroy: function () {
            console.log('MobileProductMediaView.destroy()');
        }
    });

    return MobileProductMediaView;
});

/**
 *    This component abstract low-level details for interacting with scene7 components. It also integrates
 *    interactions with colors module. It has two variations
 *    1. It creates a slick carousel of scene7 components
 *    2. It creates a single zoom component
 *
 *    Supported Options
 *    type : carousel / zoomView, default is carousel
 *
 *    @author Lakha Singh
 */
/*jshint multistr: true */
define('common/MobileProductView', [
    'MessageBus',
    'common/MobileProductMediaView'
], function (MessageBus, MobileProductMediaView) {

    // Default options
    var _defaults = {
        type: 'carousel'
    };

    var MobileProductCarouselView = Backbone.View.extend({
        initialize: function (options) {
            console.log('MobileProductCarouselView.initialize()');

            this.options = $.extend({}, _defaults, options || {});

            // Type of mediaview component
            this.options.mediaType = this.options.type === 'zoomView' ? 'single' : 'list';
            this.setState();
            this.attachEvents();
        },

        // defines component state
        setState: function () {
            console.log('MobileProductCarouselView.setState()');

            var data = this.collection.toJSON()[0],
            // select first mediaset by default
                mediaSet = data.all_available_colors[0].values[0].imageset,
                scene7Params = data.scene7_params;

            this.mediaSet = mediaSet;
            this.serverURL = scene7Params.server_url;
            this.videoServerURL = scene7Params.video_server_url;
            this.accountId = scene7Params.account_id;
            this.noop = function () {
            };
        },

        // add event handlers
        attachEvents: function () {
            console.log('MobileProductCarouselView.attachEvents()');

            MessageBus.on('ProductColorView.updateSelectedColor-' + this.options.prefixID, this.colorUpdated, this);

            if (this.options.type === 'carousel') {
                MessageBus.on('MobileProductMediaView.image.zoom', this.imageZoomed, this);
                MessageBus.on('MobileProductMediaView.ready', this.initCarousel, this);
                MessageBus.on('MobileProductMediaView.video.play', this.videoPlayed, this);
            }
        },

        // activates when image zoomed-in/out
        imageZoomed: function (state) {
            console.log('MobileProductCarouselView.imageZoomed()');

            if (this.carousel) {
                // Pause carousel, if any image zoomed-in
                if (state === 'zoom-in') {
                    this.pauseCarousel(true);
                    this.carousel.addClass('zoomed');
                } else {
                    this.pauseCarousel(false);
                    this.carousel.removeClass('zoomed');
                }
            }
        },

        // activates when video is played
        videoPlayed: function (video) {
            console.log('MobileProductCarouselView.videoPlayed()');

            // stop any previous
            if (this.video) {
                //this.video.stop();
            }
            //this.video = video;
        },

        // activates when MobileProductMediaView is fully rendered
        initCarousel: function () {
            console.log('MobileProductCarouselView.initCarousel()');

            var _this = this;

            this.carousel = this.$el.children('ul');

            // init carousel if needed
            if (this.carousel.find('.media-item').length > 1) {
                this.carousel.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    speed: 500,
                    arrows: false,
                    onBeforeChange: function () {
                        // stop any playing video
                        if (_this.video) {
                            _this.video.stop();
                        }
                    },
                    infinite: true,
                    slide: '.media-item'
                });
                this.carouselObj = this.carousel[0].slick;
                this.nextSlide = this.carouselObj.swipeMove;
            }
        },

        // pause/play carousel
        pauseCarousel: function (pause) {
            console.log('MobileProductCarouselView.pauseCarousel()');
            // When there is no carousel element
            if (this.carouselObj === undefined) {
                return;
            }
            if (pause) {
                this.carouselObj.swipeMove = this.noop;
            } else {
                this.carouselObj.swipeMove = this.nextSlide;
            }
        },

        // activates when new color is selected and on page load
        colorUpdated: function (colorType, productID, colorID, background, assets, prefixID, imageSet) {
            console.log('MobileProductCarouselView.colorUpdated()');

            if (imageSet && imageSet !== this.mediaset) {
                // destroy existing component
                if (this.productMediaView) {
                    this.productMediaView.destroy();
                }

                // render new component
                this.render(imageSet);
            }
        },

        // Renders component
        render: function (mediaset) {
            console.log('MobileProductCarouselView.render()');

            var opts = {
                type: this.options.mediaType,
                el: this.el,
                mediaSet: mediaset || this.mediaSet,
                serverURL: this.serverURL,
                videoServerURL: this.videoServerURL,
                accountId: this.accountId
            };

            if (this.options.height) {
                opts.height = this.options.height;
            }

            if (this.options.width) {
                opts.width = this.options.width;
            }

            // creates Scene7 Mediaview
            this.productMediaView = new MobileProductMediaView(opts);
        }
    });

    return MobileProductCarouselView;
});
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, console, define, window, document, _gaq, Modernizr */

define('components/quickview/quickViewApp', [
    'MessageBus',
    'api',
    'modal',
    'components/quickview/QuickViewView',
    'components/quickview/ProductDetailCollection',
    'components/quickview/ProductDetailView',
    'ProductColorSelectCollection',
    'ProductColorSelectView',
    'components/quickview/ProductSizeSelectCollection',
    'components/quickview/ProductSizeSelectView',
    'components/quickview/ProductSizeContainerView',
    'components/shared/ProductImageView',
    'components/pdp/ProductPriceView',
    'ProductSKUCollection',
    'ProductInventoryCollection',
    'components/quickview/MultiQuickViewView',
    'components/shared/ProductMediaView',
    'components/shared/ProductZoomView',
    'productFavoritesView',
    'components/quickview/ProductPromoView',
    'socialApp',
    'bazaarvoiceLoader',
    'common/MobileProductView'

], function (MessageBus,
             API,
             modal,
             QuickViewView,
             ProductDetailCollection,
             ProductDetailView,
             ProductColorSelectCollection,
             ProductColorSelectView,
             ProductSizeSelectCollection,
             ProductSizeSelectView,
             ProductSizeContainerView,
             ProductImageView,
             ProductPriceView,
             ProductSKUCollection,
             ProductInventoryCollection,
             MultiQuickViewView,
             ProductMediaView,
             ProductZoomView,
             ProductFavoritesView,
             ProductPromoView,
             SocialApp,
             BazaarvoiceLoader,
             MobileProductView) {

    'use strict';
    // setup some defaults that we can use later
    var _defaults = {
        'selectors': {
            'quickViewTrigger': '.mar-quickview-btn',
            'quickView': '.cmn-quickview-container',
            'productDetailView': '.mar-pdp-product-details-container',
            'productWaistSizeView': '.mar-product-sizes-waist-container',
            'productLengthSizeView': '.mar-product-sizes-length-container',
            'productSizeContainerView': '.mar-product-size-container',
            'productColorView': '.mar-pdp-color-container',
            'productImageView': '.mar-product-gallery-container',
            'productPriceView': '.mar-product-price',
            'productSKUView': '.mar-product-selection-container',
            'productFavoritesView': '.asc-add-to-favs-btn',
            'productMediaView': '.asc-product-media',
            'productScene7View': '.s7container',
            'quantityDetail': '.mar-product-quantity-message',
            'productSelectionContainer': '.mar-product-selection-container',
            'productPromoView': '.mar-product-promo-message',
            'quickMsgClass': '.mar-product-quantity-message',
            'inStockWrapper': '.asc-product-in-stock-container',
            'outOfStockWrapper': '.asc-product-oos-container',
            'socialContainer': '.mar-social-container',
            'pdpFavs': '.pdp-favs'
        },
        'actions': {
            'updateQuantity': 'QuickView.updateQuantity',
            'addToFavorite': 'QuickView.addToFavorites',
            'addToCart': 'QuickView.addToCart',
            'editItem': 'Cart.EditRegularItem',
            'getProduct': 'QuickView.getProduct',
            'getInventory': 'QuickView.getInventory'
        },
        //is this multiple product quick view or regular?
        'multi': false,
        'onPage': false,
        //which component is this? default is qv but it can also be multipdp or multiqv. pdp is handled separately in pdpApp.
        'prefixID': 'qv',
        'iteration': 0,
        'scene7Instantiated': false,
        'skuBasedPrice': API.endpoints.brandConfig.skuBasedPrice,
        'skuBasedPromotion': API.endpoints.brandConfig.skuBasedPromotion
    };

    var QuickView = function () {
        //console.log("QuickView constructor called ");
    };

    QuickView.prototype.init = function (customOptions) {
        //console.log("QuickView.init()");
        var that = this;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        // setup collections
        this.setupCollections();
        this.setupAJAXListeners();
        this.currentAction = this.options.actions.addToCart;

        if (this.options.multi === true) {
            if (this.options.onPage === true) {
                this.options.prefixID = 'multipdp';
            } else {
                this.options.prefixID = 'multiqv';
            }

            that.processData(this.options.productData, this.options.inventoryData);
            that.getLabels();
            that.setUpViews(this, this.options.context, this.options.iteration);
            if (this.options.inventoryData.all_skus_out_of_stock === "true") {
                that.oosImageRender();
            }
        } else {
            this.attachEvents();
            this.setTriggers();
        }

        this.loadQuickMessages();

        //lazy way to get product id if it is there
        /*$(this.options.selectors.quickViewTrigger).on('click', function(e) {
         //optimize this like this
         var triggerData = $(e.currentTarget).data();
         //console.log(triggerData);
         // get product id
         if($(e.target).attr('data-id')) {
         that.productID = $(e.target).attr('data-id');
         }
         if($(e.target).attr('data-favid')) {
         that.giftlistItemId = $(e.target).attr('data-favid');
         }
         // get sku if it exists so that we can preselect items
         // get quantity
         if ($(e.currentTarget).data('quantity')) {
         that.productQuantity = $(e.target).data('quantity');
         }
         });*/

        // this setsup a modal on quickview

    };

    QuickView.prototype.setTriggers = function () {
        //console.log("QuickView.setTriggers()");
        var that = this,
            $triggers = $(this.options.selectors.quickViewTrigger),
            triggerLen = $triggers.length,
            $currentEl,
            i = 0,
            touch = Modernizr.touch;

        for (i; i < triggerLen; i++) {
            $currentEl = $($triggers.get(i));

            if ($currentEl.attr('data-plugin_modal') === undefined) {

                if (!touch || !API.showMobileView('quickViewConfig')) {
                    $currentEl.data('modalevent', 'quickView.modal.openModal').data('modalclass', 'modal-quick-view').modal({'target': '#quickView'});
                }
            }
        }
    };


    //create new collections
    QuickView.prototype.setupCollections = function () {
        //console.log("QuickView.setupCollections()");
        this.productDetailCollection = new ProductDetailCollection();
        this.productColorCollection = new ProductColorSelectCollection();
        this.productSizeCollection = new ProductSizeSelectCollection();
        this.productSKUCollection = new ProductSKUCollection();
        this.productInventoryCollection = new ProductInventoryCollection();
    };

    //process data given in the page
    QuickView.prototype.getInitialData = function (that, context) {
        //console.log("QuickView.getInitialData()");

        /*
         * Ensighten Tracking Start:
         * Event: quickViewClick:- When User click on quick view, tracking implementation start
         */
        $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {"name": "quickViewClick"});

        /*
         * Ensighten Tracking End
         */


        $.when(
            that.updateQuickView(API.endpoints.QVgetProduct, {
                'Action': that.options.actions.getProduct,
                'id': that.productID
            }),
            that.updateQuickView(API.endpoints.QVgetInventory, {
                'Action': that.options.actions.getInventory,
                'id': that.productID
            }))
            .then(function (data, inventoryData) {
                //console.log("QuickView.getInitialData.promise().then()");
                if (typeof data[0] === "object" && data[0].status && data[0].status.toLowerCase() === "invalidsession") {
                    window.location.href = data[0].redirectURLSessionTimout;
                }
                var productID = data[0].product[0].product_id,
                    status = data[0].product[0].status,
                    noInventory = false;

                that.options.priceRangeVal = that.options.skuBasedPrice ? data[0].product[0].price_range : "";

                that.processData(data[0].product[0], inventoryData[0].inventory.products[data[0].product[0].product_id]);
                that.getLabels();
                /*
                 * Update modalActionType if user clicks on 'edit' cart item and then on 'move cart'
                 * mark edititem = false based on user action
                 */
                if (inventoryData[0].inventory.products[productID]) {
                    noInventory = inventoryData[0].inventory.products[productID].all_skus_out_of_stock;
                } else {
                    noInventory = undefined;
                }
                that.editItem = that.currentAction === "QuickView.addToCart" ? false : true;
                that.setUpViews(that, context, 0);
                if ((noInventory === undefined || noInventory === "false") && status !== "I") {
                    that.showOOSView(false, context);
                    //ASCR-56, preselecting the size always if the product has only one size
                    //[Vijendra][ALM-5139] Removing data as we don't need
                    //that.preselectSizes(data,data[0].product[0].all_available_sizes);
                    that.preselectSizes(data[0].product[0].all_available_sizes);
                    that.setupInitialState();
                    if (that.productSku) {
                        that.selectProductBySku(that.productSku, data[0]);
                    }
                } else {
                    that.showOOSView(true, context);
                }
                that.setupBazaarVoice();

                MessageBus.trigger("SocialApp.pinterestUpdate", {
                    'description': that.productDetailCollection.models[0].get('product_name'),
                    'url': window.location.host + that.productDetailCollection.models[0].get('product_url')
                });

                var $sizeChartLink = context.find("a.sizeChartModal");
                if ($sizeChartLink[0]) {
                    $sizeChartLink.modal();
                }
            });
    };
    QuickView.prototype.showOOSView = function (showView, $context) {

        if (showView === true) {
            var defaultColor = this.productDetailCollection.models[0].attributes.default_color,
                productID = this.productDetailCollection.models[0].attributes.product_id,
                imageSetToLoad = productID + "_" + defaultColor + "_ms";
            $('#quickViewForm .mar-product-price').hide();
            $(this.options.selectors.outOfStockWrapper).addClass('active');
            var template = _.template($('#out-of-stock-template').html());
            var templateData = $.parseJSON($('#item-msg-json').html());
            $(this.options.selectors.outOfStockWrapper).html(template(templateData.messages));
            //ART-6776
            $(this.options.selectors.socialContainer).addClass(this.options.hideContainerClass);
            $(this.options.selectors.pdpFavs).addClass(this.options.hideContainerClass);

            MessageBus.trigger('ProductColorView.updateSelectedColor-' + this.options.prefixID + this.options.iteration, null, productID, defaultColor, null, undefined, this.options.prefixID + this.options.iteration, imageSetToLoad);
        } else {
            if ($context[0]) {
                $context.find(this.options.selectors.inStockWrapper).addClass('active');
            } else {
                $(this.options.selectors.inStockWrapper).addClass('active');
            }
        }
    };
    //if there is only one size available preselect it
    //removing data | ALM-5139
    QuickView.prototype.preselectSizes = function (sizes) {
        //console.log("QuickView.preselectSizes()");
        var i = 0,
            j = 0;

        for (i = 0; i < sizes.length; i++) {
            var uniqueSizes = [],
                value = '';

            for (j = 0; j < sizes[i].values.length; j++) {
                value = sizes[i].values[j].value;
                if ($.inArray(value, uniqueSizes) === -1) {
                    uniqueSizes.push(value);
                }
            }

            if (uniqueSizes.length === 1) {
                $(this.options.selectors.productSizeContainerView).find('input[value="' + sizes[i].values[0].id + '"]').trigger('click');
                //Commenting below line for ALM-5139
                //$(this.options.selectors.productColorView).find('input[value="'+data[0].product[0].default_color+'"]').trigger('click');
            }
        }
    };
    // setup initial state
    QuickView.prototype.setupInitialState = function () {
        //console.log("QuickView.setupInitialState()");
        var that = this,
            foundSku;
        // check if there is sku
        if (this.productSku) {
            foundSku = _.find(this.productSKUCollection.models, function (model) {
                return model.get('sku_id') === that.productSku + "";
            });

            // foun SKU
            // console.log(foundSku);
            // fire all the event for the sku

        }
    };

    //grab labels for the templates. bam!
    QuickView.prototype.getLabels = function () {
        //console.log("QuickView.getLabels()");
        var $pdpLabels = $("#pdp-labels");
        if ($pdpLabels[0]) {
            this.configTxt = $.parseJSON($("#pdp-labels").html());
        }
        console.log("pdp-labels-json-parse");
    };

    //placeholder for loading quickview-messages

    QuickView.prototype.loadQuickMessages = function () {
        var $itemMsgJson = $('#item-msg-json');
        if ($itemMsgJson[0]) {
            this.options.quickMessages = $.parseJSON($itemMsgJson.html());
        }
        console.log("item-msg-json");
    };

    //listen for the modal to open
    QuickView.prototype.attachEvents = function () {
        //console.log("QuickView.attachEvents()");
        var that = this;

        //should this pass in the id of the item it is launched from?
        if (this.options.multi !== true) {
            MessageBus.on('quickView.modal.openModal', this.onOpenModal, this);
            MessageBus.on('closed.modal', this.onCloseModal, this);
            MessageBus.on('QuickView.refreshTriggers', this.onRefreshTriggers, this);
        }

        //ALM-5139
        MessageBus.on('PDP.autoSelectSingleSize', function () {
            if (that.quickView) {
                that.preselectSizes(that.quickView.options.collection.models[0].attributes.all_available_sizes);
            }

        });

    };

    QuickView.prototype.onOpenModal = function (context, $el) {
        //console.log("QuickView.modal.openModal EVENT");
        this.isOpen = true;
        this.referenceNum = null;

        var triggerData;

        // get data from the passed in trigger
        if ($el) {
            triggerData = $el.data();
        }

        this.productID = triggerData.productid;
        //trigger data does not actually update so I need to steal it from the dom instead
        this.colorID = $el.attr('data-colorid');

        this.Action = triggerData.action;

        if (this.Action === "editItem") {
            // console.log('editItem');
            this.currentAction = this.options.actions.editItem;
            this.editItem = true;
        }
        else {
            // console.log('addToCart');
            this.currentAction = this.options.actions.addToCart;
        }

        this.itemId = triggerData.id;
        this.giftlistItemId = triggerData.favid;
        this.referenceNum = triggerData.styleid;

        // look for quantity and set it to 1 if not there
        if (triggerData.quantity) {
            this.productQuantity = triggerData.quantity;
        } else {
            this.productQuantity = 1;
        }

        this.productSku = triggerData.sku;

        this.$modal = context;

        //when modal loads, get data
        this.getInitialData(this, context);
    };

    QuickView.prototype.onCloseModal = function () {
        //console.log("QuickView EVENT closed.modal");
        if (this.isOpen === true) {
            this.isOpen = false;
            //console.log('modal closed');
            MessageBus.trigger("removeScene7");
        }
    };

    QuickView.prototype.onRefreshTriggers = function () {
        //console.log("QuickView.refreshTriggers EVENT");
        this.setTriggers();
        window.picturefill();
        if (typeof $.fn.lazyload !== "undefined") {
            $("img.lazy-load").lazyload({
                skip_invisible: false,
                threshold: 200,
                failure_limit: 15
            });
        }
    };

    QuickView.prototype.setupBazaarVoice = function () {
        var that = this;

        this.bazaarvoiceLoader = new BazaarvoiceLoader({
            'callback': function () {
                MessageBus.trigger('quickview.BVLoaded', window.$BV);
            }
        });
    };

    QuickView.prototype.selectProductBySku = function (skuId, data) {
        //console.log("QuickView.selectProductBySku()");
        var that = this;


        function search(nameKey, myArray) {

            for (var i = 0; i < myArray.length; i++) {

                //Making this change as sku ids can be alpha numeric and in that case this
                //earlier comparison was failing.
                //if (parseInt(myArray[i].sku_id) === nameKey) {

                if (myArray[i].sku_id.toString() === nameKey.toString()) {
                    //console.log("yes");
                    return myArray[i];
                }
            }
        }

        var resultObject = search(skuId, data.product[0].skus);
        if (resultObject) {
            var colorId = resultObject.color,
            //sizeId = resultObject.size,
                pid = data.product[0].product_id;
            that.colorID = colorId;
            that.setDefaults(that.options.iteration);
            for (var prop in resultObject) {
                if (prop.indexOf('size') > -1) {
                    //ART-8718 | JU
                    if (API.showMobileView('mobileProductSize')) {
                        $(that.options.selectors.productSizeContainerView).find('select.mar-product-sizes option[value="' + resultObject[prop] + '"]').prop('selected', true).trigger('change');
                    } else {
                        $(that.options.selectors.productSizeContainerView).find('input[value="' + resultObject[prop] + '"]').trigger('click');
                    }
                }
            }
        }
    };

    QuickView.prototype.setUpViews = function (that, $container, j) {
        //console.log("QuickView.setUpViews()");
        var i = 0,
            productID = this.productDetailCollection.models[0].attributes.product_id;

        var mobileProductSize = API.showMobileView('mobileProductSize');
        var mobileProductView = API.showMobileView('mobileProductView');

        this.$container = $container;

        if (this.options.multi === false) {
            that.quickView = new QuickViewView({
                '$parent': $container.find(that.options.selectors.quickView),
                'collection': this.productDetailCollection,
                'skuCollection': that.productSKUCollection,
                'labels': this.configTxt,
                'productQuantity': this.productQuantity,
                'selectedCartSku': that.productSku,
                'modalActionType': that.editItem,
                'prefixID': this.options.prefixID + j
            });
        } else {
            that.quickView = new MultiQuickViewView({
                '$parent': $container.find(that.options.selectors.quickView),
                '$modal': $container,
                'collection': this.productDetailCollection,
                'skuCollection': that.productSKUCollection,
                'all_skus_out_of_stock': that.options.inventoryData.all_skus_out_of_stock,
                'labels': this.configTxt,
                'iteration': j,
                'prefixID': this.options.prefixID + j
            });
        }

        var social = SocialApp.init();

        this.productDetailCollection.models[0].attributes.referenceNum = that.referenceNum;

        that.productDetailView = new ProductDetailView({
            '$parent': $($($container.find(that.options.selectors.productDetailView)).get(j)),
            'collection': this.productDetailCollection,
            'colorCollection': this.productColorCollection,
            'sizeCollection': this.sizeCollection,
            'labels': this.configTxt,
            'multi': this.options.multi,
            'modalActionType': that.editItem
        });

        that.productColorView = new ProductColorSelectView({
            '$parent': $($($container.find('.mar-filter-color')).get(j)),
            '$colorContainer': $($($container.find('.mar-pdp-color-container')).get(j)),
            'collection': this.productColorCollection,
            'skuCollection': this.productSKUCollection,
            'inventoryCollection': this.productInventoryCollection,
            'productID': productID,
            'prefixID': this.options.prefixID + j
        });

        /*
         load scene 7.
         */

        //if this is multi pdp, show singular zoom view
        if (this.options.multi === true && this.options.onPage === true) {
            // render mobile view
            if (mobileProductView) {
                that.productZoomView = new MobileProductView({
                    'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'type': 'zoomView',
                    'height': {
                        mobile: 410,
                        tab: 590,
                        desktop: 590
                    },
                    'prefixID': this.options.prefixID + j
                });
            }
            // render desktop view
            else {
                that.productZoomView = new ProductZoomView({
                    '$el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'productID': productID,
                    'prefixID': this.options.prefixID + j
                });
            }

            //if this is regular quick view and not multi product quickview, show additional images/videos
        } else {
            if (this.options.multi === true && this.options.onPage === false) {
                that.productImageView = new ProductImageView({
                    'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'productID': productID,
                    'prefixID': this.options.prefixID + j
                });
            }

            if (this.options.multi === false && this.options.onPage === false && that.Action !== "editItem") {
                if (mobileProductView) {
                    that.productMediaView = new MobileProductView({
                        'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                        'collection': this.productDetailCollection,
                        'prefixID': this.options.prefixID + j
                    });
                } else {
                    that.productMediaView = new ProductMediaView({
                        'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                        'collection': this.productDetailCollection,
                        'productID': productID,
                        'prefixID': this.options.prefixID + j,
                        'videos': this.productDetailCollection.models[0].attributes.video_names,
                        'qvRef': this
                    });
                }
            }

            if (this.options.multi === false && this.options.onPage === false && that.Action === "editItem") {
                that.productImageView = new ProductImageView({
                    'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'productID': productID,
                    'prefixID': this.options.prefixID + j
                });
            }
        }

        //product favorites
        that.productFavoritesView = new ProductFavoritesView({
            'el': $($($container.find(that.options.selectors.productFavoritesView)).get(j)),
            'productID': that.productDetailCollection.models[0].attributes.product_id,
            'labels': this.configTxt
        });

        if (this.options.multi === true) {
            // JU Fix ALM -150
            //if(this.options.inventoryData.all_skus_out_of_stock !== "true" && this.options.productData.isSellable !== false){
            if (this.options.productData.isSellable !== false) {
                that.productPriceView = new ProductPriceView({
                    '$parent': $($($container.find(that.options.selectors.productPriceView)).get(j)),
                    'productID': productID,
                    'priceRange': that.options.priceRangeVal
                });
            }
        } else {
            that.productPriceView = new ProductPriceView({
                '$parent': $($($container.find(that.options.selectors.productPriceView)).get(j)),
                'productID': productID,
                'priceRange': that.options.priceRangeVal
            });
        }

        this.productPromoView = new ProductPromoView({
            '$parent': $($($container.find(that.options.selectors.productPromoView)).get(j)),
            'productID': productID,
            'prefixID': this.options.prefixID + j,
            'skuBasedPromotion': that.options.skuBasedPromotion
        });

        this.productSizeContainerView = new ProductSizeContainerView({
            '$parent': $($($container.find(that.options.selectors.productSizeContainerView)).get(j)),
            'collection': that.productSizeCollection,
            'skuCollection': that.productSKUCollection,
            'inventoryCollection': that.productInventoryCollection,
            'productID': productID,
            '$container': $($container.find('.mar-pdp-section').get(j)),
            'productDetailCollection': this.productDetailCollection,
            'prefixID': this.options.prefixID + j,
            'skuBasedPrice': that.options.skuBasedPrice,
            'skuBasedPromotion': that.options.skuBasedPromotion,
            // for mobile version
            'mobile': mobileProductSize
        });

        $container.find('input.mar-product-quantity').numberInput({
            'pdpMsgs': this.options.quickMessages,
            'pdpMsgsEl': this.options.selectors.quickMsgClass
        });

        MessageBus.on('PDP.setNextDefaultColor', this.onSetNextDefaultColor, this);

        that.setDefaults(j);

        //temporary slick call. move into image view
        setTimeout(function () {
            //console.log("QuickView.setUpViews().setTimeout()");
            $container.find('.mar-product-thumbnails-holder').slick({
                'slidesToShow': 3,
                'infinite': true,
                'slide': '.mar-product-thumbnail'
            });
        }, 0);
    };

    QuickView.prototype.setDefaults = function (iteration) {
        //console.log("QuickView.setDefaults()");
        var color = this.productDetailCollection.models[0].attributes.default_color,
            productID = this.productDetailCollection.models[0].attributes.product_id,
            that = this;

        //ALM-5433 | If default Color is coming in JSON data but not available in all_available_colors

        this.dfColor = color;

        this.colorPre = _.filter(this.productDetailCollection.models[0].attributes.all_available_colors[0].values, function (prod) {
            return prod.id === that.dfColor;
        });

        if (color === undefined || _.isEmpty(color) || this.colorPre.length === 0) {
            color = this.productDetailCollection.models[0].attributes.all_available_colors[0].values[0].id;
        }

        if (this.colorID !== undefined) {
            color = this.colorID.toString();
        }

        MessageBus.trigger('QuickView.setDefaultColor-' + this.options.prefixID + iteration, color, productID);
    };

    QuickView.prototype.setupAJAXListeners = function () {
        //console.log("QuickView.setupAJAXListeners()");
        MessageBus.on('QuickView.addToCart', this.onAddtoCart, this);
        MessageBus.on('QuickView.addToFavorites', this.onAddToFavorites, this);
    };

    QuickView.prototype.onAddToFavorites = function (itemID) {
        //console.log("QuickView.addToFavorites EVENT");
        //what do they need to add to cart
        this.updateQuickView(API.endpoints.QVaddToFavorites, {
            'Action': this.options.actions.addToFavorites,
            'itemId': itemID
        });
    };

    QuickView.prototype.onAddtoCart = function (sku, qty, productId) {
        //console.log("QuickView.addToCart EVENT");
        this.sendAJAXRequest(API.endpoints.QVaddToCart, {
            'Action': this.currentAction,
            'skuId': sku,
            'quantity': qty,
            'productId': productId,
            'giftlistItemId': this.giftlistItemId,
            'itemId': this.itemId
        });
    };

    QuickView.prototype.updateQuickView = function (url, urlParams) {
        //console.log("QuickView.updateQuickView()");
        var that = this;

        MessageBus.trigger("indicator.show");

        // Assign handlers immediately after making the request,
        // and remember the jqXHR object for this request
        var dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post',
            'dataType': 'json'
        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return dfd;
    };

    QuickView.prototype.sendAJAXRequest = function (url, urlParams) {
        //console.log("QuickView.sendAJAXRequest()");
        var that = this;

        MessageBus.trigger("indicator.show");

        // Assign handlers immediately after making the request,
        // and remember the jqXHR object for this request
        this.options.dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post'
        }).done(function (data) {
            //console.log("QuickView.sendAJAXRequest().done()");
            if (data.status === "success") {
                /*
                 * Ensighten Tracking Start:
                 * Event: addToCart:- When user clicks on "Add To Cart" and adds item to non-empty cart
                 */
                var eventData = {},
                    userStateData = API.getUserState();

                if (userStateData.cartData.numberOfItems > 0) {
                    eventData = {"name": "addToCart", "pid": urlParams.productId, "sku": urlParams.skuId};
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);
                } else {
                    eventData = {"name": "createCart", "pid": urlParams.productId, "sku": urlParams.skuId};
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);
                }

                /*
                 * Ensighten Tracking End
                 */

                MessageBus.trigger("API.CartUpdated", data.data.cartItems);
                MessageBus.trigger("indicator.hide");
                MessageBus.trigger("modal.close");
                if (that.currentAction !== that.options.actions.editItem) {
                    // depending on our flag (if edit we will not trigger this one);
                    // If the page is not cart page then don't trigger mini cart
                    if (typeof API.isCartPage === "undefined" || API.isCartPage === false) {
                        MessageBus.trigger('addToMinicart', data);
                    }
                }

                //This check is for fav items to move to cart case where we have to update fav. view on cart
                //page after movement of that item in cart
                // check is based on giftlistItemId which is only available on this case.

                if (typeof  that.giftlistItemId !== 'undefined') {
                    MessageBus.trigger('moveItemToCart.QuickViewAppView', data, urlParams.productId);
                    that.giftlistItemId = "";
                }

                if (typeof that.itemId !== 'undefined') {
                    MessageBus.trigger('updateCart.QuickViewAppView', data);
                    that.itemId = "";
                }
            }
            else {
                //console.log("error");
                $(that.options.selectors.quantityDetail).html(data.data.errors[0].msg);
            }

        }).fail(function (data) {

        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return this.options.dfd;
    };

    //separate data into their proper collections
    QuickView.prototype.processData = function (skuData, inventoryData) {
        //console.log("QuickView.processData()");
        /*this.productDetailCollection.reset();
         this.productColorCollection.reset();
         this.productSizeCollection.reset();
         this.productSKUCollection.reset();
         this.productInventoryCollection.reset();

         this.productDetailCollection.add(skuData);

         this.productColorCollection.add(skuData.all_available_colors);

         this.productSizeCollection.add(skuData.all_available_sizes);

         this.productSKUCollection.add(skuData.skus);

         this.productInventoryCollection.add(inventoryData.skus);*/

        this.productSKUCollection.reset(skuData.skus);
        this.productInventoryCollection.reset(inventoryData.skus);
        this.productDetailCollection.reset(skuData);
        this.productColorCollection.reset(skuData.all_available_colors);
        this.productSizeCollection.reset(skuData.all_available_sizes);
    };

    QuickView.prototype.onSetNextDefaultColor = function (j) {
        MessageBus.trigger('QuickView.setNextDefaultColor-' + this.options.prefixID + this.options.iteration, this.productDetailCollection.models[0].attributes.product_id);
    };

    QuickView.prototype.close = function () {
        //console.log("QuickView.close()");
        MessageBus.off('QuickView.addToCart', this.onAddtoCart, this);
        MessageBus.off('QuickView.addToFavorites', this.onAddToFavorites, this);
        MessageBus.off('PDP.setNextDefaultColor', this.onSetNextDefaultColor, this);

        if (this.options.multi !== true) {
            MessageBus.off('quickView.modal.openModal', this.onOpenModal, this);
            MessageBus.off('closed.modal', this.onCloseModal, this);
            MessageBus.off('QuickView.refreshTriggers', this.onRefreshTriggers, this);
        }

        this.productDetailCollection.remove();
        this.productColorCollection.remove();
        this.productSizeCollection.remove();
        this.productSKUCollection.remove();
        this.productInventoryCollection.remove();

        delete this.productDetailCollection;
        delete this.productColorCollection;
        delete this.productSizeCollection;
        delete this.productSKUCollection;
        delete this.productInventoryCollection;

        if (typeof this.quickView !== "undefined") {
            this.quickView.close();
            delete this.quickView;
        }
        if (typeof this.productDetailView !== "undefined") {
            this.productDetailView.close();
            delete this.productDetailView;
        }
        if (typeof this.productColorView !== "undefined") {
            this.productColorView.close();
            delete this.productColorView;
        }
        if (typeof this.productZoomView !== "undefined") {
            this.productZoomView.close();
            delete this.productZoomView;
        }
        if (typeof this.productImageView !== "undefined") {
            this.productImageView.close();
            delete this.productImageView;
        }
        if (typeof this.productMediaView !== "undefined") {
            this.productMediaView.close();
            delete this.productMediaView;
        }
        if (typeof this.productFavoritesView !== "undefined") {
            this.productFavoritesView.close();
            delete this.productFavoritesView;
        }
        if (typeof this.productPriceView !== "undefined") {
            this.productPriceView.close();
            delete this.productPriceView;
        }
        if (typeof this.productPromoView !== "undefined") {
            this.productPromoView.close();
            delete this.productPromoView;
        }
        if (typeof this.productSizeContainerView !== "undefined") {
            this.productSizeContainerView.close();
            delete this.productSizeContainerView;
        }
    };
    QuickView.prototype.oosImageRender = function () {
        var defaultColor = this.productDetailCollection.models[0].attributes.all_available_colors[0].values[0].id,
            imageSetToLoad = this.productDetailCollection.models[0].attributes.all_available_colors[0].values[0].imageset,
            productID = this.productDetailCollection.models[0].attributes.product_id;

        MessageBus.trigger('ProductColorView.updateSelectedColor-' + this.options.prefixID + this.options.iteration, null, productID, defaultColor, null, undefined, this.options.prefixID + this.options.iteration, imageSetToLoad);

    };
    return QuickView;
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, console, define, window, document, _gaq*/

define('MultiProductQuickView', [
    'MessageBus',
    'api',
    'modal',
    'components/quickview/QuickViewView',
    'components/quickview/ProductDetailCollection',
    'components/quickview/ProductDetailView',
    'ProductColorSelectCollection',
    'ProductColorSelectView',
    'components/quickview/ProductSizeSelectCollection',
    'components/quickview/ProductSizeSelectView',
    'components/pdp/ProductImageView',
    'components/pdp/ProductPriceView',
    'ProductSKUCollection',
    'ProductInventoryCollection',
    'components/quickview/quickViewApp',
    'bazaarvoiceLoader'
], function (MessageBus,
             API,
             modal,
             QuickViewView,
             ProductDetailCollection,
             ProductDetailView,
             ProductColorSelectCollection,
             ProductColorSelectView,
             ProductSizeSelectCollection,
             ProductSizeSelectView,
             ProductImageView,
             ProductPriceView,
             ProductSKUCollection,
             ProductInventoryCollection,
             QuickView,
             BazaarvoiceLoader) {

    'use strict';
    // setup some defaults that we can use later
    var _defaults = {
        'selectors': {
            'quickViewTrigger': '.mar-multi-quickview-btn',
            'quickView': '.cmn-quickview-container',
            'productDetailView': '.mar-pdp-product-details-container',
            'productWaistSizeView': '.mar-product-sizes-waist-container',
            'productLengthSizeView': '.mar-product-sizes-length-container',
            'productSizeContainerView': '.mar-product-size-container',
            'productColorView': '.mar-pdp-color-container',
            'productImageView': '.mar-product-gallery-container',
            'productPriceView': '.mar-product-price',
            'productSKUView': '.mar-product-selection-container'
        },
        'actions': {
            'updateQuantity': 'MultiProductQuickView.updateQuantity',
            'addToFavorite': 'MultiProductQuickView.addToFavorites',
            'addToCart': 'MultiProductQuickView.addToCart',
            'getProduct': 'PDP.getMultiProduct',
            'getInventory': 'PDP.getMultiInventory',
        },
        'skuBasedPrice': API.endpoints.brandConfig.skuBasedPrice,
        'dfd': {}
    };

    var MultiProductQuickView = function () {
        //console.log("MultiProductQuickView constructor called");

    };

    MultiProductQuickView.prototype.init = function (customOptions) {
        //console.log("MultiProductQuickView.init()");
        var that = this;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        this.attachEvents();
        //this.listenForAjaxRequests();

//ART-6025
        var mobileNav = API.showMobileView('mobileStlOverlay');
        if (!mobileNav) {
            $(this.options.selectors.quickViewTrigger).data('modalevent', 'MultiProductQuickView.modal.openModal').data('modalclass', 'modal-quick-view asc-multi-product-quickview').modal({'target': '#multiQuickView'});
        } else {
            that.mobileHomePageStlBtn();
        }
        MessageBus.on('viewport.change', function (viewport) {
            var mobileN = API.showMobileView('mobileStlOverlay');
            if (!mobileN) {
                $(that.options.selectors.quickViewTrigger).data('modalevent', 'MultiProductQuickView.modal.openModal').data('modalclass', 'modal-quick-view asc-multi-product-quickview').modal({'target': '#multiQuickView'});
            } else {
                that.mobileHomePageStlBtn();
            }
        });
    };
    MultiProductQuickView.prototype.mobileHomePageStlBtn = function () {
        var elm = $(this.options.selectors.quickViewTrigger),
            parentCon = $('.asc-shop-look-container'),
            mobileUrl = elm.data('mobile-url'),
            prodId = elm.data('productid');
        parentCon.off('click.mobileStl').on('click.mobileStl', this.options.selectors.quickViewTrigger, function (e) {
            window.location.href = mobileUrl;
        });
    };

    MultiProductQuickView.prototype.requestPDPData = function (url, urlParams) {
        //console.log("MultiProductQuickView.requestPDPData()");
        var that = this;

        MessageBus.trigger("indicator.show");

        // Assign handlers immediately after making the request,
        // and remember the jqXHR object for this request
        var dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post',
            'dataType': 'json'
        });

        return dfd;
    };

    //process data given in the page

    MultiProductQuickView.prototype.getInitialData = function (context) {
        //console.log("MultiProductQuickView.getInitialData()");
        var that = this;

        $.when(
            that.requestPDPData(API.endpoints.multiproductPDPgetProducts, {
                'Action': that.options.actions.getProduct,
                'id': that.productID
            }),
            that.requestPDPData(API.endpoints.multiproductPDPgetInventory, {
                'Action': that.options.actions.getInventory,
                'id': that.productID
            }))
            .then(function (data, inventoryData) {
                //console.log("MultiProductQuickView.promose().then() data loaded");
                MessageBus.trigger("indicator.hide");
                that.messageData = $.parseJSON($('#item-msg-json').html());
                that.processData(data[0], inventoryData[0], context);
            });


        /*var data = $.parseJSON($("#multi-quickview-product-data").html()),
         inventoryData = $.parseJSON($("#multi-quickview-inventory-data").html());

         this.messageData = $.parseJSON($('#item-msg-json').html());
         this.processData(data,inventoryData,context);*/
    };

    MultiProductQuickView.prototype.processData = function (data, inventoryData, context) {
        //console.log("MultiProductQuickView.processData()");
        var i = 0,
            dataLen = data.product.length,
            that = this;

        this.quickViews = [];
        this.productIds = []; //create array of pids for bazaarvoice
        /*this.allEmpty = _.filter(inventoryData.inventory.products, function(prod){
         return prod.all_skus_out_of_stock === "false";
         });*/

        for (i; i < dataLen; i++) {

            if (data.product[i] && inventoryData.inventory.products[data.product[i].product_id]) {
                var quickView = new QuickView();
                quickView.init({
                    'multi': true,
                    'productData': data.product[i],
                    'inventoryData': inventoryData.inventory.products[data.product[i].product_id],
                    'context': context,
                    'iteration': i,
                    'selectors': {
                        'quickView': '.mar-multi-quickview-detail-container'
                    },
                    'priceRangeVal': that.options.skuBasedPrice ? data.product[i].price_range : ""
                });

                this.quickViews.push(quickView);

                this.productIds.push(data.product[i].product_id);

                this.preselectSizes(data.product[i], data.product[i].all_available_sizes, context);
            }
        }

        setTimeout(function () {
            //console.log("MultiProductQuickView.processData().setTimeout()");
            context.find('.mar-multi-quickview-detail-container').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: false,
                speed: 500,
                arrows: true,
                infinite: false,
                draggable: false            /* To stop the product sections from being draggable in the STL modal  */
            });
            /*if(that.allEmpty.length === 0){
             $("body").find(".mar-product-details").css({'min-height':'230px', 'height':'230px'});
             }*/
        }, 0);

        this.setupBazaarVoice();
    };

    //if there is only one size available preselect it
    MultiProductQuickView.prototype.preselectSizes = function (data, sizes, context) {
        var i = 0,
            j = 0;

        for (i = 0; i < sizes.length; i++) {
            var uniqueSizes = [],
                value = '';

            for (j = 0; j < sizes[i].values.length; j++) {
                value = sizes[i].values[j].value;
                if ($.inArray(value, uniqueSizes) === -1) {
                    uniqueSizes.push(value);
                }
            }

            if (uniqueSizes.length === 1) {
                var $section = context.find('section[data-product-id="' + data.product_id + '"]'),
                    $sizeContainer = $section.find(this.options.selectors.productSizeContainerView),
                    $colorContainer = $section.find(this.options.selectors.productColorView);

                $sizeContainer.find('input[value="' + sizes[i].values[0].id + '"]').trigger('click');
                $colorContainer.find('input[value="' + data.default_color + '"]').trigger('click');
            }
        }
    };

    //grab labels for the templates. bam!
    MultiProductQuickView.prototype.getLabels = function () {
        //console.log("MultiProductQuickView.getLabels()");
        this.configTxt = $.parseJSON($("#pdp-labels").html());
    };

    //listen for the modal to open
    MultiProductQuickView.prototype.attachEvents = function () {
        //console.log("MultiProductQuickView.attachEvents()");
        var that = this;

        //should this pass in the id of the item it is launched from?
        MessageBus.on('MultiProductQuickView.modal.openModal', function (context, $el) {
            //console.log("MultiProductQuickView.modal.openModal EVENT");
            that.$modal = context;

            MessageBus.on("onBeforeClose.modal", that.onModalClose, that);

            var triggerData;
            that.productID = null;

            if ($el) {
                triggerData = $el.data();
                that.productID = triggerData.productid;
            }

            //when modal loads, get data
            that.getInitialData(context);

            that.$modal.on('click', '.asc-bag-action', function () {
                //console.log("ProductPriceView.click asc-bag-action EVENT");
                //process data to get skus/quantities
                that.processSelectedData();
            });
        });


        MessageBus.on('MultiProductQuickView.verifyModal', function (context) {
            //console.log("MultiProductQuickView.verifyModal EVENT");
            that.verifyModal(that);
        });

        MessageBus.on('MultiProductQuickView.addToCart', function (skuIDs, productIds, productSkuIds) {
            //console.log("MultiProductQuickView.addToCart EVENT");
            that.sendAJAXRequest(API.endpoints.MultiQVaddToCart, {
                'Action': that.options.actions.addToCart,
                'itemList': skuIDs
            }, productIds, productSkuIds);
        });
    };

    MultiProductQuickView.prototype.setupBazaarVoice = function () {
        var that = this;

        this.bazaarvoiceLoader = new BazaarvoiceLoader({
            'callback': function () {

                window.$BV.ui('rr', 'inline_ratings', {
                    productIds: that.productIds,
                    containerPrefix: 'BVRRInlineRating'
                });
            }
        });
    };

    MultiProductQuickView.prototype.verifyModal = function (that) {
        //console.log("MultiProductQuickView.verifyModal");
        var $sections = that.$modal.find('.mar-pdp-section[data-valid="true"]'),
            selectedLength = that.$modal.find('.mar-select-item:checked').length,
            sectionLength = $sections.length,
            $currentSection;

        if (sectionLength > 0 && sectionLength === selectedLength) {
            that.enableAddToBag(true);
        } else {
            that.enableAddToBag(false);
        }
    };

    MultiProductQuickView.prototype.onModalClose = function () {
        //console.log("MultiProductQuickView.onModalClose()");
        MessageBus.off("onBeforeClose.modal", this.onModalClose, this);
        var quickViewsLength = this.quickViews.length,
            ctr;
        for (ctr = 0; ctr < quickViewsLength; ctr++) {
            this.quickViews[ctr].close();
        }
        this.quickViews = [];
    };

    MultiProductQuickView.prototype.processSelectedData = function () {
        //console.log("MultiProductQuickView.processSelectedData()");
        var $sections = this.$modal.find('.mar-pdp-section[data-valid="true"]'),
            selectedLength = this.$modal.find('.mar-select-item:checked').length,
            sectionLength = $sections.length,
            $currentSection,
            i = 0,
            skuIDs = "",
            quantities = "",
            delimeter = "|",
            currentStr = "",
            productIds = [],
            productSkuIds = [];

        for (i = 0; i < selectedLength; i++) {
            $currentSection = $($sections.get(i));
            currentStr += $currentSection.attr("data-product-id") + delimeter + $currentSection.attr("data-sku-id") + delimeter + $currentSection.find("#mar-item-qty").val() + ",";
            productIds.push($currentSection.attr("data-product-id"));
            productSkuIds.push($currentSection.attr("data-sku-id"));
        }

        //remove last comma
        currentStr = currentStr.substring(0, currentStr.length - 1);

        MessageBus.trigger("MultiProductQuickView.addToCart", currentStr, productIds.join(), productSkuIds.join());
    };

    MultiProductQuickView.prototype.enableAddToBag = function (enableButton) {
        //console.log("MultiProductQuickView.enableAddToBag()");
        var $bagBtn = this.$modal.find('.asc-bag-action'),
            quantity = 0,
            threshold = 0;

        if (enableButton === true) {
            $bagBtn.removeAttr('disabled');
        } else {
            $bagBtn.attr('disabled', 'disabled');
        }
    };

    MultiProductQuickView.prototype.sendAJAXRequest = function (url, urlParams, productIds, productSkuIds) {
        //console.log("MultiProductQuickView.sendAJAXRequest()");
        var that = this;

        MessageBus.trigger("indicator.show");

        // Assign handlers immediately after making the request,
        // and remember the jqXHR object for this request
        this.options.dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post'
        }).done(function (data) {
            //console.log("MultiProductQuickView.sendAJAXRequest AJAX done");
            MessageBus.trigger("indicator.hide");

            if (data.status === "success") {
                if (data.errorMessage && _.isEmpty(data.errorMessage)) {
                    /*
                     * Ensighten Tracking Start:
                     * Event: addToCart:- When user clicks on "Add To Cart" and adds item to non-empty cart.
                     */
                    var eventData = {},
                        userStateData = API.getUserState();

                    if (userStateData.cartData.numberOfItems > 0) {
                        eventData = {
                            "name": "addToCart",
                            "pid": productIds,
                            "sku": productSkuIds,
                            "location": "Product Details"
                        };
                        $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);
                    } else {
                        eventData = {
                            "name": "createCart",
                            "pid": productIds,
                            "sku": productSkuIds,
                            "location": "Product Details"
                        };
                        $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);
                    }

                    console.log(eventData);
                    /*
                     * Ensighten Tracking End
                     */

                    MessageBus.trigger("modal.close");
                } else {
                    that.processErrorMessages(data.errorMessage);
                }
                MessageBus.trigger("API.CartUpdated", data.data.cartItems);
                MessageBus.trigger('addToMinicart', data);
            } else {
                //general errors
                that.showError();

                //product specific errors
                if (data.errorMessage && !_.isEmpty(data.errorMessage)) {
                    that.processErrorMessages(data.errorMessage);
                }
            }

        }).fail(function (data) {

        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return this.options.dfd;
    };

    MultiProductQuickView.prototype.processErrorMessages = function (errors) {
        //console.log("MultiProductQuickView.processErrorMessages()");
        var i = 0,
            errorLen = errors.length,
            $currentSection,
            $sections = $(".mar-pdp-section"),
            $parent = $sections.parent(),
            errorStr = "";

        for (i; i < errorLen; i++) {
            $currentSection = $parent.find('[data-sku-id="' + errors[i].skuId + '"]');

            if ($currentSection.length === 0) {
                $currentSection = $parent.find('[data-product-id="' + errors[i].productId + '"]');
            }

            if ($currentSection) {
                errorStr = "";

                for (var j = 0; j < errors[i].data.errors.length; j++) {
                    errorStr += errors[i].data.errors[j].msg + "<br>";
                }

                $currentSection.find('.mar-product-error').html(errorStr);
            }
        }
    };

    MultiProductQuickView.prototype.showError = function () {
        //console.log("MultiProductQuickView.showError() ");
        this.$modal.find('.mar-modal-error').html('<p class="mar-error-text">' + this.messageData.messages.out_of_stock_message + '</p>');
    };
    return new MultiProductQuickView();
});

define('itemModel', [], function () {
    'use strict';

    var ItemModel = Backbone.Model.extend({
        'defaults': {
            "id": 0,
            "skuId": 0,
            "productId": 0,
            "name": "",
            "referenceNum": "",
            "description": "",
            "promoMessage": "",
            "invMessage": "",
            "promoAppliedMsg": "",
            "promoAppliedAmount": 0,
            "imageURL": "",
            "imageALTText": "",
            "colorName": "",
            "colorImageURL": "",
            "colorHEXCode": "",
            "size": "",
            "originalPrice": 0,
            "unitPrice": 0,
            "quantity": 0,
            "maxQuantity": 0,
            "totalPrice": 0,
            "associatedId": 0,
            "dArgs": "",
            "notifications": {
                "target": "",
                "title": "",
                "message": ""
            },
            "orderDetails": {
                "soldOut": false,
                "reviewURL": "",
                "shippingStatus": "",
                "trackingNumber": "",
                "trackingURL": "",
                "firstArrivalEst": "",
                "secondArrivalEst": "",
                "returned": false
            },
            "labels": {},
            "associatedItem": {}
        },


        /**
         @function
         @description Fires after every instance intialization.
         */
        'initialize': function () {

            // set save value
            this.setSaved();
        },
        'setSaved': function () {
            var savedTotal = this.get('originalPrice') - this.get('price');
            this.set('saved', savedTotal.toFixed(2));
        }
    });

    // make it available
    return ItemModel;
});
define('itemsCollection', [
    'itemModel'
], function (ItemModel) {
    'use strict';
    var ItemsCollection = Backbone.Collection.extend({
        'model': ItemModel
    });
    return ItemsCollection;
});

define('ModalImageView', [], function () {
    'use strict';

    var ModalImageView = Backbone.View.extend({

        initialize: function (options) {
            this.template = _.template($("#modal-edit-image-template").html());
            this.bindEvents();
            this.render();
        },

        render: function () {
            this.$el.empty()
                .append(this.template(this.model.toJSON()));

            // Re-init picturefill
            window.picturefill();
            if (typeof $.fn.lazyload !== "undefined") {
                $("img.lazy-load").lazyload({
                    skip_invisible: false,
                    threshold: 200,
                    failure_limit: 15
                });
            }
        },

        bindEvents: function () {
            this.model.on("change", this.render, this);
        }
    });

    return ModalImageView;
});
define('itemSizesView', [
    'MessageBus'
], function (MessageBus) {
    'use strict';

    var ItemSizesView = Backbone.View.extend({

        'events': {},
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};

            this.render();
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {

            return this;
        },

        'setupEvents': function () {

        }
    });

    return ItemSizesView;
});
define('itemSizeTabView', [
    'MessageBus',
    'itemSizesView'
], function (MessageBus,
             ItemSizesView) {
    'use strict';

    var ItemSizeTabView = Backbone.View.extend({

        'events': {},
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};

            this.render();
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            //console.log('I am alive', this.$el);
            return this;
        },

        'setupEvents': function () {

        }
    });

    return ItemSizeTabView;
});

define('itemColorsView', [
    'MessageBus'
], function (MessageBus) {
    'use strict';

    var ItemColorsView = Backbone.View.extend({

        'events': {
            'click .asc-color-selector': 'colorSelected'
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};

            this.render();
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            //console.log('i am a color view', this.$el.find('.asc-color-selector'));
            return this;
        },
        'colorSelected': function (e) {
            console.log('clicked');
            e.preventDefault();
        }
    });

    return ItemColorsView;
});
define('ProductInventoryModel', [], function () {
    'use strict';

    var ProductInventoryModel = Backbone.Model.extend({
        'defaults': {},

        'initialize': function () {

        }
    });

    // make it available
    return ProductInventoryModel;
});
/**
 To Use:
 on element validation call new instance of this plugin and make sure to pass element and options to the instance
 element == form element
 options have class name for element
 */
define('emailValidator', ["MessageBus", "api"],
    function (MessageBus, api) {
        'use strict';

        var defaults = {
            'dfd': {},
            'values': [],
            'errorMessage': 'Please enter a valid email.',
            'errorContainer': {},
            'errorClass': 'parsley-error',
            'dfds': {},
            'totalEmails': 5
        };

        /**
         @constructor
         */
        function QASEmail(customOptions) {

            // extend element
            this.options = $.extend(true, {}, defaults, customOptions);

            this.init();

        }

        //append to body element
        QASEmail.prototype.init = function () {
            var that = this;
            that.events();
        };


        QASEmail.prototype.events = function () {
            // For Email Parsley error message (When both QAS and parsley error gets appended)
            $.listen('parsley:field:error', function (evt) {
                var that = this,
                    parsleyID;
                parsleyID = evt.OptionsFactory.fieldOptions.id;
                console.log(parsleyID);
                if ($('#parsley-id-' + parsleyID + ' .parsley-custom-error-message')[0]) {
                    $('#parsley-id-' + parsleyID + ' .parsley-custom-error-message').remove();
                }
            });
        };

        QASEmail.prototype.validate = function (emailElement) {

            // create a promise

            this.sendToQAS(emailElement.val());

            this.options.$el = emailElement;
            // pull parsley elements from the field so that we can error message
            this.options.errorContainer = $(emailElement.data('parsleyErrorsContainer'));
            this.options.errorMessage = emailElement.data('parsleyErrorMessage');

            //ART - 9289
            //this.options.parsleyID = emailElement.data('parsleyId');
            this.options.parsleyID = emailElement.attr('data-parsley-id');

            // in instances where message is not defined do a default email message
            if (this.options.errorMessage === undefined) {
                this.options.errorMessage = 'Please enter a valid email.';
            }

            // create a promise
            this.options.dfd = new $.Deferred();

            return this.options.dfd.promise();
        };

        QASEmail.prototype.sendToQAS = function (emailAddr) {
            var that = this,
                splitArray = emailAddr.split(',');
            // check if our element actually contains more than one email
            if (splitArray[0] === emailAddr) {
                // we have only one so call single email validation
                this.validateSingle(emailAddr);
            } else {
                this.validateMiltiple(splitArray);
            }
        };

        // do one simple validation and be done with it
        QASEmail.prototype.validateSingle = function (emailAddr) {

            var that = this;

            MessageBus.trigger("indicator.show");

            this.options.dfd = $.ajax({
                'type': 'get',
                'url': api.endpoints.QASEmail,
                'dataType': 'json',
                'data': {
                    'email': emailAddr
                }
            }).done(function (data) {

                MessageBus.trigger("indicator.hide");
                that.processValidation(data);

            }).error(function (xhr) {
                MessageBus.trigger("indicator.hide");

                that.options.dfd.resolve("resolved due to service error");

            });
        };
        // validate multiple
        // this is going to be a mess
        QASEmail.prototype.validateMiltiple = function (splitArray) {
            // do a for loop
            var that = this,
                len = splitArray.length,
                i;
            MessageBus.trigger("indicator.show");

            for (i = 0; i < this.options.totalEmails; i++) {
                // loop through and call ajax while asigning the deffered objects
                if (i < len) {
                    this.options.dfd[i] = $.ajax({
                        'type': 'get',
                        'url': api.endpoints.QASEmail,
                        'dataType': 'json',
                        'data': {
                            'email': splitArray[i]
                        }
                    });
                } else {
                    this.options.dfd[i] = true;
                }
            }
            // call a when
            $.when(this.options.dfd[0], this.options.dfd[1], this.options.dfd[2], this.options.dfd[3], this.options.dfd[4]).then(function (email1, email2, email3, email4, email5) {
                MessageBus.trigger("indicator.hide");
                var emailsValid = true,
                    badEmails = [],
                    objects = [email1, email2, email3, email4, email5],
                    i, len = objects.length;

                for (i = 0; i < len; i++) {
                    if (objects[i] !== true) {
                        //console.log(objects[i][0]);
                        if (objects[i][0].Certainty.toLowerCase() !== "verified" && objects[i][0].Certainty.toLowerCase() !== "unknown") {
                            emailsValid = false;
                            badEmails.push(objects[i][0].Email);
                        }
                    }

                }
                // check validiti
                if (emailsValid === true) {
                    that.options.dfd.resolve("verified");
                    // remove all the parsley elements
                    $('#parsley-id-' + that.options.parsleyID).empty();
                    // remove class on our email element
                    that.options.$el.removeClass(that.options.errorClass);
                } else {
                    // setup error message
                    $('#parsley-id-' + that.options.parsleyID).html('<li class="parsley-custom-error-message">' + that.options.errorMessage + ' <br>Please check: ' + badEmails[0] + '</li>');
                    that.options.dfd.reject("failure");
                    // setup class on our email element
                    that.options.$el.addClass(that.options.errorClass);
                }
            }).always(function () {
                // always trun off the inidicator
                MessageBus.trigger("indicator.hide");
            });
        };

        QASEmail.prototype.processValidation = function (data) {
            // check our response
            if (data.Certainty.toLowerCase() === "verified" || data.Certainty.toLowerCase() === "unknown") {
                this.options.dfd.resolve("verified");
                // remove all the parsley elements
                $('#parsley-id-' + this.options.parsleyID).empty();
                // remove class on our email element
                this.options.$el.removeClass(this.options.errorClass);
            } else {
                // setup error message
                $('#parsley-id-' + this.options.parsleyID).html('<li class="parsley-custom-error-message">' + this.options.errorMessage + '</li>');
                this.options.dfd.reject("failure");
                // setup class on our email element
                this.options.$el.addClass(this.options.errorClass);
            }
        };

        return QASEmail;

    });

define('modalItemEditView', [
    'ModalImageView',
    'itemSizeTabView',
    'itemColorsView',
    'MessageBus',
    'api',
    'ProductColorModel',
    'ProductColorSelectCollection',
    'ProductColorSelectView',
    'ProductSKUModel',
    'ProductSKUCollection',
    'ProductInventoryModel',
    'ProductInventoryCollection',
    'emailValidator',
    'modal'
], function (ModalImageView,
             ItemSizeTabView,
             ItemColorsView,
             MessageBus,
             API,
             ProductColorModel,
             ProductColorSelectCollection,
             ProductColorSelectView,
             ProductSKUModel,
             ProductSKUCollection,
             ProductInventoryModel,
             ProductInventoryCollection,
             EmailValidator) {

    'use strict';

    var ModalItemEditView = Backbone.View.extend({

        //'className' : 'ct-cart-item grid asc-item',

        'events': {
            'click #mar-update-cart': 'updateCart'
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;
            this.options = options || {};

            this.bindEvents();

            //get correct template based on Product Type
            var productType = this.options.model.get('productType'),
                $modalTemplate;
            this.setupCollections();

            //egiftcard
            if (productType.match(/egiftcard/i)) {
                this.options.egift = true;
                $modalTemplate = $('#modal-edit-egift-template');
                if ($modalTemplate.length > 0) {
                    this.getData($modalTemplate);
                    this.actionType = this.options.actions.editEGiftCard;
                    // setup our email validators
                    this.options.userEmailValidator = new EmailValidator();
                    this.options.recipentEmailValidator = new EmailValidator();
                } else {
                    console.log('Error: modal egift template not found');
                }
            } else if (productType.match(/giftcard/i)) {
                //giftcard
                $modalTemplate = $('#modal-edit-gift-template');
                if ($modalTemplate.length > 0) {
                    this.getData($modalTemplate);
                    this.actionType = this.options.actions.editGiftCard;
                } else {
                    console.log('Error: modal gift template not found');
                }
            } else {
                //any other product type (clothing, jewelry, etc)
                $modalTemplate = $('#modal-edit-item-template');

                if ($modalTemplate.length > 0) {
                    this.getData($modalTemplate);
                    this.actionType = this.options.actions.editItem;
                } else {
                    console.log('Error: modal item template not found');
                }
            }

        },
        'setupCollections': function () {
            this.productColorCollection = new ProductColorSelectCollection();
            this.productSKUCollection = new ProductSKUCollection();
            this.productInventoryCollection = new ProductInventoryCollection();
            this.productImageModel = new Backbone.Model();
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function (jsonData) {

            var dataObj = jsonData.product[0],
                selectedSKU = _.where(dataObj.skus, {sku_id: dataObj.skuId.toString()}),
                selectedColor;

            //if there is a default color, set it to that. otherwise set it to the first color in the array
            if (dataObj.default_color) {
                selectedColor = dataObj.default_color;
            } else {
                selectedColor = dataObj.all_available_colors.values[0].id;
            }

            if (selectedSKU.length) {
                selectedColor = selectedSKU[0].color;
            }


            // add labels object
            jsonData.labels = this.options.cart.configText.cartItem.labels;

            this.$el.append(this.template(jsonData));
            this.options.$parent.append(this.$el);

            // instantiate all the plugins that we need
            this.$el.find('.mar-item-qty').numberInput();

            this.$form = this.$el.find('#edit-item-form').parsley();

            // init the view that we need
            /*this.tabView = new ItemSizeTabView({
             'el' : this.$el.find('.asc-select-tabs')[0]
             });*/
            /* init our colors view
             this.colorsView = new ItemColorsView({
             'el' : this.$el.find('.acs-select-colors')[0]
             });*/

            this.productColorView = new ProductColorSelectView({
                '$parent': this.$el.find('.mar-filter-color'),
                '$colorContainer': this.$el.find('.mar-pdp-color-container'),
                'collection': this.productColorCollection,
                'skuCollection': this.productSKUCollection,
                'inventoryCollection': this.productInventoryCollection,
                'productID': this.options.model.get('productId')
            });

            // Product Image View
            this.modalImageView = new ModalImageView({
                el: this.$el.find('figure'),
                model: this.productImageModel
            });

            // init picture fill again
            window.picturefill();
            if (typeof $.fn.lazyload !== "undefined") {
                $("img.lazy-load").lazyload({
                    skip_invisible: false,
                    threshold: 200,
                    failure_limit: 15
                });
            }
            if (selectedColor) {
                this.$el.find('.mar-pdp-color-container input[value="' + selectedColor + '"]').trigger('click');
            }


            this.validateGiftAmt(this.$el);

            return this;
        },

        /**
         * Request data to populate Modal Template
         * @return {[type]} [description]
         */
        'getData': function ($template) {
            var that = this;
            this.template = _.template($template.html());

            // trigger JSON fetch
            var skusFetch = $.ajax({
                "url": API.endpoints.PDPgetProduct,
                "dataType": "json",
                "type": "post",
                "data": {
                    'Action': 'Cart.fetchEditCartItem',
                    'productId': that.options.model.get('productId'),
                    'quantity': that.options.model.get('quantity'),
                    'skuId': that.options.model.get('skuId')
                }
            }).done(function () {
                MessageBus.trigger('Modal.openMobileModal');
            });


            var inventoryFetch = $.ajax({
                "url": API.endpoints.QVgetInventory,
                "dataType": "json",
                "type": "post",
                "data": {
                    'Action': 'QuickView.getInventory',
                    'id': that.options.model.get('productId')
                }
            });


            $.when(skusFetch, inventoryFetch).done(function (jsonData, inventoryData) {
                // quick hack, with when/done data is wrapped in deferred object
                jsonData = jsonData[0];
                inventoryData = inventoryData[0];

                // populate template
                if (that.options.cart.cartType !== null) {
                    jsonData.product[0].cartType = that.options.cart.options.cartPageType;
                }
                /*jsonData.product[0].skuId = that.options.model.get('skuId');
                 jsonData.product[0].id = that.options.model.get('id');
                 jsonData.product[0].associatedId = that.options.model.get('associatedId');
                 jsonData.product[0].associatedSkuId = that.options.model.get('associatedItem').skuId;
                 jsonData.product[0].quantity = that.options.model.get('quantity');
                 jsonData.product[0].cardAmt = that.options.model.get('unitPrice');
                 jsonData.product[0].recipientName = that.options.model.get('recipientName');
                 jsonData.product[0].recipientEmail = that.options.model.get('recipientEmail');
                 jsonData.product[0].recipientEmail2 = that.options.model.get('recipientEmail2');
                 jsonData.product[0].senderName = that.options.model.get('senderName');
                 jsonData.product[0].senderEmail = that.options.model.get('senderEmail');
                 jsonData.product[0].msg = that.options.model.get('msg');
                 */
                that.productColorCollection.reset(jsonData.product[0].all_available_colors);
                that.productSKUCollection.reset(jsonData.product[0].skus);

                that.productInventoryCollection.reset(inventoryData.inventory.products[jsonData.product[0].product_id].skus);
                // Set the Default Image in Model
                that.productImageModel.set({
                    product_name: jsonData.product[0].all_available_colors[0].values[0].name,
                    baseURL: jsonData.product[0].scene7_params.server_url + "/" + jsonData.product[0].scene7_params.account_id + "/",
                    imgURL: jsonData.product[0].all_available_colors[0].values[0].imageset,
                    imageALTText: jsonData.product[0].all_available_colors[0].values[0].name
                });

                jsonData.product[0].skuId = that.options.model.get('skuId');
                jsonData.product[0].id = that.options.model.get('id');
                jsonData.product[0].associatedId = that.options.model.get('associatedId');
                jsonData.product[0].associatedSkuId = that.options.model.get('associatedItem').skuId || 0;
                jsonData.product[0].quantity = that.options.model.get('quantity');
                jsonData.product[0].maxQuantity = that.options.model.get('maxQuantity');
                jsonData.product[0].cardAmt = that.options.model.get('totalPrice');
                jsonData.product[0].recipientName = that.options.model.get('recipientName');
                jsonData.product[0].recipientEmail = that.options.model.get('recipientEmail');
                jsonData.product[0].recipientEmail2 = that.options.model.get('recipientEmail2');
                jsonData.product[0].senderName = that.options.model.get('senderName');
                jsonData.product[0].senderEmail = that.options.model.get('senderEmail');
                jsonData.product[0].msg = that.options.model.get('msg');

                that.render(jsonData);
                MessageBus.trigger('Modal.openMobileModal', $('.edit-gift-modal').find('.modal-content'));
            });

        },
        'validateGiftAmt': function ($el) {

            var $elm = $el.find("#pdp-gift-amt");
            $elm.on('keypress', function (e) {
                var key = parseInt(e.keyCode ? e.keyCode : e.which);
                if (!( ( key >= 48 && key <= 57 ) || key === 8)) {
                    return false;
                }
            });
        },

        'updateOptions': function () {
            // stop form from submitting
            e.preventDefault();

        },
        'updateCart': function (e) {
            var $inputs = this.$el.find('input'),
                inputLength = $inputs.length,
                that = this;

            // stop form from submitting
            e.preventDefault();

            if (this.$form.validate()) {
                this.showMandatoryError(false);
                // check if this is a egift card so that we can validate email
                if (this.options.egift === true) {
                    // validate our email
                    this.options.dfdRecipient = this.options.recipentEmailValidator.validate(this.$form.$element.find('#recipientEmail'));
                    this.options.dfdSender = this.options.userEmailValidator.validate(this.$form.$element.find('#senderEmail'));

                    $.when(this.options.dfdRecipient, this.options.dfdSender).then(function (recipientEmail, userEmail) {
                        MessageBus.trigger('updateCart.EditItemView', that.$el.find('#edit-item-form').serialize(), that.actionType);
                    });
                } else {
                    // send a message bus with data to cartApp
                    MessageBus.trigger('updateCart.EditItemView', this.$el.find('#edit-item-form').serialize(), this.actionType);
                }

            } else {
                // modified infinite loop counter to the right length
                for (var i = 0; i < inputLength; i++) {
                    var $current = $($inputs.get(i));
                    if ($current.val() && $current.val().length === 0) {
                        this.showMandatoryError(true);
                        break;
                    }
                }
            }
        },
        'showMandatoryError': function (showError) {
            var $error = this.$el.find('.asc-mandatory-fields');

            if (showError) {
                $error.addClass('show');
            } else {
                $error.removeClass('show');
            }
        },
        'bindEvents': function () {

            var that = this,
                colorModels,
                selectedSKU;

            MessageBus.on('ProductColorView.updateSelectedColor-' + this.options.prefixID, function (color, productId, id, background, mediaAssets, prefix_id, imageset) {

                if (!colorModels) {
                    colorModels = that.productColorCollection.models[0].attributes.values;
                }

                var result = $.grep(colorModels, function (o) {
                    return id === o.id;
                });

                that.productImageModel.set({
                    product_name: result[0].name,
                    imgURL: imageset,
                    imageALTText: result[0].name
                });
            });

            MessageBus.on('ProductColorView.updateSelectedColor-' + this.options.prefixID, function (color, productId, id, background, mediaAssets, prefix_id, imageset) {
                _.each(that.productSKUCollection.models, function (sku) {
                    if (id === sku.get('color')) {
                        selectedSKU = sku.get('sku_id');
                    }
                });
                $("input[name='cardSkuId']").val(selectedSKU);
            });
        }

    });
    return ModalItemEditView;
});

define('itemCartDetailView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var ItemCartDetailView = Backbone.View.extend({

        'events': {
            // 'click .asc-favorites-btn' : 'moveToFavorites'
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;
            this.options = options || {};

            this.itemClasses = {
                "giftcard": {
                    "edit": {
                        "modalClass": "edit-gift-modal",
                        "modalTarget": ".asc-edit-gift"
                    }
                },
                "egiftcard": {
                    "edit": {
                        "modalClass": "edit-egift-modal",
                        "modalTarget": ".asc-edit-egift",
                    }
                },
                "freegift": {
                    "edit": {
                        "modalClass": "edit-item-modal"
                    }
                },
                "defaultItem": {
                    "edit": {
                        "modalClass": "edit-item-modal"
                    }
                }
            };

            if ($('#cart-item-actions-template').length > 0) {

                if (this.options.$parent.hasClass('db-cart-free-gift-actions-container')) {
                    this.template = _.template($('#cart-item-freegift-actions-template').html());
                } else {
                    this.template = _.template($('#cart-item-actions-template').html());
                }

                this.render();
            }
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this;
            this.options.model.set({'labels': this.options.labels});
            this.$el.append(this.template(this.options.model.attributes));
            this.options.$parent.append(this.$el);

            this.appendClasses();


        },
        /**
         * Append classes
         * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
         * @returns Describe what it returns
         * @type String|Object|Array|Boolean|Number
         */

        'appendClasses': function () {
            switch (this.options.model.get("productType")) {
                case "giftcard":
                {
                    this.$el.find(".asc-edit-btn").attr("data-modalclass", this.itemClasses.giftcard.edit.modalClass);
                    this.$el.find(".asc-edit-btn").attr("data-modaltarget", this.itemClasses.giftcard.edit.modalTarget);
                    this.$el.find(".asc-favorites-btn").detach();
                    break;
                }
                case "egiftcard":
                {
                    this.$el.find(".asc-edit-btn").attr("data-modalclass", this.itemClasses.egiftcard.edit.modalClass);
                    this.$el.find(".asc-edit-btn").attr("data-modaltarget", this.itemClasses.egiftcard.edit.modalTarget);
                    this.$el.find(".asc-favorites-btn").detach();
                    break;
                }
                case "freegift":
                {
                    this.$el.find(".asc-edit-btn").attr("data-modalclass", this.itemClasses.freegift.edit.modalClass);
                    this.$el.find(".asc-favorites-btn").detach();
                    break;
                }
                default:
                {
                    //this.$el.find(".asc-edit-btn").attr("data-modalclass", this.itemClasses.defaultItem.edit.modalClass);
                }
            }

            this.$el.find('.asc-remove-btn').modal();

            this.$el.find('.asc-edit-btn').modal();

            this.$el.find('.mar-aos-price-adjustment-view').modal();
        },
        'moveToFavorites': function (e) {
            //move to favorites btn in cart view will serve a different functionality on favorites page.
            //call 'move to cart' in cartApp if we're on favorites page - otherwise call 'move to favorites'
            if (this.options.cart.options.cartPageType === 'favorites') {
                MessageBus.trigger('moveItemToCart.MyFavoritesItemView', this.model.get('id'));
            } else {
                MessageBus.trigger('moveItemToFavorites.ItemView', this.model.get('id'));
            }
            // chain this with another event
            //this.removeItem(e);
        }
    });
    return ItemCartDetailView;
});

define('itemOrderDetailView', [
    'MessageBus',
    'api'
], function (MessageBus,
             API) {

    'use strict';

    var ItemOrderDetailView = Backbone.View.extend({
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'tagName': 'li',

        'initialize': function (options) {
            var that = this;
            this.options = options || {};

            if ($('#cart-order-status-template').length > 0) {
                this.template = _.template($('#cart-order-status-template').html());
                // JU | JIRA ART-8866
                this.options.model.productType = this.options.productType;
                this.render();
            }
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this;

            this.options.model.labels = this.options.labels;

            if (this.options.isReturn === true) {
                this.options.model.itemStatus = this.options.model.returnStatus;
                this.options.model.labels.itemStatus = this.options.model.labels.returnStatus;
            } else {
                this.options.model.itemStatus = this.options.model.shippingStatus;
                this.options.model.labels.itemStatus = this.options.model.labels.shippingStatus;
            }

            this.$el.append(this.template(this.options.model));
            this.options.$parent.append(this.$el);

            if ($('#cart-item-order-detail-action-template').length > 0 && this.options.isReturn === false) {
                this.$orderTemplate = _.template($('#cart-item-order-detail-action-template').html());
                //ART-6924,8390
                this.options.model.realm = API.endpoints.realm;

                this.$actions = this.$orderTemplate(this.options.model);
                this.options.$container.find('.mar-cart-actions-container').append(this.$actions);
            }
        }

    });
    return ItemOrderDetailView;
});
define('modalItemRemoveView', [
    'MessageBus',
    'api',
    'modal'
], function (MessageBus,
             API) {

    'use strict';

    var ModalItemRemoveView = Backbone.View.extend({

        'events': {
            //'click .asc-remove-conf-btn' : 'removeItem'
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;
            this.options = options || {};

            //get correct template based on Product Type

            var productType = this.options.model.get('productType'),
                $modelTemplate;

            $modelTemplate = $("#modal-remove-confirmation");

            if ($modelTemplate.length > 0) {
                this.getData($modelTemplate);
            } else {
                console.log('Error: modal remove item template not found');
            }

        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function (jsonData) {
            // add labels object
            //
            //console.log(jsonData);

            console.log(jsonData.attributes);
            this.$el.append(this.template(jsonData.attributes));
            this.options.$parent.append(this.$el);

            window.picturefill();
            if (typeof $.fn.lazyload !== "undefined") {
                $("img.lazy-load").lazyload({
                    skip_invisible: false,
                    threshold: 200,
                    failure_limit: 15
                });
            }
            return this;
        },

        'getData': function ($template) {
            var that = this;

            this.template = _.template($template.html());

            //console.log($template);

            that.render(that.options.model);
        }

    });
    return ModalItemRemoveView;
});

define('itemView', [
    'MessageBus',
    'modalItemEditView',
    'itemCartDetailView',
    'itemOrderDetailView',
    'modalItemRemoveView',
    'api',
    'modal'
], function (MessageBus,
             ModalItemEditView,
             ItemCartDetailView,
             ItemOrderDetailView,
             ModalItemRemoveView,
             API) {

    'use strict';

    var ItemView = Backbone.View.extend({

        'events': {
            'change .mar-item-qty': 'updateQuantity',
            'keypress .mar-item-qty': 'validateQuantity',
            'click .asc-pop-message-close': 'closePopMessage',
            'click .asc-favorites-btn': 'moveToFavorites'
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this,
                itemType = '',
                orderDetailInfo = 0; // is there orderDetail info or not
            this.options = options || {};
            // check which template to load


            itemType = this.model.get('productType');
            if (itemType === 'giftcard') {
                if ($('#cart-gift-template').length > 0) {
                    this.template = _.template($('#cart-gift-template').html());
                    this.render();
                }
            } else if (itemType === 'egiftcard') {
                if ($('#cart-egift-template').length > 0) {
                    this.template = _.template($('#cart-egift-template').html());
                    this.render();
                }
            } else if (itemType === 'freegift') {
                if ($('#cart-freegift-template').length > 0) {
                    this.template = _.template($('#cart-freegift-template').html());
                    this.render();

                    // Call modal method for the 'Select different gift' button
                    this.$el.find('.mar-modal-trigger').modal();
                }
            } else {
                if ($('#cart-item-template').length > 0) {
                    this.template = _.template($('#cart-item-template').html());
                    this.render();
                }
            }
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this,
                orderDetailInfo = false;

            if (this.model.get('orderDetails') && this.model.get('orderDetails').shippingStatus.length > 0) {
                orderDetailInfo = true;
            }

            if (this.options.enableQty !== false) {
                // instantiate all the plugins that we need
                this.$el.find('.mar-item-qty').numberInput({
                    'pdpMsgs': this.options.pdpMsgs,
                    'pdpMsgsEl': this.$el.find('.mar-item-qty').parent().parent().find(".mar-inventory-msg"),
                    'productID': this.model.get('id'),
                    'MessageBus': MessageBus,
                    'cartFlag': true
                });
            }

            this.model.set({'labels': this.options.cart.configText.cartItem.labels});
            this.$el.append(this.template(this.model.attributes));
            this.options.$parent.append(this.$el);

            //active number input plugin
            if (!orderDetailInfo) {

                if (this.options.enableQty !== false) {
                    this.$el.find('.mar-item-qty').numberInput({
                        'pdpMsgs': this.options.pdpMsgs,
                        'pdpMsgsEl': this.$el.find('.mar-item-qty').parent().parent().find(".mar-inventory-msg"),
                        'productID': this.model.get('id'),
                        'MessageBus': MessageBus,
                        'cartFlag': true
                    });
                }

                if (this.options.cart.options.cartPageType === 'favorites') {
                    this.$el.find('.mar-quantity').empty();
                    this.$el.find('.mar-quantity').html("&nbsp;");
                    this.$el.find('.mar-cart-discount').empty();
                }

                // edit item
                MessageBus.on('editItem.modal.' + this.model.get('id'), function (context) {
                    // setup a new view that will fetch JSON data and load what it needs
                    that.modalEditView = new ModalItemEditView({
                        '$parent': context,
                        'model': that.model,
                        'cart': that.options.cart,
                        'actions': that.options.actions
                    });
                });

                // remove item
                MessageBus.on('removeItem.modal.' + this.model.get('id'), function (context) {
                    //setup a new view
                    that.modalRemoveView = new ModalItemRemoveView({
                        '$parent': context,
                        'model': that.model,
                        'cart': that.options.cart
                    });
                });

            }

            //if this item has order details attached
            if (orderDetailInfo === true) {
                var itemOrderDetailView = new ItemOrderDetailView({
                    'model': this.model.get('orderDetails'),
                    '$container': that.$el,
                    '$parent': that.$el.find('.mar-cart-order-status'),
                    'cart': that.options.cart,
                    'isReturn': that.options.isReturn,
                    'labels': this.options.cart.configText.cartItem.labels,
                    // JU | JIRA ART-8866
                    'productType': this.model.get('productType')
                });

                //if this item has no order details (if it is a cart item)
            } else {
                var itemCartDetailView = new ItemCartDetailView({
                    'model': this.model,
                    '$container': that.$el,
                    '$parent': that.$el.find('.mar-cart-actions-container'),
                    'cart': that.options.cart,
                    'labels': this.options.cart.configText.cartItem.labels
                });

                this.$el.find('.asc-edit-btn').modal();
            }
            return this;
        },
        'updateQuantity': function (e) {

            //We don't need this DOM manipulation now.
            var newQuantity = parseInt($(e.currentTarget).val(), 10);
            /*var newQuantity = parseInt($(e.currentTarget).val(), 10),
             updatedTotal = (this.model.get('unitPrice') * newQuantity).toFixed(2),
             updatedSaved = (this.model.get('promoAppliedAmount') * newQuantity).toFixed(2),
             dollar = '$';

             // update own price
             if (this.options.cart.options.superPrice === true){
             dollar = '<sup>$</sup>';
             }

             // update UI
             this.$el.find('.asc-item-total-price').html(dollar + updatedTotal);
             this.$el.find('.asc-item-total-saved').html('('+dollar + updatedSaved+')');*/

            MessageBus.trigger('itemQuantityUpdated.ItemView', this.model.get('id'), newQuantity);

        },
        'validateQuantity': function (e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if (!( !isNaN(String.fromCharCode(key)) || key == 8 || key == 46 || key == 39 || key == 37))
                return false;
        },
        'moveToFavorites': function (e) {
            var that = this,
                fav = API.getFavorites();
            $.when(fav).then(function (data) {
                that.favObj = data;
                //console.log("threshold crossed", that.favObj.favorites.threshold_crossed);
            });
            //move to favorites btn in cart view will serve a different functionality on favorites page.
            //call 'move to cart' in cartApp if we're on favorites page - otherwise call 'move to favorites'
            if (this.options.cart.options.cartPageType === 'favorites') {
                MessageBus.trigger('moveItemToCart.MyFavoritesItemView', this.model.get('id'));
            }
            else {
                if (that.favObj.favorites.threshold_crossed !== "true") {
                    MessageBus.trigger('moveItemToFavorites.ItemView', this.model.get('id'));
                }
                else {
                    MessageBus.trigger('errorModal.openModal', that.favObj.favorites.Action_status.error_message, that.favObj.favorites.Sign_In_Msg);
                }
            }
        },
        'removeItem': function (e) {
            var that = this;
            e.preventDefault();
            MessageBus.trigger('itemRemoved.ItemView', this.model.get('id'));
            // animate removal
            return this.$el.slideUp(280);
            //function() { that.removeAfterAnimate(); }
        },
        'returnItem': function () {
            this.$el.slideDown(100);
        },
        'cleanView': function () {
            this.removeAfterAnimate();
        },
        'removeAfterAnimate': function () {
            // turn off messagebus events because do not go away when element is removed
            MessageBus.off('removeItem.modal.' + this.model.get('id'));
            MessageBus.off('editItem.modal.' + this.model.get('id'));
            this.undelegateEvents();
            this.unbind();
            this.remove();
        },
        'animateIn': function () {
            this.$el.hide().slideDown(280);
        },
        'closePopMessage': function (e) {
            e.preventDefault();
            this.$el.find('.asc-item-adjustment-popup').hide();
        }

    });
    return ItemView;
});

define('itemsView', [
    'MessageBus',
    'itemView'
], function (MessageBus,
             ItemView) {

    'use strict';

    var ItemsView = Backbone.View.extend({

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;

            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};
            this.itemViews = [];
            that.dataPromise = new $.Deferred();
            this.itemIsAnimating = false;
            this.render();
            // listen to a reset to update
            this.listenTo(this.collection, 'reset', function () {
                if (that.itemIsAnimating === true) {
                    that.itemIsAnimating = false;
                    that.dataPromise.resolve();
                } else {
                    that.render();
                }
            });
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this;

            this.cleanView();
            // check if our cart is empty
            if (this.collection.length > 0) {
                // get our cart views updated
                _.each(this.options.collection.models, function (model) {
                    var isReturn = false,
                        $itemParent = that.$el;

                    if (model.get("orderDetails") && model.get("orderDetails").returned === true) {
                        $itemParent = that.options.$returnedEl;
                        isReturn = true;
                    }

                    var $favPage = $("#cmn-account-favorites");
                    if ($favPage[0]) {
                        $itemParent = $itemParent.find(".fav-wrap");
                    }
                    var itemView = new ItemView({
                        'model': model,
                        '$parent': $itemParent,
                        'cart': that.options.cart,
                        'isReturn': isReturn,
                        'actions': that.options.actions,
                        'pdpMsgEl': that.options.pdpMsgEl,
                        'pdpMsgs': that.options.pdpMsgs
                    });

                    // remove element
                    MessageBus.on('removeItem.modal.' + model.get('id'), function (context) {
                        context.on('click', '.asc-remove-conf-btn', function (e) {
                            var animatingItem = {};
                            // trigger an event to close the modal
                            context.off('click');
                            //MessageBus.trigger('modal.close');
                            animatingItem = itemView.removeItem(e);

                            that.itemIsAnimating = true;
                            // setup our promise listener
                            $.when(animatingItem.promise(), that.dataPromise.promise())
                                .then(function () {
                                    // itemView.cleanView();
                                    that.render();
                                    that.dataPromise = new $.Deferred();
                                    //console.log("opt", that.options.cart.options.cartPageType);
                                    if (that.options.cart.options.cartPageType === "favorites") {
                                        MessageBus.trigger('Cart.onOrderSummaryRepaint');
                                    } else {
                                        MessageBus.trigger('removeFromMinicart');
                                    }
                                }, function () {
                                    itemView.returnItem();
                                });

                            MessageBus.on('favorites.nowCloseRemoveModal', function () {
                                MessageBus.trigger('modal.close');
                            });
                        });
                        context.on('click', '.asc-remove-cancel', function (e) {
                            MessageBus.trigger('modal.close');
                        });
                    });
                    //


                    that.itemViews.push(itemView);
                });
                if (window.picturefill) {
                    window.picturefill();
                }
                if (typeof $.fn.lazyload !== "undefined") {
                    $("img.lazy-load").lazyload({
                        skip_invisible: false,
                        threshold: 200,
                        failure_limit: 15
                    });
                }
                $(that.options.el).find('.mar-modal-trigger').modal();
            } else {
                var headerView = this.options.cart.headerCartView, msg = "";

                if (headerView) {
                    if (headerView.countFormat === 'parentheses') {
                        msg = '(0)';
                    } else if (headerView.countFormat === 'items') {
                        msg = '0 items';
                    }

                    headerView.numberTarget.html(msg);
                }
            }
        },
        'addItem': function (model) {
            var itemView = new ItemView({
                'model': model,
                '$parent': this.$el,
                'cart': this.options.cart
            });
            this.itemViews.push(itemView);
            itemView.animateIn();

            if (window.picturefill) {
                window.picturefill();
            }
            if (typeof $.fn.lazyload !== "undefined") {
                $("img.lazy-load").lazyload({
                    skip_invisible: false,
                    threshold: 200,
                    failure_limit: 15
                });
            }
        },
        'failPromise': function () {
            this.dataPromise.reject();
        },
        'cleanView': function () {
            // handle other unbinding needs, here
            _.each(this.itemViews, function (childView) {
                if (childView.cleanView) {
                    childView.cleanView();
                }
            });
            this.itemViews = [];
            //this.remove();
            //this.unbind();
        }

    });

    return ItemsView;
});

define('orderSummaryModel', [], function () {
    'use strict';

    var OrderSummaryModel = Backbone.Model.extend({

        'defaults': {
            "shipping": [
                {
                    "id": 1,
                    "name": "Ship to Home",
                    "price": "3.56",
                    "estArrival": "Jun 5-8",
                    "selected": true,
                    "richPrice": ''
                },
                {
                    "id": 2,
                    "name": "Ship to Store",
                    "price": "FREE",
                    "estArrival": "Jun 5",
                    "selected": false,
                    "richPrice": ''
                }
            ],
            "savings": [],
            "totalPreSvng": 0,
            "totalSavings": 0,
            "estmShipping": 0,
            "totalPostSvng": 0,
            "returnPolicy": "url/to/return/policy",
            "secureCheckoutLink": "url/to/checkout",
            "payPalLink": "url/to/paypal",
            "brandLoyalty": {
                "points": 0,
                "coupons": 0
            },
            "numberOfItems": 5,
            "payment": {
                "giftCard": [],
                "taxes": 0,
                "giftWrap": 0
            },
            "labels": {}
        },


        /**
         @function
         @description Fires after every instance intialization.
         */
        'initialize': function () {
            // set save value
            this.normalizePrice();
        },
        'normalizePrice': function () {
            var that = this,
                shippingArray = this.get('shipping');
            _.each(shippingArray, function (item) {
                if (item.price.toLowerCase().indexOf('free') === -1) {
                    item.richPrice = item.price;
                } else {
                    item.richPrice = item.price;
                }
            });
        }

    });

    // make it available
    return OrderSummaryModel;
});

define('orderSummaryCollection', [
    'orderSummaryModel'
], function (OrderSummaryModel) {
    'use strict';
    var OrderSummaryCollection = Backbone.Collection.extend({
        'model': OrderSummaryModel
    });
    return OrderSummaryCollection;
});

define('discountItemView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var DiscountItemView = Backbone.View.extend({
        'tagName': 'li',
        'events': {
            'click button': 'removeItem'
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};
            // make sure our template exists because it will error badly
            if ($('#discount-item-template').length > 0) {
                this.template = _.template($('#discount-item-template').html());
                this.render();
            }
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            this.$el.append(this.template(this.model.attributes));
            this.options.$parent.append(this.$el);

            if (this.options.summaryType === 'checkoutReview') {
                this.$el.find("button").remove();
            }
        },
        'removeItem': function (e) {
            var that = this,
                modelCid = that.model.get('id');

            MessageBus.trigger('discountRemoved.OrderSummary', modelCid);

            return this.$el.slideUp(180);
        },
        'cleanView': function () {
            this.removeAfterAnimate();
        },
        'returnItem': function () {
            this.$el.slideDown(180);
        },
        'removeAfterAnimate': function () {
            // turn off messagebus events because do not go away when element is removed
            this.undelegateEvents();
            this.unbind();
            this.remove();
        }
    });

    return DiscountItemView;
});
define('discountsView', [
    'MessageBus',
    'discountItemView'
], function (MessageBus,
             DiscountItemView) {

    'use strict';

    var DiscountsView = Backbone.View.extend({

        'events': {
            'click .asc-discount-header': 'showHide'
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;

            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};
            this.open = true;
            this.discountViews = [];
            that.dataPromise = new $.Deferred();
            this.itemIsAnimating = false;

            this.render();

            this.listenTo(this.collection, 'reset', function () {
                that.render();
            });
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {

            var that = this;
            // cleanup our DOM element so that we can render information again
            this.cleanView();

            _.each(this.options.collection.models, function (model) {
                var discountItemView = new DiscountItemView({
                    'model': model,
                    '$parent': that.$el.find('.asc-discount-list'),
                    'orderSummary': that.options.orderSummary,
                    'summaryType': that.options.summaryType
                });

                that.discountViews.push(discountItemView);
            });
        },
        'showHide': function (e) {
            e.preventDefault();

            // slide up
            var header = $(e.target);

            if (this.open === true) {
                this.open = false;
                this.$el.find('.asc-discount-list').slideUp(200);
                $('.asc-discount-header').text('Show Savings');
                header.removeClass('open');
            } else {
                this.open = true;
                this.$el.find('.asc-discount-list').slideDown(180);
                $('.asc-discount-header').text('Hide Savings');
                header.addClass('open');
            }
        },
        'failPromise': function () {
            this.dataPromise.reject();
        },
        'cleanSelf': function () {
            this.cleanView();
            this.undelegateEvents();
            this.unbind();
            this.remove();
        },
        'cleanView': function () {
            // handle other unbinding needs, here
            _.each(this.discountViews, function (childView) {
                if (childView.cleanView) {
                    childView.cleanView();
                }
            });
            this.discountViews = [];
        }

    });

    return DiscountsView;
});

define('orderSummaryView', [
    'MessageBus',
    'discountsView'
], function (MessageBus,
             DiscountsView) {
    'use strict';

    var OrderSummaryView = Backbone.View.extend({

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'events': {
            'change input[type="radio"]': 'updateShipping'
        },

        'initialize': function (options) {
            var that = this;
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};
            // this option is a little more involved and probably slower
            // _.extend(this, _.pick(options, "cart"));
            // setup nested views

            if ($('#order-summary-template').length > 0) {
                this.template = _.template($('#order-summary-template').html());
                this.render();
                this.setupViews();
                this.delegateEvents();


                if (this.options.summaryType === 'error') {
                    this.$el.addClass("db-cart-summary-error");
                } else {
                    this.$el.addClass("db-cart-summary-initial");
                }

                // setup our event
                this.listenTo(this.collection, 'reset', function () {
                    that.render();
                    that.setupViews();
                    that.delegateEvents();
                    MessageBus.trigger('Cart.onOrderSummaryRepaint');
                });
            }
        },

        'setupViews': function () {
            // instantiate discount view
            if (this.discountsView) {
                this.discountsView.cleanSelf();
            }

            if (this.options.discountsCollection !== undefined) {

                if (this.collection.length > 0) {
                    this.discountsView = new DiscountsView({
                        'el': $('.asc-discounts-view'),
                        'collection': this.options.discountsCollection,
                        'orderSummary': this.collection.models[0].attributes.discounts,
                        'summaryType': this.options.summaryType
                    });
                }
            }
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this,
                total = 0,
                strTotal = '',
                arrTotal = [],
                totalDiscounts = 0;

            if (this.collection.length > 0) {
                // set our labels from the configText

                var disablePaypal = _.findWhere(this.collection.models[0].attributes.shipping, {
                    'name': 'SHIPTOSTORE',
                    'selected': true
                });

                this.collection.models[0].set({'labels': this.options.labels.orderSummary.labels});
                if (this.options.hazmat) {
                    this.collection.models[0].set({'hazmat': this.options.hazmat.hazmatStateMap});
                }
                // set couponPresent attribute to true or false based on availablity of couponid
                for (var i = 0; i < this.collection.models[0].attributes.savings.length; i++) {
                    if (this.collection.models[0].attributes.savings[i].CouponId) {
                        this.collection.models[0].set({'couponPresent': true});
                        break;
                    }
                }
                console.log("kkkkk-----", this.collection.models[0]);
                this.$el.empty().append(this.template(this.collection.models[0].attributes));

                var $savings = this.$el.find('.asc-show-savings');
                this.$el.find('.asc-order-show-savings').click(function (e) {
                    e.preventDefault();
                    $savings.toggleClass('cmn-order-hide-saving');
                    if ($savings.hasClass('cmn-order-hide-saving')) {
                        $('.asc-order-show-savings').text('Show Savings');
                    } else {
                        $('.asc-order-show-savings').text('Hide Savings');
                    }
                });

                this.toggleSummaryInfo(this.options.summaryType);
                $('.mar-tooltip-trigger').tooltip();
                if (typeof disablePaypal != 'undefined') {
                    $('body').find('.mar-paypal').attr({'disabled': true}).addClass('paypal-disabled');
                    $('body').find('.paypal-disable-msg-style').removeClass('paypal-disable-msg');
                }
            }
        },
        'toggleSummaryInfo': function (summaryType) {
            if (summaryType === 'error' || summaryType === 'checkout' || summaryType === 'checkoutReview') {
                $(".asc-cart-shipping").hide();
                $(".asc-cart-shipping").empty();
                $(".db-estimated-sales-tax").hide();
            } else {
                $(".db-order-summary-taxes").hide();
                $(".db-order-summary-gift-wrap").hide();
                $(".db-order-summary-gift-card").hide();
                $(".db-order-summary-items-num").hide();
            }

            if (summaryType === 'checkoutReview') {
                $(".db-order-summary-checkout").empty();
            }
        },
        'updateShipping': function (e) {
            var message = {
                'shipType': $(e.target).attr('data-shiptype')
            };
            MessageBus.trigger("shippingChanged.OrderSummary", message);
        }

    });

    return OrderSummaryView;
});

define('discountModel', [], function () {
    'use strict';

    var DiscountModel = Backbone.Model.extend({

        'defaults': {
            "id": 0,
            "message": "",
            "value": "",
            "isEmployeeDiscount": false
        },


        /**
         @function
         @description Fires after every instance intialization.
         */
        'initialize': function () {
            // set save value

        }

    });

    // make it available
    return DiscountModel;
});
define('discountsCollection', [
    'discountModel'
], function (DiscountModel) {
    'use strict';
    var DiscountsCollection = Backbone.Collection.extend({
        'model': DiscountModel
    });
    return DiscountsCollection;
});

define('itemViewReturn', [
    'MessageBus',
    'modalItemEditView',
    'itemCartDetailView',
    'itemOrderDetailView',
    'modalItemRemoveView',
    'modal'
], function (MessageBus,
             ModalItemEditView,
             ItemCartDetailView,
             ItemOrderDetailView,
             ModalItemRemoveView) {

    'use strict';

    var ItemViewReturn = Backbone.View.extend({

        'events': {},
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this,
                itemType = '',
                orderDetailInfo = 0; // is there orderDetail info or not
            this.options = options || {};
            // check which template to load


            itemType = this.model.get('productType');
            if (itemType === 'giftcard') {
                if ($('#cart-gift-template').length > 0) {
                    this.template = _.template($('#cart-gift-template').html());
                    this.render();
                }
            } else if (itemType === 'egiftcard') {
                if ($('#cart-egift-template').length > 0) {
                    this.template = _.template($('#cart-egift-template').html());
                    this.render();
                }
            } else if (itemType === 'freegift') {
                if ($('#cart-freegift-template').length > 0) {
                    this.template = _.template($('#cart-freegift-template').html());
                    this.render();

                    // Call modal method for the 'Select different gift' button
                    this.$el.find('.mar-modal-trigger').modal();
                }
            } else {
                if ($('#cart-item-template').length > 0) {
                    this.template = _.template($('#cart-item-template').html());
                    this.render();
                }
            }
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this,
                orderDetailInfo = false;

            if (this.model.get('orderDetails') && this.model.get('orderDetails').shippingStatus.length > 0) {
                orderDetailInfo = true;
            }


            this.model.set({'labels': this.options.cart.configText.cartItem.labels});
            this.$el.append(this.template(this.model.attributes));
            this.options.$parent.append(this.$el);


            //if this item has order details attached
            if (orderDetailInfo === true) {
                var itemOrderDetailView = new ItemOrderDetailView({
                    'model': this.model.get('orderDetails'),
                    '$container': that.$el,
                    '$parent': that.$el.find('.mar-cart-order-status'),
                    'cart': that.options.cart,
                    'isReturn': that.options.isReturn,
                    'labels': this.options.cart.configText.cartItem.labels
                });

                //if this item has no order details (if it is a cart item)
            }
            return this;
        },
        'returnItem': function () {
            this.$el.slideDown(100);
        },
        'cleanView': function () {
            this.removeAfterAnimate();
        },
        'removeAfterAnimate': function () {
            // turn off messagebus events because do not go away when element is removed
            MessageBus.off('removeItem.modal.' + this.model.get('id'));
            MessageBus.off('editItem.modal.' + this.model.get('id'));
            this.undelegateEvents();
            this.unbind();
            this.remove();
        },
        'animateIn': function () {
            this.$el.hide().slideDown(280);
        },
        'closePopMessage': function (e) {
            e.preventDefault();
            this.$el.find('.asc-item-adjustment-popup').hide();
        }

    });
    return ItemViewReturn;
});

define('itemsViewReturn', [
    'MessageBus',
    'itemViewReturn'
], function (MessageBus,
             ItemViewReturn) {

    'use strict';

    var ItemsViewReturn = Backbone.View.extend({

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;

            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};
            this.itemViews = [];
            that.dataPromise = new $.Deferred();
            this.itemIsAnimating = false;
            this.render();
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this;

            this.cleanView();
            // check if our cart is empty
            if (this.collection.length > 0) {
                // get our cart views updated
                _.each(this.options.collection.models, function (model) {
                    var isReturn = true,
                        $itemParent = that.$el;

                    var itemView = new ItemViewReturn({
                        'model': model,
                        '$parent': $itemParent,
                        'cart': that.options.cart,
                        'isReturn': isReturn,
                        'actions': that.options.actions,
                        'pdpMsgEl': that.options.pdpMsgEl,
                        'pdpMsgs': that.options.pdpMsgs
                    });

                    that.itemViews.push(itemView);
                });

                if (window.picturefill) {
                    window.picturefill();
                }
                if (typeof $.fn.lazyload !== "undefined") {
                    $("img.lazy-load").lazyload({
                        skip_invisible: false,
                        threshold: 200,
                        failure_limit: 15
                    });
                }
                $(that.options.el).find('.mar-modal-trigger').modal();
            }
        },
        'failPromise': function () {
            this.dataPromise.reject();
        },
        'cleanView': function () {
            // handle other unbinding needs, here
            _.each(this.itemViews, function (childView) {
                if (childView.cleanView) {
                    childView.cleanView();
                }
            });
            this.itemViews = [];
            //this.remove();
            //this.unbind();
        }

    });

    return ItemsViewReturn;
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('orderDetails', [
    'MessageBus',
    'api',
    'itemsCollection',
    'itemModel',
    'itemsView',
    'orderSummaryCollection',
    'orderSummaryModel',
    'orderSummaryView',
    'discountsCollection',
    'discountModel',
    'itemsViewReturn'
], function (MessageBus,
             API,
             ItemsCollection,
             ItemModel,
             ItemsView,
             OrderSummaryCollection,
             OrderSummaryModel,
             OrderSummaryView,
             DiscountsCollection,
             DiscountModel,
             ItemsViewReturn) {

    'use strict';
    // setup some defaults that we can get later
    var _defaults = {
        'views': {
            'cartItemsView': '.asc-items',
            'cartItemView': '.asc-item',
            'returnItemsView': '.asc-items-return'
        },
        'selectors': {}

    };

    var OrderDetails = function () {
        //this.options = $.extend(true, {}, _defaults, customOptions);
    };

    /**
     * init
     * @return {[type]} [description]
     */
    OrderDetails.prototype.init = function (customOptions) {
        var that = this;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        // setup our views
        this.setupCollections();
        this.loadLabels();
        this.processEmbeddedData();
        this.setupViews();
        if (this.cartCollection.length > 0) {
            $(".cmn-order-details-items-in-order").removeClass('asc-hide-order-section');
        }

        if (this.returnItemCollection.length > 0) {
            $(".cmn-order-details-returned-items").removeClass('asc-hide-return-section');
        }
    };


    OrderDetails.prototype.setupCollections = function () {
        this.cartCollection = new ItemsCollection();
        this.workingCartCollection = new ItemsCollection();
        this.orderSummaryCollection = new OrderSummaryCollection();
        this.discountCollection = new DiscountsCollection();
        this.returnItemCollection = new ItemsCollection();
    };

    OrderDetails.prototype.loadLabels = function () {
        // this loads the label items
        this.configText = $.parseJSON($('#asc-labels').html());
    };

    OrderDetails.prototype.setupViews = function () {

        console.log("retrn item collection", this.returnItemCollection);
        this.itemsView = new ItemsView({
            'el': this.options.views.cartItemsView,
            //'$returnedEl': $('.cmn-order-details-returned-items'),
            'cart': this,
            'collection': this.cartCollection
        });

        this.itemsViewReturn = new ItemsViewReturn({
            'el': this.options.views.returnItemsView,
            'cart': this,
            'collection': this.returnItemCollection
        });


        this.orderSummaryView = new OrderSummaryView({
            'el': '.asc-cart-order-summary',
            'collection': this.orderSummaryCollection,
            'labels': this.configText,
            'summaryType': 'checkoutReview',
            'discountsCollection': this.discountCollection
        });
    };

    OrderDetails.prototype.processCartCollection = function (cartItems) {
        var that = this;

        this.workingCartCollection.reset(cartItems);
        // use our collection to create array of models that have dependecies
        var withAssociatedId = _.filter(this.workingCartCollection.models, function (cartItem) {
            return cartItem.get('associatedId');
        });
        // use that array to modify our collection
        _.each(withAssociatedId, function (model) {
            var currentAssocId = model.get('associatedId');
            // look for an element that best describes it
            var foundAssociatedModel = _.find(that.workingCartCollection.models, function (model) {
                return currentAssocId === model.get('id');
            });

            // add to collection
            model.set({'associatedItem': foundAssociatedModel.attributes});
            // remove from collection
            that.workingCartCollection.remove(foundAssociatedModel);
        });
        return this.workingCartCollection;
    };

    //get data embedded in the page
    OrderDetails.prototype.processEmbeddedData = function () {
        var OrderDetailsData = $.parseJSON($('#cart-json').html());
        this.cartCollection.reset(this.processCartCollection(OrderDetailsData.data.cartItems).toJSON());
        this.returnItemCollection.reset(this.processCartCollection(OrderDetailsData.data.returnItems).toJSON());

        this.orderSummaryCollection.reset(OrderDetailsData.data.cartSummary);
        this.discountCollection.reset(OrderDetailsData.data.cartSummary.savings);
    };

    return new OrderDetails();
});

define('loginForgetPassword', [
    'MessageBus',
    'api'
], function (MessageBus,
             API) {
    'use strict';

    var LoginForgetPassword = function () {

    };

    LoginForgetPassword.prototype.init = function () {

        MessageBus.on('resetPassword.modal', function (modalContent) {

            var forgetForm = modalContent.find('#mar-reset-password-form');

            // When this form is submitted, validate with parsley
            forgetForm.parsley().subscribe('parsley:form:validated', function (formInstance) {

                $('#mar-reset-password-form input').on("focus change blur keypress keyup click", function (e) {
                    $("p.asc-error-after-call").html("");
                });
                // Use parsley's preventDefault
                formInstance.submitEvent.preventDefault();

                // If the form validates
                if (formInstance.isValid()) {
                    MessageBus.trigger('forgetPasswordSendEvent', forgetForm);
                }
            });
        });

        MessageBus.on('forgetPasswordSendEvent', function (context) {
            var forgetEmail = context.find('.mar-forgot-password-email').val(),
                urlParams = {
                    'Action': 'AM.forgetPassowrd',
                    'recipientEmail': forgetEmail
                };

            $.ajax({
                    url: API.endpoints.forgotPassword,
                    type: 'POST',
                    data: urlParams
                })
                .done(function (res) {
                    //MessageBus.trigger('modal.close');

                    if (res.status === "success") {
                        $('.mar-request-password-reset-container')
                            .fadeOut(function () {
                                $('.mar-signup-disclaimer').text(res.data.successMessage);
                                // After the form hides, display the confirm
                                $('.mar-request-password-reset-confirm').fadeIn();
                            });
                    } else {
                        $('.asc-error-after-call').text(res.data.errorMessage);
                    }

                })
                .fail(function (jqxhr, status) {
                    console.log(status);
                });
        });

        MessageBus.on('signInSendEvent', function (context, modalBool) {

            var $signInForm = context.parents('.mar-registered-customer-form');

            //$signInForm.parsley().subscribe('parsley:form:validated', function (formInstance) {

            // Use parsley's preventDefault
            //formInstance.submitEvent.preventDefault();
            // If the form validates
            // if(formInstance.isValid()) {
            if ($signInForm.parsley().isValid() !== true) {
                if ($signInForm.find('#marSigninPassword').hasClass('parsley-error')) {
                    $signInForm.find('#marSigninPassword').val('');
                }
            } else {
                MessageBus.trigger('signInRequestEvent', $signInForm, modalBool);
            }
            //});
        });

        MessageBus.on('signInRequestEvent', function (context, modalStatus) {
            MessageBus.trigger('indicator.show');

            var userEmail = context.find('#marSigninEmail').val(),
                userPassword = context.find('#marSigninPassword').val(),
                urlParams = {
                    'Action': 'AM.signRequestFire',
                    'userEmail': userEmail,
                    'userPassword': userPassword,
                    'modalRefer': modalStatus
                };

            $.ajax({
                    'url': API.endpoints.signInRequest,
                    'type': 'POST',
                    'data': urlParams,
                    'dataType': 'json'
                })
                .done(function (res) {

                    if (res.status === "success") {
                        /*
                         * Ensighten Tracking Start:
                         * Event: customerLogin:- When user clicks on Returning Customers sign-in button on Sign-In page
                         */

                        $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {"name": "customerLogin"});

                        /*
                         * Ensighten Tracking End
                         */

                        if (res.data.successRedirectionURL) {
                            window.location.href = res.data.successRedirectionURL;
                        } else {
                            if ($("body").hasClass("secureFrame")) {
                                MessageBus.trigger("signInRequestComplete", res.data);
                            } else {
                                location.reload();
                            }
                        }
                    } else {
                        context.find('.asc-error-after-login-call').text(res.data.errorMessage);
                        var pwd = context.find('#marSigninPassword');
                        if (pwd[0]) {
                            pwd.val('');
                        }
                    }
                })
                .fail(function (jqxhr, status) {
                    console.log(status);
                })
                .always(function () {
                    MessageBus.trigger('indicator.hide');
                });
        });

        // update the cancel link
        if ($('#mar-reset-password-form').length > 0) {
            var home = API.endpoints.home;
            $('#mar-reset-password-form .mar-form-cancel a').attr("href", '../..' + home);
        }

        var $marSignUpContainer = $("#mar-reset-pass-container-wrap");
        if ($("body").hasClass("secureFrame") && $marSignUpContainer[0]) {
            MessageBus.trigger("resetPassword.modal", $marSignUpContainer);
        }
    };

    return LoginForgetPassword;

});

/***
 Usage:
 <a class="your-class-here">link
 <div class="tooltip-content">Your HTML content <em>here</em></div>
 </a>

 $('.your-class-here').tooltip();

 Custom event passes in a reference of modal content window so it will be readily available to use.


 @requirements
 jQuery, MessageBus

 */
(function ($) {
    "use strict";

    // Create the defaults once
    var pluginName = "tooltip",
        defaults = {
            'openOnInit': false,
            'target': '.tooltip-content',
            'cache': {
                'target': {}
            },
            'classNames': {
                'showTooltip': 'show'
            }
        };

    // The actual plugin constructor
    function Tooltip(element, customOptions) {

        this.element = element;
        this.options = $.extend(true, {}, defaults, customOptions);
        this.$el = $(element);
        this._name = pluginName;

        this.init();
    }

    Tooltip.prototype.init = function () {
        this.$el = $(this.element);

        // cache elements
        this.options.cache.target = this.$el.find(this.options.target);
        //this.options.cache.target

        this.attachEvents();

        if (this.options.openOnInit !== false) {
            this.openTooltip();
        }
    };

    Tooltip.prototype.attachEvents = function () {
        var that = this;

        this.$el.on('mouseenter', function (e) {
            that.openTooltip();
        }).on('mouseleave', function (e) {
            that.closeTooltip();
        });
    };
    //
    Tooltip.prototype.openTooltip = function () {

        if (window.Modernizr.pointerevents === false) {
            // if less than IE10
            // alert("99 problems but IE10 ain't one");
            // fade in/fade out

            $(this.options.cache.target).stop().fadeIn();
        }

    };

    Tooltip.prototype.closeTooltip = function () {

        if (window.Modernizr.pointerevents === false) {
            // if less than IE10
            // fade in/fade out
            $(this.options.cache.target).stop().fadeOut();

        }
    };
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations

    $.fn[pluginName] = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Tooltip(this, options));
            }
        });

        // chain jQuery functions
        return this;
    };

})(jQuery);
define("tooltip", function () {
});

define('components/sign-in/parentAuthFlow', ['api', 'MessageBus'], function (API, MessageBus) {
    'use strict';

    var _defaults = {
            iFrameSelector: '#secureAuth',
            $secureFrame: "",
            authRelm: API.endpoints.authRelm,
            srcUrl: "",
            modalWrapSelector: "#modal-holder",
            secureFrameLinkClass: "secureFrameLink",
            secureNoFrameLinkClass: "secureNoFrameLink",
            hideClass: "visuallyhidden",
            secureFrameTemplateId: "#secure-frame-template",
            activeSessionDuration: 30,
            sessionExpiryTime: 0
        },
        preserveUserState = {
            userData: "",
            state: false
        };

    var AppAuthFlow = function () {
            //Check to make sure that this mobule only works outside IFrame
            if (!$("body").hasClass("secureFrame")) {
                this.init();
                this.manageSignInLinkType();
                this.setSessionExpiryTime();
            }
        },

        buildAuthFrameUrl = function (url) {
            var authPageUrl = "";

            authPageUrl = url + "#referrerUrl=" + encodeURIComponent(document.location.href);

            return authPageUrl;
        };

    AppAuthFlow.prototype.init = function (customOptions) {
        var that = this;

        that.options = $.extend(true, {}, _defaults, customOptions || {});

        that.attachEvents();


        that.receiveMessage();
    };
    AppAuthFlow.prototype.setSessionExpiryTime = function () {
        var that = this;
        that.options.sessionExpiryTime = new Date();
        that.options.sessionExpiryTime.setMinutes(that.options.sessionExpiryTime.getMinutes() + that.options.activeSessionDuration);
    };
    AppAuthFlow.prototype.validateSessionExpiry = function () {
        var that = this,
            time = new Date();
        if (time > that.options.sessionExpiryTime) {
            window.location.href = API.endpoints.realm + "/";
        } else {
            return true;
        }
    };

    AppAuthFlow.prototype.manageSignInLinkType = function () {
        var isHttps = (window.location.protocol === "https:") ? true : false;
        if (isHttps) {
            $('a.' + this.options.secureFrameLinkClass).addClass(this.options.hideClass);
            $('a.' + this.options.secureNoFrameLinkClass).removeClass(this.options.hideClass);
        } else {
            $('a.' + this.options.secureFrameLinkClass).removeClass(this.options.hideClass);
            $('a.' + this.options.secureNoFrameLinkClass).addClass(this.options.hideClass);
        }
    };

    AppAuthFlow.prototype.createModel = function ($context) {
        var that = this;

        that.options.$secureFrame = $context.find(that.options.iFrameSelector);
        if (!that.options.$secureFrame[0]) {
            $context.html($(that.options.secureFrameTemplateId).html());
        }
    };

    AppAuthFlow.prototype.attachEvents = function () {
        var that = this;

        MessageBus.on('signinModalFiredEvent', function ($context) {

            var isSessionActive = false;
            if (window.location.protocol === "https:") {
                return false;
            }
            isSessionActive = that.validateSessionExpiry();
            if (isSessionActive) {
                that.createModel($context);
                that.options.$secureFrame = $context.find(that.options.iFrameSelector);
                if (that.options.$secureFrame[0]) {
                    that.options.srcUrl = buildAuthFrameUrl(API.endpoints.authLoginUrl);
                    that.options.$secureFrame.attr("src", that.options.srcUrl);
                }
            }
        });

        MessageBus.on('createAccountOpen.modal', function ($context) {
            var isSessionActive = false;
            if (window.location.protocol === "https:") {
                return false;
            }
            isSessionActive = that.validateSessionExpiry();
            if (isSessionActive) {
                that.createModel($context);
                that.options.$secureFrame = $context.find(that.options.iFrameSelector);
                if (that.options.$secureFrame[0] && !$("body").hasClass("secureFrame")) {
                    that.options.srcUrl = buildAuthFrameUrl(API.endpoints.authRegisterurl);
                    that.options.$secureFrame.attr("src", that.options.srcUrl);


                }
            }
        });
        MessageBus.on('redirectCreateAccountModal', function (data) {
            var isSessionActive = false;
            if (window.location.protocol === "https:") {
                return false;
            }
            isSessionActive = that.validateSessionExpiry();
            if (isSessionActive) {
                if (that.options.$secureFrame[0] && !$("body").hasClass("secureFrame")) {
                    that.options.srcUrl = buildAuthFrameUrl(API.endpoints.authRegisterurl);
                    that.options.$secureFrame.attr("src", that.options.srcUrl);
                    if (data && /^\s*$/.test(data) === false) {
                        preserveUserState.userData = data;
                        preserveUserState.state = true;
                    }
                }
            }
        });
        MessageBus.on('saveNewsLetterSignUpData', function (data) {
            if (data && /^\s*$/.test(data) === false) {
                preserveUserState.userData = data;
                preserveUserState.state = true;
            }
        });
        MessageBus.on('sendDataCreateAccountModal', function () {
            if (preserveUserState.state) {
                that.postMessage({"customAction": "autoFillRegisterForm", "data": preserveUserState.userData});
                preserveUserState.state = false;
            }
        });
        MessageBus.on('sendDataNewsLetterSignUpModal', function () {
            if (preserveUserState.state) {
                that.postMessage({"customAction": "automateNewsLetterSignUp", "data": preserveUserState.userData});
                preserveUserState.state = false;
            }
        });
        MessageBus.on('emailSignupOpen.Modal', function ($context) {
            var isSessionActive = false;
            if (window.location.protocol === "https:") {
                return false;
            }
            isSessionActive = that.validateSessionExpiry();
            if (isSessionActive) {
                that.createModel($context);
                that.options.$secureFrame = $context.find(that.options.iFrameSelector);
                if (that.options.$secureFrame[0] && !$("body").hasClass("secureFrame")) {
                    that.options.srcUrl = buildAuthFrameUrl(API.endpoints.authEmailSignUpUrl);
                    that.options.$secureFrame.attr("src", that.options.srcUrl);
                }
            }
        });

        MessageBus.on('newsLetterSignupOpen.Modal', function ($context) {
            var isSessionActive = false;
            if (window.location.protocol === "https:") {
                return false;
            }
            isSessionActive = that.validateSessionExpiry();
            if (isSessionActive) {
                that.createModel($context);
                that.options.$secureFrame = $context.find(that.options.iFrameSelector);
                if (that.options.$secureFrame[0] && !$("body").hasClass("secureFrame")) {
                    that.options.srcUrl = buildAuthFrameUrl(API.endpoints.authNewsLetterSignUpUrl);
                    that.options.$secureFrame.attr("src", that.options.srcUrl);
                }
            }
        });

        MessageBus.on("closed.modal", function (event) {
            if ($('body').find('.secure-frame').length) {
                that.postMessage({closeModalSecure: true});
            }
        });
    };

    //Common Function to listen to parent window actions
    AppAuthFlow.prototype.receiveMessage = function () {
        var that = this;
        if (typeof $.receiveMessage !== "undefined") {
            //Listen To
            $.receiveMessage(function (e) {

                console.log("AppAuthFlow---receiveMessage---", e);

                var messageObj = $.parseParams(e.data) || {};
                console.log(messageObj);

                //console.log("AppAuthFlow---receiveMessage---messageObj", messageObj);
                if (messageObj && !$.isEmptyObject(messageObj)) {
                    //Resize Iframe in Modal on page Load when inner content is loaded
                    if (messageObj.iFrameHeight && messageObj.iFrameHeight > 0 && that.options.$secureFrame[0]) {
                        //console.log("auth flow resize");
                        if (messageObj.iFrameWidth && messageObj.iFrameWidth > 0) {
                            that.options.$secureFrame.attr({
                                "height": messageObj.iFrameHeight,
                                "width": messageObj.iFrameWidth
                            });
                        } else {
                            that.options.$secureFrame.attr("height", messageObj.iFrameHeight);
                        }

                        if (messageObj.modalClass && /^\s*$/.test(messageObj.modalClass) === false) {
                            that.options.$secureFrame.parents(that.options.modalWrapSelector).addClass(messageObj.modalClass);
                        }

                        if (API.viewport.name() === 'mobile') {
                            MessageBus.trigger('GlobalModalOpenEvent');
                        }

                    } else if (messageObj.closeModal && !!messageObj.closeModal) {
                        console.log("auth flow closeModal");
                        MessageBus.trigger("modal.close");

                    } else if (messageObj.parentRedirect && /^\s*$/.test(messageObj.parentRedirect) === false) {
                        //console.log("auth flow redirect");
                        window.location.href = messageObj.parentRedirect;

                    } else if (messageObj.internalRedirect && /^\s*$/.test(messageObj.internalRedirect) === false) {
                        //console.log("auth flow internal redirect");
                        var newFramePageUrl = messageObj.internalRedirect.indexOf(that.options.authRelm) !== -1 ? messageObj.internalRedirect : that.options.authRelm + messageObj.internalRedirect;

                        that.options.$secureFrame.attr("src", buildAuthFrameUrl(newFramePageUrl));

                    } else if (messageObj.parentReload && !!messageObj.parentReload) {
                        //console.log("auth flow closeModal");
                        if (window.location.hash && window.location.hash.toLowerCase().indexOf("sessionexpired") !== -1) {
                            window.location.hash = "";
                        }
                        window.location.reload(true);
                    } else if (messageObj.customAction && /^\s*$/.test(messageObj.customAction) === false) {
                        //console.log("auth flow closeModal");
                        if (typeof messageObj.customAction === "string") {
                            MessageBus.trigger(messageObj.customAction, messageObj.data || {});
                        }
                    }
                }
            }, that.options.authRelm);
        }
    };

    AppAuthFlow.prototype.postMessage = function (data) {
        var that = this;
        if (typeof $.postMessage !== "undefined" && typeof data !== "undefined" && !$.isEmptyObject(data)) {
            $.postMessage($.param(data), that.options.srcUrl, that.options.$secureFrame[0].contentWindow);
        }
    };

    return new AppAuthFlow();
});

define('components/sign-in/childAuthFlow', ['api', 'MessageBus'], function (API, MessageBus) {
    'use strict';

    var _defaults = {
            redirectLinkSelector: '.redirectLinks',
            referrerUrlPointer: '#referrerUrl='
        },
        parentUrl = "";

    var AuthFlow = function () {
        //Check to make sure that this mobule only works in IFrame
        if ($("body").hasClass("secureFrame")) {
            this.init();
        }
    };

    AuthFlow.prototype.init = function () {
        var that = this,
            parentLocationInfo = document.location.hash,
            $marSigninContainer = $("#mar-signin-container"),
            $marSignUpContainer = $("#mar-signup-container-wrap"),
            $marResetPassContainer = $("#mar-reset-pass-container-wrap"),
            $emailSignUpModal = $("#emailSignUpModal"),
            $newsLetterSignUpModal = $("#newsLetterSignUpModal");

        if (parentLocationInfo) {
            parentUrl = decodeURIComponent(parentLocationInfo.split(_defaults.referrerUrlPointer)[1]);
        }


        console.log("AuthFlow.prototype.init-----parentUrl", parentUrl);

        that.attachEvents();
        //alert('recieving');
        that.receiveMessage();
        //alert('recieved');

        if ($marSigninContainer[0]) {

            $marSigninContainer.resize(function () {
                that.setFrameDimension();
            });

            $marSigninContainer.resize();

            MessageBus.trigger("signInSendEvent", $marSigninContainer, true);

        } else if ($marSignUpContainer[0]) {

            $marSignUpContainer.resize(function () {
                that.setFrameDimension();
            });

            $marSignUpContainer.resize();

            /*
             * Not triggering below event since listner is not ready yet.
             *
             * MessageBus.trigger("createAccountOpen.modal", $marSignUpContainer);
             */

        } else if ($marResetPassContainer[0]) {

            $marResetPassContainer.resize(function () {
                that.setFrameDimension();
            });

            $marResetPassContainer.resize();

            /*
             * Not triggering below event since listner is not ready yet.
             *
             * MessageBus.trigger("resetPassword.modal", $marResetPassContainer);
             */
        } else if ($emailSignUpModal[0]) {
            $emailSignUpModal.resize(function () {
                that.setFrameDimension();
            });
            $emailSignUpModal.resize();
        } else if ($newsLetterSignUpModal[0]) {
            $newsLetterSignUpModal.resize(function () {
                that.setFrameDimension();
            });
            $newsLetterSignUpModal.resize();
        }
    };

    AuthFlow.prototype.attachEvents = function () {
        var that = this;

        $("body").on("keydown", function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode === 27) {
                that.closeParentModal();
            }
        });

        $("body").on("click", '.redirectToParent', function (event) {
            event.preventDefault();
            var href = $(this).attr('href');

            if (href && /^\s*$/.test(href) === false) {
                that.parentRedirect(href);
            }
        });

        $("body").on("click", _defaults.redirectLinkSelector, function (event) {
            event.preventDefault();
            var href = $(this).attr('href'),
                form = $('body').find('.ju-age-gate-form'),
                noAjaxbtn = $('body').find('.age-gate-no-ajax');

            if (API.endpoints.ageGateOpen === true) {
                // JU Fix for ART-7435 - Narahari
                if (noAjaxbtn.length > 0 && $(this).hasClass('age-gate-no-ajax')) {

                    console.log("Do age gate");

                    if (form.parsley().validate()) {
                        console.log("Valid!");

                        var month = form.find('#birthdayMonth').val(),
                            year = form.find('#birthdayYear').val();

                        $.when(that.getAgeGateResponse(API.endpoints.ageGateValueSendCall, {
                            'Action': 'User.checkAgeGate',
                            'birthMonth': month,
                            'birthYear': year
                        })).then(function (data) {
                            that.adjustAgeGateWindow(data, href);
                        });
                    }

                } else {
                    if (href && /^\s*$/.test(href) === false) {
                        that.internalRedirect(href);
                    }
                }
            } else {
                if (href && /^\s*$/.test(href) === false) {
                    that.internalRedirect(href);
                }
            }

        });

        MessageBus.on("signInRequestComplete", function (data) {
            that.parentReload();
        });

        MessageBus.on("signUpRequestComplete", function (url) {
            that.parentRedirect(url);
        });
        MessageBus.on("iFrameModalClose.AuthFlow", function () {
            that.closeParentModal();
        });
        MessageBus.on("autoFillRegisterForm", function (data) {
            if (data && /^\s*$/.test(data) === false) {
                var $emailSignup = $("#mar-signup-container-wrap form"),
                    tempData = data.split("|"),
                    userData = {
                        "email": tempData[0] || "",
                        "phone": tempData[1] || ""
                    };
                // For the case when phone number value is empty
                $emailSignup.find('#mar-checkout-send-me-texts').prop('checked', false);
                $emailSignup.find('.mar-email-update-subfield').addClass('visuallyhidden');
                $emailSignup.find("#mar-signup-mobile-number").prop('disabled', true).val("");
                $emailSignup.find("#mar-signup-email").val(userData.email);
                if (userData.phone !== "") {
                    $emailSignup.find('#mar-checkout-send-me-texts').prop('checked', true);
                    $emailSignup.find('.mar-email-update-subfield').removeClass('visuallyhidden');
                    $emailSignup.find("#mar-signup-mobile-number").prop('disabled', false).val(userData.phone);
                }
            }
        });
        MessageBus.on("automateNewsLetterSignUp", function (userData) {
            if (userData && /^\s*$/.test(userData) === false) {
                var tempData = userData.split("|");
                MessageBus.trigger("Footer.showhideData", tempData[2], tempData[0], tempData[1]);
            }
        });
        MessageBus.on("createAccountRequestWithData.secureAuth", function (data) {
            that.parentCustomAction(data);
        });
        MessageBus.on("sendDataCreateAccountModal", function () {
            that.postMessage({customAction: "sendDataCreateAccountModal"});
        });
        MessageBus.on("newsLetterSignupOpen.Modal", function () {
            that.postMessage({customAction: "sendDataNewsLetterSignUpModal"});
        });

    };

    AuthFlow.prototype.getAgeGateResponse = function (url, urlParams) {
        var that = this;


        MessageBus.trigger("indicator.show");

        var dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post',
            'dataType': 'json'
        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return dfd;
    };

    AuthFlow.prototype.adjustAgeGateWindow = function (data, href) {
        var that = this,
            formDiv = $('body').find('.cmn-age-gate-form'),
            accountDiv = $('body').find('.cmn-age-gate-account'),
            errorDiv = $('body').find('.cmn-age-gate-error');

        if (data.birthDateEvaluationResult === 'notgated') {
            if (href && /^\s*$/.test(href) === false) {
                that.internalRedirect(href);
            }
        } else if (data.birthDateEvaluationResult === 'gated') {
            formDiv.addClass('cmn-agegate-hide');
            accountDiv.addClass('cmn-agegate-hide');
            errorDiv.removeClass('cmn-agegate-hide');
            //errorDiv.find('p').html(data.ageGatedResponseMsg);
        }
    };

    //Common Function to listen to parent window messages
    AuthFlow.prototype.receiveMessage = function () {
        var that = this;
        console.log("AuthFlow---receiveMessage---call", $.postMessage);
        if (typeof $.receiveMessage !== "undefined") {
            //console.log("AuthFlow---receiveMessage---if", $.postMessage);
            $.receiveMessage(function (e) {

                //console.log("AuthFlow---receiveMessage---", e);
                var messageObj = $.parseParams(e.data);
                //alert("AuthFlow---receiveMessage---messageObj", messageObj);
                if (messageObj && !$.isEmptyObject(messageObj)) {
                    if (messageObj.closeModalSecure) {
                        $('.secureFrame').html('');
                    }
                    if (messageObj.customAction && /^\s*$/.test(messageObj.customAction) === false) {
                        if (typeof messageObj.customAction === "string") {
                            MessageBus.trigger(messageObj.customAction, messageObj.data || "");
                        }
                    }
                }
            }, API.endpoints.realm);
        }
    };

    AuthFlow.prototype.postMessage = function (data) {
        var that = this;
        //console.log("AuthFlow---postMessage---call", $.postMessage);
        if (typeof $.postMessage !== "undefined") {
            //console.log("AuthFlow---if---call", parentUrl, parent);
            $.postMessage($.param(data), parentUrl, parent);
        }
    };

    AuthFlow.prototype.setFrameDimension = function () {
        var that = this,
            $marRequestPasswordWrap = $('#mar-reset-pass-container-wrap'),
            $marSignUpWrap = $('#mar-signup-container-wrap'),
            $marSignInWrap = $('#mar-signin-container'),
            dimensionObj = {iFrameHeight: $('body').outerHeight(true)};

        if ($marRequestPasswordWrap[0]) {
            dimensionObj.iFrameWidth = $marRequestPasswordWrap.find('.mar-request-password-reset-container').outerWidth(true);
            dimensionObj.modalClass = "reset-password-modal-container";
        }

        if ($marSignUpWrap[0]) {
            dimensionObj.modalClass = "create-account-modal";
        } else if ($marSignInWrap[0]) {
            dimensionObj.modalClass = "mar-signin-modal";
        }

        that.postMessage(dimensionObj);
    };

    AuthFlow.prototype.closeParentModal = function () {
        var that = this;

        that.postMessage({closeModal: true});
    };

    AuthFlow.prototype.parentRedirect = function (location) {
        var that = this;
        if (location && /^\s*$/.test(location) === false) {
            that.postMessage({parentRedirect: location});
        }
    };

    AuthFlow.prototype.internalRedirect = function (location) {
        var that = this;
        if (location && /^\s*$/.test(location) === false) {
            that.postMessage({internalRedirect: location});
        }
    };

    AuthFlow.prototype.parentReload = function () {
        var that = this;

        that.postMessage({parentReload: true});
    };
    AuthFlow.prototype.parentCustomAction = function (userData) {
        var that = this;
        that.postMessage({customAction: "redirectCreateAccountModal", data: userData.email + "|" + userData.phone});
    };

    return new AuthFlow();
});

/***
 Usage:
 <a href="#" class="visuallyhidden" id="modalStatePreserver" data-modalevent="MSP.modalOpen" data-modaltarget="" data-modalclass="" data-modalerror=""></a>

 @requirements
 jQuery, MessageBus

 */
define('modalStatePreserver', [
    'MessageBus',
    'modal'
], function (MessageBus) {
    'use strict';

    var ModalStatePreserver = function () {
        this.options = {
            events: {
                modalOpen: "MSP.modalOpen"
            },
            classNames: {},
            selectors: {
                'el': '#modalStatePreserver'
            },
            sessionKey: 'modalStateStorage'
        };
        this.init();
    };
    ModalStatePreserver.prototype.init = function () {
        this.$el = $(this.options.selectors.el);
        this.sessionValue = this.getStorage();
        this.clearStorage();
        if (this.$el.length > 0) {
            //if ModalStatePreserver div present then load the modal and fill the values
            if (this.sessionValue !== null) {
                this.bindEvents();
                this.loadSavedModal();
            }
        }
    };
    ModalStatePreserver.prototype.bindEvents = function () {
        MessageBus.on(this.options.events.modalOpen, this.modalOpened, this);
        MessageBus.on('onBeforeClose.modal', this.modalClosed, this);
    };

    //This function will serialize the form and set the value in session storage
    ModalStatePreserver.prototype.serializeModalForm = function ($formEl) {
        var formSerialized = {};
        $formEl.find('input, textarea, select').each(function (index, item) {
            if (item.name !== "" && item.disabled === false) {
                switch (item.type) {
                    case 'checkbox':
                        formSerialized[item.name] = item.checked;
                        break;
                    case 'radio':
                        formSerialized[item.name] = item.checked;
                        break;
                    case 'password':
                        break;
                    case 'submit':
                        break;
                    case 'reset':
                        break;
                    default:
                        formSerialized[item.name] = item.value;
                        break;
                }
            }
        });
        this.setStorage(JSON.stringify(formSerialized));
    };

    ModalStatePreserver.prototype.modalOpened = function (modalContent) {
        var fieldName,
            $context = $(modalContent[0]),
            errorMessage = this.$el.data('modalerror'),
            currentField;
        this.errorField = $context.find('.mar-msp-error-space');
        this.errorField.removeClass('visuallyhidden').empty().append(errorMessage);
        this.sessionValue = JSON.parse(this.sessionValue);
        for (fieldName in this.sessionValue) {
            if (this.sessionValue.hasOwnProperty(fieldName)) {
                currentField = $context.find('[name="' + fieldName + '"]');
                switch (currentField.attr('type')) {
                    case 'checkbox':
                        currentField.get(0).checked = this.sessionValue[fieldName];
                        currentField.trigger('change');
                        break;
                    case 'radio':
                        currentField.get(0).checked = this.sessionValue[fieldName];
                        currentField.trigger('change');
                        break;
                    default:
                        if (fieldName != "mar-signup-email") {
                            currentField.val(this.sessionValue[fieldName]);
                            currentField.trigger('change');
                            break;
                        }
                }
            }
        }
        var temp = modalContent.find('form').parsley();
        temp.destroy();
        $("#mar-signup-email").attr('data-parsley-required-message', 'Please re-enter your email address.').parsley().validate();
        modalContent.find('form').parsley();

        $("#mar-signup-email").on('keyup', function () {
            $context.find('.mar-msp-error-space').html('');
        });

    };

    //Function to load the modal and set form values and show error
    ModalStatePreserver.prototype.loadSavedModal = function () {
        this.$el.modal();
        this.modalController = this.$el.data('plugin_modal');
        this.modalController.openModal();
    };

    ModalStatePreserver.prototype.modalClosed = function () {
        this.errorField.addClass('visuallyhidden').empty();
        MessageBus.off(this.options.events.modalOpen);
        MessageBus.off('onBeforeClose.modal');
    };

    //Wrapper functions for clearing session storage
    ModalStatePreserver.prototype.clearStorage = function () {
        localStorage.removeItem(this.options.sessionKey);
    };

    //Wrapper functions for setting session storage
    ModalStatePreserver.prototype.setStorage = function (value) {
        localStorage.setItem(this.options.sessionKey, value);
    };

    //Wrapper functions for getting session storage
    ModalStatePreserver.prototype.getStorage = function () {
        return localStorage.getItem(this.options.sessionKey);
    };

    return ModalStatePreserver;
});

define('components/age-gate/ageGateApp', [
    'MessageBus',
    'api'
], function (MessageBus,
             API) {

    'use strict';

    var AgeGate = Backbone.View.extend({

        'events': {},
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this,
                userInfo;

            this.options = options || {};
            console.log("Age Gate Init!!!");

            userInfo = API.getUserState();

            $.when(userInfo).then(function (data) {
                console.log("User Data: ", data);
                that.userObj = data;

                if (that.options.init === "true") {
                    that.initialSetup();
                } else if (that.options.init === "joinList") {
                    that.initialSetupJoinList();
                } else if (that.options.init === "writeReview") {
                    that.initialSetupWriteReview();
                } else {
                    that.initialSetupOff();
                }

            });

        },
        'setupEvents': function () {
            console.log("Age gate Event Attached!!!");
        },
        'initialSetup': function () {
            var that = this,
                errorDiv = $('body').find('.cmn-age-gate-error'),
                regBtn = $('body').find('.mar-reg-btn'),
                formDiv = $('body').find('.cmn-age-gate-form'),
                accountDiv = $('body').find('.cmn-age-gate-account');


            if (this.userObj.userAgeGatedStatus === 'gated') {
                errorDiv.removeClass('cmn-agegate-hide');
                //errorDiv.find('p').html(this.userObj.ageGatedResponseMsg);
            } else if (this.userObj.userAgeGatedStatus === 'notgated') {
                formDiv.removeClass('cmn-agegate-hide');
            } else {
                formDiv.removeClass('cmn-agegate-hide');
                accountDiv.removeClass('cmn-agegate-hide');
                regBtn.addClass('age-gate-no-ajax');
            }

        },
        'initialSetupOff': function () {
            var that = this,
                formDiv = $('body').find('.cmn-age-gate-form');

            formDiv.removeClass('cmn-agegate-hide');
        },
        'initialSetupWriteReview': function () {
            var that = this,
                $ageGateForm = $("#jus-agegate-review-form"),
                $errorDiv = $(".cmn-age-gate-error");

            if (this.userObj.userAgeGatedStatus === "gated") {
                //$ageGateForm.parent().addClass('cmn-agegate-hide');
                $errorDiv.removeClass('cmn-agegate-hide');
            } else if (this.userObj.userAgeGatedStatus === "notdefined") {
                $ageGateForm.parent().removeClass('cmn-agegate-hide');
                //$errorDiv.addClass('cmn-agegate-hide');
            }

        },
        'initialSetupJoinList': function () {
            var that = this,
                joinErrorDiv = $('body').find('.mar-signup-error-age'),
                joinFormDiv = $('body').find('.mar-email-signup-content'),
                joinEmail = joinFormDiv.find('#signup-email-address'),
                birthMonth = joinFormDiv.find('#birthdayMonth'),
                birthYear = joinFormDiv.find('#birthdayYear'),
                birthDiv = joinFormDiv.find('.birth-day-div');

            console.log("Join List age agte");

            if (this.userObj.userAgeGatedStatus === "gated") {
                joinErrorDiv.removeClass('cmn-agegate-hide');
                joinFormDiv.addClass('cmn-agegate-hide');
            } else if (this.userObj.userAgeGatedStatus === "notdefined") {
                joinEmail.attr('disabled', true);
                birthMonth.removeAttr('data-parsley-errors-messages-disabled');
                birthMonth.removeAttr('data-parsley-class-handler');
                birthMonth.removeAttr('data-parsley-conditionalmonthyear');
                birthMonth.attr('data-parsley-required', true);
                birthYear.removeAttr('data-parsley-errors-messages-disabled');
                birthYear.removeAttr('data-parsley-class-handler');
                birthYear.removeAttr('data-parsley-conditionalmonthyear');
                birthYear.attr('data-parsley-required', true);
            }
            else {
                if (API.endpoints.ageGateOpen === true) {
                    birthDiv.addClass('cmn-agegate-hide');
                }
            }
        }

    });
    return AgeGate;
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, console, define, window, document, _gaq*/

define('signIn', [
    'MessageBus',
    'api',
    'emailValidator',
    'loginForgetPassword',
    'modal',
    'tooltip',
    'components/sign-in/parentAuthFlow',
    'components/sign-in/childAuthFlow',
    'modalStatePreserver',
    'components/age-gate/ageGateApp'
], function (MessageBus,
             API,
             EmailValidator,
             LoginForgetPassword,
             modal,
             tooltip,
             parentAuthFLow,
             AuthFlow,
             ModalStatePreserver,
             AgeGate) {
    'use strict';
    // setup some defaults that we can use later
    var _defaults = {
        'HIDDEN_CLASS_NAME': 'visuallyhidden',
        'PARSLEY_ERROR_CLASS_NAME': 'parsley-error',
        'PARSLEY_ERROR_LIST_FILLED_CLASS_NAME': 'filled',
        'PARSLEY_ERROR_LIST_SELECTOR': '.parsley-errors-list'
    };

    var SignIn = function () {
        // TODO this makes no sense make it better
        this.init();
    };

    SignIn.prototype.init = function (customOptions) {
        var that = this,
            ageGate;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);


        $('.mar-modal-trigger').modal();

        // create instance of login

        this.options.emailValidator = new EmailValidator();
        this.attachEvents();
        if (!$("body").hasClass("secureFrame")) {
            this.modalStatePreserver = new ModalStatePreserver();
        }

        var $marSignUpContainer = $("#mar-signup-container-wrap"),
            $marSignUpModal = $("body").find(".mar-email-signup-modal"),
            $marReviewForm = $("body").find('#jus-agegate-review-form'),
            $marLoginPage = $("body").find(".mar-signin-container"); //JU | JIRA Fix for ART-9877 Narahari

        if ($("body").hasClass("secureFrame") && $marSignUpContainer[0]) {
            MessageBus.trigger("createAccountOpen.modal", $marSignUpContainer);
            MessageBus.trigger("sendDataCreateAccountModal", {customAction: "sendDataCreateAccountModal"});
        }

        if (API.endpoints.ageGateOpen !== undefined && $("body").hasClass("secureFrame") && !$marSignUpModal[0]) {
            ageGate = new AgeGate({'init': "true"});
        } else if (API.endpoints.ageGateOpen !== undefined && $("body").hasClass("secureFrame") && $marSignUpModal[0]) {
            ageGate = new AgeGate({'init': "joinList"});
        } else if (API.endpoints.ageGateOpen !== undefined && $marReviewForm[0]) {
            ageGate = new AgeGate({'init': "writeReview"});
        } else if (API.endpoints.ageGateOpen !== undefined && $marLoginPage[0]) { //JU | JIRA Fix for ART-9877 Narahari
            ageGate = new AgeGate({'init': "true"});
        }


    };

    SignIn.prototype.getAgeGateResponseSecure = function (url, urlParams) {
        var that = this;


        MessageBus.trigger("indicator.show");

        var dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post',
            'dataType': 'json'
        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return dfd;
    };

    SignIn.prototype.writeReviewAjaxResponse = function (data) {
        var that = this,
            $ageGateForm = $("#jus-agegate-review-form"),
            $errorDiv = $(".cmn-age-gate-error"),
            referURL = this.getURLVar().reffererURL;

        if (data.birthDateEvaluationResult === "notgated") {
            window.location = referURL;
        } else if (data.birthDateEvaluationResult === "gated") {
            $ageGateForm.parent().addClass('cmn-agegate-hide');
            $errorDiv.removeClass('cmn-agegate-hide');
        }
    };

    SignIn.prototype.getURLVar = function () {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    };

    SignIn.prototype.adjustAgeGateWindowSecure = function (data) {
        var that = this,
            formDiv = $('body').find('.cmn-age-gate-form'),
            accountDiv = $('body').find('.cmn-age-gate-account'),
            errorDiv = $('body').find('.cmn-age-gate-error'),
        // JU | Fix for ALM-1037 : Narahari
            errorBtn = $('body #mar-signin-container').find('.age-gate-no-ajax');

        if (data.birthDateEvaluationResult === 'notgated') {

            console.log("not gated");
            MessageBus.trigger("openAgeGatePopup", true);
            MessageBus.trigger("changeUserState", 'notgated');
            errorBtn.trigger('click');


        } else if (data.birthDateEvaluationResult === 'gated') {

            formDiv.addClass('cmn-agegate-hide');
            accountDiv.addClass('cmn-agegate-hide');
            errorDiv.removeClass('cmn-agegate-hide');
            MessageBus.trigger("changeUserState", 'gated');
            //errorDiv.find('p').html(data.ageGatedResponseMsg);

        }
    };

    SignIn.prototype.attachEvents = function () {
        var that = this;

        /*
         * handle enter key to sybmit the form when user hit enter on email input
         */
        $('body').on('keyup', '#marSigninEmail', function (event) {
            event.preventDefault();
            if (event.which === 13) {
                $('.mar-sign-in-btn').trigger('click');
            }
        });
        /*
         * handle enter key to sybmit the form wheen user hit enter on pwd input
         */
        $('body').on('keyup', '#marSigninPassword', function (event) {
            event.preventDefault();
            if (event.which === 13) {
                $('.mar-sign-in-btn').trigger('click');
            }
        });

        //ALM-4062

        $("body").on('keyup', '#mar-signup-password', function (e) {
            var targetField = $("body").find("#mar-signup-password-confirm");

            targetField.val('');
            targetField.parsley().destroy();
            targetField.parsley();
        });

        $("#jus-agegate-review-form").on('submit', function (e) {
            e.preventDefault();
            var form = $(this),
                monthVal = form.find('#birthdayMonth').val(),
                yearVal = form.find('#birthdayYear').val();

            if (form.parsley().isValid()) {

                $.when(that.getAgeGateResponseSecure(API.endpoints.ageGateValueSendCall, {
                    'Action': 'User.checkAgeGate',
                    'birthMonth': monthVal,
                    'birthYear': yearVal
                })).then(function (data) {
                    that.writeReviewAjaxResponse(data);
                });

            }

        });


        // listen to sign-in button click
        $('body').on('click', '.mar-sign-in-btn', function (e) {
            e.preventDefault();
            //This length check is for that wether we are coming from modal sign in or stand alone signin as in first case we have to send
            //modalRefer : true and in second case we have to send modalRefer : false

            //Validation for form if user try to submit blank sign in form
            if (false === $(e.currentTarget).parents("form").parsley().validate()) {
                return;
            }

            if ($(".mar-sign-in-btn").parents('.modal-content').length > 0 || $("body").hasClass("secureFrame")) {
                MessageBus.trigger('signInSendEvent', $(e.currentTarget), true);
            } else {
                MessageBus.trigger('signInSendEvent', $(e.currentTarget), false);
            }

        });

        MessageBus.on('doAgeGateAjax', function () {
            console.log("age gate ajax!!");

            var form = $('body').find('.ju-age-gate-form'),
                noAjaxbtn = $('body').find('.age-gate-no-ajax');

            if (API.endpoints.ageGateOpen === true) {
                if (noAjaxbtn.length > 0) {

                    console.log("Do age gate");

                    if (form.parsley().validate()) {
                        console.log("Valid!");

                        var month = form.find('#birthdayMonth').val(),
                            year = form.find('#birthdayYear').val();

                        $.when(that.getAgeGateResponseSecure(API.endpoints.ageGateValueSendCall, {
                            'Action': 'User.checkAgeGate',
                            'birthMonth': month,
                            'birthYear': year
                        })).then(function (data) {
                            that.adjustAgeGateWindowSecure(data);
                        });
                    }

                }
            }
        });

        //TODO: break this out so it makes more sense
        MessageBus.on('createAccountOpen.modal', function (modalContent) {
            var $secureAuth = $(modalContent).find("#secureAuth");
            if ($secureAuth[0]) {
                return;
            }
            // When this form is submitted, validate with parsley
            modalContent.find('#mar-create-account-form')
                .parsley({excluded: ':disabled'})
                // Ensure all subfields are displayed
                // on validation error
                .subscribe('parsley:form:validated', function (e) {

                    if (!e.validationResult) {
                        $('[data-activesubfield="true"]')
                            .removeClass(that.options.HIDDEN_CLASS_NAME)
                            .closest('.cmn-form-element');
                        //.find('.cmn-subfield-toggle-link').text('less...');
                    }
                });

            modalContent.find('#mar-signup-mobile-number').prop({'disabled': true});


            $("#mar-create-account-form").on('click', 'input#submitSignUpForm', function (e) {
                var emailValue, validatorResult,
                    form = $(this).parents("form");

                // do not submit
                e.preventDefault();

                // check if parsley is happy
                form.parsley().validate();

                form.find('.mar-msp-error-space').addClass('visuallyhidden');

                // check email first
                if (form.parsley().isValid()) {
                    MessageBus.trigger('indicator.show');
                    // find a selector with value that we need
                    emailValue = form.find("#mar-signup-email");
                    validatorResult = that.options.emailValidator.validate(emailValue);

                    // based on the
                    validatorResult.done(function (data) {
                        $.ajax({
                                url: API.endpoints.signUpRequest,
                                type: 'POST',
                                data: $(form).serialize()
                            })
                            .done(function (res) {
                                if (res.status === "success") {
                                    /*
                                     * Ensighten Tracking Start:
                                     * Event: userRegistration:- When user clicks new customer sign-in button
                                     */

                                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {"name": "userRegistration"});

                                    /*
                                     * Ensighten Tracking End
                                     */

                                    var redirectUrl = "";

                                    if (res.successRedirectionURL.indexOf(API.endpoints.authRelm) !== -1) {
                                        redirectUrl = res.successRedirectionURL;
                                    } else {
                                        redirectUrl = (API.endpoints.authRelm + res.successRedirectionURL);
                                    }

                                    if ($("body").hasClass("secureFrame")) {
                                        MessageBus.trigger("signUpRequestComplete", redirectUrl);
                                    } else if (/^\s*$/.test(res.successRedirectionURL) === false) {
                                        window.location.href = redirectUrl;
                                    }
                                } else {
                                    if (res.data.errors && res.data.errors.length) {
                                        form.find('.mar-msp-error-space').removeClass('visuallyhidden').text(res.data.errors[0].msg);
                                    }

                                    form.find("input[type='password']").val("");
                                }
                            })
                            .fail(function (jqxhr, status) {
                                console.log(status);
                            });

                    }).fail(function (data) {
                        form.find("input[type='password']").val("");
                        // fetch the form element and display message based on the parsley settings
                        //that.options.$error.html('Please enter a valid email');
                    });

                } else {
                    form.find("input[type='password']").val("");
                }
            });

            $("#mar-create-account-form").parsley().subscribe('parsley:form:validated', function (e) {
                if ($('#mar-create-account-form').parsley().isValid() === false) {
                    $("#mar-create-account-form").find("input[type='password']").val("");
                }
            });

            if (API.viewport.name() === 'mobile') {
                $(".mar-registered-customer-signin-container .mar-reg-btn").on('click', function (e) {
                    $(".mar-registered-customer-signup .mar-reg-btn").trigger('click');
                });
            }

            modalContent.find('select').customSelect();

            modalContent.find('.mar-tooltip-trigger').tooltip();

            // Add 'SubField' toggle functionality to 'Email Updates' section
            modalContent.find('.cmn-subfield-toggle').change(function toggleSubfield(e) {

                var $this = $(this);
                var $thisSubfield = $('#' + $this.attr('data-updatetype') + '-subfield');
                //var $thisSubfieldToggle = $this.closest('.cmn-checkbox-container').find('.cmn-subfield-toggle-link');
                var $thisSubfieldParsley = $thisSubfield.parents('form').eq(0).parsley();
                $thisSubfield.find('#mar-signup-mobile-number').parsley().destroy();
                if ($this.is(':checked')) {
                    $thisSubfield.find('input,select').parsley();
                    $thisSubfield.removeClass(that.options.HIDDEN_CLASS_NAME)
                        .attr('data-activesubfield', true);
                    $thisSubfield.find('input, select').prop('disabled', false);

                    //$thisSubfieldToggle.text('less...');
                } else {

                    $thisSubfield.find('#mar-signup-mobile-number').val('');
                    $thisSubfield.addClass(that.options.HIDDEN_CLASS_NAME)
                        .attr('data-activesubfield', false)
                        .find('input, select')
                        .prop('disabled', true);
                    /*
                     $thisSubfield.find('.'+ that.options.PARSLEY_ERROR_CLASS_NAME)
                     .removeClass(that.options.PARSLEY_ERROR_CLASS_NAME);

                     $thisSubfield.find(that.options.PARSLEY_ERROR_LIST_SELECTOR)
                     .empty()
                     .removeClass(that.options.PARSLEY_ERROR_LIST_FILLED_CLASS_NAME);*/

                    //$thisSubfieldToggle.text('more...');
                }

                /*$thisSubfieldParsley.destroy();
                 $thisSubfieldParsley.validate();
                 $thisSubfield.parsley();
                 $thisSubfieldParsley.destroy();
                 $thisSubfield.parsley();
                 $thisSubfieldParsley.validate();*/

            });

            // Add 'more...' dynamic toggle functionality to 'Email Updates' section
            modalContent.find('.cmn-subfield-toggle-link').on('click', function linkToggleSubfield() {
                var $this = $(this);
                var $thisSubfield = $('#' + $this.attr('data-updatetype') + '-subfield');

                if ($thisSubfield.hasClass(that.options.HIDDEN_CLASS_NAME)) {
                    $thisSubfield.removeClass(that.options.HIDDEN_CLASS_NAME);
                    $this.text('less...');
                } else {
                    $thisSubfield.addClass(that.options.HIDDEN_CLASS_NAME);
                    $this.text('more...');
                }
            });
            if (!$("body").hasClass("secureFrame")) {
                MessageBus.trigger("MSP.modalOpen", modalContent);
            }
        });
    };
    // activate sign-in on load because there should be only one on page load any way
    return new SignIn();
});

define('miniCartItemView', [
    'MessageBus'
], function (MessageBus) {

    'use strict';

    var ItemView = Backbone.View.extend({

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            var that = this;

            this.options = options || {};
            // check which template to load

            if ($('#minicart-item-template').length > 0) {
                this.template = _.template($('#minicart-item-template').html());
                this.render();
            }
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            var that = this;

            // this.model.set({ 'labels' : this.options.cart.configText.cartItem.labels});
            this.$el.append(this.template(this.model.attributes));

            return this;
        }
    });
    return ItemView;
});

define('miniCartModel', [
    'api'
], function (API) {
    'use strict';

    var MiniCartModel = Backbone.Model.extend({
        'defaults': {
            "id": 1234567,
            "skuId": 7654321,
            "productId": 1234,
            "name": "Open stitch elbow sleeve sweatshirt lorem ipsum long product name",
            "referenceNum": "4e56kdl0",
            "description": "An open stitch elbow sleeve sweatshirt lorem ipsum long product name description",
            "promoMessage": "Buy 2 tops get $10 off",
            "promoType": "gift",
            "promoTypeText": "Free Gift",
            "invMessage": "This is an inventory message",
            "imageURL": "/assets/images/minicart-image-ph.jpg",
            "imageALTText": "Open stitch elbow sleeve sweatshirt lorem ipsum long product name",
            "colorName": "purple",
            "colorHEXCode": "#8e6075",
            "size": "S",
            "unitPrice": 29.00,
            "quantity": 1,
            "totalPrice": 29.00,
            "productType": "clothing",
            "eligibleForGWP": false,
            "gwpMessage": "",
            "gwpLink": "",
            "productLink": API.endpoints.PdpURL
        }
    });

    // make it available
    return MiniCartModel;
});

define('miniCartCollection', [
    'miniCartModel'
], function (MiniCartModel) {
    'use strict';

    var MiniCartCollection = Backbone.Collection.extend({
        'model': MiniCartModel
    });

    return MiniCartCollection;
});

define('miniCartItemsView', [
    'api',
    'MessageBus',
    'miniCartItemView',
    'miniCartCollection'
], function (API,
             MessageBus,
             MiniCartItemView,
             MiniCartCollection) {

    'use strict';

    var ItemsView = Backbone.View.extend({

        'initialize': function (options) {
            var that = this;
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};

            // set up options
            this.options.$trigger = $('.mar-header-account-cart');
            this.options.$scrollContainer = $('.asc-minicart-scroll');
            this.options.$minicartNotificationContainer = $('.mar-minicart-notification');
            this.options.$scrollBar = this.options.$scrollContainer.find('.scrollbar');
            this.options.$itemList = $('.mar-minicart-list');
            this.options.$closeMinicart = $('.mar-minicart-close');
            this.options.$orderTotalContainer = $('.mar-minicart-total-value');
            this.options.$overlay = $('.mar-overlay');
            this.options.$loadingIcon = $('#cmn-minicart-loading-icon');
            this.options.reloadCart = true;
            this.options.miniCartNotification = false;

            this.miniCartItemViews = [];

            this.listenerSetup();
            this.attachEvents();

        },
        'render': function (renderType) {
            var that = this;
            if (!this.options.miniCartCollection) {
                this.options.miniCartCollection = [];
            }

            if (this.options.miniCartNotification) {
                this.options.$minicartNotificationContainer.removeClass('visuallyhidden');

                if (this.options.miniCartMessaging.type === 'gift') {
                    this.options.$minicartNotificationContainer.find('.icon-gift').removeClass('visuallyhidden');
                }
                if (!_.isEmpty(this.options.miniCartMessaging) && !_.isUndefined(this.options.miniCartMessaging.title) && this.options.miniCartMessaging.title.trim().length > 0 && this.options.miniCartMessaging.message.trim().length > 0) {
                    this.options.$minicartNotificationContainer
                        .find('.mar-minicart-message-title')
                        .text(this.options.miniCartMessaging.title);

                    this.options.$minicartNotificationContainer
                        .find('.mar-minicart-notification-message')
                        .text(this.options.miniCartMessaging.message);


                    $('.mar-minicart-notification-close').on('click', function closeNotificationContainer() {
                        that.options.$minicartNotificationContainer.slideUp(function () {
                            that.options.$minicartNotificationContainer
                                .addClass('visuallyhidden')
                                .removeAttr('style');
                        });
                    });

                } else if (!_.isEmpty(this.options.miniCartMessaging) && _.isUndefined(this.options.miniCartMessaging.title) && this.options.miniCartMessaging.message.trim().length > 0) {
                    this.options.$minicartNotificationContainer
                        .find('.mar-minicart-notification-message')
                        .text(this.options.miniCartMessaging.message);
                    $('.mar-minicart-notification-close').on('click', function closeNotificationContainer() {
                        that.options.$minicartNotificationContainer.slideUp(function () {
                            that.options.$minicartNotificationContainer
                                .addClass('visuallyhidden')
                                .removeAttr('style');
                        });
                    });
                }
                else {
                    this.options.$minicartNotificationContainer.hide();
                }


            }

            if (this.options.miniCartCollection.length > 0) {

                $('.mar-minicart-total-value').html((this.options.miniCartCollection.models[0].attributes.currencyCode || '$') + this.options.cartSettings.total);

                // get our cart views updated
                _.each(this.options.miniCartCollection.models, function (model) {

                    if (renderType === 'justAdded') {
                        if (!model.attributes.justAdded) {
                            return;
                        }
                    }

                    var miniCartItemView = new MiniCartItemView({
                        'model': model,
                        'el': that.$el
                    });

                    that.miniCartItemViews.push(miniCartItemView);
                });
                window.picturefill();
                if (typeof $.fn.lazyload !== "undefined") {
                    $("img.lazy-load").lazyload({
                        skip_invisible: false,
                        threshold: 200,
                        failure_limit: 15
                    });
                }
            } else {
                this.$el.html('<li>You currently have no items in your shopping bag.</li>');
                this.options.$trigger.addClass('mar-minicart-empty');
            }
        },
        'reloadItems': function (e, renderType) {
            var that = this;

            this.$el.empty();


            this.options.$scrollBar.addClass('visuallyhidden');
            this.options.$loadingIcon.show();
            this.options.$scrollContainer.css('height', that.options.$loadingIcon.outerHeight());

            this.options.$trigger
                .removeClass('mar-minicart-just-added')
                .removeClass('mar-minicart-empty');

            this.options.miniCartCollection = new MiniCartCollection();
            if (renderType === 'justAdded') {


                if (!that.options.$closeMinicart.hasClass('just-added-close')) {
                    that.options.$closeMinicart.addClass('just-added-close');
                }

                if (!that.options.$trigger.hasClass('mar-minicart-just-added')) {
                    that.options.$trigger.addClass('mar-minicart-just-added');
                }
                setTimeout(function () {
                    that.reloadItemsAjaxHandler(that, e, renderType);
                }, 0);
                $('.mar-minicart-total-text').html('SUB TOTAL');
            }
            else {
                $.ajax({
                    'url': API.endpoints.updateCart,
                    'type': 'post',
                    'data': {
                        'Action': 'Cart.fetchMiniCartValues'
                    }
                }).done(function (data) {
                    that.reloadItemsAjaxHandler(that, data, renderType);
                });
                $('.mar-minicart-total-text').html('Estimated Total');
            }
        },

        'reloadItemsAjaxHandler': function (that, data, renderType) {

            var status = data.status;

            status = status.toLowerCase();

            that.options.$scrollBar.removeClass('visuallyhidden');
            that.options.$loadingIcon.hide();

            if (status !== 'success') {
                // If status isn't success
                return;
            }

            if (data.data.miniCartNotification) {
                that.options.miniCartNotification = true;
                that.options.miniCartMessaging = data.data.miniCartMessaging;
            }

            that.options.cartSettings = data.data.cartSummary;

            that.options.miniCartCollection.reset(data.data.cartItems);

            that.render(renderType);

            //tiny scrollbar plugin
            that.options.scrollbar = $('.asc-minicart-scroll').data("plugin_tinyscrollbar");

            // Reset height before initializing / updating scrollbar plugin
            //extra check added to give min height to the items in case the cart is not empty-ART-7949.
            if ($('.mar-minicart-list').find('.mar-cart-item').length !== 0) {
                that.options.$scrollContainer.css('min-height', "139px");
                that.options.$scrollContainer.css('height', that.options.$itemList.height());
            }
            else {
                that.options.$scrollContainer.css('height', that.options.$itemList.height());
            }

            if (that.options.scrollbar === undefined) {
                $('.asc-minicart-scroll').tinyscrollbar();
            } else {
                that.options.scrollbar.update();
            }
        },
        'attachEvents': function () {
            var that = this,
                touch = Modernizr.touch,
                openTimerID, openDuration = 400, closeTimerID, closeDuration = 6000;  // changed the duration from 3 seconds to 6 seconds

            // ARI-5946
            //var mobileNav = API.showMobileView('miniCartOverlay');
            if (!touch || !API.showMobileView('miniCartOverlay')) {
                that.options.$trigger.off('mouseenter.miniCart, touchstart').on('mouseenter.miniCart, touchstart', function onTriggerHover(e) {

                    window.clearTimeout(closeTimerID);
                    openTimerID = window.setTimeout(function () {
                        MessageBus.trigger('openMinicart');
                    }, openDuration);

                });
            }

            MessageBus.on('viewport.change', function (viewport) {
                //	var mobileN = API.showMobileView('miniCartOverlay');
                if (!touch || !API.showMobileView('miniCartOverlay')) {
                    that.options.$trigger.off('mouseenter.miniCart, touchstart').on('mouseenter.miniCart ,touchstart', function onTriggerHover(e) {

                        window.clearTimeout(closeTimerID);
                        openTimerID = window.setTimeout(function () {
                            MessageBus.trigger('openMinicart');
                        }, openDuration);

                    });
                }
                else {
                    that.options.$trigger.off('mouseenter.miniCart');
                }
            });
            // if($('html').hasClass('touch'))
            // {
            // 	this.options.$trigger.find('.mar-header-cart-anchor').on('click',function onClickGoToCart(eventGoToCart) {
            //   				eventGoToCart.preventDefault();
            //   				window.clearTimeout(closeTimerID);
            // 		openTimerID = window.setTimeout(function(){
            // 			MessageBus.trigger('openMinicart');
            // 		}, openDuration);
            // 				});
            // }
            // else{
            // 	// delay not to open mini cart on accidental hover
            // 	this.options.$trigger.on('mouseenter', function onTriggerHover() {
            // 		window.clearTimeout(closeTimerID);
            // 		openTimerID = window.setTimeout(function(){
            // 			MessageBus.trigger('openMinicart');
            // 		}, openDuration);
            // 	});
            // }

            //Commented this code as it was affecting the minicart behaviour

            /*this.options.$trigger.on('click', function(e) {
             e.preventDefault();
             });*/

            this.options.$trigger.on("mouseleave", function onTriggerLeave() {
                window.clearTimeout(openTimerID);
                closeTimerID = window.setTimeout(function () {
                    that.options.$closeMinicart.trigger('click');
                    window.clearTimeout(closeTimerID);
                }, closeDuration);
            });

            this.options.$closeMinicart.on('click', function onCloseMinicart(e) {
                var $closeButton = $(e.currentTarget);
                if ($closeButton.hasClass('just-added-close')) {
                    that.render();
                    $closeButton.removeClass('just-added-close');
                }
                that.closeMinicart();
                MessageBus.trigger('minicartClosed');
            });
        },
        'listenerSetup': function () {
            var that = this;

            MessageBus.on('openMinicart', function (e) {
                that.openMinicart(e, true);
                MessageBus.trigger('minicartOpened');
            });

            MessageBus.on('addToMinicart', function (e) {
                var closeTimerID, closeDuration = 6000;// changed the duration from 3 seconds to 6 seconds

                // set var so the cart reloads
                // only what was just added
                that.options.reloadCart = true;
                // Open the cart, passing in justAdded flag
                if (API.viewport.name() === 'desktop') {
                    that.openMinicart(e, false, 'justAdded');
                }

                // set var so the cart reloads
                // and includes what was just added
                that.options.reloadCart = true;

                window.clearTimeout(closeTimerID);
                closeTimerID = window.setTimeout(function () {
                    that.options.$closeMinicart.trigger('click');
                }, closeDuration);
            });

            MessageBus.on('removeFromMinicart', function (e) {
                // set var so the cart reloads
                // only what was just added
                that.options.reloadCart = true;
            });
        },
        'openMinicart': function (e, overlayBool, renderType) {
            var that = this,
                mobileN = API.showMobileView('miniCartOverlay'),
                touch = Modernizr.touch;

            MessageBus.trigger('closeSearch.mar', e);

            if (!this.options.$trigger.hasClass('show-minicart')) {

                // If the reloadCart var is true
                // reload items in cart
                if (this.options.reloadCart === true) {

                    // Fix for - On editing items in Cart, Minicart didn't get update.
                    //this.options.reloadCart = false;

                    this.reloadItems(e, renderType);

                }

                if (overlayBool) {
                    this.options.$overlay.fadeIn(200);
                }

                if (!touch || !API.showMobileView('miniCartOverlay')) {
                    this.options.$trigger.addClass('show-minicart');
                }

            }

            // Quick close keys
            $('body').on('keydown', function escapePressClose(e) {

                if (e.which == 27) {
                    that.closeMinicart();
                }
            });

            // Close when clicking outside minicart
            this.options.$overlay.on('click', function closeMinicartOutsideClick() {
                that.closeMinicart();
            });
        },
        'closeMinicart': function () {
            var that = this;

            this.options.$trigger.removeClass('show-minicart');
            this.options.$overlay.fadeOut(200);

            $('body').off('keydown', that.escapePressClose);
            this.options.$overlay.off('click', that.closeMinicartOutsideClick);
        }
    });

    return ItemsView;
});

define('third-party/borderFree', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {
    'use strict';

    var _defaults = {};

    var BorderFree = function (customOptions) {
        this.options = $.extend(true, {}, _defaults, customOptions);
        this.init();
        this.attachEvenets();
    };


    BorderFree.prototype.init = function () {

        var $changeDefaultCountry = $("#changeDefaultCountry");

        /* if borderfree is disabled, do nothing */
        if (API.endpoints.borderFreeConfig.enableState === false) {
            $(".mar-header-account-option").removeClass("bf-visuallyhidden");
            $("body").removeClass("borderfree-enabled international-context");
            $changeDefaultCountry.parent("li").addClass("visuallyhidden");
            return;
        }
        if ($("body").hasClass("secureFrame")) {
            return;
        }
        var that = this,
            config = API.endpoints.borderFreeConfig,
            defaultCountry = config.defaultCountry;

        this.contextCookieText = API.readCookie(config.contextCookie);

        /* if borderfree is enabled, country flag & name will be displayed on global header */
        $changeDefaultCountry.parent("li").removeClass("visuallyhidden");
        $("body").addClass("borderfree-enabled");
        /* if context cookie is set and has some value */
        if (this.contextCookieText && /^\s*$/.test(this.contextCookieText) === false) {

            var contextCookieValue = this.contextCookieText.split("|");


            /* if context country is not US (case-insensitive comparision) */
            if (contextCookieValue[0].match(new RegExp(defaultCountry, "i")) === null) {
                var headerCountryFlagSRC = $changeDefaultCountry.find("img").attr("src");
                /* changing the flag image and name to context country values */
                if (headerCountryFlagSRC) {
                    $changeDefaultCountry.find("img").attr({
                        "src": headerCountryFlagSRC.replace("/" + defaultCountry + ".", "/" + contextCookieValue[0] + "."),
                        "alt": contextCookieValue[0]
                    });
                    $changeDefaultCountry.find(".header-country").text(contextCookieValue[1]);
                }

                /* adding international-context class for international context user */
                $("body").addClass("international-context");
            }

            else {
                $(".mar-header-account-option").removeClass("bf-visuallyhidden");
            }
        }
        else {
            $(".mar-header-account-option").removeClass("bf-visuallyhidden");
        }
    };


    BorderFree.prototype.attachEvenets = function () {
        var that = this;

        MessageBus.on("bfContextChooserModalOpenEvent", function ($modalContent) {

            if (that.contextCookieText && /^\s*$/.test(that.contextCookieText) === false) {
                var contextCookieValue = that.contextCookieText.split("|");

                $("#bf-country option").removeProp("selected").filter("[value=" + contextCookieValue[0] + "]").prop("selected", true);
                $("#bf-currency option").removeProp("selected").filter("[value=" + contextCookieValue[2] + "]").prop("selected", true);
                if (contextCookieValue[0] === API.endpoints.borderFreeConfig.defaultCountry) {
                    $modalContent.find(".update-btn").attr("disabled", "disabled");
                }
            }

            $modalContent.find(".mar-select").customSelect();

            $modalContent.on("change", "#bf-country", function () {
                var $selectedOption = $(this).find("option:selected"),
                    defaultCurrency = $selectedOption.data("default-currency");

                if ($selectedOption.val() === API.endpoints.borderFreeConfig.defaultCountry) {
                    $modalContent.find(".update-btn").prop("disabled", true);
                }
                else {
                    $modalContent.find(".update-btn").prop("disabled", false);
                }

                if (defaultCurrency) {
                    $("#bf-currency").val(defaultCurrency).trigger("change");
                }
            });

        });

        $("body").on("click", "#notshipLink a", function (e) {
            e.preventDefault();
            TINY.box.hide();
            $("#changeDefaultCountry").trigger("click");
            $("body").removeClass("no-scroll");
        });
        $("body").on("click", "#tinycontent #closeButton, #tinycontent #button button", function (e) {
            $("body").removeClass("no-scroll");
        });

    };

    return new BorderFree();

});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq, Modernizr*/

define('mainNav', [
    'api',
    'MessageBus',
    'miniCartItemsView',
    'miniCartCollection',
    './third-party/borderFree'
], function (API,
             MessageBus,
             MiniCartItemsView,
             MiniCartCollection,
             BorderFree) {

    'use strict';
    var pluginName = "mainNav",
        defaults = {
            'level1': '.asc-main',
            'level2': '.asc-subnav',
            'level3': '.asc-subsub',
            'mainNav': '.mar-main-nav',
            'mainNavTop': 0,
            'timerId': '',
            'timerId2': '',
            'navOpen': false,
            'minicartOpen': false,
            'scrolling': false,
            'ticking': false,
            'scrollTreshold': 160, // -1 makes nav always sticky
            'stickyHeight': 90,
            'latestKnownScroll': 0,
            'navCollapsed': false,
            'promoSize': 0,
            'promoActive': false,
            'searchActive': false,
            'cache': {
                'mainNav': {}
            },
            'header': {
                '$headerEl': "",
                'stickyActiveClass': 'sticky-nav-active'
            }
        };

    function MainNav(element, options) {
        this.element = element;
        this.$el = $(element);
        this.options = $.extend(true, {}, defaults, options);

        this.init();
        // this was put back in because our script for back to top button needs it
        this.setupScroll();
    }


    MainNav.prototype.init = function () {
        var that = this,
            $secondaryNav, $marLogo,
            $body = $('body');

        this.options.header.$headerEl = $("header.sticky-nav");
        $marLogo = this.options.header.$headerEl.find(".mar-logo img");

        $secondaryNav = this.options.header.$headerEl.find("nav.secondary-navigation:not(.ignore)");

        if ($secondaryNav[0]) {
            this.options.header.$headerEl.removeClass("secondary-navigation-off").addClass("secondary-navigation-on");
        }

        // setup cache
        this.options.cache.mainNav = this.$el.children('.mar-header-main');
        this.options.mainNavTop = parseInt(this.options.cache.mainNav.css('top'), 10);

        this.attachEvents();

        // check the nav
        this.options.latestKnownScroll = $(document).scrollTop();

        //get correct scrollTreshold
        //this.options.scrollTreshold = this.getScrollTreshold();
        //$('.'+this.options.header.$headerEl).height($('.'+this.options.cache.mainNav).height());
        if (API.viewport.name() === 'desktop') {
            // Added a fix for Safari where Header Height was getting calculated wrong at first time because Logo Image was taking time to load.
            $marLogo.one("load", function () {
                that.options.header.$headerEl.height(that.options.cache.mainNav.outerHeight());
            }).each(function () {
                if (this.complete) {
                    $(this).load();
                }
            });
        }

        if (API.isRIO === false) {
            this.miniCartCollection = new MiniCartCollection();

            // Call the view to display empty cart
            that.minicartView = new MiniCartItemsView({
                'el': '.mar-minicart-list',
                'collection': that.miniCartCollection
            });

            MessageBus.on('minicartOpened', function () {
                window.clearTimeout(that.options.timerId);
                //hide overlay
                that.removeSubnav(true);
            });
        }
        that.setupMobilelink();
        that.setupMobileNavScroll();

        // on page load load mobile nav if device is mobile or tab
        if (API.viewport.name() === 'mobile' || API.viewport.name() === 'tab' || Modernizr.touch) {
            that.mobileNavigation();
        } else {
            that.headerPromoImage();
        }

        if ($body.has(this.options.header.$headerEl).length !== 0) {
            $body.addClass('stickyNavigation');
        }


    };

    MainNav.prototype.attachEvents = function () {
        var that = this;

        /* nav */

        if (API.viewport.name() === 'desktop') {
            that.desktopFlyOut();
            that.desktopDropdown();
        }

        // Resize header component
        MessageBus.on('viewport.change', function () {
            var that = this;

            // Reque the execution to ensure it runs as last listener for viewport.change
            setTimeout(function () {
                that.options.header.$headerEl.height(that.options.cache.mainNav.outerHeight());
            }, 0);


        }, this);

        if (API.endpoints.responsive.mobileSearch !== 'undefined') {
            MessageBus.on('viewport.change', function (e) {
                var viewport = e.new; // can be mobile, tab or desktop

                if (viewport === 'mobile' || viewport === 'tab') {
                    that.mobileNavigation();
                }
                else {
                    that.desktopFlyOut();
                }
            }, that);
        }

        //this.mobileNavigation();
        // Event for mobile devices

        // promo height
        MessageBus.on('promoHeight.mar', function (data) {
            if (data > 0) {
                that.options.promoSize = data;
                that.options.promoActive = true;
                that.options.scrollTreshold = that.options.scrollTreshold + data;
            } else {
                that.options.promoActive = false;
                that.options.scrollTreshold = that.options.scrollTreshold - that.options.promoSize;
            }
            // update our element
            //that.updateLayout(data);

        });

        MessageBus.on('closeSearch.mar', function (e) {
            if (that.options.searchActive === true) {
                // switch a class
                $('.mar-search-button').removeClass('search-active');
                // switch a class on out drop item
                that.$el.find('.mar-flyout-search').removeClass('show-search');
                that.options.searchActive = false;
                that.hideOverlay('body');

                $('body').off('click', this.closeSearchBar);
            }
        });

        // search functionality
        // TODO: optimize this script

        // 3/25/2015 - the code is disabled because search no longer needs overlay or dropdown flyout

        // this.$el.on('click', '.mar-search-button', function(e){
        // 	e.preventDefault();

        // 	if (that.options.searchActive === false){
        // 		// switch a class
        // 		$(e.currentTarget).addClass('search-active');
        // 		// switch a class on out drop item
        // 		that.$el.find('.mar-flyout-search').addClass('show-search');
        // 		that.$el.find('.mar-search-input').val('');
        // 		that.$el.find('button').attr('disabled','disabled');
        // 		that.options.searchActive = true;
        // 		that.$el.find('.fld-input').focus();
        // 		that.showOverlay(e,'body');

        // 		$('body').on('click', function closeSearchBar(e) {
        // 			var searchContainer = $('.mar-nav-section');

        // 			if( !searchContainer.is(e.currentTarget) && searchContainer.has(e.target).length === 0 ){
        // 				MessageBus.trigger('closeSearch.mar', e);
        // 			}
        // 		});
        // 	}else{
        // 		MessageBus.trigger('closeSearch.mar', e);
        // 	}
        // });
        // cancel search
        this.$el.on('click', '.cancel-search', function (e) {
            that.options.searchActive = false;
            that.$el.find('.mar-search-button').removeClass('search-active');
            // switch a class on out drop item
            that.$el.find('.search-drop').removeClass('show-search');
        });


    };

    MainNav.prototype.desktopDropdown = function () {
        var that = this;
        this.$el.find('.mar-header-dropdown-container').on('mouseenter focusin', function (e) {
            $(this).addClass('activeDrop');
        }).on('mouseleave focusout', function (e) {
            $(this).removeClass('activeDrop');
        });
    };
    MainNav.prototype.desktopFlyOut = function () {


        var that = this,
            $navFlyOut = this.$el.find('.mar-nav > li');
        $navFlyOut.off('mouseenter.navFlyOut').on('mouseenter.navFlyOut focusin', function (e) {

            // clear timer
            if (that.options.timerId) {
                window.clearTimeout(that.options.timerId);
            }
            // setup other timer only if search is not active
            if (that.options.searchActive === false) {

                // a way to delay opening of the menu
                if (that.options.navOpen === false) {
                    // setup timer
                    that.options.timerId2 = window.setTimeout(function () {
                        that.openSubnav(e);
                    }, 300);
                } else {

                    that.openSubnav(e);
                }
            }
        });

        $navFlyOut.off('mouseleave focusout').on('mouseleave focusout', function (e) {

            // remove delay timer
            if (that.options.timerId2) {
                window.clearTimeout(that.options.timerId2);
            }
            // setup timer
            that.options.timerId = window.setTimeout(function () {
                that.removeSubnav();
            }, 600);
        });
    };

    MainNav.prototype.mobileNavigation = function () {
        var that = this,
            hamburger = '.mar-header-hamburger-menu',
            gHeader = '.asc-global-header',
            myActCon = '.asc-my-account-mobNav',
            $gHeader = $(gHeader),
            $mNav = $('.mar-nav'),
            $mNavSate = false;


        // mobile header search - Add class on click of search icon.
        this.$el.find('.mar-header-account-container').off('click.mobileSearch').on('click.mobileSearch', '.icon-search', function (e) {
            that.$el.toggleClass('mob-search-active');
            if (!($('.sticky-nav.secondary-navigation-off').hasClass('mob-search-active'))) {
                var header = $(".asc-sticky-nav-container");
                setTimeout(function () {
                    $(".mar-plp-filters-container").css("top", header.outerHeight());
                    if ($(".stickCatSort").length) {
                        $(".mar-sort-holder").css("top", $('.mar-plp-filters-container').css('top'));
                    }
                }, 400);
            }
        });

        // To add a class on body on for expended menu on click of hamburger.
        this.$el.find(gHeader).off('click.mobileHamburger').on('click.mobileHamburger', hamburger, function (e) {
            e.preventDefault();
            var $body = $('body'),
                windowHeight = $(window).outerHeight();
            $body.css({
                overflow: "hidden"
            });
            $body.toggleClass('mob-menu-expended');
            $mNavSate = !$mNavSate;
            //MessageBus.trigger("indicator.show");
            $('.mar-body-overlay').show();
            if ($body.hasClass('mob-menu-expended')) {
                $body.css('height', windowHeight);
            }

        });

        //Hide mobile navigation.
        $('body').off('click.modalHolder').on('click.modalHolder', '.mar-body-overlay', function (e) {
            e.preventDefault();
            var $body = $('body');
            $body.removeClass('mob-menu-expended');
            window.setTimeout(function () {
                $body.css({
                    overflow: "visible"
                });
            }, 500);
            //MessageBus.trigger("indicator.hide");
            $('.mar-body-overlay').hide();
        });
        //asc-global-mobile-nav
        $mNav.off('click.navBehavior').on('click.navBehavior', 'a.asc-nav-category', function (e) {
            e.preventDefault();
            $(this).closest('.mar-subnav').addClass('sub-nav-active');
            $(this).closest('ul').removeClass('my-acount-active');
            $(this).closest('li').addClass('active').end().closest('ul').addClass('category-level');
            //clear child elemnet active state if parent is not active
            if ($(this).parent('li').find('li').hasClass('active')) {
                $(this).parent('li').find('ul.category-level').removeClass("category-level").find('li').removeClass("active");
            }
        });

        $gHeader.off('click.navBehavior1').on('click.navBehavior1', 'a', function (e) {
            if ($(this).hasClass('mar-modal-trigger')) {
                var $body = $("body");
                $body.removeClass('mob-menu-expended');
                $('.mar-body-overlay').hide();
                window.setTimeout(function () {
                    $body.css({
                        overflow: "visible"
                    });
                }, 500);
            }
        });

        $mNav.off('click.removeNavBehavior').on('click.removeNavBehavior', '.active>a.asc-nav-category, .active>.mar-header-dropdown-container>a.asc-nav-category', function (e) {
            $mNav.find('.sub-nav-active').removeClass('sub-nav-active');
            $(this).closest('li').removeClass('active').end().closest('ul').removeClass('category-level');
        });
        $gHeader.off('click.acctNavBehaviour').on('click.acctNavBehaviour', '.mobile-user-signed-in>a', function (e) {
            $(this).parents(myActCon).toggleClass('accActive');
            that.$el.toggleClass('my-accActive-active');

            var $getMyActHeight = $(myActCon).outerHeight();
            //$('.mar-nav').css('margin-top', $getMyActHeight);
        });

    };

    MainNav.prototype.setupMobileNavScroll = function () {
        var that = this,
            mobileNav = API.showMobileView('mobileHeader'),
            $viewPrtHight = $(window).height(),
            $trgtCon = $('.asc-mar-nav-con'),
            myActCon = '.asc-my-account-mobNav',
            $getMyActHeight = $(myActCon).outerHeight(),
            $body = $('body'),
            $globalWrapper = $('.asc-global-wrapper');

        if (mobileNav) {
            $trgtCon.height($viewPrtHight - $getMyActHeight);
            $trgtCon.css('margin-top', $getMyActHeight);
        }

        MessageBus.on('viewport.resize', function (size) {
            var mobileN = API.showMobileView('mobileHeader'),
                $vwPrtHgt = $(window).height();

            if (mobileN) {

                $trgtCon.height($vwPrtHgt - $getMyActHeight);
                $trgtCon.css('margin-top', $getMyActHeight);
                $('.mob-menu-expended .mar-body-overlay').show();
                /* LB | ART-6374 */
            } else {
                $trgtCon.height('auto');
                $trgtCon.css('margin-top', '');
                $('.mar-body-overlay').hide();
                /* LB | ART-6374 */
            }

            // Calculating main Content height again
            if ($body.hasClass('mob-menu-expended')) {
                $body.css('height', $vwPrtHgt);
            }
        });
    };

    MainNav.prototype.setupMobilelink = function () {
        var that = this,
            $topNavlinks = $('.asc-level1-con > ul > li').clone(),
            $signInLink = $('.asc-user-signed-out>a').clone(),
            $topNevLnTrgtCon = $('.mar-nav'),
            $signInLinkTrgtCon = $('.asc-my-account-mobNav .mobile-user-signed-out');


        if (API.viewport.name() === 'mobile' || API.viewport.name() === 'tab') {
            $topNevLnTrgtCon.append($topNavlinks);
            $signInLinkTrgtCon.prepend($signInLink);
        }


        if (API.endpoints.responsive.mobileSearch !== 'undefined') {
            MessageBus.on('viewport.change', function (e) {
                var viewport = e.new; // can be mobile, tab or desktop

                if (viewport === 'mobile' || viewport === 'tab') {
                    $topNevLnTrgtCon.append($topNavlinks);
                    $signInLinkTrgtCon.prepend($signInLink);
                    /*ART-9326*/
                    if ($("html").hasClass("nav-open")) {
                        $(".stickyNavigation").addClass("mob-menu-expended");
                        $("ul.category-level > li.active").removeClass("active").removeClass("show-subnav");
                        if ($("ul.category-level > li.show-subnav").length) {
                            $("ul.category-level > li.show-subnav").addClass("active");
                        }
                    }

                }
                else if (viewport === 'desktop') {
                    $topNavlinks.detach();
                    if ($(".stickyNavigation").hasClass("mob-menu-expended")) {
                        if ($("ul.category-level > li.active").length) {
                            $("ul.category-level > li.active").addClass("show-subnav");
                        }
                    } else {
                        $("ul.category-level > li.active").removeClass("show-subnav");
                    }
                }
            });
        }
    };
    MainNav.prototype.headerPromoImageResize = function () {
        var that = this,
            $getElLength = $('header.mar-header .nav-promo-img');
        MessageBus.on('viewport.change', function (e) {
            var viewport = e.new; // can be mobile, tab or desktop
            if (viewport === 'desktop') {
                that.headerPromoImage();
            }
        });
    };


    MainNav.prototype.headerPromoImage = function () {
        var $getElLength = $('header.mar-header .nav-promo-img');
        $getElLength.each(function (index) {
            var $imgUrl = $(this).data('promo-image');
            $(this).attr("src", $imgUrl);
        });
    };


    // setup the scroll event
    MainNav.prototype.setupScroll = function () {
        var that = this;
        MessageBus.on("pageScrollTrgger.global", function (e) {
            that.options.latestKnownScroll = $(e.currentTarget).scrollTop();
            if (that.options.latestKnownScroll >= that.options.scrollTreshold) {
                that.options.header.$headerEl.addClass(that.options.header.stickyActiveClass);
                MessageBus.trigger('mainNavSticky.mainNav', true);

            } else if (that.options.latestKnownScroll < that.options.scrollTreshold) {
                that.options.header.$headerEl.removeClass(that.options.header.stickyActiveClass);
                MessageBus.trigger('mainNavSticky.mainNav', false);
                if ($('body').find('.plpMobileView')[0]) {
                    MessageBus.trigger('reCalculateCategoryFilterTop');
                }
            }
            that.options.scrolling = true;
            that.requestTick();
        });
    };

    MainNav.prototype.requestTick = function () {
        var that = this;

        if (!this.options.ticking && that.options.scrolling === true) {
            // window.requestAnimationFrame(function(){
            // 	that.update();
            // });
            setInterval(function () {
                // animiate something
                that.update();
            }, 1000 / 60);
        }
        this.options.ticking = true;
        that.options.scrolling = false;
    };

    //
    MainNav.prototype.update = function () {
        var that = this;

        if (!this.options.ticking && that.options.scrolling === true) {
            window.requestAnimationFrame(function () {
                that.update();
            });
        }

        this.options.ticking = false;
        that.options.scrolling = false;
    };

    // this closes subnav
    MainNav.prototype.removeSubnav = function (onlyHideNav) {
        // remove two classes
        this.$el.find('.show-subnav').removeClass('show-subnav');
        $("html").removeClass("nav-open");
        this.options.navOpen = false;

        if (!onlyHideNav) {
            //hide overlay
            this.hideOverlay();
        }
    };

    // open subnav function
    MainNav.prototype.openSubnav = function (e) {
        this.$el.find('.show-subnav').removeClass('show-subnav');
        //Set the height at which subnav-flyout appears
        var subnav = $(e.currentTarget),
            subnavFlyout = subnav.find('.mar-subnav');
        //ALM - 1055
        if (API.viewport.name() === 'desktop') {
            subnavFlyout.css("top", (subnav.outerHeight() + subnav.offset().top - (subnavFlyout.offsetParent()).offset().top) + "px");
        }


        subnav.addClass('show-subnav');
        $("html").addClass("nav-open");
        this.options.navOpen = true;
        //show overlay
        $(".asc-predictive-search-dropdown").addClass('visuallyhidden');
        this.showOverlay(e, 'body');

    };

    MainNav.prototype.showOverlay = function (e, specificModal) {
        if (specificModal === 'header' || specificModal === 'body') {
            $('.mar-' + specificModal + '-overlay').show();
        } else {
            $('.mar-overlay').show();
        }
    };

    MainNav.prototype.hideOverlay = function (e) {
        $('.mar-overlay').hide();
    };

    //check if the promo is display and recalculate scrollTreshold
    MainNav.prototype.getScrollTreshold = function () {
        var height = this.options.scrollTreshold;
        var $promo = this.$el.parent().children('.mar-header-promo');
        if ($promo.hasClass('.closed')) {
            //no header promo
            height = this.$el.height() - this.options.stickyHeight;
        }
        else {
            //header promo
            height = this.$el.height() + $promo.height() - this.options.stickyHeight;
        }

        // Cart skinny nav threshold is after the promo height
        // UPDATE: this has be removed
        // var $cartPromo = $('.mar-cart-header-promo');
        // if($cartPromo.length > 0){
        //     // height += ;
        //     height = this.$el.height() + $promo.height() + $cartPromo.height();
        // }

        //height = 73;
        return height;
    };


    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new MainNav(this, options));
            }
        });
    };

});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq, Modernizr*/
define('../../imports/scripts/components/global/header', [
    'api',
    'MessageBus',
    'loginForgetPassword'
], function (API,
             MessageBus,
             LoginForgetPassword) {
    'use strict';

    //defaults for use throughout the footer
    var _defaults = {
        'selectors': {
            'header': '.db-global-header, .mar-header',
            'mainNav': '.db-main-nav, .mar-nav',
            'smartSearch': '.db-header-search-form',
            'userSignedOut': '.asc-user-signed-out',
            'userSignedIn': '.db-user-signed-in, .asc-user-signed-in',
            'mobUserSignedOut': '.mobile-user-signed-out',
            'mobUserSignedIn': '.mobile-user-signed-in',
            'mobUserName': '.asc-MobUser-name',
            'userName': '.asc-user-name',
            'userPoints': '.asc-user-points',
            'subNav': '.db-nav-list .db-subnav, .mar-flyout-container',
            'contactUs': '.mar-contact-container',
            'styleAdvisor': '.asc-advisor',
            'customerService': '.asc-customer-service',
            'favoritesCount': '.fav-count'
        },
        'actions': {
            'getUserState': 'Header.userState',
            'getChatData': 'Header.getChat',
            'forgotPassword': 'AM.forgetPassowrd'
        },
        'ajaxURL': '/assets/feeds/header.php',
        'ajaxBreakPoint': 450,
        'hasChatFlyout': false,
        'useEmbeddedJSON': false
    };

    var Header = function () {
        console.info('header - not local');
    };

    /**
     * init
     * @return {[type]} [description]
     */
    Header.prototype.init = function (customOptions) {
        var that = this;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);


        if ($(this.options.selectors.header).length > 0) {
            this.$el = $(this.options.selectors.header);

            this.$navItems = $(this.options.selectors.mainNav + ', .db-shop-size-nav,' + this.options.selectors.header).find('> li');
            this.subNavLoaded = false;
            this.getUserState();
            this.isAOSCustomerSession();

            var userInfo = API.getUserState();

            $.when(userInfo).then(function (data) {
                that.userObj = data;
            });

            if (this.options.hasChatFlyout === true) {
                //  this.processChatFlyout();
            }

            this.setupEnsightenTrackingEvents();
            this.attachEvents();
            // this.flyoutToggle($(window).width());
        }

        //add smart search plugin to the header search form
        //console.log('smart-search: ',$(this.options.selectors.smartSearch));
        $(this.options.selectors.smartSearch).smartSearch();


        if (API.isRIO === false) {
            var loginForgetPassword = new LoginForgetPassword();
            loginForgetPassword.init();
        } else {
            this.$el.find('.asc-user-signed-out .mar-modal-trigger').removeClass('mar-modal-trigger');
            this.$el.find('.asc-email-signup-link').removeClass('mar-modal-trigger');
        }
    };

    // Store associate header stuff
    Header.prototype.AOS = function () {
        // if associate session
        if ($('body').hasClass('aos')) {

            // check if associate has associateId and storeId
            if (this.userData.associateId && this.userData.storeId) {

                // Hide regular user experience and show AOS
                $('.asc-user-signed-in, .asc-user-signed-out').hide();

                var assocIdFormat = this.userData.associateId.substring(this.userData.associateId.length - 2);
                for (var i = 0; i < (this.userData.associateId.length - 2); i++) {
                    assocIdFormat = "*" + assocIdFormat;
                }

                //show AOS Signed In section and populate with correct data
                var $AOSSignedIn = $('.cmn-associate-signed-in');
                $AOSSignedIn.find('.asc-store-number').html(this.userData.storeId);
                $AOSSignedIn.find('.asc-associate-id').html(assocIdFormat);
                $AOSSignedIn.removeClass('visuallyhidden');

                // hide social in footer
                $('ul.mar-footer-social, .mar-footer-social-label').hide();

                //logout associate
                $('.cmn-header-aos-end-session').on('click', 'a', function (e) {
                    e.preventDefault();
                    console.log('AOS logout');
                    // TODO: send logout event to somewhere

                });
            }
        }
    };

    /*
     * Attach event listeners for Ensighten Tracking
     */
    Header.prototype.setupEnsightenTrackingEvents = function () {
        /*
         * Ensighten Tracking Start:
         * Event: featureEngagement:- When user clicks on Start Chat button
         */
        MessageBus.on('Header.chatEnsightenEvent', function () {
            var $rightNowContainer = $('li#header-styleAdvisorContainer');
            if ($rightNowContainer[0]) {
                $rightNowContainer.on('click', '.rn_ChatAvailable a', function (evt) {
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {"name": "featureEngagement"});
                });
            }
        });
        /*
         * Ensighten Tracking End
         */
    };

    Header.prototype.setupAgeGateSecured = function ($context) {
        var that = this,
            errorDiv = $context.find('.cmn-age-gate-error'),
            regBtn = $context.find('.mar-reg-btn'),
            formDiv = $context.find('.cmn-age-gate-form'),
            accountDiv = $context.find('.cmn-age-gate-account');

        if (this.userObj.userAgeGatedStatus === 'gated') {
            errorDiv.removeClass('cmn-agegate-hide');
            //errorDiv.find('p').html(this.userObj.ageGatedResponseMsg);

        } else if (this.userObj.userAgeGatedStatus === 'notgated') {
            formDiv.removeClass('cmn-agegate-hide');
            MessageBus.trigger("openAgeGatePopup", true);

        } else {
            $context.find('.asc-select').customSelect({'parsleyTrigger': 'change'});
            formDiv.removeClass('cmn-agegate-hide');
            accountDiv.removeClass('cmn-agegate-hide');
            regBtn.addClass('age-gate-no-ajax');
        }
    };

    //debounce the resize function and listen for when to load ajax
    Header.prototype.attachEvents = function () {
        var that = this,
            favoritesLength,
            tempSKULength,
            i,
            totalFavorites;

        //small debouncer method, may replace with something else
        var tinyDebouncer = _.debounce(function () {
            that.flyoutToggle();
        }, 400);


        $(window).resize(tinyDebouncer);

        MessageBus.on("changeUserState", function (state) {
            that.userObj.userAgeGatedStatus = state;
        });


        /*cart update*/
        MessageBus.on("API.CartUpdated", function (cart) {
            if (cart) {
                var cartLength = cart.length,
                    cartQty = 0;
                if (cartLength) {
                    for (var i = 0; i < cartLength; i++) {
                        cartQty = cartQty + cart[i].quantity;
                    }

                }
                $('.bag-count').html(cartQty);
            }
        });
        MessageBus.on("API.FavoritesUpdated", function (favorites) {
            if (favorites.length === 1 && $.isEmptyObject(favorites[0])) {
                favoritesLength = 0;
            }
            else {
                favoritesLength = favorites.length;
            }
            totalFavorites = favoritesLength;

            console.log("favorites header updated");

            //console.log(totalFavorites);

            /*for(i = 0; i < favoritesLength; i++) {
             if(favorites[i].skus !== null) {
             //if there are skus find out how many there are
             totalFavorites += favorites[i].skus.length;
             //subtract 1 for the product id. if there is a sku the product id would count it as 2 favorites.
             totalFavorites -= 1;
             }
             }*/

            that.$el.find(that.options.selectors.favoritesCount).html(totalFavorites);

        });

        MessageBus.on("header.EndSessionModal", function () {
            $('.asc-end-session-button').click(function () {
                MessageBus.trigger('modal.close');
            });

            $('.asc-continue-session-button').click(function (e) {
                e.preventDefault();
                MessageBus.trigger('modal.close');
            });
        });


        MessageBus.on('signinModalFiredEvent', function ($context) {

            $context.find('.mar-modal-trigger').modal();
            $context.find('.mar-registered-customer-form').parsley();
            that.setupAgeGateSecured($context);


        });

        MessageBus.on('createAccountOpen.modal', function ($context) {
            $context.find('.cmn-subfield-toggle').change(function toggleSubfield(e) {
                var $this = $(this);
                var $thisSubfield = $('#' + $this.attr('data-updatetype') + '-subfield');
                var $thisSubfieldToggle = $this.closest('.cmn-checkbox-container').find('.cmn-subfield-toggle-link');
                var $thisSubfieldParsley = $thisSubfield.parents('form').eq(0).parsley();

                if ($this.is(':checked')) {
                    $thisSubfield.removeClass(that.options.HIDDEN_CLASS_NAME)
                        .attr('data-activesubfield', true);
                    $thisSubfield.find('input, select').prop('disabled', false);
                    //$thisSubfieldToggle.text('Less Info.');
                } else {
                    $thisSubfield.addClass(that.options.HIDDEN_CLASS_NAME)
                        .attr('data-activesubfield', false)
                        .find('input, select')
                        .prop('disabled', true);

                    $thisSubfield.find('.' + that.options.PARSLEY_ERROR_CLASS_NAME)
                        .removeClass(that.options.PARSLEY_ERROR_CLASS_NAME);

                    $thisSubfield.find(that.options.PARSLEY_ERROR_LIST_SELECTOR)
                        .empty()
                        .removeClass(that.options.PARSLEY_ERROR_LIST_FILLED_CLASS_NAME);

                    //$thisSubfieldToggle.text('More Info.');
                }

                /*Commented owing to a regression issue of fix ALM 2717 due to which CREATE ACCOUNT fucntionality was breaking when
                                  *user selects the checkbox for 'Text message alerts and updates'
                                 */
                /* 
                                  $thisSubfieldParsley.destroy();
                                  $thisSubfieldParsley.validate();
                                 */

            });
        });

        MessageBus.trigger('Header.chatEnsightenEvent');
    };

    Header.prototype.getUserState = function () {
        var that = this,
            deferredObj = API.getUserState();

        $.when(deferredObj)
            .then(function (data) {
                that.updateUserState(data);
                // Is the user an associate
                that.AOS();
            });
    };

    Header.prototype.updateUserState = function (data) {
        var $userSignIn = this.$el.find(this.options.selectors.userSignedIn),
            $userSignOut = this.$el.find(this.options.selectors.userSignedOut),
            $mobUserSignIn = this.$el.find(this.options.selectors.mobUserSignedIn),
            $mobUserSignOut = this.$el.find(this.options.selectors.mobUserSignedOut),
            $mobUserName = $mobUserSignIn.find(this.options.selectors.mobUserName),
            $userName = $userSignIn.find(this.options.selectors.userName),
            $userPoints = $userSignIn.find(this.options.selectors.userPoints),
            $contactUs = this.$el.find(this.options.selectors.contactUs),
            template,
            touch = Modernizr.touch;

        this.userData = data.userData;

        if ($('#sign-in-template').length > 0) {
            template = _.template($('#sign-in-template').html());

            if (data.userData.userState && data.userData.userState === "Registered") {
                $userSignIn.html(template(data.userData));
            }
        } else {
            if (data.userData.userState && data.userData.userState === "Registered") {

                $userSignOut.hide();
                $mobUserSignOut.hide();//mobile
                $userName.html(data.userData.userFirstName).attr("title", data.userData.userFirstName);
                //insert user name in mobile
                $mobUserName.html(data.userData.userFirstName);
                $userPoints.html(data.userData.userPoints);
                $userSignIn.show();
                $mobUserSignIn.show();//mobile

                if (API.isRIO === true) {
                    $(this.options.selectors.header).find('.asc-account-links .mar-header-dropdown').remove();
                } else {
                    $(this.options.selectors.header).find('.asc-account-links .mar-header-dropdown-container > a').on('click', function () {
                        return false;
                    });
                }
                if (API.endpoints.responsive.mobileHeader !== 'undefined') {
                    MessageBus.on('viewport.change', function (e) {
                        var viewport = e.new; // can be mobile, tab or desktop
                        if (viewport === 'mobile' || viewport === 'tab') {
                            $mobUserSignOut.hide();//mobile
                            //insert user name in mobile
                            $mobUserName.html(data.userData.userFirstName);
                            $mobUserSignIn.show();//mobile
                        }
                    });
                }
                ;
            }
        }
        // Update cart number
        $('.bag-count').html(data.cartData.numberOfItems);
        //ALM-5143
        if (!touch || !API.showMobileView('miniCartOverlay')) {
            if (this.userData.mergeCart === true) {
                setTimeout(function () {
                    MessageBus.trigger('openMinicart');
                }, 2000);
            }
        }

    };

    Header.prototype.isAOSCustomerSession = function () {
        // check for cookie to see if we are in an AOS Customer Session
        var AOSCustomerSessionCookie = $.cookie('AOSCustomerSession');
        console.log(AOSCustomerSessionCookie);
        if (AOSCustomerSessionCookie === 'true') {
            $('.cmn-associate-signed-in .cmn-customer-session').show();
        } else {
            $('.cmn-associate-signed-in .cmn-customer-session').hide();
        }
    };

    Header.prototype.processChatFlyout = function () {
        var that = this,
            chatData;

        if ($('#chat-json').length > 0) {
            chatData = $.parseJSON($('#chat-json').html());
            // this.updateChatFlyout(chatData);
        }
    };

    Header.prototype.updateChatFlyout = function (data) {
        var $advisor = this.$el.find(this.options.selectors.styleAdvisor),
            $cs = this.$el.find(this.options.selectors.customerService);

        if (data.chatData.styleAdvisorOnline === "true") {
            $advisor.find(".asc-advisor-offline").hide();
            $('.mar-custom-advisor-trigger').modal();
        }

        if (data.chatData.customerServiceOnline === "true") {
            $cs.find(".asc-advisor-offline").hide();
            $('.mar-custom-cs-trigger').modal();
        }
    };

    Header.prototype.flyoutToggle = function () {
        var that = this,
            width = $(window).width();

        //if not on a mobile device make an ajax request to get the subnav.
        if (width > this.options.ajaxBreakPoint) {
            // Function not required anymore as subnav is not JSON driven

            // that.flyoutAnimation();

            //we only need the subnav content once.
            if (this.subNavLoaded === false) {

                if (this.options.useEmbeddedJSON === true) {
                    this.getSubNavViaEmbed();
                } else {
                    this.getSubNavViaAjax();
                }
            }

            //if the user plays with the screen, remove the 'hover' events.
        } else {
            this.removeEvents();
        }
    };

    //add flyout animation toggle to subnav
    Header.prototype.flyoutAnimation = function () {
        var that = this;

        if (API.viewport.name() === 'desktop') {
            this.$navItems.hover(
                function () {
                    $(this).addClass('active');
                },
                function () {
                    $(this).removeClass('active');
                });
        } else {
            this.$navItems.on('click', function (e) {
                var isLi = $(e.target).parent();

                // Take care of event Bubbling from L2 & L3 links
                if (isLi[0] === e.currentTarget) {
                    var $current = $(e.currentTarget);
                    if ($current.hasClass('hover')) {
                        console.log("move with link");
                        //return true;
                    } else {
                        $current.addClass('hover');
                        that.$navItems.not(this).removeClass('hover');
                        e.preventDefault();
                    }


                    /*if($current.hasClass('active')) {
                     alert("1");
                     that.$navItems.removeClass('active').removeClass('show-subnav');
                     $current.removeClass('active').removeClass('show-subnav');
                     $('.mar-body-overlay').hide();
                     } else {
                     alert("2");
                     that.$navItems.removeClass('active').removeClass('show-subnav');

                     $current.addClass('active');
                     $current.addClass('show-subnav');
                     $('.mar-body-overlay').show();
                     }*/
                }
            });
            $('.mar-body-overlay').on('click', function (e) {
                that.$navItems.removeClass('hover');
            });
        }
    };

    //remove hover event from flyout
    Header.prototype.removeEvents = function () {
        this.$navItems.off("mouseenter mouseleave");
    };

    //ajax request for subnav
    Header.prototype.getSubNavViaAjax = function () {
        var that = this,
            ajaxCall;

        ajaxCall = $.ajax({
                'url': API.endpoints.headerNav,
                'data': {
                    'Action': that.options.actions.getUserState
                }
            })
            .done(function (data) {
                that.populateSubNav(data);

                //once it's loaded we don't have to pull it in again
                that.subNavLoaded = true;
            })
            .fail(function (data) {
                console.log("could not reach end point");
            });
    };

    //ajax request for subnav
    Header.prototype.getSubNavViaEmbed = function () {
        var that = this,
            ajaxCall,
            data = null;

        if ($('#header-flyouts-json').length > 0) {
            data = $.parseJSON($('#header-flyouts-json').html());

            that.populateSubNav(data);
        }
    };

    Header.prototype.populateSubNav = function (data) {
        var $nav = this.$el.find(this.options.selectors.subNav),
            dataLength = data.data.nav.html.length;


        for (var i = 0; i < dataLength; i++) {
            $($nav.get(i)).html(data.data.nav.html[i]);
        }
    };

    //ajax request for subnav
    //
    /**
     *
     * Moved this fogotPassword call to loginForgetPassword.js as the same module we are using on stand alone login register page.
     *
     **/

    /*Header.prototype.forgotPasswordAjax = function(options, $context) {
     var that = this,
     ajaxCall;

     ajaxCall = $.ajax({
     'url' : API.endpoints.forgotPassword,
     'data': options
     }).done(function(response) {

     if(response.status === "success"){

     $context.find('.mar-request-password-reset-container')
     .fadeOut(function (){
     $context.find('.mar-signup-disclaimer').text(response.data.successMessage);
     // After the form hides, display the confirm
     $context.find('.mar-request-password-reset-confirm').fadeIn();
     });
     }
     else{
     $context.find('.asc-error-after-call').text(response.data.errorMessage);
     }

     }).fail(function(response) {
     console.log("could not reach end point");
     });
     };*/

    return new Header();
});


/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('../../imports/scripts/components/global/breadcrumbs', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {
    'use strict';

    //defaults for use throughout the footer
    var _defaults = {
        'selectors': {
            'breadcrumbContainer': '.asc-breadcrumbs, .db-breadcrumbs'
        },
        'breadcrumblist': []
    };

    var Breadcrumbs = function () {
    };

    /**
     * init
     * @return {[type]} [description]
     */
    Breadcrumbs.prototype.init = function (customOptions) {
        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        this.$breadcrumbContainer = $(this.options.selectors.breadcrumbContainer);

        if (this.$breadcrumbContainer.length > 0) {
            this.clearContainer();
            this.requestBreadcrumbData();
        }

    };

    Breadcrumbs.prototype.clearContainer = function () {
        this.$breadcrumbContainer.empty();
    };

    Breadcrumbs.prototype.buildElements = function () {
        var $breadcrumbContainer = this.$breadcrumbContainer;
        var breadcrumbList = this.options.breadcrumblist;
        var $listItem = $('<li data-breadcrumb="/"/>');
        var $anchorLink = $('<a/>');
        var i = 0;

        for (i; i < breadcrumbList.length; i++) {
            if (breadcrumbList[i].url) {
                $breadcrumbContainer.append(
                    $listItem.clone()
                        .append(
                            $anchorLink.clone()
                                .attr('href', breadcrumbList[i].url)
                                .html(breadcrumbList[i].displayName)
                        )
                );
            } else {
                $breadcrumbContainer.append(
                    $listItem.clone()
                        .append(breadcrumbList[i].displayName)
                );
            }
        }
    };

    //request the data from API and update the breadcrumbs only when the promise has been resolved
    Breadcrumbs.prototype.requestBreadcrumbData = function () {
        var that = this,
            deferredObj = API.getUserState();

        $.when(deferredObj)
            .then(function (data) {
                that.updateBreadcrumbList(data);
            });
    };

    Breadcrumbs.prototype.updateBreadcrumbList = function (data) {
        var that = this;
        var breadcrumbs = data.breadCrumbData;
        var breadcrumbList = that.options.breadcrumblist;
        var i = 0;

        // Set Breadcrumblist length
        breadcrumbList.length = breadcrumbs.length;

        // Set the correct order of breadcrumbs
        // and save to the class's option
        for (i; i < breadcrumbs.length; i++) {
            breadcrumbList[breadcrumbs[i].position] = breadcrumbs[i];
        }

        // Update breadcrumblist option
        // cleaning out falsey values
        that.options.breadcrumblist = _.compact(breadcrumbList);

        // Build out the dom elements
        that.buildElements();
    };

    return new Breadcrumbs();
});
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('../../imports/scripts/components/global/emailSignup', [
    'api',
    'MessageBus',
    'emailValidator'
], function (API,
             MessageBus,
             EmailValidator) {
    'use strict';

    //defaults for use throughout the footer
    var _defaults = {
            'selectors': {
                'secureIFrame': '#secureAuth'
            },
            'userInfo': {}
        },
        $secureFrame = [];

    var EmailSignup = function () {
    };
    /**
     * init
     * @return {[type]} [description]
     */
    EmailSignup.prototype.init = function (customOptions) {
        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        var that = this;
        var HIDDEN_CLASS_NAME = 'visuallyhidden',
            PARSLEY_ERROR_CLASS_NAME = 'parsley-error',
            PARSLEY_ERROR_LIST_FILLED_CLASS_NAME = 'filled',
            PARSLEY_ERROR_LIST_SELECTOR = '.parsley-errors-list';
        var timeout, timeoutn;

        // start up our emailvalidator
        this.options.validator = new EmailValidator();

        MessageBus.on('emailSignupOpen.Modal', function onEmailSignupModalOpen(context) {
            $secureFrame = context.find(that.options.selectors.secureIFrame);
            if ($secureFrame[0]) {
                return;
            }
            if (window.picturefill) {
                window.picturefill();
            }

            if (typeof $.fn.lazyload !== "undefined") {
                $("img.lazy-load").lazyload({
                    skip_invisible: false,
                    threshold: 200,
                    failure_limit: 15
                });
            }
            // Run parsley on the form
            context.find('form')
                .parsley({excluded: ':disabled'})
                // Ensure all subfields are displayed
                // on validation error
                .subscribe('parsley:form:validated', function (e) {
                    if (!e.validationResult) {
                        $('[data-activesubfield="true"]')
                            .removeClass(HIDDEN_CLASS_NAME)
                            .closest('.cmn-form-element')
                            .find('.cmn-subfield-toggle-link').text('less...');
                    }
                });

            // Set up Custom Select fields
            //ART-3775 | adding options in custom select so that it work properly
            //context.find('.mar-select').customSelect();
            //ALM-5313 fix-Prevent the validation to happen only for email signup-Join our list
            context.find('.mar-select').customSelect({'parsleyTrigger': ''});

            // Add 'SubField' toggle functionality to 'Email Updates' section
            context.find('.cmn-subfield-toggle').change(function toggleSubfield(e) {
                console.log(this);
                var $this = $(this);
                var $thisSubfield = $('#' + $this.attr('data-updatetype') + '-subfield');
                var $thisSubfieldToggle = $this.closest('.cmn-checkbox-container').find('.cmn-subfield-toggle-link');
                $thisSubfield.find('input,select').parsley().destroy();

                if ($this.is(':checked')) {
                    $thisSubfield.find('input,select').parsley();
                    $thisSubfield.removeClass(HIDDEN_CLASS_NAME)
                        .attr('data-activesubfield', true);
                    $thisSubfield.find('input, select').prop('disabled', false);

                    //$thisSubfieldToggle.text('less...');
                } else {
                    $thisSubfield.addClass(HIDDEN_CLASS_NAME)
                        .attr('data-activesubfield', false)
                        .find('input, select')
                        .prop('disabled', true);

                    /* $thisSubfield.find('.'+PARSLEY_ERROR_CLASS_NAME)
                     .removeClass(PARSLEY_ERROR_CLASS_NAME);
                     $thisSubfield.find(PARSLEY_ERROR_LIST_SELECTOR)
                     .empty()
                     .removeClass(PARSLEY_ERROR_LIST_FILLED_CLASS_NAME);*/

                    //$thisSubfieldToggle.text('more...');
                }

            });


            // AJAX call for age gate - Justice
            $(".mar-email-signup-modal").on('change keydown', '#birthdayMonth,#birthdayYear', function (e) {
                if (API.endpoints.ageGateOpen === true) {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    if (e.type === 'keydown') {
                        that.eventCounter = 1;
                    }

                    console.log('event is ' + that.eventCounter);
                    var monthVal = $("#mar-email-signup").find('#birthdayMonth').val(),
                        yearVal = $("#mar-email-signup").find('#birthdayYear').val();

                    if (monthVal !== "" && yearVal !== "") {
                        if (that.eventCounter === 1) {
                            timeout = setTimeout(function () {
                                $("body").find('.asc-custom-drop-content').removeClass('asc-show');
                                that.doAjaxJoinList(monthVal, yearVal);
                            }, 3000);
                        } else {
                            that.doAjaxJoinList(monthVal, yearVal);
                        }
                    }
                }

            });


            $("#signup-email-address").keyup(function () {
                // JU Fix ART-7661 - Narahari
                $('#signup-email-address').parsley().destroy();
                /*$('.signup-email-address-error').find(PARSLEY_ERROR_LIST_SELECTOR)
                 .empty()
                 .removeClass(PARSLEY_ERROR_LIST_FILLED_CLASS_NAME);*/
            });

            $("#signup-email-address").focusout(function () {
                // JU Fix ART-7661 - Narahari
                $('#signup-email-address').parsley().validate();
            });

            $.listen('parsley:field:error', function (e) {
                // This global callback will be called for any field that fails validation.
                var eventData = {};


                if (!timeoutn) {
                    timeoutn = setTimeout(function () {

                        var $nodeList = $("#mar-email-signup .parsley-error"),
                            errorArray = [],
                            i = 0;

                        for (i = 0; i < $nodeList.length; i++) {
                            errorArray.push($($nodeList[i]).data('parsley-error-message'));
                        }

                        eventData = {"formName": "emailSignup", "formErrors": errorArray};
                        $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);

                        timeoutn = undefined;
                    }, 200);
                }


            });

            /* context.find('#birthdayMonth').on('change', function(){
             clearTimeout(timeout);
             var timeout = setTimeout(function(){
             var monthVal = context.find('#birthdayMonth').val(),
             yearVal = context.find('#birthdayYear').val();

             if( monthVal !== "" && yearVal !== "" ) {
             that.doAjaxJoinList(monthVal, yearVal);
             }
             }, 3000);
             });

             context.find('#birthdayYear').on('change', function(){
             clearTimeout(timeout);
             var timeout = setTimeout(function(){
             var monthVal = context.find('#birthdayMonth').val(),
             yearVal = context.find('#birthdayYear').val();
             if( monthVal !== "" && yearVal !== "" ) {
             that.doAjaxJoinList(monthVal, yearVal);
             }
             }, 3000);
             }); */

            var userInfo = API.getUserState();

            $.when(userInfo).then(function (data) {
                console.log("User Data: ", data);
                that.userObj = data;
                console.log("888888");
                that.setupAgeGateSecuredJoinList();
            });

            // Add 'more...' dynamic toggle functionality to 'Email Updates' section

            context.find('.cmn-subfield-toggle-link').on('click', function linkToggleSubfield() {
                var $this = $(this);
                var $thisSubfield = $('#' + $this.attr('data-updatetype') + '-subfield');

                if ($thisSubfield.hasClass(HIDDEN_CLASS_NAME)) {
                    $thisSubfield.removeClass(HIDDEN_CLASS_NAME);
                    $this.text('less...');
                } else {
                    $thisSubfield.addClass(HIDDEN_CLASS_NAME);
                    $this.text('more...');
                }
            });

        });

        //Submit Email Signup
        MessageBus.on('emailSignupOpen.Modal', function triggerSubmitOfForm(context) {
            $secureFrame = context.find(that.options.selectors.secureIFrame);
            if ($secureFrame[0]) {
                return;
            }
            var $emailSignup = context.find('form');
            $emailSignup.find('#mar-signup-mobile-number').prop({'disabled': true});
            $emailSignup.on('submit', that, that.handleEmailSignupForm);
        });

        MessageBus.on('emailSignupOpen.Modal', function () {
            var eventData = {};

            eventData = {"modalName": "emailSignup"};
            $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);
        });

        /*$("#mar-email-signup").find('#birthdayMonth').on('change', function(){

         var monthVal = $("#mar-email-signup").find('#birthdayMonth').val(),
         yearVal = $("#mar-email-signup").find('#birthdayYear').val();

         if( monthVal !== "" && yearVal !== "" ) {
         that.doAjaxJoinList(monthVal, yearVal);
         }
         });

         $("#mar-email-signup").find('#birthdayYear').on('change', function(){
         var monthVal = $("#mar-email-signup").find('#birthdayMonth').val(),
         yearVal = $("#mar-email-signup").find('#birthdayYear').val();
         if( monthVal !== "" && yearVal !== "" ) {
         that.doAjaxJoinList(monthVal, yearVal);
         }
         });*/

        MessageBus.on('EmailSignup.ajaxcallDataUpdate', that.updateData);

        // Filling values in Create Account Form
        MessageBus.on('EmailSignup.fillFormData', function (email, phone) {
            MessageBus.on('createAccountOpen.modal', function fillFormData(context) {
                var $emailSignup = context.find('form');

                // For the case when phone number value is empty
                $emailSignup.find('#mar-checkout-send-me-texts').prop('checked', false);
                $emailSignup.find('.mar-email-update-subfield').addClass('visuallyhidden');
                $emailSignup.find("#mar-signup-mobile-number").prop('disabled', true).val("");

                console.log($emailSignup.attr('id'));
                $emailSignup.find("#mar-signup-email").val(email);
                if (phone !== "") {
                    $emailSignup.find('#mar-checkout-send-me-texts').prop('checked', true);
                    $emailSignup.find('.mar-email-update-subfield').removeClass('visuallyhidden');
                    $emailSignup.find("#mar-signup-mobile-number").prop('disabled', false).val(phone);
                }
            });

        });

        MessageBus.on('EmailSignup.dealPromotionSubmit', function (e) {
            that.emailvalidate(e);
        });

        $('body').on("change", "#mar-email-signup #birthdayYear,#mar-email-signup #birthdayMonth", function (e) {
            var $ele = $(e.currentTarget);
            if ($ele.hasClass("parsley-error")) {
                $ele.parsley().validate();
            }
        });
        var $emailSignUpModal = $("#emailSignUpModal");
        if ($("body").hasClass("secureFrame") && $emailSignUpModal[0]) {
            MessageBus.trigger('emailSignupOpen.Modal', $emailSignUpModal);
        }
        MessageBus.on("newsLetterSignupOpen.Modal", function () {
            if (window.location.protocol === "https:" && !$("body").hasClass("secureFrame")) {
                MessageBus.trigger('Footer.showhideData', that.options.userInfo.welcome, that.options.userInfo.email, that.options.userInfo.phone);
            }
        });
    };

    EmailSignup.prototype.setupAgeGateSecuredJoinList = function () {

        var that = this,
            joinErrorDiv = $('body').find('.mar-signup-error-age'),
            joinFormDiv = $('body').find('.mar-email-signup-content'),
            joinEmail = joinFormDiv.find('#signup-email-address'),
            birthMonth = joinFormDiv.find('#birthdayMonth'),
            birthYear = joinFormDiv.find('#birthdayYear'),
            birthDiv = joinFormDiv.find('.birth-day-div');

        console.log("Join List age agte");

        if (this.userObj.userAgeGatedStatus === "gated") {
            joinErrorDiv.removeClass('cmn-agegate-hide');
            joinFormDiv.addClass('cmn-agegate-hide');
            that.closePopUpWithoutResponse();
        } else if (this.userObj.userAgeGatedStatus === "notdefined") {
            joinEmail.attr('disabled', true);
            birthMonth.removeAttr('data-parsley-errors-messages-disabled');
            birthMonth.removeAttr('data-parsley-class-handler');
            birthMonth.removeAttr('data-parsley-conditionalmonthyear');
            birthMonth.attr('data-parsley-required', true);
            birthYear.removeAttr('data-parsley-errors-messages-disabled');
            birthYear.removeAttr('data-parsley-class-handler');
            birthYear.removeAttr('data-parsley-conditionalmonthyear');
            birthYear.attr('data-parsley-required', true);
        }
        else {
            if (API.endpoints.ageGateOpen === true) {
                birthDiv.addClass('cmn-agegate-hide');
                birthMonth.attr('data-parsley-required', false);
                birthMonth.removeAttr('data-parsley-validate-if-empty');
                birthYear.attr('data-parsley-required', false);
                birthYear.removeAttr('data-parsley-validate-if-empty');
            }

        }
    };

    EmailSignup.prototype.closePopUpWithoutResponse = function () {
        var that = this;

        $('.mar-start-shopping-link').click(function () {
            if (window.location.protocol === "https:" && !$("body").hasClass("secureFrame")) {
                MessageBus.trigger('modal.close');
            } else {
                MessageBus.trigger("iFrameModalClose.AuthFlow");
            }
        });
    };

    EmailSignup.prototype.doAjaxJoinList = function (monthVal, yearVal) {

        var that = this;

        $.when(that.getAgeGateResponseSecure(API.endpoints.ageGateValueSendCall, {
            'Action': 'User.checkAgeGate',
            'birthMonth': monthVal,
            'birthYear': yearVal
        })).then(function (data) {
            that.adjustAgeGateWindowSecure(data);
        });
    };

    EmailSignup.prototype.getAgeGateResponseSecure = function (url, urlParams) {
        var that = this;


        MessageBus.trigger("indicator.show");

        var dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post',
            'dataType': 'json'
        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return dfd;
    };

    EmailSignup.prototype.adjustAgeGateWindowSecure = function (data) {
        var that = this,
            joinErrorDiv = $('body').find('.mar-signup-error-age'),
            joinFormDiv = $('body').find('.mar-email-signup-content'),
            joinEmail = joinFormDiv.find('#signup-email-address'),
            birthMonth = joinFormDiv.find('#birthdayMonth'),
            birthYear = joinFormDiv.find('#birthdayYear'),
            birthDiv = joinFormDiv.find('.birth-day-div');

        if (data.birthDateEvaluationResult === "gated") {
            joinErrorDiv.removeClass('cmn-agegate-hide');
            joinFormDiv.addClass('cmn-agegate-hide');
            this.userObj.userAgeGatedStatus = data.birthDateEvaluationResult;
            that.closePopUpWithoutResponse();
        } else if (data.birthDateEvaluationResult === "notgated") {
            joinEmail.attr('disabled', false);
            birthDiv.addClass('cmn-agegate-hide');
            this.userObj.userAgeGatedStatus = data.birthDateEvaluationResult;
        }
    };

    EmailSignup.prototype.clearContainer = function () {
        this.$breadcrumbContainer.empty();
    };

    EmailSignup.prototype.emailvalidate = function (e) {
        var emailValue,
            that = this,
            validatorResult,
            result,
            $emailSignup = $(e.currentTarget);

        if ($emailSignup.attr('id') === "mar-email-signup") {
            validatorResult = this.options.validator.validate($('#signup-email-address'));
        } else if ($emailSignup.attr('id') === "ascAboutUsPromotionSignUp") {
            validatorResult = this.options.validator.validate($('#asc-aboutus-newsletter-email'));
        }
        validatorResult.done(function (data) {
            console.log(e);
            MessageBus.trigger('EmailSignup.ajaxcallDataUpdate', e);
        }).fail(function (data) {
            // we do not do anything because plugin handles it
            console.log('data from rejected', data);

        });
    };

    EmailSignup.prototype.handleEmailSignupForm = function (e) {
        e.preventDefault();
        var $emailSignup = $(e.currentTarget),
            that = e.data;
        if ($emailSignup.parsley().isValid()) {


            if ($emailSignup.attr('id') === "mar-email-signup") {
                that.emailvalidate(e);
            } else {
                MessageBus.trigger('EmailSignup.ajaxcallDataUpdate', e);
            }
        }
    };

    EmailSignup.prototype.updateData = function (e) {
        var that = this,
            formData = {},
            eventData = {},
            $emailSignup = $(e.currentTarget),
            errorContainer = $emailSignup.find('.signup-email-address-error'),
            value,
            email = "",
            phone = "",
            i = 0,
            reqObj = {
                "Action": 'AM.validateEmailSignUp'
            };

        formData = $emailSignup.serializeArray();

        $.map(formData, function (n, i) {
            reqObj[n.name] = n.value;
        });


        var x = $.ajax({
            'url': API.endpoints.submitEmailSignUpForm,
            'data': reqObj,
            'type': 'post',
            'dataType': 'json'
        }).done(function (data) {
            if (data.status.toLowerCase() === "success") {
                if ($emailSignup.attr('id') !== "ascAboutUsPromotionSignUp") {
                    setTimeout(function () {
                        $emailSignup.off('submit', that.handleEmailSignupForm);
                    }, 0);
                }

                //Modal for Newsletter Modal success submit
                if ($emailSignup.attr('id') === "mar-newsletter-signup") {
                    email = $emailSignup.find("#return-email").val();
                    phone = $emailSignup.find("#signup-mobile-number").val();
                    $('.mar-newsletter-form-content')
                        .fadeOut(function () {
                            $('.mar-newsletter-confirmation').css("display", "block");
                        });

                    //Modal for Email Sign Up Modal success submit
                } else if ($emailSignup.attr('id') === "mar-email-signup") {
                    $('.mar-email-signup-content')
                        .fadeOut(function () {
                            $('.mar-signup-confirmation').css("display", "block");
                            $('.confirmation-heading').css("display", "block");
                            $('.signup-heading').css("display", "none");

                            // JU | Fix ALM-634 | Narahari
                            //var msgContent = data.bandMessage+'<a class="mar-tooltip-trigger"><span class="icon-info mar-checkout-po-box-help soft--sides"></span><span class="tooltip-content mar-checkout-po-box-tooltip">'+'</span></a>';
                            //$('.mar-signup-confirmation').find('.text-message-alert').html(data.bandMessage+data.birthdayMsg);
                            var brandMsg = '';
                            if (data.bandMessage !== undefined) {
                                brandMsg += data.bandMessage;
                            }
                            if (data.birthdayMsg !== undefined) {
                                brandMsg += data.birthdayMsg;
                            }

                            $('.mar-signup-confirmation').find('.text-message-alert').html(brandMsg);

                        });
                    email = $emailSignup.find("#signup-email-address").val();
                    if ($emailSignup.find('#mar-checkout-send-me-texts').is(':checked')) {
                        phone = $emailSignup.find("#mar-signup-mobile-number").val();
                    } else {
                        phone = "";
                    }

                    eventData = {"modalName": "emailSubmitted"};
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);

                } else if ($emailSignup.attr('id') === "ascAboutUsPromotionSignUp") {
                    if (window.location.protocol === "http:") {
                        $("#newsletter-button-secure-frame").trigger('click');
                    }
                    else {
                        $("#newsletter-button").trigger('click');
                    }
                    email = $('#asc-aboutus-newsletter-email').val();
                    if ($emailSignup.find('#checkbox-send-me-texts').is(':checked')) {
                        phone = $emailSignup.find("#mar-signup-mobile-number").val();
                    } else {
                        phone = "";
                    }
                    if (window.location.href === "https:" && !$("body").hasClass("secureFrame")) {
                        that.options.userInfo = {
                            "welcome": "showConfirm",
                            "email": email,
                            "phone": phone
                        };
                    } else {
                        MessageBus.trigger('Footer.showhideData', "showConfirm", email, phone);
                    }
                }

                // Event Handler for Register Now Link
                $('.mar-register-now-link').click(function () {
                    if (window.location.protocol === "https:" && !$("body").hasClass("secureFrame")) {
                        $('#signup-trigger-button').trigger('click');
                        MessageBus.trigger('EmailSignup.fillFormData', email, phone);
                    } else {
                        MessageBus.trigger('createAccountRequestWithData.secureAuth', {"email": email, "phone": phone});
                    }

                });

                // Event Handler for Start Shopping Link
                $('.mar-start-shopping-link').click(function () {
                    if (window.location.protocol === "https:" && !$("body").hasClass("secureFrame")) {
                        MessageBus.trigger('modal.close');
                    } else {
                        MessageBus.trigger("iFrameModalClose.AuthFlow");
                    }
                });
            } else if (data.status.toLowerCase() === "failure") {
                errorContainer.find('ul').empty();
                errorContainer.find('ul').html('<li class="parsley-custom-error-message">' + data.message + '</li>');
                console.log(data.message);
            }

        });


    };

    return new EmailSignup();
});
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('../../imports/scripts/components/global/footer', [
    'api',
    'emailValidator',
    'MessageBus'
], function (API,
             EmailValidator,
             MessageBus) {
    'use strict';

    //defaults for use throughout the footer
    var _defaults = {
            'selectors': {
                'footer': '.asc-footer',
                'dbStoreInfo': {
                    'trigger': '.db-store-info-hours-trigger',
                    'contentEl': '.db-store-info-hours-list'
                },
                'ascSignUp': {
                    'formEl': '#ascFooterPromotionSignUp',
                    'successEl': '.asc-success-text',
                    'errorEl': '.asc-error-text',
                    'emailFiled': '#asc-footer-newsletter-email'
                }
            },
            'classes': {},
            'dbStoreOffset': '0',
            'userInfo': {}
        },
        $secureFrame = [];

    var Footer = function () {

    };

    /**
     * init
     * @return {[type]} [description]
     */
    Footer.prototype.init = function (customOptions) {
        var that = this;

        //Condition to stop this module init inside secure iframe
        /*if($("body").hasClass("secureFrame")){
         return {};
         }*/

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        if ($(this.options.selectors.footer).length > 0) {
            this.$el = $(this.options.selectors.footer);
            //this.options.dbStoreOffset = $(this.options.selectors.dbStoreInfo.contentEl).height().toString();
            //$(this.options.selectors.dbStoreInfo.contentEl).css('marginTop', '-'+this.options.dbStoreOffset+'px');

            this.setupEnsightenTrackingEvents();
            this.attachEvents();


            if (API.isRIO === false) {
                console.log('show footer');
                $('#ascFooterPromotionSignUp').addClass('asc-show-newsletter-form');
            }


            // start up our emailvalidator
            this.options.validator = new EmailValidator();
            this.options.$error = this.$el.find(that.options.selectors.ascSignUp.errorEl);
        }
        // Calling Function to show data in Modal according to type of user
        MessageBus.on('Footer.showhideData', function (welcome, email, phone) {
            if (window.location.protocol === "https:") {
                if (welcome === "showConfirm") {
                    $('.mar-newsletter-confirmation').css("display", "block");
                    $('.mar-newsletter-form-content').css("display", "none");
                    $('.mar-register-now-link').click(function () {
                        if (window.location.protocol === "https:" && !$("body").hasClass("secureFrame")) {
                            $('#signup-trigger-button').trigger('click');
                            MessageBus.trigger('EmailSignup.fillFormData', email, phone);
                        } else {
                            MessageBus.trigger('createAccountRequestWithData.secureAuth', {
                                "email": email,
                                "phone": phone
                            });
                        }
                    });

                    // Event Handler for Start Shopping Link
                    $('.mar-start-shopping-link').click(function () {
                        MessageBus.trigger('modal.close');
                        MessageBus.trigger("iFrameModalClose.AuthFlow");
                    });
                    $('body').find('#asc-footer-newsletter-email').val('');
                    if ($('body').find('#asc-aboutus-newsletter-email').length > 0) {
                        $('#asc-aboutus-newsletter-email').val('');
                    }
                    //Condition when a new email is entered
                } else {
                    $('.mar-newsletter-confirmation').css("display", "none");
                    $('.mar-newsletter-form-content').css("display", "block");
                    $('.mar-select').customSelect();
                    $('#mar-newsletter-signup').parsley();
                    $('body').find('#return-email').val(email);
                    $('body').find('#asc-footer-newsletter-email').val('');
                    if ($('body').find('#asc-aboutus-newsletter-email').length > 0) {
                        $('#asc-aboutus-newsletter-email').val('');
                    }
                }
            } else {
                var userData = email + "|" + phone + "|" + welcome;
                MessageBus.trigger("saveNewsLetterSignUpData", userData);
            }
        });

        // function for filling data in form
        /*  MessageBus.on('Footer.fillFormData', function (email) {
         MessageBus.on('createAccountOpen.modal', function fillFormData (context) {
         $("#mar-signup-email").val(email);
         });
         });*/
        var $newsLetterSignUpModal = $("#newsLetterSignUpModal");
        if ($("body").hasClass("secureFrame") && $newsLetterSignUpModal[0]) {
            MessageBus.trigger('newsLetterSignupOpen.Modal', $newsLetterSignUpModal);
            $newsLetterSignUpModal.on("submit", "#mar-newsletter-signup", function (e) {
                e.preventDefault();
                var form = $(this);
                // check if parsley is happy
                form.parsley().validate();
                if (form.parsley().isValid()) {
                    // send information to the server to register
                    MessageBus.trigger('EmailSignup.ajaxcallDataUpdate', e);
                }
            });
        }
    };

    /*
     * Attach event listeners for Ensighten Tracking
     */
    Footer.prototype.setupEnsightenTrackingEvents = function () {
        /*
         * Ensighten Tracking Start:
         * Event: featureEngagement:- When user clicks on Start Chat button
         */
        MessageBus.on('Footer.chatEnsightenEvent', function () {
            var $rightNowContainer = $('li#footer-CSContainer');
            if ($rightNowContainer[0]) {
                $rightNowContainer.on('click', '.rn_ChatAvailable a', function (evt) {
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {"name": "featureEngagement"});
                });
            }
        });
        /*
         * Ensighten Tracking End
         */
    };

    Footer.prototype.attachEvents = function () {
        var that = this,
            validatorResult;


        if (API.isRIO === false) {
            this.$el.find(this.options.selectors.ascSignUp.formEl).on('submit', function (e) {
                var emailValue,
                    form = $(this);

                // do not submit
                e.preventDefault();

                // check if parsley is happy
                form.parsley().validate();

                if (form.parsley().isValid()) {
                    emailValue = form.find(that.options.selectors.ascSignUp.emailFiled).val();

                    validatorResult = that.options.validator.validate(form.find(that.options.selectors.ascSignUp.emailFiled));

                    validatorResult.done(function (data) {
                        // send information to the server to register
                        that.validateSignUpRequest(emailValue);
                        console.log('data from validator', data);

                        //clearing the contents of the newsletter input field when the form validation is successful
                        form.find(that.options.selectors.ascSignUp.emailFiled).val("");
                    }).fail(function (data) {
                        // we do not do anything because plugin handles it
                        console.log('data from rejected', data);

                        //that.options.$error.html('Please enter a valid email');
                    });
                }

            });
        }

        MessageBus.trigger('Footer.chatEnsightenEvent');
        $('#asc-footer-newsletter-email').keyup(function () {
            that.options.$error.find('.emailOptedError').remove();
        });
        MessageBus.on("newsLetterSignupOpen.Modal", function () {
            if (window.location.protocol === "https:" && !$("body").hasClass("secureFrame")) {
                MessageBus.trigger('Footer.showhideData', that.options.userInfo.welcome, that.options.userInfo.email, that.options.userInfo.phone);
            }
        });
    };

    //send user's email in ajax request to backend team, print out message depending on json response
    Footer.prototype.validateSignUpRequest = function (formData) {
        var that = this,
            ajaxCall,
            phone = "",
            data = {
                'Action': 'AM.validateEmailSignUp',
                'validateEmailSignUp': true,
                'emailAddress': formData
            };
        ajaxCall = $.ajax({
            'url': API.endpoints.registerEmail,
            'data': data
        }).done(function (data) {
            if (data.status === 'success') {

                //   $success.hide();
                /*   that.$el.find(that.options.selectors.ascSignUp.formEl).fadeOut('slow',function() {
                 $success.html("<p>"+data.message+"</p>");
                 $success.fadeIn();
                 });*/
                data.welcome = data.welcome ? "showConfirm" : "showForm";
                if (window.location.protocol === "https:") {
                    $("#newsletter-button").trigger('click');
                    that.options.userInfo = {
                        "welcome": data.welcome,
                        "email": data.emailID,
                        "phone": phone
                    };
                    var $newsLetterSignUpModal = $("#newsLetterSignUpModal");
                    if ($newsLetterSignUpModal[0] && $("body").hasClass("secureFrame")) {
                        MessageBus.trigger('Footer.showhideData', data.welcome, data.emailID, phone);
                    }
                } else {
                    $("#newsletter-button-secure-frame").trigger('click');
                    MessageBus.trigger('Footer.showhideData', data.welcome, data.emailID, phone);
                }
            } else {
                that.options.$error.find('ul').empty();
                that.options.$error.find('ul').html('<li class="emailOptedError">' + data.message + '</li>');
            }

        }).fail(function (data) {
            console.log("could not reach end point");
        });
    };

    //Function to show data in Modal according to type of user
    Footer.prototype.dataShowHide = function (welcome, email, phone) {


    };

    //show/hide store hours and other info
    Footer.prototype.animateStoreInfo = function () {
        var $storeInfo = $(this.options.selectors.dbStoreInfo.contentEl),
            contentMargin = parseInt($storeInfo.css('marginTop'));

        //depending on content margin, animate the store info either up or down
        if (contentMargin < 0) {
            //if it's raised, put it in its inherent place (0px margin)
            $storeInfo.animate({
                'marginTop': '0px'
            }, 400);
        } else {
            $storeInfo.animate({
                'marginTop': '-' + this.options.dbStoreOffset + 'px'
            }, 400);
        }
    };

    return new Footer();
});

define('../../imports/scripts/plugins/smartSearch', ['api'], function (API) {
    (function ($, window) {
        'use strict';
        var pluginName = 'smartSearch',
            defaults = {
                'selectors': {
                    // assumed that all of these are classes no dots1
                },
                'searchResults': [
                    {
                        'label': 'Product Matches',
                        'className': 'asc-predictive-product-result-list'
                    },
                    {
                        'label': 'Category Matches',
                        'className': 'asc-predictive-category-result-list'
                    }
                ],
                'classes': {
                    'dropdownClass': 'asc-predictive-search-dropdown',
                    'headerClass': 'asc-predictive-search-header',
                    'listClass': 'asc-predictive-search-result-list',
                    'searchResultItemClass': 'asc-predictive-search-result-item',
                    'searchResultItemClassActive': 'active-item',
                    'hidingClass': 'visuallyhidden'
                },
                'cache': {
                    '$productResultList': {},
                    '$categoryResultList': {}
                },
                'feedURL': API.endpoints.smartSearchFeed,
                'searchField': '',
                'startLength': 2,
                'debounceDelay': 300,
                'loseFocusTimeoutDelay': 600
            };

        /**
         @constructor
         */
        function SmartSearch(element, customOptions) {
            this.element = element;
            this.options = $.extend(true, {}, defaults, customOptions);
            this._name = pluginName;

            this.init();
        }

        /**
         @function
         @description Initializes the Plugin
         */
        SmartSearch.prototype.init = function () {

            // Init base variables
            this.$el = $(this.element);
            this.$searchField = this.$el.find('input[type="search"]');
            this.$searchButton = this.$el.find('[type="submit"]');

            // Submit button has been removed in new header redesign
            // 3/26/15

            // this.$submitButton = this.$el.find('button');

            // //Submit button disabled by default
            // this.$submitButton.attr('disabled','disabled');

            this.buildElements();
            this.attachEvents();
        };

        /**
         @function
         @description Handles building default structure
         */
        SmartSearch.prototype.buildElements = function () {
            // TODO: add customscroll bar
            //this.searchPartialDropdown = $('<div class="'+this.options.classes.dropdownClass+' '+this.options.classes.hidingClass+' asc-custom-scroll"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview"></div></div></div>');
            this.searchPartialDropdown = $('<div class="' + this.options.classes.dropdownClass + ' ' + this.options.classes.hidingClass + '"></div>');

            // TODO: add customscroll bar
            //var overview = this.searchPartialDropdown.find('.overview');
            var overview = this.searchPartialDropdown;

            var header = $('<span class="' + this.options.classes.headerClass + '"></span>');
            var list = $('<ul class="' + this.options.classes.listClass + '"></ul>');
            var i = 0;

            for (i; i < this.options.searchResults.length; i++) {
                overview.append(header.clone().text(this.options.searchResults[i].label));
                overview.append(list.clone().addClass(this.options.searchResults[i].className));
            }

            // Append elements to the dom
            this.$el.append(this.searchPartialDropdown);

            // Cach lists wrapped in jQuery
            this.options.cache.$productResultList = $('.' + this.options.searchResults[0].className);
            this.options.cache.$categoryResultList = $('.' + this.options.searchResults[1].className);
        };

        /**
         @function
         @description Toggles the dropdown
         */
        SmartSearch.prototype.toggleDropdown = function (state, e) {
            if (state === 'show') {
                this.searchPartialDropdown.removeClass(this.options.classes.hidingClass);
                //this.updateScroll(this.searchPartialDropdown);
                this.$el.data("search-state", "open");
                $('html, body').css("height", window.innerHeight);
                $('body').addClass("scroll-fix");
            } else {
                $('body').removeClass("scroll-fix");
                $('html, body').css("height", "auto");
                this.searchPartialDropdown.addClass(this.options.classes.hidingClass);
                this.$el.data("search-state", "close");
            }

        };

        /**
         @function
         @description Update custom scrollbar
         */
        SmartSearch.prototype.updateScroll = function (dropdown) {

            dropdown.height(dropdown.find('.overview').height());

            //tiny scrollbar plugin
            var scrollbar = dropdown.data("plugin_tinyscrollbar");
            if (scrollbar === undefined) {
                dropdown.tinyscrollbar();
            } else {
                scrollbar.update();
            }
        };

        /**
         @function
         @description Attaches events
         */
        SmartSearch.prototype.attachEvents = function () {
            var that = this;
            that.$el.on('focus', "a." + that.options.classes.searchResultItemClass, function () {
                var activeClass = that.options.classes.searchResultItemClassActive;

                that.$el.find("." + activeClass).removeClass(activeClass);

                $(this).parents("li:first").addClass(activeClass);
            });

            $(document).mouseup(function (e) {
                // if the target of the click isn't the container... AND ... nor a descendant of the container
                if (that.$el.data("search-state") === "open") {
                    if (!that.$el.is(e.target) && that.$el.has(e.target).length === 0 && !$(e.target).is('html')) {
                        that.$searchField.val("");
                        that.loseFocusHide(that, true);
                    }
                }
            });

            // Create the LazyFetch function and debounce
            var lazyFetch = _.debounce(function (e) {
                var searchPartial = $(this).val(),
                    code = e.keyCode ? e.keyCode : e.which;

                // JU | ALM Fix for 1015 : Narahari
                if (searchPartial.length > 0) {
                    that.$el.addClass('close-icon-active');
                }

                if (code !== 40 && code !== 38 && code !== 9) {
                    //Show headers .. if product or category headers are hidden on previous search
                    that.loseFocusHide(that, true);
                }

                if (!API.isRIO) {

                    if (searchPartial.length > that.options.startLength) {
                        if (code === 13 || code === 27) { //Enter keycode
                            console.log('wrong key press');
                        } else if (code === 40 || code === 38 || code === 9) {
                            var $searchResults = that.$el.find("." + that.options.classes.searchResultItemClass),
                                $focusedItem = "";

                            $searchResults.parents("li").removeClass(that.options.classes.searchResultItemClassActive);

                            if (code === 38) {
                                $focusedItem = $searchResults.filter(":last");
                            } else {
                                $focusedItem = $searchResults.filter(":first");
                            }

                            if ($focusedItem[0]) {
                                $focusedItem.focus();
                                $focusedItem.parents("li:first").addClass(that.options.classes.searchResultItemClassActive);
                            }
                        } else {
                            that.fetchResults(searchPartial);
                            //that.$submitButton.removeAttr('disabled');
                        }
                    } else {
                        //that.$submitButton.attr('disabled','disabled');
                    }
                }
            }, that.options.debounceDelay);

            // Clear Results
            this.$el.on('focusout', function () {
                if (that.$el.data("search-state") === "open") {
                    that.loseFocusHide(that, true);
                    that.$el.find('span.placeholder').css("display", "inline");
                }
            });

            this.$searchField.on('focus, mouseenter', function () {
                that.$el.find('span.placeholder').hide();
            });

            this.$el.on('mouseleave', function () {
                if (/^\s*$/.test(that.$searchField.val()) === true) {
                    that.$el.find('span.placeholder').css("display", "inline");
                    // JU | ALM Fix for 1015 - Narahari
                    setTimeout(function () {
                        that.$el.removeClass('search-active');
                        that.$el.removeClass('close-icon-active');
                        that.$searchField.blur();
                    }, 1000);
                }
            });

            // Clear the set timeout
            that.$el.on('mouseenter', function () {
                window.clearTimeout(that.startCountdown);
            });

            this.$searchField.focus(function () {
                if (!that.$el.hasClass('search-active')) {
                    that.$el.addClass('search-active');
                }
            });

            this.$el.find('.mar-search-clear-button').on('click', function () {
                that.$searchField.val("");
                that.loseFocusHide(that, true);
            });

            // Attach Keyup Events
            this.$searchField.on('keyup', lazyFetch);
            /*
             On submit search
             */
            $(".mar-search-form").on("submit", function (e) {

                e.preventDefault();
                var $formInput = $(e.currentTarget).find('.mar-search-input'),
                    searchBaseUrl = $(".mar-search-form").attr("action"),
                    encodedSearchTerm = encodeURIComponent($formInput.val()),
                    redirectURL = searchBaseUrl + "?Ntt=" + encodedSearchTerm;

                if ($formInput.val().length > 0) {
                    window.location = redirectURL;
                }
            });

        };

        /**
         @function
         @description Fetches search results
         */
        SmartSearch.prototype.fetchResults = function (searchPartial) {
            var that = this;

            $.ajax({
                'url': that.options.feedURL,
                'data': {Ntt: searchPartial},
                'type': 'get',
                'dataType': 'json'
            }).done(function (data) {
                // Only continue populating if there are product suggestions OR category suggestions
                if (data.productSuggestions.length === 0 && data.categorySuggestions.length === 0) {
                    return false;
                } else {
                    that.populateMatches(data, searchPartial);
                    that.toggleDropdown('show');
                }
            });
        };

        /**
         @function
         @description Hide Search when you lose focus for 1s
         */
        SmartSearch.prototype.loseFocusHide = function (that, offFocus) {
            // Set a setTimeout
            if (offFocus) {
                that.startCountdown = window.setTimeout(function () {
                    var val = that.$searchField.val();
                    if (val === '') {
                        that.cleanLists();
                        that.toggleDropdown('hide');
                        that.$searchField.blur();
                        if (that.$el.hasClass('search-active')) {
                            that.$el.removeClass('search-active');
                            that.$el.removeClass('close-icon-active');
                        }
                    }
                }, that.options.loseFocusTimeoutDelay);
            } else {
                that.cleanLists();
                that.toggleDropdown('hide');
                //that.$searchField.val("").focus();
            }
        };

        /**
         @function
         @description Clear Lists
         */
        SmartSearch.prototype.cleanLists = function (searchPartial) {
            var that = this;

            this.options.cache.$productResultList.empty();
            this.options.cache.$categoryResultList.empty();
        };

        /**
         @function
         @description Fetches search results
         */
        SmartSearch.prototype.populateMatches = function (data, searchPartial) {
            var that = this;
            var $listItem = $('<li/>');
            var $anchor = $('<a class="' + that.options.classes.searchResultItemClass + '"/>');
            var i = 0;
            var j = 0;
            var currentProductTitle;
            var currentCategoryTitle;
            this.options.cache.$categoryResultList.html('');
            this.options.cache.$productResultList.html('');

            $(".asc-predictive-search-header").removeClass("catNil").show();

            if (data.productSuggestions.length === 0) {
                $(".asc-predictive-product-result-list").prev().addClass('catNil').hide();
            }
            else if (data.categorySuggestions.length === 0) {
                $(".asc-predictive-category-result-list").prev().addClass('catNil').hide();
            }

            for (i; i < data.productSuggestions.length; i++) {

                currentProductTitle = data.productSuggestions[i].title;

                this.options.cache.$productResultList
                    .append($listItem.clone()
                        .append($anchor.clone()
                            .attr('href', data.productSuggestions[i].url)
                            .html(this.highlightPartials(currentProductTitle, searchPartial))));
            }

            for (j; j < data.categorySuggestions.length; j++) {

                currentCategoryTitle = data.categorySuggestions[j].title;

                this.options.cache.$categoryResultList
                    .append($listItem.clone()
                        .append($anchor.clone()
                            .attr('href', data.categorySuggestions[j].url)
                            .html(this.highlightPartials(currentCategoryTitle, searchPartial))));
            }

        };

        /**
         @function
         @description Highlight search partial in a result
         */
        SmartSearch.prototype.highlightPartials = function (result, searchPartial) {
            var that = this;
            var pattern = new RegExp(searchPartial, 'gi');

            return result.replace(pattern, '<b>' + searchPartial + '</b>');
        };

        $.fn[pluginName] = function (options) {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new SmartSearch(this, options));
                }
            });
        };
    })(jQuery, window);
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('../../assets/scripts/components/global/footer', [
    'api',
    'MessageBus'
], function (API, MessageBus) {
    'use strict';

    //defaults for use throughout the footer
    var pluginName = "marFooter",
        _defaults = {
            'selectors': {
                'footer': '.mar-footer',
                'fav_store_promo': '.mar-fav-store-promo',
                'promo': '.mar-footer-promo',
                'marStoreInfo': {
                    'contentEl': '.mar-footer-fav-store',
                    'storeLoc': '.mar-fav-store-loc',
                    'storeAddr': '.mar-fav-store-addr',
                },
                'marSignUp': {
                    'formEl': '#mar-footer-email-signup',
                    'successEl': '.mar-success-text',
                    'errorEl': '.mar-error-text'
                }
            },
            'cache': {
                'fav_store': {},
                'promo': {},
                'fav_store_promo': {}
            },
            'actions': {
                'getUserEntryBox': 'User.LightBox'
            },
            'storeDataKeys': [
                'storeLocation',
                'storeAddress'
            ]
        };

    var Footer = function () {

    };

    /**
     * init
     * @return {[type]} [description]
     */
    Footer.prototype.init = function (customOptions) {

        //Condition to stop this module init inside secure iframe
        if ($("body").hasClass("secureFrame")) {
            return {};
        }

        var that = this,
            showFooter = true;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        that.cacheElements();

        if ($(this.options.selectors.footer).length > 0 && this.options.cache.fav_store[0] || this.options.cache.promo[0]) {
            this.$el = $(this.options.selectors.footer);
            var userDataObject = API.getUserState();
            $.when(userDataObject).then(function (data) {
                that.userData = data;
                //check is all store data is set
                if (that.userData.storeData) {

                    //set favorite store module
                    if (that.userData.storeData.storeLocation && that.userData.storeData.storeAddress) {
                        that.renderFavStore(that.userData.storeData.storeLocation, that.userData.storeData.storeAddress, that.userData.storeData.storeURL);
                    }
                    /*else{
                     //hide favorite store module is not store data set
                     //that.renderNoFavStore();
                     }*/

                    //set promo message

                    /*commenting as no mobile consition reqd anymore as footer promo not coming from ENDECA
                     if(that.userData.storeData.promotionMessage && that.userData.storeData.promotionURL){
                     that.renderPromo(that.userData.storeData.promotionMessage, that.userData.storeData.promotionURL);
                     }*/
                }
                /*
                 else{
                 //hide entire promo module is not store data set
                 //that.renderNoPromo();
                 }*/
            });
        }

        // Join our list button visible/hidden based on endpoint JSON data
        var autoJoinOurList;
        if (API.endpoints.autoJoinOurList !== undefined) {
            autoJoinOurList = API.endpoints.autoJoinOurList;
        }
        if (autoJoinOurList === true) {
            $('#ascFooterPromotionSignUp').hide();
        }

        //load marketing entry box
        var lightBoxDeeplinkUrl = API.endpoints.lightBoxDeeplinkUrlParam,
            checkQuery = API.parseQuerystring()[lightBoxDeeplinkUrl];
        if (API.endpoints.marketingEntryBoxRequired === true && !checkQuery) {
            this.marketingEntryLightBox();
        }


    };

    /**
     * [ description]
     * @return {[type]} [description]
     */
    Footer.prototype.marketingEntryLightBox = function () {

        var that = this,
            ajaxCall,
            boxEntry = $('#marketingEntryBox'),
            signupLink = $('.asc-email-signup-link');

        ajaxCall = $.ajax({
                'url': API.endpoints.marketingEntryBox,
                'data': {
                    'Action': that.options.actions.getUserEntryBox,
                    'UrlPattern': location.pathname + location.search + location.hash
                }
            })
            .done(function (data) {

                if (data.lightBoxEnable) {
                    $('#marketEntrybox').modal();
                    if (!data.marketingLightBoxCookie) {
                        boxEntry.trigger('click');
                    }

                    if ((!data.emailLightBoxCookie) && (data.marketingLightBoxCookie)) {
                        signupLink.not('.visuallyhidden').trigger('click');
                    }
                }

            })
            .fail(function (data) {
                console.log("could not reach end point");
            });
    };

    /**
     * [ description]
     * @return {[type]} [description]
     */
    Footer.prototype.attachEvents = function () {

    };

    /**
     * [ description]
     * @return {[type]} [description]
     */
    Footer.prototype.cacheElements = function () {
        var $footer_fav_store_promo = $(this.options.selectors.fav_store_promo),
            $footer_promo = $footer_fav_store_promo.find(this.options.selectors.promo),
            $footer_fav_store = $footer_fav_store_promo.find(this.options.selectors.marStoreInfo.contentEl);

        this.options.cache.fav_store_promo = $footer_fav_store_promo;


        this.options.cache.promo = $footer_promo;
        this.options.cache.promoMessage = $footer_promo.find('img');
        this.options.cache.promoURL = $footer_promo.find('a');


        this.options.cache.fav_store = $footer_fav_store;
    };

    /**
     * [ description]
     * @return {[type]} [description]
     */
    Footer.prototype.renderFavStore = function (storeLoc, storeAddr, storeURL) {

        //set favorite store values;
        this.options.cache.fav_store.find('.mar-fav-store-loc').html(storeLoc);
        this.options.cache.fav_store.find('.mar-fav-store-addr').html(storeAddr);
        this.options.cache.fav_store.find('.mar-fav-store-text').attr("href", storeURL);


        //reveal favorite store element
        this.options.cache.fav_store.show();
        //set promo to 75% and remove any 100% class
        this.options.cache.promo.removeClass('one-whole');
        this.options.cache.promo.addClass('three-quarters');
    };

    /**
     * [ description]
     * @return {[type]} [description]
     */
    Footer.prototype.renderNoFavStore = function () {
        //hide favorite store element
        this.options.cache.fav_store.hide();

        //set promo to 100% and remove any 75% class
        this.options.cache.promo.addClass('one-whole');
        this.options.cache.promo.removeClass('three-quarters');
    };

    /**
     * [ description]
     * @return {[type]} [description]
     */
    Footer.prototype.renderNoPromo = function () {
        //hide promo element
        $(this.options.selectors.fav_store_promo).hide();
    };

    /**
     * [ description]
     * @return {[type]} [description]
     */
    Footer.prototype.renderPromo = function (promoMessage, promoURL) {
        if (this.options.cache.promoMessage[0]) {
            this.options.cache.promoMessage.attr('src', promoMessage);
        }
        if (this.options.cache.promoURL[0]) {
            this.options.cache.promoURL.attr('href', promoURL);
        }
    };

    return new Footer();
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, console, define, window, document, _gaq, Modernizr */

define('../../assets/scripts/components/quickview/quickViewApp', [
    'MessageBus',
    'api',
    'modal',
    'components/quickview/QuickViewView',
    'components/quickview/ProductDetailCollection',
    'components/quickview/ProductDetailView',
    'ProductColorSelectCollection',
    'ProductColorSelectView',
    'components/quickview/ProductSizeSelectCollection',
    'components/quickview/ProductSizeSelectView',
    'components/quickview/ProductSizeContainerView',
    'components/shared/ProductImageView',
    'components/pdp/ProductPriceView',
    'ProductSKUCollection',
    'ProductInventoryCollection',
    'components/quickview/MultiQuickViewView',
    'components/shared/ProductMediaView',
    'components/shared/ProductZoomView',
    'productFavoritesView',
    'components/quickview/ProductPromoView',
    'socialApp',
    'bazaarvoiceLoader',
    'common/MobileProductView'

], function (MessageBus,
             API,
             modal,
             QuickViewView,
             ProductDetailCollection,
             ProductDetailView,
             ProductColorSelectCollection,
             ProductColorSelectView,
             ProductSizeSelectCollection,
             ProductSizeSelectView,
             ProductSizeContainerView,
             ProductImageView,
             ProductPriceView,
             ProductSKUCollection,
             ProductInventoryCollection,
             MultiQuickViewView,
             ProductMediaView,
             ProductZoomView,
             ProductFavoritesView,
             ProductPromoView,
             SocialApp,
             BazaarvoiceLoader,
             MobileProductView) {

    'use strict';
    // setup some defaults that we can use later
    var _defaults = {
        'selectors': {
            'quickViewTrigger': '.mar-quickview-btn',
            'quickView': '.cmn-quickview-container',
            'productDetailView': '.mar-pdp-product-details-container',
            'productWaistSizeView': '.mar-product-sizes-waist-container',
            'productLengthSizeView': '.mar-product-sizes-length-container',
            'productSizeContainerView': '.mar-product-size-container',
            'productColorView': '.mar-pdp-color-container',
            'productImageView': '.mar-product-gallery-container',
            'productPriceView': '.mar-product-price',
            'productSKUView': '.mar-product-selection-container',
            'productFavoritesView': '.asc-add-to-favs-btn',
            'productMediaView': '.asc-product-media',
            'productScene7View': '.s7container',
            'quantityDetail': '.mar-product-quantity-message',
            'productSelectionContainer': '.mar-product-selection-container',
            'productPromoView': '.mar-product-promo-message',
            'quickMsgClass': '.mar-product-quantity-message',
            'inStockWrapper': '.asc-product-in-stock-container',
            'outOfStockWrapper': '.asc-product-oos-container',
            'socialContainer': '.mar-social-container',
            'pdpFavs': '.pdp-favs'
        },
        'actions': {
            'updateQuantity': 'QuickView.updateQuantity',
            'addToFavorite': 'QuickView.addToFavorites',
            'addToCart': 'QuickView.addToCart',
            'editItem': 'Cart.EditRegularItem',
            'getProduct': 'QuickView.getProduct',
            'getInventory': 'QuickView.getInventory'
        },
        //is this multiple product quick view or regular?
        'multi': false,
        'onPage': false,
        //which component is this? default is qv but it can also be multipdp or multiqv. pdp is handled separately in pdpApp.
        'prefixID': 'qv',
        'iteration': 0,
        'scene7Instantiated': false,
        'skuBasedPrice': API.endpoints.brandConfig.skuBasedPrice,
        'skuBasedPromotion': API.endpoints.brandConfig.skuBasedPromotion
    };

    var QuickView = function () {
        //console.log("QuickView constructor called ");
    };

    QuickView.prototype.init = function (customOptions) {
        //console.log("QuickView.init()");
        var that = this;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        // setup collections
        this.setupCollections();
        this.setupAJAXListeners();
        this.currentAction = this.options.actions.addToCart;

        if (this.options.multi === true) {
            if (this.options.onPage === true) {
                this.options.prefixID = 'multipdp';
            } else {
                this.options.prefixID = 'multiqv';
            }

            that.processData(this.options.productData, this.options.inventoryData);
            that.getLabels();
            that.setUpViews(this, this.options.context, this.options.iteration);
            if (this.options.inventoryData.all_skus_out_of_stock === "true") {
                that.oosImageRender();
            }
        } else {
            this.attachEvents();
            this.setTriggers();
        }

        this.loadQuickMessages();

        //lazy way to get product id if it is there
        /*$(this.options.selectors.quickViewTrigger).on('click', function(e) {
         //optimize this like this
         var triggerData = $(e.currentTarget).data();
         //console.log(triggerData);
         // get product id
         if($(e.target).attr('data-id')) {
         that.productID = $(e.target).attr('data-id');
         }
         if($(e.target).attr('data-favid')) {
         that.giftlistItemId = $(e.target).attr('data-favid');
         }
         // get sku if it exists so that we can preselect items
         // get quantity
         if ($(e.currentTarget).data('quantity')) {
         that.productQuantity = $(e.target).data('quantity');
         }
         });*/

        // this setsup a modal on quickview

    };

    QuickView.prototype.setTriggers = function () {
        //console.log("QuickView.setTriggers()");
        var that = this,
            $triggers = $(this.options.selectors.quickViewTrigger),
            triggerLen = $triggers.length,
            $currentEl,
            i = 0,
            touch = Modernizr.touch;

        for (i; i < triggerLen; i++) {
            $currentEl = $($triggers.get(i));

            if ($currentEl.attr('data-plugin_modal') === undefined) {

                if (!touch || !API.showMobileView('quickViewConfig')) {
                    $currentEl.data('modalevent', 'quickView.modal.openModal').data('modalclass', 'modal-quick-view').modal({'target': '#quickView'});
                }
            }
        }
    };


    //create new collections
    QuickView.prototype.setupCollections = function () {
        //console.log("QuickView.setupCollections()");
        this.productDetailCollection = new ProductDetailCollection();
        this.productColorCollection = new ProductColorSelectCollection();
        this.productSizeCollection = new ProductSizeSelectCollection();
        this.productSKUCollection = new ProductSKUCollection();
        this.productInventoryCollection = new ProductInventoryCollection();
    };

    //process data given in the page
    QuickView.prototype.getInitialData = function (that, context) {
        //console.log("QuickView.getInitialData()");

        /*
         * Ensighten Tracking Start:
         * Event: quickViewClick:- When User click on quick view, tracking implementation start
         */
        $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {"name": "quickViewClick"});

        /*
         * Ensighten Tracking End
         */


        $.when(
            that.updateQuickView(API.endpoints.QVgetProduct, {
                'Action': that.options.actions.getProduct,
                'id': that.productID
            }),
            that.updateQuickView(API.endpoints.QVgetInventory, {
                'Action': that.options.actions.getInventory,
                'id': that.productID
            }))
            .then(function (data, inventoryData) {
                //console.log("QuickView.getInitialData.promise().then()");
                if (typeof data[0] === "object" && data[0].status && data[0].status.toLowerCase() === "invalidsession") {
                    window.location.href = data[0].redirectURLSessionTimout;
                }
                var productID = data[0].product[0].product_id,
                    status = data[0].product[0].status,
                    noInventory = false;

                that.options.priceRangeVal = that.options.skuBasedPrice ? data[0].product[0].price_range : "";

                that.processData(data[0].product[0], inventoryData[0].inventory.products[data[0].product[0].product_id]);
                that.getLabels();
                /*
                 * Update modalActionType if user clicks on 'edit' cart item and then on 'move cart'
                 * mark edititem = false based on user action
                 */
                if (inventoryData[0].inventory.products[productID]) {
                    noInventory = inventoryData[0].inventory.products[productID].all_skus_out_of_stock;
                } else {
                    noInventory = undefined;
                }
                that.editItem = that.currentAction === "QuickView.addToCart" ? false : true;
                that.setUpViews(that, context, 0);
                if ((noInventory === undefined || noInventory === "false") && status !== "I") {
                    that.showOOSView(false, context);
                    //ASCR-56, preselecting the size always if the product has only one size
                    //[Vijendra][ALM-5139] Removing data as we don't need
                    //that.preselectSizes(data,data[0].product[0].all_available_sizes);
                    that.preselectSizes(data[0].product[0].all_available_sizes);
                    that.setupInitialState();
                    if (that.productSku) {
                        that.selectProductBySku(that.productSku, data[0]);
                    }
                } else {
                    that.showOOSView(true, context);
                }
                that.setupBazaarVoice();

                MessageBus.trigger("SocialApp.pinterestUpdate", {
                    'description': that.productDetailCollection.models[0].get('product_name'),
                    'url': window.location.host + that.productDetailCollection.models[0].get('product_url')
                });

                var $sizeChartLink = context.find("a.sizeChartModal");
                if ($sizeChartLink[0]) {
                    $sizeChartLink.modal();
                }
            });
    };
    QuickView.prototype.showOOSView = function (showView, $context) {

        if (showView === true) {
            var defaultColor = this.productDetailCollection.models[0].attributes.default_color,
                productID = this.productDetailCollection.models[0].attributes.product_id,
                imageSetToLoad = productID + "_" + defaultColor + "_ms";
            $('#quickViewForm .mar-product-price').hide();
            $(this.options.selectors.outOfStockWrapper).addClass('active');
            var template = _.template($('#out-of-stock-template').html());
            var templateData = $.parseJSON($('#item-msg-json').html());
            $(this.options.selectors.outOfStockWrapper).html(template(templateData.messages));
            //ART-6776
            $(this.options.selectors.socialContainer).addClass(this.options.hideContainerClass);
            $(this.options.selectors.pdpFavs).addClass(this.options.hideContainerClass);

            MessageBus.trigger('ProductColorView.updateSelectedColor-' + this.options.prefixID + this.options.iteration, null, productID, defaultColor, null, undefined, this.options.prefixID + this.options.iteration, imageSetToLoad);
        } else {
            if ($context[0]) {
                $context.find(this.options.selectors.inStockWrapper).addClass('active');
            } else {
                $(this.options.selectors.inStockWrapper).addClass('active');
            }
        }
    };
    //if there is only one size available preselect it
    //removing data | ALM-5139
    QuickView.prototype.preselectSizes = function (sizes) {
        //console.log("QuickView.preselectSizes()");
        var i = 0,
            j = 0;

        for (i = 0; i < sizes.length; i++) {
            var uniqueSizes = [],
                value = '';

            for (j = 0; j < sizes[i].values.length; j++) {
                value = sizes[i].values[j].value;
                if ($.inArray(value, uniqueSizes) === -1) {
                    uniqueSizes.push(value);
                }
            }

            if (uniqueSizes.length === 1) {
                $(this.options.selectors.productSizeContainerView).find('input[value="' + sizes[i].values[0].id + '"]').trigger('click');
                //Commenting below line for ALM-5139
                //$(this.options.selectors.productColorView).find('input[value="'+data[0].product[0].default_color+'"]').trigger('click');
            }
        }
    };
    // setup initial state
    QuickView.prototype.setupInitialState = function () {
        //console.log("QuickView.setupInitialState()");
        var that = this,
            foundSku;
        // check if there is sku
        if (this.productSku) {
            foundSku = _.find(this.productSKUCollection.models, function (model) {
                return model.get('sku_id') === that.productSku + "";
            });

            // foun SKU
            // console.log(foundSku);
            // fire all the event for the sku

        }
    };

    //grab labels for the templates. bam!
    QuickView.prototype.getLabels = function () {
        //console.log("QuickView.getLabels()");
        var $pdpLabels = $("#pdp-labels");
        if ($pdpLabels[0]) {
            this.configTxt = $.parseJSON($("#pdp-labels").html());
        }
        console.log("pdp-labels-json-parse");
    };

    //placeholder for loading quickview-messages

    QuickView.prototype.loadQuickMessages = function () {
        var $itemMsgJson = $('#item-msg-json');
        if ($itemMsgJson[0]) {
            this.options.quickMessages = $.parseJSON($itemMsgJson.html());
        }
        console.log("item-msg-json");
    };

    //listen for the modal to open
    QuickView.prototype.attachEvents = function () {
        //console.log("QuickView.attachEvents()");
        var that = this;

        //should this pass in the id of the item it is launched from?
        if (this.options.multi !== true) {
            MessageBus.on('quickView.modal.openModal', this.onOpenModal, this);
            MessageBus.on('closed.modal', this.onCloseModal, this);
            MessageBus.on('QuickView.refreshTriggers', this.onRefreshTriggers, this);
        }

        //ALM-5139
        MessageBus.on('PDP.autoSelectSingleSize', function () {
            if (that.quickView) {
                that.preselectSizes(that.quickView.options.collection.models[0].attributes.all_available_sizes);
            }

        });

    };

    QuickView.prototype.onOpenModal = function (context, $el) {
        //console.log("QuickView.modal.openModal EVENT");
        this.isOpen = true;
        this.referenceNum = null;

        var triggerData;

        // get data from the passed in trigger
        if ($el) {
            triggerData = $el.data();
        }

        this.productID = triggerData.productid;
        //trigger data does not actually update so I need to steal it from the dom instead
        this.colorID = $el.attr('data-colorid');

        this.Action = triggerData.action;

        if (this.Action === "editItem") {
            // console.log('editItem');
            this.currentAction = this.options.actions.editItem;
            this.editItem = true;
        }
        else {
            // console.log('addToCart');
            this.currentAction = this.options.actions.addToCart;
        }

        this.itemId = triggerData.id;
        this.giftlistItemId = triggerData.favid;
        this.referenceNum = triggerData.styleid;

        // look for quantity and set it to 1 if not there
        if (triggerData.quantity) {
            this.productQuantity = triggerData.quantity;
        } else {
            this.productQuantity = 1;
        }

        this.productSku = triggerData.sku;

        this.$modal = context;

        //when modal loads, get data
        this.getInitialData(this, context);
    };

    QuickView.prototype.onCloseModal = function () {
        //console.log("QuickView EVENT closed.modal");
        if (this.isOpen === true) {
            this.isOpen = false;
            //console.log('modal closed');
            MessageBus.trigger("removeScene7");
        }
    };

    QuickView.prototype.onRefreshTriggers = function () {
        //console.log("QuickView.refreshTriggers EVENT");
        this.setTriggers();
        window.picturefill();
        if (typeof $.fn.lazyload !== "undefined") {
            $("img.lazy-load").lazyload({
                skip_invisible: false,
                threshold: 200,
                failure_limit: 15
            });
        }
    };

    QuickView.prototype.setupBazaarVoice = function () {
        var that = this;

        this.bazaarvoiceLoader = new BazaarvoiceLoader({
            'callback': function () {
                MessageBus.trigger('quickview.BVLoaded', window.$BV);
            }
        });
    };

    QuickView.prototype.selectProductBySku = function (skuId, data) {
        //console.log("QuickView.selectProductBySku()");
        var that = this;


        function search(nameKey, myArray) {

            for (var i = 0; i < myArray.length; i++) {

                //Making this change as sku ids can be alpha numeric and in that case this
                //earlier comparison was failing.
                //if (parseInt(myArray[i].sku_id) === nameKey) {

                if (myArray[i].sku_id.toString() === nameKey.toString()) {
                    //console.log("yes");
                    return myArray[i];
                }
            }
        }

        var resultObject = search(skuId, data.product[0].skus);
        if (resultObject) {
            var colorId = resultObject.color,
            //sizeId = resultObject.size,
                pid = data.product[0].product_id;
            that.colorID = colorId;
            that.setDefaults(that.options.iteration);
            for (var prop in resultObject) {
                if (prop.indexOf('size') > -1) {
                    //ART-8718 | JU
                    if (API.showMobileView('mobileProductSize')) {
                        $(that.options.selectors.productSizeContainerView).find('select.mar-product-sizes option[value="' + resultObject[prop] + '"]').prop('selected', true).trigger('change');
                    } else {
                        $(that.options.selectors.productSizeContainerView).find('input[value="' + resultObject[prop] + '"]').trigger('click');
                    }
                }
            }
        }
    };

    QuickView.prototype.setUpViews = function (that, $container, j) {
        //console.log("QuickView.setUpViews()");
        var i = 0,
            productID = this.productDetailCollection.models[0].attributes.product_id;

        var mobileProductSize = API.showMobileView('mobileProductSize');
        var mobileProductView = API.showMobileView('mobileProductView');

        this.$container = $container;

        if (this.options.multi === false) {
            that.quickView = new QuickViewView({
                '$parent': $container.find(that.options.selectors.quickView),
                'collection': this.productDetailCollection,
                'skuCollection': that.productSKUCollection,
                'labels': this.configTxt,
                'productQuantity': this.productQuantity,
                'selectedCartSku': that.productSku,
                'modalActionType': that.editItem,
                'prefixID': this.options.prefixID + j
            });
        } else {
            that.quickView = new MultiQuickViewView({
                '$parent': $container.find(that.options.selectors.quickView),
                '$modal': $container,
                'collection': this.productDetailCollection,
                'skuCollection': that.productSKUCollection,
                'all_skus_out_of_stock': that.options.inventoryData.all_skus_out_of_stock,
                'labels': this.configTxt,
                'iteration': j,
                'prefixID': this.options.prefixID + j
            });
        }

        var social = SocialApp.init();

        this.productDetailCollection.models[0].attributes.referenceNum = that.referenceNum;

        that.productDetailView = new ProductDetailView({
            '$parent': $($($container.find(that.options.selectors.productDetailView)).get(j)),
            'collection': this.productDetailCollection,
            'colorCollection': this.productColorCollection,
            'sizeCollection': this.sizeCollection,
            'labels': this.configTxt,
            'multi': this.options.multi,
            'modalActionType': that.editItem
        });

        that.productColorView = new ProductColorSelectView({
            '$parent': $($($container.find('.mar-filter-color')).get(j)),
            '$colorContainer': $($($container.find('.mar-pdp-color-container')).get(j)),
            'collection': this.productColorCollection,
            'skuCollection': this.productSKUCollection,
            'inventoryCollection': this.productInventoryCollection,
            'productID': productID,
            'prefixID': this.options.prefixID + j
        });

        /*
         load scene 7.
         */

        //if this is multi pdp, show singular zoom view
        if (this.options.multi === true && this.options.onPage === true) {
            // render mobile view
            if (mobileProductView) {
                that.productZoomView = new MobileProductView({
                    'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'type': 'zoomView',
                    'height': {
                        mobile: 410,
                        tab: 590,
                        desktop: 590
                    },
                    'prefixID': this.options.prefixID + j
                });
            }
            // render desktop view
            else {
                that.productZoomView = new ProductZoomView({
                    '$el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'productID': productID,
                    'prefixID': this.options.prefixID + j
                });
            }

            //if this is regular quick view and not multi product quickview, show additional images/videos
        } else {
            if (this.options.multi === true && this.options.onPage === false) {
                that.productImageView = new ProductImageView({
                    'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'productID': productID,
                    'prefixID': this.options.prefixID + j
                });
            }

            if (this.options.multi === false && this.options.onPage === false && that.Action !== "editItem") {
                if (mobileProductView) {
                    that.productMediaView = new MobileProductView({
                        'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                        'collection': this.productDetailCollection,
                        'prefixID': this.options.prefixID + j
                    });
                } else {
                    that.productMediaView = new ProductMediaView({
                        'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                        'collection': this.productDetailCollection,
                        'productID': productID,
                        'prefixID': this.options.prefixID + j,
                        'videos': this.productDetailCollection.models[0].attributes.video_names,
                        'qvRef': this
                    });
                }
            }

            if (this.options.multi === false && this.options.onPage === false && that.Action === "editItem") {
                that.productImageView = new ProductImageView({
                    'el': $($($container.find(that.options.selectors.productScene7View)).get(j)),
                    'collection': this.productDetailCollection,
                    'productID': productID,
                    'prefixID': this.options.prefixID + j
                });
            }
        }

        //product favorites
        that.productFavoritesView = new ProductFavoritesView({
            'el': $($($container.find(that.options.selectors.productFavoritesView)).get(j)),
            'productID': that.productDetailCollection.models[0].attributes.product_id,
            'labels': this.configTxt
        });

        if (this.options.multi === true) {
            // JU Fix ALM -150
            //if(this.options.inventoryData.all_skus_out_of_stock !== "true" && this.options.productData.isSellable !== false){
            if (this.options.productData.isSellable !== false) {
                that.productPriceView = new ProductPriceView({
                    '$parent': $($($container.find(that.options.selectors.productPriceView)).get(j)),
                    'productID': productID,
                    'priceRange': that.options.priceRangeVal
                });
            }
        } else {
            that.productPriceView = new ProductPriceView({
                '$parent': $($($container.find(that.options.selectors.productPriceView)).get(j)),
                'productID': productID,
                'priceRange': that.options.priceRangeVal
            });
        }

        this.productPromoView = new ProductPromoView({
            '$parent': $($($container.find(that.options.selectors.productPromoView)).get(j)),
            'productID': productID,
            'prefixID': this.options.prefixID + j,
            'skuBasedPromotion': that.options.skuBasedPromotion
        });

        this.productSizeContainerView = new ProductSizeContainerView({
            '$parent': $($($container.find(that.options.selectors.productSizeContainerView)).get(j)),
            'collection': that.productSizeCollection,
            'skuCollection': that.productSKUCollection,
            'inventoryCollection': that.productInventoryCollection,
            'productID': productID,
            '$container': $($container.find('.mar-pdp-section').get(j)),
            'productDetailCollection': this.productDetailCollection,
            'prefixID': this.options.prefixID + j,
            'skuBasedPrice': that.options.skuBasedPrice,
            'skuBasedPromotion': that.options.skuBasedPromotion,
            // for mobile version
            'mobile': mobileProductSize
        });

        $container.find('input.mar-product-quantity').numberInput({
            'pdpMsgs': this.options.quickMessages,
            'pdpMsgsEl': this.options.selectors.quickMsgClass
        });

        MessageBus.on('PDP.setNextDefaultColor', this.onSetNextDefaultColor, this);

        that.setDefaults(j);

        //temporary slick call. move into image view
        setTimeout(function () {
            //console.log("QuickView.setUpViews().setTimeout()");
            $container.find('.mar-product-thumbnails-holder').slick({
                'slidesToShow': 3,
                'infinite': true,
                'slide': '.mar-product-thumbnail'
            });
        }, 0);
    };

    QuickView.prototype.setDefaults = function (iteration) {
        //console.log("QuickView.setDefaults()");
        var color = this.productDetailCollection.models[0].attributes.default_color,
            productID = this.productDetailCollection.models[0].attributes.product_id,
            that = this;

        //ALM-5433 | If default Color is coming in JSON data but not available in all_available_colors

        this.dfColor = color;

        this.colorPre = _.filter(this.productDetailCollection.models[0].attributes.all_available_colors[0].values, function (prod) {
            return prod.id === that.dfColor;
        });

        if (color === undefined || _.isEmpty(color) || this.colorPre.length === 0) {
            color = this.productDetailCollection.models[0].attributes.all_available_colors[0].values[0].id;
        }

        if (this.colorID !== undefined) {
            color = this.colorID.toString();
        }

        MessageBus.trigger('QuickView.setDefaultColor-' + this.options.prefixID + iteration, color, productID);
    };

    QuickView.prototype.setupAJAXListeners = function () {
        //console.log("QuickView.setupAJAXListeners()");
        MessageBus.on('QuickView.addToCart', this.onAddtoCart, this);
        MessageBus.on('QuickView.addToFavorites', this.onAddToFavorites, this);
    };

    QuickView.prototype.onAddToFavorites = function (itemID) {
        //console.log("QuickView.addToFavorites EVENT");
        //what do they need to add to cart
        this.updateQuickView(API.endpoints.QVaddToFavorites, {
            'Action': this.options.actions.addToFavorites,
            'itemId': itemID
        });
    };

    QuickView.prototype.onAddtoCart = function (sku, qty, productId) {
        //console.log("QuickView.addToCart EVENT");
        this.sendAJAXRequest(API.endpoints.QVaddToCart, {
            'Action': this.currentAction,
            'skuId': sku,
            'quantity': qty,
            'productId': productId,
            'giftlistItemId': this.giftlistItemId,
            'itemId': this.itemId
        });
    };

    QuickView.prototype.updateQuickView = function (url, urlParams) {
        //console.log("QuickView.updateQuickView()");
        var that = this;

        MessageBus.trigger("indicator.show");

        // Assign handlers immediately after making the request,
        // and remember the jqXHR object for this request
        var dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post',
            'dataType': 'json'
        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return dfd;
    };

    QuickView.prototype.sendAJAXRequest = function (url, urlParams) {
        //console.log("QuickView.sendAJAXRequest()");
        var that = this;

        MessageBus.trigger("indicator.show");

        // Assign handlers immediately after making the request,
        // and remember the jqXHR object for this request
        this.options.dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post'
        }).done(function (data) {
            //console.log("QuickView.sendAJAXRequest().done()");
            if (data.status === "success") {
                /*
                 * Ensighten Tracking Start:
                 * Event: addToCart:- When user clicks on "Add To Cart" and adds item to non-empty cart
                 */
                var eventData = {},
                    userStateData = API.getUserState();

                if (userStateData.cartData.numberOfItems > 0) {
                    eventData = {"name": "addToCart", "pid": urlParams.productId, "sku": urlParams.skuId};
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);
                } else {
                    eventData = {"name": "createCart", "pid": urlParams.productId, "sku": urlParams.skuId};
                    $('body').trigger(API.endpoints.brandConfig.ensightenEventName, eventData);
                }

                /*
                 * Ensighten Tracking End
                 */

                MessageBus.trigger("API.CartUpdated", data.data.cartItems);
                MessageBus.trigger("indicator.hide");
                MessageBus.trigger("modal.close");
                if (that.currentAction !== that.options.actions.editItem) {
                    // depending on our flag (if edit we will not trigger this one);
                    // If the page is not cart page then don't trigger mini cart
                    if (typeof API.isCartPage === "undefined" || API.isCartPage === false) {
                        MessageBus.trigger('addToMinicart', data);
                    }
                }

                //This check is for fav items to move to cart case where we have to update fav. view on cart
                //page after movement of that item in cart
                // check is based on giftlistItemId which is only available on this case.

                if (typeof  that.giftlistItemId !== 'undefined') {
                    MessageBus.trigger('moveItemToCart.QuickViewAppView', data, urlParams.productId);
                    that.giftlistItemId = "";
                }

                if (typeof that.itemId !== 'undefined') {
                    MessageBus.trigger('updateCart.QuickViewAppView', data);
                    that.itemId = "";
                }
            }
            else {
                //console.log("error");
                $(that.options.selectors.quantityDetail).html(data.data.errors[0].msg);
            }

        }).fail(function (data) {

        }).always(function () {
            MessageBus.trigger("indicator.hide");
        });

        return this.options.dfd;
    };

    //separate data into their proper collections
    QuickView.prototype.processData = function (skuData, inventoryData) {
        //console.log("QuickView.processData()");
        /*this.productDetailCollection.reset();
         this.productColorCollection.reset();
         this.productSizeCollection.reset();
         this.productSKUCollection.reset();
         this.productInventoryCollection.reset();

         this.productDetailCollection.add(skuData);

         this.productColorCollection.add(skuData.all_available_colors);

         this.productSizeCollection.add(skuData.all_available_sizes);

         this.productSKUCollection.add(skuData.skus);

         this.productInventoryCollection.add(inventoryData.skus);*/

        this.productSKUCollection.reset(skuData.skus);
        this.productInventoryCollection.reset(inventoryData.skus);
        this.productDetailCollection.reset(skuData);
        this.productColorCollection.reset(skuData.all_available_colors);
        this.productSizeCollection.reset(skuData.all_available_sizes);
    };

    QuickView.prototype.onSetNextDefaultColor = function (j) {
        MessageBus.trigger('QuickView.setNextDefaultColor-' + this.options.prefixID + this.options.iteration, this.productDetailCollection.models[0].attributes.product_id);
    };

    QuickView.prototype.close = function () {
        //console.log("QuickView.close()");
        MessageBus.off('QuickView.addToCart', this.onAddtoCart, this);
        MessageBus.off('QuickView.addToFavorites', this.onAddToFavorites, this);
        MessageBus.off('PDP.setNextDefaultColor', this.onSetNextDefaultColor, this);

        if (this.options.multi !== true) {
            MessageBus.off('quickView.modal.openModal', this.onOpenModal, this);
            MessageBus.off('closed.modal', this.onCloseModal, this);
            MessageBus.off('QuickView.refreshTriggers', this.onRefreshTriggers, this);
        }

        this.productDetailCollection.remove();
        this.productColorCollection.remove();
        this.productSizeCollection.remove();
        this.productSKUCollection.remove();
        this.productInventoryCollection.remove();

        delete this.productDetailCollection;
        delete this.productColorCollection;
        delete this.productSizeCollection;
        delete this.productSKUCollection;
        delete this.productInventoryCollection;

        if (typeof this.quickView !== "undefined") {
            this.quickView.close();
            delete this.quickView;
        }
        if (typeof this.productDetailView !== "undefined") {
            this.productDetailView.close();
            delete this.productDetailView;
        }
        if (typeof this.productColorView !== "undefined") {
            this.productColorView.close();
            delete this.productColorView;
        }
        if (typeof this.productZoomView !== "undefined") {
            this.productZoomView.close();
            delete this.productZoomView;
        }
        if (typeof this.productImageView !== "undefined") {
            this.productImageView.close();
            delete this.productImageView;
        }
        if (typeof this.productMediaView !== "undefined") {
            this.productMediaView.close();
            delete this.productMediaView;
        }
        if (typeof this.productFavoritesView !== "undefined") {
            this.productFavoritesView.close();
            delete this.productFavoritesView;
        }
        if (typeof this.productPriceView !== "undefined") {
            this.productPriceView.close();
            delete this.productPriceView;
        }
        if (typeof this.productPromoView !== "undefined") {
            this.productPromoView.close();
            delete this.productPromoView;
        }
        if (typeof this.productSizeContainerView !== "undefined") {
            this.productSizeContainerView.close();
            delete this.productSizeContainerView;
        }
    };
    QuickView.prototype.oosImageRender = function () {
        var defaultColor = this.productDetailCollection.models[0].attributes.all_available_colors[0].values[0].id,
            imageSetToLoad = this.productDetailCollection.models[0].attributes.all_available_colors[0].values[0].imageset,
            productID = this.productDetailCollection.models[0].attributes.product_id;

        MessageBus.trigger('ProductColorView.updateSelectedColor-' + this.options.prefixID + this.options.iteration, null, productID, defaultColor, null, undefined, this.options.prefixID + this.options.iteration, imageSetToLoad);

    };
    return QuickView;
});

define('ensighten', ['api'], function (API) {
    'use strict';

    var _defaults = {};

    var Ensighten = function () {
            this.init();
        },

        getDefaultValuesOnPageLoad = function () {

        };

    //Globally available to hold tracking data of the page and events
    Ensighten.prototype.pageTrackingData = {};

    Ensighten.prototype.init = function () {
        if (typeof window.ensDL === "function") {
            //Check for Tracking Data
            if (typeof window.mauricesMarketingDL !== "undefined" && !jQuery.isEmptyObject(window.mauricesMarketingDL)) {
                //Create page level global tracking object
                this.pageTrackingData = this.getPageTrackingData();

                /*
                 * Viewport related data update
                 */
                if (API.isMobileOrTabletDevice()) {
                    if (API.isMobileDevice()) {
                        this.pageTrackingData.global.site = "mobile";
                    } else {
                        this.pageTrackingData.global.site = "tablet";
                    }
                }

                getDefaultValuesOnPageLoad();

                /*var $productDetail = $("#productDetail"),
                 $searchResultWrapper = $(".mar-search-wrapper");


                 * Page specific code to be exequted on load

                 if($productDetail[0] && $searchResultWrapper[0]){
                 //console.log("page load default ensighten data------------", JSON.stringify(this.pageTrackingData));
                 } else{
                 /*
                 * Generic code to be exequted on load of all pages not having their own ensighten execution
                 * Execute page load tracking with default set of data

                 //window.ensDL(this.pageTrackingData);
                 }*/

                //Set Page Load Level Information into Original Object
                window.mauricesMarketingDL = jQuery.extend(true, {}, this.pageTrackingData || {});
            }
        }
    };

    Ensighten.prototype.attachEvenets = function () {

    };

    Ensighten.prototype.getPdpTrackingData = function ($productTarget) {
        var pageTrackingInfo = {};
        if ($productTarget[0]) {
            /*Get Selected Size from Dom*/
            var $sizeContainer = $productTarget.find('.asc-product-in-stock-container .asc-product-size-container'),
                sizeTempObj = {};

            if ($sizeContainer[0]) {
                $sizeContainer.each(function () {
                    var $this = $(this).find('input[type="radio"]:checked'),
                        sizeType = $this.data('size-type') || "",
                        sizeValue = $this.data('size-value') || "";

                    if (sizeType && sizeValue) {
                        sizeTempObj[sizeType.toLowerCase()] = sizeValue;
                    }
                });

                if (!$.isEmptyObject(sizeTempObj)) {
                    pageTrackingInfo.sizeData = [];

                    pageTrackingInfo.sizeData.push(sizeTempObj);
                }
            }

            /*Get Selected Size from Dom*/

            /*Get Applied Price from Dom*/
            var $priceContainer = $productTarget.find('.asc-product-price .mar-price'),
                priceValue = "",
                salePriceValue = "";

            if ($priceContainer[0]) {
                priceValue = $.trim($priceContainer.filter(".strikethrough").text());
                if (priceValue) {
                    pageTrackingInfo.priceData = priceValue.replace("$", "");
                } else {
                    pageTrackingInfo.priceData = "";
                }
                salePriceValue = $.trim($priceContainer.filter(":not(.strikethrough)").text());
                if (salePriceValue) {
                    pageTrackingInfo.salePriceData = salePriceValue.replace("$", "");
                } else {
                    pageTrackingInfo.salePriceData = "";
                }
            }
            /*Get Selected Size from Dom*/

            /*Get Applied Color from Dom*/
            var $colorContainer = $productTarget.find('.mar-pdp-color-container .cmn-radio-container');
            if ($colorContainer[0]) {
                pageTrackingInfo.colorData = $colorContainer.find('input[type="radio"]:checked').data('option-value') || "";
            }
            /*Get Selected Color from Dom*/

            /*Get Quantity value from Dom*/
            var $qtyField = $productTarget.find('.mar-pdp-color-container #mar-item-qty');
            if ($qtyField[0]) {
                pageTrackingInfo.qtyData = $qtyField.val() || 1;
            }
            /*Get Selected Color from Dom*/
        }
        return pageTrackingInfo;
    };

    Ensighten.prototype.getPageTrackingData = function () {
        return jQuery.extend(true, {}, window.mauricesMarketingDL || {});
    };

    Ensighten.prototype.getProductIndexByPID = function (productId) {
        var productList = this.pageTrackingData.order && this.pageTrackingData.order.items || [],
            len = productList.length;
        for (var i = 0; i < len; i++) {
            if (productList[i].pid.toString() === productId.toString()) {
                return i;
            }
        }
        return -1;
    };

    return new Ensighten();
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('components/global/favorites', [
    'api',
    'MessageBus',
    'ensighten'
], function (API,
             MessageBus,
             ensighten) {
    'use strict';

    //defaults for use throughout the footer
    var _defaults = {
        'actions': {
            'addFavorite': 'Favorites.addFavorite',
            'removeFavorite': 'Favorites.removeFavorite'
        }
    };

    var Favorites = function () {
    };

    /**
     * init
     * @return {[type]} [description]
     */
    Favorites.prototype.init = function (customOptions) {
        // deep extend defaults
        var that = this;
        this.options = $.extend(true, {}, _defaults, customOptions);

        this.setupEnsightenTrackingEvents();

        this.attachEvents();

        this.$exclusionSet = $(".cmn-checkout-header");
        this.$exclusionSetDashboard = $(".cmn-dashboard");
        this.$exclusionSetModal = $(".secureFrame");
        this.$exclusionSetCartPage = $("#mar-cart .cmn-checkout-header");

        //Return from here if we are on checkout pages [Performance AJAX calls Removal]
        if (!that.$exclusionSetCartPage[0] && that.$exclusionSet[0] || that.$exclusionSetDashboard[0] || that.$exclusionSetModal[0]) {
            return {};
        }
        else {
            //else run this update call for other pages
            this.getFavorites(false);
        }


    };

    Favorites.prototype.getFavorites = function (update) {
        var that = this,
            deferredObj;


        if (update === true) {
            deferredObj = API.updateFavorites();
        } else {
            deferredObj = API.getFavorites();
        }

        $.when(deferredObj)
            .then(function (data) {
                that.favorites = data.favorites.products;
                MessageBus.trigger("API.FavoritesUpdated", data.favorites.products);

                // is this a guest user
                if (data.favorites.logged_In === 'false') {
                    // if we are on My Account My Favorites page show log in modal
                    if ($('#cmn-account-favorites').length > 0) {
                        console.log('guest My account my favorites');
                        //Commenting below line as for issue ALM-1710, ALM - 1714
                        //MessageBus.trigger('errorModal.openModal', data.favorites.Action_status.guest_error_message, data.favorites.Guest_Sign_In_Msg);
                        // signinModalFiredEvent
                    }
                }
            });
    };

    Favorites.prototype.attachEvents = function () {
        var that = this;

        MessageBus.on("ProductFavoritesView.removeFavorite", function (productID) {
            that.removeFavorite(productID);
        });

        MessageBus.on("ProductFavoritesView.addFavorite", function (productID) {
            that.addFavorite(productID);
        });

        MessageBus.on("cartApp.updateFavorites", function () {
            that.getFavorites(true);
        });

        MessageBus.on("dashboardApp.updateFavorites", function () {
            that.getFavorites(true);
        });

        MessageBus.on("onBeforeClose.modal", function () {
            var itemsToBeRemovedFromFav = $('#cmn-account-favorites .to-be-removed').remove();
            //  itemsToBeRemovedFromCart = $('.mar-favorites-content .to-be-removed').remove();

            if ($("#cmn-account-favorites")[0] && $("#cmn-account-favorites").find('.mar-cart-item').length === 0) {
                location.reload(true);
            }
            else {
                $('.asc-registered-user-msg').hide();
            }
        });
    };

    Favorites.prototype.setupEnsightenTrackingEvents = function () {
        var that = this;

        MessageBus.on("ProductFavoritesView.removeFavorite", function (productID) {
            /* Remove From Favorites tracking implementation start */
            $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {
                "name": "removeFromFavorites",
                "pid": productID
            });

            // if(ensighten && ensighten.pageTrackingData && ensighten.pageTrackingData.wishlist && window.ensDL && productID){
            //     var wishlist = ensighten.pageTrackingData.wishlist.items || [],
            //         thisProductIndex = $.inArray(productID.toString(), wishlist);

            //     if(thisProductIndex !== -1){
            //         wishlist.splice(thisProductIndex, 1);
            //         window.ensDL(ensighten.pageTrackingData);
            //     }
            // }
        });

        MessageBus.on("ProductFavoritesView.addFavorite", function (productID) {
            /* ADD To Favorites tracking implementation start */
            $('body').trigger(API.endpoints.brandConfig.ensightenEventName, {
                "name": "addToFavorites",
                "pid": productID
            });

            // if(ensighten && ensighten.pageTrackingData && ensighten.pageTrackingData.wishlist && window.ensDL && productID){
            //     var wishlist = ensighten.pageTrackingData.wishlist.items || [],
            //         thisProductIndex = $.inArray(productID.toString(), wishlist);

            //     if(thisProductIndex === -1){
            //         //Push Updated Filter Value after handlig empty element
            //         if(wishlist.length > 0 && /^\s*$/.test(wishlist[0])){
            //             wishlist[0] = productID.toString();
            //         } else{
            //             wishlist.push(productID.toString());
            //         }

            //         window.ensDL(ensighten.pageTrackingData);
            //     }
            // }
        });
    };

    Favorites.prototype.addFavorite = function (productID) {
        var that = this;
        that.updateFavorites(API.endpoints.addFavorite, {
            'Action': that.options.actions.addFavorite,
            'productID': productID,
            'display': 'add'
        });
    };

    Favorites.prototype.removeFavorite = function (productID) {
        var that = this;

        that.updateFavorites(API.endpoints.removeFavorite, {
            'Action': that.options.actions.removeFavorite,
            'productID': productID,
            'display': 'remove'
        });
    };

    Favorites.prototype.updateFavorites = function (url, urlParams) {
        var that = this,
            item,
            itemCart,
            itemFav;
        this.options.dfd = $.ajax({
            'url': url,
            'data': urlParams,
            'type': 'post'
        }).done(function (data) {
            //use this for production. below call gets called anyway, b
            //but calls the same feed. so the change won't be apparent.
            if (typeof data === "object" && data.status && data.status.toLowerCase() === "invalidsession") {
                window.location.href = data.redirectURLSessionTimout;
            }
            that.getFavorites(true);

            if ((data.favorites.threshold_crossed !== undefined) &&
                (data.favorites.threshold_crossed.toLowerCase() === 'true') &&
                (data.favorites.logged_In !== undefined) &&
                (data.favorites.logged_In.toLowerCase() === 'false')) {

                MessageBus.trigger('errorModal.openModal', data.favorites.Action_status.error_message, data.favorites.Sign_In_Msg);
            }


            // For removing and adding favorites on Cart and My Favorites

            itemFav = $('#cmn-account-favorites').find('button[data-productid="' + urlParams.productID + '"]').parents('.mar-cart-item');
            itemCart = $('.mar-favorites-content').find('a[data-productid="' + urlParams.productID + '"]').parents('.mar-favorites-item');

            if (itemFav[0]) {
                item = itemFav;
            } else if (itemCart[0]) {
                item = itemCart;
            }
            if (typeof item !== 'undefined' && item[0]) {
                if (urlParams.display === 'add') {
                    item.removeClass('visibly-hidden to-be-removed');
                } else if (urlParams.display === 'remove') {
                    item.addClass('visibly-hidden to-be-removed');
                }
            }

            MessageBus.trigger("API.dashboard.FavoritesUpdated", true);
            MessageBus.trigger('favorites.nowCloseRemoveModal');

        }).fail(function (data) {
            console.log("error", data);
        }).always(function (data) {
            // no matter what happens remove the indicator
            MessageBus.trigger("indicator.hide");
        });
    };

    Favorites.prototype.errorModal = function (messageData) {
    };

    return new Favorites();
});

/**
 To Use:
 on element validation call new instance of this plugin and make sure to pass element and options to the instance
 element == form element
 options have class name for element
 */
define('../../assets/scripts/third-party/QASEmail', ["MessageBus", "api"],
    function (MessageBus, api) {
        'use strict';

        var defaults = {
            'dfd': {},
            'values': [],
            'errorMessage': 'Please enter a valid email.',
            'errorContainer': {},
            'errorClass': 'parsley-error',
            'dfds': {},
            'totalEmails': 5
        };

        /**
         @constructor
         */
        function QASEmail(customOptions) {

            // extend element
            this.options = $.extend(true, {}, defaults, customOptions);

            this.init();

        }

        //append to body element
        QASEmail.prototype.init = function () {
            var that = this;
            that.events();
        };


        QASEmail.prototype.events = function () {
            // For Email Parsley error message (When both QAS and parsley error gets appended)
            $.listen('parsley:field:error', function (evt) {
                var that = this,
                    parsleyID;
                parsleyID = evt.OptionsFactory.fieldOptions.id;
                console.log(parsleyID);
                if ($('#parsley-id-' + parsleyID + ' .parsley-custom-error-message')[0]) {
                    $('#parsley-id-' + parsleyID + ' .parsley-custom-error-message').remove();
                }
            });
        };

        QASEmail.prototype.validate = function (emailElement) {

            // create a promise

            this.sendToQAS(emailElement.val());

            this.options.$el = emailElement;
            // pull parsley elements from the field so that we can error message
            this.options.errorContainer = $(emailElement.data('parsleyErrorsContainer'));
            this.options.errorMessage = emailElement.data('parsleyErrorMessage');

            //ART - 9289
            //this.options.parsleyID = emailElement.data('parsleyId');
            this.options.parsleyID = emailElement.attr('data-parsley-id');

            // in instances where message is not defined do a default email message
            if (this.options.errorMessage === undefined) {
                this.options.errorMessage = 'Please enter a valid email.';
            }

            // create a promise
            this.options.dfd = new $.Deferred();

            return this.options.dfd.promise();
        };

        QASEmail.prototype.sendToQAS = function (emailAddr) {
            var that = this,
                splitArray = emailAddr.split(',');
            // check if our element actually contains more than one email
            if (splitArray[0] === emailAddr) {
                // we have only one so call single email validation
                this.validateSingle(emailAddr);
            } else {
                this.validateMiltiple(splitArray);
            }
        };

        // do one simple validation and be done with it
        QASEmail.prototype.validateSingle = function (emailAddr) {

            var that = this;

            MessageBus.trigger("indicator.show");

            this.options.dfd = $.ajax({
                'type': 'get',
                'url': api.endpoints.QASEmail,
                'dataType': 'json',
                'data': {
                    'email': emailAddr
                }
            }).done(function (data) {

                MessageBus.trigger("indicator.hide");
                that.processValidation(data);

            }).error(function (xhr) {
                MessageBus.trigger("indicator.hide");

                that.options.dfd.resolve("resolved due to service error");

            });
        };
        // validate multiple
        // this is going to be a mess
        QASEmail.prototype.validateMiltiple = function (splitArray) {
            // do a for loop
            var that = this,
                len = splitArray.length,
                i;
            MessageBus.trigger("indicator.show");

            for (i = 0; i < this.options.totalEmails; i++) {
                // loop through and call ajax while asigning the deffered objects
                if (i < len) {
                    this.options.dfd[i] = $.ajax({
                        'type': 'get',
                        'url': api.endpoints.QASEmail,
                        'dataType': 'json',
                        'data': {
                            'email': splitArray[i]
                        }
                    });
                } else {
                    this.options.dfd[i] = true;
                }
            }
            // call a when
            $.when(this.options.dfd[0], this.options.dfd[1], this.options.dfd[2], this.options.dfd[3], this.options.dfd[4]).then(function (email1, email2, email3, email4, email5) {
                MessageBus.trigger("indicator.hide");
                var emailsValid = true,
                    badEmails = [],
                    objects = [email1, email2, email3, email4, email5],
                    i, len = objects.length;

                for (i = 0; i < len; i++) {
                    if (objects[i] !== true) {
                        //console.log(objects[i][0]);
                        if (objects[i][0].Certainty.toLowerCase() !== "verified" && objects[i][0].Certainty.toLowerCase() !== "unknown") {
                            emailsValid = false;
                            badEmails.push(objects[i][0].Email);
                        }
                    }

                }
                // check validiti
                if (emailsValid === true) {
                    that.options.dfd.resolve("verified");
                    // remove all the parsley elements
                    $('#parsley-id-' + that.options.parsleyID).empty();
                    // remove class on our email element
                    that.options.$el.removeClass(that.options.errorClass);
                } else {
                    // setup error message
                    $('#parsley-id-' + that.options.parsleyID).html('<li class="parsley-custom-error-message">' + that.options.errorMessage + ' <br>Please check: ' + badEmails[0] + '</li>');
                    that.options.dfd.reject("failure");
                    // setup class on our email element
                    that.options.$el.addClass(that.options.errorClass);
                }
            }).always(function () {
                // always trun off the inidicator
                MessageBus.trigger("indicator.hide");
            });
        };

        QASEmail.prototype.processValidation = function (data) {
            // check our response
            if (data.Certainty.toLowerCase() === "verified" || data.Certainty.toLowerCase() === "unknown") {
                this.options.dfd.resolve("verified");
                // remove all the parsley elements
                $('#parsley-id-' + this.options.parsleyID).empty();
                // remove class on our email element
                this.options.$el.removeClass(this.options.errorClass);
            } else {
                // setup error message
                $('#parsley-id-' + this.options.parsleyID).html('<li class="parsley-custom-error-message">' + this.options.errorMessage + '</li>');
                this.options.dfd.reject("failure");
                // setup class on our email element
                this.options.$el.addClass(this.options.errorClass);
            }
        };

        return QASEmail;

    });

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('components/global/errorModal', [
    'api',
    'MessageBus'
], function (API,
             MessageBus) {
    'use strict';

    //defaults for use throughout the footer
    var _defaults = {
        'selectors': {
            'modalContianer': '#asc-error-modal-container',
            'modal': '#asc-error-modal',
            'modalTemplate': '#error-modal-template',
            'closeBtn': '.asc-close-security-question-error-modal'
        },
        'title': "Item cannot be added",
        'message': 'As a signed out user, you can only favorite 15 items. Please <a href="#">sign in</a> or <a href="#">register</a> to add more.'
    };

    var ErrorModal = function () {
        this.init();
    };

    /**
     * init
     * @return {[type]} [description]
     */
    ErrorModal.prototype.init = function (customOptions) {
        var that = this;

        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);
        // only start this if there is a template
        var $template = $(that.options.selectors.modalTemplate);
        if ($template.length > 0) {
            this.template = _.template($template.html());
            this.attachEvents();
        }

    };

    ErrorModal.prototype.attachEvents = function () {
        var that = this;

        console.log('setup');

        //listen to request to open error modan
        MessageBus.on('errorModal.openModal', function (title, message) {
            that.options.title = title;
            that.options.message = message;

            var $modalContianer = $(that.options.selectors.modalContianer);

            //if Modal conatianer element has been lost, create new reference
            if ($modalContianer.length <= 0) {
                console.log('missing modal container');
                $modalContianer = $('<div id="asc-error-modal-container" data-modalevent="modal.openErrorModal" data-modalonload="true"></div>');
                $modalContianer.insertAfter($(that.options.selectors.modal));
            }

            //activate modal trigger
            $modalContianer.data('modalclass', 'mar-error-modal').modal({'target': that.options.selectors.modal});
            $modalContianer.click();
        });

        //on modal actived
        MessageBus.on("modal.openErrorModal", function ($context) {
            var $modal_container = $context.children(that.options.selectors.modalContianer);

            var template = that.template({
                title: that.options.title,
                message: that.options.message
            });

            $context.html(template).fadeIn();
            $('.mar-modal-trigger').modal();

            $(that.options.selectors.closeBtn).click(function () {
                MessageBus.trigger('modal.close');
            });
        });

    };

    return new ErrorModal();
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('../../imports/scripts/components/global/dealsPromotions', [
    'api',
    'MessageBus',
    'emailValidator',
], function (API,
             MessageBus,
             EmailValidator) {
    'use strict';

    //defaults for use throughout the module
    var _defaults = {
        'selectors': {}
    };

    var DealsPromotions = function () {
    };

    /**
     * init
     * @return {[type]} [description]
     */
    DealsPromotions.prototype.init = function () {
        // deep extend defaults
        this.options = $.extend(true, {}, _defaults);

        var HIDDEN_CLASS_NAME = 'visuallyhidden';
        var PARSLEY_ERROR_CLASS_NAME = 'parsley-error';
        var PARSLEY_ERROR_LIST_FILLED_CLASS_NAME = 'filled';
        var PARSLEY_ERROR_LIST_SELECTOR = '.parsley-errors-list';

        this.attachEvents();

        this.options.validator = new EmailValidator();
        this.options.$error = $('.mar-error-text.mar-deals-promo-email-error');
        $('#ascAboutUsPromotionSignUp').parsley();

    };

    DealsPromotions.prototype.attachEvents = function () {
        // console.log('dealsPromoForm');
        var that = this,
            $promotionTexts = $('#ascAboutUsPromotionSignUp'),
            $subField = $('#mobile-alerts-subfield'),
            $emailUpdates = $("#emailCheck"),
            $emailAddressInput = $("#asc-aboutus-newsletter-email");


        //$promotionTexts.find('#mar-signup-mobile-number').prop({'disabled': true});
        // validate mobile field if checked
        $promotionTexts.find('#checkbox-send-me-texts').change(function (e) {
            if (e.target.checked) {
                $promotionTexts.find('#mar-signup-mobile-number').prop('disabled', false);
                $promotionTexts.find('#mar-signup-mobile-number').attr("data-parsley-required", "true");
                $promotionTexts.find('#mar-signup-mobile-number').parsley();
            } else {
                $promotionTexts.find('#mar-signup-mobile-number').prop('disabled', true);
                $promotionTexts.find('#mar-signup-mobile-number').val('');
                $promotionTexts.find('#mobile-alerts-subfield').attr('data-parsley-excluded');
                $promotionTexts.find('#mar-signup-mobile-number').removeAttr("data-parsley-required");
                $promotionTexts.find('#mar-signup-mobile-number').parsley().destroy();
                $subField.find('.parsley-error')
                    .removeClass('parsley-error');
                $subField.find('.parsley-errors-list')
                    .removeClass('filled');
                $subField.find('.parsley-errors-list li')
                    .empty();
            }
        });

        $emailUpdates.change(function (e) {
            if (e.target.checked) {
                $emailAddressInput.prop('disabled', false);
            }
            else {
                $emailAddressInput.prop('disabled', true);
                // JU | ALM-781 Fix | Narahari
                $emailAddressInput.val('');
                $emailAddressInput.attr('data-parsley-excluded');
                $emailAddressInput.removeAttr("data-parsley-required");
                $emailAddressInput.parsley().destroy();
            }
        });

        // function handles submission of form
        $promotionTexts.on('submit', function (e) {
            e.preventDefault();
            if ($('#ascAboutUsPromotionSignUp').parsley().validate() !== true) {
                return false;
            } else {
                MessageBus.trigger('EmailSignup.dealPromotionSubmit', e);
            }

        });

    };

    return new DealsPromotions();
});
/**
 To Use:

 call 'global indicator' on body element
 */
define('../../imports/scripts/plugins/globalIndicator', ["MessageBus"],
    function (MessageBus) {
        'use strict';

        var pluginName = 'globalIndicator',
            defaults = {
                //these are all classes
                'selectors': {
                    'holder': 'asc-global-indicator',
                    'showClass': 'show',
                    'hideClass': 'hide'
                }
            };

        /**
         @constructor
         */
        function GlobalIndicator(element, customOptions) {
            this.element = element;
            this.options = $.extend(true, {}, defaults, customOptions);
            this._name = pluginName;

            this.init();
        }

        //append to body element
        GlobalIndicator.prototype.init = function () {
            //add the preloader to the dom
            $("body").prepend('<div class="' + this.options.selectors.holder + '"><div class="loader"></div></div>');

            this.$el = $("." + this.options.selectors.holder);
            this.addEventListeners();
        };

        GlobalIndicator.prototype.addEventListeners = function () {
            var that = this;

            MessageBus.on("indicator.show", function () {
                that.$el.addClass(that.options.selectors.showClass);
                that.$el.removeClass(that.options.selectors.hideClass);
            });

            MessageBus.on("indicator.hide", function () {
                that.$el.addClass(that.options.selectors.hideClass);

                setTimeout(function () {
                    that.$el.removeClass(that.options.selectors.showClass);
                    that.$el.removeClass(that.options.selectors.hideClass);
                }, 1000);
            });
        };

        $.fn[pluginName] = function (options) {
            this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new GlobalIndicator(this, options));
                }
            });

            return this;
        };

    });
/**
 * Class that loads tracking script for fonts
 * @author mveljk
 * @version $Rev$
 * @requires OtherClassName
 */

define('third-party/FontTracking', ['api'], function (API) {
    'use strict';

    var _defaults = {
        'clientID': API.endpoints.fontsTrackingConfig.clientID || ""
    };

    function FontTracking(customOptions) {
        // in case we want to extend this
        var apiUrl = API.endpoints.fontsTrackingConfig.scriptUrl || "";
        if (apiUrl && /^\s*$/.test(apiUrl) === false) {
            this.options = $.extend({}, _defaults, customOptions);
            // load our first script
            window.MTIProjectId = this.options.clientID;
            var mtiTracking = document.createElement('script');
            mtiTracking.type = 'text/javascript';
            mtiTracking.async = 'true';
            mtiTracking.src = apiUrl;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(mtiTracking);
        }
    }

    return new FontTracking();
});

/**
 *    collapseExpand: collapse expand behaviour of a content on toggle-click of any specific target
 *    Written in jquery plug-in format
 *
 *    @author Umang Jain
 */
(function ($) {

    $.fn.collapseExpand = function (options) {

        var settings = $.extend(true, {
            triggerSelectorName: "toggle-head",
            targetSelectorName: "toggle-content",
            expandClass: "toggleExpand",
            collapsed: true,
            completeCallback: null
        }, options || {});

        if (this.length === 0) {
            return;
        }

        //toggle behavior on click
        var collapseExpandDisplay = function ($target) {
            $target.off('click.collapseExpand').on('click.collapseExpand', function (evt) {
                //evt.preventDefault();
                viewToggler($(this), true);
            });
        };

        //callback function confirm that animation of toggle is completed
        var completeCallback = function () {
            if (typeof settings.completeCallback === "function") {
                settings.completeCallback(this);
            }
        };
        //toggle functionality
        var viewToggler = function ($target, clicked) {
            var isClicked = clicked || false,
                targetContentName = $target.data(settings.triggerSelectorName),

                $currentTarget = $("[data-" + settings.targetSelectorName + "=" + targetContentName + "]");
            if (isClicked) {
                $currentTarget.toggle("20");
                $target.toggleClass(settings.expandClass);
            } else {
                if (settings.collapsed) {
                    $currentTarget.slideUp(20, completeCallback);
                    $target.removeClass(settings.expandClass);
                } else {
                    $currentTarget.slideDown(20, completeCallback);
                    $target.addClass(settings.expandClass);
                }
            }

        };

        return this.each(function () {
            var $this = $(this);
            viewToggler($this);
            collapseExpandDisplay($this);
        });
    };

})(jQuery);
define("plugins/collapseExpand", function () {
});

define('global', [
    'api',
    'mainNav',
    'MessageBus',
    '../../imports/scripts/components/global/header',
    '../../imports/scripts/components/global/breadcrumbs',
    '../../imports/scripts/components/global/emailSignup',
    '../../imports/scripts/components/global/footer',
    '../../imports/scripts/plugins/smartSearch',
    'modal',
    '../../assets/scripts/components/global/footer',
    '../../assets/scripts/components/quickview/quickViewApp',
    'components/global/favorites',
    '../../assets/scripts/third-party/QASEmail',
    'components/global/errorModal',
    '../../imports/scripts/components/global/dealsPromotions',
    '../../imports/scripts/plugins/globalIndicator',
    './third-party/FontTracking',
    'plugins/collapseExpand'
], function (API,
             mainNav,
             MessageBus,
             header,
             breadcrumbs,
             emailSignup,
             footer,
             smartSearch,
             modal,
             marFooter,
             QuickView,
             favorites,
             emailValidator,
             errorModal,
             dealsPromotions,
             globalIndicator,
             collapseExpand) {
    'use strict';
    // to read responsive config from endpoints
    var responsive;

    //REQUIRED to be on window for scene 7 to function properly.
    window.s7jsonResponse = function (data) {
        /*if(data.IMAGE_SET) {
         MessageBus.trigger('Scene7.ImageSetRetrieved',data.IMAGE_SET);
         }*/
        if (data.set || data.IMAGE_SET) {
            MessageBus.trigger('Scene7.ImageSetRetrieved', data);
        }

        if (data['catalogRecord.exists']) {
            MessageBus.trigger("Scene7.ImageExists", data['catalogRecord.exists']);
        }
    };
    $('body').globalIndicator();

    if (typeof window.productHolder !== "undefined") {
        MessageBus.trigger("indicator.show");
    }

    // load global header
    header.init({
        'useEmbeddedJSON': true,
        'hasChatFlyout': true
    });

    $('.mar-header').mainNav();

    var $searchForm = $('.mar-search-form');
    if ($searchForm[0]) {
        $searchForm.smartSearch({displayFormat: 'single'});

        if (typeof $.fn.keyscroll !== "undefined") {
            $searchForm.find(".asc-predictive-search-dropdown").keyscroll({itemClass: "asc-predictive-search-result-item"});
        }
    }

    $("body form[data-parsley-validate]").on('blur.equelToCompare', 'input[data-fake-parsley-equalto^="#"]', function () {
        var $this = $(this),
            fieldSelector = $this.attr('data-fake-parsley-equalto'),
            $fieldX = $(fieldSelector),
            text = $fieldX && $fieldX.val() || "",
            errorOnX = $fieldX.hasClass('parsley-error'),
            errorOnY = $this.hasClass('parsley-error');

        if ($fieldX[0] && /^\s*$/.test(text) === false && (errorOnX || errorOnY)) {
            $fieldX.trigger("change");
        }
    });

    $('.mar-modal-trigger').modal({
        'selectors': {
            'modalOverlay': '#mar-modal-overlay'
        }
    });

    $('.asc-global-msg').globalMsg();

    //load quickvieq
    var quickView = new QuickView();
    quickView.init();

    // Init  breadcrumbs
    breadcrumbs.init();

    // Init Email Signup Modal
    emailSignup.init();

    // Init Favorites Modal
    favorites.init();

    //load global footer
    footer.init();

    /*
     * Ola Pic Async Loader for better page load performance.
     */
    MessageBus.on("pageScrollTrgger.global", function (evt) {
        var $olapicSpecificWidget = $("#olapic_specific_widget"),
            $olapicPageSpecificConfig = $("#olapicPageSpecificConfig"),
            $html = $("html");
        //Defect Fix 5780
        if (!$html.hasClass("ie9") && !$html.hasClass("ie8")) {
            if ($olapicSpecificWidget[0] && $olapicPageSpecificConfig[0] && typeof window.olapicLibLoadState === "undefined") {
                var olapicConfig = $olapicPageSpecificConfig.html();
                if (olapicConfig) {
                    try {
                        olapicConfig = jQuery.parseJSON(olapicConfig);
                    } catch (e) {
                        console.log("Ola Pic Config Parsing Error");
                    }
                }

                var loadOlaPicState = $.inviewport($olapicSpecificWidget, {threshold: 300});
                if (loadOlaPicState && olapicConfig) {
                    API.loadScriptWithCallback(olapicConfig.scriptSrc, function () {
                        $olapicSpecificWidget.removeClass("not-ready");
                    }, olapicConfig.attributes);
                    window.olapicLibLoadState = true;
                }
            }
        }
        //Defect Fix End 5780
    });

    // init IE-8 placeholder
    if ($('html').hasClass('ie8') || $('html').hasClass('ie9')) {
        // init for all on page elements
        $(function () {
            $(document).placeholder();
        });

        // Init for modal based content
        MessageBus.on('open.modal', function () {
            $('#modal-holder').placeholder();
        });

        // Function for textarea maxlength property
        $(document).find('textarea').on('keyup focusout', function (e) {
            var text = $(this).val(),
                limit = $(this).attr('maxlength');
            if (text.length > limit) {
                //Truncate the text
                $(this).val(text.substr(0, limit));
                e.preventDefault();
            }
        });
    }

    //load maruices footer
    marFooter.init();

    //load deals and promotions
    dealsPromotions.init();

    if (typeof $.fn.lazyload !== "undefined") {
        $("img.lazy-load").lazyload({
            skip_invisible: false,
            threshold: 200,
            failure_limit: 15
        });
    }

    var throttledScroll = _.throttle(function (evt) {
        MessageBus.trigger("pageScrollTrgger.global", evt);
    }, 300);

    $(window).scroll(throttledScroll);

    // Switch to enable viewport API
    responsive = API.endpoints.responsive || {};
    if (responsive.framework) {
        // Init viewport Events
        //	API.viewport.init( responsive.viewports );
        //	API.viewport.listenChange();
        // Test
        // MessageBus.on('viewport.change', function(e){
        // 	alert(e.new);
        // });
    }

    var viewport = API.viewport.name();

    /* Collapse expand behavior for footer */
    var footerSelector = $(".asc-footer").find("[data-toggle-head]");
    if (API.showMobileView('footerCollapseExpandEnable')) {
        footerSelector.collapseExpand();
    }
    MessageBus.on("viewport.change", function (evt) {
        if (API.showMobileView('footerCollapseExpandEnable')) {
            footerSelector.collapseExpand();
        } else {
            footerSelector.collapseExpand({collapsed: false});
            footerSelector.off("click");
        }

    });

    /* Collapse expand behavior for PLP */
    var plpSelector = $(".mar-plp-filters").find("[data-toggle-head]");
    var clpSelector = $(".mar-clp-links").find("[data-toggle-head]");
    if (API.showMobileView('plpCollapseExpandEnable')) {
        plpSelector.collapseExpand();
        clpSelector.collapseExpand();
    }
    MessageBus.on("viewport.change", function (evt) {
        if (API.showMobileView('plpCollapseExpandEnable')) {
            plpSelector.collapseExpand({
                completeCallback: function () {
                    //if any fucnctionlity to be written once animation of collapse expand completed
                }
            });
            clpSelector.collapseExpand();
        } else {
            plpSelector.collapseExpand({
                collapsed: false,
                completeCallback: function () {
                    //if any fucnctionlity to be written once animation of collapse expand completed
                }
            });
            plpSelector.off("click");
            clpSelector.collapseExpand({collapsed: false});
            clpSelector.off("click");
        }

        //Implement customSelect for Web and Support Native on mobile and Tab
        $("select").customSelect();
    });


    /*
     * Below piece of code handles the expand and collpase beahvior
     * of Need Help Section in the Right Rail
     * on cart and checkout pages
     */

    if (window.$) {
        var _sideBarHelp = $('.mar-cart-sidebar-help');
        var _barHelpTitle = $('.mar-cart-sidebar-title');
        if (_barHelpTitle.length) {
            _barHelpTitle.on("click", function () {
                var _icon = _sideBarHelp.find('h4 span');
                if (_sideBarHelp.hasClass("reveal")) {
                    _sideBarHelp.removeClass("reveal");
                    _icon.addClass("icon-plus").removeClass("icon-minus");
                } else {
                    _sideBarHelp.addClass("reveal");
                    _icon.addClass("icon-minus").removeClass("icon-plus");
                }
            });
        }
    }
    else {
        throw("Jquery not found, can't expand Need Help Section");
    }
    $(".mar-tooltip-trigger").tooltip();
});

define('engagementEngine', ['api'], function (API) {
    'use strict';

    var _defaults = {
        'mainScript': API.endpoints.engagementEngineConfig.mainScriptUrl || ""
    };

    function EngagementEngineLoader() {
        var that = this,
            $secureFrame = $("body.secureFrame");
        if ($secureFrame[0]) {
            return;
        }
        // load our first script
        if (_defaults.mainScript && /^\s*$/.test(_defaults.mainScript) === false) {
            API.loadScriptWithCallback(_defaults.mainScript, this.scriptsLoaded);
        }
    }

    EngagementEngineLoader.prototype.scriptsLoaded = function () {
        window.ATGSvcs.setEEID(API.endpoints.engagementEngineConfig.setEEID || "");

        var d = document,
            ss = 'script',
            s = d.getElementsByTagName(ss)[0];
        // this is their code, it can be refined but it is what it is
        function r(u) {

            var rn = d.createElement(ss);

            rn.type = 'text/javascript';

            rn.defer = rn.async = !0;

            rn.src = u;

            s.parentNode.insertBefore(rn, s);

        }

        r(API.endpoints.engagementEngineConfig.vsapiScriptUrl);

        r(API.endpoints.engagementEngineConfig.vsoptsScriptUrl);

        // Start the script because it looks for DOM ready
        window.ATGSvcs.start();
    };
    if (API.endpoints.engagementEngineConfig.isEngagementEngine) {
        return new EngagementEngineLoader();
    }
});

define('youMayAlsoLikeItemView', [
    'MessageBus',
    'productFavoritesView',
    'api'
], function (MessageBus,
             ProductFavoritesView,
             API) {
    'use strict';

    var MyFavoriteView = Backbone.View.extend({

        'events': {
            'click .asc-favorite': 'favoriteClicked'
        },
        'className': 'mar-recommended-item slide',
        'preset': '?$certona_medium$',
        'isHomepage': false,

        //'template' : _.template($('#you-may-also-like-item').html()),
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};

            console.log('options: ', this.options);


            if ($('#you-may-also-like-item').length > 0) {
                this.template = _.template($('#you-may-also-like-item').html());
                this.render();
            }
            // this.$el.addClass('db-recommended slick');
        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'render': function () {
            // console.log("rendering the item view, this models: ", this.model);
            // console.log('this', this);
            var that = this,
                $els,
                $favs;
            //5865 - To hide qv button in this section for gc and egc
            that.gcId = API.endpoints.gift_id;
            that.egcId = API.endpoints.egift_id;
            if (this.gcId === this.model.get("item_id") || this.egcId === this.model.get("item_id")) {
                this.model.attributes.gcType = true;
            }
            else {
                this.model.attributes.gcType = false;
            }
            if (this.model.attributes.imageurl.indexOf("null") > -1) {
                this.model.attributes.imageurl = this.model.attributes.imageurl.replace("null", "medium");
            }
            else {
                this.model.attributes.imageurl = this.model.attributes.imageurl.concat("?$medium$");
            }
            //console.log('this.model.attributes.imageurl preset :: ',this.model.attributes.imageurl);

            /*
             * Handle Http/Https in image URL on secure pages
             */
            var imageURL = this.model.get("imageurl") || "";
            if (imageURL && /^\s*$/.test(imageURL) === false) {
                imageURL = imageURL.replace("http:", "");
                this.model.set({imageurl: imageURL}, {silent: true});
            }
            /*
             * Handle Http/Https in image URL on secure pages
             */

            this.options.$parent.append(this.template(this.model.attributes));
            // console.log("item view model attributes: ", this.template(this.model.attributes));

            $els = this.options.$parent.find('.mar-recommended-item').not(".mar-recommendation-promo-item");
            $favs = this.options.$parent.find('.asc-favorite');

            if (this.options.isHomepage) {
                //console.log('is homepage!');
                this.options.$parent.find('.mar-recommended-item').addClass("grid__item");
                this.options.$parent.find('.mar-recommended-item').addClass("one-quarter");
                this.options.$parent.find('.mar-recommended-item').removeClass("slide");
                this.options.$parent.find('.mar-recommended-item').addClass("mar-recommended-homepage");

                // hide the product titles
                this.options.$parent.find('.mar-ymal-details').hide();
            }

            this.productFavoritesView = new ProductFavoritesView({
                'el': $favs.get($els.length - 1),
                'productID': this.model.attributes.productId || this.model.attributes.item_id,
                'labels': null
            });

            // jQuery event delegation
            // Attach click event to Move To Cart link.
            // This is a workaround to slick removing events
            this.delegateEvents();

            return this;
        },
        'favoriteClicked': function (e) {
            e.preventDefault();
            console.log('clicked');
        },
        'moveToCart': function () {
            MessageBus.trigger('moveItemToCart', this.model.get('id'));
        }

    });

    return MyFavoriteView;
});

define('youMayAlsoLikeModel', [], function () {
    'use strict';

    var YouMayAlsoLikeModel = Backbone.Model.extend({

        'defaults': {
            "item_id": 0,
            "skuId": 0,
            "productId": 0,
            "name": "",
            "imageurl": "",
            "imageALTText": "",
            "colorName": "",
            "colorImageURL": "",
            "colorHEXCode": "",
            "size": "",
            "unitPrice": 0,
            "pdpURL": "",
            "dArgs": ""
        },


        /**
         @function
         @description Fires after every instance intialization.
         */
        'initialize': function () {
            // set save value

        }
    });

    // make it available
    return YouMayAlsoLikeModel;
});

define('youMayAlsoLikeCollection', [
    'youMayAlsoLikeModel'
], function (YouMayAlsoLikeModel) {
    'use strict';
    var YouMayAlsoLikeCollection = Backbone.Collection.extend({
        'model': YouMayAlsoLikeModel,
        'parse': function (response) {
            if (response.data.items === undefined) {
                return response.data.featuredItems;
            } else {
                return response.data.items;
            }
        }
    });
    return YouMayAlsoLikeCollection;
});

define('youMayAlsoLikeView', [
    'MessageBus',
    'youMayAlsoLikeItemView',
    'youMayAlsoLikeCollection',
    'api'
], function (MessageBus,
             YouMayAlsoLikeItemView,
             YouMayAlsoLikeCollection,
             API) {

    'use strict';

    var YouMayAlsoLikeView = Backbone.View.extend({

        'selectors': {
            'quickViewTrigger': '.mar-quickview-btn'
        },

        'slickOptions': {
            arrows: true,
            dots: false,
            infinite: false,
            speed: 750,
            slidesToShow: 4,
            slidesToScroll: 4,
            draggable: false,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        },

        /**
         * [ description]
         * @return {[type]} [description]
         */
        'initialize': function (options) {
            // quick way to bring in all the options to the options object in case you need it
            this.options = options || {};
            // listener
            this.itemViews = [];

            // console.log("the options: ", this.options);

            this.listenTo(this.collection, 'add reset change remove', this.render);

            this.slickOptions.slidesToShow = this.options.itemDisplayCount;
            this.slickOptions.slidesToScroll = this.options.itemDisplayCount;

            if (this.options.slidesToShow && this.options.slidesToScroll) {
                this.slickOptions.slidesToShow = this.options.slidesToShow;
                this.slickOptions.slidesToScroll = this.options.slidesToScroll;
            }


            // console.log("this.el: (youmayalsolikeView) ", this.$el);

            //some YMAL components render differently. if a component needs to be rendered immediately, do so
            // if(this.options.renderImmediately && this.options.renderImmediately === true) {

            this.render();
            this.attachEvents();
            // }
        },
        'render': function () {
            var that = this,


            //slideContainer = that.$el.find(this.options.cart.options.youMayAlsoLikeCarouselHolder),
                slideContainer = that.$el.find('.mar-recommendations-slider'),
                i;

            // console.log("rendering the item view");

            // console.log("rendering the thing");
            // console.log(this.options);

            // get our cart views updated
            _.each(this.options.collection.models, function (model) {
                var youMayAlsoLikeItemView = new YouMayAlsoLikeItemView({
                    'model': model,
                    '$parent': that.$el.find('.mar-recommendations-slider'),
                    'cart': that.options.cart
                });
                that.itemViews.push(youMayAlsoLikeItemView);
            });


            // console.log(that.itemViews);
            if (window.picturefill) {
                window.picturefill();
            }

            if (typeof $.fn.lazyload !== "undefined") {
                $("img.lazy-load").lazyload({
                    skip_invisible: false,
                    threshold: 200,
                    failure_limit: 15
                });
            }
            $(this.$el.find(this.selectors.quickViewTrigger)).data('modalevent', 'quickView.modal.openModal').data('modalclass', 'modal-quick-view').modal({'target': '#quickView'});

            // Free flow carousel for touch based devices
            if (API.showMobileView('fCarousel')) {
                slideContainer.fCarousel({
                    'slide': '.mar-recommended-item',
                });
            } else {
                slideContainer.slick(that.slickOptions);
            }


        },
        'attachEvents': function () {
            var that = this;

            MessageBus.on('CertonaApp.refreshSlick', function () {
                var slideContainer = that.$el.find('.mar-recommendations-slider');

                slideContainer.unslick();

                slideContainer.slick(that.slickOptions);
            });

            MessageBus.on("viewport.change", function (evt) {
                var slideContainer = that.$el.find('.mar-recommendations-slider');
                if (API.showMobileView('fCarousel')) {
                    slideContainer.fCarousel({
                        'slide': '.mar-recommended-item',
                    });
                }

            });


        },
        /**
         * [ description]
         * @return {[type]} [description]
         */
        'update': function () {
            // update total of items
            // find the number of items

        }

    });

    return YouMayAlsoLikeView;
});

define('certonaAppCollection', [
    'youMayAlsoLikeModel'
], function (YouMayAlsoLikeModel) {
    'use strict';
    var CertonaAppCollection = Backbone.Collection.extend({
        'model': YouMayAlsoLikeModel,
        'parse': function (response) {
            //console.log("data: ", response.data.resonance.schemes[0]);
            if (response.data.resonance === undefined) {
                return response.data.featuredItems;
            } else {
                return response.data.resonance.schemes[0];
            }
        }
    });
    return CertonaAppCollection;
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq, Modernizr*/

define('CertonaApp', [
    'api',
    'youMayAlsoLikeView',
    'youMayAlsoLikeCollection',
    'certonaAppCollection',
    'youMayAlsoLikeItemView',
    'MessageBus',
    'ensighten'
], function (API,
             YouMayAlsoLikeView,
             YouMayAlsoLikeCollection,
             CertonaAppCollection,
             YouMayAlsoLikeItemView,
             MessageBus,
             ensighten) {

    'use strict';
    // setup some defaults that we can get later
    var _defaults = {
        'views': {
            'cartItemsView': '.asc-items',
            'cartItemView': '.asc-item',
            'cartHeaderView': '.asc-cart-header',
            'orderSummaryView': '.asc-cart-order-summary',
            'shippingView': '.asc-cart-shipping-view',
            'promoCodeView': '.asc-promo-code',
            'brandLoyaltyView': '.asc-brand-loyalty',
            'pointsView': '.asc-cart-points',
            'favoritesHeader': '.asc-my-favorites-header',
            'favoritesView': '.asc-my-favorites',
            'discountsView': '.asc-discounts-view',
            'brandDollarsMessageView': '.asc-brand-dollars-message',
            'modalEmailCartView': '.modal-email-cart-view',
            'youMayAlsoLikeView': '.mar-recommendations-content'
        },
        'selectors': {
            'cartValue': '.asc-cart-value',
            'estimatedTotal': '.asc-est-total-value',
            'pointsDisplay': '.asc-cart-points-display',
            'discountDisplay': '.asc-discounts-display',
            'shippingDisplay': '.asc-shipping-display',
            'shippingSelection': '.asc-cart-shipping',
            'totalCartValue': '.asc-total-value',
            'totalDiscounts': '.asc-total-discounts',
            'youMayAlsoLikeContent': '.asc-recommendations-content',
            'certonaModule': '.asc-certona-module'

        },
        'superPrice': false, // if true this will supescript last two digits in price numbers
        'shipOption': 0,
        'favoriteItemClass': 'slide',
        'favoritesCarouselHolder': '.asc-my-favorites',
        'dataHolder': {},
        'configText': {},
        'homepageRecs': false,
        'isFeaturedItems': '', // this should be params appended to a URL for featured
        'itemDisplayCount': API.endpoints.certonaConfig.carouselItemLength || 5,
        'certonaConfigData': {},// data from back end that is used for the certona request
        'certonaPageConfig': {},// this will store page
        'promoMap': {
            0: 0,
            4: 1,
            6: 2,
            7: 3
        }, // positions of promo items on the homepage
        'moduleTitle': '',
        'certonaScriptId': 'certonaScriptLoader',
        'dataHolderSelector': '#reco_mod_promo_data',
        'isHomePage': false
    };

    var CertonaApp = function (el, data, customOptions) {
        this.$el = $(el);
        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);
        this.options.data = data;

        this.init();
    };

    /**
     * init
     * @return {[type]} [description]
     */
    CertonaApp.prototype.init = function () {
        var that = this,
            dataConfig,
            configId;

        this.options.certonaPageConfig = window.certona;

        console.log('got data before: ', this.options.data);
        // check if we need to display data
        // apparently certona will send us if we need to display item
        if (this.options.data.display === 'yes') {
            console.log('got data ', this.options.data);
            that.setupCollection();

            //Moved this function so that in case of Home Page it can set isHomePage = true properly.
            // look for promo data
            this.lookForPromoData();

            that.setDataCollection(this.options.data.items);
            that.setTitles(this.options.data.explanation);
        } else {
            // hide our module
            that.hideModule();
        }


    };
    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CertonaApp.prototype.lookForPromoData = function () {
        // check if data exists
        if ($(this.options.dataHolderSelector).length > 0) {
            // set our vaiable to true
            this.options.isHomePage = true;
            //
            this.getConfigData(this.options.dataHolderSelector);
        }
    };
    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CertonaApp.prototype.getConfigData = function (id) {

        // get the certona config data from ATG
        this.options.certonaConfigData = $.parseJSON($(id).html());

    };
    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CertonaApp.prototype.setupCollection = function () {

        this.youMayAlsoLike = new CertonaAppCollection();

    };

    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CertonaApp.prototype.setDataCollection = function (data) {
        // console.log('setting collection data');
        this.youMayAlsoLike.reset(data);

        // if this is the hompage, do the special homepage render
        // otherwise, render like usual
        // get the value from the certona object on the page that make it more reliable
        if (this.options.isHomePage === true) {
            // render Home page
            this.renderHomepage();
        } else {
            // setup our views
            this.setupViews();
        }
        this.setupEvents();
    };
    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CertonaApp.prototype.setTitles = function (title) {
        // it looks like Certona is not passing the title so we need to make sure we have something
        if (!title) {
            if (!this.options.certonaConfigData.title) {
                title = "You May Also Like…";
            } else {
                title = this.options.certonaConfigData.title;
            }
        }
        this.$el.find('h4').html(title);
    };
    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CertonaApp.prototype.renderHomepage = function () {

        var totalLength = this.options.certonaConfigData.promoItems.length + this.youMayAlsoLike.length,
            i, contentString;

        // console.log("total length: ", totalLength);
        var map = this.options.promoMap,
            promoItems = this.options.certonaConfigData.promoItems,
            model = this.youMayAlsoLike;

        var productCount = 0;

        for (i = 0; i < totalLength; i++) {

            if (promoItems[map[i]]) {
                // console.log("promo item");

                // create a div
                contentString = '<div class="mar-recommended-item mar-recommendation-promo-item one-quarter xs-one-whole" id="mar-promo-content-';
                contentString += map[i];
                contentString += '">';
                contentString += promoItems[map[i]].content;
                contentString += '</div>';

                // console.log("content string: ", contentString);
                // render the promo content
                this.$el.find(".asc-recommendations-grid").append(contentString);

                // TODO: deal with two high promo content
                //Commented below code but need to clarify from Milos
                /*if(map[i] === 1){
                 $("#mar-promo-content-1").css("height", 540);
                 }*/


            } else {
                // console.log("product");
                var youMayAlsoLikeItemView = new YouMayAlsoLikeItemView({
                    'model': model.models[productCount],
                    '$parent': this.$el.find(".asc-recommendations-grid"),
                    'cart': this.options.cart,
                    'isHomepage': true
                });
                productCount++;
            }
        }

        if (Modernizr.touch) {

            //ALM-3885
            $(".asc-certona-module").find('.asc-favorite').css('opacity', '1');


            $('body').on("click", 'a.mar-recommended-img', function (e) {

                var link = $(this); //preselect the link
                if (link.hasClass('hover')) {
                    console.log("hover added");
                    //return true;
                } else {

                    link.addClass('hover');
                    $('a.mar-recommended-img').not(this).removeClass('hover');
                    e.preventDefault();
                    //return false; //extra, and to make sure the function has consistent return points
                }
            });

        }

        window.picturefill();

        // initialize isotope
        MessageBus.trigger('homepageCertonaRenderComplete');
    };

    CertonaApp.prototype.hideModule = function () {
        // hide the you may also like?
        $(this.options.views.youMayAlsoLikeView).hide();
        $(this.options.selectors.certonaModule).hide();
    };
    CertonaApp.prototype.showModule = function () {
        // hide the you may also like?
        $(this.options.views.youMayAlsoLikeView).show();
        $(this.options.selectors.certonaModule).show();
    };


    // setup views in our app
    CertonaApp.prototype.setupViews = function () {

        // YMAL view
        this.youMayAlsoLikeView = new YouMayAlsoLikeView({
            'el': this.$el.find('.mar-recommendations-content')[0],
            'collection': this.youMayAlsoLike,
            'itemDisplayCount': this.options.itemDisplayCount
        });

        // console.log("collection: ", this.youMayAlsoLikeView.collection);
    };

    // setup views in our app
    CertonaApp.prototype.setupEvents = function () {
        /*
         * Ensighten Tracking Start:
         * Event: referralFollowed :- When user clicks on Start Chat button
         */
        var recomendedSelector = ".mar-recommendations-content a.mar-recommended-img, .mar-recommendations-content .mar-quickview-btn";
        $('body').on("click", recomendedSelector, function (e) {
            e.preventDefault();
            var self = $(this),
                url = self.attr("href"),
                pid = self.parents('.mar-recommended-item:first').data('productid') || "",
                trackingData = {"name": "referralFollowed", "referringPID": pid};
            if (ensighten && ensighten.pageTrackingData && !$.isEmptyObject(ensighten.pageTrackingData) && ensighten.pageTrackingData.page) {
                trackingData.location = ensighten.pageTrackingData.page.pageContext || "PRODUCT";
            }
            if (trackingData.location === "PRODUCT") {
                trackingData.productTitle = $("h1.mar-product-title").text();
            }
            if (pid) {
                $('body').trigger(API.endpoints.brandConfig.ensightenEventName, trackingData);
            }
            if (url) {
                if (!self.attr('target')) {
                    location.href = url;
                }
                else {
                    window.open(url, '_blank');
                }
            }
        });
        /*
         * Ensighten Tracking End
         */
    };
    return CertonaApp;
});

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global jQuery, WorkPage, console, define, window, document, _gaq*/

define('certonaWrapper', [
    'api',
    'CertonaApp',
    'MessageBus'
], function (API,
             CertonaApp,
             MessageBus) {

    'use strict';
    // setup some defaults that we can get later
    var _defaults = {
        'moduleSelector': '.asc-certona-module',
        'dataHolder': {},
        'configText': {},
        'homepageRecs': false,
        'isFeaturedItems': '', // this should be params appended to a URL for featured
        'itemDisplayCount': 5,
        'certonaConfigData': {},// data from back end that is used for the certona request
        'certonaPageConfig': {},// this will store page
        'promoMap': {
            0: 0,
            4: 1,
            6: 2,
            7: 3
        }, // positions of promo items on the homepage
        'moduleTitle': '',
        'certonaScriptId': 'certonaScriptLoader',
        'dataHolderSelector': '#reco_mod_promo_data',
        'isHomePage': false,
        'selectors': {
            'certonaModule': '.asc-certona-module'
        },
        'views': {
            'youMayAlsoLikeView': '.mar-recommendations-content'
        },
    };

    var CerotnaWrapper = function (el, customOptions) {
        this.$el = $(el);
        // deep extend defaults
        this.options = $.extend(true, {}, _defaults, customOptions);

        this.init();
    };

    /**
     * init
     * @return {[type]} [description]
     */
    CerotnaWrapper.prototype.init = function () {
        var that = this,
            dataConfig,
            configId;

        this.options.certonaPageConfig = window.certona;
        // find our module element atrray (or just one if there is just one)
        this.options.moduleElements = $('.asc-certona-module');
        // setup a call for certona

        that.hideModule();
        window.certonaRecommendations = function (data) {

            var moduleLen = that.options.moduleElements.length;
            var schemasLen = data.resonance.schemes.length;
            var len;
            var i = 0;
            if (data && typeof data === 'object') {
                that.showModule();
            }

            // always pick lower number for length so that we do not get an error or visual artifacts
            if (moduleLen > schemasLen) {
                len = schemasLen;
            } else {
                len = moduleLen;
            }
            // loop through and assign data to all the elements
            for (i = 0; i < len; i++) {
                // load items
                new CertonaApp(that.options.moduleElements[i], data.resonance.schemes[i]);
            }

            //TODO: hide extra modules if they exist

        };

        // load script

        if (API.endpoints.certonaConfig.loadCertonaScript === true) {
            this.loadScript();
        }
    };
    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CerotnaWrapper.prototype.loadScript = function () {
        var certonaScriptObj;
        // ask if API has our script tag and script has not been loaded
        if (API.endpoints.certonaScriptPath && $('#' + this.options.certonaScriptId).length === 0) {
            // load script and set the ID
            console.info('loading certona script');
            certonaScriptObj = document.createElement('script');
            certonaScriptObj.type = 'text/javascript';
            certonaScriptObj.async = 'true';
            certonaScriptObj.id = this.options.certonaScriptId;
            certonaScriptObj.src = API.endpoints.certonaScriptPath;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(certonaScriptObj);

        } else {
            console.log('certona script has been loaded inline or some script has already done it');
        }
    };
    /**
     * Describe what this method does
     * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
     * @returns Describe what it returns
     * @type String|Object|Array|Boolean|Number
     */

    CerotnaWrapper.prototype.getConfigData = function (id) {

        // get the certona config data from ATG
        this.options.certonaConfigData = $.parseJSON($(id).html());

    };
    CerotnaWrapper.prototype.hideModule = function () {
        // hide the you may also like?
        $(this.options.views.youMayAlsoLikeView).hide();
        $(this.options.selectors.certonaModule).hide();
    };
    CerotnaWrapper.prototype.showModule = function () {
        // hide the you may also like?
        $(this.options.views.youMayAlsoLikeView).show();
        $(this.options.selectors.certonaModule).show();
    };


    return new CerotnaWrapper();
});

define('AosSessionTimeout', [
    'MessageBus',
    'api'
], function (MessageBus,
             API) {
    'use strict';
    var AosSessionTimeout = $(function () {
        function getHiddenProp() {
            var prefixes = ['webkit', 'moz', 'ms', 'o'];
            // if 'hidden' is natively supported just return it
            if ('hidden' in document) return 'hidden';
            // otherwise loop over all the known prefixes until we find one
            for (var i = 0; i < prefixes.length; i++) {
                if ((prefixes[i] + 'Hidden') in document)
                    return prefixes[i] + 'Hidden';
            }
            // otherwise it's not supported
            return null;
        }

        function isHidden() {
            var prop = getHiddenProp();
            if (!prop) return false;
            return document[prop];
        }

        function visChange() {
            if (!isHidden()) {
                //console.log("Tab Show");
                var currentTime = new Date();
                if (timeStamp < currentTime) {
                    redirectPage();
                }
            }
        }

        function redirectPage() {
            document.location.href = API.endpoints.aosRedirect;
        }

        if ($('body').hasClass('aos')) {

            var newDate = new Date(),
                timeStamp;

            newDate.setMinutes(newDate.getMinutes() + 15);

            timeStamp = newDate;
            // use the property name to generate the prefixed event name
            var visProp = getHiddenProp();
            if (visProp) {
                var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
                document.addEventListener(evtname, visChange);
            }
            setTimeout(redirectPage, 15 * 60 * 1000);
        }
    });
    return AosSessionTimeout;
});
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, browser:true, maxerr:50 */
/*global console, _, require*/

require.config({
    'baseUrl': '/assets/scripts',
    'paths': {
        'MessageBus': '../../imports/scripts/vendor/MessageBus',
        'modal': '../../imports/scripts/plugins/modal',
        'api': '../../imports/scripts/config/api',
        'global': 'common/global',
        'isotope': 'vendor/isotope.pkgd',
        'mainNav': 'plugins/mainNav',
        'miniCartItemsView': 'components/global/miniCartItemsView',
        'miniCartItemView': 'components/global/miniCartItemView',
        'miniCartModel': 'components/global/miniCartModel',
        'miniCartCollection': 'components/global/miniCartCollection',
        'HeroCarouselView': 'components/homepage/HeroCarouselView',
        'RecommendationsView': 'components/homepage/RecommendationsView',
        'ShopStoryView': 'components/homepage/ShopStoryView',
        'ShopLookView': 'components/homepage/ShopLookView',
        'MultiProductQuickView': 'components/quickview/multiProductQuickViewApp',
        'productFavoritesView': 'components/shared/ProductFavoritesView',
        'emailValidator': 'third-party/QASEmail',
        'thirdPartyLoader': 'components/global/thirdPartyLoader',
        'loginForgetPassword': 'components/global/loginForgetPassword',
        'signIn': 'components/sign-in/signInApp',
        'tooltip': '../../imports/scripts/plugins/tooltip',
        'ProductColorModel': 'components/quickview/ProductColorModel',
        'ProductColorSelectCollection': 'components/quickview/ProductColorSelectCollection',
        'ProductColorSelectView': 'components/quickview/ProductColorSelectView',
        'ProductSKUModel': 'components/quickview/ProductSKUModel',
        'ProductSKUCollection': 'components/quickview/ProductSKUCollection',
        'ProductInventoryModel': 'components/quickview/ProductInventoryModel',
        'ProductInventoryCollection': 'components/quickview/ProductInventoryCollection',
        'bazaarvoiceLoader': 'third-party/BazaarvoiceLoader',
        'emailUsApp': 'components/global/emailUsApp',
        'modalStatePreserver': '../../imports/scripts/components/global/ModalStatePreserver',
        'CertonaApp': '../../imports/scripts/components/cart/CertonaApp',
        'certonaAppCollection': '../../imports/scripts/components/cart/CertonaAppCollection',
        'certonaWrapper': '../../imports/scripts/components/cart/CertonaWrapper',
        'youMayAlsoLikeModel': '../../imports/scripts/components/cart/YouMayAlsoLikeModel',
        'youMayAlsoLikeCollection': '../../imports/scripts/components/cart/YouMayAlsoLikeCollection',
        'youMayAlsoLikeView': '../../imports/scripts/components/cart/YouMayAlsoLikeView',
        'youMayAlsoLikeItemView': '../../imports/scripts/components/cart/YouMayAlsoLikeItemView',
        'orderDetails': '../../imports/scripts/components/account/orderDetailsApp',
        'socialApp': '../../imports/scripts/components/global/SocialApp',
        'engagementEngine': 'third-party/engagementEngine',
        'ensighten': 'third-party/ensighten',
        'AosSessionTimeout': 'components/shared/AosSessionTimeout'
    },
    'urlArgs': "bust=" + (new Date().getTime())
});

require(['app-config/maurices-cart-config'], function () {
    'use strict';
    require(['MessageBus', 'api', 'thirdPartyLoader', 'emailUsApp', 'HeroCarouselView', 'isotope',
            'RecommendationsView', 'ShopStoryView', 'ShopLookView', 'MultiProductQuickView', 'orderDetails', 'signIn', 'global', 'engagementEngine', 'ensighten', 'certonaWrapper', 'AosSessionTimeout'],
        function (MessageBus, API, thirdPartyLoader, EmailUs, HeroCarouselView, Isotope, RecommendationsView, ShopStoryView,
                  ShopLookView, MultiProductQuickView, orderDetails, signIn) {

            // vars for shop the storey component
            var fCarouselMObile, shopTheStorey, helper;

            // Carousel view for shop the storey component for touch devices
            fCarouselMObile = API.showMobileView('fCarousel');
            shopTheStorey = $('.asc-shop-story-items-container');
            if (fCarouselMObile) {
                shopTheStorey.fCarousel({
                    slide: '.asc-shop-story-item '
                });
            } else {
                helper = shopTheStorey.data('fCarousel');

                // If carousel prev initialized, kill it
                if (helper) {
                    helper.destroy();
                }
            }


            MessageBus.on("viewport.change", function (evt) {
                var vp = evt.new;
                if (API.showMobileView('fCarousel')) {
                    $('.asc-recommendations-grid').fCarousel({slide: '.mar-recommended-item.mar-recommended-homepage'});
                    $('.asc-shop-story-items-container').fCarousel({slide: '.asc-shop-story-item '});
                }

            });

            $('input.mar-product-quantity').numberInput();

            console.log($('.mar-related-items-slider .mar-related-item').width());

            if (API.showMobileView('fCarousel')) {
                $('.mar-related-items-slider').fCarousel({slide: '.mar-related-items-slider .mar-related-item'});
            } else {
                /* code from article-landing page */
                $('.mar-related-items-slider').slick({
                    'arrows': true,
                    'dots': false,
                    'infinite': false,
                    'slide': '.mar-related-item',
                    'speed': 750,
                    'slidesToShow': API.endpoints.certonaConfig.carouselItemLength || 5,
                    'responsive': [
                        {
                            'breakpoint': 240,
                            'settings': {
                                'slidesToShow': 2,
                                'slidesToScroll': 2
                            }
                        }
                    ]
                });
            }
            /* END: code from article landing page */
            /* FIX: Crousal fix code from article landing page when viewport gets changed */
            MessageBus.on("viewport.change", function (evt) {
                var vp = evt.new;
                if (API.showMobileView('fCarousel')) {
                    $('.mar-related-items-slider').fCarousel({slide: '.mar-related-items-slider .mar-related-item'});
                }

            });

            /* code from email-us.js*/
            EmailUs.init();
            /* END code from email-us.js*/
            /* STL code */

            var heroCarousel = new HeroCarouselView(),
                shopStoryView = new ShopStoryView(),
                shopLookView = new ShopLookView();

            MultiProductQuickView.init();

            // AOS STUFF
            // show / hide change store
            $('.cmn-aos-store-change-link').click(function (e) {
                e.preventDefault();
                $('#store-id').show();
                $('.store-number').hide();
            });
            /* END STL code */

            //Track order AJAX Call


            if ($('#trackOrder').length > 0) {


                $(".get-order-details").on('click', function (e) {
                    e.preventDefault();

                    var orderForm = $('#trackOrder');

                    orderForm.parsley().validate();

                    if (orderForm.parsley().isValid()) {

                        var orderNum = $('#orderNum').val(),
                            billingZip = $('#billingZip').val();

                        MessageBus.trigger("indicator.show");

                        $.ajax({
                            'url': API.endpoints.fetchOrderDetails,
                            'data': {
                                "orderNum": orderNum,
                                "billingZip": billingZip,
                                "Action": 'fetchODDetails'
                            },
                            'type': 'post',
                            'dataType': 'html'
                        }).done(function (data) {
                            if (typeof data === "object" && data.status && data.status.toLowerCase() === "invalidsession") {
                                window.location.href = data.redirectURLSessionTimout;
                            }
                            $("#orderResponse").html(data);
                            orderDetails.init();
                            MessageBus.trigger("indicator.hide");


                        }).fail(function (data) {
                            console.log('Error getting order details');
                        });

                    }
                    else {
                        return false;
                    }

                });
            }


            MessageBus.on('homepageCertonaRenderComplete', function (e) { //homepageCertonaRenderComplete
                //window.picturefill(); //Vinod: Comenting This becasue same is getting fired at the end
                // initialize isotope
                // $(".asc-recommendations-grid").Isotope.isotope({
                // 	itemSelector: '.mar-recommendation-item'
                // });
                var container = $(".asc-recommendations-grid");

                //Create Isotope layout
                this.isotope = new Isotope(container, {
                    // options
                    'gutter': 0,
                    'itemSelector': '.mar-recommended-item',
                    'isResizable': true
                });
                // trigger quickview
                MessageBus.trigger("QuickView.refreshTriggers");

                window.picturefill(container[0]);

                if (typeof $.fn.lazyload !== "undefined") {
                    $("img.lazy-load").lazyload({
                        skip_invisible: false,
                        threshold: 200,
                        failure_limit: 15
                    });
                }

                //Recommended for you
                if (API.showMobileView('fCarousel')) {
                    console.log(" asd");
                    $('.asc-recommendations-grid').fCarousel({slide: '.mar-recommended-item.mar-recommended-homepage'});
                }
            });


            /*$('body').on('click', '.mar-sign-in-btn', function(e) {

             var $signInForms = $('.mar-registered-customer-form');

             if($signInForms.parsley().validate() !== true) {
             return false;
             }else{
             MessageBus.trigger('signInSendEvent', true);
             }
             //MessageBus.trigger('signInSendEvent', false);
             });*/
            /*
             *trigger click when session expires
             */
            var hashUrl = location.hash;
            if (hashUrl === "#sessionExpired") {
                if (window.location.protocol === "http:") {
                    $("header .asc-user-signed-out a.secureFrameLink.mar-modal-trigger").trigger("click");
                } else {
                    $("header .asc-user-signed-out a.secureNoFrameLink.mar-modal-trigger").trigger("click");
                }
            } else if (hashUrl === "#requestEmailSignup") {
                //Trigger click for sign-up modal
                if (window.location.protocol === "http:") {
                    $("header a.secureFrameLink.asc-email-signup-link").trigger("click");
                } else {
                    $("header a.secureNoFrameLink.asc-email-signup-link").trigger("click");
                }
            }
            /*
             * Fetch json coming from Endeca to get the active page and add class 'active'
             * to the respective link .
             */
            if (!!$("#side-nav").html()) {
                var sideNavData = $.parseJSON($("#side-nav").html());
                if (sideNavData) {
                    var lookup = "#" + sideNavData['side-nav-link'];
                    $(lookup).addClass("active");
                }
            }


            /*if($('#catazineLandingIframe').length !== 0){
             loadCatazineJS();
             }

             function loadCatazineJS () {
             setTimeout(function(){
             $('#catazineLandingIframe').html('<iframe name="syndeca-viewer-frame" id="syndeca-viewer-frame" frameborder="0" width="100%" height="100%" src="'+API.endpoints.digitalCatazineIframe+'" style="margin: 0px; padding: 0px;"></iframe>');
             }, 2000);
             }*/

        });


    /*// Digital Catazine JS loadoing : ALM-661

     if($('#catazineLanding').length !== 0){
     loadCatazineJS();
     }

     function loadCatazineJS () {
     setTimeout(function(){
     $('#loadCatazineJS').attr('src','//5.syndeca.com/justice/scripts/amd-embed.js');
     }, 3000);
     }*/

    // Digital Catazine JS loadoing : ALM-661


});
define("pages/one-column-template", function () {
});

