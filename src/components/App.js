import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [cards, setCards] = React.useState([]);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [currentUser, setCurrentUser] = React.useState();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }
  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
      })
    closeAllPopups(); 
  }
  function handleUpdateAvatar({ avatar }) {
    api.setUserAvatar({avatar})
      .then((res) => {
        setCurrentUser(res);
      })
    closeAllPopups();
  }

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
        console.error(err);
    });
}, [currentUser?._id]);

function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    });
}

function handleCardDelete(card) {
    api.removeCard(card._id)
    .then (() => {
        setCards(cards.filter((c) => c._id !== card._id))
    })
    .catch((err) => {
        console.error(err);
    });
}

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

function handleAddPlace({name, link}) {
  api.addCard({ name, link })
  .then((newCard) => {
    setCards([newCard, ...cards]);
  })
  closeAllPopups();
}

React.useEffect(() => {
  setCards(cards);
}, [cards])

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />

      {isEditAvatarPopupOpen&&
       <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
      }

     {isEditProfilePopupOpen&&
      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      /> 
      }

      {isAddPlacePopupOpen &&
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />
      }

      <PopupWithForm name="delete" title="Are you sure?" isOpen={false} onClose={closeAllPopups}>
        <button className="popup__button" type="submit" aria-label="Delete card">Yes</button>
      </PopupWithForm>

      <ImagePopup name="image"  card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;