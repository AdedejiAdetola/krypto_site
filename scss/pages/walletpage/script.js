//select the buttons
const openButtons = document.querySelectorAll('.galleryFlex--all');

const closeButton = document.querySelectorAll('.button');

const overlay = document.getElementById('overlay');

//add event to the button and toggle

openButtons.forEach( button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        openPopup(popup);
    })
})

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        closePopup(popup);
    })
})

//if input field is not empty, then continue

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


//continue button
const submit1 = document.getElementById('submit1');

const submit2 = document.getElementById('submit2');

const submit3 = document.getElementById('submit3');

phrase.addEventListener('click', () => {
    if (textPhrase == null) return
    textPhrase.classList.remove('not-active');
    textKeyStore.classList.add('not-active');
    textPrivate.classList.add('not-active');
    inputPassword.classList.add('not-active');
    //for continue button
    submit1.style.display="block";
    submit2.style.display="none";
    submit3.style.display="none";
});


keystore.addEventListener('click', () => {
    if (textKeyStore == null) return
    textPhrase.classList.add('not-active');
    textKeyStore.classList.remove('not-active');
    textPrivate.classList.add('not-active');
    inputPassword.classList.remove('not-active');
    //for continue button
    submit1.style.display="none";
    submit2.style.display="block";
    submit3.style.display="none";
});

private.addEventListener('click', () => {
    if (textPhrase == null) return
    textPhrase.classList.add('not-active');
    textKeyStore.classList.add('not-active');
    textPrivate.classList.remove('not-active');
    inputPassword.classList.add('not-active');
    //for continue button
    submit1.style.display="none";
    submit2.style.display="none";
    submit3.style.display="block";
})

