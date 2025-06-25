/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./common/components/modal/animations/ModalManager.animations.ts":
/*!***********************************************************************!*\
  !*** ./common/components/modal/animations/ModalManager.animations.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgAnimation\": () => (/* binding */ bgAnimation),\n/* harmony export */   \"modalAnimation\": () => (/* binding */ modalAnimation)\n/* harmony export */ });\n/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/constants/easings */ \"./common/constants/easings.ts\");\n\nconst transition = {\n    ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EASE\n};\nconst bgAnimation = {\n    closed: {\n        opacity: 0,\n        transition\n    },\n    opened: {\n        opacity: 1,\n        transition\n    }\n};\nconst modalAnimation = {\n    closed: {\n        y: -100,\n        transition\n    },\n    opened: {\n        y: 0,\n        transition\n    },\n    exited: {\n        y: 100,\n        transition\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9hbmltYXRpb25zL01vZGFsTWFuYWdlci5hbmltYXRpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQUV6RCxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO0lBQUNDLElBQUksRUFBRUYsbUVBQVk7QUFBQyxDQUFDO0FBRWxDLEtBQUssQ0FBQ0csV0FBVyxHQUFHLENBQUM7SUFDMUJDLE1BQU0sRUFBRSxDQUFDO1FBQUNDLE9BQU8sRUFBRSxDQUFDO1FBQUVKLFVBQVU7SUFBQyxDQUFDO0lBQ2xDSyxNQUFNLEVBQUUsQ0FBQztRQUFDRCxPQUFPLEVBQUUsQ0FBQztRQUFFSixVQUFVO0lBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRU0sS0FBSyxDQUFDTSxjQUFjLEdBQUcsQ0FBQztJQUM3QkgsTUFBTSxFQUFFLENBQUM7UUFBQ0ksQ0FBQyxHQUFHLEdBQUc7UUFBRVAsVUFBVTtJQUFDLENBQUM7SUFDL0JLLE1BQU0sRUFBRSxDQUFDO1FBQUNFLENBQUMsRUFBRSxDQUFDO1FBQUVQLFVBQVU7SUFBQyxDQUFDO0lBQzVCUSxNQUFNLEVBQUUsQ0FBQztRQUFDRCxDQUFDLEVBQUUsR0FBRztRQUFFUCxVQUFVO0lBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaWJvYXJkLy4vY29tbW9uL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9ucy9Nb2RhbE1hbmFnZXIuYW5pbWF0aW9ucy50cz83NmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERFRkFVTFRfRUFTRSB9IGZyb20gXCJAL2NvbW1vbi9jb25zdGFudHMvZWFzaW5nc1wiO1xuXG5jb25zdCB0cmFuc2l0aW9uID0geyBlYXNlOiBERUZBVUxUX0VBU0UgfTtcblxuZXhwb3J0IGNvbnN0IGJnQW5pbWF0aW9uID0ge1xuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgdHJhbnNpdGlvbiB9LFxuICBvcGVuZWQ6IHsgb3BhY2l0eTogMSwgdHJhbnNpdGlvbiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1vZGFsQW5pbWF0aW9uID0ge1xuICBjbG9zZWQ6IHsgeTogLTEwMCwgdHJhbnNpdGlvbiB9LFxuICBvcGVuZWQ6IHsgeTogMCwgdHJhbnNpdGlvbiB9LFxuICBleGl0ZWQ6IHsgeTogMTAwLCB0cmFuc2l0aW9uIH0sXG59O1xuIl0sIm5hbWVzIjpbIkRFRkFVTFRfRUFTRSIsInRyYW5zaXRpb24iLCJlYXNlIiwiYmdBbmltYXRpb24iLCJjbG9zZWQiLCJvcGFjaXR5Iiwib3BlbmVkIiwibW9kYWxBbmltYXRpb24iLCJ5IiwiZXhpdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/components/modal/animations/ModalManager.animations.ts\n");

/***/ }),

