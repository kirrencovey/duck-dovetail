/*
    Function to convert a JavaScript object representation
    of a product to an HTML representation
*/
const createProductHTML = product => `
    <section class="product">
      <header class="product__header">
        <h2>${product.name}</h2>
      </header>

      <p class="product__description">
        ${product.description}
      </p>

      <footer class="product__footer">
        Price: ${product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}

        <button id="${product.id}" class="product__purchaseButton">Purchase</button>
      </footer>

    </section>
`



// Iterate all products
for (product of products) {
    // Create HTML representation
    const theProductHTML = createProductHTML(product)

    // Reference to container
    const containerEl = document.querySelector("#productList")

    // Update HTML of container
    containerEl.innerHTML += theProductHTML
}

// Get a reference to all purchase buttons
const allButtons = document.querySelectorAll(".product__purchaseButton")

// Add a click event listener to each button
for (button of allButtons) {
    button.addEventListener(
        "click",
        (event) => {
            // Find the product whose `id` property is equal to
            // the "id" attribute of the button that was clicked on
            const foundProduct = products.find((product) => {
                return parseInt(event.target.id) === product.id
            })
            
            // If a product was found and IS NOT ALREADY IN CART, add quantity
            // property, set it to 1, and push it into the cart
            if (foundProduct !== null && shoppingCart.includes(foundProduct) === false) {
                foundProduct.qty = 1
                shoppingCart.push(foundProduct)
                displayShoppingCart()

            // If a product was found and IS ALREADY IN CART, increase quantity
            } else (foundProduct !== null) {
                foundProduct.qty++
                displayShoppingCart()
            }
        }
    )
}




        // // MY ORIGINAL SOLUTION :

        //     // Only if something was found, add the object to the
        //     // shopping cart array
        //     if (foundProduct !== null) {
            
                
        //         // Find product in cart whose 'id' property is equal to
        //         // the 'id' attribute of the button that was clicked on
        //         let inCart = shoppingCart.find((product) => {
        //             return parseInt(event.target.id) === product.id
        //         }
                
        //         // If the item is already represented in the cart, increase
        //         // quantity by 1, and increase the price to reflect new quantity
        //         if (inCart) {
        //             inCart.qty++
        //             let quantityPrice = inCart.qty * inCart.price
        //             displayShoppingCart()
        //             return quantityPrice
        //         }
            
        //         // If the item is not yet represented in the cart, add it to
        //         // the cart and set its quantity to 1
        //         else {
        //             foundProduct.qty = 1
        //             shoppingCart.push(foundProduct)
        //         displayShoppingCart()
        //         }
        //     }
            




















