fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => renderCards(data))
  .catch((error) => console.error('Ошибка', error));

const renderCards = (cards) => {
  const wrapper = document.querySelector('.wrapper');
  const searchInput = document.querySelector('.search');
  cards.forEach((card) => {
    wrapper.innerHTML += `
                     <div class="card">
               <div class="card">
                  <img src=${card.image} alt="">
                  <h3>${card.title}</h3>
                  <p>${card.description}</p>
                  <h4>${card.price}</h4>
               </div>
         `;
  });
  searchInput.addEventListener('input', () => {
   const query = searchInput.value 
   const filteredCards = cards.filter( card => card.title.includes(query))

   wrapper.innerHTML = ''

   filteredCards.forEach(card => {
      wrapper.innerHTML += `
      <div class="card">
<div class="card">
   <img src=${card.image} alt="">
   <h3>${card.title}</h3>
   <p>${card.description}</p>
   <h4>${card.price}</h4>
</div>
`;
   })
  });
};
