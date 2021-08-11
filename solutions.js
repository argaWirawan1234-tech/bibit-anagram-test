let anagram = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

function isAnagram(anagramItem, anagramList){
	let anagramItemArr = anagramItem.split('')
  let anagramArr = []
  let i = 0
  while(i < anagramList.length){
  	let isAnagram = true
  	if(anagramItem.length !== anagramList[i].length) {
    	isAnagram = false
    }else{
    	for(let n of anagramList[i]){
        if(anagramItemArr.includes(n)){
          anagramItemArr.splice(anagramItemArr.indexOf(n), 1)
        }else{
          isAnagram = false
          break
        }
    	}
      
      anagramItemArr = anagramItem.split('')
      if(isAnagram) anagramArr.push(anagramList[i])
    }
    i++
  }
  return anagramArr
}

function solution(anagram){
	let i = 0
  let anagramGroup = []
	while(i < anagram.length){
  	const anagramArr = isAnagram(anagram[i], anagram)
    if(anagramArr.length > 0){
    	anagramGroup.push(anagramArr)
      let x = 0
      while(x<anagramArr.length){
      	anagram.splice(anagram.indexOf(anagramArr[x]), 1)
        x++
      }
    }
	}
  return anagramGroup
}

// saya mengasumsikan ini dijalankandi code editor online seperti jsfiddle
console.log(solution(anagram))