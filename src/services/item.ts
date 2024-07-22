// Casos de uso dos itens

// - Criar item com sub-total certo
async function createItem(name:string, price:number, quantity:number) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem