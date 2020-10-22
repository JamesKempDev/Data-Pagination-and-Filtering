// Define the showPage funcion to take in a list and page number.

function showPage (list, page){
   const startIndex = (page * 9)-9;
   const endIndex = (page * 9);
   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   
   // Iterate over list and create HTML element
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex){
         let name = `${data[i].name.title} ${data[i].name.first} ${data[i].name.last}`;
         let html = `
         <li class="student-item cf">
         <div class="student-details">
         <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
         <h3>${name}</h3>
         <span class="email">${data[i].email}</span>
         </div>
         <div class="joined-details">
         <span class="date">Joined ${data[i].registered.date}</span>
         </div>
         </li>
         `;
         ul.insertAdjacentHTML("beforeend", html);
      }
   }
}

// Dynamically add pagination to the page based on the length of the list parameter.

function addPagination(list){
   let numOfPages = Math.ceil(list.length/9);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let i = 1; i<=numOfPages; i++){
      let li =`<li><button type="button">${i}</button></li>`;   
      linkList.insertAdjacentHTML("beforeend", li);
   }
   let firstButton = linkList.firstElementChild.firstElementChild;
   firstButton.className = 'active';

   linkList.addEventListener('click', (e) =>{
      if (e.target.type==='button'){
         let activeButton = document.querySelector('.active');
         activeButton.className = '';
         e.target.className = 'active';
         activeButton = document.querySelector('.active');
         let pageNumber = activeButton.textContent;
         showPage(data,pageNumber)
      }
   })
}

// show initial data starting with page 1 and display pagination for the total list

showPage(data,1);
addPagination(data);