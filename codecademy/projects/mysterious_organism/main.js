// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Creating a factory function to create multiple objects

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {

    }
  };
};

const monsterDna = ['G', 'C', 'T', 'C', 'T', 'T', 'G', 'T', 'C', 'A', 'T', 'A', 'C', 'T', 'G'];
const monster = pAequorFactory(1, monsterDna);
console.log(monster.mutate())