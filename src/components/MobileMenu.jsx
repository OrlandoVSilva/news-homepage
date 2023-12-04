import React, {useState} from "react";
import { enableMobileMenu } from "./functions/mobileMenu";
//------------------------
export default function MobileMenu(){
    /* Hooks */
    const [mobileMenu, setMobileMenu] = useState(true);
    /* Hooks */

    /* Methods */
    function changeMobileMenuStatus(){
        //console.log('Before click:', mobileMenu);
        setMobileMenu(false);
        console.log('After click:', mobileMenu);
        enableMobileMenu(mobileMenu);
    }
    /* Methods */

    return(
        <div id = "mobile-menu">
            <div id = "mobile-menu-close">
                <div id = "mobile-menu-icon" onClick = {changeMobileMenuStatus}></div>
            </div>
            <div id = "mobile-menu-menu-options">
                <ul id = "menu-options-list">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        </div>
    )
}