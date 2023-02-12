export function addIsHidden(node) {
    if(node.length > 1) {
        node.forEach((btn) => {
            if(btn !== null) {
              btn.classList.add("is-hidden"); 
            }
        });
    } else {
        node.classList.add("is-hidden");
    };
};

export function removeIsHidden(node) {
    if(node.length > 1) {
        node.forEach((btn) => {
            if(btn !== null) {
              btn.classList.remove("is-hidden"); 
            }
        });
    } else {
        node.classList.remove("is-hidden");
    };   
};