// const form = document.querySelector(".feedback-form");

// const localStorageKey = "feedback-form-state";



// form.addEventListener('input', (e) =>{
//   const input = form.elements.email.value;
// const textarea = form.elements.message.value;
//   const data ={
//     email:input,
//     message:textarea,
//   };

//   setItemToLS(localStorageKey, data);
  
// });
 
// function setItemToLS(key, value){
// const jsonData = JSON.stringify(value);
// localStorage.setItem(key, jsonData);
// };

// form.addEventListener('submit', (e) =>{
//   const email = form.elements.email.value.trim();
//         const message = form.elements.message.value.trim();

//         if (email === '' || message === '') {
            
//   e.preventDefault();
//         }else {
//           const data = getItemFromLS(localStorageKey);
//           console.log({ email, message });
//         }

  
 

//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// function getItemFromLS(key){
//   const data = localStorage.getItem(key) || {};
//   try{
//     return JSON.parse(data);
//   } catch {
//     return data;
//   }
// };



// function restorData(){
//   const data = getItemFromLS(localStorageKey)|| {};

//   form.elements.email.value = data.email || '';
//   form.elements.message.value = data.message || '';
// }

// restorData();




const formEl = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

formEl.addEventListener('input', onInputForm);
formEl.addEventListener('submit', onSabmitForm);

function onInputForm(){
  const input = form.elements.email.value;
  const textarea = form.elements.message.value;

  const data ={
    email:input,
    message:textarea,
  };
  setItemToLS(localStorageKey, data);
  };


  function setItemToLS(key, value){
  const jsonData = JSON.stringify(value);
localStorage.setItem(key, jsonData);
};

function onSabmitForm(){
  
}
