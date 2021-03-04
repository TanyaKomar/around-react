import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [name, setName] = React.useState();
    const [link, setLink] = React.useState();

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name,
            link
        });
    }

    return(
        <PopupWithForm name="place" title="New place" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <input className="popup__input" id="title-input" type="text" name="title" placeholder="Title" minLength="2" maxLength="30" required onChange={handleNameChange}/>
        <span className="popup__error title-input-error"></span>
        <input className="popup__input" id="link-input" type="url" name="link" placeholder="Image link" required onChange={handleLinkChange}/>
        <span className="popup__error link-input-error"></span>
        <button className="popup__button" type="submit" aria-label="Create new card">Create</button>
      </PopupWithForm>
    )
}

export default AddPlacePopup;