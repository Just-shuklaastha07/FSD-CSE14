import { EventEmitter } from "node:events";
const sayHi = (name) => {
  console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet", ()=>{
    console.log("System started");
});


task.on("greet", sayHi);
task.on("greet", (name) => {
  console.log(`${name} starts working`);
});

task.on("greet", (name) =>{
    console.log(`${name} Logged out`);
});

task.once("exit", (name)=>{
    console.log(`System Shutdowm by ${name}`);
});

task.emit("greet", "Astha Shukla");
console.log();
task.off("greet", sayHi); // must have function name
task.emit("greet", "Khushi");
task.emit("greet", "Arpit");
console.log();
task.emit("exit", "Manager"); // Executes only once

task.emit("exit", "Employee"); //Won't affect

console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners("greet");