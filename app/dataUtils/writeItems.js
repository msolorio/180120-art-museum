const fs = require('fs');

function writeItems(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }

    fs.writeFile(`${__dirname}/../../data.json`, data, (error) => {
      if (error) reject(error);

      resolve(data);
    });
  });
}

module.exports = writeItems;
