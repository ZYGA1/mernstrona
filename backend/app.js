function power(a,b){
    let wynik = 1
    for (let i = 0; i < b; i++)
    wynik*=a
    return  wynik;
}

module.exports = power;