const form = document.getElementById('form');
const emailError = document.getElementById('email-error');
const emailInput = document.getElementById('email');

const mainContent = document.getElementById('main-content');
const successMessage = document.getElementById('success-message');
const successEmail = document.getElementById('success-message-email');

const dismissButton = document.getElementById('dismiss-button');

const validateEmail = email => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(email);
};

const handleSubmit = (e) => {
    e.preventDefault(e);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if(data.email === "")
    {
        emailError.classList.remove('hidden');
        emailInput.classList.add('email-input-error');
    }
    else if (!validateEmail(data.email))
    {
        emailError.classList.remove('hidden');
        emailInput.classList.add('email-input-error');
    }
    else
    {
        emailError.classList.add('hidden');
        mainContent.classList.add('hidden');
        successMessage.classList.remove('hidden');
        emailInput.classList.remove('email-input-error');

        successEmail.innerHTML = data.email;
        emailInput.value = '';
    }
};

form.addEventListener('submit' , handleSubmit);

dismissButton.addEventListener('click' , () => 
{
    successMessage.classList.add('hidden');
    mainContent.classList.remove('hidden');
});