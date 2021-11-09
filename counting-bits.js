function countSetBits(n) {
    let bitCount = 0;
    for (let i = 1; i <= n; i++) {
        bitCount += countSetBitsUtil(i);
    }
    return bitCount;
}

function countSetBitsUtil(x) {
    if (x <= 0) {
        return 0;
    }
    return (x % 2 == 0 ? 0 : 1) + countSetBitsUtil(Math.floor(x / 2));
}

let n = 4;
console.log("Total set bit count is ");
console.log(countSetBits(n));

