(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{974:function(n,e,i){"use strict";i.r(e);var t,c,o,r,d,l,a,s,p,b,j,u,h,x=i(14),v=(i(0),i(5)),O=i(12),g=i(54),m=i(2),f=i(300),C=i(1),F=function(n,e,i){return Object(v.d)(t||(t=Object(x.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"])),e,(function(){return n.isDark?(null===i||void 0===i?void 0:i.dark)||(null===i||void 0===i?void 0:i.light)||n.colors.background:(null===i||void 0===i?void 0:i.light)||n.colors.background}))},P=Object(v.e)(m.i)(c||(c=Object(x.a)(["\n  ","\n  transform: ",";\n"])),(function(n){var e=n.theme,i=n.clipPath,t=n.clipFill;return F(e,i,t)}),(function(n){return"#bottomConcaveCurve"===n.clipPath?"translate(0, -13px)":"translate(0, 1px)"})),k=Object(v.e)(m.i)(o||(o=Object(x.a)(["\n  ","\n  transform: ",";\n"])),(function(n){var e=n.theme,i=n.clipPath,t=n.clipFill;return F(e,i,t)}),(function(n){return"#bottomConvexCurve"===n.clipPath?"translate(0, -13px)":"translate(0, -1px)"})),w=function(n){var e=n.clipFill;return Object(C.jsx)(k,{clipFill:e,clipPath:"#topConvexCurve",children:Object(C.jsx)("svg",{width:"0",height:"0",children:Object(C.jsx)("defs",{children:Object(C.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(C.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},y=function(n){var e=n.clipFill;return Object(C.jsx)(k,{clipFill:e,clipPath:"#bottomConvexCurve",children:Object(C.jsx)("svg",{width:"0",height:"0",children:Object(C.jsx)("defs",{children:Object(C.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(C.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},B=function(n){var e=n.clipFill;return Object(C.jsx)(P,{clipFill:e,clipPath:"#topConcaveCurve",children:Object(C.jsx)("svg",{width:"0",height:"0",children:Object(C.jsx)("defs",{children:Object(C.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(C.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},L=function(n){var e=n.clipFill;return Object(C.jsx)(P,{clipFill:e,clipPath:"#bottomConcaveCurve",children:Object(C.jsx)("svg",{width:"0",height:"0",children:Object(C.jsx)("defs",{children:Object(C.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(C.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})},D=v.e.div(r||(r=Object(x.a)(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])),(function(n){var e=n.theme,i=n.dividerFill;return e.isDark?(null===i||void 0===i?void 0:i.dark)||(null===i||void 0===i?void 0:i.light)||"none":(null===i||void 0===i?void 0:i.light)||(null===i||void 0===i?void 0:i.dark)||"none"}),(function(n){return n.index})),z=v.e.div(d||(d=Object(x.a)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),(function(n){return n.index+1})),M=function(n){var e=n.index,i=n.dividerPosition,t=n.dividerComponent,c=n.concave,o=n.clipFill,r=n.dividerFill,d="top"===i&&!c,l="bottom"===i&&!c,a="top"===i&&c,s="bottom"===i&&c;return Object(C.jsxs)(D,{index:e,dividerFill:r,children:[t&&Object(C.jsx)(z,{index:e,children:t}),Object(C.jsxs)(C.Fragment,{children:[a&&Object(C.jsx)(B,{clipFill:o}),s&&Object(C.jsx)(L,{clipFill:o})]}),Object(C.jsxs)(C.Fragment,{children:[d&&Object(C.jsx)(w,{clipFill:o}),l&&Object(C.jsx)(y,{clipFill:o})]})]})},Q=["children","background","svgFill","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"],U=Object(v.e)(m.B)(l||(l=Object(x.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  background: ",";\n  padding: ",";\n"])),(function(n){return n.index-1}),(function(n){var e=n.background,i=n.theme;return e||i.colors.background}),(function(n){return(0,n.getPadding)()})),Z=Object(v.e)(f.a)(a||(a=Object(x.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),I=function(n){var e=n.children,i=n.background,t=n.svgFill,c=n.index,o=void 0===c?1:c,r=n.dividerComponent,d=n.dividerPosition,l=void 0===d?"bottom":d,a=n.hasCurvedDivider,s=void 0===a||a,p=n.concaveDivider,b=void 0!==p&&p,j=n.clipFill,u=n.dividerFill,h=n.containerProps,x=n.innerProps,v=Object(g.a)(n,Q);return Object(C.jsxs)(m.i,Object(O.a)(Object(O.a)({},h),{},{children:[s&&"top"===l&&Object(C.jsx)(M,{svgFill:t,index:o,concave:b,dividerPosition:l,dividerComponent:r,clipFill:j,dividerFill:u}),Object(C.jsx)(U,Object(O.a)(Object(O.a)({background:i,index:o,getPadding:function(){return s?"bottom"===l?"48px 0 14px":"top"===l?"14px 0 48px":"48px 0":"48px 0"}},v),{},{children:Object(C.jsx)(Z,Object(O.a)(Object(O.a)({},x),{},{children:e}))})),s&&"bottom"===l&&Object(C.jsx)(M,{svgFill:t,index:o,concave:b,dividerPosition:l,dividerComponent:r,clipFill:j,dividerFill:u})]}))},J=i(78),T=i(127),N=i(206),q=i(18),A=function(){return Object(v.f)(s||(s=Object(x.a)(["\n  from {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.9;\n  }\n"])))},E=v.e.div(p||(p=Object(x.a)(["\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0px;\n  left: 0px;\n\n"]))),G=v.e.div(b||(b=Object(x.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: -3px;\n\n"]))),H=(v.e.div(j||(j=Object(x.a)(["\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  & :nth-child(2) {\n    animation: "," 2s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: "," 5s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: "," 2.5s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n"])),A,A,A),function(){var n=Object(q.b)().t;Object(J.c)().account,Object(T.a)().theme;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(E,{children:Object(C.jsx)(G,{})}),Object(C.jsx)(m.B,{position:"relative",flexDirection:["column-reverse",null,null,"row"],alignItems:["flex-end",null,null,"center"],justifyContent:"center",mt:["250px",null,0],id:"homepage-hero",children:Object(C.jsxs)(m.B,{flex:"1",flexDirection:"column",children:[Object(C.jsx)(m.D,{scale:"xxl",color:"#e2293a",mb:"24px",children:n("Cyberspace's Mint is under your command")}),Object(C.jsx)(m.D,{scale:"md",mb:"24px",color:"#f99116",children:n("Trade and earn crypto on the  decentralized platform of cyberspace.")}),Object(C.jsx)(m.B,{children:Object(C.jsx)(m.I,{mr:"16px",href:"/swap",children:Object(C.jsx)(m.j,{variant:"primary",children:n("Trade Now")})})})]})})]})}),K=Object(v.e)(I)(u||(u=Object(x.a)(["\n  padding-top: 16px;\n  background-size: cover;\n\n  background-position: center;\n\n  "," {\n    padding-top: 48px;\n  }\n"])),(function(n){return n.theme.mediaQueries.md}));Object(v.e)(f.a)(h||(h=Object(x.a)(["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 56px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 0px;\n  padding-right: 0px;\n\n\n  "," {\n    padding-left: 24px;\n    padding-right: 24px;\n\n\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),e.default=function(){Object(T.a)().theme,Object(J.c)().account;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N.a,{}),Object(C.jsx)(K,{innerProps:{style:{margin:"0",width:"100%"}},background:"url('https://raw.githubusercontent.com/cyberminter/cybermint/2523f82ddda7afa8822b335eb16ad2734282c676/logos/Banner.svg')",height:"100vh","background-size":"cover","background-position":"center",index:2,hasCurvedDivider:!1,"box-shadow":"inset 0 0 0 2000px rgba(0, 7, 68, 0.3)",children:Object(C.jsx)(H,{})})]})}}}]);
//# sourceMappingURL=7.694bb690.chunk.js.map