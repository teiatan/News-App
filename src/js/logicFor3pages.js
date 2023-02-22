import { refs } from './refs';
import { addIsHidden, removeIsHidden } from './isHidden';
import { openAuthModal, closeAuthModal } from './modalOpening';
import { signOutBtnHandler } from './auth';


export function defaultLocalStorage() {
    if(localStorage.length === 0) {
        localStorage.lang = 'en';
        localStorage.theme = 'light';
        localStorage.auth = 'no';
        localStorage.temperature = '20C';
        localStorage.city = 'Kyiv';
    };
    if(localStorage.auth === 'no') {
        localStorage.removeItem('authId');
        localStorage.favorite = [];
        localStorage.read = [];
    };
};

export function headerLogic() {
    
    if(localStorage.length === 0) {
        defaultLocalStorage();
    } else if(localStorage.auth === 'yes') {
        addIsHidden([refs.headerSignInBtn, refs.authModal]);
        removeIsHidden([refs.navWrapper, refs.headerSignOutBtn]);
        refs.headerSignInBtn.removeEventListener('click', openAuthModal);
        refs.headerSignOutBtn.addEventListener('click', signOutBtnHandler);
        return;
    } else if(localStorage.auth === 'no') {
        removeIsHidden(refs.headerSignInBtn);
        addIsHidden([refs.navWrapper, refs.headerSignOutBtn]);
        refs.headerSignInBtn.addEventListener('click', openAuthModal);
        refs.headerSignOutBtn.removeEventListener('click', signOutBtnHandler);
    };
};