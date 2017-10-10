// create a list of excuses for why something you wanted
// to do couldn't happen
const excuses = [
  'a dog ate my homework',
  'I had a family issue',
  'my alarm never went off',
  'my code wouldn\'t compile'
]

const action = process.argv[2] || 'I wanted to complete candy crush'

for (var i = 0; i < excuses.length; i++) {
  const excuse = excuses[i]
  excuses[i] = `${action} but ${excuse}`
}

console.log(excuses)