/***/ "./common/components/modal/components/ModalManager.tsx":
/*!*************************************************************!*\
  !*** ./common/components/modal/components/ModalManager.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/recoil/modal */ \"./common/recoil/modal/index.ts\");\n/* harmony import */ var _portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/components/Portal */ \"./common/components/portal/components/Portal.ts\");\n/* harmony import */ var _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/ModalManager.animations */ \"./common/components/modal/animations/ModalManager.animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst ModalManager = ()=>{\n    const [{ opened , modal  }, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const { 0: portalNode , 1: setPortalNode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!portalNode) {\n            const node = document.getElementById(\"portal\");\n            if (node) setPortalNode(node);\n            return;\n        }\n        if (opened) {\n            portalNode.style.pointerEvents = \"all\";\n        } else {\n            portalNode.style.pointerEvents = \"none\";\n        }\n    }, [\n        opened,\n        portalNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80\",\n            onClick: ()=>setModal({\n                    modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    opened: false\n                })\n            ,\n            variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.bgAnimation,\n            initial: \"closed\",\n            animate: opened ? \"opened\" : \"closed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: opened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.modalAnimation,\n                    initial: \"closed\",\n                    animate: \"opened\",\n                    exit: \"exited\",\n                    onClick: (e)=>e.stopPropagation()\n                    ,\n                    className: \"p-6\",\n                    children: modal\n                }, void 0, false, {\n                    fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/common/components/modal/components/ModalManager.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/common/components/modal/components/ModalManager.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/common/components/modal/components/ModalManager.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/common/components/modal/components/ModalManager.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL01vZGFsTWFuYWdlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBRVk7QUFDaEI7QUFFTTtBQUVNO0FBSUw7QUFFOUMsS0FBSyxDQUFDUyxZQUFZLE9BQVMsQ0FBQztJQUMxQixLQUFLLEVBQUUsQ0FBQyxDQUFDQyxNQUFNLEdBQUVDLEtBQUssRUFBQyxDQUFDLEVBQUVDLFFBQVEsSUFBSVIsc0RBQWMsQ0FBQ0MsNERBQVM7SUFFOUQsS0FBSyxNQUFFUSxVQUFVLE1BQUVDLGFBQWEsTUFBSWIsK0NBQVE7SUFFNUNELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsR0FBR2EsVUFBVSxFQUFFLENBQUM7WUFDaEIsS0FBSyxDQUFDRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVE7WUFDN0MsRUFBRSxFQUFFRixJQUFJLEVBQUVELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7WUFDOUIsTUFBTTtRQUNSLENBQUM7UUFFRCxFQUFFLEVBQUVMLE1BQU0sRUFBRSxDQUFDO1lBQ1hHLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBSyxLQUFDO1FBQ3pDLENBQUMsTUFBTSxDQUFDO1lBQ05OLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBTSxNQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ1Q7UUFBQUEsTUFBTTtRQUFFRyxVQUFVO0lBQUEsQ0FBQyxDQUFDLENBQUM7SUFFekIsTUFBTSw2RUFDSFAsaUVBQU07OEZBQ0pILHFEQUFVO1lBQ1RrQixTQUFTLEVBQUMsQ0FBOEU7WUFDeEZDLE9BQU8sTUFBUVYsUUFBUSxDQUFDLENBQUM7b0JBQUNELEtBQUs7b0JBQVNELE1BQU0sRUFBRSxLQUFLO2dCQUFDLENBQUM7O1lBQ3ZEYSxRQUFRLEVBQUVoQiw0RUFBVztZQUNyQmlCLE9BQU8sRUFBQyxDQUFRO1lBQ2hCQyxPQUFPLEVBQUVmLE1BQU0sR0FBRyxDQUFRLFVBQUcsQ0FBUTtrR0FFcENSLDBEQUFlOzBCQUNiUSxNQUFNLGdGQUNKUCxxREFBVTtvQkFDVG9CLFFBQVEsRUFBRWYsK0VBQWM7b0JBQ3hCZ0IsT0FBTyxFQUFDLENBQVE7b0JBQ2hCQyxPQUFPLEVBQUMsQ0FBUTtvQkFDaEJDLElBQUksRUFBQyxDQUFRO29CQUNiSixPQUFPLEdBQUdLLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxlQUFlOztvQkFDakNQLFNBQVMsRUFBQyxDQUFLOzhCQUVkVixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEIsQ0FBQztBQUVELGlFQUFlRixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL01vZGFsTWFuYWdlci50c3g/MTllMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuXG5pbXBvcnQgbW9kYWxBdG9tIGZyb20gXCJAL2NvbW1vbi9yZWNvaWwvbW9kYWxcIjtcblxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vLi4vcG9ydGFsL2NvbXBvbmVudHMvUG9ydGFsXCI7XG5pbXBvcnQge1xuICBiZ0FuaW1hdGlvbixcbiAgbW9kYWxBbmltYXRpb24sXG59IGZyb20gXCIuLi9hbmltYXRpb25zL01vZGFsTWFuYWdlci5hbmltYXRpb25zXCI7XG5cbmNvbnN0IE1vZGFsTWFuYWdlciA9ICgpID0+IHtcbiAgY29uc3QgW3sgb3BlbmVkLCBtb2RhbCB9LCBzZXRNb2RhbF0gPSB1c2VSZWNvaWxTdGF0ZShtb2RhbEF0b20pO1xuXG4gIGNvbnN0IFtwb3J0YWxOb2RlLCBzZXRQb3J0YWxOb2RlXSA9IHVzZVN0YXRlPEhUTUxFbGVtZW50PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwb3J0YWxOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0YWxcIik7XG4gICAgICBpZiAobm9kZSkgc2V0UG9ydGFsTm9kZShub2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICBwb3J0YWxOb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3J0YWxOb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0sIFtvcGVuZWQsIHBvcnRhbE5vZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxQb3J0YWw+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTQwIGZsZXggbWluLWgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzgwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWwoeyBtb2RhbDogPD48Lz4sIG9wZW5lZDogZmFsc2UgfSl9XG4gICAgICAgIHZhcmlhbnRzPXtiZ0FuaW1hdGlvbn1cbiAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgIGFuaW1hdGU9e29wZW5lZCA/IFwib3BlbmVkXCIgOiBcImNsb3NlZFwifVxuICAgICAgPlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHtvcGVuZWQgJiYgKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgdmFyaWFudHM9e21vZGFsQW5pbWF0aW9ufVxuICAgICAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cIm9wZW5lZFwiXG4gICAgICAgICAgICAgIGV4aXQ9XCJleGl0ZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21vZGFsfVxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvUG9ydGFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxNYW5hZ2VyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlUmVjb2lsU3RhdGUiLCJtb2RhbEF0b20iLCJQb3J0YWwiLCJiZ0FuaW1hdGlvbiIsIm1vZGFsQW5pbWF0aW9uIiwiTW9kYWxNYW5hZ2VyIiwib3BlbmVkIiwibW9kYWwiLCJzZXRNb2RhbCIsInBvcnRhbE5vZGUiLCJzZXRQb3J0YWxOb2RlIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/components/modal/components/ModalManager.tsx\n");

