export function togglePopup(id: string) {
    const popup = document.getElementById(id)! as HTMLElement;
    const state = popup.getAttribute('data-visibility');

    if(state === 'visible')
        popup.setAttribute('data-visibility', 'hidden');
    else
        popup.setAttribute('data-visibility', 'visible');
}

let popupTimer = null;
export function popup(text: string, type: string) {
    const popup = document.getElementById('popup')! as HTMLElement;
    const popupText = document.getElementById('popup-text')! as HTMLParagraphElement;

    popup.setAttribute('data-card-variant', type);
    popupText.textContent = text;

    popupTimer = setTimeout(() => {
        togglePopup('popup');
    }, 3600)

    togglePopup('popup');
}