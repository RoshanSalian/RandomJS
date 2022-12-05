const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showFailure(element, msg){
    // element.getParent
    const formControl = element.parentElement;
    formControl.className = 'formcontrol error';
    const small = formControl.querySelector('small');
    small.innerText = msg;
}

function showSuccess(element){
    const formControl = element.parentElement;
    formControl.className = 'formcontrol success'
}

function isValidEmail(element){
    const re = /\S+@\S+\.\S+/;
    console.log(element)
    return re.test(String(element).toLowerCase());
}


function isRequired(Arr){
    Arr.forEach(function(inp){
        if(inp.value.trim() === ''){
            showFailure(inp, `${inp.id.charAt(0).toUpperCase() + inp.id.slice(1)} is required`)
        }
        else{
            showSuccess(inp);
        }
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    isRequired([username, email, password, password2]);

    // if(username.value===''){
    //     showFailure(username, 'Username cannot be empty');
    // }
    // else{
    //     showSuccess(username);
    // }

});