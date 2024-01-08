const { parse } = require('csv-parse');
const fs = require('fs');

const parser = parse({
    comment: "#" , 
    columns: true
});

const habitable = [];
const isHabitable = (planet) =>{
    if( planet['koi_disposition'] == 'CONFIRMED'
            && planet['koi_insol'] > 0.36 
            && planet['koi_insol'] < 1.11
            && planet['koi_prad'] < 1.6 ){
                return true;
            }
    else
    return false;
}

const result = [];
fs.createReadStream('kepler-data.csv')
    .pipe(parser)
    .on('data',(data)=>{
        if(isHabitable(data) == true){
            habitable.push(data);
        }
        result.push(data);
    })
    .on('error',(err)=>{
        console.log(err);
    })
    .on('end',()=>{
        console.log(habitable.map((planet)=>{
            return(planet['kepler_name']);
        }));
        console.log(`Total ${habitable.length} habitable planets were found by KEPLER.`);
    })