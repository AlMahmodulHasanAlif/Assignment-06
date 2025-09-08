const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");
const shobTree = document.getElementById("shob-tree");

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
                             <li id="${cat.id}" class="text-black hover:bg-[#15803D] hover:text-white rounded-md px-2.25 py-2 cursor-pointer">
                              ${cat.category_name}
                             </li>
                            </ul>
          `;
  });
  categoryContainer.addEventListener("click", (e) => {
    cardContainer.innerHTML = "";
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
      // console.log(data.plants);
      showTrees(data.plants);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showTrees = (plants) => {
  //   console.log(plants);
  plants.forEach((plant) => {
    cardContainer.innerHTML += `
                             <div class="card bg-white p-4">
                <img
                  class="rounded-lg mb-3 w-full h-64 object-cover"
                  src="${plant.image}"
                  alt=""
                />
                <h3 class="font-semibold text-sm mb-2">${plant.name}</h3>
                <p class="text-[0.75rem] mb-2">
                  ${plant.description}
                </p>
                <div class="flex justify-between mb-2">
                  <h4
                    class="bg-[#DCFCE7] rounded-full text-[#15803D] geist-regular font-medium py-1 px-3"
                  >
                    ${plant.category}
                  </h4>
                  <p class="font-semibold">৳${plant.price}</p>
                </div>
                <button class="bg-[#15803D] text-white py-3 rounded-full">
                  Add to Cart
                </button>
              </div>
        `;
  });
};

const allPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      const shobGach = data.plants;
      // console.log(shobGach);
      allPlantsShow(shobGach);
    });
};
allPlants();
const allPlantsShow = (shobGach) => {
  shobGach.forEach((gach) => {
    cardContainer.innerHTML += `
                                 <div class="card bg-white p-4">
                <img
                  class="rounded-lg mb-3 w-full h-64 object-cover"
                  src="${gach.image}"
                  alt=""
                />
                <h3 class="font-semibold text-sm mb-2">${gach.name}</h3>
                <p class="text-[0.75rem] mb-2">
                  ${gach.description}
                </p>
                <div class="flex justify-between mb-2">
                  <h4
                    class="bg-[#DCFCE7] rounded-full text-[#15803D] geist-regular font-medium py-1 px-3"
                  >
                    ${gach.category}
                  </h4>
                  <p class="font-semibold">৳${gach.price}</p>
                </div>
                <button class="bg-[#15803D] text-white py-3 rounded-full">
                  Add to Cart
                </button>
              </div>
    `;
  });
};


cardContainer.addEventListener('click', (e) => {
    if (e.target.innerText === "Add to Cart") {
      console.log("clicked");
    }
})