
setTimeout(()=> { symbol('|');}, 100);
setTimeout(()=> { symbol('/');}, 300);
setTimeout(()=> { symbol('-');}, 500);
setTimeout(()=> { symbol('\\');}, 700);
setTimeout(()=> { symbol('-');}, 900);
setTimeout(()=> { symbol('\\');}, 1100);
setTimeout(()=> { symbol('|');}, 1300);
setTimeout(()=> { symbol('\n');}, 1500);

function symbol(symb) {
  process.stdout.write(`\r${symb}`);
}

