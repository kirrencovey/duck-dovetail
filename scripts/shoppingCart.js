const shoppingCart = []

// Build HTML element to represent the cart
const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    shoppingCart.forEach((product, idx) => {

            cartEl.innerHTML +=
            `
            <section class="shoppingCart__item">
            <div class="shoppingCart__itemName">${product.name}</div>
            <div class="shoppingCart__quantity">qty: ${product.qty}</div>
            <div class="shoppingCart__itemPrice">${(product.price * product.qty).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>

            <div class="button__container">
                <button id="${idx}" class="cart_removeOneButton">Remove One</button>
                <button id="${idx}" class="cart_removeAllButton">Remove All</button>
            </div>

            </section>
            `

            grandTotal += (product.price * product.qty)
            
    })

    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `

    // Get a reference to all remove buttons
    const allRemoveAllButtons = document.querySelectorAll(".cart_removeAllButton")
    const allRemoveOneButtons = document.querySelectorAll(".cart_removeOneButton")

    // Add a click event listener to each button
    for (const button of allRemoveAllButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToManipulate = parseInt(event.target.id)
                const objectToManipulate = shoppingCart[indexToManipulate]

                // Remove from cart completely
                if (objectToManipulate.qty >=1) {
                    shoppingCart.splice(indexToManipulate, 1)
                }
                displayShoppingCart()
            }
        )

    }

    for (const button of allRemoveOneButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToManipulate = parseInt(event.target.id)
                const objectToManipulate = shoppingCart[indexToManipulate]

                // Decrement cart quantity by 1
                if (objectToManipulate.qty >1) {
                    objectToManipulate.qty--
                displayShoppingCart()
            }
        }

        )


}

}
