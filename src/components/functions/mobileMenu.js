export const enableMobileMenu = (menuStatus) => {
    const mobileMenuBackground = document.getElementById("mobile-menu-background");
    const mobileMenu = document.getElementById("mobile-menu");

    if(menuStatus){
        console.log("It is true");
        mobileMenuBackground.style.display = 'block';
        mobileMenu.style.display = 'block';
    } else {
        console.log("It is false");
        mobileMenuBackground.style.display = 'none';
        mobileMenu.style.display = 'none';
    }
}