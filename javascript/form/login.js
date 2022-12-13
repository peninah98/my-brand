import {checkValidation, setAttributes, validate, patters} from "./validation.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("login-form");

    let fields = [
        {
            name:'email',
            field: 'email',
            error: 'emailError',
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'pattern',
                    value: patters.email
                }
            ]
        },
        {
            name:'password',
            field:"password",
            error:"passwordError",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'minlength',
                    value: 3,
                    message:"Password should be more than 2 characters"
                },
                {
                    name: 'maxlength',
                    value: 25,
                    message:"Password should be less than 26 characters"
                },

                {
                    name:'pattern',
                    value:patters.password,
                    message:'Password shoukd be strong'
                }

            ]
        },
       
       
    ]

    fields.forEach(eachField => {
        setAttributes(eachField)
        validate(eachField)

    })
    form.addEventListener("submit", (event) => {
        // if the email field is valid, we let the form submit
        let formData = new FormData(event.target)
        let isFormValid = checkValidation(fields)
        if(!isFormValid){
            event.preventDefault();
        }else {
           
            
        }
    });









})

