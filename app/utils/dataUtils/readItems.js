const fs = require('fs');

// reads data asynchronously and resolves passing in art pieces array
function fetchItems() {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/../../../data.json`, (error, data) => {
      if (error) reject(error);

      resolve(JSON.parse(data));
    });
  });
}

module.exports = fetchItems;
