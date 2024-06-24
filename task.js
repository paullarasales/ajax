function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function step1() {
    console.log("Step 1 started");
    return delay(1000).then(() => {
        console.log("Step 1 completed");
        return "Step 1 is done";
    })
}

async function step2() {
    console.log("Step 2 started");
    return delay(2000).then(() => {
        console.log("Step 2 completed");
        return "Step 2 is done"
    })
}

async function step3() {
    console.log("Step 3 started");
    return delay(3000).then(() => {
        console.log("Step 3 completed");
        return "Step 3 is done";
    })
}

//Chaining Promises
step1().then(message1 => {
    console.log(message1);
    return step2();
}).then(message2 => {
    console.log(message2);
    return step3();
}).then(message3 => {
    console.log(message3);
    console.log("All steps completed"); 
}).catch(error => {
    console.error("Error during some steps:", error)
})

async function runSteps(){
    try {
        console.log("Starting aysnc steps...");

        const message1 = await step1();
        console.log(message1);

        const message2 = await step2();
        console.log(message2);

        const message3 = await step3();
        console.log(message3);

        console.log("All steps completed");
    } catch (error) {
        console.log("Error during some steps:", error);
    }
}

runSteps();