/***/ }),

/***/ "./common/components/portal/components/Portal.ts":
/*!*******************************************************!*\
  !*** ./common/components/portal/components/Portal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Portal = ({ children  })=>{\n    const { 0: portal , 1: setPortal  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const node = document.getElementById(\"portal\");\n        if (node) setPortal(node);\n    }, []);\n    if (!portal) return null;\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9wb3J0YWwvY29tcG9uZW50cy9Qb3J0YWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFFSDtBQUV4QyxLQUFLLENBQUNHLE1BQU0sSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBNEMsQ0FBQyxHQUFLLENBQUM7SUFDM0UsS0FBSyxNQUFFQyxNQUFNLE1BQUVDLFNBQVMsTUFBSUwsK0NBQVE7SUFFcENELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ08sSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFRO1FBQzdDLEVBQUUsRUFBRUYsSUFBSSxFQUFFRCxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVAsRUFBRSxHQUFHRixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFFeEIsTUFBTSxDQUFDSCx1REFBWSxDQUFDRSxRQUFRLEVBQUVDLE1BQU07QUFDdEMsQ0FBQztBQUVELGlFQUFlRixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jb21tb24vY29tcG9uZW50cy9wb3J0YWwvY29tcG9uZW50cy9Qb3J0YWwudHM/ZjU5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuY29uc3QgUG9ydGFsID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIH0pID0+IHtcbiAgY29uc3QgW3BvcnRhbCwgc2V0UG9ydGFsXSA9IHVzZVN0YXRlPEhUTUxFbGVtZW50PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGFsXCIpO1xuICAgIGlmIChub2RlKSBzZXRQb3J0YWwobm9kZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXBvcnRhbCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgcG9ydGFsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVBvcnRhbCIsIlBvcnRhbCIsImNoaWxkcmVuIiwicG9ydGFsIiwic2V0UG9ydGFsIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/components/portal/components/Portal.ts\n");

/***/ }),

