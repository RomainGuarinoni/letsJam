(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],m=0,f=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0032":function(e,t,n){e.exports=n.p+"img/Descartes.8f443d7f.jpg"},2730:function(e,t,n){"use strict";n("fab6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o={name:"App",mounted:function(){null!=localStorage.getItem("connect")?this.$router.push({name:"Home"}):this.$router.push({name:"Connect"})}},r=o,l=(n("b8b4"),n("2877")),c=Object(l["a"])(r,s,i,!1,null,"83309b1e",null),u=c.exports,m=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"box"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.dialog,expression:"dialog"}],staticClass:"dialog"},[e._m(0),e._m(1),n("div",{staticClass:"dialog-button"},[n("p",{on:{click:e.changeProfil}},[e._v("Yes")]),n("p",{on:{click:function(t){e.dialog=!1}}},[e._v("No")])])]),n("div",{staticClass:"test"},[n("div",{staticClass:"container"},[e._m(2),n("div",{staticClass:"salleCard"},[n("SalleCard",{attrs:{index:"1",name:"Descartes",status:"libre",img:"'../assets/Descartes.jpg'"}}),n("SalleCard",{attrs:{index:"2",name:"Lavoisier",status:"Prise",img:"'../assets/Lavoisier.jpg'"}})],1)]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"info",on:{click:e.question}},[n("p",[e._v("Un problème?")])]),n("div",{staticClass:"my-2 profil",on:{click:function(t){e.dialog=!e.dialog}}},[n("v-btn",{attrs:{color:"warning",fab:"",dark:""}},[n("v-icon",[e._v("mdi-account-circle")])],1)],1)])])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialog-head"},[n("h2",[e._v("Voulez-vous changez de compte ?")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialog-txt"},[n("p",[e._v(" Changez de compte va vous empêcher de libérer les salles que vous avez prises et, par conséquent, empécher le bon fonctionnement de cette platforme ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"titre"},[n("p",[n("span",{staticClass:"underline"},[e._v("CHOISISSEZ")]),e._v(" VOTRE SALLE")])])}],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.api?n("div",{staticClass:"all"},[n("div",{staticClass:"button",class:{green:e.info.available,red:!e.info.available},on:{click:e.update}},[n("i",{staticClass:"far fa-check-circle"}),e.info.available?n("p",[e._v("Réserver")]):e.info.available||e.info.nom!=e.nom||e.info.prenom!=e.prenom?n("p",[e._v(" Attendre... ")]):n("p",[e._v(" Libérer ")])]),n("div",{style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.400), rgba(0, 0, 0, 0.300)),url("+e.imgTab[e.index-1]+")"},attrs:{id:"card"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"salleInfo"},[n("p",{staticClass:"salleNumber"},[e._v("Salle "+e._s(e.index))]),n("p",{staticClass:"name"},[e._v(e._s(e.name))])]),n("div",{staticClass:"cercle",class:{green:this.info.available,red:!this.info.available}})]),n("div",{staticClass:"status"},[n("div",{staticClass:"statusContent"},[n("div",{staticClass:"text"},[e.info.available?n("p",{staticClass:"greenFont"},[e._v("Libre")]):e.info.available||e.info.nom!=e.nom||e.info.prenom!=e.prenom?n("p",{staticClass:"redFont"},[e._v("occupée par "+e._s(e.fullName)+" "+e._s(e.time))]):n("p",{staticClass:"redFont"},[e._v(" Libérer la salle ")])])])])])]):e._e()},d=[],g=(n("b0c0"),n("d3b7"),n("0032")),h=n.n(g),b=n("808d"),_=n.n(b),C=n("bc3a"),w=n.n(C),x=n("8e27"),y=n.n(x),k={props:["index","name","status","img"],data:function(){return{nom:localStorage.getItem("nom"),prenom:localStorage.getItem("prenom"),imgTab:[h.a,_.a],time:"",api:!1,info:null,socket:y()()}},computed:{fullName:function(){var e=this.info.prenom+" "+this.info.nom;return e}},methods:{update:function(){if(1==this.info.available){var e={salle:this.name,available:!1,nom:this.nom,prenom:this.prenom,date:new Date};this.socket.emit("UPDATE",JSON.stringify(e)),this.info=e}else if(this.info.nom==this.nom&&this.info.prenom==this.prenom){var t={salle:this.name,available:!0,nom:"",prenom:"",date:new Date};this.socket.emit("UPDATE",JSON.stringify(t)),this.info=t}},timeCalc:function(){var e="depuis environ ",t=new Date,n=new Date(this.info.date);t.getHours()-n.getHours()==0?t.getMinutes()-n.getMinutes()<5?e+="5 minutes":t.getMinutes()-n.getMinutes()<10?e+="10 minutes":t.getMinutes()-n.getMinutes()<15?e+="15 minutes":t.getMinutes()-n.getMinutes()<30?e+="30 minutes":e+="1 heure":t.getHours()-n.getHours()==1&&t.getMinutes()-n.getMinutes()<0?t.getMinutes()+n.getMinutes()-60<5?e+="5 minutes":t.getMinutes()+n.getMinutes()-60<10?e+="10 minutes":t.getMinutes()+n.getMinutes()-60<15?e+="15 minutes":t.getMinutes()+n.getMinutes()-60<30?e+="30 minutes":e+="1 heure":t.getMinutes()-n.getMinutes()<30?e+="1 heure et 30min":e+="2 heures",this.time=e}},mounted:function(){var e=this;w.a.get("info").then((function(t){"Lavoisier"==e.name?e.info=t.data[0]:e.info=t.data[1]})).catch((function(e){return console.log(e)})).then((function(){var t=new Date(e.info.date),n=new Date;if(t.getDay()!=n.getDay()||n.getHours()-t.getHours()>=2){var a={salle:e.name,available:!0,nom:"",prenom:"",date:new Date};e.socket.emit("UPDATE",JSON.stringify(a))}setInterval((function(){var t=new Date(e.info.date),n=new Date;if(t.getDay()!=n.getDay()||n.getHours()-t.getHours()>=2){var a={salle:e.name,available:!0,nom:"",prenom:"",date:new Date};e.socket.emit("UPDATE",JSON.stringify(a))}}),3e5)})).finally((function(){e.timeCalc(),e.api=!0,setInterval((function(){e.timeCalc(),console.log(e.info.date)}),3e5)})),this.socket.on("NEW",(function(t){var n=JSON.parse(t);"Lavoisier"==e.name?e.info=n[0]:e.info=n[1]}))}},S=k,M=(n("8f5d"),Object(l["a"])(S,v,d,!1,null,"86121a12",null)),O=M.exports,D={components:{SalleCard:O},data:function(){return{dialog:!1}},methods:{changeProfil:function(){this.$router.push({name:"Connect"})},question:function(){this.$router.push({name:"Question"})}}},j=D,E=(n("8b71"),n("6544")),P=n.n(E),$=n("8336"),q=n("132d"),I=Object(l["a"])(j,f,p,!1,null,null,null),N=I.exports;P()(I,{VBtn:$["a"],VIcon:q["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"connectBox"},[n("div",{staticClass:"form"},[e._m(0),n("div",{staticClass:"formData"},[n("div",{staticClass:"formInput"},[n("p",[e._v("Nom")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nom,expression:"nom"}],attrs:{type:"text",id:"nom",placeholder:"Nom"},domProps:{value:e.nom},on:{input:function(t){t.target.composing||(e.nom=t.target.value)}}})]),n("div",{staticClass:"formInput"},[n("p",[e._v("Prénom")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.prenom,expression:"prenom"}],attrs:{type:"text",id:"prenom",placeholder:"Prénom"},domProps:{value:e.prenom},on:{input:function(t){t.target.composing||(e.prenom=t.target.value)}}})])]),n("div",{staticClass:"buttonBox"},[n("div",{staticClass:"button",on:{click:e.connect}},[n("i",{staticClass:"far fa-check-circle"}),n("p",[e._v("C'est parti")])]),e.error?n("p",{staticClass:"error"},[n("i",{staticClass:"fas fa-exclamation-triangle"}),e._v("remplissez tous les champs ")]):e._e()])])])},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"connectTitle"},[n("h1",[n("span",{staticClass:"underline"},[e._v("Qui e")]),e._v("s-tu?")])])}],L={data:function(){return{nom:"",prenom:"",error:!1}},methods:{connect:function(){""!=this.nom&&""!=this.prenom?(localStorage.setItem("nom",this.nom),localStorage.setItem("prenom",this.prenom),localStorage.setItem("connect","true"),this.$router.push({name:"Home"}),this.error=!1):this.error=!0}}},T=L,A=(n("9c6a"),Object(l["a"])(T,H,z,!1,null,"70960576",null)),J=A.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"boxAll"}},[n("div",{staticClass:"questionBox"},[n("div",{staticClass:"retour",on:{click:e.retour}},[n("i",{staticClass:"fas fa-chevron-left"})]),n("p",{staticClass:"titre"},[e._v("Questions")]),e._m(0),n("div",{staticClass:"question"},[n("h2",[e._v("• Je n'arrive pas à rendre la salle")]),n("p",[e._v(" Vous avez surrement du changer de compte entre temps et vous n'êtes plus connecté avec le même compte qui a pris la salle. Cliquez sur le bouton "),n("v-icon",[e._v("mdi-account-circle")]),e._v(", reconnectez-vous avec le bon compte, et normalement vous pourrez libérer la salle. Autrement, envoyé un mail à : "),n("a",{attrs:{href:"mailto:romain.guar91@gmail.com"}},[e._v("romain.guar91@gmail.com")])],1)]),e._m(1)])])},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("h2",[e._v("• J'ai oublié de libérer la salle, que se passe t'il ?")]),n("p",[e._v(" Les salles se libèrent automatiquement au bout de 2 heures. Si vous voulez jouer plus longtemps que deux heures, pensez à reprendre la salle sur l'appli. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("h2",[e._v("• Qui contacter en cas de problème ?")]),n("p",[e._v(" Vous pouvez contacter Romain Guarinoni à cette adresse "),n("a",{attrs:{href:"mailto:romain.guar91@gmail.com"}},[e._v("romain.guar91@gmail.com")]),e._v(", ou sur les sites suivant : ")]),n("p",[n("a",{staticClass:" social",attrs:{href:"https://www.linkedin.com/in/romain-guarinoni-535445189/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin"})]),n("a",{staticClass:" social",attrs:{href:"https://www.instagram.com/romain.guar91/?hl=fr",target:"_blank"}},[n("i",{staticClass:"fab fa-instagram-square"})]),n("a",{staticClass:" social",attrs:{href:"https://www.facebook.com/romain.bat17/",target:"_blank"}},[n("i",{staticClass:"fab fa-facebook-square"})])])])}],U={methods:{retour:function(){this.$router.push({name:"Home"})}}},B=U,F=(n("2730"),Object(l["a"])(B,V,Q,!1,null,"4f89bc4b",null)),R=F.exports;P()(F,{VIcon:q["a"]}),a["a"].use(m["a"]);var G=[{path:"/salle",name:"Home",component:N},{path:"/connect",name:"Connect",component:J},{path:"/questions",name:"Question",component:R}],W=new m["a"]({routes:G}),Y=W,Z=n("f309");a["a"].use(Z["a"]);var K=new Z["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Y,vuetify:K,render:function(e){return e(u)}}).$mount("#app")},"5c80":function(e,t,n){},"808d":function(e,t,n){e.exports=n.p+"img/Lavoisier.2de6c92a.jpg"},"88d7":function(e,t,n){},"8b71":function(e,t,n){"use strict";n("88d7")},"8f5d":function(e,t,n){"use strict";n("aba2")},"9c6a":function(e,t,n){"use strict";n("5c80")},aba2:function(e,t,n){},b8b4:function(e,t,n){"use strict";n("de98")},de98:function(e,t,n){},fab6:function(e,t,n){}});
//# sourceMappingURL=app.7e710175.js.map