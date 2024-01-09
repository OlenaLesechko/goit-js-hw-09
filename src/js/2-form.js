const formEl = document.querySelector('.feedback-form');
const localStorageFeedbackKey = 'feedback-form-state';

try {
    const initialFormData = JSON.parse(
    localStorage.getItem(localStorageFeedbackKey)
    );
    
    if (typeof initialFormData === 'object' && initialFormData !== null) {
        formEl.elements.email.value = initialFormData.email;
        formEl.elements.message.value = initialFormData.message;
    };
}
catch {
    if (!JSON.parse(localStorage.getItem(localStorageFeedbackKey))) {
        console.log();
    }
    else console.error('PARSE FORM STORAGE ERROR');
}

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

