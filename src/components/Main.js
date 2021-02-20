import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
        .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch((err) => {
            console.error(err);
        });
    }, [userName, userDescription, userAvatar]);

    React.useEffect(() => {
        api.getCardList()
        .then((cards) => {
            console.log(cards);
            setCards(cards);
        })
        .catch((err) => {
            console.error(err);
        });
    },[]);

    const Gallery = ()=>{
        return cards.map((card)=> <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar_overlay" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Profile avatar" />
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__btn-edit" type="button" aria-label="Edit profile" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button className="profile__btn-add" type="button" aria-label="Add new card" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery">
                <Gallery/>
            </section>
        </main>

    );
}

export default Main;