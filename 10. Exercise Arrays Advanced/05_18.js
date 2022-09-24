function sortAnArrayBy2Criteria(arrString) {
    let arrSort=arrString.sort((a,b)=>(a.length -b.length )||(a.localeCompare(b)));
    console.log(arrSort.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
