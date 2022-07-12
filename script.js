
const emailValidation = () => {
    const emailInput = document.querySelector('.email');
    
    emailInput.addEventListener('input', () => {
        emailInput.setCustomValidity('');
        emailInput.checkValidity();
      });

    emailInput.addEventListener('invalid', () => {
        if(emailInput.value === '') {
            emailInput.setCustomValidity('Please enter your email');
        } 
        else {
            emailInput.setCustomValidity('Please enter a valid email address');
        }
    });
};

const countryValidation = () => {
    const countryInput = document.querySelector('.country');
    
    countryInput.addEventListener('input', () => {
        countryInput.setCustomValidity('');
        countryInput.checkValidity();
      });

    countryInput.addEventListener('invalid', () => {
        if(countryInput.value === '') {
            countryInput.setCustomValidity('Please enter your Country');
        } 
    });
};

emailValidation();
countryValidation();
