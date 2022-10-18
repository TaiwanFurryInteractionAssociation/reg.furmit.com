(window.webpackJsonp=window.webpackJsonp||[]).push([[54,5,15],{373:function(e,t,r){"use strict";r.r(t);var n=r(137),o=r.n(n),c={props:{type:{type:String,default:"primary"}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},d=r(20),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(373).default})},378:function(e,t,r){"use strict";r.r(t);r(374);var n=r(137),o=r.n(n),c={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=r(20),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},379:function(e,t,r){"use strict";r.r(t);r(31),r(21),r(38),r(11),r(49),r(35),r(50);var n=r(13);r(88);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=r(137),l=r.n(d),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:l.a}},computed:{computedErrorStyle:function(){return{color:l.a.negative.background}}}},m=r(20),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,c(c({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},517:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(15),r(52),r(51),r(67),r(108),r(22),r(444)),c=r(71),d={layout:"admin",data:function(){return{loading:!1,enableWebcam:null,cardID:null,card:null,attendeeNumber:null,attendee:null}},mounted:function(){if(this.enableWebcam){var e=document.getElementById("player");navigator.mediaDevices.getUserMedia({video:{width:{ideal:4096},height:{ideal:2160}}}).then((function(t){e.srcObject=t})),this.refreshCamera(),this.executeOCR()}},watch:{cardID:function(e,t){e&&(10==e.length?this.findCardNumber():this.card=null)},attendeeNumber:function(e,t){e&&(-1==e.indexOf("-")&&4==e.length||e.indexOf("-")>-1&&5==e.length?this.findAttendee():this.attendee=null)}},methods:{findAttendee:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.attendee=null,t.next=4,e.$axios.get("/api/admin/attendees/search?attendeeID=".concat(e.attendeeNumber)).then((function(t){e.attendee={info:t.data.attendee},e.cardID?e.$refs.linkButton.button.focus():e.$refs.cardID.input.focus()})).catch((function(t){t.response&&t.response.data?e.attendee={error:t.response.data.code}:c.a.showRequestError(t)}));case 4:e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},findCardNumber:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.card=null,t.next=4,e.$axios.get("/api/admin/attendees/search?cardNumber=".concat(e.cardID)).then((function(t){e.card={info:t.data.attendee}})).catch((function(t){t.response.data?(e.card={error:t.response.data.code},404==t.response.status&&(e.attendeeNumber?e.$refs.linkButton.button.focus():e.$refs.attendeeNumber.input.focus())):c.a.showRequestError(t)}));case 4:e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},linkCardNumberToAttendee:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.attendeeNumber){t.next=3;break}return c.a.showSnackbar({message:e.$t("admin.cardRegistry.errors.please_input_attendee_number"),colorType:"negative"}),t.abrupt("return");case 3:if(e.cardID){t.next=6;break}return c.a.showSnackbar({message:e.$t("admin.cardRegistry.errors.please_input_card_id"),colorType:"negative"}),t.abrupt("return");case 6:if(!e.card||!e.card.info){t.next=9;break}return c.a.showSnackbar({message:e.$t("admin.cardRegistry.errors.card_id_already_registered").replace(":id",e.cardID),colorType:"negative"}),t.abrupt("return");case 9:if(confirm("確定連結卡號 ".concat(e.cardID," 至參加者 ").concat(e.attendeeNumber," 嗎？"))){t.next=11;break}return t.abrupt("return");case 11:return e.loading=!0,t.next=14,e.$axios.put("/api/admin/attendee/".concat(e.attendee.info.attendee_id,"/cardNumber"),{cardNumber:e.cardID}).then((function(t){alert("卡號連結成功"),e.attendeeNumber=null,e.cardID=null,e.attendee=null,e.card=null,e.$refs.attendeeNumber.input.focus()})).catch((function(e){c.a.showRequestError(e)}));case 14:e.loading=!1;case 15:case"end":return t.stop()}}),t)})))()},refreshCamera:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.getElementById("player"),(n=document.getElementById("snapshot")).width=r.videoWidth,n.height=r.videoHeight,n.getContext("2d").drawImage(r,0,0),setTimeout(e.refreshCamera,100);case 7:case"end":return t.stop()}}),t)})))()},executeOCR:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("snapshot"),t.next=3,Object(o.createWorker)();case 3:c=t.sent,Object(n.a)(regeneratorRuntime.mark((function t(){var n,text,d,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.loadLanguage("eng");case 2:return t.next=4,c.initialize("eng");case 4:return t.next=6,c.setParameters({tessedit_char_whitelist:"ABCDEFXYZ-0123456789",tessedit_pageseg_mode:o.PSM.PSM_SINGLE_LINE});case 6:return t.next=8,c.recognize(r,{left:r.width/8*3,top:r.height/8*3,width:r.width/4,height:r.height/4});case 8:return n=t.sent,text=n.data.text,t.next=12,c.terminate();case 12:d=/[A-Z]\-[0-9]{3}/,(l=text.match(d))&&l[0]!=e.attendeeNumber&&(e.attendeeNumber=l[0]),setTimeout(e.executeOCR,100);case 16:case"end":return t.stop()}}),t)})))();case 5:case"end":return t.stop()}}),t)})))()}}},l=r(20),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p:16 overflow:auto flex flex-direction:column"},[t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("div",{staticClass:"font-size:1.6rem"},[e._v(e._s(e.$t("admin.cardRegistry.title")))]),e._v(" "),e.enableWebcam?t("div",[e._m(0),e._v(" "),t("canvas",{staticClass:"display:none visibility:hidden",attrs:{id:"snapshot"}})]):e._e(),e._v(" "),t("Field",{attrs:{field:e.$t("admin.cardRegistry.fields.attendee_number")}},[t("InputText",{ref:"attendeeNumber",model:{value:e.attendeeNumber,callback:function(t){e.attendeeNumber=t},expression:"attendeeNumber"}}),e._v(" "),e.attendee&&e.attendee.info?t("div",{staticClass:"mt:8"},[e._v("\n      "+e._s(e.$t(e.attendee.info.attendee_card_name_1))+"\n    ")]):e._e(),e._v(" "),e.attendee&&e.attendee.error?t("div",{staticClass:"mt:8 color:red"},[e._v("\n      "+e._s(e.$t(e.attendee.error))+"\n    ")]):e._e()],1),e._v(" "),t("Field",{attrs:{field:e.$t("admin.cardRegistry.fields.card_number")}},[t("InputText",{ref:"cardID",model:{value:e.cardID,callback:function(t){e.cardID=t},expression:"cardID"}}),e._v(" "),e.card&&e.card.error?t("div",{staticClass:"mt:8"},[e._v("可使用")]):e._e(),e._v(" "),e.card&&e.card.info?t("div",{staticClass:"mt:8 color:red"},[e._v("\n      "+e._s("此卡號已連結至參加者 ".concat(e.card.info.attendee_no))+"\n    ")]):e._e()],1),e._v(" "),t("Button",{ref:"linkButton",attrs:{type:"secondary"},on:{click:e.linkCardNumberToAttendee}},[e._v("\n    "+e._s(e.$t("admin.cardRegistry.buttons.link"))+"\n  ")])],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"position:relative"},[e("div",{staticClass:"position:absolute left:120 top:75 w:80 h:50 border border-width:thick"}),this._v(" "),e("video",{staticClass:"w:320 h:200",attrs:{id:"player",autoplay:""}})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:r(171).default,InputText:r(378).default,Field:r(379).default,Button:r(373).default})}}]);