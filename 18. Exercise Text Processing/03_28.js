function extractFile(input) {
    let fileNameStart=input.lastIndexOf('\\')+2;
    let fileExtensionStart=input.lastIndexOf(".")+1;
    let fileNameEndIndex=fileNameStart-1;
    let fileName=input.substring(fileExtensionStart-1, fileNameEndIndex)
let fileExtension=input.substring(fileExtensionStart);
console.log(`File name: ${fileName}`);
console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\Template.pptx');
