function loop (a,b,c,d){
    for( let value= a ; b(value); value = c(value)){
        d(value);
    }
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1