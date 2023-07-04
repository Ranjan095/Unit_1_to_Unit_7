let categoriesDrectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

// 1. you need to code it.
let areasDirectory=areas.reduce((acc,ele)=>{
  let id=ele.id;
  let name=ele.name;

  acc[id]=name;
  return acc;
},{})

console.log(areasDirectory);

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
    strIngredient1: "digestive biscuits",
    strIngredient2: "butter",
    strIngredient3: "Bramley apples",
    strIngredient4: "butter, softened",
    strIngredient5: "caster sugar",
    strIngredient6: "free-range eggs, beaten",
    strIngredient7: "ground almonds",
    strIngredient8: "almond extract",
    strIngredient9: "flaked almonds",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/3oz",
    strMeasure3: "200g/7oz",
    strMeasure4: "75g/3oz",
    strMeasure5: "75g/3oz",
    strMeasure6: "2",
    strMeasure7: "75g/3oz",
    strMeasure8: "1 tsp",
    strMeasure9: "50g/1¾oz",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "Eggs",
    strIngredient4: "Flour",
    strIngredient5: "Baking Powder",
    strIngredient6: "Salt",
    strIngredient7: "Unsalted Butter",
    strIngredient8: "Sugar",
    strIngredient9: "Peanut Butter",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "200ml",
    strMeasure2: "60ml",
    strMeasure3: "2",
    strMeasure4: "1600g",
    strMeasure5: "3 tsp",
    strMeasure6: "1/2 tsp",
    strMeasure7: "25g",
    strMeasure8: "45g",
    strMeasure9: "3 tbs",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: ""
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
    strIngredient1: "plain flour",
    strIngredient2: "chilled butter",
    strIngredient3: "cold water",
    strIngredient4: "raspberry jam",
    strIngredient5: "butter",
    strIngredient6: "caster sugar",
    strIngredient7: "ground almonds",
    strIngredient8: "free-range egg, beaten",
    strIngredient9: "almond extract",
    strIngredient10: "flaked almonds",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/2½oz",
    strMeasure3: "2-3 tbsp",
    strMeasure4: "1 tbsp",
    strMeasure5: "125g/4½oz",
    strMeasure6: "125g/4½oz",
    strMeasure7: "125g/4½oz",
    strMeasure8: "1",
    strMeasure9: "½ tsp",
    strMeasure10: "50g/1¾oz",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  }
];

// 2. You need to code it.
let outputArray=inputArray.map((ele)=>{

    // let cc=categoriesDrectory[ele.Category];

  let obj={};
    obj["productId"]=ele.idMeal,
    obj["productTitle"]=ele.strMeal,
    obj["Category"]=categoriesDrectory[ele.Category],
    obj["Area"]=areasDirectory[ele.Area],
    obj["Ingredients"]=[],
    ele.strIngredient1 && obj["Ingredients"].push({ingredient:ele.strIngredient1,measure:ele.strMeasure1})
    ele.strIngredient2 && obj["Ingredients"].push({ingredient:ele.strIngredient2,measure:ele.strMeasure2})
    ele.strIngredient3 && obj["Ingredients"].push({ingredient:ele.strIngredient3,measure:ele.strMeasure3})
    ele.strIngredient4 && obj["Ingredients"].push({ingredient:ele.strIngredient4,measure:ele.strMeasure4})
    ele.strIngredient5 && obj["Ingredients"].push({ingredient:ele.strIngredient5,measure:ele.strMeasure5})
    ele.strIngredient6 && obj["Ingredients"].push({ingredient:ele.strIngredient6,measure:ele.strMeasure6})
    ele.strIngredient7 && obj["Ingredients"].push({ingredient:ele.strIngredient7,measure:ele.strMeasure7})
    ele.strIngredient8 && obj["Ingredients"].push({ingredient:ele.strIngredient8,measure:ele.strMeasure8})
    ele.strIngredient9 && obj["Ingredients"].push({ingredient:ele.strIngredient9,measure:ele.strMeasure9})
    ele.strIngredient10 && obj["Ingredients"].push({ingredient:ele.strIngredient10,measure:ele.strMeasure10})
    ele.strIngredient11 && obj["Ingredients"].push({ingredient:ele.strIngredient11,measure:ele.strMeasure11})
    ele.strIngredient12 && obj["Ingredients"].push({ingredient:ele.strIngredient12,measure:ele.strMeasure12})
    ele.strIngredient13 && obj["Ingredients"].push({ingredient:ele.strIngredient13,measure:ele.strMeasure13})
    ele.strIngredient14 && obj["Ingredients"].push({ingredient:ele.strIngredient14,measure:ele.strMeasure14})
    ele.strIngredient15 && obj["Ingredients"].push({ingredient:ele.strIngredient15,measure:ele.strMeasure15})
    ele.strIngredient16 && obj["Ingredients"].push({ingredient:ele.strIngredient16,measure:ele.strMeasure16})
    ele.strIngredient17 && obj["Ingredients"].push({ingredient:ele.strIngredient17,measure:ele.strMeasure17})
    ele.strIngredient18 && obj["Ingredients"].push({ingredient:ele.strIngredient18,measure:ele.strMeasure18})
    ele.strIngredient19 && obj["Ingredients"].push({ingredient:ele.strIngredient19,measure:ele.strMeasure19})
    ele.strIngredient20 && obj["Ingredients"].push({ingredient:ele.strIngredient20,measure:ele.strMeasure20})
    

  
  return obj;

})



export {areasDirectory, outputArray};
