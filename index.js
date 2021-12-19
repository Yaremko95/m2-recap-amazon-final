const books = [
  {
    asin: "1940026091",
    title: "Pandemic (The Extinction Files, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
    price: 7.81,
    category: "scifi",
    condition: "new",
  },
  {
    asin: "0316438960",
    title: "The Last Wish: Introducing the Witcher",
    img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    price: 9.59,
    category: "fantasy",
    condition: "collectible",
  },
  {
    asin: "0425264041",
    title: "Shards of Hope (Psy-Changeling Novel, A)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg",
    price: 7.59,
    category: "scifi",
    condition: "new",
  },
  {
    asin: "1509854525",
    title: "The Charmed Life of Alex Moore",
    img: "https://images-na.ssl-images-amazon.com/images/I/61PVMb6YCaL.jpg",
    price: 23.33,
    category: "scifi",
    condition: "used",
  },
  {
    asin: "0062059882",
    title: "American Gods: The Tenth Anniversary Edition: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/519mwdpzlmL.jpg",
    price: 14.94,
    category: "fantasy",
    condition: "new",
  },
  {
    asin: "0008120692",
    title: "The Ark (The Ark Trilogy, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51A8BmESq5L.jpg",
    price: 9.36,
    category: "scifi",
    condition: "used",
  },
  {
    asin: "1621579832",
    title:
      "Justice on Trial: The Kavanaugh Confirmation and the Future of the Supreme Court",
    img: "https://images-na.ssl-images-amazon.com/images/I/71WdFQNYSJL.jpg",
    price: 17.39,
    category: "history",
    condition: "collectible",
  },
  {
    asin: "1626493014",
    title: "Fall and Rising",
    img: "https://images-na.ssl-images-amazon.com/images/I/51e7A-DT9fL.jpg",
    price: 7.77,
    category: "scifi",
    condition: "new",
  },
  {
    asin: "0385349947",
    title: "Lean In: Women, Work, and the Will to Lead",
    img: "https://images-na.ssl-images-amazon.com/images/I/81coZ37EmxL.jpg",
    price: 14.3,
    category: "history",
    condition: "used",
  },
  {
    asin: "0743270754",
    title: "Team of Rivals: The Political Genius of Abraham Lincoln",
    img: "https://images-na.ssl-images-amazon.com/images/I/51bpOR8qigL.jpg",
    price: 13.14,
    category: "history",
    condition: "new",
  },
  {
    asin: "1623808928",
    title: "Children of Forever",
    img: "https://images-na.ssl-images-amazon.com/images/I/61hJ8Nc-KpL.jpg",
    price: 3.25,
    category: "scifi",
    condition: "collectible",
  },
  {
    asin: "0008288798",
    title: "A Reaper at the Gates (Ember Quartet, Book 3)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91vFU0KCm9L.jpg",
    price: 12.6,
    category: "romance",
    condition: "used",
  },
  {
    asin: "0553808044",
    title:
      "A Game of Thrones: The Illustrated Edition: A Song of Ice and Fire: Book One",
    img: "https://images-na.ssl-images-amazon.com/images/I/A12tbaSby%2BL.jpg",
    price: 28.06,
    category: "fantasy",
    condition: "new",
  },
  {
    asin: "1578562953",
    title: "Edge of Eternity",
    img: "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
    price: 15.19,
    category: "romance",
    condition: "new",
  },
  {
    asin: "1629143715",
    title: "The Man from Battle Flat: A Western Trio",
    img: "https://images-na.ssl-images-amazon.com/images/I/71GCjmvwIjL.jpg",
    price: 11.91,
    category: "romance",
    condition: "new",
  },
  {
    asin: "156975599X",
    title: "Patriots: A Novel of Survival in the Coming Collapse",
    img: "https://images-na.ssl-images-amazon.com/images/I/51REczj2RJL.jpg",
    price: 14.0,
    category: "horror",
    condition: "new",
  },
  {
    asin: "0735215251",
    title: "The Pharaoh's Secret (The NUMA Files)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71EOFkXiVxL.jpg",
    price: 6.79,
    category: "horror",
    condition: "new",
  },
  {
    asin: "0399177574",
    title: "Illidan: World of Warcraft: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/81khLUoMKaL.jpg",
    price: 6.12,
    category: "horror",
    condition: "used",
  },
];

const filters = {
  search: "",
  categories: [],
  conditions: [],
  price: null,
};
const cart = [];

const renderCategories = function (books) {
  const parent = document.querySelector("#categories");
  const categories = [];

  for (let i = 0; i < books.length; i++) {
    if (!categories.includes(books[i].category)) {
      categories.push(books[i].category);
      const checkBox = ` <div class="form-check">
              <input class="form-check-input" type="checkbox" id="${books[i].category}" />
              <label class="form-check-label" for="${books[i].category}">
               ${books[i].category}
              </label>
            </div>`;
      parent.innerHTML += checkBox;
    }
  }
};

const renderConditions = function (books) {
  const parent = document.querySelector("#conditions");
  const conditions = [];

  for (let i = 0; i < books.length; i++) {
    if (!conditions.includes(books[i].condition)) {
      conditions.push(books[i].condition);
      const checkBox = ` <div class="form-check">
              <input class="form-check-input" type="checkbox" id="${books[i].condition}" />
              <label class="form-check-label" for="${books[i].condition}">
               ${books[i].condition}
              </label>
            </div>`;
      parent.innerHTML += checkBox;
    }
  }
};

