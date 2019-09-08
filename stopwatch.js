const path = require("path");
const fs = require("fs-extra");
const execa = require("execa");

fs.ensureDirSync(path.join(__dirname, "temp", "stopwatch"));
fs.emptyDirSync(path.join(__dirname, "temp", "stopwatch"));

execa.sync("git", ["clone", "git@github.com:spiltcoffee/stopwatch.git"], {
  shell: true,
  cwd: path.join(__dirname, "temp")
});

execa.sync("yarn", [], {
  shell: true,
  cwd: path.join(__dirname, "temp", "stopwatch")
});

execa.sync("yarn", ["web"], {
  shell: true,
  cwd: path.join(__dirname, "temp", "stopwatch")
});

fs.removeSync(path.join(__dirname, "stopwatch"));
fs.copySync(
  path.join(__dirname, "temp", "stopwatch", "out", "web"),
  path.join(__dirname, "stopwatch")
);
