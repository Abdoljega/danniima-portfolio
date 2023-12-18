// import ScrollReveal from '../lib/scrollreveal-master/dist/scrollreveal.min'
let menusite = document.querySelector('.menu-site')


console.log(ScrollReveal)
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

console.log(window.innerWidth)
if(window.innerWidth > '780'){
    sr.reveal('.nav_menu', {interval : 200})
    
    sr.reveal('.imgProfile', {delay : 200})
    
}
sr.reveal('#nav_welcome', {delay : 1000})
sr.reveal('#nav_name', {delay : 700})
sr.reveal('.summery', {delay : 400})
sr.reveal('.downloadCv', {delay : 200})
console.log(menusite)
// sr.reveal('.about-profile', {delay : 200})
// sr.reveal('.projectInformation', {interval : 400})



// const srl = ScrollReveal({
//     origin: 'top',
//     distance: '100px',
//     duration: 2000,
//     reset: true
// })

// srl.reveal('.destop-image-container', {delay : 500})



let container = document.querySelector('.container')
let social = document.querySelector('.social')
// let aboutRight = document.querySelector('.about-right')
let aboutLeft = document.querySelector('.about-text-side')
let projectImage = document.querySelectorAll('.destop-image-container')
let projectInformation = document.querySelectorAll('.info')
let leftSocial = document.querySelector('.socialLeft')
let aboutProfile = document.querySelector('.about-profile')
let textarea = document.querySelector('textarea')
let left_Nav = document.querySelectorAll('.nav_left')
let right_Nav = document.querySelectorAll('.nav_right')
let projects = document.querySelectorAll('.projects')
let skills = document.querySelectorAll('.skill, input')
// let input = document.querySelectorAll('input')
const { scrollTop } = document.documentElement

height = 0;
// container.addEventListener('scroll', e=>{
//     // console.log(container.scrollTop)
//     // console.log(container.scrollTop)
//     console.log(container.scrollTop)

//     // if(container.scrollTop > 1600){
//     //     // console.log(projects)
//     //     projectInformation[0].classList.add('active')
//     //     right_Nav[0].classList.add('active')
//     // }
//     // if(container.scrollTop >= 2300){
//     //     // console.log(projects)
//     //     projectInformation[1].classList.add('active')
//     //     right_Nav[1].classList.add('active')
//     // }
    

        
    

// })


let observer = new IntersectionObserver(entreis =>{
    entreis.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        } 
        // else {
        //     entry.target.classList.remove('active')

        // }
    })
})

right_Nav.forEach(rightBox=>{
    observer.observe(rightBox)
})

left_Nav.forEach(leftBox=>{
    observer.observe(leftBox)
})

skills.forEach(skill=>{
    observer.observe(skill)
})

observer.observe(aboutProfile)
observer.observe(textarea)
observer.observe(aboutLeft)
// observer.observe(aboutRight)






let toggle = document.querySelector('.toggle')
let menuA = document.querySelector('.menu')
let nav_menu = document.querySelectorAll('.nav_menu')
let toggleCon = document.querySelector('.toggle-container')

toggleCon.addEventListener('click', e=>{
    toggle.classList.toggle('active')
    menusite.classList.toggle('active')
    menuA.classList.toggle('active')
    nav_menu.forEach(nav=>{
        nav.classList.toggle('show')
    })
})












document.addEventListener('click', e=>{
    console.log(e.target.classList[0])
    if(e.target.classList[0] != 'toggle' && e.target.classList[0] != 'toggle-container'){
        menusite.classList.remove('active')
        toggle.classList.remove('active')
        menuA.classList.remove('active')
        nav_menu.forEach(nav=>{
            nav.classList.remove('show')
        })
    }
})