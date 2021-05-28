(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9640],{2122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5874:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"interval",title:"Interval"},l={unversionedId:"algorithms/interval",id:"algorithms/interval",isDocsHomePage:!1,title:"Interval",description:"Notes",source:"@site/../contents/algorithms/interval.md",sourceDirName:"algorithms",slug:"/algorithms/interval",permalink:"/algorithms/interval",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/interval.md",version:"current",lastUpdatedBy:"Author",lastUpdatedAt:1539502055,formattedLastUpdatedAt:"10/14/2018",frontMatter:{id:"interval",title:"Interval"},sidebar:"docs",previous:{title:"Heap",permalink:"/algorithms/heap"},next:{title:"Linked List",permalink:"/algorithms/linked-list"}},s=[{value:"Notes",id:"notes",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Interval questions are questions where you are given an array of two-element arrays (an interval) and the two values represent a start and an end value. Interval questions are considered part of the array family but they involve some common techniques hence they are extracted out to this special section of their own."),(0,o.kt)("p",null,"An example interval array: ",(0,o.kt)("inlineCode",{parentName:"p"},"[[1, 2], [4, 7]]"),"."),(0,o.kt)("p",null,"Interval questions can be tricky to those who have not tried them before because of the sheer number of cases to consider when they overlap."),(0,o.kt)("p",null,"Do clarify with the interviewer whether ",(0,o.kt)("inlineCode",{parentName:"p"},"[1, 2]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"[2, 3]")," are considered overlapping intervals as it affects how you will write your equality checks."),(0,o.kt)("p",null,"A common routine for interval questions is to sort the array of intervals by each interval's starting value."),(0,o.kt)("p",null,"Be familiar with writing code to check if two intervals overlap and merging two overlapping intervals:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"def is_overlap(a, b):\n  return a[0] < b[1] and b[0] < a[1]\n\ndef merge_overlapping_intervals(a, b):\n  return [min(a[0], b[0]), max(a[1], b[1])]\n")),(0,o.kt)("h2",{id:"corner-cases"},"Corner cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single interval"),(0,o.kt)("li",{parentName:"ul"},"Non-overlapping intervals"),(0,o.kt)("li",{parentName:"ul"},"An interval totally consumed within another interval"),(0,o.kt)("li",{parentName:"ul"},"Duplicate intervals")),(0,o.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/insert-interval/"},"Insert Interval")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-intervals/"},"Merge Intervals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/non-overlapping-intervals/"},"Non-overlapping Intervals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms/"},"Meeting Rooms (LeetCode Premium)")," and ",(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms-ii/"},"Meeting Rooms II (LeetCode Premium)"))))}u.isMDXComponent=!0}}]);