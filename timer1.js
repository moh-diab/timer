const alarms = process.argv.slice(2);
//console.log(alarms)

for (let alarm of alarms) {

  if (alarm <= 0 || isNaN(alarm))
    continue;

  setTimeout(() => {
    process.stdout.write('.');
  }, alarm * 1000);
};



