const shoppingCart = []

const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    shoppingCart.forEach((product, idx) => {

            cartEl.innerHTML +=
            `
            <section class="shoppingCart__item">
            <div>${product.name}</div>
            <div class="shoppingCart__quantity">qty: ${product.qty}</div>
            <div>${(product.price * product.qty).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>

            
            <button id="${idx}" class="cart_removeButton">Remove</button>
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
    const allRemoveButtons = document.querySelectorAll(".cart_removeButton")

    // Add a click event listener to each button
    for (const button of allRemoveButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToManipulate = parseInt(event.target.id)
                const objectToManipulate = shoppingCart[indexToManipulate]

                // Decrement quantity by 1, or remove completely if quantity is 1
                if (objectToManipulate.qty >1) {
                    objectToManipulate.qty--
                } else {
                    shoppingCart.splice(indexToManipulate, 1)
                    delete objectToManipulate.qty
                }
                displayShoppingCart()
            }
        )

    }
}














