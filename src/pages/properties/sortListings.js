document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.getElementById('sort');
  const listingsContainer = document.getElementById('listings');
  let listings = [...listingsContainer.children];

  const sortListings = (criteria) => {
    listings.sort((a, b) => {
      const aData = JSON.parse(a.getAttribute('data-listing'));
      const bData = JSON.parse(b.getAttribute('data-listing'));

      if (criteria === 'price') {
        return aData.price - bData.price;
      } else if (criteria === 'size') {
        return aData.size - bData.size;
      } else if (criteria === 'bedrooms') {
        return aData.bedrooms - bData.bedrooms;
      }
      return 0;
    });

    listingsContainer.innerHTML = '';
    listings.forEach(listing => listingsContainer.appendChild(listing));
  };

  sortSelect.addEventListener('change', (event) => {
    sortListings(event.target.value);
  });

  // Initial sort
  sortListings(sortSelect.value);
});