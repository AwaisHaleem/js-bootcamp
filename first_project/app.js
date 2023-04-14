// IIFE Immediately Invoked Function Expressions

(async function () {
  const response = await fetch("./recipe.json");
  const recipes = await response.json();

  const inputElement = document.getElementById("searchInput");
  const btnElement = document.getElementById("searchBtn");
  const listElement = document.getElementById("recipe-list");
  const detailElement = document.getElementById("recipeDetailsContainer");

  function loadRecipeDetails(recipe) {
    console.log(recipe);
    detailElement.innerHTML = `
      <h2 class="title">${recipe.title}</h2>
      <ul>
      ${recipe.ingredients
        .map((ingredient) => {
          return "<li>" + ingredient + "</li>";
        })
        .join("")}
      </ul>
      <h3>Instruction</h3>
      <div>${recipe.instructions}</div>
    `;
  }

  function displaySearchResult(result) {
    listElement.innerHTML = "";
    result.forEach((recipe) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="title">${recipe.title}</div>
        <div class="description">${recipe.description}<dive>
        `;
      li.addEventListener("click", loadRecipeDetails(recipe));
      listElement.appendChild(li);
    });
  }

  function search() {
    const query = inputElement.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.join(" ").toLowerCase().includes(query)
      );
    });
    displaySearchResult(filteredRecipes);
  }

  btnElement.addEventListener("click", search);
})();
