'use strict';

/**
 * Задание 1.1
 */

/**
 * es5
 * @param {string} name Название товара
 * @param {number} price Цена товара
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    let priceDiscount = this.price - (this.price * 0.25);
    console.log(`Итоговая цена ${this.name}: ${priceDiscount} руб.`);
}

let objPriceDiscount = new Product('лягушка', 100);
objPriceDiscount.make25PercentDiscount();

/**
 * es6
 */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        let priceDiscount = this.price - (this.price * 0.25);
        console.log(`Итоговая цена ${this.name}: ${priceDiscount} руб.`);
    }
}

let objPriceDiscount = new Product('лягушка', 100);
objPriceDiscount.make25PercentDiscount();

/**
 * Задание 1.2
 */

/**
 * Пост es5
 * @param {string} author Автор
 * @param {string} text Сообщение автора
 * @param {string} date Дата отправления сообщения
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;    
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let objNewPost = new AttachedPost('Иван', 'Тест', '10.10.2010');
console.log(objNewPost);

objNewPost.edit('новый текст');
console.log(objNewPost);

objNewPost.makeTextHighlighted();
console.log(objNewPost);


/**
 * Пост es6
 */
class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text){
        this.text = text;  
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let objNewPost = new AttachedPost('Иван', 'Тест', '10.10.2010');
console.log(objNewPost);

objNewPost.edit('новый текст');
console.log(objNewPost);

objNewPost.makeTextHighlighted();
console.log(objNewPost);