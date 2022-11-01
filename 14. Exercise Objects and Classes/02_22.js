function towns(input) {
    for (const el of input) {
        let [town,latitude,longitude] = el.split(' | ')
        latitude=Number(latitude).toFixed(2);
        longitude=Number(longitude).toFixed(2)
        let obj = {
            town: town,
            latitude: latitude,
            longitude:longitude,
        }
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)