// import ScrollReveal from '../lib/scrollreveal-master/dist/scrollreveal.min'




let form = document.querySelector('form')

const CLIENT_ID = '628816302198-pb6atgbcm6hsq38m7cq8mua9v8c6clo5.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD6M3OFfxSGJbeV38cUwplPXVjDPU929WM';
const TO_EMAIL = "abdoljega@gmail.com"

form.addEventListener('submit', async e=>{
    e.preventDefault()
    console.log('Hello')

    let sender_name = form.fullname.value
    let from_email = form.email.value
    let subject = form.subject.value
    let message = form.message.value
    console.log(fullName, email, subject, message)
    
    console.log(emailjs)
    var serviceId = 'service_mhbqb9l'
    var templateId = 'template_484ojwk'

    Email.send({
        SecureToken : "6f423921-1ade-4f14-9199-3c01cc2e190e",
        To : 'abdoljega@gmail.com',
        From : from_email,
        Subject : subject,
        Body : message
    }).then(
      message => alert(message)
    );

})




let menusite = document.querySelector('.menu-site')


let container = document.querySelector('.container')
let social = document.querySelector('.social')
// let aboutRight = document.querySelector('.about-right')
let aboutLeft = document.querySelector('.about-text-side')
let projectInformation = document.querySelectorAll('.info')
let leftSocial = document.querySelector('.socialLeft')
let aboutProfile = document.querySelector('.about-profile')
let textarea = document.querySelector('textarea')
let projects = document.querySelectorAll('.projects')
let menus = document.querySelectorAll('.hidden')
let skills = document.querySelectorAll('.skill, input')
// let h3 = document.querySelector('.hi')
const { scrollTop } = document.documentElement




let observer = new IntersectionObserver((entries, appearScroll) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('active')

        } 
    })
}, {threshold: .3})

let removeObserver = new IntersectionObserver((entries, appearScroll) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.remove('hidden')

        } 
    })
}, {threshold: .3})
// PROJECT SCROLL ANIMATIONS

let info = document.querySelectorAll('.fade')


info.forEach(leftBox=>{
    observer.observe(leftBox)
})

menus.forEach( menu => {
    // removeObserver.observe(menu)
    menu.classList.remove('hidden')
})




let toggle = document.querySelector('.toggle')
let menuA = document.querySelector('.menu')
let nav_menu = document.querySelectorAll('.nav_mn')
let toggleCon = document.querySelector('.toggle-container')

toggleCon.addEventListener('click', e=>{
    toggle.classList.toggle('active')
    menusite.classList.toggle('active')
    menuA.classList.toggle('active')
    nav_menu.forEach(nav=>{
        nav.classList.toggle('show')
    })
})

nav_menu.forEach(nav =>{
    nav.addEventListener('click', e=>{
        nav_menu.forEach(nav_re =>{
            nav_re.classList.remove('active')
        })
        nav.classList.add('active')
    })
})

let fullName = document.querySelector('#fullname')
let email = document.querySelector('#email')
let body = document.querySelector('#message')






let mode = document.getElementById('mode')
let custome_mode = document.getElementById('custom-mode')
// let checkBox = document.getElementsBy
let box = document.getElementById('custom-switch-input')

console.log(mode)
if(mode){
    mode.addEventListener('click', e=>{
        document.body.classList.toggle('dark-mode')
        if(!document.body.classList.contains('dark-mode')){
            document.cookie = 'mode=; expires=thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            mode.innerHTML = `<path d="m2.72 0c-1.58.53-2.72 2.02-2.72 3.78 0 2.21 1.79 4 4 4 1.76 0 3.25-1.14 3.78-2.72-.4.13-.83.22-1.28.22-2.21 0-4-1.79-4-4 0-.45.08-.88.22-1.28z " fill="#000"/>`
        
        } else {
            document.cookie = 'mode=dark'
            mode.innerHTML = `<path d="m4 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5 1.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-6 2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z" fill="#fff"/>`
    
        }
    
        
    })
        
    
}

if(custome_mode){
    custome_mode.addEventListener('click', e=>{
        // console.log(e)

        if(e.target.classList.contains('custom-switch-input') && e.target.checked){
            console.log(e.target.checked)
            document.body.classList.add('dark-mode')
            document.cookie = 'mode=dark'
            mode.innerHTML = `<path d="m4 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5 1.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-6 2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z" fill="#fff"/>`

        } else {
            document.body.classList.remove('dark-mode')
            document.cookie = 'mode=; expires=thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            mode.innerHTML = `<path d="m2.72 0c-1.58.53-2.72 2.02-2.72 3.78 0 2.21 1.79 4 4 4 1.76 0 3.25-1.14 3.78-2.72-.4.13-.83.22-1.28.22-2.21 0-4-1.79-4-4 0-.45.08-.88.22-1.28z " fill="#000"/>`

        }
    })
} 



if(document.cookie){
    document.body.classList.add('dark-mode')
    box.checked = true
    mode.innerHTML = `<path d="m4 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5 1.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-6 2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z" fill="#fff"/>`
    console.log(box)
} else {
    mode.innerHTML = `<path d="m2.72 0c-1.58.53-2.72 2.02-2.72 3.78 0 2.21 1.79 4 4 4 1.76 0 3.25-1.14 3.78-2.72-.4.13-.83.22-1.28.22-2.21 0-4-1.79-4-4 0-.45.08-.88.22-1.28z " fill="#000"/>`
    box.checked = false
}

document.addEventListener('click', e=>{
    // console.log(e.target.classList[0])
    if(e.target.classList[0] != 'toggle' && e.target.classList[0] != 'toggle-container' && e.target.classList[0] != 'custom-switch-btn' && e.target.classList[0] != 'custom-switch-input'){
        menusite.classList.remove('active')
        toggle.classList.remove('active')
        menuA.classList.remove('active')
        nav_menu.forEach(nav=>{
            nav.classList.remove('show')
        })
    }
})




// SECTION SIDE
let classList = ['wrapper', 'section-about', 'section-skills', 'section-qualification', 'section-projects', 'section-contact']
let sectionObserver = new IntersectionObserver((obs)=>{
    obs.forEach((sec)=>{
        if(sec.isIntersecting){
            console.log(classList.indexOf(sec.target.classList[0]))
            nav_menu.forEach(nav=>{
                nav.classList.remove('active')
            })
            let index = classList.indexOf(sec.target.classList[0])
            
            nav_menu[index].classList.add('active')
        }
    })
}, {threshold: 0.2})

let sections = document.querySelectorAll('.section')

sections.forEach((section, index)=>{
    sectionObserver.observe(section)

})








