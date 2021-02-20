import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

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


  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm name="avatar" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__input" id="avatar-input" type="url" name="link" placeholder="Image link"required/>
        <span className="popup__error link-input-error"></span>
        <button className="popup__button" type="submit" aria-label="Save avatar">Save</button>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input" id="name-input" type="text" name="name" placeholder="Name" minLength="2" maxLength="40" required/>
        <span className="popup__error name-input-error"></span>
        <input className="popup__input" id="about-input" type="text" name="about" placeholder="About me" minLength="2" maxLength="200" required/>
        <span className="popup__error about-input-error"></span>
        <button className="popup__button" type="submit" aria-label="Save profile info">Save</button>
      </PopupWithForm>

      <PopupWithForm name="place" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input" id="title-input" type="text" name="title" placeholder="Title" minLength="2" maxLength="30" required/>
        <span className="popup__error title-input-error"></span>
        <input className="popup__input" id="link-input" type="url" name="link" placeholder="Image link" required/>
        <span className="popup__error link-input-error"></span>
        <button className="popup__button" type="submit" aria-label="Create new card">Create</button>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Are you sure?" isOpen={false} onClose={closeAllPopups}>
        <button className="popup__button" type="submit" aria-label="Delete card">Yes</button>
      </PopupWithForm>

      <ImagePopup name="image"  card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      

      
    

      {/* <div className={isEditProfilePopupOpen?"popup popup_type_edit popup_open":"popup popup_type_edit"}>
          <div className="popup__content">
              <button className="popup__close" type="button" aria-label="Close popup"></button>
              <h3 className="popup__title">Edit profile</h3>
              <form className="popup__form" noValidate>
                  <label className="popup__field" htmlFor="name-input">
                      <input className="popup__input" id="name-input" type="text" name="name" placeholder="Name"
                          minLength="2" maxLength="40" required />
                      <span className="popup__error name-input-error"></span>
                  </label>
                  <label className="popup__field" htmlFor="about-input">
                      <input className="popup__input" id="about-input" type="text" name="about" placeholder="About me"
                          minLength="2" maxLength="200" required />
                      <span className="popup__error about-input-error"></span>
                  </label>
                  <button className="popup__button" type="submit"></button>
              </form>
          </div>
      </div> */}

      {/* <div className={isAddPlacePopupOpen?"popup popup_type_add popup_open":"popup popup_type_add"}>
          <div className="popup__content">
              <button className="popup__close" type="button" aria-label="Close popup"></button>
              <h3 className="popup__title">New place</h3>
              <form className="popup__form" noValidate>
                  <label className="popup__field" htmlFor="title-input">
                      <input className="popup__input" id="title-input" type="text" name="title" placeholder="Title"
                          minLength="2" maxLength="30" required />
                      <span className="popup__error title-input-error"></span>
                  </label>
                  <label className="popup__field" htmlFor="link-input">
                      <input className="popup__input" id="link-input" type="url" name="link" placeholder="Image link"
                          required />
                      <span className="popup__error link-input-error"></span>
                  </label>
                  <button className="popup__button" type="submit"></button>
              </form>
          </div>
      </div> */}
      {/* <div className="popup popup_type_delete">
          <div className="popup__content">
              <button className="popup__close" type="button" aria-label="Close popup"></button>
              <h3 className="popup__title">Are you sure?</h3>
              <form className="popup__form" id="delete-form" name="deleteForm" action="#" noValidate>
                  <button className="popup__button" type="submit">Yes</button>
              </form>
          </div>
      </div> */}
      {/* <div className={isEditAvatarPopupOpen?"popup popup_type_avatar popup_open":"popup popup_type_avatar"}>
          <div className="popup__content">
              <button className="popup__close" type="button" aria-label="Close popup"></button>
              <h3 className="popup__title">Change profile picture</h3>
              <form className="popup__form" noValidate>
                  <label className="popup__field" htmlFor="avatar-input">
                      <input className="popup__input" id="avatar-input" type="url" name="link" placeholder="Image link"
                          required />
                      <span className="popup__error link-input-error"></span>
                  </label>
                  <button className="popup__button" type="submit"></button>
              </form>
          </div>
      </div> */}
    </div>
  );
}

export default App;