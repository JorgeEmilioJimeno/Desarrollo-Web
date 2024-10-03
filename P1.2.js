function padoban () {
    let num =[1,1,1];
    for (let i = 2; i < 100; i++) {
        num[i] = num[i-2] + num [i-1];
    }
    return num;
}
console.log(padoban())