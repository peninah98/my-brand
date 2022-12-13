
function  saveBlog(){
    const title= document.getElementById('newblog_title').value
    const description=document.getElementById('newblog_description').value
    // const content=document.getElementById('editor').value
    // const photo=document.getElementById('photo').value

localStorage.setItem('Title',title)
localStorage.setItem('Description',description)
// localStorage.setItem('Content',content)
// localStorage.setItem('Photo',photo)






}