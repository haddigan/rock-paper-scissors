(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,,function(n,e,a){n.exports={gameVisualization:"GameVisualization_gameVisualization__312QD",playedHand:"GameVisualization_playedHand__3zdkJ",winner:"GameVisualization_winner__1eeEP GameVisualization_playedHand__3zdkJ"}},,function(n,e,a){n.exports={handChooser:"HandChooser_handChooser__1oRUA",handButton:"HandChooser_handButton__3m6-c"}},,function(n,e,a){n.exports={winner:"Winner_winner__1_0K9"}},,,,,,function(n,e,a){},function(n,e,a){},function(n,e,a){"use strict";a.r(e);var t=a(0),r=a(1),i=a.n(r),l=a(6),c=a.n(l),s=(a(13),a(2)),o=(a(14),"player 1"),d="player 2",u="draw",j="rock",h="paper",p="scissors",b=new Map([[j,{label:"\ud83e\udea8",value:0}],[h,{label:"\ud83d\udcc4",value:1}],[p,{label:"\u2702\ufe0f",value:2}]]),v=Array.from(b.keys()),x=function(){var n=Object(r.useState)({playerHand:null,opponentHand:null,winner:null}),e=Object(s.a)(n,2),a=e[0],t=e[1];return[a,function(n){var e,a,r=v[Math.floor(Math.random()*v.length)],i=(e=n)===(a=r)?u:(b.get(e).value+1)%3===b.get(a).value?d:o;t({playerHand:n,opponentHand:r,winner:i})}]},O=a(3),f=a.n(O),H=a(7),_=a.n(H),w=function(n){var e=n.winner;return Boolean(e)?Object(t.jsxs)("div",{className:_.a.winner,children:[e===u&&Object(t.jsx)("div",{children:"It's a draw"}),e===o&&Object(t.jsx)("div",{children:"You win!"}),e===d&&Object(t.jsx)("div",{children:"You lose!"})]}):null},g=function(n){var e=n.playerHand,a=n.opponentHand,r=n.winner;return e&&a&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:f.a.gameVisualization,children:[Object(t.jsx)(m,{isWinner:r===o,children:b.get(e).label}),Object(t.jsx)("span",{children:"vs."}),Object(t.jsx)(m,{isWinner:r===d,children:b.get(a).label})]}),Object(t.jsx)(w,{winner:r})]})},m=function(n){var e=n.children,a=n.isWinner;return Object(t.jsx)("div",{className:a?f.a.winner:f.a.playedHand,children:e})},y=a(5),k=a.n(y),z=function(n){var e=n.handleSetHand;return Object(t.jsxs)("div",{className:k.a.handChooser,children:[Object(t.jsx)(C,{handleSetHand:function(){return e(j)},children:b.get(j).label}),Object(t.jsx)(C,{handleSetHand:function(){return e(h)},children:b.get(h).label}),Object(t.jsx)(C,{handleSetHand:function(){return e(p)},children:b.get(p).label})]})},C=function(n){var e=n.handleSetHand,a=n.children;return Object(t.jsx)("button",{className:k.a.handButton,onClick:e,children:a})};var S=function(){var n=x(),e=Object(s.a)(n,2),a=e[0],r=a.playerHand,i=a.opponentHand,l=a.winner,c=e[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)(z,{handleSetHand:c}),Object(t.jsx)(g,{playerHand:r,opponentHand:i,winner:l})]})},V=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,t=e.getFID,r=e.getFCP,i=e.getLCP,l=e.getTTFB;a(n),t(n),r(n),i(n),l(n)}))};c.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(S,{})}),document.getElementById("root")),V()}],[[15,1,2]]]);
//# sourceMappingURL=main.4918a730.chunk.js.map