/***/ "./common/constants/easings.ts":
/*!*************************************!*\
  !*** ./common/constants/easings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_EASE\": () => (/* binding */ DEFAULT_EASE)\n/* harmony export */ });\nconst DEFAULT_EASE = [\n    0.6,\n    0.01,\n    -0.05,\n    0.9\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsWUFBWSxHQUFHLENBQUM7QUFBQSxPQUFHO0FBQUUsUUFBSTtLQUFHLElBQUk7QUFBRSxPQUFHO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL2NvbW1vbi9jb25zdGFudHMvZWFzaW5ncy50cz82Mzc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBERUZBVUxUX0VBU0UgPSBbMC42LCAwLjAxLCAtMC4wNSwgMC45XTtcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0VBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/constants/easings.ts\n");

/***/ }),

/***/ "./common/recoil/modal/index.ts":
/*!**************************************!*\
  !*** ./common/recoil/modal/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useModal\": () => (/* reexport safe */ _modal_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)\n/* harmony export */ });\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.atom */ \"./common/recoil/modal/modal.atom.tsx\");\n/* harmony import */ var _modal_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.hooks */ \"./common/recoil/modal/modal.hooks.tsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_modal_atom__WEBPACK_IMPORTED_MODULE_0__.modalAtom);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDQTtBQUV4QyxpRUFBZUEsa0RBQVMsRUFBQztBQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaWJvYXJkLy4vY29tbW9uL3JlY29pbC9tb2RhbC9pbmRleC50cz8yYWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGFsQXRvbSB9IGZyb20gXCIuL21vZGFsLmF0b21cIjtcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWwuaG9va3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxBdG9tO1xuXG5leHBvcnQgeyB1c2VNb2RhbCB9O1xuIl0sIm5hbWVzIjpbIm1vZGFsQXRvbSIsInVzZU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/recoil/modal/index.ts\n");

/***/ }),

/***/ "./common/recoil/modal/modal.atom.tsx":
/*!********************************************!*\
  !*** ./common/recoil/modal/modal.atom.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalAtom\": () => (/* binding */ modalAtom)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modalAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"modal\",\n    default: {\n        modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        opened: false\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL21vZGFsLmF0b20udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUV0QixLQUFLLENBQUNDLFNBQVMsR0FBR0QsNENBQUksQ0FHMUIsQ0FBQztJQUNGRSxHQUFHLEVBQUUsQ0FBTztJQUNaQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxLQUFLO1FBQ0xDLE1BQU0sRUFBRSxLQUFLO0lBQ2YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jb21tb24vcmVjb2lsL21vZGFsL21vZGFsLmF0b20udHN4PzAxNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGNvbnN0IG1vZGFsQXRvbSA9IGF0b208e1xuICBtb2RhbDogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xuICBvcGVuZWQ6IGJvb2xlYW47XG59Pih7XG4gIGtleTogXCJtb2RhbFwiLFxuICBkZWZhdWx0OiB7XG4gICAgbW9kYWw6IDw+PC8+LFxuICAgIG9wZW5lZDogZmFsc2UsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJhdG9tIiwibW9kYWxBdG9tIiwia2V5IiwiZGVmYXVsdCIsIm1vZGFsIiwib3BlbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/recoil/modal/modal.atom.tsx\n");

/***/ }),

