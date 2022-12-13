
 const blogs=JSON.parse(localStorage.posts)
 const blogTitle = localStorage.getItem("blogTitle")
 var result = blogs.find(function(event) {
    return event.title ==  blogTitle;
  });


  
  const title= document.getElementById("singleBlogTitle")
  title.innerHTML=result.title
  const description= document.getElementById("singleBlogdescription")
  description.innerHTML=result.description
  const content= document.getElementById("singleBlogContent")
  content.innerHTML= result.content
  const singleBlogImage= document.getElementById("singleBlogImage")
  singleBlogImage.src=result.localPhoto
