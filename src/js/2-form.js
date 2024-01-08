const formEl = document.querySelector('.feedback-form');
const localStorageFeedbackKey = 'feedback-form-state';

formEl.addEventListener('input', e => {
    const data = new FormData(formEl);
    const userFeedback = {};

    data.forEach((value, key) => {
    userFeedback[key] = value.trim();
    
    });
    localStorage.setItem(localStorageFeedbackKey, JSON.stringify(userFeedback));
});



formEl.addEventListener('submit', e => {
    e.preventDefault();
    const emailUserForm = formEl.elements.email.value.trim();
    const messageUserForm = formEl.elements.message.value.trim();
    if (!emailUserForm  || !messageUserForm) {
        alert('All form fields must be filled in');
    } else {
        const storageInfo = JSON.parse(localStorage.getItem(localStorageFeedbackKey));
    
    localStorage.removeItem(localStorageFeedbackKey);
        formEl.reset();
        console.log(storageInfo);
    }
});

try {
    const initialFormData = JSON.parse(
    localStorage.getItem(localStorageFeedbackKey)
    );
    const {email, message} = initialFormData;
    
    if (initialFormData) {
        form.elements.email.value = email;
        form.elements.message.value = message;
    };
}
catch {
    if (!JSON.parse(localStorage.getItem(localStorageFeedbackKey))) {
        console.log();
    }
    else console.error('PARSE FORM STORAGE ERROR');
}
