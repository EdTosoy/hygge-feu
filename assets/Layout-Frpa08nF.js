import{b as l,r as x,T as m,j as s,M as u,G as p,J as j,A as h}from"./index-B6cNwYG_.js";import{u as g}from"./UseAppSelector-Dqq9XBwt.js";import{s as f}from"./selectors-CO56ze6E.js";const T=({children:t})=>{const{pathname:e}=l(),{showModal:a,modalContent:o,toggleModal:n}=x.useContext(m),{_id:r}=g(f)||{},i=e===h,c=a&&o,d=()=>i?s.jsx(j,{}):s.jsx("div",{className:"pt-14",children:s.jsx(p,{isLoggedIn:!!r})});return s.jsxs("div",{children:[d(),s.jsx("main",{children:t}),c&&s.jsx("div",{onClick:n,children:s.jsx(u,{modalContent:o})})]})};export{T as Layout};
