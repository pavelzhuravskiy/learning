// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (specimenNum, dna) => {
  return {
    mutate () {
      let random = dna[Math.floor(Math.random() * 4)]
      let filteredDna = dna.filter(e => e !== random)
      return dna.map(base => {
        if (base === random) {
          return base = filteredDna[Math.floor(Math.random() * 3)]
        } else {
          return base
        }
      })
    },
    compareDNA (ex2) {
      const common = dna
        .filter(base => dna.indexOf(base) === ex2.indexOf(base))
        .length
      const percent = common / dna.length * 100
      return `specimen #1 and specimen #2 have ${percent}% DNA in common`
    },
    willLikelySurvive () {
      const survivalCount = dna
        .filter(base => base === 'C' || base === 'G')
        .length
      return (survivalCount / dna.length * 100) >= 60
    }
  }
}

let spicemen = mockUpStrand()
let finalArr = []
let num = 1

while (finalArr.length < 30) {
  if (pAequorFactory(0, spicemen).willLikelySurvive()) {
    finalArr.push({
      Number: num,
      DNA: spicemen
    })
    num++
  }
}
console.log(finalArr)