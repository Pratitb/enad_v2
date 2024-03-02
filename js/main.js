// VARIABLES ***********************************************************
// header
const navLinks = document.querySelectorAll('.nav_links')
const keyProjectsNavLink = document.querySelector('.nav_key_projects')
const industriesNavLink = document.querySelector('.nav_industries')
const mobMenuBtn = document.querySelector('.mobile_menu_btn')
const mobMenu = document.querySelector('.mobile_menu')
const menuOpenIcon = document.querySelector('.menu_open_icon')
const menuCloseIcon = document.querySelector('.menu_close_icon')
const mobMenuLink = document.querySelectorAll('.mob_menu_link')

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
document.addEventListener('DOMContentLoaded', animateHero)
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
keyProjectsNavLink.addEventListener('click', scrollToKeyProjects)
industriesNavLink.addEventListener('click', scrollToIndustries)
mobMenuBtn.addEventListener('click', function(){
    openCloseMenu()
    changeIcon()
})
mobMenuLink.forEach(menuLink => {
    menuLink.addEventListener('click', function(){
        openCloseMenu()
        hideMenuAndLinks()
        changeIcon()
    })
});
heroCta.addEventListener('click', scrollToKeyProjects)

// FUNCTIONS ***********************************************************
// header
// cta scroll
function scrollToIndustries(){
    industriesSection.scrollIntoView()
}

// header
function openCloseMenu(){
    if(!(mobMenu.classList.contains('mob_menu_active'))){
        mobMenu.classList.add('mob_menu_active')
        showMenuLinks()
    }
    else{
        hideMenuAndLinks()
    }
}
function showMenuLinks(){
    setTimeout(() => {
        mobMenuLink.forEach(menuLink => {
            menuLink.classList.add('show_mob_menu_link')
        });
    }, 400);
}
function hideMenuAndLinks(){
    mobMenuLink.forEach(menuLink => {
        menuLink.classList.remove('show_mob_menu_link')
    });
    setTimeout(() => {
        mobMenu.classList.remove('mob_menu_active')
    }, 600);
}
function changeIcon(){
    if(menuOpenIcon.classList.contains('show_mob_icon')){
        menuOpenIcon.classList.remove('show_mob_icon')
        menuCloseIcon.classList.add('show_mob_icon')
    }
    else{
        setTimeout(() => {
            menuOpenIcon.classList.add('show_mob_icon')
            menuCloseIcon.classList.remove('show_mob_icon')
        }, 1000);
    }
}

// atf
function animateHero(){
    // heroSection.classList.add('activeSection')
    setTimeout(() => {
        heroContent.classList.add('text_active')
    }, 300);
}
function scrollToKeyProjects(){
    keyProjectsSection.scrollIntoView()
}