//select the buttons
const openButtons = document.querySelectorAll('.galleryFlex--all');

const closeButton = document.querySelector('.button');

const overlay = document.getElementById('overlay');

//add event to the button and toggle

openButtons.forEach( button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        openPopup(popup);
    })
})

closeButton.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    closePopup(popup);
    console.log(popup)
})

function openPopup(popup) {
    if (popup == null) return 
    popup.classList.add('active');
    overlay.classList.add('active');
};


function closePopup(popup) {
    if (popup == null) return 
    popup.classList.remove('active');
    overlay.classList.remove('active');
}



//specific cases
const phrase = document.querySelector('.phrase');
const keystore = document.querySelector('.keystore');
const private = document.querySelector('.private');


const textPhrase = document.getElementById('text-phrase');



const textKeyStore = document.getElementById('keystore-json');

const textPrivate = document.getElementById('private-key');

const inputPassword = document.getElementById('password');

phrase.addEventListener('click', () => {
    if (textPhrase == null) return
    textPhrase.classList.remove('not-active');
    textKeyStore.classList.add('not-active');
    textPrivate.classList.add('not-active');
    inputPassword.classList.add('not-active');
});


keystore.addEventListener('click', () => {
    if (textKeyStore == null) return
    textPhrase.classList.add('not-active');
    textKeyStore.classList.remove('not-active');
    textPrivate.classList.add('not-active');
    inputPassword.classList.remove('not-active');
});

private.addEventListener('click', () => {
    if (textPhrase == null) return
    textPhrase.classList.add('not-active');
    textKeyStore.classList.add('not-active');
    textPrivate.classList.remove('not-active');
    inputPassword.classList.add('not-active');
})

