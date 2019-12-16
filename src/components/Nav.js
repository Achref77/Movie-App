import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import logo from '../components/logo.png'

const Nav = ({ filterbyname, changeRating , rate }) => {

    return (

        <div className="navMovi">
            <img className="logo" src={logo} />
            <input type="search" id="search" placeholder="Search..." onChange={(e) => filterbyname(e.target.value)} />
            <StarRatings
                rating={rate}
                starDimension={'15px'}
                starSpacing={'1px'}
                starRatedColor="blue"
                changeRating={(newRating, name) => changeRating(newRating, name)}
                numberOfStars={5}
                name='rating'
            />

        </div>

    )
}

export default Nav
