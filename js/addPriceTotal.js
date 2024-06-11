//Recuperation des infromations des tickets
//Ajout de la quantity des tickets
// Diminution de la quantity des tickets
//Appartion du bottom sous-total si + que 0 et disparaission du bottom sous-total si = 0
const augmentation = document.querySelectorAll('.add-plus');
const diminution = document.querySelectorAll('.add-moins');
const totalTicket = document.querySelector('.sous-total');
const totalTicket2 = document.querySelector('.sous-total2');
const totalTicket3 = document.querySelector('.sous-total3');
const totalTicket4 = document.querySelector('.sous-total4');

let total = parseFloat(localStorage.getItem('total')) || 0;

function updateSubtotals() {
    totalTicket.textContent = total.toFixed(2) + "€";
    totalTicket2.textContent = total.toFixed(2) + "€";
    totalTicket3.textContent = "x " + total.toFixed(2) + "€";
    totalTicket4.textContent = "Montant: " + total.toFixed(2) + "€" + " EUR";
}

function updateSharedQuantities() {
    const quantity1 = parseInt(document.getElementById('quantity1').textContent) || 0;
    const quantity2 = parseInt(document.getElementById('quantity2').textContent) || 0;
    const sharedQuantityValue = quantity1 + quantity2;

    document.querySelectorAll('.quantity[data-quantity-id="shared"]').forEach(sharedQuantity => {
        sharedQuantity.textContent = sharedQuantityValue;
    });
}

function saveQuantitiesToLocalStorage() {
    const quantities = {};
    document.querySelectorAll('.quantity').forEach(quantityElem => {
        const id = quantityElem.id;
        const value = parseInt(quantityElem.textContent) || 0;
        quantities[id] = value;
    });
    localStorage.setItem('quantities', JSON.stringify(quantities));
    localStorage.setItem('total', total);
}

function loadQuantitiesFromLocalStorage() {
    const quantities = JSON.parse(localStorage.getItem('quantities')) || {};
    for (const id in quantities) {
        const quantityElem = document.getElementById(id);
        if (quantityElem) {
            quantityElem.textContent = quantities[id];
        }
    }
}

augmentation.forEach(button => {
    button.addEventListener('click', function () {
        const containerInfoGlobalTicket = button.closest('.infoGlobal-ticket');
        const prix = containerInfoGlobalTicket.querySelector('.price');
        const quantityId = button.getAttribute('data-quantity-id');
        const quantityTicket = document.getElementById(quantityId);
        const windowBottomTotal = document.querySelector('#window-bottom-total');

        const price = parseFloat(prix.textContent);

        let quantity = parseInt(quantityTicket.textContent);
        if (isNaN(quantity)) quantity = 0;

        quantity += 1;
        quantityTicket.textContent = quantity;

        windowBottomTotal.style.display = 'block';

        total += price;
        updateSubtotals();
        updateSharedQuantities();
        saveQuantitiesToLocalStorage();
    });
});

diminution.forEach(button => {
    button.addEventListener('click', function () {
        const containerInfoGlobalTicket = button.closest('.infoGlobal-ticket');
        const prix = containerInfoGlobalTicket.querySelector('.price');
        const quantityId = button.getAttribute('data-quantity-id');
        const quantityTicket = document.getElementById(quantityId);
        const windowBottomTotal = document.querySelector('#window-bottom-total');

        const price = parseFloat(prix.textContent);

        let quantity = parseInt(quantityTicket.textContent);
        if (isNaN(quantity)) quantity = 0;

        if (quantity > 0) {
            quantity -= 1;
            quantityTicket.textContent = quantity;

            total -= price;
            if (total < 0) total = 0;

            updateSubtotals();
            updateSharedQuantities();
            saveQuantitiesToLocalStorage();

            if (total === 0) {
                windowBottomTotal.style.display = 'none';
            }
        }
    });
});

function checkAndResetLocalStorage() {
    const part5 = document.getElementById('part-5');
    const observer = new MutationObserver(() => {
        if (getComputedStyle(part5).display === 'block') {
            const sharedQuantity2Value = document.getElementById('sharedQuantity2').textContent;

            localStorage.removeItem('quantities');
            localStorage.removeItem('total');
            total = 0;
            updateSubtotals();
            document.querySelectorAll('.quantity').forEach(quantityElem => {
                if (quantityElem.id !== 'sharedQuantity2') {
                    quantityElem.textContent = 0;
                }
            });

            document.getElementById('sharedQuantity2').textContent = sharedQuantity2Value;
        }
    });

    observer.observe(part5, { attributes: true, attributeFilter: ['style'] });
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuantitiesFromLocalStorage();
    updateSubtotals();
    updateSharedQuantities();
    checkAndResetLocalStorage();
});
