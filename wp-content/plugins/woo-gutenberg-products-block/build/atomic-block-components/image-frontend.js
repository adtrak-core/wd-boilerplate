(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[5,8],{176:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=function(e,t){var r=[];return Object.keys(e).forEach((function(a){if(void 0!==t[a])switch(e[a].type){case"boolean":r[a]="false"!==t[a]&&!1!==t[a];break;case"number":r[a]=parseInt(t[a],10);break;case"array":case"object":r[a]=JSON.parse(t[a]);break;default:r[a]=t[a]}else r[a]=e[a].default})),r}},279:function(e,t,r){"use strict";var a=r(11),n=r.n(a),c=r(176);t.a=function(e){return function(t){return function(r){var a=Object(c.a)(e,r);return React.createElement(t,n()({},r,a))}}}},280:function(e,t){},281:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r.n(a),c=(r(4),r(1)),o=r(5),l=r.n(o),u=r(29),s=r(67),i=r(184);r(280);t.default=Object(i.withProductDataContext)((function(e){var t=e.className,r=e.align,a=Object(s.useInnerBlockLayoutContext)().parentClassName,o=Object(s.useProductDataContext)().product;if(!o.id||!o.on_sale)return null;var i="string"==typeof r?"wc-block-components-product-sale-badge--align-".concat(r):"";return React.createElement("div",{className:l()("wc-block-components-product-sale-badge",t,i,n()({},"".concat(a,"__product-onsale"),a))},React.createElement(u.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))}))},283:function(e,t){},29:function(e,t,r){"use strict";var a=r(6),n=r.n(a),c=(r(4),r(3)),o=r(5),l=r.n(o);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=function(e){var t,r=e.label,a=e.screenReaderLabel,n=e.wrapperElement,o=e.wrapperProps,u=null!=r,i=null!=a;return!u&&i?(t=n||"span",o=s(s({},o),{},{className:l()(o.className,"screen-reader-text")}),React.createElement(t,o,a)):(t=n||c.Fragment,u&&i&&r!==a?React.createElement(t,o,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},a)):React.createElement(t,o,r))};i.defaultProps={wrapperProps:{}},t.a=i},305:function(e,t,r){"use strict";r.r(t);var a=r(26),n=r(279),c=r(6),o=r.n(c),l=r(10),u=r.n(l),s=(r(4),r(0)),i=r(5),p=r.n(i),d=r(8),b=r(67),f=r(184),m=r(7),g=r(281);r(283);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(){return React.createElement("img",{src:d.r,alt:"",width:500,height:500})},y=function(e){var t=e.image,r=e.onLoad,a=e.loaded,n=e.showFullSize,c=t||{},o=c.thumbnail,l=c.src,u=c.srcset,s=c.sizes,i={alt:c.alt,onLoad:r,hidden:!a,src:o};return n&&(i=w(w({},i),{},{src:l,srcSet:u,sizes:s})),React.createElement(React.Fragment,null,React.createElement("img",i),!a&&React.createElement(j,null))},v=Object(f.withProductDataContext)((function(e){var t=e.className,r=e.imageSizing,a=void 0===r?"full-size":r,n=e.productLink,c=void 0===n||n,l=e.showSaleBadge,i=e.saleBadgeAlign,d=void 0===i?"right":i,f=Object(b.useInnerBlockLayoutContext)().parentClassName,O=Object(b.useProductDataContext)().product,w=Object(s.useState)(!1),v=u()(w,2),h=v[0],E=v[1];if(!O.id)return React.createElement("div",{className:p()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder",o()({},"".concat(f,"__product-image"),f))},React.createElement(j,null));var R=Object(m.isEmpty)(O.images)?null:O.images[0];return React.createElement("div",{className:p()(t,"wc-block-components-product-image",o()({},"".concat(f,"__product-image"),f))},c?React.createElement("a",{href:O.permalink,rel:"nofollow"},!!l&&React.createElement(g.default,{align:d,product:O}),React.createElement(y,{image:R,onLoad:function(){return E(!0)},loaded:h,showFullSize:"cropped"!==a})):React.createElement(React.Fragment,null,!!l&&React.createElement(g.default,{align:d,product:O}),React.createElement(y,{image:R,onLoad:function(){return E(!0)},loaded:h,showFullSize:"cropped"!==a})))})),h={productLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}};t.default=Object(a.compose)(Object(n.a)(h))(v)}}]);