export function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
  
    searchInput.addEventListener('input', function (event) {
      const searchTerm = event.target.value.trim();

      console.log('Search Term:', searchTerm);
    });
  }
  