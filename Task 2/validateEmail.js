//Source: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript

function validateEmail() {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const email1Value = formData.get('email');
    const email2Value = formData.get('email2');

    if (email1Value === email2Value) { 
        alert("Email addresses match");
        return true;
    } else {
        alert("Please make sure the email addresses match");
        return false;
    }
  }