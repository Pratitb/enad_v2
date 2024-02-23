// VARIABLES ***********************************************************
// header
const navLinks = document.querySelectorAll('.nav_links')
const keyProjectsNavLink = document.querySelector('.nav_key_projects')
const industriesNavLink = document.querySelector('.nav_industries')
const mobMenuBtn = document.querySelector('.mobile_menu_btn')
const mobMenu = document.querySelector('.mobile_menu')
const menuOpenIcon = document.querySelector('.menu_open_icon')

// hero section
const heroSection = document.querySelector('.hero')
const heroContent = document.querySelector('.hero_container')
const heroCta = document.querySelector('.hero_cta')

// industries section
const industriesSection = document.querySelector('.industries')
const stickyIndustries = document.querySelector('.sticky_industries')

// key projects
const keyProjectsSection = document.querySelector('.key_projects')

// EVENT LISTENERS ***********************************************************
// document event
document.addEventListener('scroll', function(){

    const industries = industriesSection.getBoundingClientRect()
    // fixed distance from top of page 750px
    const indusOffTop = industriesSection.offsetTop

    // industries section height
    let industriesHeight = (industries.height)

    // document scrolled
    var scrolled = document.scrollingElement.scrollTop;
    
    if(scrolled > (indusOffTop + industriesHeight) ){
        // console.log('industries not in viewport');
        stickyIndustries.classList.add('show_sticky_industries')
    }
    else{
        // console.log('industries in viewport');
        stickyIndustries.classList.remove('show_sticky_industries')
    }
})
document.addEventListener('DOMContentLoaded', animateHero)

// header
keyProjectsNavLink.addEventListener('click', scrollToKeyProjects)
industriesNavLink.addEventListener('click', scrollToIndustries)
mobMenuBtn.addEventListener('click', function(){
    openCloseMenu()
    showMenuLinks()
    changeIcon()
})

// atf
heroCta.addEventListener('click', scrollToKeyProjects)

// FUNCTIONS ***********************************************************
// header
// cta scroll
function scrollToIndustries(){
    industriesSection.scrollIntoView()
}
function openCloseMenu(){
    mobMenu.classList.toggle('mob_menu_active')
}

// atf
// hero section animation
function animateHero(){
    heroSection.classList.add('activeSection')
    setTimeout(() => {
        heroContent.classList.add('text_active')
    }, 1800);
}
// hero cta scroll
function scrollToKeyProjects(){
    keyProjectsSection.scrollIntoView()
}