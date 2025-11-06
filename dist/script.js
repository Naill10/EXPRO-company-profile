// let btn = document.getElementById('btn')
// let project = document.getElementById('project')
let service = document.getElementById('service')

// window.addEventListener('scroll', function(){
//     let value = this.window.scrollY;
// })


window.addEventListener('scroll',function(){
const navbar = document.getElementById('navbar');

if (window.scrollY > 0){
    navbar.classList.add("scrolled")

}
else{
    (navbar.classList.remove("scrolled"))
}
});