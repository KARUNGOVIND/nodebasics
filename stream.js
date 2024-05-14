const fs =require('fs')
const path=require('path')
const rs=fs.createReadStream(path.join(__dirname,'files','bigfile.txt'))
const ws=fs.createWriteStream(path.join(__dirname,'files','newbigfile.txt'))

rs.on('data',(datakar) =>{
    ws.write(datakar);
})