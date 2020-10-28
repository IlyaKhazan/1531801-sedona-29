const form = document.querySelector('.search__form');
const headerButton = document.querySelector('.search__header-button');
const submitButton = document.querySelector('.search__submit-button');
const adults = form.querySelector('[name=adults]');
const children = form.querySelector('[name=children]');
const checkin = form.querySelector('[name=checkin]');
const checkout = form.querySelector('[name=checkout]');

let isStorageSupport = true;
let adultsStorage = '';
let childrenStorage = '';
let checkinStorage = '';
let checkoutStorage = '';

try {
    adultsStorage = localStorage.getItem('adults');
    childrenStorage = localStorage.getItem('children');
    checkinStorage = localStorage.getItem('checkin');
    checkoutStorage = localStorage.getItem('checkout');

} catch (err) {
    isStorageSupport = false;
};
form.classList.add('search__form_hidden');


headerButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.classList.toggle('search__form_hidden');
    form.classList.remove('search__form_error');
    if (adultsStorage) { adults.value = adultsStorage };
    if (childrenStorage) { children.value = childrenStorage };
    if (checkinStorage) { checkin.value = checkinStorage };
    if (checkoutStorage) { checkout.value = checkoutStorage };
});

form.addEventListener('submit', function(evt) {
    if ((!adults.value && !children.value) || !checkin.value) {
        form.classList.add('search__form_error');
        evt.preventDefault();

    } else {
        if (isStorageSupport) {
            localStorage.setItem('adults', adults.value);
            localStorage.setItem('children', children.value);
            localStorage.setItem('checkin', checkin.value);
            localStorage.setItem('checkout', checkout.value);
        }
    }
});
