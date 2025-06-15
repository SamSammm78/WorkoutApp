fetch('workouts.json')
.then(response => response.json())
.then(data => {
    data.forEach(workout => {
        console.log(workout)
        // Selectionner le div avec l'id 'workout-div'
        const workoutDiv = document.getElementById('workout-div');

        // Creer un element div pour chaque workout
        const card = document.createElement('div');
        card.innerHTML =    `<div class="col-md-4 mb-4 shadow-sm card rounded-3 mb-4" style="max-width: 350px; transition: transform 0.2s ease;">
                            <div class="card-body">
                            <h5 class="card-title fw-bold">${workout.titre}</h5>
                            <p class="card-text text-muted"><em>Date :</em> ${workout.date}</p>
                            <a href="workout.html?id=${workout.id}" class="btn btn-primary">Voir la séance</a>
                            </div>
                            </div>` 
        workoutDiv.appendChild(card);
    });
})
.catch(error => console.error("Erreur de chargement JSON :", error));
