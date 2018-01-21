const prompt = require('prompt');

function triggerPrompt(schema) {
  return new Promise((resolve, reject) => {
    prompt.start();

    prompt.get(schema, (error, result) => {
      if (error) reject(error);

      resolve(result);
    });
  });
}

module.exports = triggerPrompt;
