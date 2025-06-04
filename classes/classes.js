class animal {
  #environment = 'nature';

  constructor(species, environment, type = 'predator') {
    this.species = species;
    this.environment = environment;
    this.type = type;
  }

  showName() {
    return this.species;
  }

  showEnvironment() {
    return this.environment;
  }

  showType() {
    return this.type;
  }
}

class wolf extends animal {
  species = 'wolf';
  environment = 'zoo';
}

const bigDog = new wolf();
console.log(bigDog.showEnvironment());
