// create a list of all your friends interests
const friends = [
  { name: 'Marcella', interests: [ 'coding', 'chemistry', 'video games' ] },
  { name: 'Vera', interests: [ 'skiing', 'reading' ] },
  { name: 'Roy', interests: [ 'swimming', 'classic movies' ] },
  { name: 'Clay', interests: [ 'board games', 'painting' ] }
]

const interests = []

for (let i = 0; i < friends.length; i++) {
  const friend = friends[i]
  for (let j = 0; j < friend.interests.length; j++) {
    const interest = friend.interests[j]
    interests.push(interest)
  }
}

console.log(interests.join(' and '))
