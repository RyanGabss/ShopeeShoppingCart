// Casos de uso dos itens
// - Criar item com sub-total certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}
export default createItem;
