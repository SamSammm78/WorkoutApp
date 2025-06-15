const params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(`Workout ID: ${id}`);

fetch('workouts.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    const findedWorkout = data.find(workout => workout.id === id);
    if (findedWorkout) {
        console.log(findedWorkout);
        const seance = findedWorkout;
        const workoutDiv = document.getElementById('workout-div');
        const card = document.createElement('div');
        card.innerHTML = `<div class="card shadow rounded-4 p-4 mb-5" style="max-width: 600px; margin: auto;">
                        <h2 class="card-title mb-3 fw-bold text-primary">${seance.titre}</h2>
                        <p class="text-muted mb-4"><em>Date :</em> ${seance.date}</p>

                        <div>
                            <h5 class="fw-semibold mb-3">Exercices :</h5>
                            <ul class="list-group">
                            ${seance.exercices.map(ex => `
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>${ex.nom}</strong><br>
                                    <small>Séries : ${ex.series} | Répétitions : ${ex.reps}</small>
                                </div>
                                <span class="badge bg-primary rounded-pill">${ex.poids ? ex.poids + ' kg' : 'Poids libre'}</span>
                                </li>`).join('')}
                            </ul>
                        </div>
                        </div>
                        `;
        workoutDiv.appendChild(card);
    }
})
.catch(error => console.error("Erreur de chargement JSON :", error));

