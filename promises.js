function readFile(fileName, ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`File ${fileName} read successfully`);
        }, ms)
    })
}

readFile('test.txt', 3000).then(message => {
    console.log(message);
})