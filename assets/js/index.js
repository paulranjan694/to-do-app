const categories = document.querySelectorAll('.task-category');
const categoriesValue = document.querySelectorAll('.task-category p');

const todoDeleteChecked = document.querySelectorAll(
  '.task-delete-checkbox input'
);

const deleteBtn = document.querySelector('.btn-group button:last-child');

let checkedIndex = [];

function deleteCheckedHandler(idChecked) {
  console.log(this);
  // this.style.color = 'red';
  let index = checkedIndex.indexOf(idChecked);
  if (!checkedIndex.includes(idChecked)) {
    checkedIndex.push(idChecked);
  } else {
    checkedIndex.splice(index, 1);
  }
}

deleteBtn.addEventListener('click', function () {
  $.post('/delete-todo', { checkedIndex }, function () {
    location.reload();
  });
});

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
