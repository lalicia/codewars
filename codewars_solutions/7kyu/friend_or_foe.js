// Description:
/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */

// Solution:
function friend(friends){
    let yesFriends = []
    
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length == 4) {
        yesFriends.push(friends[i]);
        }
      }
    return yesFriends;
  }

// Sample tests:
/* describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
    assert.deepEqual(friend(["Hell", "Is", "a", "badd", "word"]), ["Hell", "badd", "word"])
    assert.deepEqual(friend(["Issa", "Issac", "Issacs", "ISISS"]), ["Issa"])
    assert.deepEqual(friend(["Robot", "Your", "MOMOMOMO"]), ["Your"])
    assert.deepEqual(friend(["Hello", "I", "AM", "Sanjay", "Gupt"]), ["Gupt"])
    assert.deepEqual(friend(["This", "IS", "enough", "TEst", "CaSe"]), ["This", "TEst", "CaSe"])
    assert.deepEqual(friend([]), [])
  })
}) */