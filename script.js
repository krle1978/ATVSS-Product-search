// Funkcija za pretragu proizvoda
function searchProducts() {
    const query = document.getElementById("search").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    // Čistimo rezultate pretrage pre svake nove pretrage
    resultsContainer.innerHTML = '';
    // AJAX zahtev za učitavanje JSON podataka
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const products = JSON.parse(xhr.responseText);
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );
            // Prikaz filtriranih rezultata
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const item = document.createElement("div");
                    item.classList.add("result-item");
                    item.textContent = `${product.name} - ${product.price}`;
                    resultsContainer.appendChild(item);
                });
            } else {
                resultsContainer.innerHTML = '<p>Nema rezultata</p>';
            }
        }
    };
    xhr.send();
}
