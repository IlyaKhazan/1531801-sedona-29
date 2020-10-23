const form = document.querySelector('.search__form');
const headerButton = document.querySelector('.search__header-button');
const submitButton = document.querySelector('.search__submit-button');
const adults = form.querySelector('[name=adults]');
const children = form.querySelector('[name=children]');

let isStorageSupport = true;
let adultsStorage = '';
let childrenStorage = '';

try {
    adultsStorage = localStorage.getItem('adults');
    childrenStorage = localStorage.getItem('children');

} catch (err) {
    isStorageSupport = false;
};


headerButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.classList.toggle('search__form_hidden');
    if (adultsStorage) { adults.value = adultsStorage };
    if (childrenStorage) { children.value = childrenStorage };
});


submitButton.addEventListener('click', function(evt) {
    if (!adults.value && !children.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            evt.preventDefault();
            localStorage.setItem('adults', adults.value);
            localStorage.setItem('children', children.value);
        }
    }
});
