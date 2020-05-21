const withdraw = (clients, balances, client, amount) => {
    let i = 0;
    let forRet = 0;

    clients.forEach(el => {
        if(el === client)
            forRet = (balances[i] - amount) ? (balances[i] -= amount) : -1;
        else i++;
    });  
    
    return forRet;
}