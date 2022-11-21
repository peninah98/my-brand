const blogContainer= document.querySelector("#blog-list")
 for(let i=0; i<blogContainer.length; i++){
    blogContainer.innerHTML+=`
    
    <div class="blog-list">
          
          <h1>Blog list</h1>    
         <div class="first">
            <div class="blogTitleId">
                <p id="">${blogs[i].title}</p>
            </div>
            <div class="blogComents">
                <p>Comments <span>1</span></p>
            </div>
            <div class="blogLikes">
                 <p>Likes <span id="likesNunber"> 1</span></p>
            </div>
            <div class="deletBlog">
                <button>Delete</button>
            </div>
            <div class="edit">
                <button>Edit</button>
            </div>
         </div>
         
        </div> 
    `
    
 }

 function saveTitle(title){
    localStorage.setItem("blogTitle",title)
     location="blogview.html"
    // // history.go(0)
    

 }
