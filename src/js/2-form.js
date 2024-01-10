const formEl = document.querySelector('.feedback-form');
const localStorageFeedbackKey = localStorage.getItem('feedback-form-state');

const initialFormData = JSON.parse(
    localStorage.getItem(localStorageFeedbackKey));
    
if (initialFormData?.email || initialFormData?.message) {
    formEl.elements.email.value = initialFormData.email;
    formEl.elements.message.value = initialFormData.message;
}


formEl.addEventListener('input', e => {
    const data = new FormData(formEl);
    const userFeedback = { email: '', message: '' };

    data.forEach((value, key) => {
    userFeedback[key] = value.trim();
    
    });
    localStorage.setItem(localStorageFeedbackKey, JSON.stringify(userFeedback));
});


formEl.addEventListener('submit', e => {
    e.preventDefault();
    const email = formEl.elements.email.value.trim();
    const message = formEl.elements.message.value.trim();
    if (!email || !message) {
        
        console.error('All form fields must be filled in');
    } else {
        const storageInfo = JSON.parse(localStorage.getItem(localStorageFeedbackKey));
    
    localStorage.removeItem(localStorageFeedbackKey);
        formEl.reset();
        console.log(storageInfo);
    }
});

