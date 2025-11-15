const main = document.querySelector('#main');

    const div1 = main.firstElementChild;
        const h1   = div1.firstElementChild;
        const div2 = div1.firstElementChild.nextElementSibling;
            const div3 = div2.firstElementChild;
                const h2   = div3.firstElementChild;
                const div4 = div3.firstElementChild.nextElementSibling;

const products = div4.children;
console.log(products);

const productArray = Array.from(products);
/* console.log(productArray); */



/* CART */
const cart = main
    .lastElementChild.firstElementChild
    .nextElementSibling.firstElementChild
    .nextElementSibling.firstElementChild
    .nextElementSibling;

/* console.log(cart); */
/* CART */

productArray.forEach( (product) => {
    product.addEventListener('click', () => {
        const productName = document.createElement('h5');
        productName.innerText = product.firstElementChild.innerText;
        cart.appendChild(product);
        console.log(product.firstElementChild);
    });
});