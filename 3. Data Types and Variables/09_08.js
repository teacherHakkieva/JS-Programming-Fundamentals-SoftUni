function specialNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) { 
        let special ='False';
        let num = i+'';
        let sum =0;
        for (let j = 0; j < num.length; j++) {
            sum+=Number(num[j])
            
        }
        if(sum==5||sum==7||sum==11){
            special= 'True'
        }
        console.log(`${i} -> ${special}`);
      } 
    }

specialNumbers(15)
