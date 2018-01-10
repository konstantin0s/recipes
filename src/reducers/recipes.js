// src/reducers/recipes.js

export const recipes = [
  {
    _id: 'abcd123',
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
    photo: 'http://cd.sseu.re/spanish-omelette.jpg',
    liked: false,
  },
  {
    _id: 'abcd124',
    title: 'Paella',
    summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, etc.',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
    photo: 'http://cd.sseu.re/mixed-seafood-paella.jpeg',
    liked: false,
  },
  {
    _id: 'abcd125',
    title: 'Spare ribs',
    summary: 'Spare ribs are a variety of pork ribs cooked and eaten in various cuisines around the world. They are cut from the lower portion of the pig specifically the belly and breastbone, behind the shoulder, and include 11 to 13 long bones.',
    vegan: false,
    vegetarian: false,
    pescatarian: false,
    photo: 'http://cd.sseu.re/spare-bbq2.jpg',
    liked: false,
  },
  {
    _id: 'abcd126',
    title: 'Agedashi Tofu',
    summary: 'Agedashi Tofu is one of those magical dishes where a few simple ingredients come together in a harmonizing synergy that elevates the dish from humble to divine. It is made with blocks of soft tofu that are coated in a thin layer of potato starch before being lightly fried.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
    photo: 'http://cd.sseu.re/agedashi-tofu.jpg',
    liked: false,
  },
]

export default function(state = recipes, action = {}) {
  if (action.type === 'TOGGLE_LIKE_RECIPE') {
    return state.map((recipe) => {
      if (recipe._id !== action.payload) return recipe
      return { ...recipe, liked: !recipe.liked }
    })
  }
  return state
}
