# Swartz-5-Client-Application-d-Immersion-Culturelle
Projet client 

## L'équipe
- Teodora Cozma
- Brigita Sabutyte
- Thomas Melchers
- Gizem Onur

## Outils et ressources
- Trello board : https://trello.com/b/MJf55WmB/client-project
- VS Code : text editor
- Structure du site/information architecture : https://dbdiagram.io/d
- Wireframe mockup : Adobe XD
- Hi-FI prototype : Framer

## Le projet

Site d'immersion culturelle, destiné à devenir une plate-forme de **mise en contact**. Le résultat final de ce projet : une site vitrine qui pourrait servir de prototype hi-fi à présenter aux développeurs qui pourront réaliser la plateforme.

Le projet inclut globalement 3 étapes fondamentales, dont la première, la phase d'immersion et de découverte du site et de ses fonctionnalités basiques, pourrait être réalisé au sein de notre groupe.
(La deuxième étape comportera un jeu de bourse en ligne pour créer des avantages pour organisateurs et visiteurs.)

### Quelques détails

2 types d'utilisateurs :
- Prestataires de séjour :
    - Proposition de séjour, activités, logements, etc. pour faire découvrir leur culture aux visiteurs intéressés.
    - Création d'un compte et possibilité de créer un profil avec leurs informations, le modifier et mettre à jour.

- Clients visiteurs : 
    - Création d'un profil avec leurs informations 
        - Qui sont-ils
        - Leurs préférences
        - Liste d'offres sauvegardés

Les formulaires d'inscriptions dépendront donc du statut (organisateur ou visiteur). Sur les deux, il pourrait y avoir des informations communes (soit nom/pronom, email, créer un mot de passe, etc.), par contre il devrait avoir de nouveaux éléments qui diffère entre chacun (visiteur ou organisteur, quelle culture l'intéresse ou il représente, ...). Même chose lors de la création des profils respectifs.

- Organisateur :
    - Photo de profil
    - Lieu
    - Formules d'immersion (culture + prix)
    - 3 onglets d'informations :
        - Présentation = CV, sur elle, ce qu'elle propose.
        - Formules d'immersions (payant) : sur clique, une carte.
            - Carte avec points numérotés, sur chacun une nouvelle formule d'immersion.
            - Sur un point, aperçu de l'organisateur (photo + les activités qu'il propose)
            - Dans cette carte, on peut retrouver plusieurs autres organisateurs qui font partie de cette même formule d'immersion. Cependant, s'il y en a un parmi eux qui intéresse particulièrement au visiteur, il y a la possibilité de le contacter directement, sans passer par la formule du premier organisateur.
        - Page: display de photos, vidéos publiés.

- Visiteur 
    - Photo de profil
    - Quelle culture l'intéresse ?
    - 2 onglets :
        - Page : publications de voeux, photos, vidéos, intérêts...
        - Immersions : instantané par l'ordinateur, donc des formules pourront lui être proposées selon les préférences qu'elle indique dans son profile (culture, types d'activités...), dans ses recherches (mot-clés utilisés par exemple).
            - Sur clique, une carte sera générée avec des endroits qui lui seront proposés.
        - Donc, pour qu'un visiteur puisse retrouver une formule d'immersion, il pourrait soit passer par la recherche d'un organisateur et voir les formules proposées ; soit, cliquer sur l'onglet *Immersion* pour générer des options selon ses préférences, qu'il pourrait naviguer et sélectionner toujours sur une carte.

Dans un premier temps, il faudrait imaginer une maquette avec un design + aperçu visuel des éléments fonctionnelles qu'elle souhaiterait implémenter. Cette maquette pourrait inclure :
- Logo
- Charte graphique : couleurs, familles de polices/typographie
- Architecture d'informations (sous forme de mindmap ?) :
    - Nombre estimés de pages
    - Le passage d'une page à l'autre via tels onglets
    - L'organisation des informations sur chaque page (user interface)
        - Textes
        - Images/vidéos/autre médias


### Quelques idées pour le design dans la maquette
A la base, ce projet est un projet d'immersion dans une culture. Donc il y a des éléments d'hospitalité, d'être accueillant et chaleureux, et d'un sens de passion dans le partage des éléments d'une culture qui invite les autres à la découvrir et à mieux la connaître.

Qu'est-ce qui fait qu'on a envie de cliquer sur le site et d'y rester pour le naviguer ? La partie vitrine (pour le visiteur non connecté (encore)) devra faire cet appel de rejoindre cette communauté.
(Dans les Ressources, quelques liens d'articles sur les couleurs et le design d'un site en général).

### Premier meeting
Idées pour le visuel :
- Couleurs : orange, ; ça doit se marier ensemble.
- Maquette : fonctionnalités
    - Une journée d'immersion : formule qui inclut une visite à d'autres lieux (restaurants) qui sont également des partenaires. Puis activités, workshops
- Public cible : d'abord les Belges qui sont intéressés par la culture africaine, puis les touristes qui viennent en Belgique pour en découvrir d'autres parties de la ville, les retraités.
    - Langues: français, néerlandais, anglais.
- Organisateurs : mettre la langue parlée 
- Filtre dans le résultat de recherches : 
    - versions en anglais, français, néerlandais -> langue
    - durée/date/disponibilité -> calendrier : pour réserver une/plusieurs places pour telle date.
    - Nombre limite de gens : 3-4 max ?
    - Prix (proposés par l'organisateur)
    - Communauté (ex: marocaine)
- Comment un organisateur pourrait proposer une formule ? 
    - Formulaire de création d'un nouveau formule par les autres partenaires.
        - Champs : Nom, prénom, nom de l'activité, nom de l'endroit/lieux, horaires, descriptif/sommaire, photos de l'endroit.
    - Mercredi : 
- Visiteurs : 
    - Profil: nom, photo, 
    - Formules qu'ils ont découverts
    - Recherches (pour tout le monde)

- Page d'accueil : 
    - Navbar
        - Pas encore de logo ; 
        - Aktyv, ou autres noms à proposer ;
        - Bar de recherche
        - A propos
        - organisateurs/activités (un autre carousel)
        - contact
    - Représenter Bruxelles à travers toute sa diversité (slogan) ; Voir Bruxelles à travers nos yeux ! ;
    - Grande banière / carousel d'images (lieux, activités, emblématiques de la culture, illustrant la multiculturalité)
    - Bar de navigation
    - Slogan
    - Descriptif : faire la connaissance des autres, éviter les préjugés, l'histoire, motivations et le but derrière ce projet = fil conducteur.
        - Personalité de l'organisateur, de la culture, leurs qualités et diversité.
    - Propositions de formules disponible aux visiteurs du site (pas encore inscrits) -> un autre carousel ?
    - Formulaire de contact
    - Footer
        - Réseaux sociaux
        - Autres moyens de communication

Backend :
- Rechercher Contenful

---

## Ressources
- Couleurs: 
    - https://www.business2community.com/marketing/10-colors-that-increase-sales-and-why-0366997
    - https://en.99designs.be/blog/tips/website-color-schemes/
    - https://visme.co/blog/website-color-schemes/
        - 1
        - 11
        - 14
        - 25
        - 50
    - https://neilpatel.com/blog/psychology-of-color-and-conversions/
    - https://www.crazyegg.com/blog/website-color-palettes/

- Références design :
    - https://dribbble.com/shots/11290351-Healthcare
    - https://languesvivantes.com/en/program_types/cultural-immersion/