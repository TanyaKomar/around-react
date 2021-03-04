import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar_overlay" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={currentUser?.avatar} alt="Profile avatar" />
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser?.name}</h1>
                        <button className="profile__btn-edit" type="button" aria-label="Edit profile" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{currentUser?.about}</p>
                </div>
                <button className="profile__btn-add" type="button" aria-label="Add new card" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery">
                {props.cards.map((card)=> (
                <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
                ))}
            </section>
        </main>

    );
}

export default Main;