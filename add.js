const ness = require("./list");
const comp = require("./compress");

const { exec } = require("child_process");
// const fs = require("fs");
const path = require("path");

//const compressing = require("compressing");
// const bluebird = require("bluebird");

// bluebird.promisifyAll(fs);

//下载文件
for (let i = 0; i <= ness.length - 1; i++) {
    let ns = ness[i];

    //下载
    exec(
        `wget -O ./nes/"${ns.name}.zip" "${ns.url}"`,
        (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${stderr}`);
            }
            console.log(`add file: ${ns.fileName}`)
        }
    );
}

for (let i = 0; i <= ness.length - 1; i++) {
    let ns = ness[i];
    let tree = "./nes";

    comp(tree,ns.name+".zip",ns.name,()=>{
        console.log("sucess");
    },(e)=>{
        console.log("falid:",e);
    });
    //解压
    // compressing.zip.uncompress(`./nes/${ns.name}.zip`, `./nes/${ns.name.replace(".zip", "")}`)
    //     .then(() => {
    //         console.log("Uncompress is successful!");
    //     })
    //     .catch((e) => {
    //         console.log("falid:", e);
    //     });
}