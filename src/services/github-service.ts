import { Octokit } from '@octokit/rest';

// Initialiser Octokit avec le token GitHub
const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
});

/**
 * Ajoute un collaborateur à un dépôt GitHub ou envoie une invitation
 * @param email Email de l'acheteur
 * @param repoName Nom du dépôt (format: owner/repo)
 * @returns Résultat de l'opération
 */
export async function addCollaboratorToRepo(email: string, repoName: string = "shipfastsaas/nextsaas") {
  try {
    // Décomposer le nom du dépôt
    const [owner, repo] = repoName.split('/');
    
    // Option 1: Si l'utilisateur a un compte GitHub associé à cet email
    try {
      // Rechercher l'utilisateur GitHub par email
      const { data: users } = await octokit.search.users({
        q: `${email} in:email`
      });
      
      if (users.items.length > 0) {
        const username = users.items[0].login;
        
        // Ajouter l'utilisateur comme collaborateur
        await octokit.repos.addCollaborator({
          owner,
          repo,
          username,
          permission: "pull" // Accès en lecture seule
        });
        
        return { 
          success: true, 
          method: "direct_invite",
          username,
          inviteUrl: `https://github.com/${owner}/${repo}`
        };
      }
    } catch (error) {
      console.log("Recherche d'utilisateur GitHub échouée, utilisation de l'invitation par email");
    }
    
    // Option 2: Invitation par email si l'utilisateur n'est pas trouvé
    const result = await octokit.repos.createInvitation({
      owner,
      repo,
      email,
      permissions: "pull"
    });
    
    return { 
      success: true, 
      method: "email_invite",
      inviteUrl: `https://github.com/${owner}/${repo}`,
      inviteId: result.data.id
    };
  } catch (error) {
    console.error("Erreur lors de l'ajout du collaborateur:", error);
    return { success: false, error };
  }
}

/**
 * Vérifie si un email a déjà accès au dépôt
 */
export async function checkRepoAccess(email: string, repoName: string = "shipfastsaas/nextsaas") {
  try {
    const [owner, repo] = repoName.split('/');
    
    // Récupérer tous les collaborateurs
    const { data: collaborators } = await octokit.repos.listCollaborators({
      owner,
      repo
    });
    
    // Vérifier si l'email correspond à l'un des collaborateurs
    // Note: Cette vérification est imparfaite car GitHub n'expose pas les emails
    // Une meilleure approche serait de maintenir votre propre base de données
    
    return { success: true, hasAccess: false }; // Par défaut, on suppose qu'il n'a pas accès
  } catch (error) {
    console.error("Erreur lors de la vérification d'accès:", error);
    return { success: false, error };
  }
}
