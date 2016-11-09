let args = process.argv.slice(2);
let characters = args.map(args => args[0]);
let combined = characters.reduce((string, char) => string + char);

console.log(`[${args}] becomes \"${combined}\"`);
