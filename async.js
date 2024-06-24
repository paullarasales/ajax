function readFile(fileName, ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`File ${fileName} read successfully`);
        }, ms);
    });
}

async function readFiles() {
    try {
        console.log(await readFile('test1.txt', 1000));
        console.log(await readFile('test2.txt', 2000));
    } catch (error) {   
        console.error('Error reading this files:', error);
    }
}

readFiles()