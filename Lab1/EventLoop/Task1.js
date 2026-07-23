const f1 = () => {
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 ends");
};
const f2 = () => {
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 ends");
};
const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 ends");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();
/* JavaScript is Synchronous and single threaded
 In asynchronous we use event loop to manage the call stack
 Asynchronous call using timers :
 1. setTimeout
 2. setImmediate
 3. process.nextTick
 4. setInterval*/