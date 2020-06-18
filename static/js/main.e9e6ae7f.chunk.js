(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);a(77);var r=a(0),n=a.n(r),l=a(21),i=a.n(l),c=(a(82),a(31)),s=a(49),o=a(59);c.b.add(s.c,s.a,o.a,s.b);a(86);var u=a(73),m=a(109),p=a(103),d=a(6),g=a(7),f=a.n(g),E=a(12),h=a(22),b=localStorage.users?JSON.parse(localStorage.users):[],v={LOGIN:function(e,t){return w.apply(this,arguments)},LOGOUT:function(){return O.apply(this,arguments)},REGISTER:function(e,t){return y.apply(this,arguments)},TOGGLE_FAVORITE:function(e){return j.apply(this,arguments)},UPDATE_USER:q};function w(){return(w=Object(E.a)(f.a.mark((function e(t,a){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},e.prev=1,k(t)){e.next=4;break}throw new Error("User not Found");case 4:if(S(t,a)){e.next=6;break}throw new Error("Password incorect");case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(1),r={status:"Failed",message:e.t0.message},e.abrupt("return",r);case 12:return n=b.find((function(e){return e.username.toLowerCase()===t.toLowerCase()})),localStorage.user=JSON.stringify(n),r={status:"Success",message:"User logged in",user:n},Object(h.b)("Welcome, ".concat(t,"!")),e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function O(){return(O=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.removeItem("user"),t={},e.prev=2,!localStorage.user){e.next=5;break}throw new Error("Failed to log out");case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(2),t={status:"Failed",message:e.t0.message},e.abrupt("return",t);case 11:return t={status:"Success",message:"User logged out"},Object(h.b)(t.message),e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function y(){return(y=Object(E.a)(f.a.mark((function e(t,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k(t)){e.next=3;break}throw new Error("Username taken");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{status:"Failed",message:e.t0.message});case 8:return r={id:b.length,username:t.toString(),password:a.toString(),favorites:[],user_cart:[],orders:[]},b.push(r),localStorage.users=JSON.stringify(b),e.abrupt("return",{status:"Success",message:"User created",user:r});case 12:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function j(){return(j=Object(E.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.user),a.favorites.some((function(e){return e===t}))?(r=a.favorites.indexOf(t),a.favorites.splice(r,1)):a.favorites.push(t),q(a),e.abrupt("return",a.favorites);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){localStorage.user=JSON.stringify(e),function(e){var t=b.findIndex((function(t){return t.id===e.id}));b[t]=e,localStorage.users=JSON.stringify(b)}(e)}function k(e){var t=e.toString().toLowerCase();return b.some((function(e){return e.username.toLowerCase()===t}))}function S(e,t){return b.find((function(t){return t.username.toLowerCase()===e.toLowerCase()})).password===t.toString()}var N="LOG_IN_USER",T="LOG_OUT";var P=a(28);var x=function(){var e=Object(d.d)((function(e){return e.cart})),t=Object(d.d)((function(e){return e.userAuth})),a=Object(d.c)();function r(){a((function(e){v.LOGOUT().then((function(t){"Success"===t.status?e({type:T}):console.error(t.message)}))}))}var l=n.a.createElement(u.a.Link,{onClick:function(){return r()}},"Log Out"),i=n.a.createElement(u.a.Link,{href:"/login"},"Login"),c=e.length>0&&n.a.createElement("span",{className:"cart-items_counter"},e.length);return n.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"md"},n.a.createElement(p.a,null,n.a.createElement(m.a.Brand,null,n.a.createElement(u.a.Link,{href:"/"},"Home")),n.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(m.a.Collapse,null,n.a.createElement(u.a,null,n.a.createElement(u.a.Link,{href:"/about"},"About")),n.a.createElement(u.a,{className:"mr-auto"},n.a.createElement(u.a.Link,{href:"/dashboard"},"My profile")),n.a.createElement(u.a,{className:"justify-content-end"},n.a.createElement(u.a.Link,{href:"/cart",className:"cart-items"},n.a.createElement(P.a,{icon:"shopping-basket"}),c),t.loggedIn&&l,t.loggedIn?n.a.createElement(m.a.Text,null,"Signed in as: ",n.a.createElement("a",{href:"/dashboard"},t.user)):i))))},A=a(9);var _=function(){return n.a.createElement("div",{className:"page about-page"},n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"Overview"),n.a.createElement("p",null,"Simple store app built with React. The purpoupse of this project is to learn and master the React and Redux foundations.")),n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"What you can do with this app"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/login",target:"blank"},"Create or login to your account")),n.a.createElement("li",null,"Add or remove products to your favorites list *"),n.a.createElement("li",null,"Add products to Cart"),n.a.createElement("li",null,"Remove products from cart"),n.a.createElement("li",null,"Empty cart"),n.a.createElement("li",null,"Complete order *"),n.a.createElement("li",null,"See your orders and favourited products in your ",n.a.createElement("a",{href:"/dashboard"},"dashboard")," *"),n.a.createElement("span",{className:"font-italic"},"* You need to be logged in"))),n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"Project on Github"),n.a.createElement("a",{href:"https://github.com/al-nenov/react-shop"},"https://github.com/al-nenov/react-shop")),n.a.createElement("div",{className:"section"},n.a.createElement("h2",null,"Packages"),n.a.createElement("ul",null,n.a.createElement("li",null,"React"),n.a.createElement("li",null,"Redux"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/redux-thunk",target:"_blank",rel:"noopener noreferrer"},"Thunk")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/redux-persist",target:"_blank",rel:"noopener noreferrer"},"Persist"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-router-dom",target:"_blank",rel:"noopener noreferrer"},"Router")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/prop-types",target:"_blank",rel:"noopener noreferrer"},"Prop Types")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-hook-form",target:"_blank",rel:"noopener noreferrer"},"React Hook Form")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-js-pagination",target:"_blank",rel:"noopener noreferrer"},"React js pagination")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-bootstrap",target:"_blank",rel:"noopener noreferrer"},"React Bootstrap")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/@fortawesome/react-fontawesome",target:"_blank",rel:"noopener noreferrer"},"Font Awesome")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/react-toastify",target:"_blank",rel:"noopener noreferrer"},"React Toastify")))))},L=a(75);var R=function(e){var t=e.children,a=Object(L.a)(e,["children"]),r=Object(d.d)((function(e){return e.userAuth}));return n.a.createElement(A.b,Object.assign({},a,{render:function(e){var a=e.location;return r.loggedIn?t:n.a.createElement(A.a,{to:{pathname:"/login",state:{from:a}}})}}))},I=a(11),C=a(105),D=a(66),V=a.n(D),M=a(71),F=a(111),G=a(104),U=a(67),J=a(8),B=a(19),Y=a(56),H=a(68),W=a.n(H),X=a(69),z={allProducts:a(70)},K={loggedIn:!!localStorage.user,user:localStorage.user?JSON.parse(localStorage.user):{}},Q="ADD_PRODUCT_TO_CART",$="EMOVE_ITEM_FROM_CART",Z="EMPTY_CART",ee=[],te="TOGLE_FAVORITE",ae="SET_FAVORITES",re="GET_FAVORITES",ne=[],le=Object(B.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;return t.type,e},userAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loggedIn:!0,user:t.payload};case T:return{loggedIn:!1,user:{}};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:case $:return Object(J.a)(t.payload);case Z:return[];default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:case ae:case re:return t.payload;default:return e}}}),ie={key:"root",storage:W.a,whitelist:["userAuth","cart","favorites"]},ce=window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e},se=Object(Y.a)(ie,le),oe=Object(B.e)(se,Object(B.d)(Object(B.a)(X.a),ce)),ue=Object(Y.b)(oe),me={COMPLETE_ORDER:function(e){return pe.apply(this,arguments)},ORDERS_LIST:function(){return JSON.parse(localStorage.user).orders}};function pe(){return(pe=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.length){e.next=3;break}throw new Error("No items in cart");case 3:if(localStorage.user){e.next=5;break}throw new Error("No user found");case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{status:"Failed",message:e.t0.message});case 10:return(a=JSON.parse(localStorage.user)).orders.push({id:a.orders.length+1,items:Object(J.a)(t)}),v.UPDATE_USER(a),e.abrupt("return",{status:"Success",user:a});case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function de(){return Object(J.a)(oe.getState().cart)}var ge=function(e){var t=Object(d.c)();return n.a.createElement("div",{className:"add-to-cart mx-auto my-2"},n.a.createElement(G.a,{variant:"primary btn-lg",onClick:function(){t(function(e){var t=de(),a=Object(U.a)({},e),r=t.find((function(e){return e.id===a.id}));return r?r.qty+=1:(a.qty=1,t.push(a)),function(e){e({type:Q,payload:t}),Object(h.b)("".concat(a.title," was added to your cart"))}}(e.product))}},"Add to cart"))};var fe=function(e){var t=e.price.toFixed(2),a=e.currency||"\u043b\u0432.";return n.a.createElement("span",{className:"product-price"},t," ",n.a.createElement("span",{className:"product-price-currency"},a))};var Ee=function(){var e=Object(r.useState)(!1),t=Object(I.a)(e,2),a=t[0],n=t[1],l=Object(r.useRef)(null);function i(){n(!0)}function c(){n(!1)}return Object(r.useEffect)((function(){var e=l.current;return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",c),function(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",c)}}),[]),[a,l]};var he=function(){var e=Object(d.d)((function(e){return e.favorites})),t=Object(d.c)();return Object(r.useEffect)((function(){t((function(e){var t=localStorage.user?JSON.parse(localStorage.user).favorites:[];e({type:re,payload:t})}))}),[t]),[e]};var be=function(e){var t=Object(d.c)(),a=Ee(),r=Object(I.a)(a,2),l=r[0],i=r[1],c=he(e.product),s=Object(I.a)(c,1)[0].some((function(t){return t===e.product})),o=l||s?["fas","heart"]:["far","heart"];function u(e){var a;t((a=e,function(e){v.TOGGLE_FAVORITE(a).then((function(t){e({type:te,payload:t})}))}))}return n.a.createElement("span",{ref:i,className:"favorites-icon"},n.a.createElement(P.a,{onClick:function(){return u(e.product)},icon:o,size:"2x",style:{color:"red"}}))};var ve=Object(d.b)((function(e){return{loggedIn:e.userAuth.loggedIn}}),{})((function(e){return n.a.createElement(M.a,{md:4,sm:"auto",className:"product mb-5"},n.a.createElement(F.a,null,e.loggedIn&&n.a.createElement(be,{product:e.id}),n.a.createElement("a",{href:"product/".concat(e.id)},n.a.createElement(F.a.Img,{variant:"top",src:"/images/products/"+e.image}),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,e.title),n.a.createElement(F.a.Text,null,"Color: ",e.color),n.a.createElement(F.a.Text,null,"Price: ",n.a.createElement(fe,{price:e.price})))),n.a.createElement(ge,{product:e})))}));var we=Object(d.b)((function(e){return{allProducts:e.products.allProducts}}),{})((function(e){var t=Object(r.useState)(1),a=Object(I.a)(t,2),l=a[0],i=a[1],c=Object(r.useState)(m(0,6)),s=Object(I.a)(c,2),o=s[0],u=s[1];function m(t,a){return e.allProducts.slice(t,a)}var p=o.map((function(e){return n.a.createElement(ve,Object.assign({key:e.id},e))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{className:"justify-content-center products"},p),n.a.createElement(V.a,{activePage:l,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:6,totalItemsCount:e.allProducts.length,pageRangeDisplayed:5,onChange:function(e){i(e);var t=6*e;u(m(t-6,t))}}))})),Oe=a(110);var ye=Object(d.b)((function(e){return{products:e.products.allProducts,cart:e.cart}}))((function(e){var t=parseInt(e.match.params.id),a=e.products.find((function(e){return e.id===t}));return a?n.a.createElement(C.a,null,n.a.createElement(M.a,{md:6,sl:"auto"},n.a.createElement(Oe.a,null,n.a.createElement(Oe.a.Image,{src:"/images/products/"+a.image,fluid:!0}))),n.a.createElement(M.a,{md:6,sl:"auto"},n.a.createElement(F.a,null,n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,a.title),n.a.createElement(F.a.Text,null,a.description),n.a.createElement(F.a.Text,null,"Price: ",n.a.createElement(fe,{price:a.price})),n.a.createElement(F.a.Text,null,"Color: ",a.color),n.a.createElement(ge,{product:a}))))):n.a.createElement(A.a,{to:"/not-found"})})),je=a(108),qe=a(74);var ke=function(e){var t=Object(qe.a)({mode:"onBlur"}),a=t.register,r=t.handleSubmit,l=t.errors,i=t.setError;return n.a.createElement(je.a,{onSubmit:r((function(t,a){e.action(t.username,t.password,i)}))},n.a.createElement(je.a.Group,null,n.a.createElement(je.a.Label,null,"Username"),n.a.createElement(je.a.Control,{id:"username",ref:a({required:"Cannot be empty",maxLength:20}),type:"username",name:"username",placeholder:"Username"}),n.a.createElement("p",{className:"text-danger"},l.username&&l.username.message)),n.a.createElement(je.a.Group,null,n.a.createElement(je.a.Label,null,"Password"),n.a.createElement(je.a.Control,{type:"password",name:"password",placeholder:"Password",ref:a({required:"Password can not be empty",validate:{passwordLength:function(e){return e.length>=6}}})}),n.a.createElement("p",{className:"text-danger"},l.password&&l.password.message,l.password&&"passwordLength"===l.password.type&&n.a.createElement("p",null,"Your password must be atleast 6 symbols"),l.login&&l.login.message)),n.a.createElement(G.a,{variant:"primary",type:"submit"},"Submit"))};var Se=function(){var e=Object(d.c)();return n.a.createElement(F.a,{className:"p-5"},n.a.createElement("h3",null,"Log In to your account"),n.a.createElement(ke,{action:function(t,a,r){e(function(e,t,a){return function(r){v.LOGIN(e,t).then((function(e){"Success"===e.status?r({type:N,payload:e.user.username}):a("login","failed",e.message)}))}}(t,a,r))}}),n.a.createElement("a",{href:"/signup",className:"pt-3"},"Don't have an account? Signup here"))};var Ne=function(){var e=Object(d.c)();return n.a.createElement(F.a,{className:"p-5"},n.a.createElement("h3",null,"Create new account"),n.a.createElement(ke,{action:function(t,a,r){e(function(e,t,a){return function(r){v.REGISTER(e,t).then((function(n){"Success"===n.status?v.LOGIN(e,t).then((function(e){r({type:N,payload:e.user.username})})):a("login","failed",n.message)}))}}(t,a,r))}}),n.a.createElement("a",{href:"/login",className:"pt-3"},"Already have an account? Login here"))};var Te=function(e){var t=Object(d.c)(),a=Object(d.d)((function(e){return e.userAuth.loggedIn}));return n.a.createElement(F.a,{className:"p-4"},n.a.createElement("h5",null,"Cart Totals:"),n.a.createElement("p",null,"Total : ",n.a.createElement(fe,{price:e.total})),!a&&n.a.createElement("div",null,n.a.createElement("p",{className:"text-warning"},"You need to be logged in to complete an order"),n.a.createElement("a",{href:"/login"},"Login here")),n.a.createElement(G.a,{variant:"secondary",onClick:function(){var r;a&&t((r=e.items,function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.COMPLETE_ORDER(r);case 2:"Success"===e.sent.status&&(t({type:Z}),Object(h.b)("Thank You for shopping with us"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},disabled:!a},"Complete order"))},Pe=a(47);var xe=function(e){var t=Object(d.c)();function a(e){t(function(e){var t=de().filter((function(t){return t.id!==e}));return function(e){e({type:$,payload:t}),Object(h.b)("Product was removed from your cart")}}(e))}var r=n.a.createElement("a",{href:"product/".concat(e.item.id)},n.a.createElement(Oe.a,{className:"mx-2"},n.a.createElement(Oe.a.Image,{width:50,src:"/images/products/"+e.item.image,fluid:!0})),e.item.title);return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(Pe.a,{onClick:function(){return a(e.item.id)}},n.a.createElement(P.a,{icon:"times"}))),n.a.createElement("td",null,e.item.id),n.a.createElement("td",null,r),n.a.createElement("td",null,n.a.createElement(fe,{price:e.item.price})),n.a.createElement("td",null,e.item.qty),n.a.createElement("td",null,n.a.createElement(fe,{price:e.item.price*e.item.qty})))},Ae=a(106);var _e=function(){var e=Object(r.useState)(0),t=Object(I.a)(e,2),a=t[0],l=t[1],i=Object(d.c)(),c=Object(d.d)((function(e){return e.cart}));if(Object(r.useEffect)((function(){var e=0;c.forEach((function(t){e+=t.price*t.qty})),l(e)}),[c]),!c.length)return n.a.createElement(A.a,{to:"/"});var s=c.map((function(e){return n.a.createElement(xe,{key:e.id,item:e})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"py-3"},"Cart page"),n.a.createElement(Ae.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"id"),n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Qty"),n.a.createElement("th",null,"Total"))),n.a.createElement("tbody",null,s)),n.a.createElement(C.a,null,n.a.createElement(M.a,null,n.a.createElement(G.a,{variant:"outline-secondary",onClick:function(){i((function(e){e({type:Z})}))}},"Empty cart")),n.a.createElement(M.a,null,n.a.createElement(Te,{total:a,items:c}))))};var Le=function(e){var t=n.a.createElement("a",{href:"product/".concat(e.item.id)},n.a.createElement(Oe.a,{className:"mx-2"},n.a.createElement(Oe.a.Image,{width:50,src:"/images/products/"+e.item.image,fluid:!0})),e.item.title);return n.a.createElement("tr",null,n.a.createElement("td",null,e.item.id),n.a.createElement("td",null,t),n.a.createElement("td",null,n.a.createElement(fe,{price:e.item.price})),n.a.createElement("td",null,e.item.qty),n.a.createElement("td",null,n.a.createElement(fe,{price:e.item.price*e.item.qty})))};var Re=function(e){var t=0,a=e.order.items.map((function(e){return t+=e.qty*e.price,n.a.createElement(Le,{key:e.id,item:e})}));return n.a.createElement("div",null,n.a.createElement("h5",null,"Order # ",e.order.id),n.a.createElement(Ae.a,null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"ID"),n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Qty"),n.a.createElement("th",null,"Total")),a),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:3}),n.a.createElement("td",null," Order Total: "),n.a.createElement("td",null,n.a.createElement(fe,{price:t}))))))};var Ie=function(){var e=me.ORDERS_LIST().map((function(e){return n.a.createElement(Re,{key:e.id,order:e})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"py-3"},"Your orders"),e)};var Ce=function(e){var t=n.a.createElement("a",{href:"product/".concat(e.item.id)},n.a.createElement(Oe.a,{className:"mx-2"},n.a.createElement(Oe.a.Image,{width:50,src:"/images/products/"+e.item.image,fluid:!0})),e.item.title);return n.a.createElement("tr",null,n.a.createElement("td",null,e.item.id),n.a.createElement("td",null,t),n.a.createElement("td",null,n.a.createElement(fe,{price:e.item.price})))};var De=function(){var e=Object(d.d)((function(e){return e.favorites})),t=Object(d.d)((function(e){return e.products.allProducts})),a=e.map((function(e){return n.a.createElement(Ce,{key:e,item:t.find((function(t){return t.id===e}))})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"py-3"},"Your favorites"),n.a.createElement(Ae.a,null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"ID"),n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Price")),a)))},Ve=a(112),Me=a(107);var Fe=function(){var e=Object(d.d)((function(e){return e.userAuth}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Hello, ",e.user),n.a.createElement(Ve.a,{defaultActiveKey:"order",id:""},n.a.createElement(Me.a,{eventKey:"order",title:"Orders"},n.a.createElement(Ie,null)),n.a.createElement(Me.a,{eventKey:"favorites",title:"Favorites"},n.a.createElement(De,null))))};var Ge=function(){var e=Object(d.d)((function(e){return e.userAuth})).loggedIn;return n.a.createElement(p.a,{className:"p-4"},n.a.createElement(A.d,null,n.a.createElement(A.b,{exact:!0,path:"/",component:we}),n.a.createElement(A.b,{path:"/about",component:_}),n.a.createElement(A.b,{path:"/product/:id",component:ye}),n.a.createElement(A.b,{path:"/cart",component:_e}),n.a.createElement(R,{path:"/dashboard"},n.a.createElement(Fe,null)),n.a.createElement(A.b,{path:"/login",component:Se},e&&n.a.createElement(A.a,{to:"/"})),n.a.createElement(A.b,{path:"/signup",component:Ne},e&&n.a.createElement(A.a,{to:"/"}))))};var Ue=function(){return n.a.createElement("footer",{className:"page-footer font-small",variant:"dark"},n.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright"))};a(99);var Je=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{position:"top-right",autoClose:2500,closeOnClick:!0}),n.a.createElement(x,null),n.a.createElement(Ge,null),n.a.createElement(Ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=a(27),Ye=a(72);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d.a,{store:oe},n.a.createElement(Ye.a,{loading:"loading...",persistor:ue},n.a.createElement(Be.a,null,n.a.createElement(Je,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e){e.exports=JSON.parse('[{"id":1,"image":"beanie-2.jpg","price":25,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"red","categories":["clothing","hats"],"title":"Red beanie"},{"id":2,"image":"beanie-with-logo-1.jpg","price":25,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","hats"],"title":"Blue beanie"},{"id":3,"image":"belt-2.jpg","price":59,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"brown","categories":["clothing","accessories"],"title":"Belt"},{"id":4,"image":"cap-2.jpg","price":56,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"yellow","categories":["clothing","hats"],"title":"Yellow cap"},{"id":5,"image":"hoodie-2.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"red","categories":["clothing","tops"],"title":"Red hoodie"},{"id":6,"image":"hoodie-blue-1.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Blue hoodie"},{"id":7,"image":"hoodie-green-1.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Green hoodie"},{"id":8,"image":"hoodie-with-logo-2.jpg","price":96,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Hoodie with logo"},{"id":9,"image":"hoodie-with-pocket-2.jpg","price":106,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"grey","categories":["clothing","tops"],"title":"Hoodie with pocket"},{"id":10,"image":"hoodie-with-zipper-2.jpg","price":126,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Hoodie with zipper"},{"id":11,"image":"long-sleeve-tee-2.jpg","price":76,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Long sleeve tee"},{"id":13,"image":"polo-2.jpg","price":79,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Polo"},{"id":14,"image":"sunglasses-2.jpg","price":186,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"black","categories":["accessories"],"title":"Sunglasses"},{"id":15,"image":"tshirt-2.jpg","price":35,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"white","categories":["clothing","tops"],"title":"T-shirt"},{"id":16,"image":"t-shirt-with-logo-1.jpg","price":40,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"T-shirt"},{"id":17,"image":"vnech-tee-blue-1.jpg","price":50,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"blue","categories":["clothing","tops"],"title":"Vneck tee"},{"id":18,"image":"vnech-tee-green-1.jpg","price":50,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"green","categories":["clothing","tops"],"title":"Vneck tee"},{"id":19,"image":"vneck-tee-2.jpg","price":86,"description":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.","color":"red","categories":["clothing","tops"],"title":"Vneck tee"}]')},76:function(e,t,a){e.exports=a(100)},82:function(e,t,a){},86:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.e9e6ae7f.chunk.js.map