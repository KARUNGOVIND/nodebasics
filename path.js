const fs = require('fs')
const path=require('path')

fs.readFile(path.join(__dirname,'files','start.txt'),'utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});




fs.writeFile(path.join(__dirname,'files','food.txt'),'vanga sapadalam iniku oru pudi',(err)=>{
    if (err) throw err;
    console.log('Written completed and succesfully');
});


fs.appendFile(path.join(__dirname,'files','food.txt'),'\n\n nala saptemnglaaa ?',(err)=>{
    if (err) throw err;
    console.log('Update completed and succesfully');
});