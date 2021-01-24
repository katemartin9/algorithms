function naiveSearch(long, short) {
    var matches = 0
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j< short.length; j++) {
            if(long[i+j] !== short[j]) break;
        }
        if (j === short.length - 1) matches++
    }
    return matches
}

console.log(naiveSearch('hell lo lo me', 'lo'))