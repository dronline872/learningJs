"use strict";

/**
 * Задание 1
 */

for (let index = 0; index <= 10; index++) {
    if (index == 0) {
        console.log(`${index} – это ноль`);
    } else if (index % 2 == 0) {
        console.log(`${index} – это четное число`);
    } else {
        console.log(`${index} – это нечетное число`);
    }
}

/**
 * Задание 2
 */

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

/**
 * Задание 3
 */

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product, index) {
    products[index]['price'] = product.price - (product.price * 0.15);
})
console.log(products);

/**
 * Задание 4
 */

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let result = products.filter(function (product) {
    let photo = product['photos'];
    if (photo !== undefined && photo.length > 0) {
        return true;
    }
});
console.log(result);

products.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }

    if (a.price < b.price) {
      return -1;
    }

    return 0;
});
console.log(products);

/**
 * Задание 6
 */

for (let index = 'x'; index.length <= 20; index = index + 'x') {
    console.log(index);
}