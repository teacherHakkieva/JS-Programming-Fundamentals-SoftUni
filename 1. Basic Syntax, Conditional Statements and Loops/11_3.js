function solve(n) {
    let z=1
    let sum=0;
    for (let i = 1; i <=n; i++) {
        console.log(z);  
        sum+=z;      
        z+=2;
    }
    console.log(`Sum: ${sum}`);
}
solve(5)