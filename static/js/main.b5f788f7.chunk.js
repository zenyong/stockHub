(this.webpackJsonpstockhub=this.webpackJsonpstockhub||[]).push([[0],{126:function(e,t,n){},144:function(e,t,n){},153:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(28),i=n.n(a),o=n(5),r=(n(126),n(11)),l=n(40),d=n(17),j=n.n(d),p=(n(144),n(194)),b=n(99),x=n.n(b),h=n(97),f=n.n(h),u=n(96),m=n.n(u),O=n(3);var g=function(e){var t,n=Object(c.useState)(""),a=Object(o.a)(n,2),i=a[0],d=a[1],b=Object(c.useState)([]),h=Object(o.a)(b,2),u=h[0],g=h[1];return Object(c.useEffect)((function(){var e;(e=i,j.a.get("".concat("https://finnhub.io/api/v1/search?q=").concat(e).concat("&token=c4fv34iad3i9aff8eol0")).catch((function(e){console.error("Error",e.message)}))).then((function(e){g(e.data.result)}))}),[i]),Object(O.jsxs)("div",{className:"header__wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"logo",children:"StocksHub"}),window.innerWidth<600?Object(O.jsx)("div",{className:"ham",children:Object(O.jsx)(m.a,{children:Object(O.jsx)(f.a,{fontSize:"large",onClick:e.openList})})}):Object(O.jsx)("div",{}),Object(O.jsx)("div",{className:"header__searchbar",style:{position:"relative",marginLeft:"150px"},children:Object(O.jsx)(p.a,(t={id:"combo-box-demo",options:u,style:{margin:"0px",padding:"0px",backgroundColor:"rgb(36, 36, 36)"},getOptionLabel:function(e){return e.symbol},renderOption:function(t){return Object(O.jsx)(s.a.Fragment,{children:Object(O.jsxs)("div",{style:{justifyContent:"space-around",color:"black"},onClick:function(){return e.ChangeStock(t.symbol)},children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{style:{color:"black"},children:t.symbol})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{style:{color:"black"},children:t.description})})]})})}},Object(r.a)(t,"style",{width:370}),Object(r.a)(t,"renderInput",(function(e){return Object(O.jsx)("div",{ref:e.InputProps.ref,className:"input__container",children:Object(O.jsx)("input",Object(l.a)(Object(l.a)({type:"text"},e.inputProps),{},{placeholder:"Search Symbol...",className:"inputBox",value:i,onChange:function(e){return function(e){d(e)}(e.target.value)}}))})})),t))})]}),Object(O.jsx)("div",{className:"logOut",children:Object(O.jsx)(x.a,{fontSize:"large",style:{fill:"gray",margin:"0px 20px"}})})]})},y=n(30),v=n.n(y),k=n(56),S=n(111),_=n.n(S),N=(n(153),n(116).a.initializeApp({apiKey:"AIzaSyCu8_7UW3dQEbWCsmVJqW9gTvru3S56XHs",authDomain:"stock-app-2a74c.firebaseapp.com",projectId:"stock-app-2a74c",storageBucket:"stock-app-2a74c.appspot.com",messagingSenderId:"830459873792",appId:"1:830459873792:web:a54f09f85c6e55975666e5"}).firestore()),w=n(107),C=n.n(w),F=n(106),z=n.n(F),L=n(33),E=n.n(L),T=n(34),W=n.n(T),M=n(110),R=n.n(M),D=n(108),I=n.n(D),P=n(109),B=n.n(P),A=n(100),G=n.n(A),q=n(101),J=n.n(q);var V=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)([]),r=Object(o.a)(i,2),l=(r[0],r[1]),d=Object(c.useState)(!0),p=Object(o.a)(d,2);return p[0],p[1],Object(c.useEffect)((function(){var t;(t=e.currentStock,j.a.get("".concat("https://finnhub.io/api/v1/quote?symbol=").concat(t).concat("&token=c58valiad3idb0atsp6g")).catch((function(e){console.error("Error",e.message)}))).then((function(e){a(e.data)})),function(e){return j.a.get("".concat("https://cloud.iexapis.com/stable/stock/").concat(e).concat("/company?token=pk_8ba887922f7c4eaa84ff14bcf63edcc6 ")).catch((function(e){console.error("Error",e.message)}))}(e.currentStock).then((function(e){l(e.data)}))}),[e.currentStock]),Object(O.jsx)("div",{className:"info__container",children:Object(O.jsxs)(J.a,{left:!0,cascade:!0,children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"one__stat",children:[Object(O.jsx)("font",{color:"gray",children:"Open"}),Number(s.o).toFixed(2)]}),Object(O.jsxs)("div",{className:"one__stat",children:[Object(O.jsx)("font",{color:"gray",children:"low"}),s.l]}),Object(O.jsxs)("div",{className:"one__stat",children:[Object(O.jsx)("font",{color:"gray",children:"Change"}),s.d]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"one__stat",children:[Object(O.jsx)("font",{color:"gray",children:"High"}),s.h]}),Object(O.jsxs)("div",{className:"one__stat",children:[Object(O.jsx)("font",{color:"gray",children:"Prev.Close"}),s.c]}),Object(O.jsxs)("div",{className:"one__stat",children:[Object(O.jsx)("font",{color:"gray",children:"ChangePr"}),s.dp,"%"]})]})]})})};function $(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],a=n[1];Object(c.useEffect)((function(){(function(e){var t=Math.floor(Date.now()/1e3),n="&resolution=D&from=".concat(t-31556952,"&to=").concat(t);return j.a.get("".concat("https://finnhub.io/api/v1/stock/candle?symbol=").concat(e).concat(n).concat("&token=c58valiad3idb0atsp6g")).catch((function(e){console.error("Error",e.message)}))})(e.currentStock).then((function(e){a(e.data)}))}),[e.currentStock]);var i=[{name:"close",data:s.c}],r={chart:{id:"chart1",type:"area",foreColor:"#ccc",toolbar:{show:!1}},colors:[e.redOrGreen[0]],fill:{type:"gradient",theme:"dark",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,colorStops:[{offset:0,color:e.redOrGreen[1],opacity:.7},{offset:60,color:"black",opacity:1}]}},stroke:{width:2,curve:"straight"},tooltip:{theme:"dark"},grid:{borderColor:"gray",clipMarkers:!1,yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},xaxis:{time:s.t,tickAmount:1,labels:{show:!1}},yAxes:[{display:!0,ticks:{beginAtZero:!0,steps:10,stepValue:5,max:100}}]};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"chart__container",children:[Object(O.jsx)(G.a,{options:r,type:"area",series:i,className:"chart",padding:"0px",height:"300px"}),Object(O.jsx)(V,{currentStock:e.currentStock})]})})}n(159);var H=n(102),Y=n.n(H),X=n(193),Z=n(72),K=n(195);var Q=function(e){var t=Object(Z.a)({threshold:1}),n=t.ref,s=t.inView,a=Object(K.a)();Object(c.useEffect)((function(){s&&a.start({x:0,transition:{type:"spring",duration:1,bounce:.2}}),s||a.start({x:"-100vw"})}));var i=["AAPL","AMZN","FB","NFLX","TSLA","MSFT","GOOG","TWTR"],r=Object(c.useState)([]),d=Object(o.a)(r,2),p=d[0],b=d[1],x=function(){var e=[],t=[];i.map((function(n,c){var s,a={name:n};e.push((s=a.name,j.a.get("".concat("https://finnhub.io/api/v1/stock/profile2?symbol=").concat(s).concat("&token=c58valiad3idb0atsp6g")).catch((function(e){console.error("Error",e.message)}))).then((function(e){t.push(Object(l.a)({name:a.name},e.data))})))})),Promise.all(e).then((function(){b(t)}))};return Object(c.useEffect)((function(){x()}),[]),Object(O.jsxs)("div",{className:"sug_list",children:[Object(O.jsxs)("p",{style:{fontSize:"30px",marginBottom:"20px",color:"white"},ref:n,children:[Object(O.jsx)(Y.a,{})," Discover More"]}),Object(O.jsx)("div",{className:"sug_list__container",children:p.map((function(t,n){return Object(O.jsxs)(X.a.div,{className:"one__sug__container",animate:a,onClick:function(){e.ChangeStock(t.ticker),e.fieldRef.current.scrollIntoView({behavior:"smooth"})},children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{style:{fontSize:"15px",color:"white",display:"flex",alignItems:"start"},children:[Object(O.jsx)("img",{src:t.logo,height:"30px",width:"30px",style:{marginRight:"10px"}}),t.name]}),Object(O.jsx)("p",{style:{fontSize:"15px",color:"white",width:"min-content",padding:"3px",marginTop:"5px"},children:t.ticker})]}),Object(O.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:Object(O.jsxs)("p",{style:{fontSize:"12px"},children:["Industry: ",t.finnhubIndustry]})})]},n)}))})]})},U=n(73),ee=n.n(U),te=n(103),ne=n.n(te),ce=n(104),se=n.n(ce),ae=n(105),ie=n.n(ae);var oe=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)([]),r=Object(o.a)(i,2),l=r[0],d=r[1],p=Object(c.useState)([]),b=Object(o.a)(p,2),x=b[0],h=b[1],f=Object(c.useState)(!1),u=Object(o.a)(f,2),m=u[0],g=u[1],y=Object(c.useState)([]),S=Object(o.a)(y,2),w=S[0],F=S[1],L=Object(c.useState)(!0),T=Object(o.a)(L,2),M=T[0],D=T[1];function P(){return(P=Object(k.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=N.collection("MyWatchList"),t.next=3,n.where("StockName","==",e.currentStock).get();case 3:if(!t.sent.empty){t.next=9;break}return g(!1),t.abrupt("return");case 9:return g(!0),t.abrupt("return");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(c.useEffect)((function(){var t;(t=e.currentStock,j.a.get("".concat("https://cloud.iexapis.com/stable/stock/").concat(t).concat("/company?token=pk_8ba887922f7c4eaa84ff14bcf63edcc6 ")).catch((function(e){console.error("Error",e.message)}))).then((function(e){F(e.data)})),function(){var e=Object(k.a)(v.a.mark((function e(t){var n,c,s,a,i,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date,c="".concat(n.getFullYear(),"-").concat(n.getMonth()<9?"0"+n.getMonth():n.getMonth(),"-").concat(n.getDate()<10?"0"+n.getDate():n.getDate()),s="".concat(n.getFullYear(),"-").concat(n.getMonth()<9?"0"+(n.getMonth()+1):n.getMonth()+1,"-").concat(n.getDate()<10?"0"+n.getDate():n.getDate()),"https://finnhub.io/api/v1/company-news?symbol=",a="from=".concat(c,"&to=").concat(s,"&token=c58valiad3idb0atsp6g"),e.prev=5,e.next=8,fetch("".concat("https://finnhub.io/api/v1/company-news?symbol=").concat(t,"&").concat(a));case 8:return i=e.sent,e.next=11,i.json();case 11:o=e.sent,h(o),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}()(e.currentStock),function(e){return j.a.get("".concat("https://finnhub.io/api/v1/quote?symbol=").concat(e).concat("&token=c58valiad3idb0atsp6g")).catch((function(e){console.error("Error",e.message)}))}(e.currentStock).then((function(e){a(e.data)})),function(e){return j.a.get("".concat("https://finnhub.io/api/v1/stock/profile2?symbol=").concat(e).concat("&token=c58valiad3idb0atsp6g")).catch((function(e){console.error("Error",e.message)}))}(e.currentStock).then((function(e){d(e.data)})),console.log(l),function(){P.apply(this,arguments)}()}),[e.currentStock]);var A=function(){function t(){g((function(e){return!e}))}var n=function(){var t=Object(k.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.collection("MyWatchList").doc(e.currentStock).set({StockName:e.currentStock});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(k.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.collection("MyWatchList").doc(e.currentStock).delete();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m?Object(O.jsxs)("div",{className:"Follow__container",onClick:function(){t(),c()},style:{color:"#306EFF",height:"min-content",marginRight:"10px"},children:[Object(O.jsx)(z.a,{}),Object(O.jsx)("p",{style:{fontSize:"20px",padding:"0px",margin:"0px 5px"},children:"Following"})]}):Object(O.jsxs)("div",{className:"Follow__container",onClick:function(){t(),n()},style:{backgroundColor:"#306EFF",height:"min-content",marginRight:"10px"},children:[Object(O.jsx)(C.a,{}),Object(O.jsx)("p",{style:{fontSize:"20px",margin:"0px 5px"},children:"Follow"})]})};function G(){document.getElementsByClassName("desc")[0].style.height=M?"max-content":"35px",D((function(e){return!e}))}return console.log(w),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"newsfeed__chartsection",children:[Object(O.jsx)(ie.a,{children:Object(O.jsxs)("div",{className:"info__current",children:[Object(O.jsxs)("div",{style:{fontSize:"1.5em",marginLeft:"20px",marginRight:"20px",marginTop:"20px",display:"flex",alignItems:"end",justifyContent:"space-between",width:"98%"},children:[Object(O.jsxs)("div",{children:[l.ticker,Object(O.jsx)("span",{onClick:function(){return window.open(l.weburl,"_blank")},style:{fontSize:"0.7em",padding:"2px 5px",borderRadius:"8px",marginLeft:"5px",color:"gray",fontWeight:"initial"},children:l.name})]}),Object(O.jsx)("div",{children:Object(O.jsx)(se.a,{children:Object(O.jsx)(A,{className:"eye"})})})]}),Object(O.jsx)("div",{className:"stats__follow",children:Object(O.jsxs)("div",{className:"companyName__changePr",children:[Object(O.jsxs)("p",{style:{fontSize:"40px",margin:" 3px 20px",fontWeight:"light"},children:["$",s.c]}),Number(s.dp)>0?Object(O.jsxs)("p",{className:"main__changePr__green",style:{fontSize:"20px",fontWeight:"light",borderRadius:"5px",padding:"5px 8px",backgroundColor:"#e6f4ea",color:"#137333",display:"flex",justifyContent:"center"},children:[Object(O.jsx)(E.a,{fontSize:"small"}),s.dp,"%"]}):Object(O.jsxs)("p",{className:"main__changePr__red",style:{fontSize:"20px",fontWeight:"light",borderRadius:"5px",padding:"5px 8px",backgroundColor:"#f3cac6",color:"#a50e0e",display:"flex",justifyContent:"center"},children:[Object(O.jsx)(W.a,{fontSize:"small"}),s.dp,"%"]})]})})]})}),Object(O.jsx)("div",{className:"newsfeed__chart",style:{color:"black"},children:Object(O.jsx)($,{currentStock:e.currentStock,redOrGreen:Number(s.dp)>0?["GreenYellow","chartreuse"]:["red","OrangeRed"]})}),Object(O.jsxs)("div",{className:"desc",children:[Object(O.jsxs)("p",{style:{fontSize:"30px",marginBottom:"10px",display:"flex",alignItems:"center",color:"white"},className:"news__heading",children:[Object(O.jsx)(I.a,{style:{marginRight:"5px"}})," About",Object(O.jsx)("div",{style:{flex:"1"}}),Object(O.jsx)(ne.a,{right:!0,children:M?Object(O.jsx)(B.a,{fontSize:"large",onClick:function(){G()}}):Object(O.jsx)(R.a,{fontSize:"large",onClick:function(){G()}})})]}),0!=Object.keys(w).length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px"},children:w.companyName}),Object(O.jsx)("p",{children:w.description}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[Object(O.jsx)("font",{color:"gray",children:"CEO"}),w.CEO]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[Object(O.jsx)("font",{color:"gray",children:"country"}),w.country]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[Object(O.jsx)("font",{color:"gray",children:"employees"}),w.employees]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[Object(O.jsx)("font",{color:"gray",children:"exchange"}),w.exchange]}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[Object(O.jsx)("font",{color:"gray",children:"sector"}),w.sector]})]})]}):Object(O.jsx)("p",{children:"NO DESC"})]})]}),Object(O.jsx)("div",{className:"bottom__container",children:Object(O.jsxs)("div",{className:"news__container",children:[Object(O.jsxs)("p",{style:{fontSize:"30px",marginBottom:"10px"},className:"news__heading",children:[Object(O.jsx)(_.a,{})," News"]}),Object(O.jsxs)("div",{className:"allNews__container",children:[0===x.length?Object(O.jsxs)("p",{style:{fontSize:"20px",margin:" 3px 0px",fontWeight:"light"},children:["No news to show about ",s.companyName]}):x.slice(0,5).map((function(e,t){var n=new Date(Date(e.datetime)),c=JSON.stringify(n);return c=c.slice(1,11),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"oneNews__container",onClick:function(){return window.open(e.url,"_blank")},children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{style:{fontSize:"15px",paddingBottom:"5px"},children:[e.source," \u2022 ",c]}),Object(O.jsx)("h1",{children:e.headline})]}),Object(O.jsx)("div",{style:{marginLeft:"10px"},children:Object(O.jsx)("img",{src:e.image,height:"80px",width:"90px",style:{borderRadius:"10px"},alt:"News",onError:function(e){e.target.onerror=null,e.target.src="".concat(l.logo)}})})]},t)})})),Object(O.jsx)("div",{className:"suggestion__container",children:Object(O.jsx)("div",{children:Object(O.jsx)(Q,{ChangeStock:e.ChangeStock,fieldRef:e.fieldRef})})})]})]})})]})},re=n(79),le=n(80);n(160);var de=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1],i=function(){N.collection("MyWatchList").onSnapshot((function(e){var t=[],n=[];e.docs.map((function(e){var c,s={name:e.data().StockName};t.push((c=s.name,j.a.get("".concat("https://cloud.iexapis.com/stable/stock/").concat(c).concat("/quote?token=pk_8ba887922f7c4eaa84ff14bcf63edcc6 ")).catch((function(e){console.error("Error",e.message)}))).then((function(e){n.push(Object(l.a)({name:s.name},e.data))})))})),Promise.all(t).then((function(){a(n)}))}))};return Object(c.useEffect)((function(){i()}),[]),s.map((function(t,n){return Object(O.jsxs)("div",{className:"one_comp",onClick:function(){e.ChangeStock(t.name),e.openList()},children:[Object(O.jsxs)("div",{className:"name",children:[Object(O.jsx)("h1",{style:{fontSize:"20px",fontWeight:"100"},children:t.name}),Object(O.jsx)("p",{style:{fontSize:"15px"},children:t.companyName})]}),Object(O.jsx)("div",{className:"name",children:Object(O.jsxs)("div",{className:"btn",children:[Object(O.jsxs)("p",{style:{color:"white",fontSize:"20px",fontWeight:"100"},children:["$",t.latestPrice]}),t.change>0?Object(O.jsxs)("p",{style:{fontSize:"15px",borderRadius:"5px",padding:"2px 8px",margin:"0px",backgroundColor:"#34E36F",color:"black",display:"flex",justifyContent:"center",width:"60px"},children:[Object(O.jsx)(E.a,{fontSize:"small"}),t.change]}):Object(O.jsxs)("p",{style:{fontSize:"15px",borderRadius:"5px",padding:"2px 8px",margin:"0px",backgroundColor:"#FF6341",color:"black",display:"flex",justifyContent:"center",width:"60px"},children:[Object(O.jsx)(W.a,{fontSize:"small"}),t.change]})]})})]},n)}))},je=n(82),pe=n.n(je),be=n(83),xe=n.n(be),he=n(84),fe=n.n(he),ue=n(115),me=n.n(ue);var Oe=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){j.a.get("".concat("https://financialmodelingprep.com/api/v3/gainers?apikey=6fe6a1d2be6e2c35aaaf40b2b0e01636")).catch((function(e){console.error("Error",e.message)})).then((function(e){a(e.data)}))}),[]),s.slice(0,3).map((function(t,n){return Object(O.jsxs)("div",{className:"one_comp",onClick:function(){e.ChangeStock(t.name),e.openList()},children:[Object(O.jsxs)("div",{className:"name",children:[Object(O.jsx)("h1",{style:{fontSize:"20px",fontWeight:"100"},children:t.ticker}),Object(O.jsx)("p",{style:{fontSize:"15px"},children:t.companyName.substring(0,10)})]}),Object(O.jsx)("div",{className:"name",children:Object(O.jsxs)("div",{className:"btn",children:[Object(O.jsxs)("p",{style:{color:"white",fontSize:"20px",fontWeight:"100"},children:["$",t.price]}),t.changes>0?Object(O.jsxs)("p",{style:{fontSize:"15px",borderRadius:"5px",padding:"2px 8px",margin:"0px",backgroundColor:"#34E36F",color:"black",display:"flex",justifyContent:"center",width:"60px"},children:[Object(O.jsx)(E.a,{fontSize:"small"}),t.changesPercentage.slice(0,5),"%"]}):Object(O.jsxs)("p",{style:{fontSize:"15px",borderRadius:"5px",padding:"2px 8px",margin:"0px",backgroundColor:"#FF6341",color:"black",display:"flex",justifyContent:"center",width:"60px"},children:[Object(O.jsx)(W.a,{fontSize:"small"}),t.changesPercentage.slice(0,5),"%"]})]})})]},n)}))};var ge,ye,ve=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){j.a.get("".concat("https://financialmodelingprep.com/api/v3/losers?apikey=6fe6a1d2be6e2c35aaaf40b2b0e01636")).catch((function(e){console.error("Error",e.message)})).then((function(e){a(e.data)}))}),[]),s.slice(0,3).map((function(t,n){return Object(O.jsxs)("div",{className:"one_comp",onClick:function(){e.ChangeStock(t.name),e.openList()},children:[Object(O.jsxs)("div",{className:"name",children:[Object(O.jsx)("h1",{style:{fontSize:"20px",fontWeight:"100"},children:t.ticker}),Object(O.jsx)("p",{style:{fontSize:"15px"},children:t.companyName.substring(0,10)})]}),Object(O.jsx)("div",{className:"name",children:Object(O.jsxs)("div",{className:"btn",children:[Object(O.jsxs)("p",{style:{color:"white",fontSize:"20px",fontWeight:"100"},children:["$",t.price]}),t.changes>0?Object(O.jsxs)("p",{style:{fontSize:"15px",borderRadius:"5px",padding:"2px 8px",margin:"0px",backgroundColor:"#34E36F",color:"black",display:"flex",justifyContent:"center",width:"60px"},children:[Object(O.jsx)(E.a,{fontSize:"small"}),t.changesPercentage.slice(0,5),"%"]}):Object(O.jsxs)("p",{style:{fontSize:"15px",borderRadius:"5px",padding:"2px 8px",margin:"0px",backgroundColor:"#FF6341",color:"black",display:"flex",justifyContent:"center",width:"60px"},children:[Object(O.jsx)(W.a,{fontSize:"small"}),t.changesPercentage.slice(0,5),"%"]})]})})]},n)}))},ke=n(112),Se=n.n(ke);var _e=function(e){var t=function(t){e.ChangeStock(t)},n=le.a.div(ge||(ge=Object(re.a)(["\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    background: rgba( 0, 0, 0, 0.1);\n    backdrop-filter: blur( 25px );\n    -webkit-backdrop-filter: blur( 25px );\n    border-radius: 10px;\n    border-radius: 5px;\n    z-index: 100;\n"]))),c=le.a.div(ye||(ye=Object(re.a)(["\n    width: 50px;\n    height: 50px;\n    left: 45%;\n    top: 0;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    position: fixed;\n    background: rgba( 0, 0, 0, 1);\n    backdrop-filter: blur( 5.5px );\n    -webkit-backdrop-filter: blur( 5.5px );\n    border-bottom-left-radius: 100px;\n    border-bottom-right-radius: 100px;\n    border: 1px solid rgba( 255, 255, 255, 0.10 );\n    z-index: 100;\n"])));return Object(O.jsx)(O.Fragment,{children:window.innerWidth<600?Object(O.jsxs)("div",{style:{border:"none"},children:[Object(O.jsx)(c,{className:"glowing",children:Object(O.jsx)(Se.a,{top:!0,children:Object(O.jsx)(ee.a,{children:Object(O.jsx)(me.a,{fontSize:"large",style:{fill:"white"},onClick:e.openList})})})}),Object(O.jsx)(n,{children:Object(O.jsxs)("div",{className:"Main__stats__container",children:[Object(O.jsxs)("div",{className:"one_comp__container",children:[Object(O.jsxs)("div",{className:"one_comp",style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)("div",{className:"header",style:{display:"flex",color:"#00BFFF",fontFamily:"Trebuchet MS, sans-serif"},children:Object(O.jsx)("h3",{children:" My Watchlist"})}),Object(O.jsx)(pe.a,{fontSize:"medium",style:{fill:"#00BFFF"}})]}),Object(O.jsx)(de,{ChangeStock:t,openList:e.openList})]}),Object(O.jsxs)("div",{className:"one_comp__container",children:[Object(O.jsxs)("div",{className:"one_comp",style:{display:"flex",justifyContent:"space-between",marginTop:"20px"},children:[Object(O.jsx)("div",{className:"header",style:{display:"flex",color:"#FFD700",fontFamily:"Trebuchet MS, sans-serif"},children:Object(O.jsx)("h3",{children:" Top Gainers"})}),Object(O.jsx)(xe.a,{fontSize:"medium",style:{fill:"#FFD700"}})]}),Object(O.jsx)(Oe,{ChangeStock:t,openList:e.openList})]}),Object(O.jsxs)("div",{className:"one_comp__container",children:[Object(O.jsxs)("div",{className:"one_comp",style:{display:"flex",justifyContent:"space-between",marginTop:"20px"},children:[Object(O.jsx)("div",{className:"header",style:{display:"flex",color:"red",fontFamily:"Trebuchet MS, sans-serif"},children:Object(O.jsx)("h3",{children:" Top Losers"})}),Object(O.jsx)(fe.a,{fontSize:"medium",style:{fill:"red"}})]}),Object(O.jsx)(ve,{ChangeStock:t,openList:e.openList})]})]})})]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"Main__stats__container",children:[Object(O.jsxs)("div",{className:"one_comp__container",children:[Object(O.jsxs)("div",{className:"one_comp",style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)("div",{className:"header",style:{display:"flex",color:"#00BFFF",padding:"5px"},children:Object(O.jsx)("h1",{children:" My Watchlist"})}),Object(O.jsx)(pe.a,{fontSize:"medium",style:{fill:"#00BFFF"}})]}),Object(O.jsx)(de,{ChangeStock:t,openList:e.openList})]}),Object(O.jsxs)("div",{className:"one_comp__container",children:[Object(O.jsxs)("div",{className:"one_comp",style:{display:"flex",justifyContent:"space-between",marginTop:"20px"},children:[Object(O.jsx)("div",{className:"header",style:{display:"flex",color:"#FFD700",padding:"5px"},children:Object(O.jsx)("h1",{children:" Top Gainers"})}),Object(O.jsx)(xe.a,{fontSize:"medium",style:{fill:"#FFD700"}})]}),Object(O.jsx)(Oe,{ChangeStock:t,openList:e.openList})]}),Object(O.jsxs)("div",{className:"one_comp__container",children:[Object(O.jsxs)("div",{className:"one_comp",style:{display:"flex",justifyContent:"space-between",marginTop:"20px"},children:[Object(O.jsx)("div",{className:"header",style:{display:"flex",color:"red",padding:"5px"},children:Object(O.jsx)("h1",{children:" Top Losers"})}),Object(O.jsx)(fe.a,{fontSize:"medium",style:{fill:"red"}})]}),Object(O.jsx)(ve,{ChangeStock:t,openList:e.openList})]})]})})})};var Ne=function(){var e=Object(c.useState)("TSLA"),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),r=i[0],l=i[1],d=function(){l((function(e){return!e}))},j=Object(c.useRef)(),p=function(e){s(e)};return console.log(window.innerWidth),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"app__header",children:Object(O.jsx)(g,{ChangeStock:p,currentStock:n,openList:d,showList:r})}),Object(O.jsxs)("div",{className:"app__body",children:[window.innerWidth<600?r?Object(O.jsx)("div",{className:"stats",children:Object(O.jsx)("div",{className:"Stats__container",children:Object(O.jsx)(_e,{currentStock:n,ChangeStock:p,openList:d,showList:r})})}):Object(O.jsx)("div",{}):Object(O.jsx)("div",{className:"stats",children:Object(O.jsx)("div",{className:"Stats__container",children:Object(O.jsx)(_e,{currentStock:n,ChangeStock:p,openList:d,showList:r})})}),Object(O.jsx)("div",{className:"newsFeed",ref:j,children:Object(O.jsx)("div",{className:"NewsFeed__container",children:Object(O.jsx)(oe,{currentStock:n,ChangeStock:p,fieldRef:j})})})]})]})};i.a.render(Object(O.jsx)(Ne,{}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.b5f788f7.chunk.js.map