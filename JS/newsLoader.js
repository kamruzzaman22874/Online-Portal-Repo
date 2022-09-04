
const loadNews = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
   fetch(url)
     .then(res => res.json())
     .then(data => displayNews(data.data))
   .catch(error => console.log(error))
 }
 
 const displayNews = news => {
   const newsLength = news.length
   let itemsFound = document.getElementById('itemsFound');
   itemsFound.innerHTML = newsLength;
 
   const newsFeedContainer = document.getElementById('newsFeed');
   newsFeedContainer.innerHTML = '';
   news.sort((s1, s2) => s2.total_view - s1.total_view).forEach(news => {    
     const newsDiv = document.createElement('Div');
     newsDiv.classList.add('col');
     newsDiv.innerHTML = `
     <div class="card">
       <img src="${news.thumbnail_url}" class="card-img-top">
       <div class="card-body">
         <h5 class="card-title">
         ${news.title.length > 20 ? news.title.slice(0, 20) + '...': news.title}
         </h5>
         <p class="card-text">
         ${news.details.length > 100 ? news.details.slice(0, 100) + '...' : news.details}
         </p>
         <div class="card-footer d-flex">
         <div class = "author d-flex">
         <img src="${news.author.img}" class="card-img-top rounded rounded-circle mt-4 me-2" style=" width:30%; height:40%;">
         <div class = "author-content">
         <p class = "author-title">
         ${news.author.name? news.author.name : 'No data!'}
         </p>
         <p class = "date">
         ${news.author.published_date}
         </p>
         </div>
         </div>
         <div class = "view mt-5 d-flex">
         <i class="fa-regular fa-eye me-2 mt-2"></i>
         <P class=" me-5 mt-1">
         ${news.total_view? news.total_view : 'No!'}
         </P>
         </div>
         <div class = "details-button mt-5">
         <button onclick="showDetails('${news.category_id}','${news._id}')"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i class="fa-solid fa-arrow-right"></i>
         </button>
         </div>
         </div>
       </div>
     </div>
 
 
 
 
       `;
     newsFeedContainer.appendChild(newsDiv);
   }) 
 
   
 }
 
 
 //  News Feed default Display
 const loadNewsTwo = () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`
   fetch(url)
     .then(res => res.json())
     .then(data => displayNews(data.data))
   .catch(error => console.log(error))
 }
 
 const displayNewsTwo = news => {
   const newsLength = news.length
   let itemsFound = document.getElementById('itemsFound');
   itemsFound.innerHTML = newsLength;
 
   const newsFeedContainer = document.getElementById('newsFeed');
   newsFeedContainer.innerHTML = '';
   news.sort((s1, s2) => s2.total_view - s1.total_view).forEach(news => {    
     const newsDiv = document.createElement('Div');
     newsDiv.classList.add('col');
     newsDiv.innerHTML = `
     <div class="card">
       <img src="${news.thumbnail_url}" class="card-img-top">
       <div class="card-body">
         <h5 class="card-title">
         ${news.title.length > 20 ? news.title.slice(0, 20) + '...': news.title}
         </h5>
         <p class="card-text">
         ${news.details.length > 100 ? news.details.slice(0, 100) + '...' : news.details}
         </p>
         <div class="card-footer d-flex">
         <div class = "author d-flex">
         <img src="${news.author.img}" class="card-img-top rounded rounded-circle mt-4 me-2" style=" width:30%; height:40%;">
         <div class = "author-content">
         <p class = "author-title">
         ${news.author.name? news.author.name : 'No data!'}
         </p>
         <p class = "date">
         ${news.author.published_date? news.author.published_date : 'No data!'}
         </p>
         </div>
         </div>
         <div class = "view mt-5 d-flex">
         <i class="fa-regular fa-eye me-2 mt-2"></i>
         <P class=" me-5 mt-1">
         ${news.total_view? news.total_view : 'No!'}
         </P>
         </div>
         <div class = "details-button mt-5">
         <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i class="fa-solid fa-arrow-right"></i>
         </button>
         </div>
         </div>
       </div>
     </div>
 
       `;
     newsFeedContainer.appendChild(newsDiv);
   }) 
 }
 loadNewsTwo('01')
 displayNewsTwo('01')
 
 
 
 // Modal
 
 
 
 
 
 
 // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 //   <div class="modal-dialog">
 //     <div class="modal-content">
 //       <div class="modal-header">
 //         <h5 class="modal-title" id="exampleModalLabel">${news._id}</h5>
 //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
 //       </div>
 //       <div class="modal-body">
 //         ...
 //       </div>
 //       <div class="modal-footer">
 //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
 //         <button type="button" class="btn btn-primary">Save changes</button>
 //       </div>
 //     </div>
 //   </div>
 // </div>
 