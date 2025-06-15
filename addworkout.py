import json
from datetime import datetime
import os

def view_workouts():
    try:
        with open('workouts.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            for workout in data:
                print("\nWorkout ID:", workout['id'])
                print("Title:", workout['titre'])
    except FileNotFoundError:
        print("No workouts found. Please add a workout first.")

    main()

def add_workout():
    # Charger le fichier existant ou créer une liste vide
    if os.path.exists('workouts.json'):
        with open('workouts.json', 'r', encoding='utf-8') as f:
            workouts = json.load(f)
    else:
        workouts = []
    title = input("Enter the title of the workout: ")
    date = input("Enter the date of the workout (YYYY-MM-DD), empty for today: ")
    if not date:
        date = datetime.now().strftime('%Y-%m-%d')

    id_unique = f"{datetime.now().strftime('%Y%m%d')}-{datetime.now().strftime('%H%M%S%f')[:9]}"

    
    # Ajouter des exercices
    exercices = []
    while True:
        nom = input("Nom de l'exercice (ou appuie Entrée pour arrêter) : ")
        if nom == "":
            break
        series = int(input("Nombre de séries : "))
        reps = int(input("Nombre de répétitions : "))
        poids = float(input("Poids (kg) : "))
        exercices.append({
            "nom": nom,
            "series": series,
            "reps": reps,
            "poids": poids
        })

    # Créer la séance
    new_workout = {
        "id": id_unique,
        "titre": title,
        "date": date,
        "exercices": exercices
    }

    # Ajouter et sauvegarder
    workouts.append(new_workout)

    with open('workouts.json', 'w', encoding='utf-8') as f:
        json.dump(workouts, f, ensure_ascii=False, indent=2)

    print("✅ Séance ajoutée avec succès !")
        

def main():
    print("\nWelcome to the WorkoutApp!")
    print("1. Add a new workout\n2. View all workouts\n3. Delete a workout\n4. Exit")
    choice = input("Please enter your choice (1-4): ")
    if choice == '1':
        print("Adding a new workout...")
        add_workout()
    if choice == '2':
        print("Viewing all workouts...")
        view_workouts()
    if choice == '3':
        print("Deleting a workout...")
    if choice == '4':
        print("Exiting the app...")
        exit()
    elif choice not in ['1', '2', '3', '4']:
        print("Invalid choice. Please try again.")

main()

