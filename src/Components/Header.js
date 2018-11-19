import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "../ComponentStyles/Header.css";
library.add(faSearch);
library.add(faBell);
library.add(faPlay);
library.add(faPlus);
const Header = (props) => {
    return(
        <div className = "navbar">
            <nav>
                <h2>FAMFLIX</h2>
                <ul className ="firstUl">
                    <li><a href="#">Home</a></li>
                    <li><a href="#firstRow">Movies</a></li>
                    <li>Recently Added</li>
                    <li>My List</li>
                </ul>
                <ul className="secondUl">
                    <li id="search" onClick = {props.change}><FontAwesomeIcon icon="search" /></li>
                    {/* <input type = "text" id="searchTheMovie" value=""/> */}
                    <li>KIDS</li>
                    <li>DVD</li>
                    <li><FontAwesomeIcon icon="bell"/></li>
                </ul>
            </nav>
            <div className="film-advertising">
                <div className="intro">
                    <h2>A NETFLIX FILM</h2>
                    <h1>OUTLAW</h1>
                    <h1>KING</h1>
                    <div id="header-button">
                    <button><FontAwesomeIcon icon="play"/> Play</button>
                    <button><FontAwesomeIcon icon="plus"/> My List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;