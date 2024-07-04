function log1(target, key, descriptor) {
    console.log(`Logging ${key} function`);
    return descriptor;
}

function log2(target, key, descriptor) {
    console.log(`Logging ${key} function`);
    return descriptor;
}

function log3(target, key, descriptor) {
    console.log(`Logging ${key} function`);
    return descriptor;
}

function log4(target, key, descriptor) {
    console.log(`Logging ${key} function`);
    return descriptor;
}

class Example {
    @log1
    @log2
    greet() {
        console.log("Hello, world!");
    }

    @log3
    @log4
    greet2() {
        console.log("Hello, world!");
    }
}


// @log
// function foo() {}