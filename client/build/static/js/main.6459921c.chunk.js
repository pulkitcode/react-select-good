(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(9),l=c.n(r),i=(c(8),c(15),c(3)),j=c(2),o=c.p+"static/media/Planet.3235d956.png",u=function(){return Object(n.jsx)("div",{className:"navbar header",children:Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:o,width:"400"})})})},d=c(6),b=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)(null),i=Object(j.a)(l,2),o=i[0],u=i[1],b=Object(a.useState)([]),h=Object(j.a)(b,2),m=h[0],O=h[1],f=new d.a(s,{shouldSort:!0,includeMatches:!0,minMatchCharLength:2,includeScore:!0,location:50,keys:["name"]});return Object(a.useEffect)((function(){fetch("http://localhost:5001/Breadths/").then((function(e){return e.json()})).then((function(e){return r(e)}))})),Object(n.jsxs)("div",{className:"breadth-area",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Select Your Breadth Subjects:"})}),Object(n.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=f.search(o);console.log(o),O(t),console.log(m)}(e)},children:[Object(n.jsx)("input",{type:"text",className:"search-bar",onChange:function(e){return u(e.target.value)},placeholder:"Search.."}),Object(n.jsx)("button",{className:"search-btn",type:"submit",children:Object(n.jsx)("i",{className:"fa fa-search"})})]}),Object(n.jsx)("ul",{className:"breadth-list",children:m.slice(0,5).map((function(t){return Object(n.jsx)("li",{onClick:function(t){return e.addSubject(t.target.innerHTML)},value:t.item.name,className:"breadth-item",children:t.item.name})}))})]})},h=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)([]),i=Object(j.a)(l,2),o=i[0],u=i[1],b=Object(a.useState)([]),h=Object(j.a)(b,2),m=h[0],O=h[1],f=Object(a.useState)(null),x=Object(j.a)(f,2),v=x[0],p=x[1],S=new d.a(o,{shouldSort:!0,includeMatches:!0,minMatchCharLength:2,includeScore:!0,location:50,keys:["name"]}),N=function(e){var t;t=e.target.value,s.map((function(e){t===e.department&&u(e.electives)})),console.log(o)};return Object(a.useEffect)((function(){fetch("http://localhost:5001/Electives/").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(n.jsxs)("div",{className:"elective-area",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Select Your Electives:"})}),Object(n.jsx)("select",{className:"form-control electivesDropdown",id:"electivesSelect",onChange:function(e){return N(e)},children:s.map((function(e){return Object(n.jsx)("option",{value:e.department,children:e.department},e._id)}))}),Object(n.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=S.search(v);console.log(v),O(t),console.log(m)}(e)},children:[Object(n.jsx)("input",{type:"text",onChange:function(e){return p(e.target.value)},className:"search-bar",placeholder:"Search.."}),Object(n.jsx)("button",{className:"search-btn",type:"submit",children:Object(n.jsx)("i",{className:"fa fa-search"})})]}),Object(n.jsx)("ul",{className:"elective-list",children:m.slice(0,5).map((function(t){return Object(n.jsx)("li",{onClick:function(t){return e.addSubject(t.target.innerHTML)},value:t.item.name,className:"elective-item",children:t.item.name})}))})]})};var m=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)([]),i=Object(j.a)(l,2),o=i[0],u=i[1],d=function(e){var t;t=e.value,s.map((function(e){return t===e.name&&u(e.core),o})),console.log(o)};return Object(a.useEffect)((function(){fetch("http://localhost:5001/Majors/").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(n.jsx)("div",{className:"sidebar",children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsxs)("form",{className:"major",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Select Your Major:"})}),Object(n.jsx)("select",{className:"form-control majorDropdown",id:"majorSelect",onChange:function(e){return d(e.target)},children:s.length>0?s.map((function(e){return Object(n.jsx)("option",{value:e.name,name:e.name,children:e.name},e._id)})):Object(n.jsx)("option",{children:"Loading..."})})]}),Object(n.jsxs)("div",{className:"core-area",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Core Subjects for your Major:"})}),Object(n.jsx)("ul",{className:"core-list",children:o.length>0?o.map((function(t){return Object(n.jsx)("li",{onClick:function(t){return e.addSubject(t.target.innerHTML)},value:t.name,className:"core-item",children:t.name})})):Object(n.jsx)("h2",{children:"Select a Major"})})]}),Object(n.jsx)(h,{addSubject:e.addSubject}),Object(n.jsx)(b,{addSubject:e.addSubject})]})})};var O=function(e){return Object(n.jsx)("div",{className:"main-grid",children:Object(n.jsx)("ul",{className:"selected-list",children:e.selectedSubjects.map((function(e){return Object(n.jsxs)("li",{className:"selected-item",value:e,children:[e,Object(n.jsx)("i",{className:"close fas fa-times"})," "]})}))})})},f=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)("div",{className:"",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-4 col-12",children:Object(n.jsx)(m,{addSubject:function(e){s([].concat(Object(i.a)(c),[e])),console.log(c)}})}),Object(n.jsx)("div",{className:"col-md-7 col-12",children:Object(n.jsx)(O,{selectedSubjects:c})})]})})]})};var x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(f,{})})};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.6459921c.chunk.js.map