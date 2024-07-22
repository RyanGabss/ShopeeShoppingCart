import * as cartService from "./services/cart.js"
import creatItem from "./services/item.js"

const myCart:any = []
const myWhishList:any = []

console.log("Welcome to the your Shopee cart!")

const item1 = await creatItem("hotwheels ferrari", 20.99, 1)
const item2 = await creatItem("hotwheels lamborghini", 39.99, 3)

// Adicionei 2 item no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
// removendo 1 ou mais itens
await cartService.removeItem(myCart, item1)
await cartService.removeItem(myCart, item2)
// visualizando os itens dentro do carrinho
await cartService.displayCart(myCart)
/*
// Deletei 2 itens do carrinho
await cartService.dellItem(myCart, item2.name)
await cartService.dellItem(myCart, item1.name)
*/

console.log("Shopee Cart Total:")
await cartService.calculateTotal(myCart)