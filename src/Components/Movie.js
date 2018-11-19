import React from "react"
import "../ComponentStyles/Movie.css"
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Movie = (props) => {
    console.log(props.id)
    const { onlyTenMovies, onlyTenNewMovies, onlyTenHighRatingMovies, id } = props
    const thisMovie = onlyTenHighRatingMovies.filter(each => each.imdb_id === id)
    const thisOnlyTenNewMovies = onlyTenNewMovies.filter(each => each.imdb_id === id)
    const thisOnlyTenMovies = onlyTenMovies.filter(each => each.imdb_id === id)
    const url = "https://www.youtube.com/watch?v="
    return (
        <div>
            {thisMovie.map(each => <div>
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
            </div>
            )}
            {thisOnlyTenMovies.map(each => <div>
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
            </div>
            )}
            {thisOnlyTenNewMovies.map(each => <div>
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
            </div>
            )}
        </div>
    )
}

export default Movie;