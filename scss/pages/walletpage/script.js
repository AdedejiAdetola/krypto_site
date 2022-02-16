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


phrase.addEventListener('click', () => {
    

    const targetPhrase = document.getElementById('text-phrase');

    const targetKey = document.getElementById('private-key');

    const targetKeyStore = document.getElementById('keystore-json');

    const targetClassP = targetPhrase.classList;

    const targetClassKS = targetKeyStore.classList;

    const targetClassPk = targetKey.classList;

    if (targetClassP == 'not-active') {
        console.log('omo');
        targetClassP.remove('not-active');
        targetClassKS.add('not-active');
        targetClassPk.add('not-active')

    }
})

keystore.addEventListener('click', () => {
    const targetPhrase = document.getElementById('text-phrase');

    const targetKey = document.getElementById('private-key');

    const targetKeyStore = document.getElementById('keystore-json');

    const targetClassP = targetPhrase.classList;

    const targetClassKS = targetKeyStore.classList;

    const targetClassPk = targetKey.classList;

    if (targetClassKS == null) {
        console.log('omo');
        targetClassKS.remove('not-active');
        targetClassP.add('not-active');
        targetClassPk.add('not-active')

    }
})