const renderBooks = function (books) {
  const parent = document.querySelector("#books");
  parent.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const child = ` <div class="col col-lg-2 px-lg-1 mb-4">
              <div class="book-card" id="${books[i].asin}">
                <div class="book-image">
                  <img
                    src="${books[i].img}"
                  />
                   <div class="add-to-cart">
                    <i class="fas fa-cart-plus"></i>
                    <span class="ml-1">Add to cart</span>
                  </div>
                </div>
                <div class="book-info d-flex flex-column mt-2">
                  <span class="book-title"
                    >${books[i].title}</span
                  >
                  <div
                    class="
                      d-flex
                      w-100
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span class="book-category mt-1">${books[i].category}</span>
                    <span class="book-price mt-1">${books[i].price}</span>
                  </div>
                </div>
              </div>
            </div>`;
    parent.innerHTML += child;
  }
  addToCartListener();
};
const filterBySearch = function (arr) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title.toLowerCase().includes(filters.search.toLowerCase())) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
};

const filterByPrice = function (arr) {
  let filtered = [];
  console.log(filters.price);
  for (let i = 0; i < arr.length; i++) {
    console.log(parseInt(filters.price[0]), parseInt(filters.price[1]));
    if (
      parseInt(filters.price[0]) <= arr[i].price &&
      parseInt(filters.price[1]) >= arr[i].price
    ) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
};
const filterByCategories = function (arr) {
  const filterd = [];
  const categories = filters.categories;
  for (let i = 0; i < arr.length; i++) {
    if (categories.includes(arr[i].category)) {
      filterd.push(arr[i]);
    }
  }
  return filterd;
};
const filterByConditions = function (arr) {
  const filterd = [];
  const conditions = filters.conditions;
  for (let i = 0; i < arr.length; i++) {
    if (conditions.includes(arr[i].condition)) {
      filterd.push(arr[i]);
    }
  }
  return filterd;
};

const applyFilters = function () {
  let result = books;

  if (filters.search.length > 0) {
    result = filterBySearch(result);
  }
  if (filters.price) {
    result = filterByPrice(result);
  }
  if (filters.categories.length > 0) {
    result = filterByCategories(result);
  }
  if (filters.conditions.length > 0) {
    result = filterByConditions(result);
  }
  console.log(result);
  renderBooks(result);
};
const categoriesListener = function () {
  const checkBoxes = document.querySelectorAll("#categories .form-check-input");
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", function (e) {
      const isChecked = e.target.checked;
      const checkedValue = e.target.id;
      if (isChecked) {
        filters.categories.push(checkedValue);
      } else {
        const index = filters.categories.indexOf(checkedValue);
        filters.categories.splice(index, 1);
      }

      applyFilters();
    });
  }
};

const conditionsListener = function () {
  const checkBoxes = document.querySelectorAll("#conditions .form-check-input");
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", function (e) {
      const isChecked = e.target.checked;
      const checkedValue = e.target.id;
      if (isChecked) {
        filters.conditions.push(checkedValue);
      } else {
        const index = filters.conditions.indexOf(checkedValue);
        filters.conditions.splice(index, 1);
      }
      applyFilters();
    });
  }
};

const priceListener = function () {
  const btn = document.querySelector("#priceFilterBtn");
  btn.addEventListener("click", function () {
    const minValue = document.querySelector("#minPrice").value;
    const maxValue = document.querySelector("#maxPrice").value;
    filters.price = [minValue, maxValue];
    console.log(filters);
    applyFilters();
  });
};

const searchListener = function () {
  const btn = document.querySelector("#search");
  btn.addEventListener("change", function (e) {
    e.preventDefault();
    filters.search = e.target.value;
    applyFilters();
  });
};
const displayCartTotal = function () {
  const cartTotal = document.querySelector("#card-total");
  cartTotal.innerText = cart.length;
};

const addToCartListener = function () {
  const btns = document.querySelectorAll(".add-to-cart");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
      const id = e.target.closest(".book-card").id;
      cart.push(id);
      displayCartTotal();
    });
  }
};

const generateCart = function () {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "";
  const totalSumDiv = document.getElementById("totalPrice");
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    if (cart.includes(books[i].asin)) {
      total += books[i].price;
      const cartBook = `<div
              class="
                d-flex
                w-100
                justify-content-between
                align-items-center
                mb-4
              "
            >
              <div class="cart-book d-flex" id="${books[i].asin}">
                <img
                  src="${books[i].img}"
                />
                <div class="d-flex flex-column ml-2 pl-2">
                  <span class="book-title"
                    >${books[i].title}</span
                  >
                  <span class="mt-2 remove-btn " onclick="removeFromCart(event)">Remove</span>
                </div>
              </div>
              <div>
                <span>${books[i].price}</span>
              </div>
            </div>`;
      modalBody.innerHTML += cartBook;
    }
  }
  totalSumDiv.innerText = `$${total}`;
};

const removeFromCart = function (e) {
  const id = e.target.closest(".cart-book").id;
  const indexInCart = cart.indexOf(id);
  cart.splice(indexInCart, 1);
  generateCart();
};

window.onload = function () {
  renderBooks(books);
  renderCategories(books);
  renderConditions(books);
  categoriesListener();
  conditionsListener();
  priceListener();
  searchListener();
};
