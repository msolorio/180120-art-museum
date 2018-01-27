/**
* Schema - constructor for a prompt schema.
*
* @param  {array} props - takes in array of properties to be requested
* on the prompt
* @return {type} returns an object specifying prompt property
names, validation messages, and sets all properties to rootRequired
*/
function Schema(props) {
  this.properties = {};

  props.forEach((prop) => {
    this.properties[prop.name] = {
      description: prop.description,
      message: `${prop.name} was not provided`,
      rootRequired: true
    };
  });
}

module.exports = Schema;
