//Quais ações meu carrinho pode fazer?
// - Adicionar Item no carrinho do usuario
async function addItem(userCart, item) {
    userCart.push(item);
}
// - Remover um item do carrinho do usuario
async function removeItem(userCart, item) {
    //1. Encontrar o indice do item
    const indexFound = userCart.findIndex((produto) => produto.name === item.name);
    //2. Caso não encontre o item
    if (indexFound == -1) {
        console.log("item não enconrado");
        return;
    }
    //3. Item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
    }
    //4. caso item = 1 deletar o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
    }
}
// - Deletar um item do carrinho do usuario
async function dellItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name); // findIndex - usado para encontrar um index expecifico de acordo com os parametros 
    if (index !== -1) {
        userCart.splice(index, 1); //splice é usado para cortar uma indexs dentro de uma zona do array
    }
}
// - Calcular o total
async function calculateTotal(userCart) {
    console.log("\nShopee CART TOTAL IS:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}🛒\n`);
}
async function displayCart(userCart) {
    console.log("\nShopee Cart List:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`);
    });
}
export { addItem, removeItem, dellItem, displayCart, calculateTotal };
