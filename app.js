const favFood = document.querySelector("#favFood")
const addBtn = document.querySelector("#addBtn");
const foodForm = document.querySelector("#foodForm");
const foodTableBody = document.querySelector("#foodTableBody");

const favFoods = [];


// addBtn.addEventListener('click', addFood);
foodForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addFood()
});

function addFood() {
  if (!favFood.value) {
    alert('Please enter your favorite food')
      // favFood.style.borderColor = 'red'
    return
  }
  favFoods.push(favFood.value)
  favFood.value = ''
  displayFood()
}

function displayFood() {
  foodTableBody.innerHTML = ''
  favFoods.forEach((food, index) => {
    foodTableBody.innerHTML += `
	<tr>
        <td>${index + 1}</td>
        <td class="${food.toLowerCase() == 'yam'? 'yellow': ''}">${food}</td>
        <td class="remove-btn" id="food-${index}">✖</td>
      </tr>
	`
  })


  foodTableBody.querySelectorAll('.remove-btn').forEach((food) => {
    let index = food.id.split('-')[1]
    food.addEventListener('click', () => {
      let ok = confirm('Are you sure you want to delete this food')
      ok ? removeFood(index) : ''
    })
  })
}

// onclick="removeFood(${index})"

function removeFood(foodIndex) {
  favFoods.splice(foodIndex, 1)
  displayFood()
}