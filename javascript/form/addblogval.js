const form = document.getElementById('add-blog');
const title = document.getElementById('newblog_title');
const url = document.getElementById('onlineImage');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidurl = url => {
    const re = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    return re.test(String(url).toLowerCase());
}

const validateInputs = () => {
    const titleValue =title.value.trim();
    const urlValue = url.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(titleValue === '') {
        setError(title, 'Title is required');
    } else {
        setSuccess(title);
    }

    if(urlValue === '') {
        setError(url, 'url is required');
    } else if (!isValidurl(urlValue)) {
        setError(url, 'Provide a valid url address');
    } else {
        setSuccess(url);
    }

    // if(passwordValue === '') {
    //     setError(password, 'Password is required');
    // } else if (passwordValue.length < 8 ) {
    //     setError(password, 'Password must be at least 8 character.')
    // } else {
    //     setSuccess(password);
    // }

    // if(password2Value === '') {
    //     setError(password2, 'Please confirm your password');
    // } else if (password2Value !== passwordValue) {
    //     setError(password2, "Passwords doesn't match");
    // } else {
    //     setSuccess(password2);
    // }

};
