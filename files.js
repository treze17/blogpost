const fs = require('fs')

//reading files
// fs.readFile('./docs/blog1.txt', (err,data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

//writing files
// fs;fs.writeFile('./docs/blog1.txt','Hello again',(err,data) =>{
//     console.log('file waas written')
// })

//directories

//check to if something exist
// if(!fs.existsSync('./assets'))
// {
//     fs.mkdir('./assets',(err,data) =>{
//         if(err){
//            console.log(err)
       
//         }
//         console.log('folder created')
//        })
// }else{
//     fs.rmdir('./assets',(err)=>{
//         console.log(err)
//     })
//     console.log('folder deleted')
// }

//deleting files 
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        console.log(err)
    })
    console.log('file deleted!!')
}

