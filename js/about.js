// variables
const mobMenuBtn = document.querySelector('.mobile_menu_btn')
const mobMenu = document.querySelector('.mobile_menu')
const menuOpenIcon = document.querySelector('.menu_open_icon')
const menuCloseIcon = document.querySelector('.menu_close_icon')
const mobMenuLink = document.querySelectorAll('.mob_menu_link')
const industriesLink = document.querySelector('.internal_industries')
const industriesLinks = document.querySelector('.industries_links')
const categoryName = document.querySelector('.category_name')

// event listeners
document.addEventListener('DOMContentLoaded', function(){
    animateCategoryHeads(categoryName, 1500)
})
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
industriesLink.addEventListener('mouseover', showindustriesMenu)
industriesLink.addEventListener('mouseout', hideindustriesMenu)

// functions
function animateCategoryHeads(head, delay){
    setTimeout(() => {
        head.classList.add('text_active')
    }, delay);
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
    pageScrolling('hidden')
}
function hideMenuAndLinks(){
    mobMenuLink.forEach(menuLink => {
        menuLink.classList.remove('show_mob_menu_link')
    });
    setTimeout(() => {
        mobMenu.classList.remove('mob_menu_active')
    }, 600);
    pageScrolling('scroll')
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
function pageScrolling(scrollVal){
    document.documentElement.style.overflowY = scrollVal;
}
// navigation
function showindustriesMenu(){
    industriesLinks.classList.add('show_industry_links')
}
function hideindustriesMenu(){
    industriesLinks.classList.remove('show_industry_links')
}