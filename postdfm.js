const path = require("path");
const fs = require("fs-extra");
const execa = require("execa");

fs.ensureDirSync(path.join(__dirname, "temp"));
fs.emptyDirSync(path.join(__dirname, "temp"));

execa.sync("git", ["clone", "git@github.com:spiltcoffee/postdfm.git"], {
  shell: true,
  cwd: path.join(__dirname, "temp")
});
execa.sync("yarn", ["ci"], {
  shell: true,
  cwd: path.join(__dirname, "temp", "postdfm")
});

fs.removeSync(path.join(__dirname, "docs"));
fs.copySync(
  path.join(__dirname, "temp", "postdfm", "docs"),
  path.join(__dirname, "docs")
);
