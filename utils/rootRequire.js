function rootRequire(filepathFromRoot) {
  return require.main.require(filepathFromRoot);
}

module.exports = rootRequire;
