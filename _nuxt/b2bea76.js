(window.webpackJsonp=window.webpackJsonp||[]).push([[51,4,5,15,17],{373:function(e,t,n){"use strict";n.r(t);var r=n(137),o=n.n(r),c={props:{type:{type:String,default:"primary"}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},l=n(20),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(373).default})},374:function(e,t,n){"use strict";var r=n(14),o=n(7),c=n(5),l=n(106),d=n(27),f=n(16),v=n(172),m=n(66),_=n(105),h=n(243),x=n(4),y=n(87).f,I=n(60).f,w=n(23).f,C=n(377),S=n(375).trim,k="Number",O=o.Number,$=O.prototype,N=o.TypeError,j=c("".slice),E=c("".charCodeAt),R=function(e){var t=h(e,"number");return"bigint"==typeof t?t:T(t)},T=function(e){var t,n,r,o,c,l,d,code,f=h(e,"number");if(_(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=S(f),43===(t=E(f,0))||45===t){if(88===(n=E(f,2))||120===n)return NaN}else if(48===t){switch(E(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=j(f,2)).length,d=0;d<l;d++)if((code=E(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(k,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var A,L=function(e){var t=arguments.length<1?0:O(R(e)),n=this;return m($,n)&&x((function(){C(n)}))?v(Object(t),n,L):t},z=r?y(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;z.length>P;P++)f(O,A=z[P])&&!f(L,A)&&w(L,A,I(O,A));L.prototype=$,$.constructor=L,d(o,k,L,{constructor:!0})}},375:function(e,t,n){var r=n(5),o=n(39),c=n(17),l=n(376),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),_=function(e){return function(t){var n=c(o(t));return 1&e&&(n=d(n,v,"")),2&e&&(n=d(n,m,"")),n}};e.exports={start:_(1),end:_(2),trim:_(3)}},376:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},378:function(e,t,n){"use strict";n.r(t);n(374);var r=n(137),o=n.n(r),c={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},l=n(20),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},379:function(e,t,n){"use strict";n.r(t);n(31),n(21),n(38),n(11),n(49),n(35),n(50);var r=n(13);n(88);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=n(137),d=n.n(l),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:d.a}},computed:{computedErrorStyle:function(){return{color:d.a.negative.background}}}},v=n(20),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,c(c({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},384:function(e,t,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("a021b05a",content,!0,{sourceMap:!1})},385:function(e,t,n){"use strict";n.r(t);var r={props:["attendee"]},o=(n(386),n(20)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.attendee&&!e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n    "+e._s(e.$t("admin.entrance.card.info"))+"\n  ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[t("div",{staticClass:"cardNumberInput"},[e._v("\n      "+e._s(e.attendee.attendee_no)+"\n      "),2==e.attendee.attendee_receive_status?t("div",{staticClass:"font-size:0.9rem mt:4"},[e._v("\n        他人代領\n      ")]):e._e()]),e._v(" "),e.attendee.attendee_card_name_1?t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_card_name_1)),t("br"),e._v("\n      "+e._s(e.attendee.attendee_card_name_2)+"\n    ")]):t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_nickname)+"\n    ")])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},386:function(e,t,n){"use strict";n(384)},387:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700}',""]),e.exports=r},408:function(e,t,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("024467bc",content,!0,{sourceMap:!1})},437:function(e,t,n){"use strict";n(408)},438:function(e,t,n){var r=n(61)(!1);r.push([e.i,".souvenirItems{display:flex;flex-direction:column;align-items:center;padding-left:16px;padding-right:16px;padding-bottom:8px}.souvenirItems:first-child{padding-left:0}.souvenirItems:last-child{padding-right:0}.souvenirItems[content=blanket],.souvenirItems[content=hotelGift],.souvenirItems[content=shirt],.souvenirItems[content=token]{border-right:2px solid #cecece}.souvenirItemName{font-size:1.4rem;padding-bottom:16px}.souvenirItemValue{font-size:1.2rem;font-weight:700}.excludeItem{opacity:.5;text-decoration:line-through}",""]),e.exports=r},514:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(22),n(1)),c=n(71),l={layout:"admin",components:{AttendeeInfoResume:n(385).default},data:function(){return{loading:!1,searchInput:null,attendee:null,souvenir:null,souvenirItemTypes:"hotelGift canvasBag poster luggageTag token shirt specialCardHolder blanket specialShirt jacket casinoTrialCard".split(" ")}},mounted:function(){var e=this;this.$refs.searchInput.input.focus(),this.$refs.searchInput.input.addEventListener("keyup",(function(t){13==t.keyCode&&e.findAttendee()}))},watch:{},methods:{findAttendee:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.searchInput.length){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e.attendee=null,e.souvenir=null,t.next=7,e.$axios.get("/api/admin/attendees/search?attendeeIdOrCardNumber=".concat(e.searchInput)).then((function(t){e.attendee=t.data.attendee,e.checkSouvenir()})).catch((function(t){t.response.data?e.attendee={error:t.response.data.code}:c.a.showRequestError(t)}));case 7:e.searchInput=null,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},checkSouvenir:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.souvenir=null,n=e,t.next=5,e.$axios.get("/api/admin/attendee/".concat(e.attendee.attendee_id,"/souvenir")).then((function(t){e.souvenir=t.data.souvenir,o.a.nextTick((function(){n.$refs.retrieveSouvenir.button.focus()}))})).catch((function(t){t.response.data?e.souvenir={error:t.response.data.code}:c.a.showRequestError(t)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},retrieveSouvenir:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(confirm("確定已完成紀念品領取嗎？")){n.next=2;break}return n.abrupt("return");case 2:return r={self:1,others:2},t.loading=!0,l=t,(d=new FormData).append("entity",r[e]),n.next=9,t.$axios.post("/api/admin/attendee/".concat(t.attendee.attendee_id,"/souvenir"),d).then((function(e){alert("已標記為領取完成"),t.attendee=null,t.souvenir=null,t.searchInput=null,o.a.nextTick((function(){l.$refs.searchInput.input.focus()}))})).catch((function(e){c.a.showRequestError(e)}));case 9:t.loading=!1;case 10:case"end":return n.stop()}}),n)})))()},resetSouvenirStatus:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定還原紀念品領取的狀態嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,n=e,t.next=6,e.$axios.delete("/api/admin/attendee/".concat(e.attendee.attendee_id,"/souvenir")).then((function(t){alert("已刪除領取記錄"),e.attendee=null,e.souvenir=null,e.searchInput=null,o.a.nextTick((function(){n.$refs.searchInput.input.focus()}))})).catch((function(e){c.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}}},d=(n(437),n(20)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p:16 overflow:auto"},[t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("div",{staticClass:"font-size:2rem"},[e._v(e._s(e.$t("admin.souvenir.title")))]),e._v(" "),t("Field",{attrs:{field:e.$t("admin.entrance.search.title")}},[t("InputText",{ref:"searchInput",attrs:{placeholder:e.$t("admin.entrance.search.notes")},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),e.attendee&&e.attendee.info?t("div",{staticClass:"mt:8"},[e._v("\n      "+e._s(e.$t(e.attendee.info.attendee_card_name_1))+"\n    ")]):e._e(),e._v(" "),e.attendee&&e.attendee.error?t("div",{staticClass:"mt:8 color:red"},[e._v("\n      "+e._s(e.$t(e.attendee.error))+"\n    ")]):e._e()],1),e._v(" "),e.attendee?t("div",[t("AttendeeInfoResume",{attrs:{attendee:e.attendee}}),e._v(" "),e.attendee.error?e._e():t("div",[t("div",{staticClass:"mt:8",staticStyle:{opacity:"0.7"}},[e._v("識別證帶及一般證套於領證時交付（翡翠及黑鑽要領取額外的功能識別證套）")]),e._v(" "),t("div",{staticClass:"mt:8",staticStyle:{opacity:"0.7"}},[e._v("場刊於櫃台自取")])]),e._v(" "),e.souvenir&&!e.souvenir.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.souvenir.contents.title"))+"\n      ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow p:16|32 bg:white mt:8 flex w:fit-content flex-direction:column@<md"},e._l(e.souvenirItemTypes,(function(n){return t("div",{key:n,staticClass:"souvenirItems",attrs:{content:n}},[t("div",{staticClass:"souvenirItemName",class:e.souvenir[n]?"":"excludeItem"},[e._v("\n            "+e._s(e.$t("admin.souvenir.contents.".concat(n)))+"\n          ")]),e._v(" "),t("div",{staticClass:"souvenirItemValue"},[e._v("\n            "+e._s(e.souvenir[n]?e.souvenir[n]:"")+"\n          ")])])})),0)]):e._e(),e._v(" "),e.souvenir&&e.souvenir.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.souvenir.errors.title"))+"\n      ")]),e._v(" "),t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},[e.souvenir&&e.souvenir.error?t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.souvenir.error))+"\n        ")]):e._e()])]):e._e(),e._v(" "),e.souvenir&&0!=e.attendee.attendee_receive_status?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.entrance.ticket.actions"))+"\n      ")]),e._v(" "),t("div",{staticClass:"mt:8"},[0!=e.attendee.attendee_receive_status?t("div",{staticClass:"flex"},[e.souvenir.error?e._e():t("div",[2!=e.attendee.attendee_receive_status?t("Button",{ref:"retrieveSouvenir",staticClass:"mr:8",on:{click:function(t){return e.retrieveSouvenir("self")}}},[e._v("\n              "+e._s(e.$t("admin.souvenir.receive.self"))+"\n            ")]):t("Button",{ref:"retrieveSouvenir",attrs:{type:"secondary"},on:{click:function(t){return e.retrieveSouvenir("others")}}},[e._v("\n              "+e._s(e.$t("admin.souvenir.receive.others"))+"\n            ")])],1),e._v(" "),e.souvenir.error?t("Button",{attrs:{type:"negative"},on:{click:e.resetSouvenirStatus}},[e._v("\n            "+e._s(e.$t("admin.souvenir.reset"))+"\n          ")]):e._e()],1):e._e()])]):e._e()],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(171).default,InputText:n(378).default,Field:n(379).default,AttendeeInfoResume:n(385).default,Button:n(373).default})}}]);