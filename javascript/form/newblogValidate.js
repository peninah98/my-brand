import {checkValidation, setAttributes, validate, patters} from "./validation.js";
document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById('add-blog');

    let fields = [
        {
            name:'title',
            field: 'newblog_title',
            error: 'tittleError',
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'minlength',
                    value: 10,
                    message:"Title should be more than 10 characters" 
                }
            ]
        },
        {
            name:'description',
            field:"newblog_description",
            error:"descriptionError",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'minlength',
                    value: 10,
                    message:"Password should be more than 10 characters"
                },
                {
                    name: 'maxlength',
                    value: 300,
                    message:"Password should be less than 26 characters"
                },
            ]
        },

        {
            name:'editor',
            field:"editor",
            error:"contentError",
            conditions:[
                {
                    name:'required',
                    value: true,
                },
                {
                    name: 'minlength',
                    value: 100,
                    message:"Contenet should be more than 10 characters"
                },
                {
                    name: 'maxlength',
                    value: 300,
                    message:"Contenet should be less than 26 characters"
                },


            ]
        },

        {
            name:'photo',
            field:"photo",
            error:"photoError",
            conditions:[
                {
                    name:'required',
                    value: true,
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

