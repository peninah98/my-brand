import {checkValidation, setAttributes, validate, patters} from "./validation.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById("contact-form");

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
            name:'name',
            field:"name",
            error:"nameError",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'minlength',
                    value: 3,
                    message:"Name should be more than 2 characters"
                },
                {
                    name: 'maxlength',
                    value: 25,
                    message:"Name should be less than 26 characters"
                },

            ]
        },
        {
            name:'subject',
            field:"subject",
            error:"emailsubjectError",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'minlength',
                    value: 5,
                },
                {
                    name: 'maxlength',
                    value: 100,
                    message:"Name should be less than 26 characters"
                },

            ]
        },
        {
            name:'name',
            field:"name",
            error:"nameError",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'minlength',
                    value: 3,
                    message:"Name should be more than 2 characters"
                },
                {
                    name: 'maxlength',
                    value: 25,
                    message:"Name should be less than 26 characters"
                },

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