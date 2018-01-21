const fs = require('fs');

function writeItems(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/../data.json`, data, (error) => {
      if (error) reject(error.message);

      resolve(data);
    });
  });
}

module.exports = writeItems;
