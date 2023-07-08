console.clear()

var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
mFriends.splice(3, 0, 'Donna', 'Rachel')

// 1st tells where to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells what items to  be added
console.log(mFriends)

mFriends.splice(0, 0, 'Harvey')
console.log(mFriends)

// Delete item at specific position
mFriends.splice(2, 1)
console.log(mFriends)

mFriends.splice(0, 2)
console.log(mFriends)

// Concatenation
var mOfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']
var mAllFriends = mFriends.concat(mOfficeFriends)

console.log('====================================')
console.log(mFriends)
console.log(mOfficeFriends)
console.log(mAllFriends)

//Sorting Ascending and Descending

mAllFriends.sort()
console.log(mAllFriends)

mAllFriends.reverse()
console.log(mAllFriends)

arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']
arr.reverse()
console.log(arr)