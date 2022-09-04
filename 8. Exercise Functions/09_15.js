function loadingBar(num) {
    let arr=[];
    let orgNum=num;
  for (let i = 0; i < 10; i++) {
    if (num>0) {
        arr.push("%");
        num-=10;
    }else{
        arr.push('.')
    }
  }
  if (num<100) {
    console.log(`${orgNum}% [${arr.join('')}]`); 
    console.log('Still loading...');
  }else if (orgNum===100) {
    console.log(`${orgNum}% Complete!`);
    console.log(`[${arr.join('')}]`);  
  } 
}
loadingBar(30);
loadingBar(50);
loadingBar(100);

