// VARIABLES ***********************************************************
const mobMenuBtn = document.querySelector('.mobile_menu_btn')
const mobMenu = document.querySelector('.mobile_menu')
const menuOpenIcon = document.querySelector('.menu_open_icon')
const menuCloseIcon = document.querySelector('.menu_close_icon')
const mobMenuLink = document.querySelectorAll('.mob_menu_link')
const navLinks = document.querySelectorAll('.nav_links')
const headerIndustries = document.querySelector('.nav_industries')

// category container
const industriesLink = document.querySelector('.internal_industries')
const industriesLinks = document.querySelector('.industries_links')
const scrollIndustryTabs = document.querySelector('.scroll_industry_tabs')
const scrollIndustryTab = document.querySelectorAll('.scroll_industry_tab')
const categoryName = document.querySelector('.category_name')
const industryTab = document.querySelectorAll('.industry_tab')
const projectsWrap = document.querySelectorAll('.project_cards_wrap')
const projectCards = document.querySelectorAll('.project_card')
const projectCardInside = document.querySelectorAll('.project_card_inside')

// EVENTLISTENERS ***********************************************************
// on load
document.addEventListener('DOMContentLoaded', function(){
    // animateCategoryHeads(projectHead, 1500)
    animateCategoryHeads(categoryName, 1500)
    projectCardScale()
})
document.addEventListener('scroll', showIndustryTabs)
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

// project cards
projectCards.forEach(projectCard => {
    projectCard.addEventListener('click', function(cardClicked){
        activateProjectCard(cardClicked)
    })
});
industryTab.forEach((indusTab) => {
    indusTab.addEventListener('click', function(tabElement){
        changeProjects(tabElement, industryTab, scrollIndustryTab)
    })
})
scrollIndustryTab.forEach((scrollIndusTab) => {
    scrollIndusTab.addEventListener('click', function(tabElement){
        changeProjects(tabElement, scrollIndustryTab, industryTab)
        scrollPageTop()
    })
})

// FUNCTIONS ***********************************************************
function showindustriesMenu(){
    industriesLinks.classList.add('show_industry_links')
}
function hideindustriesMenu(){
    industriesLinks.classList.remove('show_industry_links')
}
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
function animateCategoryHeads(head, delay){
    setTimeout(() => {
        head.classList.add('text_active')
    }, delay);
}
function projectCardScale(){
    setTimeout(() => {
        projectsWrap.forEach((projectWrap) => {
            projectWrap.classList.add('project_wrap_position')
        })
        projectCards.forEach(projectCard => {
            projectCard.classList.add('scale_project_cards')
        });
        industryTab.forEach((industryTab3) => {
            industryTab3.classList.add('scale_project_cards')
        })
    }, 2000);

}
function activateProjectCard(cardClicked){
    let clickedCard = cardClicked.target
    let clickedCardInside = clickedCard.querySelector('.project_card_inside')
        clickedCardInside.classList.toggle('project_card_active')
        setTimeout(() => {
            clickedCardInside.classList.remove('project_card_active')
        }, 9000);

}
function changeProjects(tabElement, industryTabArr, industryTabArr2){
    industryTabArr.forEach((industryTab2) => {
        industryTab2.classList.remove('industryTabActive')
    })
    industryTabArr2.forEach((industryTab3) => {
        industryTab3.classList.remove('industryTabActive')
    })
    findClickedTab(tabElement)
}
function findClickedTab(tabElement){
    let clickedTab = tabElement.currentTarget
    let clickedTabName = clickedTab.dataset.name
    let allMatchTabs = document.querySelectorAll(`p[data-name="${clickedTabName}"]`)
    allMatchTabs.forEach(matchTab => {
        matchTab.classList.add('industryTabActive')
    });

        showClickedTabProjects(clickedTabName)
}
function showClickedTabProjects(clickedTabName){
    projectsWrap.forEach((project) => {
        if(project.dataset.name == clickedTabName){
            if(!(project.classList.contains('project_wrap_active'))){
                project.classList.add('project_wrap_active')
            }
            else{
                return false;
            }
        }
        else{
            project.classList.remove('project_wrap_active')
        }
    })
}
function showIndustryTabs(){
    if(scrollY > 40){
        scrollIndustryTabs.classList.add('show_industry_links')
    }
    else{
        scrollIndustryTabs.classList.remove('show_industry_links')
    }
}
function scrollPageTop(){
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}