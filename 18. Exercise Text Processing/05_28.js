function replaceReat(text) {
    let unique='';
    for (let i = 0; i < text.length; i++) {
        let currntChar=text.charAt(i)
        let nextChar=text.charAt(i+1);
        if (currntChar!==nextChar) {
            unique+=currntChar
        }
    }
    console.log(unique);
}
replaceReat('aaaaabbbbbcdddeeeedssaa');
replaceReat('qqqwerqwecccwd')