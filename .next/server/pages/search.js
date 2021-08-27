"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(651);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(271);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(266);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(802);
;// CONCATENATED MODULE: ./components/InfoCard.js







function InfoCard({
  img,
  title,
  description,
  price,
  star,
  location,
  long,
  lat,
  total
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: img,
        layout: "fill",
        objectFit: "cover",
        className: "rounded-2xl"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col flex-grow pl-5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: location
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* HeartIcon */.h_8, {
          className: "h-7 cursor-pointer"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-xl",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "border-b w-10 pt-2 text-gray-600"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "pt-2  text-sm text-gray-500 flex-grow",
        children: description
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-end pt-5",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(solid_esm/* StarIcon */.r7p, {
            className: "h-5 text-red-400"
          }), star]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-lg pb-2 lg:text-2xl font-semibold",
            children: price
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: " text-right font-extralight",
            children: total
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const components_InfoCard = (InfoCard);
;// CONCATENATED MODULE: external "react-map-gl"
const external_react_map_gl_namespaceObject = require("react-map-gl");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_namespaceObject);
;// CONCATENATED MODULE: external "geolib/es/getCenter"
const getCenter_namespaceObject = require("geolib/es/getCenter");
var getCenter_default = /*#__PURE__*/__webpack_require__.n(getCenter_namespaceObject);
;// CONCATENATED MODULE: ./components/Map.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // the following import solve Missing Mapbox GL JS CSS problem






function Map({
  searchResults
}) {
  const {
    0: selectedLocation,
    1: setSelectedLocation
  } = (0,external_react_.useState)({}); // transform the search results object into
  // {latitude: 52.516272,longitude:13.377722} object

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));
  const center = getCenter_default()(coordinates);
  const {
    0: viewport,
    1: setViewport
  } = (0,external_react_.useState)({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_map_gl_default()), _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/mbargaedge/cksqi34se1p7t18pt8re5o97x",
    mapboxApiAccessToken: "pk.eyJ1IjoibWJhcmdhZWRnZSIsImEiOiJja3NxaHdjdXkwY3NwMnZwb2pjY2lsdGoxIn0._0FoiHF54_CV_EF8q5rKww"
  }, viewport), {}, {
    onViewportChange: nextViewport => setViewport(nextViewport),
    children: searchResults.map((result, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Marker, {
        longitude: result.long,
        latitude: result.lat,
        offsetLeft: -20,
        offsetTop: -10,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          onClick: () => setSelectedLocation(result),
          className: "cursor-pointer text-2xl text-red-600 animate-bounce",
          children: /*#__PURE__*/jsx_runtime_.jsx(solid_esm/* LocationMarkerIcon */.IS8, {
            className: "h-5 w-5 lg:h-8 lg:w-8"
          })
        })
      }), selectedLocation.long === result.long ? /*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Popup, {
        onClose: () => setSelectedLocation({}),
        closeOnClick: true,
        latitude: result.lat,
        longitude: result.long,
        children: result.title
      }) : false]
    }, i))
  }));
}

/* harmony default export */ const components_Map = (Map);
;// CONCATENATED MODULE: ./pages/search.js










function Search({
  searchResults
}) {
  const router = (0,client_router.useRouter)();
  const {
    location,
    noOfGuests,
    startDate,
    endDate
  } = router.query;
  const formattedStartDate = (0,external_date_fns_namespaceObject.format)(new Date(startDate), "dd MMM yy");
  const formattedEndDate = (0,external_date_fns_namespaceObject.format)(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} to ${formattedEndDate}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "h-screen",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      placeholder: `${location} | ${range} | ${noOfGuests} guests`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "flex",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "flex-grow pt-14 px-6",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-xs lg:text-sm",
          children: ["300+ Stays - ", range, " - for ", noOfGuests, " guests"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "text-3xl font-semibold mt-2 mb-6",
          children: [" ", "Stays in ", location]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: " mb-5 text-gray-800 whitespace-nowrap space-x-3 hidden lg:inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Cancellation Flexibility"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Type of Place"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Price"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Rooms and Beds"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "More filters"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col",
          children: searchResults === null || searchResults === void 0 ? void 0 : searchResults.map((res, i) => /*#__PURE__*/jsx_runtime_.jsx(components_InfoCard, {
            img: res.img,
            description: res.description,
            price: res.price,
            lat: res.lat,
            long: res.long,
            title: res.title,
            star: res.star,
            total: res.total,
            location: res.location
          }, i))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "min-w-[600px] hidden lg:inline-flex",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Map, {
          searchResults: searchResults
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
}

/* harmony default export */ const search = (Search);
async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
  return {
    props: {
      searchResults
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
var __webpack_exports__ = __webpack_require__.X(0, [890,49,674], () => (__webpack_exec__(816)));
module.exports = __webpack_exports__;

})();