function oddOccurrences(input) {

    let words={}
    for (let element of input.split(' ')) {
        let word=element.toLocaleLowerCase();
        if (!words.hasOwnProperty(word)) {
            words[word]=0;
        }
        words[word]+=1;
    }
    let filtred = Object.entries(words);
    let result=[]
    for (const [word,count] of filtred) {
        if (count%2==1) {
           result.push(word)
        }
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');