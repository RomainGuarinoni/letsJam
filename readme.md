# letsJamIMT

**le site :** [click here](https://letsjamimt.herokuapp.com)

Ce site permet de gérer la réservation des salles de musiques de l'école IMT Lille Douai simplement .

![](./client/src/assets/site.png)

## Navigation rapide

1. [Comment ça marche ](#Comment-ça-marche)
2. [Pas besoin de raffraichir la page ](#Pas-besoin-de-raffraichir-la-page)
3. [Stack utilisée](#Stack-utilisée)
4. [Améliorations futures](#Amélioration-futures)
5. [Me contacter](#Me-contacter)

## Comment ça marche

1. **Créer un compte**

Sur la page de connexion du site, rentrer juste votre _nom_ ainsi que votree _prenom_ pour créer votre compte

2. **Réserver une salle**

   1. Si la salle est libre, vous pouvez cliquer sur le bouton réserver en passant la souris sur la salle ou en cliquant sur la salle ( quand on est sur télephone ou tablette)

      ![](./client/src/assets/réserver.png)

   2. Si la salle est prise, il faut attendre que son utilisateurs la libèrent. Les salles se libèrent automatiquement au bout de 2 heures.

      ![](./client/src/assets/occupé.png)

3. **Rendre la salle**

Pour rendre la salle, passez la souris au dessus de la salle et cliquez sur le bouton _libérer_ ou cliquez sur la salle ( quand on est sur télephone ou tablette)

![](./client/src/assets/libérer.png)

## Pas besoin de raffraichir la page

Ce site web marche avec les websockets, autremement dit, toutes les infos des salles se mettent a jour toutes seuls sans que vous ayez a raffraichir la page !

## Stack utilisée

J'ai utilisé la **MEVN** Stack pour construire ce site :

- Vue.js
- Node.js
- Express
- Mongodb

### Hébergement

le site est hébergé sur la plateforme **Heroku**.

### Websockets

Pour la gestion des websockets, j'ai utilisé la librairie **socket.io**

## Amélioration futures

- [ ] Ajouter un historique des personnes qui ont prisent les salles
- [ ] Ajouter un moyen de réserver un créneau horraire pour les salles
- [ ] Ajouter plus de personnalisation des comptes
- [ ] Créer tout un environement pour les musiciens leur permettant de discuter entre eux, de créer des groupes ...

## Me contacter

1. mail : romain.guar91@gmail.com ou romain.guarinoni@etu.imt-lille-douai.fr
2. [linkedin](https://www.linkedin.com/in/romain-guarinoni-535445189/)
