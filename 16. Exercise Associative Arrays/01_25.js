function wordsTracker(input) {
    let words= input.shift().split(" ");
    let result={}
    for (let word of words){
        result[word]=0;
    }
    for (const word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++
        }
    }
   let sorted=Object.entries(result);
   sorted=sorted.sort((a,b)=>b[1]-a[1])
   for (const [key,value] of sorted) {
       console.log(key,"-",value);
   }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);