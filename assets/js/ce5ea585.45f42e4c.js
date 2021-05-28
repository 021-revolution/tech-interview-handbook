(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[968],{2122:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return a}})},9756:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:function(){return a}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},297:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={id:"best-practice-questions",title:"Best Practice Questions"},l={unversionedId:"best-practice-questions",id:"best-practice-questions",isDocsHomePage:!1,title:"Best Practice Questions",description:"Here is a suggested schedule for revising and practicing algorithm questions on LeetCode. Sign up for an account if you don't already have one, it's critical to your success in interviewing!",source:"@site/../contents/best-practice-questions.md",sourceDirName:".",slug:"/best-practice-questions",permalink:"/best-practice-questions",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/best-practice-questions.md",version:"current",lastUpdatedBy:"Author",lastUpdatedAt:1539502055,formattedLastUpdatedAt:"10/14/2018",frontMatter:{id:"best-practice-questions",title:"Best Practice Questions"},sidebar:"docs",previous:{title:"Study and Practice",permalink:"/study-and-practice"},next:{title:"During the Coding Interview",permalink:"/during-coding-interview"}},s=[{value:"Week 1 - Sequences",id:"week-1---sequences",children:[]},{value:"Week 2 - Data Structures",id:"week-2---data-structures",children:[]},{value:"Week 3 - Non-Linear Data Structures",id:"week-3---non-linear-data-structures",children:[]},{value:"Week 4 - More Data Structures",id:"week-4---more-data-structures",children:[]},{value:"Week 5 - Dynamic Programming",id:"week-5---dynamic-programming",children:[]}],m={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a suggested schedule for revising and practicing algorithm questions on ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com"},"LeetCode"),". Sign up for an account if you don't already have one, it's critical to your success in interviewing!"),(0,o.kt)("p",null,"When practicing, you are advised to treat it like a real coding interview and check through thoroughly before submitting. Consider even manually coming up with some test cases and running through them to verify correctness!"),(0,o.kt)("h2",{id:"week-1---sequences"},"Week 1 - Sequences"),(0,o.kt)("p",null,"In week 1, we will start off easy and do a mix of easy and medium questions on arrays and strings. Arrays and strings are the most common types of questions to be found in interviews; gaining familiarity with them will help in building strong fundamentals to better handle tougher questions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/two-sum/"},"Two Sum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/contains-duplicate/"},"Contains Duplicate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},"Best Time to Buy and Sell Stock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/valid-anagram/"},"Valid Anagram")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/valid-parentheses/"},"Valid Parentheses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/product-of-array-except-self/"},"Product of Array Except Self")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-subarray/"},"Maximum Subarray")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/3sum/"},"3Sum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-intervals/"},"Merge Intervals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/group-anagrams/"},"Group Anagrams"))),(0,o.kt)("h4",{id:"optional"},"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-product-subarray/"},"Maximum Product Subarray")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},"Search in Rotated Sorted Array"))),(0,o.kt)("h2",{id:"week-2---data-structures"},"Week 2 - Data Structures"),(0,o.kt)("p",null,"The focus of week 2 is on linked lists, strings and matrix-based questions. The goal is to learn the common routines dealing with linked lists, traversing matrices and sequence analysis (arrays/strings) techniques such as sliding window."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/reverse-linked-list/"},"Reverse a Linked List")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/linked-list-cycle/"},"Detect Cycle in a Linked List")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/container-with-most-water/"},"Container With Most Water")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"},"Find Minimum in Rotated Sorted Array")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-repeating-character-replacement/"},"Longest Repeating Character Replacement")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},"Longest Substring Without Repeating Characters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/minimum-window-substring/"},"Minimum Window Substring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/number-of-islands/"},"Number of Islands")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},"Remove Nth Node From End Of List")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/palindromic-substrings/"},"Palindromic Substrings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/pacific-atlantic-water-flow/"},"Pacific Atlantic Water Flow"))),(0,o.kt)("h2",{id:"week-3---non-linear-data-structures"},"Week 3 - Non-Linear Data Structures"),(0,o.kt)("p",null,"The focus of week 3 is on non-linear data structures like trees, graphs and heaps. You should be familiar with the various tree traversal (in-order, pre-order, post-order) algorithms and graph traversal algorithms such as breadth-first search and depth-first search. In my experience, using more advanced graph algorithms (Dijkstra's and Floyd-Warshall) is quite rare and usually not necessary."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/validate-binary-search-tree/"},"Validate Binary Search Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/invert-binary-tree/"},"Invert/Flip Binary Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/non-overlapping-intervals/"},"Non-overlapping Intervals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},"Serialize and Deserialize Binary Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},"Construct Binary Tree from Preorder and Inorder Traversal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/top-k-frequent-elements/"},"Top K Frequent Elements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/clone-graph/"},"Clone Graph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/course-schedule/"},"Course Schedule")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-maximum-path-sum/"},"Binary Tree Maximum Path Sum"))),(0,o.kt)("h4",{id:"optional-1"},"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},"Maximum Depth of Binary Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/same-tree/"},"Same Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},"Binary Tree Level Order Traversal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/encode-and-decode-strings/"},"Encode and Decode Strings (LeetCode Premium)"))),(0,o.kt)("h2",{id:"week-4---more-data-structures"},"Week 4 - More Data Structures"),(0,o.kt)("p",null,"Week 4 builds up on knowledge from previous weeks but questions are of increased difficulty. Expect to see such level of questions during interviews. You get more practice on more advanced data structures such as (but not exclusively limited to) heaps and tries."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/add-and-search-word-data-structure-design/"},"Add and Search Word")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/implement-trie-prefix-tree/"},"Implement Trie (Prefix Tree)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/subtree-of-another-tree/"},"Subtree of Another Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"},"Kth Smallest Element in a BST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},"Lowest Common Ancestor of BST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-k-sorted-lists/"},"Merge K Sorted Lists")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/find-median-from-data-stream/"},"Find Median from Data Stream")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/insert-interval/"},"Insert Interval")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-consecutive-sequence/"},"Longest Consecutive Sequence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/word-search-ii/"},"Word Search II"))),(0,o.kt)("h4",{id:"optional-2"},"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms/"},"Meeting Rooms (LeetCode Premium)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms-ii/"},"Meeting Rooms II (LeetCode Premium)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/alien-dictionary/"},"Alien Dictionary (LeetCode Premium)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/graph-valid-tree/"},"Graph Valid Tree (LeetCode Premium)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"},"Number of Connected Components in an Undirected Graph (LeetCode Premium)"))),(0,o.kt)("h2",{id:"week-5---dynamic-programming"},"Week 5 - Dynamic Programming"),(0,o.kt)("p",null,"Week 5 focuses on Dynamic Programming (DP) questions. Personally as an interviewer, I'm not a fan of DP questions as they are not really applicable to practical scenarios and frankly if I were made to do the tough DP questions during my interviews I'd not have gotten the job. However, companies like Google still ask DP questions and if joining Google is your dream, DP is unavoidable."),(0,o.kt)("p",null,"DP questions can be hard to master and the best way to get better at them is... you guessed it - practice! Be familiar with the concepts of memoization and backtracking."),(0,o.kt)("p",null,"Practically speaking the return of investment (ROI) on studying and practicing for DP questions is very low. Hence DP questions are less important/optional and you should only do them if you're very keen to have all bases covered."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/climbing-stairs/"},"Climbing Stairs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/coin-change/"},"Coin Change")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-increasing-subsequence/"},"Longest Increasing Subsequence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/combination-sum-iv/"},"Combination Sum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/house-robber/"},"House Robber")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/house-robber-ii/"},"House Robber II")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/decode-ways/"},"Decode Ways")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/unique-paths/"},"Unique Paths")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/jump-game/"},"Jump Game")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/word-break/"},"Word Break Problem"))))}c.isMDXComponent=!0}}]);