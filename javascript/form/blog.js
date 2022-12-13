 
const blogContainer= document.querySelector("#blogContainer")
const blogs =JSON.parse(localStorage.getItem("posts"))
for(let i=0; i<blogs.length; i++){
    blogContainer.innerHTML+=`
    
    <div class="blog">
    <img src="${blogs[i].localPhoto}" alt="social">
    <h1>
      ${blogs[i].title}
    </h1>
    <p>
      ${blogs[i].description}
    </p>
<button class="view" onclick="saveTitle('${blogs[i].title}')"><a>View</a> </button>
</div>
    `
    
 }

 function saveTitle(title){
    localStorage.setItem("blogTitle",title)
    location="blogview.html"
    // history.go(0)
    

 }