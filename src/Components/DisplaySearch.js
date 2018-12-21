import React from "react";
import "../ComponentStyles/DisplaySearch.css"

const DisplaySearch = (props) => {
    return (
        <div onClick={() => props.getMovie(props.id)} className = "search-image-container">
            <div style={{ backgroundImage: `url(${props.image})` }} className="search-images"></div>
        </div>
    )
}

export default DisplaySearch