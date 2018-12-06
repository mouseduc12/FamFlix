import React from "react"
import DisplaySearch from "./DisplaySearch";
import "../ComponentStyles/Search.css";
import Modal from "react-modal"

const Search = (props) => {
    const url = "https://www.youtube.com/watch?v="
    return (
        <div>
            <h1>Search: </h1>
            <div className="displayed-images-contain">
                {props.searchData && props.searchData.map(each => <DisplaySearch image={each.ImageURL} getMovie={props.getMovie} key={each.imdb_id} id={each.imdb_id} />)}}
                </div>
            {props.search && props.search.map(each =>
            <div>
                <Modal
                    isOpen={props.modalIsOpen}
                    onRequestClose={props.closeModal}
                    className="modal">
                    <button onClick={props.closeModal}>X</button>
                    <div className="movie-information">
                        <div className="poster" style={{ backgroundImage: `url(${each.ImageURL})` }}></div>
                        <div className="information">
                            <h1>Title: {each.Title}</h1>
                            <h2>Categories: {each.Categories}</h2>
                            <h2>Description: {each.summary}</h2>
                            <h2>Released Date: {each.movie_year}</h2>
                            <h2>IMDB: {each.imdb_rating}</h2>
                            <h2>Times: {each.runtime} minutes</h2>
                            <a href={url + each.ytid} target="_blank">Watch Trailer</a>
                        </div>
                    </div>
                </Modal>
                </div>)}
        </div>
    )
}
export default Search;