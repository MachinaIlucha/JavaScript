function withdraw(clients, balances, client, amount){
    let i = 0;
    let toReturn = 0;
    clients.forEach(el => {
        if(el === client){
            if((balances[i] - amount) >= 0){
                balances[i] -= amount;
                toReturn = balances[i];
            } else toReturn = -1;
        }     
        i++;
    });
    return toReturn;
}