(this["webpackJsonpdbd-randomiser"]=this["webpackJsonpdbd-randomiser"]||[]).push([[0],{45:function(e,n,a){e.exports=a(88)},50:function(e,n,a){},51:function(e,n,a){},52:function(e,n,a){},53:function(e,n,a){},54:function(e,n,a){},60:function(e,n,a){},78:function(e,n,a){},79:function(e,n,a){},80:function(e,n,a){},81:function(e,n,a){},82:function(e,n,a){},83:function(e,n,a){},88:function(e,n,a){"use strict";a.r(n);var t,r,c=a(0),o=a.n(c),i=a(14),l=a.n(i),m=(a(50),a(51),a(52),function(){return o.a.createElement("footer",{className:"app-footer"},o.a.createElement("p",null,"Credit to icons goes to u/thatpikminguy on Reddit. Grab the icon set yourself on",o.a.createElement("a",{href:"https://www.reddit.com/r/PerkByDaylight/comments/fhqoux/the_shitty_ui_pack_13_chains_of_hate_doctor/",target:"_blank",rel:"noopener noreferrer"},"r/PerkByDaylight")))}),s=(a(53),function(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("div",{className:"app-header_top-bar"}),o.a.createElement("div",{className:"app-header_bottom-bar"},o.a.createElement("h1",null,"Dead By Daylight Loadout Randomiser")))}),u=a(17),d=a(3),E=(a(54),function(){return o.a.createElement("div",{className:"landing-container"},o.a.createElement(u.b,{className:"link-button",to:"/survivor"},o.a.createElement("img",{alt:"survivor",src:"https://dqr3pglopijar.cloudfront.net/assets/iconHelpLoading_survivor.png"}),o.a.createElement("p",null,"Randomise survivor build")),o.a.createElement(u.b,{className:"link-button",to:"/killer"},o.a.createElement("img",{alt:"killer",src:"https://dqr3pglopijar.cloudfront.net/assets/iconHelpLoading_killer.png"}),o.a.createElement("p",null,"Randomise killer build")))}),f=a(24),p=(a(60),a(105)),v=a(27),h=a.n(v),k={randomiserApi:"https://api.arhe.io/dbd-randomiser"},b=function(){return h.a.get("".concat(k.randomiserApi,"/killer"))},g=function(){return h.a.get("".concat(k.randomiserApi,"/survivor"))},N=(a(78),a(79),a(13));!function(e){e[e.BROWN=1]="BROWN",e[e.YELLOW=2]="YELLOW",e[e.GREEN=3]="GREEN",e[e.PURPLE=4]="PURPLE",e[e.IRIDESCANT=5]="IRIDESCANT",e[e.GOLD=6]="GOLD"}(t||(t={}));var y=(r={},Object(N.a)(r,t.BROWN,"#ab713c"),Object(N.a)(r,t.YELLOW,"#e8c252"),Object(N.a)(r,t.GREEN,"#199b1e"),Object(N.a)(r,t.PURPLE,"#ac3ee3"),Object(N.a)(r,t.IRIDESCANT,"#ff0955"),Object(N.a)(r,t.GOLD,"#ff8800"),r),O=function(e){var n=e.name,a=e.rank,t=e.icon,r=a?y["".concat(a)]:"#61513C";return o.a.createElement("div",{className:"diamond-icon"},o.a.createElement("p",{className:"diamond-icon_name"},n),o.a.createElement("div",{className:"diamond-icon_icon",style:{backgroundColor:r}},o.a.createElement("img",{alt:n,src:"https://dqr3pglopijar.cloudfront.net/".concat(t)})))},L=(a(80),function(e){var n=e.name,a=e.rank,t=e.icon,r=a?y["".concat(a)]:"#61513C";return o.a.createElement("div",{className:"square-icon"},o.a.createElement("p",{className:"square-icon_name"},n),o.a.createElement("div",{className:"square-icon_icon",style:{backgroundColor:r}},o.a.createElement("img",{alt:n,src:"https://dqr3pglopijar.cloudfront.net/".concat(t)})))}),j=function(e){var n=e.killer;return o.a.createElement("div",{className:"killer"},o.a.createElement(L,{name:n.name,icon:n.icon,rank:null}),n.addons.map((function(e){return o.a.createElement(L,{key:e.name,name:e.name,icon:e.icon,rank:e.rank})})),n.perks.map((function(e){return o.a.createElement(O,{key:e.name,name:e.name,icon:e.icon,rank:e.rank})})))},_=(a(81),function(){return o.a.createElement("div",{className:"survivor loading-spinner-container"},o.a.createElement("div",{className:"loading-spinner"},o.a.createElement("svg",{className:"loading-spinner-rear"},o.a.createElement("circle",{cx:"50%",cy:"50%",r:"18px"})),o.a.createElement("svg",{className:"loading-spinner-front"},o.a.createElement("circle",{cx:"50%",cy:"50%",r:"18px"}))))}),R=function(){var e=Object(c.useState)(null),n=Object(f.a)(e,2),a=n[0],t=n[1];return Object(c.useEffect)((function(){b().then((function(e){return t(e.data)}))}),[]),o.a.createElement("div",{className:"killer-container"},o.a.createElement("h2",null,"Killer"),o.a.createElement("div",{className:"killer-toolbar"},o.a.createElement(p.a,{className:"btn-generate-killer",variant:"contained",color:"primary",onClick:function(){t(null),b().then((function(e){return t(e.data)}))}},"Generate New Loadout"),o.a.createElement(p.a,{variant:"outlined",color:"secondary",href:"#/survivor"},"To Survivor Loadout")),a&&a.name?o.a.createElement(j,{killer:a}):o.a.createElement(_,null))},w=(a(82),a(83),function(e){var n=e.survivor;return o.a.createElement("div",{className:"survivor"},o.a.createElement(L,{name:n.name,icon:n.icon,rank:null}),o.a.createElement(L,{name:n.item.name,icon:n.item.icon,rank:n.item.rank}),n.item.addons.length>0?n.item.addons.map((function(e){return o.a.createElement(L,{key:e.name,name:e.name,icon:e.icon,rank:e.rank})})):o.a.createElement("div",{className:"firecracker-buffer"}),n.perks.map((function(e){return o.a.createElement(O,{key:e.name,name:e.name,icon:e.icon,rank:e.rank})})))}),B=function(){var e=Object(c.useState)(null),n=Object(f.a)(e,2),a=n[0],t=n[1];return Object(c.useEffect)((function(){g().then((function(e){return t(e.data)}))}),[]),o.a.createElement("div",{className:"survivor-container"},o.a.createElement("h2",null,"Survivor"),o.a.createElement("div",{className:"survivor-toolbar"},o.a.createElement(p.a,{className:"btn-generate-survivor",variant:"contained",color:"primary",onClick:function(){t(null),g().then((function(e){return t(e.data)}))}},"Generate New Loadout"),o.a.createElement(p.a,{variant:"outlined",color:"secondary",href:"#/killer"},"To Killer Loadout")),a&&a.item?o.a.createElement(w,{survivor:a}):o.a.createElement(_,null))},C=function(){return o.a.createElement(u.a,{basename:"/"},o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/killer",component:R}),o.a.createElement(d.a,{path:"/survivor",component:B}),o.a.createElement(d.a,{path:"/*",exact:!0,component:E})))},D=a(43),W=a(104),x=a(42),G=a.n(x)()({}),S=function(e){return"".concat(8*e,"px")},q=Object(D.a)({palette:{primary:{main:"#FF2A2B"},secondary:{main:"#ffffff"}},overrides:{MuiButton:{root:Object(N.a)({fontSize:"14px",minWidth:"100%",minHeight:S(6)},G.up("md"),{minWidth:S(25)})}}}),P=function(e){var n=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(W.a,{theme:q},n))},A=function(){return o.a.createElement("div",{className:"app-container"},o.a.createElement(P,null,o.a.createElement(s,null),o.a.createElement("section",{className:"app"},o.a.createElement(C,null)),o.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.35b55c8b.chunk.js.map