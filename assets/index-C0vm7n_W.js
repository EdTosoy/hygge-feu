import{u as x,j as t,a as h,O as g,v as w}from"./index-B6cNwYG_.js";import{u as f}from"./index.esm-BelmPDac.js";import{u as y}from"./UseAppDispatch-ikqRfIpi.js";import{S as v}from"./auth-Cj7gbj5n.js";import{u as j}from"./useTranslation-BewvAwbW.js";const U=()=>{const{t:e}=j(),l=x(),n=y(),{register:s,handleSubmit:p,reset:m}=f(),c=async d=>{const{confirmPassword:a,password:o,email:r,username:i}=d;if(a!==o&&console.log("password not match!"),r&&i)try{await n(w({email:r,password:o,confirmPassword:a,username:i})).unwrap(),m(),l(v),window.location.reload()}catch(u){console.error(u)}else console.log("there is no email, password, confirmPassword, username")};return t.jsxs("div",{className:"p-14 shadow-2xl rounded-2xl",children:[t.jsx("h1",{className:"font-medium text-3xl",children:e("translation.button.signUp")}),t.jsxs("form",{className:"pt-7",onSubmit:p(c),children:[t.jsx("input",{className:"w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4",placeholder:e("translation.input.username"),...s("username")}),t.jsx("input",{className:"w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4",type:"email",placeholder:e("translation.input.email"),...s("email")}),t.jsx("input",{className:"w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4",type:"password",placeholder:e("translation.input.password"),...s("password")}),t.jsx("input",{className:"w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4",type:"password",placeholder:e("translation.input.confirmPassword"),...s("confirmPassword")}),t.jsx(h,{text:e("translation.button.signUp"),className:"mt-5 py-4 rounded-xl font-semibold w-full",type:"submit"}),t.jsx("p",{className:"text-semi-gray text-center my-11",children:e("translation.authenticationPage.oAuthTitle")}),t.jsx(g,{})]})]})};export{U as SignUpForm};
