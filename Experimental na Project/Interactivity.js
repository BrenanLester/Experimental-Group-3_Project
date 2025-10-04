const recipeContainer = document.getElementById("all-recipes");
const recommendedContainer = document.getElementById("recommended");

// Nag proprovide ng recipes
function renderRecipes(container, list) {
  container.innerHTML = list.map(r => `
    <div class="recipe-card">
      <img src="${r.image}" alt="${r.title}">
      <h4>${r.title}</h4>
      <a href="Recipe.html?id=${r.id}">View Recipe</a>
    </div>
  `).join("");
}

// Show all recipes
renderRecipes(recipeContainer, recipes);

// Nagpapakita ng 3 recommended na recipe
const recommended = [...recipes].sort(() => 0.5 - Math.random()).slice(0, 3);
renderRecipes(recommendedContainer, recommended);

// Filter recipes per Category
document.getElementById("category-buttons").addEventListener("click", function(e) {
  if (e.target.dataset.category) {
    const filtered = recipes.filter(r => r.category === e.target.dataset.category);
    renderRecipes(recipeContainer, filtered);
  }
});

// View All Recipes button
document.getElementById("view-all-btn").addEventListener("click", function() {
  renderRecipes(recipeContainer, recipes);
});
