(this.webpackJsonpreact_type_hanja=this.webpackJsonpreact_type_hanja||[]).push([[0],{19:function(e,t,s){},28:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},47:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(29),i=s.n(a),r=(s(39),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))}),j=s(4),l=s(2);var o=function(){var e=new Date;return e.setDate(e.getDate()+7),e}.call(void 0),d=o.getFullYear();function b(){var e=[],t=new Date;for(t.setFullYear(2021);;){var s=t.getFullYear();if(!(s<=d))break;e.push(s),t.setFullYear(s+1)}return e}function h(e,t,s){var c=[];return e&&c.push("".concat(e,"\ub144 ")),t&&c.push("".concat(t,"\uc6d4 ")),s&&c.push("".concat(s,"\uc8fc\ucc28 ")),c.reduce((function(e,t){return e+t}))+"\uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}console.log("now year",d);var x=s(9),m=(s(40),s(0)),O=function(e){console.log("month list",e);var t=[],s=function(t){var s=t.currentTarget.id;e.stateHandler(s)};return function(e){var t=[];if(e<d)for(var s=0;s<12;s++)t[s]=s+1;else for(var c=0;c<o.getMonth()+1;c++)t[c]=c+1;return t}(e.thisYear).map((function(c){t.push(Object(m.jsx)(x.b,{to:"/".concat(R,"/").concat(e.thisYear,"/").concat(c),children:Object(m.jsx)("p",{className:"sideBar-month",id:"/".concat(R,"/").concat(e.thisYear,"/").concat(c),onClick:s,children:c})}))})),Object(m.jsx)(x.a,{children:t})},u=function(e){var t=Object(c.useState)(d),s=Object(j.a)(t,2),n=s[0],a=s[1];console.log("sideBar:",n);var i=function(e){var t=e.target.id;a(Number.parseInt(t))};return Object(m.jsx)("div",{className:"sideBar",children:e.years.map((function(t){return Object(m.jsxs)("span",{children:[Object(m.jsxs)("p",{className:"sideBar-year",id:t.toString(),onClick:i,children:[" ",t]}),Object(m.jsx)("div",{className:"sideBar-month",children:t==n&&Object(m.jsx)(O,{thisYear:t,stateHandler:e.stateHandler})})]})}))})};s(19);var v=function(e){return console.log("git",e.yearMonth),e.notFound||!e.contentsList?Object(m.jsx)("div",{className:"contents",children:Object(m.jsx)("div",{className:"error",children:e.notFound})}):Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"hanja",id:"main_title",children:[e.year,"\ub144 ",e.month,"\uc6d4"]}),e.contentsList.map((function(t,s){return Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{children:Object(m.jsx)(x.b,{className:"print-link",to:"/".concat(R,"/").concat(e.year,"/").concat(e.month,"/").concat(t.week),children:Object(m.jsx)("button",{className:"print-button",onClick:function(){return e.handleContentDto.call(undefined,t)},children:"".concat(t.week,"\uc8fc\ucc28 \ud504\ub9b0\ud2b8 \ud654\uba74")})})}),Object(m.jsx)(g,{front_hanja_list:t.front_hanja_list,questions:t.questions,yojeol:t.yojeol,back_hanja_list:t.back_hanja_list,week:t.week,main_words:t.main_words,handleContentDto:e.handleContentDto,month:parseInt(e.month),yaer:parseInt(e.year),voca_list:t.voca_list})]})})),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},g=function(e){var t=Object(m.jsx)("div",{className:"front_container",children:e.front_hanja_list.map((function(e){return Object(m.jsxs)("div",{className:"front",children:[Object(m.jsx)("div",{className:"front_hanja",children:e.hanja}),Object(m.jsx)("div",{children:e.name})]})}))}),s=Object(m.jsxs)("div",{className:"questions",children:[Object(m.jsx)("br",{})," ",Object(m.jsx)("span",{children:"-\ubb38\ub2f5-"}),Object(m.jsx)("br",{}),e.questions.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{children:[t+1,". ",e.q]})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[" - ",e.a]})]})}))]}),c=(e.back_hanja_list.map((function(e){return Object(m.jsxs)("span",{className:"back_hanja",children:[e," "]})})),Object(m.jsxs)("div",{className:"yojeol-container",children:[Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:"-\uc694\uc808-"}),Object(m.jsx)("br",{})," \ub2e4\uc74c\uc8fc \uc624\uc804\uc694\uc808 ",Object(m.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.morning.words,Object(m.jsxs)("span",{className:"y_where",children:["(",e.yojeol.morning.where,") "]})]}),Object(m.jsx)("br",{})," \uc720\ub144\ubc18 \uc624\ud6c4\uc694\uc808 ",Object(m.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.child_afternoon.words,Object(m.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.child_afternoon.where,") "]})]}),Object(m.jsx)("br",{})," \uc911\ub4f1\ubc18 \uc624\ud6c4\uc694\uc808 ",Object(m.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.youth_afternoon.words,Object(m.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.youth_afternoon.where,")"]})]}),Object(m.jsx)("br",{})," \uc7a5\ub144\ubc18 \uc694\uc808     ",Object(m.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.adult.words,Object(m.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.adult.where,")"]})]})]}));return Object(m.jsxs)("div",{className:"hanja",children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{id:"week",children:["# ",e.week,"\uc8fc\ucc28 (",e.main_words,")"]}),Object(m.jsx)("br",{}),t,s,c]})},N=(s(47),s(17)),f=s.n(N);new RegExp(/[(](.*?)[)]/,"g");var k,w=["\uc720\uce58\ubc18","\uc720\ub144","\uc911\ub4f1","\uc7a5\ub144"],_=["\uccab\uc9f8 \uc8fc\uc77c","\ub458\uc9f8 \uc8fc\uc77c","\uc14b\uc9f8 \uc8fc\uc77c","\ub137\uc9f8 \uc8fc\uc77c","\ub2e4\uc12f\uc9f8 \uc8fc\uc77c"],y=function(e){return Math.floor((e.getTime()-function(){var e=new Date;return e.setFullYear(2021),e.setMonth(6),e.setDate(4),e}().getTime())/6048e5)};!function(e){e[e.KINDERGARTEN=1400]="KINDERGARTEN",e[e.ELEMENTARY=1400]="ELEMENTARY",e[e.TEENAGER=1516]="TEENAGER",e[e.ADULT=1140]="ADULT"}(k||(k={}));s(32),s(34),s(33);var p=s(12),E=function e(t,s,c,n){Object(p.a)(this,e),this.no=void 0,this.date=void 0,this.weekly=void 0,this.ban=void 0,this.dateString=void 0,this.no=t,this.date=s,this.weekly=c,this.ban=n,this.dateString=this.date.getFullYear()+" \ub144 "+(this.date.getMonth()+1)+" \uc6d4 "+this.date.getDate()+" \uc77c "+_[this.weekly]},D=(s(67),s(68),s(69),s(70),s(71),s(28),function(e){return Object(m.jsxs)("div",{className:"back-header",children:[Object(m.jsx)("div",{className:"grid-back-center",children:"\u8056 \u7d93 \u5de5 \u8ab2 \u554f \u7b54"}),Object(m.jsxs)("div",{className:"grid-back-top-left",children:[e.ban,"\ubc18 \uc81c ",e.no," \ud638"]}),Object(m.jsx)("div",{className:"grid-back-bottom-right"}),Object(m.jsx)("div",{className:"grid-back-bottom-left",children:e.main_word}),Object(m.jsx)("div",{className:"grid-back-top-right",children:"\u78ba   \u8a8d"})]})}),F=function(e){return Object(m.jsxs)("div",{className:"top hanja",children:[Object(m.jsxs)("div",{className:"grid-000 top-item",children:["\u7b2c ",Object(m.jsx)("span",{className:"kr",children:e.no})," \u865f"]}),Object(m.jsx)("div",{className:"grid-001 top-item",children:"\u8056 \u7d93 \u6f22 \u5b57 \u5de5 \u592b"}),Object(m.jsxs)("div",{className:"grid-002 top-item",children:[Object(m.jsx)("span",{className:"kr",children:e.ban})," \u73ed"]}),Object(m.jsx)("div",{className:"grid-010 top-item kr",children:e.dateString}),Object(m.jsx)("div",{className:"grid-011 top-item",children:"\u6f22\u5b57 \u59d3\u540d"}),Object(m.jsx)("div",{className:"grid-012 top-item",children:" "})]})};function S(e){for(var t=0,s=e,c=[];;){if(t>10){console.error("It may infinit loop");break}var n=s.indexOf(")"),a=s.indexOf("(");if(-1==n)break;var i=n-a-1;console.log(i);var r=Object(m.jsx)("span",{className:"ch",children:s.substring(a+1,n)});c.push(r),s=s.substring(0,a-i)+"$"+s.substring(n+1,s.length),t++}var j=0;return Object(m.jsx)(m.Fragment,{children:s.split("").map((function(e,t){return"$"==e?(j++,console.log("map"+j),c[j-1]):Object(m.jsx)(m.Fragment,{children:e})}))})}var q=function(e){var t=e.questions.length,s=function(s){var c=e.questions.map((function(e){return 3!=s.index?e.q.replaceAll(/[(](.*?)[)]/gi,""):S(e.q)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"back-box q1 kr",children:["      ",Object(m.jsxs)("div",{className:"back-text",children:["1. ",t>0&&c[0]]}),Object(m.jsx)("div",{className:"q-answer"})," "]}),Object(m.jsxs)("div",{className:"back-box q2 kr",children:["      ",Object(m.jsxs)("div",{className:"back-text",children:["2. ",t>1&&c[1]]}),Object(m.jsx)("div",{className:"q-answer"})," "]}),Object(m.jsxs)("div",{className:"back-box q3 kr",children:["      ",Object(m.jsxs)("div",{className:"back-text",children:["3. ",t>2&&c[2]]}),Object(m.jsx)("div",{className:"q-answer"})," "]})]})},c=function(t){return Object(m.jsxs)("div",{className:"back-box back-bottom back-bottom"+t.index,children:[Object(m.jsxs)("div",{className:"back-title-container",children:[Object(m.jsxs)("div",{className:"back-bottom-title kr",children:[Object(m.jsx)("span",{className:"ch",children:"\u8056\u7d93\u6f22\u5b57"})," \ubc30\uc6b0\uae30"]}),Object(m.jsxs)("div",{className:"back-bottom-where kr",children:["(",e.back_hanja_list[0],")"]})]}),Object(m.jsx)("div",{className:"back-bottom-hanja-container",children:e.back_hanja_list.filter((function(e,t){return 0!=t})).map((function(e,s){if(!(1==t.index&&s>=12)){var c=e.trim(),n=new RegExp(/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/),a=Object(m.jsx)(m.Fragment,{}),i=void 0!=c.match(n);return i&&(a=Object(m.jsx)("span",{className:"bottom-hanja-kr kr",children:c})),s%4==0?Object(m.jsxs)("div",{className:"back-wrap back-hanja-text ",children:[i&&a,!i&&c,"(",Object(m.jsx)("span",{className:"bracket",children:e.trim()}),") "]}):Object(m.jsxs)("div",{className:"back-hanja-text ",children:[i&&a,!i&&c,"(",Object(m.jsx)("span",{className:"bracket",children:e.trim()}),")"]})}}))})]})},n=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"back-box youth-y1 kr",children:[Object(m.jsxs)("div",{className:"back-text back-yojeol yojeol-title",children:["\ub2e4\uc74c \uc8fc ",Object(m.jsx)("span",{className:"ch",children:"\u5348\u524d \u8981\u7bc0"})]}),Object(m.jsx)("div",{className:"back-text back-yojeol",children:e.yojeol.morning.words}),Object(m.jsx)("div",{className:"back-yojeol-where kr",children:e.yojeol.morning.where})]}),Object(m.jsxs)("div",{className:"back-box youth-y2 kr",children:[Object(m.jsxs)("div",{className:"back-text back-yojeol yojeol-title",children:[" \uc774\ubc88 \uc8fc ",Object(m.jsx)("span",{className:"ch",children:"\u5348\u5f8c \u8981\u7bc0"})]}),Object(m.jsx)("div",{className:"back-text back-yojeol",children:e.yojeol.youth_afternoon.words}),Object(m.jsx)("div",{className:"back-yojeol-where",children:e.yojeol.youth_afternoon.where})]})]})},a=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"back-box child-y1 kr",children:Object(m.jsxs)("div",{className:"back-text back-yojeol",children:[Object(m.jsx)("div",{className:"back-child-yojeol-title",children:"\ub2e4\uc74c \uc8fc \uc624\uc804 \uc694\uc808 \uc4f0\uae30"}),e.yojeol.morning.words,Object(m.jsxs)("ol",{children:[Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("div",{className:"line line1",children:"1."})]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("div",{className:"line line2",children:"2."})]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("div",{className:"line line3",children:"3."})]})]}),Object(m.jsx)("div",{className:"child-yojeol-where",children:e.yojeol.morning.where})]})})})},i=function(){return Object(m.jsxs)("div",{className:"back-box adult-y1 kr",children:[Object(m.jsx)("div",{className:"yojeol-title",children:"\uc694\uc808 \ucc3e\uace0 \uc678\uc6b0\uae30"}),Object(m.jsx)("div",{className:"back-text back-yojeol",children:S(e.yojeol.adult.words)}),Object(m.jsx)("div",{className:"back-yojeol-where back-adult-where",children:e.yojeol.adult.where}),Object(m.jsxs)("div",{className:"back-text back-last-answer",children:["( \uc9c0\ub09c \uc8fc \ud574\ub2f5 : ",e.yojeol.adult.answer,")"]})]})},r=function(e){return Object(m.jsxs)("div",{className:"back-content hanja",children:[Object(m.jsx)(s,{index:e.index}),Object(m.jsx)(n,{}),Object(m.jsx)(c,{index:e.index})]})},j=function(e){return Object(m.jsxs)("div",{className:"back-content hanja",children:[Object(m.jsx)(s,{index:e.index}),Object(m.jsx)(a,{}),Object(m.jsx)(c,{index:e.index})]})},l=function(e){return Object(m.jsxs)("div",{className:"back-content hanja",children:[Object(m.jsx)(s,{index:e.index}),Object(m.jsx)(i,{}),Object(m.jsx)(c,{index:e.index})]})};return Object(m.jsxs)("div",{className:"hanja-middle",children:[Object(m.jsx)(D,{no:e.order,main_word:e.main_words,ban:w[e.index]}),Object(m.jsx)("div",{className:"text",children:"\ubb38\ub2f5"}),1==e.index&&Object(m.jsx)(j,{index:1}),2==e.index&&Object(m.jsx)(r,{index:2}),3==e.index&&Object(m.jsx)(l,{index:3})]})},T=(s(72),function(e){return Object(m.jsxs)("div",{className:"kinder-header",children:[Object(m.jsx)("div",{className:"grid-kinder-center",children:"\uc720\uce58\ubd80 \uc131\uacbd \uc694\uc808 \uc4f0\uae30"}),Object(m.jsx)("div",{className:"grid-kinder-name-title",children:"\uc131\uba85"}),Object(m.jsx)("div",{className:"grid-kinder-name0"}),Object(m.jsx)("div",{className:"grid-kinder-name1"}),Object(m.jsx)("div",{className:"grid-kinder-name2"}),Object(m.jsx)("div",{className:"grid-kinder-word-title",children:"\ub2e4\uc74c\uc8fc \uc694\uc808 \uc4f0\uae30"}),Object(m.jsx)("div",{className:"grid-kinder-where",children:e.where})]})}),Y=function(e){var t=15,s=" "+e.yojeol,c=s.length,n=Math.ceil(c/11);n>7&&(t=16);for(var a=Math.round(15/n),i=new Array(15),r=0,j=0,l=0;l<t;l++){i[l]=[];var o=!1,d=!1;l%a==0?o=!0:l%a==1?d=!0:o=!1;for(var b=0;b<11;b++)c>r&&o?(i[l][b]=Object(m.jsx)("th",{className:"one",children:s[r]}),r++):c>j&&d?(i[l][b]=Object(m.jsx)("th",{className:"follow",children:s[j]}),j++):i[l][b]=Object(m.jsx)("th",{})}return Object(m.jsxs)("div",{className:"hanja kr",children:[Object(m.jsx)(T,{where:e.where,yojeol:e.yojeol,order:e.order,dataString:e.dataString,isFront:!1}),Object(m.jsxs)("div",{className:"kinder-date",children:[Object(m.jsxs)("div",{children:["\uc81c ",e.order,"\ud638 "]}),Object(m.jsxs)("div",{children:[" \uc8fc\ud6c4 ",e.dataString," "]}),Object(m.jsx)("div",{className:"kinder-date-end",children:"  \uc5fc\ucc9c\uad50\ud68c \uc8fc\uc77c\ud559\uad50 \uc720\uce58\ubd80"})]}),Object(m.jsx)("table",{className:"kinder-table",children:i.map((function(e){return Object(m.jsx)("tr",{children:e.map((function(e){return e}))})}))})]})},M=function(e){try{var t=e.split("(").map((function(e,t){return 1==t?"("+e:e}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"sub-ch ch",children:t[0]}),Object(m.jsx)("br",{}),t[1]]})}catch(s){return console.error(s),Object(m.jsx)("div",{children:"\uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694."})}},A=function(e){var t=function(e,t,s){var c=new Date;for(c.setFullYear(e),c.setMonth(t-1),c.setDate(1),c.setHours(0,0,0,0);;)if(0==c.getDay()){if(Math.floor(c.getDate()/7)+1==s)break;c.setDate(c.getDate()+7)}else c.setDate(c.getDate()+1);return c.setDate(c.getDate()),c}(e.yaer,e.month,e.week);console.log("target",t.toISOString());var s,c=y(t),n=(s=c,[k.KINDERGARTEN+s,k.ELEMENTARY+s,k.TEENAGER+s,k.ADULT+s]),a=n.map((function(e,s){return new E(e,t,function(e){var t=new Date;return t.setHours(0,0,0,0),t.setMonth(e.getMonth()),t.setFullYear(e.getFullYear()),t.setDate(1),Math.floor((e.getTime()-t.getTime())/6048e5)}(t),w[s])}));console.log("headerList",a);for(var i=a.map((function(e){return Object(m.jsx)(F,{no:e.no,date:e.date,weekly:e.weekly,ban:e.ban,dateString:e.dateString})})),r=function(){var t;try{t=e.voca_list.length}catch(s){return Object(m.jsx)("div",{children:"\uc815\ubcf4 \uc5c6\uc74c"})}return 2==t?Object(m.jsxs)("div",{className:"word hanja",children:[Object(m.jsx)("div",{className:"grid-100 word-item ch",children:e.voca_list[0].hanja}),Object(m.jsx)("div",{className:"grid-101 word-item kr",children:e.voca_list[0].mean}),Object(m.jsx)("div",{className:"grid-102 word-item ch",children:e.voca_list[1].hanja}),Object(m.jsx)("div",{className:"grid-103 word-item kr",children:e.voca_list[1].mean})]}):Object(m.jsxs)("div",{className:"word1 hanja",children:[Object(m.jsx)("div",{className:"grid-100 word-item ch",children:e.voca_list[0].hanja}),Object(m.jsx)("div",{className:"grid-101 word-item kr",children:e.voca_list[0].mean})]})},j=[0,1,2,3],l=Object(m.jsx)("div",{className:"stroke-table",children:j.map((function(t,s){if(e.front_hanja_list.length>s){var c=e.front_hanja_list[s];1==s&&(c=e.front_hanja_list[2]),2==s&&(c=e.front_hanja_list[1]);var n=c.draw_list.length;return Object(m.jsxs)("div",{className:"stroke"+s,children:[Object(m.jsxs)("div",{className:"grid-hanja0 ch",children:[c.hanja,Object(m.jsxs)("span",{className:"total-stroke kr",children:[n,"\ud68d"]})]}),Object(m.jsx)("div",{className:"grid-name0 kr",children:Object(m.jsx)("div",{className:"hanja-name-stroke",children:c.name})}),Object(m.jsxs)("div",{className:"grid-sub0 kr",children:[Object(m.jsx)("span",{className:"sub-title"}),M(c.sub)," "]}),Object(m.jsx)("div",{className:"grid-s0-0",children:n>0&&Object(m.jsx)("img",{src:c.draw_list[0]})}),Object(m.jsx)("div",{className:"grid-s0-1",children:n>1&&Object(m.jsx)("img",{src:c.draw_list[1]})}),Object(m.jsx)("div",{className:"grid-s0-2",children:n>2&&Object(m.jsx)("img",{src:c.draw_list[2]})}),Object(m.jsx)("div",{className:"grid-s0-3",children:n>3&&Object(m.jsx)("img",{src:c.draw_list[3]})}),Object(m.jsx)("div",{className:"grid-s0-4",children:n>4&&Object(m.jsx)("img",{src:c.draw_list[4]})}),Object(m.jsx)("div",{className:"grid-s0-5",children:n>5&&Object(m.jsx)("img",{src:c.draw_list[5]})}),Object(m.jsx)("div",{className:"grid-s0-6",children:n>6&&Object(m.jsx)("img",{src:c.draw_list[6]})}),Object(m.jsx)("div",{className:"grid-s0-7",children:n>7&&Object(m.jsx)("img",{src:c.draw_list[7]})}),Object(m.jsx)("div",{className:"grid-s0-8",children:n>8&&Object(m.jsx)("img",{src:c.draw_list[8]})}),Object(m.jsx)("div",{className:"grid-s0-9",children:n>9&&Object(m.jsx)("img",{src:c.draw_list[9]})}),Object(m.jsx)("div",{className:"grid-s0-10",children:n>10&&Object(m.jsx)("img",{src:c.draw_list[10]})}),Object(m.jsx)("div",{className:"grid-s0-11",children:n>11&&Object(m.jsx)("img",{src:c.draw_list[11]})})]})}return Object(m.jsxs)("div",{className:"stroke"+s,children:[Object(m.jsx)("div",{className:"grid-hanja0"}),Object(m.jsx)("div",{className:"grid-name0"}),Object(m.jsx)("div",{className:"grid-sub0",children:" "}),Object(m.jsx)("div",{className:"grid-s0-0"}),Object(m.jsx)("div",{className:"grid-s0-1"}),Object(m.jsx)("div",{className:"grid-s0-2"}),Object(m.jsx)("div",{className:"grid-s0-3"}),Object(m.jsx)("div",{className:"grid-s0-4"}),Object(m.jsx)("div",{className:"grid-s0-5"}),Object(m.jsx)("div",{className:"grid-s0-6"}),Object(m.jsx)("div",{className:"grid-s0-7"}),Object(m.jsx)("div",{className:"grid-s0-8"}),Object(m.jsx)("div",{className:"grid-s0-9"}),Object(m.jsx)("div",{className:"grid-s0-10"}),Object(m.jsx)("div",{className:"grid-s0-11"})]})}))}),o=[],d=0;d<9;d++)o.push(d);var b=Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{children:o.map((function(t,s){var c=e.front_hanja_list.length;return Object(m.jsxs)("tr",{className:(0==t?"hanja-big ch":1==t&&"hanja-name kr")||2==t&&"hanja-big follow ch"||3==t&&"hanja-name kr"||"",children:[Object(m.jsx)("td",{children:(0==t||2==t)&&e.front_hanja_list[0].hanja}),Object(m.jsx)("td",{children:(0==t||2==t)&&e.front_hanja_list[1].hanja}),Object(m.jsx)("td",{children:(0==t||2==t)&&c>2&&e.front_hanja_list[2].hanja}),Object(m.jsx)("td",{children:(0==t||2==t)&&c>3&&e.front_hanja_list[3].hanja})]})}))})}),h=Object(m.jsxs)("div",{className:"bottom-table",children:[Object(m.jsx)("span",{className:"bottom-left",children:b}),Object(m.jsx)("span",{className:"bottom-right",children:b})]});return Object(m.jsx)("div",{children:j.map((function(t){return 0==t?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"a4",children:Object(m.jsx)(Y,{where:e.yojeol.morning.where,yojeol:e.yojeol.morning.words,order:a[0].no,dataString:a[0].dateString,isFront:!0})}),Object(m.jsx)("div",{className:"a4",children:Object(m.jsx)(Y,{where:e.yojeol.morning.where,yojeol:e.yojeol.morning.words,order:a[0].no,dataString:a[0].dateString,isFront:!1})})]}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"a4",children:[i[t],Object(m.jsx)(r,{}),l,h]}),Object(m.jsx)("div",{className:"a4",children:Object(m.jsx)(q,{main_words:e.main_words,questions:e.questions,yojeol:e.yojeol,back_hanja_list:e.back_hanja_list,week:e.week,month:e.month,yaer:e.yaer,index:t,order:n[t]})})]})}))})},R="yc_hanja_page",I="/"+d+"/"+(o.getMonth()+1);var L=function(e){var t,s=b();console.log(s),Object(c.useEffect)((function(){o(e.link)}),[e.link]);var a,i=Object(c.useState)(I),r=Object(j.a)(i,2),l=r[0],o=r[1],d=Object(c.useState)(null),x=Object(j.a)(d,2),O=x[0],g=x[1],N=Object(c.useState)(null),k=Object(j.a)(N,2),w=k[0],_=k[1],y=Object(c.useState)(null),p=Object(j.a)(y,2),E=p[0],D=p[1],F=Object(c.useState)(null),S=Object(j.a)(F,2),q=S[0],T=S[1],Y=Object(c.useState)(""),M=Object(j.a)(Y,2),L=(M[0],M[1]);a="/"==window.location.pathname||window.location.pathname=="/"+R+"/"?"/"+R+I:window.location.pathname,console.log("pathname",a);var C=a.split("/").filter((function(e){return""!=e&&!e.includes(R)})),B=Object(j.a)(C,3),G=B[0],H=B[1],U=B[2];if(G==R){var J=I.split("/").filter((function(e){return""!=e&&!e.includes(R)})),K=Object(j.a)(J,2);G=K[0],H=K[1]}console.log("filtered >>>> ",G,H,U),U||null!=E&&D(null);var P=Object(c.useState)(null),$=Object(j.a)(P,2),z=$[0],Q=$[1];if(Object(c.useEffect)((function(){(function(e){return f()({method:"get",baseURL:"https://raw.githubusercontent.com/yegyu/yc_hanja/main/year/",url:"".concat(e,".json")}).then((function(e){return e.data})).catch((function(e){return console.error("getYearsJson",e),null}))})(G).then((function(e){if(console.log("getYearsJson>>>>>",e),!e)return Object(m.jsx)("div",{children:"Not found"});Q(e.month_files)}))}),[a]),Object(c.useEffect)((function(){U?(console.log("yes week",q,"&"),D(q)):(console.log("not week"),D(null))}),[U]),Object(c.useEffect)((function(){if(console.log("monthFiles",z),console.log(window.location.pathname==l),z){var e=parseInt(H)-1,t=z[e];console.log("path>>>>>>>",t),t?function(e,t){return f()({method:"get",baseURL:"https://raw.githubusercontent.com/yegyu/yc_hanja/main/",url:e+"/"+t}).then((function(e){return e.data})).catch((function(e){return console.error(e),null}))}(String(G),t).then((function(e){e?(console.log("contentdto array >>",e),g(e),o(window.location.pathname),_(null)):_(h(G,H,U))})).catch((function(e){_(h(G,H,U))})):_(h(G,H,U))}}),[z]),null==E)t=Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{years:b(),stateHandler:function(e){o(e),L(e),console.log("App > update")}}),Object(m.jsx)(v,{yearMonth:l,handleContentDto:function(e){D(e),T(e)},notFound:w,year:G,month:H,week:U,contentsList:O})]});else{var V=O[parseInt(U)-1];try{return t=Object(m.jsx)("div",{children:Object(m.jsx)(A,{front_hanja_list:V.front_hanja_list,main_words:V.main_words,questions:V.questions,yojeol:V.yojeol,back_hanja_list:V.back_hanja_list,week:V.week,handleContentDto:V.handleContentDto,month:parseInt(H),yaer:parseInt(G),voca_list:V.voca_list})})}catch(W){t=n.a.createElement("div",null,"hello")}}return Object(m.jsx)("div",{className:"App",children:t})},C=function(){var e=Object(l.d)(),t=Object(c.useState)(""),s=Object(j.a)(t,2),n=s[0],a=s[1];return Object(c.useEffect)((function(){return e.listen((function(e){console.log("root link",e.pathname),a(e.pathname)}))}),[e]),Object(m.jsx)(L,{link:n})};i.a.render(Object(m.jsx)(x.a,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),r()}},[[73,1,2]]]);
//# sourceMappingURL=main.4f3024e7.chunk.js.map