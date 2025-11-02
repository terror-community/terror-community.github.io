let home = document.getElementById('home');
let gallery = document.getElementById('gallery');
let join = document.getElementById('join');

function navLoc(){
    if(window.location.pathname === '/' | window.location.pathname === '/index.html' | window.location.pathname === '/index'){
        home.classList.add('active')
    } else if (window.location.pathname === '/gallery.html' | window.location.pathname === '/gallery'){
        gallery.classList.add('active')
    } else if (window.location.pathname === '/join.html' | window.location.pathname === '/join'){
        join.classList.add('active')
    }

}
export default navLoc;