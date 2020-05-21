const withdraw = (clients, balances, client, amount) => {
    let i = 0;
    let forRet = 0;

    clients.forEach(el => {
        if(el === client){
            if((balances[i] - amount) >= 0)
                forRet = (balances[i] - amount)
            else forRet = -1;
        } else i++;
    });  
    
    return forRet;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));