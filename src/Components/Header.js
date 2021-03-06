import React, { Fragment } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus, faPlayCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import "../ComponentStyles/Header.css";
import { Link } from "react-router-dom"
library.add(faSearch, faBars);
library.add(faBell);
library.add(faPlay);
library.add(faPlus);
library.add(faPlayCircle);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            fixed: "",
            isChecked: false
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleWindow)
    }
    componentWillUnmount() {
        window.removeEventListener("scoll", this.handleWindow)
    }

    handleWindow = () => {
        if (window.scrollY > 10) {
            this.setState({
                color: "rgba(1,1,1,1)",
                fixed: "fixed"
            })
        } else {
            this.setState({
                color: "",
                fixed: ""
            })
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked,
        })
        )
    }

    render() {
        return (
            <div className="navbar">
                <nav style={{ background: this.state.color, position: this.state.fixed, width: "100%" }}>
                    {this.props.width && <p
                        className="display-bars"
                        onClick={this.handleClick}><FontAwesomeIcon icon="bars" className="responsive" />
                    </p>}

                    <h2><Link to="/" style={{ color: "hotPink" }}>FAMFLIX</Link></h2>
                    {!this.props.width &&
                        <ul className="firstUl">
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#firstRow">Movies</a></li>
                            <li> <Link style={{ color: this.props.searchData.length > 1 ? "hotPink" : "rgba(255,255,255,1)" }} to="/search">My Search</Link></li>
                        </ul>
                    }
                    <ul className="secondUl">
                        <li id="search" onClick={this.props.handleToggle}><FontAwesomeIcon icon="search" /></li>
                        {this.props.toggle &&
                            <div>
                                <form onSubmit={this.props.handleSubmit}>
                                    <input
                                        type="number"
                                        value={this.props.text}
                                        name="text"
                                        className="text"
                                        onChange={this.props.handleChange}
                                        placeholder="Movie Year"
                                        required />
                                </form>
                            </div>
                        }
                        {!this.props.width &&
                            <Fragment>
                                <li>KIDS</li>
                                <li>DVD</li>
                                <li><FontAwesomeIcon icon="bell" /></li>
                            </Fragment>
                        }
                    </ul>
                    {this.props.width &&
                        <Fragment>
                            {this.state.isChecked &&
                                <ul className="is-checked">
                                    <li><Link to="/" style ={{color: "white"}}>Home</Link></li>
                                    <li><Link style={{ color: this.props.searchData.length > 1 ? "hotPink" : "rgba(255,255,255,1)" }} to="/search">My Search</Link></li>
                                </ul>
                            }
                        </Fragment>
                    }
                </nav>
                <div className="film-advertising">
                    <div className="intro">
                        <h2>A NETFLIX FILM</h2>
                        <h1>OUTLAW</h1>
                        <h1>KING</h1>
                        <div id="header-button">
                            <button><FontAwesomeIcon icon="play" /> Play</button>
                            <button><FontAwesomeIcon icon="plus" /> My List</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;