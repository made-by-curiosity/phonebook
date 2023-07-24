"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[102],{6359:function(n,e,r){r.d(e,{Bc:function(){return h},bS:function(){return x},c7:function(){return g},iy:function(){return m},n5:function(){return u},o:function(){return p}});var t,o,a,i,s,c,l=r(168),d=r(7686),u=d.Z.div(t||(t=(0,l.Z)(["\n  padding-top: 50px;\n"]))),p=d.Z.h2(o||(o=(0,l.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),x=d.Z.form(a||(a=(0,l.Z)(["\n  width: 500px;\n  margin: 0 auto;\n  padding: 30px 50px 50px;\n\n  display: flex;\n  flex-direction: column;\n\n  gap: 10px;\n\n  background-color: rgb(35, 48, 68);\n\n  border-radius: 4px;\n"]))),m=d.Z.input(i||(i=(0,l.Z)(["\n  width: 100%;\n  min-width: 0px;\n  margin: 0px;\n  padding: 10px 13px;\n\n  display: block;\n\n  font: inherit;\n  letter-spacing: inherit;\n  color: currentcolor;\n  border: 1px solid;\n  border-radius: 4px;\n\n  border-color: ",";\n\n  background: none;\n  outline: none;\n"])),(function(n){return n.errors?"red":"gray"})),g=d.Z.button(s||(s=(0,l.Z)(["\n  margin-top: 16px;\n  padding: 10px 20px;\n\n  display: inline-block;\n  min-width: 100px;\n\n  color: currentColor;\n  border-radius: 4px;\n  transition: background-color 300ms ease-out, color 100ms ease-out;\n\n  background-color: rgb(64, 122, 214);\n\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(44, 85, 149);\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  }\n\n  &:active {\n    background-color: rgba(44, 85, 149, 0.5);\n  }\n\n  &:disabled {\n    background-color: rgba(44, 85, 149, 0.3);\n\n    color: #d5d5d5;\n\n    &:hover {\n      cursor: not-allowed;\n    }\n  }\n"]))),h=d.Z.p(c||(c=(0,l.Z)(["\n  color: rgba(255, 0, 0, 0.9);\n"])))},5102:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,o,a,i,s,c,l,d,u,p=r(2791),x=r(9434),m=r(168),g=r(7686),h=g.Z.li(t||(t=(0,m.Z)(["\n  min-width: 250px;\n  padding: 10px 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  letter-spacing: 0.01071em;\n  color: rgba(255, 255, 255, 0.8);\n\n  border-radius: 4px;\n\n  background-color: rgb(18, 18, 18);\n\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,\n    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  background-image: linear-gradient(\n    rgba(255, 255, 255, 0.04),\n    rgba(255, 255, 255, 0.04)\n  );\n\n  transform: scale(1);\n\n  transition: transform 200ms ease-out;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),b=(g.Z.div(o||(o=(0,m.Z)(["\n  flex-grow: 1;\n  margin: 0 auto;\n"]))),g.Z.button(a||(a=(0,m.Z)(["\n  width: 40px;\n  height: 40px;\n\n  padding: 2px;\n  margin-left: auto;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 12px;\n\n  background-color: transparent;\n\n  border-radius: 50%;\n  transition: background-color 300ms ease-out;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n\n  & svg {\n    width: 20px;\n    height: 20px;\n\n    fill: rgb(178, 34, 34);\n  }\n"])))),f=r(3634),v=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},y=r(1959),k=function(n){return n.filter},w=r(6856),C=r(184),A=function(){var n=(0,x.I0)(),e=(0,x.v9)(v),r=(0,x.v9)(Z),t=(0,x.v9)(j),o=(0,x.v9)(k);(0,p.useEffect)((function(){n((0,f.yF)())}),[n]);var a=function(){var n=o.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().reverse();return(0,C.jsxs)(C.Fragment,{children:[r&&!t&&(0,C.jsx)(y.g,{text:"Loading..."}),t&&!r&&(0,C.jsx)("div",{children:"Sorry, something went wrong. Try again later"}),(0,C.jsx)("ul",{children:a.map((function(e){var r=e.id,t=e.name,o=e.number;return(0,C.jsxs)(h,{children:[(0,C.jsxs)("div",{children:[(0,C.jsxs)("p",{children:[t,": "]})," ",(0,C.jsx)("p",{children:o})]}),(0,C.jsx)(b,{onClick:function(){var e;e=r,n((0,f.GK)(e))},children:(0,C.jsx)(w.ZkW,{})})]},r)}))})]})},F=r(5834),N=r(6359),z=g.Z.div(i||(i=(0,m.Z)(["\n  & > p {\n    margin-bottom: 5px;\n  }\n"]))),I=(0,g.Z)(N.iy)(s||(s=(0,m.Z)(["\n  min-width: 250px;\n  margin-bottom: 15px;\n"]))),L=r(1273),S=function(n){var e=n.filterTitle,r=(0,x.I0)(),t=(0,x.v9)(k);return(0,C.jsxs)(z,{children:[e&&(0,C.jsx)("p",{children:e}),(0,C.jsx)(I,{type:"text",value:t,onInput:function(n){r((0,L.a)(n.target.value))},autoFocus:!0})]})},T=g.Z.div(c||(c=(0,m.Z)(["\n  & > h2 {\n    margin-bottom: 15px;\n    text-align: center;\n  }\n"]))),q=g.Z.div(l||(l=(0,m.Z)(["\n  display: flex;\n  gap: 80px;\n"]))),B=function(n){var e=n.sectionTitle,r=n.children;return(0,C.jsxs)(T,{children:[e&&(0,C.jsx)("h2",{children:e}),r]})},P=r(1413),K=r(887),V=(0,g.Z)(N.bS)(d||(d=(0,m.Z)(["\n  margin-left: 0;\n"]))),W=(0,g.Z)(N.c7)(u||(u=(0,m.Z)(["\n  margin: 0;\n"]))),$=function(){var n,e,r=(0,x.I0)(),t=(0,x.v9)(v),o=(0,K.cI)({defaultValues:{name:"",number:""},mode:"onChange"}),a=o.register,i=o.handleSubmit,s=o.formState,c=s.errors,l=s.isValid,d=o.reset;return(0,C.jsxs)(V,{onSubmit:i((function(n){var e;e=n,t.find((function(n){return e.name===n.name}))?alert("".concat(e.name," is already in contacts")):r((0,f.uK)(e)),d()})),children:[(0,C.jsxs)("label",{htmlFor:"name",children:[(0,C.jsx)("p",{children:"Name"}),(0,C.jsx)(N.iy,(0,P.Z)((0,P.Z)({},a("name",{required:"Name is required",pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name must contain only letters"},maxLength:{value:20,message:"Name shouldn't be longer than 20 characters"}})),{},{type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",errors:c.name,autoComplete:"off"}))]}),(0,C.jsx)(N.Bc,{children:null===c||void 0===c||null===(n=c.name)||void 0===n?void 0:n.message}),(0,C.jsxs)("label",{htmlFor:"number",children:[(0,C.jsx)("p",{children:"Number"}),(0,C.jsx)(N.iy,(0,P.Z)((0,P.Z)({},a("number",{required:"Number is required",pattern:{value:/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/,message:"Invalid phone number"},maxLength:{value:20,message:"Phone shouldn't be longer than 20 characters"}})),{},{type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",errors:c.number,autoComplete:"off"}))]}),(0,C.jsx)(N.Bc,{children:null===c||void 0===c||null===(e=c.number)||void 0===e?void 0:e.message}),(0,C.jsx)(W,{type:"submit",disabled:!l,children:"Add Contact"})]})},E=function(){return(0,C.jsx)(F.W,{titleText:"Phonebook",children:(0,C.jsxs)(q,{children:[(0,C.jsx)(B,{children:(0,C.jsx)($,{})}),(0,C.jsxs)(B,{sectionTitle:"Contacts",children:[(0,C.jsx)(S,{filterTitle:"Find contacts by name"}),(0,C.jsx)(A,{})]})]})})}}}]);
//# sourceMappingURL=102.df40af13.chunk.js.map