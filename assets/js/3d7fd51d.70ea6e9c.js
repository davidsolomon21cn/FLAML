"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3454:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_label:"utils",title:"automl.utils"},i=void 0,o={unversionedId:"reference/automl/utils",id:"reference/automl/utils",isDocsHomePage:!1,title:"automl.utils",description:"len\\_labels",source:"@site/docs/reference/automl/utils.md",sourceDirName:"reference/automl",slug:"/reference/automl/utils",permalink:"/FLAML/docs/reference/automl/utils",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/automl/utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"utils",title:"automl.utils"},sidebar:"referenceSideBar",previous:{title:"state",permalink:"/FLAML/docs/reference/automl/state"},next:{title:"estimator",permalink:"/FLAML/docs/reference/default/estimator"}},u=[{value:"len_labels",id:"len_labels",children:[],level:4},{value:"unique_value_first_index",id:"unique_value_first_index",children:[],level:4}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"len_labels"},"len","_","labels"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def len_labels(y: np.ndarray, return_labels=False) -> Union[int, Optional[np.ndarray]]\n")),(0,a.kt)("p",null,"Get the number of unique labels in y. The non-spark version of\nflaml.automl.spark.utils.len_labels"),(0,a.kt)("h4",{id:"unique_value_first_index"},"unique","_","value","_","first","_","index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def unique_value_first_index(y: np.ndarray) -> Tuple[np.ndarray, np.ndarray]\n")),(0,a.kt)("p",null,"Get the unique values and indices of a pandas series or numpy array.\nThe non-spark version of flaml.automl.spark.utils.unique_value_first_index"))}c.isMDXComponent=!0}}]);