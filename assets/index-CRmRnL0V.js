import{r as h,T as u,u as x,j as e,I as a,l as j,U as g,H as b}from"./index-B6cNwYG_.js";import{u as w}from"./UseAppDispatch-ikqRfIpi.js";import{u as v}from"./UseAppSelector-Dqq9XBwt.js";import{s as y}from"./selectors-CO56ze6E.js";import{u as N}from"./useTranslation-BewvAwbW.js";const E=({showDropdown:i,toggleDropdown:s})=>{const{darkMode:n,setDarkMode:c,onlineStatus:o,setOnlineStatus:d}=h.useContext(u),p=w(),{t:r}=N(),l=x(),m=async()=>{try{await p(j()).unwrap(),localStorage.removeItem(g),l(b),window.location.reload()}catch(t){console.error(t)}},{_id:f}=v(y);return e.jsxs("div",{className:"relative dropdown grid place-content-center ",children:[e.jsx(a,{onClick:()=>s(),children:e.jsx("ion-icon",{name:"chevron-down-outline"})}),i&&e.jsxs("div",{className:"w-252 border border-light-gray bg-white z-10 absolute top-12 right-0 rounded-md shadow-lg text-sm font-medium ",children:[e.jsxs("div",{className:"p-5 border-b border-light-gray",children:[e.jsxs("div",{className:"flex items-center gap-2 text-semi-gray font-normal",children:[e.jsx(a,{className:"text-2xl",children:e.jsx("ion-icon",{name:"planet-outline"})}),e.jsx("h2",{children:r("translation.dropDown.myStuff")})]}),e.jsxs("div",{className:"pl-8",children:[e.jsxs("div",{className:"my-4 flex items-center justify-between",onClick:t=>{t.preventDefault(),t.stopPropagation(),d(!o)},children:[e.jsx("p",{children:r("translation.dropDown.onlineStatus")}),e.jsxs("label",{className:"inline-flex relative items-center mr-5 cursor-pointer",children:[e.jsx("input",{"aria-label":"input",type:"checkbox",className:"sr-only peer",checked:o,readOnly:!0}),e.jsx("div",{className:"w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-dark-violet  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-violet"})]})]}),e.jsx("p",{className:"my-4 cursor-pointer",onClick:()=>{s(),l(`profile/${f}`)},children:r("translation.dropDown.profile")}),e.jsx("p",{className:"my-4 cursor-pointer",children:r("translation.dropDown.changeAvatar")}),e.jsx("p",{className:"my-4 cursor-pointer",children:r("translation.dropDown.userSettings")}),e.jsx("p",{className:"my-4 cursor-pointer",onClick:m,children:r("translation.button.lagout")})]})]}),e.jsxs("div",{className:"p-5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-semi-gray font-normal",children:[e.jsx(a,{className:"text-2xl",children:e.jsx("ion-icon",{name:"cloudy-night-outline"})}),e.jsx("h2",{children:r("translation.dropDown.themePreferences")})]}),e.jsx("div",{className:"pl-8",children:e.jsxs("div",{className:"my-4 flex items-center justify-between",onClick:t=>{t.preventDefault(),t.stopPropagation(),c(!n)},children:[e.jsx("p",{children:r("translation.dropDown.darkMode")}),e.jsxs("label",{className:"inline-flex relative items-center mr-5 cursor-pointer",children:[e.jsx("input",{"aria-label":"input",type:"checkbox",className:"sr-only peer",checked:n,readOnly:!0}),e.jsx("div",{className:"w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-dark-violet  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-violet"})]})]})})]})]})]})};export{E as Dropdown};
