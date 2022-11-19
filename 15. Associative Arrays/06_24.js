function wordOccurrences(input) {
   let wordObj={}
 
   for (const element of input) {
   
     let count=1;
       if (!wordObj.hasOwnProperty(element)) {
        wordObj[element]=count;
       }else{
        wordObj[element]+=count;
       }
   } 
  
   let entries = Object.entries(wordObj);
   console.log(entries);
   entries.sort((a,b)=>b[1]-a[1])
        for(let key of entries){
        //console.log(`${key[0]} -> ${key[1]} times`);
               
        }
   }

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])