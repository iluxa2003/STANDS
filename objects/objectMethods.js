const obj = {
  name: 'Tiger',
  type: 'predator',
  environment: 'jungle',
};

Object.prototype.hasOwnProperty.call(obj, 'name');

const values = Object.values(obj);
console.log(values); // ["Tiger", "predator", "jungle"]

const keys = Object.keys(obj);
console.log(keys); // ["name", "type", "environment"]

const entries = Object.entries(obj);
console.log(entries); // [["name", "Tiger"], ["type", "predator"], ["environment", "jungle"]]

const freeze = Object.freeze(obj);
console.log(freeze); // dont let the object "change" (add new properties, remove properties, cant change properties, cant reconfigure)

const assign = Object.assign(obj);
console.log(assign);
