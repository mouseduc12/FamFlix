import React from 'react';
import "../ComponentStyles/Info.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from "./Movie";
import Modal from 'react-modal';

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            sortedMovies: [],
            moviesYear: [],
            anotherMovies: [],
            id:'',
            modalIsOpen: false
        }
    }
    componentDidMount() {
        const url = 'https://hydramovies.com/api-v2/?source=https://hydramovies.com/api-v2/current-Movie-Data.csv';
        const forwarder = 'https://vschool-cors.herokuapp.com?url='
        axios.get(forwarder + url).then(res => {
            console.log(res.data);
            const movies = res.data;
            this.setState({ movies }, () => {
                this.sortMoviesByRating(this.state.movies)
                this.sortMoviesByYear(this.state.movies);
                this.getTweleDatas(this.state.movies)
            })
        })
    }
    closeModal = () => {
        this.setState({modalIsOpen: false})
    }
    sortMoviesByYear = movies => {
        let newTenMovies = movies.slice()
        this.setState({ moviesYear: newTenMovies.filter(eachObj => Number(eachObj.movie_year) >= 2018).splice(0, 12) })
    }
    getMovie = (e) => {
        e.preventDefault();
        this.setState({
            id: e.target.value,
            modalIsOpen: true})
    }
    sortMoviesByRating = movies => {
        let newTenHighRatingMovies = movies.slice()
        this.setState({ sortedMovies: newTenHighRatingMovies.filter(arr => Number(arr.imdb_rating) > 8).splice(0, 12) })
    }
    getTweleDatas = movies => {
        let newMovies = movies.slice();
        this.setState({
            anotherMovies: newMovies.splice(newMovies.length-15, 12),
        })
    }
    render() {
        const onlyTenMovies = this.state.anotherMovies
        const onlyTenHighRatingMovies = this.state.sortedMovies
        const onlyTenNewMovies = this.state.moviesYear
        return (
            <div>
            <Movie id = {this.state.id} onlyTenMovies={onlyTenMovies} onlyTenNewMovies={onlyTenNewMovies} onlyTenHighRatingMovies={onlyTenHighRatingMovies} modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
            <div className="playing">
                <p>Popular:</p>
                <div className="firstRow" id="firstRow">
                    <div className="trendingNow">
                        {onlyTenHighRatingMovies.map(each => {
                            return <div style={{ backgroundImage: `url(${each.ImageURL})` }} className="img">
                                <button value={each.imdb_id} onClick ={this.getMovie}><FontAwesomeIcon icon="play"/></button>
                            </div>
                            
                        })}
                    </div>
                </div>
                <p>Just Released:</p>
                <div className="secondRow">
                    <div className="trendingNow">
                        {onlyTenNewMovies.map(eachObj => <div style={{ backgroundImage: `url(${eachObj.ImageURL})` }} className="img"><button value={eachObj.imdb_id} onClick ={this.getMovie}><FontAwesomeIcon icon="play" /></button></div>)}
                    </div>
                </div>
                <p>Trending Now:</p>
                <div className="thirdRow">
                    <div className="trendingNow">
                        {onlyTenMovies.map(movie => <div style={{ backgroundImage: `url(${movie.ImageURL})` }} className="img"><button value={movie.imdb_id} onClick ={this.getMovie}><FontAwesomeIcon icon="play" /></button></div>)}
                    </div>
                </div>
            </div>
         </div>   
        )
    }
}
export default Info;