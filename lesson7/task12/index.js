const withdraw = (clients, balances, client, amount) => {
    let i = 0;

    clients.forEach(el => {
        if(el === client)
            break;
        i++;
    });   

    
    return balances[i] -= amount ? (balances[i] -= amount) : -1;
}