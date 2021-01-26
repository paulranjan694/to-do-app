// fetching category containers element
const categories = document.querySelectorAll('.task-category');
// fetching category container values element
const categoriesValue = document.querySelectorAll('.task-category p');
// fetch checkbox element for deleting
const todoDeleteChecked = document.querySelectorAll('.task-delete-checkbox');
// delete btn
const deleteBtn = document.querySelector('.btn-group button:last-child');
// todo description input element
const todoDetailsInput = document.querySelector(
  '#todo-create-form input[type="text"]'
);
// todo category dropdown element
const todoCategory = document.querySelector('#todo-create-form select');
// todo due date element
const dateInput = document.getElementById('due-date');
// add btn
const addBtn = document.querySelector('button[type="submit"]');

// variables for storing inputs
let todoDesc = null;
let todoCate = '';
let dateBool = false;

// validating if user inputs value in form
function validateUserInput() {
  // condition for disabling and enabling buttons
  if (todoDesc.length > 0 && todoCate.length > 0 && dateBool) {
    addBtn.classList.remove('disabled');
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
    addBtn.classList.add('disabled');
  }
}

// todo description validaion
todoDetailsInput.addEventListener('keyup', function (event) {
  todoDesc = event.target.value;
  validateUserInput();
});

// todo category validaion
todoCategory.addEventListener('change', function (event) {
  todoCate = event.target.value;
  console.log(typeof todoCate);
  validateUserInput();
});

// todo date validation
dateInput.addEventListener('change', function (event) {
  let date = new Date(event.target.value);
  let currentDate = new Date('2021-01-18');

  if (date.getTime() >= currentDate.getTime()) {
    dateBool = true;
  } else {
    alert("Due Date should be greater than Today's Date");
    dateBool = false;
    dateInput.value = '';
  }
  validateUserInput();
});

// variable for storing the checked index/indexes for deleting
let checkedIndex = [];

// iterating over all checkbox and making line-through the todos
for (let i of todoDeleteChecked) {
  i.addEventListener('click', function (event) {
    let id = event.target.value;
    let index = checkedIndex.indexOf(id);
    if (!checkedIndex.includes(id)) {
      checkedIndex.push(id);
    } else {
      checkedIndex.splice(index, 1);
    }
    i.parentNode
      .querySelector('.task-details')
      .classList.toggle('line-through');

    if (checkedIndex.length > 0) {
      deleteBtn.classList.remove('disabled');
      deleteBtn.disabled = false;
    } else {
      deleteBtn.classList.add('disabled');
      deleteBtn.disabled = true;
    }
  });
}

// delete btn on click event
deleteBtn.addEventListener('click', function () {
  // sending the array containing ids to be deleted
  $.post('/delete-todo', { checkedIndex }, function () {
    location.reload();
  });
});

// iterating over categories and assigning them appropriate css classes
for (let i = 0; i < categoriesValue.length; i++) {
  switch (categoriesValue[i].textContent.trim()) {
    case 'PERSONAL':
      categories[i].classList.add('personal');
      break;
    case 'WORK':
      categories[i].classList.add('work');
      break;
    case 'SCHOOL':
      categories[i].classList.add('school');
      break;
    case 'CLEANING':
      categories[i].classList.add('cleaning');
      break;
    case 'OTHERS':
      categories[i].classList.add('others');
      break;
  }
}
