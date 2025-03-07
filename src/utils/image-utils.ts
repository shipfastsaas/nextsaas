import fs from 'fs';
import path from 'path';

/**
 * Sauvegarde une image base64 dans le système de fichiers
 * @param base64Data Données base64 de l'image (sans le préfixe data:image/...)
 * @param fileName Nom du fichier à sauvegarder
 * @returns Le chemin relatif vers l'image sauvegardée
 */
export const saveBase64Image = async (base64Data: string, fileName: string): Promise<string> => {
  try {
    // Extraire les données base64 si elles contiennent un préfixe
    let imageData = base64Data;
    if (base64Data.includes(',')) {
      imageData = base64Data.split(',')[1];
    }
    
    // Créer le chemin complet vers le fichier
    const publicDir = path.join(process.cwd(), 'public');
    const imgBlogDir = path.join(publicDir, 'img-blog');
    const filePath = path.join(imgBlogDir, fileName);
    
    // S'assurer que le répertoire existe
    if (!fs.existsSync(imgBlogDir)) {
      fs.mkdirSync(imgBlogDir, { recursive: true });
    }
    
    // Convertir les données base64 en buffer et les écrire dans un fichier
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(filePath, buffer);
    
    // Retourner le chemin relatif pour l'accès via URL
    return `/img-blog/${fileName}`;
  } catch (error) {
    console.error('Error saving image:', error);
    throw new Error('Failed to save image');
  }
};

/**
 * Détermine le type MIME d'une image à partir de ses données base64
 * @param base64Data Données base64 avec préfixe (data:image/...)
 * @returns Le type d'image (png, jpeg, gif, etc.)
 */
export const getImageTypeFromBase64 = (base64Data: string): string => {
  try {
    // Format attendu: data:image/png;base64,...
    const matches = base64Data.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    return 'png'; // Type par défaut
  } catch (error) {
    console.error('Error determining image type:', error);
    return 'png'; // Type par défaut en cas d'erreur
  }
};
