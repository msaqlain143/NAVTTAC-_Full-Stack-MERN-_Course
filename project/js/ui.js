// js/ui.js
function createUserCard(user) {
  return `
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
                <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first}">
                <div class="card-body">
                    <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <p class="card-text">
                        <i class="fas fa-envelope mr-2"></i> ${user.email}<br>
                        <i class="fas fa-phone mr-2"></i> ${user.phone}<br>
                        <i class="fas fa-map-marker-alt mr-2"></i> ${user.location.city}, ${user.location.country}
                    </p>
                </div>
            </div>
        </div>
    `;
}

function createUserPreview(user) {
  return `
        <div class="card shadow-sm">
            <img src="${user.picture.large}" class="card-img-top" style="max-height: 200px; object-fit: cover;" alt="${user.name.first}">
            <div class="card-body">
                <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <p class="card-text">
                    <i class="fas fa-envelope mr-2"></i> ${user.email}<br>
                    <i class="fas fa-phone mr-2"></i> ${user.phone}<br>
                    <i class="fas fa-map-marker-alt mr-2"></i> ${user.location.city}, ${user.location.country}<br>
                    Age: ${user.dob.age}<br>
                    Gender: ${user.gender}
                </p>
            </div>
        </div>
    `;
}

export { createUserCard, createUserPreview };
