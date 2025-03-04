import * as model from "./model.js";

// import "core-js/stable";
// import "regenerator-runtime/runtime";
import recipeView from "./views/recipeView.js";

// const recipeContainer = document.querySelector(".recipe");

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////


const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    //guard class
    if (!id) return;

    recipeView.renderSpinner();

    //Load Recipe Data
    await model.loadRecipe(id);
    // let { recipe } = model.state;
    //Render UI
    recipeView.render(model.state.recipe)
   
  } catch (error) {
    console.log(error.message);
  }
};

["hashchange", "load"].forEach((evt) =>
  window.addEventListener(evt, controlRecipes)
);
