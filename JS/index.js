// https://openapi.programming-hero.com/api/news/categories
const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
   fetch(url)
     .then(res => res.json())
     .then(data => displayCategories(data.data.news_category))
   .catch(error => console.log(error))
 }
 const displayCategories = category => {
 
   const categoriesContainer = document.getElementById('categories-container');
   categoriesContainer.innerHTML = '';
   category.forEach(category => {
     const categoryList = document.createElement('ul');
     categoryList.classList.add('navbar-nav');
     categoryList.innerHTML = `
         <li class="nav-item p-4">
         <a  class="nav-link fw-bold fs-5" href="#" onclick ="loadNews('${category.category_id}')">
         ${category.category_name}
         </a>
         </li>                 
       `;
     categoriesContainer.appendChild(categoryList);
   });
   toggleSpinner(false);
 }
 
 document.getElementById('categories-container').addEventListener('click', function (){
   toggleSpinner(true);
   const spinnerLoader = document.getElementById('loading-spinner');
   const spinnerLoaderValue = spinnerLoader.innerText;
   loadCategories(spinnerLoaderValue);
 
 })
 
 
 const toggleSpinner = isLoading => {
   const loaderSection = document.getElementById('loading-spinner');
   if (isLoading) {
     loaderSection.classList.remove('d-none');
   }
   else {
     loaderSection.classList.add('d-none');
   }
 }
 
 loadCategories();
 
 