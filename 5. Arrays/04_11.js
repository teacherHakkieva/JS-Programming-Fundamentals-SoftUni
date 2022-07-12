function reverseArrayOfStrings(arr) {
 // arr.reverse();
 // console.log(arr.join(" "));
 
 //let arrRev=[];
 //for (let i = arr.length-1; i >=0; i--){
 //   arrRev.push(arr[i]);
 //}
 //console.log(arrRev.join(" "));

 for (let i = 0; i < arr.length/2; i++) {
    let k=arr.length-1-i;
    let buff=arr[i];
   
   arr[i]=arr[k];
   arr[k]=buff;
 }
console.log(arr.join(' '));
}
 reverseArrayOfStrings(["a", "b", "c", "d", "e"]);
