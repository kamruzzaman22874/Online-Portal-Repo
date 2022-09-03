
const loadNews = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  fetch(url)
     .then(res => res.json())
     .then(data => displayNews(data.data))
     .catch(error => console.log(error))
}

const displayNews = news => {
  // console.log(news.length);
  const newsLength = news.length
  let itemsFound = document.getElementById('itemsFound');
  itemsFound.innerHTML = newsLength;
  console.log(newsLength);

  const newsFeedContainer = document.getElementById('newsFeed');
  newsFeedContainer.innerHTML = '';
  news.forEach(news => {
     // console.log(news);
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
           <p class = "author-title">${news.author.name}</p>
           <p class = "date">${news.author.published_date}</p>
       </div>
       </div>
       <div class = "view mt-5 d-flex">
         <i class="fa-regular fa-eye me-2 mt-2"></i>
         <P class=" me-5 mt-1">${news.total_view}</P>
       </div>
       <div class = "details-button mt-5">
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
           <i class="fa-solid fa-arrow-right"></i>
       </button>
        </div>
      </div>
     </div>
   </div>

     `;
     newsFeedContainer.appendChild(newsDiv);
  })
  console.log(id);

}


const loadModal = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
  fetch(url)
     .then(res => res.json())
     .then(data => displayModal(data.data))
     .catch(error => console.log(error))
}

const displayModal = modal => {
  // console.log(modal);
  modal.forEach(modal => {
  console.log(modal);


  });
}
loadModal()

