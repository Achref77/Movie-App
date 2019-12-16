import React from 'react';
import StarRatings from 'react-star-ratings';

import ab from '../components/b.jpg'

function ListMovi(props) {



  return props.loading ? <h1>Is loading </h1> : (
    <div className="filmdesc">

      <div className="imgslien">
        {props.listMovi.map(el =>
          <div className="imglien">
            <img className="log" src={el.imgfilm} />
            <div className="descrp">
              <div>
                <p>{el.name}</p>
              </div>
              <a href>
                <button class="ajou" OnClick={el.boton}><img className="strming" src="https://posabilities.ca/wp-content/uploads/2018/01/youtube.png" /></button>
              </a>
            </div>
            <div>
              <StarRatings className="star"
                rating={Number(el.rate)}
                starDimension={'15px'}
                starSpacing={'1px'}
                starRatedColor="blue"
                changeRating={(newRating, name) => props.changeRating(newRating, name, el.index)}
                numberOfStars={5}
                name='rating'
              />
            </div>
          </div>
        )}


      </div>
      <div className="descrition">
        <img className="imag" src={ab} />

      </div>
    </div>

  )
}
export default ListMovi