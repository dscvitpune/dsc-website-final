function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
      alert("Name can't be blank") ;
      return false;
    }
    return true;
  }

  function validatePhone() {
    var phone = document.getElementById('phone').value;
    if(phone.length == 0) {
      alert("Phone number can't be blank") ;//Validation Message
      return false;
    }

    if(!phone.match(/^[0]?[789]\d{9}$/)) {
     alert("Please enter a valid phone number") ;//Validation Message
     return false;
   }
   return true;

 }

 function validateEmail () {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert("Email can't be blank") ;//Validation Message
    return false;
  }

  if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    alert("Please enter a correct email address") ;//Validation Message
    return false;
  }
  return true;

}

function validateMessage() {
    var message = document.getElementById('message').value;
    if(message.length == 0) {
      alert("Message can't be blank") ;
      return false;
    }	
    return true;
  }


function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    // alert("Form not submitted");//Validation Message
    return false;
  }
  else {
    alert("Form Submitted Successfully !!!");//Validation Message
    submitted=true;
    return true;
  }
}