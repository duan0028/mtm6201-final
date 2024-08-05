const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

const folderPath = path.join(__dirname, '..', 'src');
console.log(folderPath)

const watcher = chokidar.watch(folderPath, {
  persistent: true,
  ignoreInitial: true,
});

watcher.on('change', (filePath) => {
  console.log(`${filePath} file changed`);

  exec('npm run generate', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }

    console.log(`Command stdout: ${stdout}`);
  });
});
