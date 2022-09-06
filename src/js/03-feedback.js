let throttle = require('lodash.throttle');

let feedback = document.querySelector('.feedback-form');

feedback.addEventListener('input', throttle(saveData, 500));
feedback.addEventListener('submit', submit);

if (localStorage.getItem("feedback-form-state")) { getData(); }

function saveData() {
    let email = this.email.value;
    let message = this.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify( {email, message} ));
}

function submit(event) {
    event.preventDefault();
    console.log(localStorage.getItem("feedback-form-state"));
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
}

function getData() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    try {
        for (let key in data) {
            feedback[key].value = data[key];
        }
  } catch (error) {
      console.log('error', error);
      } 
}


    
    