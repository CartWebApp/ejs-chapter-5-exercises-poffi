let arrays = [[1, 2, 3], [4, 5], [6]];
let Array2 = arrays.reduce(
    function(a,b)
    {return a.concat(b)}
    )
    console.log(Array2)

// → [1, 2, 3, 4, 5, 6]