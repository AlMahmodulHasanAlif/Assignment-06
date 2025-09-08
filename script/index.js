const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");

const loadCategory = () => {
  fetch(`https://openapi.programming-hero.com/api/categories`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.categories);
      const categories = data.categories;
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};

loadCategory();

const showCategory = (categories) => {
  categories.forEach((cat) => {
    // console.log(cat.category_name);
    categoryContainer.innerHTML += `
                          <ul class="">
                             <li id="${cat.id}" class="text-black hover:bg-[#15803D] hover:text-white rounded-md px-2.25 py-2">
                              ${cat.category_name}
                             </li>
                            </ul>
          `;
  });
  categoryContainer.addEventListener("click", (e) => {
    if (e.target.localName === "li") {
      const allLi = document.querySelectorAll("li");
      allLi.forEach((li) => {
        li.classList.remove("bg-[#15803D]", "text-white");
      });
      //   console.log(e.target.id);
      e.target.classList.add("bg-[#15803D]", "text-white");
      loadTreesByCategory(e.target.id);
    }
  });
};

const loadTreesByCategory = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.plants);
        showTrees(data.plants)
    })
    .catch((err) => {
      console.log(err);
    });
};

const showTrees = (plants) => {
    
}