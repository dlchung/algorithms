// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  // TODO: insert code
  const availableIngredients = Object.keys(available)
  const recipeIngredients = Object.keys(recipe)
  const unavailable = []
  let numMade = -1
  
//   console.log(recipe, available)
//   console.log(recipeIngredients, availableIngredients)
  
  recipeIngredients.forEach(ingredient => {
    let found = false
    for(avail of availableIngredients) {
      if(avail === ingredient) {
        found = true
      }
    }
    
    if(!found) {
      unavailable.push(ingredient)
      numMade = 0
    }
  })
  
  if(unavailable.length === 0) {
    availableIngredients.map(ingredient => {
      const num = (available[ingredient] / recipe[ingredient])
      
//       console.log(available[ingredient], recipe[ingredient], num)
      
      if(num < 1) {
        numMade = 0
        return numMade
      }
      
      if(numMade === -1 || numMade > num) {
        if(num) {
          numMade = num
        }
      }
      
    })
  }
  
//   console.log(unavailable)
  return Math.floor(numMade)
}