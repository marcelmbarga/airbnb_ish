"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Banner.js





function Banner() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "https://links.papareact.com/0fm",
      layout: "fill",
      objectFit: "cover"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "absolute top-1/2 w-full text-center ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-sm sm:text-lg",
        children: "Not sure where to go? Perfect."
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: " text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-150 transition duration-50 ",
        children: "I'm flexible"
      })]
    })]
  });
}

/* harmony default export */ const components_Banner = (Banner);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(266);
;// CONCATENATED MODULE: ./components/SmallCard.js





function SmallCard({
  img,
  distance,
  location
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-16 w-16 ",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: img,
        layout: "fill",
        className: "rounded-lg"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: location
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-gray-500",
        children: distance
      })]
    })]
  });
}

/* harmony default export */ const components_SmallCard = (SmallCard);
;// CONCATENATED MODULE: ./components/MediumCard.js





function MediumCard({
  img,
  title
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "cursor-pointer hover:scale-105 transition duration-300 ease-out",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-80 w-80 ",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: img,
        layout: "fill",
        className: "rounded-xl"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-2xl mt-3",
      children: title
    })]
  });
}

/* harmony default export */ const components_MediumCard = (MediumCard);
;// CONCATENATED MODULE: ./components/LargeCard.js





function LargeCard({
  img,
  title,
  description,
  buttonText
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "relative py-16 cursor-pointer",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-96 min-w-[300px] ",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: img,
        layout: "fill",
        objectFit: "cover",
        className: "rounded-2xl"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "absolute top-32 left-12",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-4xl mb-3 w-64",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5",
        children: buttonText
      })]
    })]
  });
}

/* harmony default export */ const components_LargeCard = (LargeCard);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(271);
;// CONCATENATED MODULE: ./pages/index.js









function Home({
  exploreData,
  cardsData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Airbnb_ish"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Banner, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-7xl mx-auto px-8 sm:px-16",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "pt-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-4xl font-semibold pb-5",
          children: "Explore Nearby"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          children: exploreData === null || exploreData === void 0 ? void 0 : exploreData.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(components_SmallCard, {
            img: item.img,
            distance: item.distance,
            location: item.location
          }, i))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-4xl font-semibold py-8",
          children: "Live Anywhere"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex space-x-3 overflow-scroll  scrollbar-hide p-3 -ml-3",
          children: cardsData === null || cardsData === void 0 ? void 0 : cardsData.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(components_MediumCard, {
            img: item.img,
            title: item.title
          }, i))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_LargeCard, {
        img: "https://links.papareact.com/4cj",
        title: "The Greatest Outdoors",
        description: "Wishlists curated by Airbnb.",
        buttonText: "Get Inspired"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})
    })]
  });
}
async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  };
}

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("react-date-range");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [890,674], () => (__webpack_exec__(899)));
module.exports = __webpack_exports__;

})();