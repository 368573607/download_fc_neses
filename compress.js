const compr = require("compressing");
const path = require("path");

module.exports=function(tree,before,after,s,e){
    let beforeOver = path.join(tree,before);
    let afterOver = path.join(tree,after);

    compr.zip.uncompress(beforeOver,afterOver)
        .then(()=>{s()})
        .catch((err)=>{e(err)});
}