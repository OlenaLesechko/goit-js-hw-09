import"./assets/styles-1591e518.js";const e=document.querySelector(".feedback-form"),a="feedback-form-state";try{const t=JSON.parse(localStorage.getItem(a));typeof t=="object"&&t!==null&&(e.elements.email.value=email,e.elements.message.value=message)}catch{JSON.parse(localStorage.getItem(a))?console.error("PARSE FORM STORAGE ERROR"):console.log()}e.addEventListener("input",t=>{const l=new FormData(e),o={};l.forEach((s,r)=>{o[r]=s.trim()}),localStorage.setItem(a,JSON.stringify(o))});e.addEventListener("submit",t=>{t.preventDefault();const l=e.elements.email.value.trim(),o=e.elements.message.value.trim();if(!l||!o)alert("All form fields must be filled in");else{const s=JSON.parse(localStorage.getItem(a));localStorage.removeItem(a),e.reset(),console.log(s)}});
//# sourceMappingURL=commonHelpers2.js.map
