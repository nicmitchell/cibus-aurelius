export const name = {
  name: "name",
  type: "text",
  label: "Name the dish",
  placeholder: "Item Name",
  required: true
}

export const desc = {
  name: "desc",
  type: "text",
  label: "Describe it",
  placeholder: "Description",
  required: true
}

export const type = {
  name: "type",
  componentClass: "select",
  label: "Select a category",
  placeholder: "select",
  required: true,
  options: {
    select: ' ... ',
    entree: 'Entree', 
    light: 'Light Fare', 
    dessert: 'Dessert' 
  }
}

export const time = {
  name: "time",
  type: "text",
  label: "Time",
  placeholder: "How long will it take?",
  required: true
}

export const image = {
  name: "image",
  type: "file",
  label: "Upload that pic", 
  // required: true
}

export const side = {
  name: "side",
  type: "text",
  label: "Side",
  placeholder: "Suggested side dish"
}

export const recipe = {
  name: "recipe",
  componentClass: "textarea",
  label: "Recipe",
  placeholder: "Show off that recipe (enter html)",
}
