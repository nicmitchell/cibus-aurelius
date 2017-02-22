export const addNewName = {
  name: "addNewName",
  type: "text",
  label: "Name the dish",
  placeholder: "Item Name",
  required: true
}

export const addNewDescription = {
  name: "addNewDescription",
  type: "text",
  label: "Describe it",
  placeholder: "Description",
  required: true
}

export const addNewType = {
  name: "addNewType",
  componentClass: "select",
  label: "Select a category",
  placeholder: "Type",
  required: true,
  options: {
    select: ' ... ',
    entree: 'Entree', 
    light: 'Light Fare', 
    dessert: 'Dessert' 
  }
}

export const addNewTime = {
  name: "addNewTime",
  type: "text",
  label: "Time",
  placeholder: "How long will it take?",
  required: true
}

export const addNewImage = {
  name: "addNewImage",
  type: "file",
  label: "Upload that pic", 
  required: true
}

export const addNewSide = {
  name: "addNewSide",
  type: "text",
  label: "Side",
  placeholder: "Suggested side dish"
}

export const addNewRecipe = {
  name: "addNewRecipe",
  componentClass: "textarea",
  label: "Recipe",
  placeholder: "Show off that recipe (enter html)",
}

