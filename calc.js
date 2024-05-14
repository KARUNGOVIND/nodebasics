process.stdin.on('data' , (oombu)=>{
    const input =oombu.toString().trim();

    if(input=='quit'){
        process.exit(0);
    }
    try{
        const value=eval(input);
        console.log(`${value}`);
    }catch(exception){
        console.log("olunga podara badu");
    }
    process.stdout.write("Enter your equation : ");
})




process.stdout.write("Enter your equation : ");