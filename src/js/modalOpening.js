import { refs } from './refs';
import { addIsHidden, removeIsHidden } from './isHidden';
import { authEntranceBtnHandler, signUpBtnHandler } from './auth';

export function addModalOpenListeners() {
    if(refs.modalOpenBtns.length === 0) {
        return;
    } else if(refs.modalOpenBtns.length > 1) {
        refs.modalOpenBtns.forEach((btn) => {          

            switch(btn.dataset.modalOpen) {
                case 'auth':
                btn.addEventListener('click', openAuthModal);
                break;

                case 'news':
                btn.addEventListener('click', openNewsModal);
                break;

                case 'developers':
                btn.addEventListener('click', openDevelopersModal);
                break;
                
            }
        });        
    } else {
        switch(refs.modalOpenBtns[0].dataset.modalOpen) {
            case 'auth':
            refs.modalOpenBtns[0].addEventListener('click', openAuthModal);
            break;

            case 'news':
            refs.modalOpenBtns[0].addEventListener('click', openNewsModal);
            break;

            case 'developers':
            refs.modalOpenBtns[0].addEventListener('click', openDevelopersModal);
            break;
            
        }
    
    };
};

export function openAuthModal() {
    removeIsHidden(refs.authModal);
    refs.authEntranceBtn.addEventListener('click', authEntranceBtnHandler);
    refs.authRegistrationBtn.addEventListener('click', signUpBtnHandler);
    document.addEventListener( 'keyup', authWithEnter);

};

export function closeAuthModal() {
    addIsHidden(refs.authModal);
    refs.authEntranceBtn.removeEventListener('click', authEntranceBtnHandler);
    refs.authRegistrationBtn.addEventListener('click', signUpBtnHandler);
    document.removeEventListener( 'keyup', authWithEnter);
};

export function openNewsModal() {
    
};

export function closeNewsModal() {
    
};

export function openDevelopersModal() {
    refs.developerModal.addEventListener('click', closeDeveloperModalOnMouse);
    refs.developerModal.classList.remove('is-hidden')

};

export function closeDevelopersModal() {
    refs.developerModal.classList.add('is-hidden')
};

function authWithEnter(e) {
    if(e.code === 'Enter' ) {
        authEntranceBtnHandler(e);
        if(localStorage.auth === "yes") {
            document.removeEventListener('keyup', authWithEnter);
        }
    };
}

function closeDeveloperModalOnMouse(e) {
    console.log("close");
        if(e.target === e.currentTarget) {
            closeDevelopersModal();
        }
    
    }
    