let home = document.getElementById('home');
let support = document.getElementById('support');
let staff = document.getElementById('staff');
let aboutus = document.getElementById('aboutus');

function navLoc(){
    if(window.location.pathname === '/' | window.location.pathname === '/index.html' | window.location.pathname === '/index'){
        home.classList.add('active')
    }
}
export default navLoc;