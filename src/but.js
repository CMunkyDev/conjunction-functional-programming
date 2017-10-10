// create a list of excuses for why something you wanted
// to do couldn't happen
const excuses = [
  'a dog ate my homework',
  'I had a family issue',
  'my alarm never went off',
  'my code wouldn\'t compile'
]

const action = process.argv[2] || 'I wanted to complete candy crush'

function getExcuses (excuses, result=[], action='I wanted to complete candy crush') {
  if (!excuses.length) return result

  const [excuse] = excuses
  return getExcuses(excuses.slice(1), result.concat(`${action} but ${excuse}`), action)
}

console.log(getExcuses(excuses, process.argv[2]))
