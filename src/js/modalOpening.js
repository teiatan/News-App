import { refs } from './refs';
import { addIsHidden, removeIsHidden } from './isHidden';
import { authEntranceBtnHandler } from './auth';

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
    document.addEventListener( 'keyup', authWithEnter);
};

export function closeAuthModal() {
    addIsHidden(refs.authModal);
    refs.authEntranceBtn.removeEventListener('click', authEntranceBtnHandler);
    document.removeEventListener( 'keyup', authWithEnter);
};

export function openNewsModal() {
    
};

export function openDevelopersModal() {
    
};

function authWithEnter(e) {
    if(e.code === 'Enter' ) {
        authEntranceBtnHandler(e);
        if(localStorage.auth === "yes") {
            document.removeEventListener('keyup', authWithEnter);
        }
    };
}