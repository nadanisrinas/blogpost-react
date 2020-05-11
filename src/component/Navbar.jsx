import React ,{Fragment} from "react"
import "../assets/scss/Navbar.scss"
import {BrowserRouter as Router, Route, Link, BrowserRouter} from "react-router-dom"
import BlogPost from "../component/BlogPost"
import InputPost from "../component/InputPost"

const Navbar = () => {
    return(
        <div>
            <nav Name="navbar navbar-expand-lg section-nav">
                <a className="navbar-brand section-nav-logo" href="#">React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to={'/'} className="section-nav-link nav-link" href="#">Input Post <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/InputPost'} className="section-nav-link nav-link" href="#">Posts</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar