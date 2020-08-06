(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[7],{229:function(t,e){},371:function(t,e){},376:function(t,e,n){"use strict";e.a={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}}},377:function(t,e,n){"use strict";var c=n(0),a=(n(2),n(8)),r=n.n(a),o=n(11),u=n.n(o),i=n(822),l=n(511),s=Object(c.createContext)({product:{},productId:0,variationId:0,variationData:{},cartItemData:{},quantity:1,minQuantity:1,maxQuantity:99,quantityInCart:0,setQuantity:function(t){},setVariationId:function(t){},setVariationData:function(t){},setCartItemData:function(t){},showFormElements:!1,formInitialized:!1,formDisabled:!0,formSubmitting:!1,onChange:function(){},onSubmit:function(){},onSuccess:function(){},onFail:function(){}}),b=function(){return Object(c.useContext)(s)},d=function(t){var e=t.children,n=t.product,a=t.showFormElements,r=n||{},o=r.id||0,b=Object(c.useState)(0),d=u()(b,2),f=d[0],p=d[1],O=Object(c.useState)({}),j=u()(O,2),v=j[0],h=j[1],E=Object(c.useState)({}),g=u()(E,2),y=g[0],w=g[1],k=Object(c.useState)(1),_=u()(k,2),C=_[0],S=_[1],N=Object(i.a)(o),D=N.addToCart,x=N.addingToCart,I=N.cartQuantity,P=N.cartIsLoading;!function(t){var e=Object(c.useRef)(!0);Object(c.useEffect)((function(){e.current?e.current=!1:Object(l.b)()}),[t])}(I);var Q=!P&&o>0,F=x||!Q||!m(r),q=Object(c.useCallback)((function(){D(C)}),[D,C]),A=Object(c.useCallback)((function(){}),[]),T=Object(c.useCallback)((function(){}),[]),B=Object(c.useCallback)((function(){}),[]),V={product:r,productId:o,variationId:f,variationData:v,cartItemData:y,quantity:C,minQuantity:1,maxQuantity:r.quantity_limit||99,quantityInCart:I,setQuantity:S,setVariationId:p,setVariationData:h,setCartItemData:w,showFormElements:a,formInitialized:Q,formDisabled:F,formSubmitting:x,onChange:A,onSubmit:q,onSuccess:T,onFail:B};return Object(c.createElement)(s.Provider,{value:V},e)},m=function(t){var e=t.is_purchasable;return void 0!==e&&e},f=n(42),p=n(6),O=n(71),j=(n(371),n(1)),v=n(97),h=n(59),E=n(539),g=function(t){var e=t.className,n=t.href,a=t.text;return Object(c.createElement)(v.a,{className:e,href:n,rel:"nofollow"},a)},y=function(t){var e=t.className,n=t.quantityInCart,a=t.loading,r=t.disabled,o=t.onClick,i=Object(c.useState)(!1),l=u()(i,2),s=l[0],b=l[1];return Object(c.createElement)(v.a,{className:e,disabled:r,showSpinner:a,onClick:function(){o(),b(!0)}},n>0?Object(j.sprintf)(Object(j._n)("%d in cart","%d in cart",n,"woo-gutenberg-products-block"),n):Object(j.__)("Add to cart","woo-gutenberg-products-block"),s&&Object(c.createElement)(h.a,{srcElement:E.a,alt:Object(j.__)("Done","woo-gutenberg-products-block")}))},w=function(){var t=b(),e=t.showFormElements,n=t.product,a=t.quantityInCart,r=t.formDisabled,o=t.formSubmitting,u=t.onSubmit,i=n.is_purchasable,l=void 0===i||i,s=n.has_options,d=n.add_to_cart,m=void 0===d?{url:"",text:""}:d;return!e&&s||!l?Object(c.createElement)(g,{className:"wc-block-components-product-add-to-cart-button",href:m.url,text:m.text||Object(j.__)("View Product","woo-gutenberg-products-block")}):Object(c.createElement)(y,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:a,disabled:r,loading:o,onClick:u})},k=function(t){var e=t.disabled,n=t.min,a=t.max,r=t.value,o=t.onChange;return Object(c.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:r,min:n,max:a,hidden:1===a,disabled:e,onChange:function(t){o(t.target.value)}})},_=function(t){var e=t.reason,n=void 0===e?Object(j.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block"):e;return Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},n)},C=function(){var t=b(),e=t.product,n=t.quantity,a=t.minQuantity,r=t.maxQuantity,o=t.setQuantity,u=t.formDisabled;return e.id&&!e.is_purchasable?Object(c.createElement)(_,null):e.id&&!e.is_in_stock?Object(c.createElement)(_,{reason:Object(j.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(k,{value:n,min:a,max:r,disabled:u,onChange:o}),Object(c.createElement)(w,null))},S=(n(538),n(7)),N=n.n(S),D=n(61),x=n.n(D),I=n(33),P=n(4),Q={value:"",label:Object(j.__)("Select an option","woo-gutenberg-products-block")},F=function(t){var e=t.attributeName,n=t.options,a=void 0===n?[]:n,r=t.selected,o=void 0===r?"":r,u=t.onChange,i=void 0===u?function(){}:u;return Object(c.createElement)(P.SelectControl,{className:"wc-block-components-product-add-to-cart-attribute-picker__select",label:Object(I.decodeEntities)(e),value:o||"",options:[Q].concat(x()(a)),onChange:i})},q=function(t){var e=t.selectedAttributes,n=t.variationAttributes,c=t.attributeNames;return Object.keys(n).filter((function(t){return c.every((function(c){var a=e[c]||"",r=n[t][c];return""===a||(null===r||r===a)}))}))};function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){N()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B=function(t){var e=t.attributes,n=t.variationAttributes,a=Object(c.useState)(0),r=u()(a,2),o=r[0],i=r[1],l=Object(c.useState)([]),s=u()(l,2),b=s[0],d=s[1],m=Object.keys(e),f=Object.values(b).filter(Boolean).length>0,p=Object.values(b).filter((function(t){return""!==t})).length===m.length,O=Object(c.useMemo)((function(){var t=[];return m.forEach((function(c){var a=e[c],r=m.filter((function(t){return t!==c})),o=f?q({selectedAttributes:b,variationAttributes:n,attributeNames:r}):null,u=null!==o?o.map((function(t){return n[t][c]})):null;t[c]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(t).map((function(t){var n=t.name,c=t.slug;return null===e||e.includes(null)||e.includes(c)?{value:c,label:n}:null})).filter(Boolean)}(a.terms,u)})),t}),[e,n,m,b,f]);return Object(c.useEffect)((function(){if(p){var t=q({selectedAttributes:b,variationAttributes:n,attributeNames:m});i(t[0]||0)}else i(0)}),[b,n,m,p]),Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},m.map((function(t){return Object(c.createElement)(F,{key:t,attributeName:t,options:O[t],selected:b[t],onChange:function(e){d(T(T({},b),{},N()({},t,e)))}})})),Object(c.createElement)("p",null,"Matched variation ID: ",o))},V=function(t){var e=t.product,n=e.attributes,a=void 0===n?{}:n,r=e.variations,o=void 0===r?[]:r,u=function(t){return t?Object(p.keyBy)(Object.values(t).filter((function(t){return t.has_variations})),"name"):[]}(a),i=function(t){if(!t)return{};var e={};return t.forEach((function(t){var n=t.id,c=t.attributes;e[n]=c.reduce((function(t,e){var n=e.name,c=e.value;return t[n]=c,t}),[])})),e}(o);return 0===Object.keys(u).length||0===i.length?null:Object(c.createElement)(B,{attributes:u,variationAttributes:i})},z=function(){var t=b(),e=t.product,n=t.quantity,a=t.minQuantity,r=t.maxQuantity,o=t.setQuantity,u=t.formDisabled;return e.id&&!e.is_purchasable?Object(c.createElement)(_,null):e.id&&!e.is_in_stock?Object(c.createElement)(_,{reason:Object(j.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(V,{product:e}),Object(c.createElement)(k,{value:n,min:a,max:r,disabled:u,onChange:o}),Object(c.createElement)(w,null))},L=function(){return Object(c.createElement)(w,null)},M=function(){return Object(c.createElement)(P.Placeholder,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element.")},J=function(){return Object(c.createElement)(M,null)},W=function(t){var e=t.productType;return"variable"===e?Object(c.createElement)(z,null):"grouped"===e?Object(c.createElement)(J,null):"external"===e?Object(c.createElement)(L,null):"simple"===e||"variation"===e?Object(c.createElement)(C,null):null};e.a=Object(O.withProductDataContext)((function(t){var e=t.className,n=t.showFormElements,a=Object(f.useProductDataContext)().product,o=r()(e,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(p.isEmpty)(a)});return Object(c.createElement)(d,{product:a,showFormElements:n},Object(c.createElement)("div",{className:o},Object(c.createElement)(c.Fragment,null,n?Object(c.createElement)(W,{productType:a.type}):Object(c.createElement)(w,null))))}))},538:function(t,e){},539:function(t,e,n){"use strict";var c=n(0),a=n(58),r=Object(c.createElement)(a.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(c.createElement)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}));e.a=r},934:function(t,e,n){"use strict";n.r(e);var c=n(25),a=n(931),r=n(377),o=n(376);e.default=Object(c.compose)(Object(a.a)(o.a))(r.a)},97:function(t,e,n){"use strict";var c=n(10),a=n.n(c),r=n(27),o=n.n(r),u=n(0),i=n(271),l=(n(2),n(8)),s=n.n(l);n(229);e.a=function(t){var e=t.className,n=t.showSpinner,c=void 0!==n&&n,r=t.children,l=o()(t,["className","showSpinner","children"]),b=s()("wc-block-components-button",e,{"wc-block-components-button--loading":c});return Object(u.createElement)(i.a,a()({className:b},l),c&&Object(u.createElement)("span",{className:"wc-block-components-button__spinner","aria-hidden":"true"}),Object(u.createElement)("span",{className:"wc-block-components-button__text"},r))}}}]);