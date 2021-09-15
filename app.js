'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

/**
 * Добавление в корзину
 */
let buttonsBuy = document.querySelectorAll('.featuredImgDark button');
let cartList = document.querySelector('.cartList');
let countProducts = document.querySelector('.cartIconWrap span');
let sumAll = document.querySelector('.sumAll');
let cart = document.querySelector('.cartIconWrap');

cart.addEventListener('click', function() {
    if (cartList.style.display == 'none') {
        cartList.style.display = 'block';
    } else {
        cartList.style.display = 'none';
    }

});

buttonsBuy.forEach(function (btn) {
    btn.addEventListener('click', eventBtn);
});

function eventBtn(event) {
    countProductsCart();
    addProductCartList(event);
    sumPriceProductsCart();
}

function countProductsCart() {
    let count = Number(countProducts.outerText) + 1;
    countProducts.innerHTML = count;
}

function addProductCartList(event) {
    let product = event.target.closest('.featuredItem');
    let productCart = document.querySelector(`[data-product="${product.getAttribute('data-id')}"]`);
    let tbody = cartList.querySelector('table tbody');
    if (productCart == null) {
        let element = `<tr data-product="${product.getAttribute('data-id')}">
        <td>${product.querySelector('.featuredName').outerText}</td>
        <td class="count">1</td>
        <td class="price">${product.querySelector('.featuredPrice').outerText}</td>
        <td class="sumPrice">${product.querySelector('.featuredPrice').outerText}</td>
        </tr>`;
        tbody.insertAdjacentHTML('beforeend', element);
    } else {
        let count = productCart.querySelector('.count');
        let price = productCart.querySelector('.price');
        let sum = productCart.querySelector('.sumPrice');
        count.innerHTML = Number(count.innerHTML) + 1;
        sum.innerHTML = '$' + (Number(price.innerHTML.split('$')[1]) * Number(count.innerHTML));
    }
}

function sumPriceProductsCart() {
    let sums = cartList.querySelectorAll('.sumPrice');
    let sumProducts = 0;
    sums.forEach(function (sum) {
        sumProducts += Number(sum.innerHTML.split('$')[1]);
    });

    sumAll.innerHTML = '$' + sumProducts;
}