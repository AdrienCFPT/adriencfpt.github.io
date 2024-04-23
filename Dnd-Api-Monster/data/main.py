import os

# Chemin du dossier contenant les fichiers
folder_path = './DndMonster'

# Liste pour stocker les noms des fichiers
file_names = []

# Parcourir tous les fichiers dans le dossier
for file_name in os.listdir(folder_path):
    # Vérifier si le chemin correspond à un fichier (et non à un dossier)
    if os.path.isfile(os.path.join(folder_path, file_name)):
        # Ajouter le nom du fichier à la liste
        file_names.append(file_name)

# Afficher les noms des fichiers sous forme de liste JavaScript
print('[' + ', '.join([f"'{file_name}'" for file_name in file_names]) + ']')
