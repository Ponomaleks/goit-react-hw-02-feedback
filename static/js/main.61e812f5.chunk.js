(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),o=n.n(r),i=(n(13),n(2)),s=n(5),d=n(6),l=n(8),u=n(7),b=(n(14),n(0));function j(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:t}),n]})}var h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Good: ",t]}),Object(b.jsxs)("p",{children:["Neutral: ",n]}),Object(b.jsxs)("p",{children:["Bad: ",c]}),Object(b.jsxs)("p",{children:["Total: ",a]}),Object(b.jsxs)("p",{children:["Positive percentage: ",r," %"]})]})};function p(e){var t=e.text,n=e.type,c=e.onClick;return Object(b.jsx)("button",{type:n,name:t,onClick:c,children:t[0].toUpperCase()+t.slice(1)})}function O(e){var t=e.options,n=e.type,c=e.onLeaveFeedback;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(p,{text:e,type:n,onClick:c},e)}))})}var v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return e.countTotalFeedback()?Math.round(e.state.good/e.countTotalFeedback()*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e,t=this.countTotalFeedback(),n=this.countPositiveFeedbackPercentage();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{title:"Pease leave feedback",children:Object(b.jsx)(O,{options:["good","neutral","bad"],type:"button",onLeaveFeedback:this.handleClick})}),this.countTotalFeedback()?Object(b.jsx)(j,{title:"Statistics",children:Object(b.jsx)(h,(e={good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:0,positivePercentage:0},Object(i.a)(e,"total",t),Object(i.a)(e,"positivePercentage",n),e))}):Object(b.jsx)("p",{children:"Not feedback given"})]})}}]),n}(c.Component),f=v;o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.61e812f5.chunk.js.map