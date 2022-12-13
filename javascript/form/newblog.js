const addblogFrorm = document.querySelector("form");
const title = document.querySelector("#newblog_title");
const description = document.querySelector("#newblog_description");
const localPhoto = document.querySelector("#localPhoto");
// const onlineImage = document.querySelector("#onlineImage");
const blogContent = document.querySelector("#content");


 function validatetitle(){
   
    if(title.value.length <5){
        title.parentElement.classList.add("invalid")
    }
    else{
        title.parentElement.classList.remove("invalid")
    }
 }
 function validateEditor(){
    if(blogContent.value.length < 30){
        blogContent.parentElement.classList.add("invalid")
     
    }
    else{
        blogContent.parentElement.classList.remove("invalid")
    }
 }


 function validateDescription(){
    if(description.value.length < 10){
        description.parentElement.classList.add("invalid")
    }
    else{
        description.parentElement.classList.remove("invalid")
    }
 }
 

 function validatelocalImage(){
    console.log("it is working")
    const imagerex=/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    if(!localPhoto.value.match(imagerex)){
        localPhoto.parentElement.classList.add("invalid")
    }
    else{
        localPhoto.parentElement.classList.remove("invalid")
    }
 }

//  function validateUrl(){
// const url=/^(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/

// if(!onlineImage.value.match(url)){
//     onlineImage.parentElement.classList.add("invalid")
// }
// else{
//     onlineImage.parentElement.classList.remove("invalid")
// }
//  }

 addblogFrorm.addEventListener("submit", (e) =>{
    e.preventDefault();

    createPost()

    validateDescription()
    validatelocalImage()
    validatetitle()
    // validateUrl()
    validateEditor()
})
function createPost(){



    var posts 
    if(!localStorage.posts){
        posts=[]

    }
    else{
        posts = JSON.parse(localStorage.posts)

    }
    var finalImage;
    const imageLink =  localPhoto.files
    const reader =  new FileReader();
    reader.readAsDataURL(imageLink[0])
    reader.addEventListener("load",()=>{
       finalImage = reader.result
       console.log(finalImage)
    



    const eachPost = {}
    eachPost.title=title.value
    eachPost.description=description.value
    eachPost.content=blogContent.innerHTML
    eachPost.localPhoto=finalImage

    posts.push(eachPost)
    localStorage.posts=JSON.stringify(posts)
})

}

    
    



   
  
 