const path=require('path')
const fsPromise=require('fs').promises



const fileOps = async() =>{
    try{
        await fsPromise.writeFile(path.join(__dirname,'files','promise.txt'),'unakena venaum solu ulagathai katta solu')
            console.log('Written completed and succesfully');
        const data= await fsPromise.readFile(path.join(__dirname,'files','start.txt'),'utf-8')
            console.log(data);

    } catch(err){
        console.log(err);
    }
}
fileOps()