const categories = document.querySelectorAll('.task-category');
const categoriesValue = document.querySelectorAll('.task-category p');
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
