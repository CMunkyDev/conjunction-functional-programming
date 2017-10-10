// create a list of all your friends interests
const friends = [
  { name: 'Marcella', interests: [ 'coding', 'chemistry', 'video games' ] },
  { name: 'Vera', interests: [ 'skiing', 'reading' ] },
  { name: 'Roy', interests: [ 'swimming', 'classic movies' ] },
  { name: 'Clay', interests: [ 'board games', 'painting' ] }
]

function getInterests (friends, interests=[]) {
  if (!friends.length) return interests

  const [friend] = friends
  interests = interests.concat(friend.interests)
  return getInterests(friends.slice(1), interests)
}

console.log(getInterests(friends).join(' and '))
