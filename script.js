fetch('workouts.json')
.then(response => response.json())
.then(data => {
    data.forEach(workout => {
        console.log(workout)
        // Selectionner le div avec l'id 'workout-div'
        const workoutDiv = document.getElementById('workout-div');

        // Creer un element div pour chaque workout
        const card = document.createElement('div');
        card.innerHTML =    `<div class="col m-2">
                            <div class="card shadow-sm rounded-3 h-100" style="max-width: 350px; transition: transform 0.2s ease;">
                                <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 class="card-title fw-bold">${workout.titre}</h5>
                                    <p class="card-text text-muted"><em>Date :</em> ${workout.date}</p>
                                </div>
                                <a href="workout.html?id=${workout.id}" class="btn btn-primary mt-3">Voir la séance</a>
                                </div>
                            </div>
                            </div>` ;
        workoutDiv.appendChild(card);
    });
})
.catch(error => console.error("Erreur de chargement JSON :", error));
