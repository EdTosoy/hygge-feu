import{z as c,r as i,j as s,B as n,D as l,F as d}from"./index-B6cNwYG_.js";import{u as m}from"./UseAppDispatch-ikqRfIpi.js";import{u as p}from"./UseAppSelector-Dqq9XBwt.js";import{a as f}from"./selectors-CO56ze6E.js";const j=()=>{const e=p(f),a=m(),{id:r}=c();if(!r)return null;const t=async()=>{try{const o=await a(d(r)).unwrap();console.log(o)}catch(o){console.error(o)}};return i.useEffect(()=>{t(),console.log(e)},[r]),s.jsx("div",{className:"body-grid-container",children:s.jsxs("div",{className:"col-start-2 col-end-3 main-grid-container ",children:[e&&s.jsx(n,{singleUserInfo:e}),s.jsx("div",{className:"col-start-2 col-end-3",children:s.jsx("div",{className:"bg-white main-section-height",children:s.jsx("div",{className:"p-6",children:s.jsx(l,{})})})})]})})};export{j as UserProfilePage};
