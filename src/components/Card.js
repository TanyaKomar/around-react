import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    } 

    return (
        <div className="card">
              <img className="card__image" src={props.card.link} alt="Card" onClick={handleClick}/>
              <div className="card__place">
                  <h2 className="card__title">{props.card.name}</h2>
                  <div className="card__like-container">
                      <button className="card__btn-like" type="button" aria-label="Like"></button>
                      <span className="card__like-counter">{props.card.likes.length}</span>
                  </div>
              </div>
              <button className="card__btn-delete" type="button" aria-label="Delete"></button>
          </div>
    )
}

export default Card;