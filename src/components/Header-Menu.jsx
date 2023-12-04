//------------------------
export default function Header_Menu(props){
    return(
        <div id = "header-menu">
            <div id = "header-icon"></div>
            <ul id = "header-menu-items">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
            <div id = "header-hamburguer-menu" onClick = {props.menuStatus}>
                <div className = "line"></div>
                <div className = "line"></div>
                <div className = "line"></div>
            </div>
        </div>
    )
}