/***/ "./common/recoil/modal/modal.hooks.tsx":
/*!*********************************************!*\
  !*** ./common/recoil/modal/modal.hooks.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModal\": () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.atom */ \"./common/recoil/modal/modal.atom.tsx\");\n\n\n\nconst useModal = ()=>{\n    const setModal = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_modal_atom__WEBPACK_IMPORTED_MODULE_2__.modalAtom);\n    const openModal = (modal)=>setModal({\n            modal,\n            opened: true\n        })\n    ;\n    const closeModal = ()=>setModal({\n            modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            opened: false\n        })\n    ;\n    return {\n        openModal,\n        closeModal\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL21vZGFsLmhvb2tzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBRUY7QUFFeEMsS0FBSyxDQUFDRSxRQUFRLE9BQVMsQ0FBQztJQUN0QixLQUFLLENBQUNDLFFBQVEsR0FBR0gseURBQWlCLENBQUNDLGtEQUFTO0lBRTVDLEtBQUssQ0FBQ0csU0FBUyxJQUFJQyxLQUFrQyxHQUNuREYsUUFBUSxDQUFDLENBQUM7WUFBQ0UsS0FBSztZQUFFQyxNQUFNLEVBQUUsSUFBSTtRQUFDLENBQUM7O0lBRWxDLEtBQUssQ0FBQ0MsVUFBVSxPQUFTSixRQUFRLENBQUMsQ0FBQztZQUFDRSxLQUFLO1lBQVNDLE1BQU0sRUFBRSxLQUFLO1FBQUMsQ0FBQzs7SUFFakUsTUFBTSxDQUFDLENBQUM7UUFBQ0YsU0FBUztRQUFFRyxVQUFVO0lBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaWJvYXJkLy4vY29tbW9uL3JlY29pbC9tb2RhbC9tb2RhbC5ob29rcy50c3g/ODU1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcblxuaW1wb3J0IHsgbW9kYWxBdG9tIH0gZnJvbSBcIi4vbW9kYWwuYXRvbVwiO1xuXG5jb25zdCB1c2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3Qgc2V0TW9kYWwgPSB1c2VTZXRSZWNvaWxTdGF0ZShtb2RhbEF0b20pO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbDogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdKSA9PlxuICAgIHNldE1vZGFsKHsgbW9kYWwsIG9wZW5lZDogdHJ1ZSB9KTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoeyBtb2RhbDogPD48Lz4sIG9wZW5lZDogZmFsc2UgfSk7XG5cbiAgcmV0dXJuIHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH07XG59O1xuXG5leHBvcnQgeyB1c2VNb2RhbCB9O1xuIl0sIm5hbWVzIjpbInVzZVNldFJlY29pbFN0YXRlIiwibW9kYWxBdG9tIiwidXNlTW9kYWwiLCJzZXRNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwib3BlbmVkIiwiY2xvc2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/recoil/modal/modal.hooks.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/global.css */ \"./common/styles/global.css\");\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components/modal/components/ModalManager */ \"./common/components/modal/components/ModalManager.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__]);\n_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Collabio | Online Whiteboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/pages/_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikunjmaheshwari/Downloads/digiboard-main/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFUjtBQUNtQjtBQUNaO0FBRXlDO0FBRTFCO0FBRWxELEtBQUssQ0FBQ0ksR0FBRyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxHQUFLLENBQUM7SUFDbkQsTUFBTTs7d0ZBRUROLGtEQUFJOztnR0FDRk8sQ0FBSztrQ0FBQyxDQUE0Qjs7Ozs7O2dHQUNsQ0MsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBRXJDUiw4Q0FBVTs7Z0dBQ1JELDBEQUFjOzs7OztnR0FDZEUsd0ZBQVk7Ozs7O2dHQUNaRSxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vY29tbW9uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcblxuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQC9jb21tb24vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL01vZGFsTWFuYWdlclwiO1xuXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkubWluLmNzc1wiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbGxhYmlvIHwgT25saW5lIFdoaXRlYm9hcmQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgIDxNb2RhbE1hbmFnZXIgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SZWNvaWxSb290PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJUb2FzdENvbnRhaW5lciIsIlJlY29pbFJvb3QiLCJNb2RhbE1hbmFnZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./common/styles/global.css":
/*!**********************************!*\
  !*** ./common/styles/global.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();