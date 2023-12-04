import Header_Menu from "./Header-Menu";
import React, {useState} from "react";
import { enableMobileMenu } from "./functions/mobileMenu";
//------------------------
export default function Container(){
    /* Hooks */
    const [mobileMenu, setMobileMenu] = useState(false);
    /* Hooks */

    /* Methods */
    function changeMobileMenuStatus(){
        //console.log('Before click:', mobileMenu);
        setMobileMenu(!mobileMenu);
        console.log('After click:', mobileMenu);
        enableMobileMenu(mobileMenu);
    }
    /* Methods */

    return(
        <div className = "container">
            {/* Header Menu */}
            <div className = "item-red item-header">
                <Header_Menu menuStatus = {changeMobileMenuStatus}/>
            </div>
            {/* Header Menu */}

            <div className = "item-red item-body-main-news inner-container-main-news">
                {/* Main-News-Image */}
                <div className = "item-blue" id = "main-news-main-image"></div>
                {/* Main-News-Image */}

                {/* Main-News-Title*/}
                <div className = "item-blue" id = "main-news-title">
                    <p>The Bright Future of Web 3.0?</p>
                </div>
                {/* Main-News-Title*/}

                {/* Main-News-Description & Main-News-Read-More-Button*/}
                <div className = "item-blue" id = "main-news-description">
                    <div id = "description-text">
                        <p>
                            We dive into the next evolution of the web that
                            claims to put the power of the platforms back
                            into the hands of the people. But is it really
                            fulfilling its promise?
                        </p>
                    </div>
                    <div id = "description-read-more-button">
                        <button id = "read-more-button"><p>Read More</p></button>
                    </div>
                </div>
            </div>
            {/* Main-News-Description & Main-News-Read-More-Button*/}

            {/* Recent-News */}
            <div className = "item-red item-body-recent-news">
                <div className = "recent-news-card"> {/* first*/}
                    <h2>New</h2>
                </div>
                <div className = "recent-news-card"> {/* second*/}
                    <p>Hydrogen VS Eletric Cars</p>
                    <p>Will hydrogen-fueled cars ever catch up to EVS?</p>
                </div>
                <hr></hr>
                <div className = "recent-news-card"> {/* third*/}
                    <p>The Downsides of Al Artistry</p>
                    <p>What are the possible adverse effects of on-demand Al image generation?</p>
                </div> 
                <hr></hr>
                <div className = "recent-news-card"> {/* fourth*/}
                    <p>Is VC Funding Drying Up?</p>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div> 
            </div>
            {/* Recent-News */}

            {/* Footer */}
            <div className = "item-red item-footer">
                <div className = "footer-card">
                    <div className = "footer-card-image" id = "footer-image-1"></div>
                    <div className = "footer-card-number" id = "footer-number-1">
                        <span>01</span>
                    </div>
                    <div className = "footer-card-description" id = "footer-description-1">
                        <p>Reviving Retro PCs</p>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className = "footer-card">
                    <div className = "footer-card-image" id = "footer-image-2"></div>
                    <div className = "footer-card-number" id = "footer-number-2">
                        <span>02</span>
                    </div>
                    <div className = "footer-card-description" id = "footer-description-2">
                        <p>Top 10 Laptops of 2022</p>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className = "footer-card">
                    <div className = "footer-card-image" id = "footer-image-3"></div>
                    <div className = "footer-card-number" id = "footer-number-3">
                        <span>03</span>
                    </div>
                    <div className = "footer-card-description" id = "footer-description-3">
                        <p>The Growth of Gaming</p>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
            {/* Footer */}
        </div>
    )
}