<?php
/**
 * Ce fichier contient des codes d'erreurs avec leurs descriptions
 */

// L'opération est réussie, mettre à jour l'affichage
const HTTP_OK = 200;

// La ressource a été crée, mettre à jour l'affichage
const HTTP_CREATED = 201;

// Les données reçues ne sont pas correctes
const HTTP_BAD_REQUEST = 400;

// Vous n'êtes pas identifié;
const HTTP_UNAUTHORIZED = 401;

// Vous êtes identifié, mais n'avez pas les droits de faire ceci
const HTTP_FORBIDDEN = 403;

// La ressource demandée n'existe pas
const HTTP_NOT_FOUND = 404;

// La méthode est connue par le serveur mais n'est pas prise en charge pour la ressource cible
const HTTP_METHOD_NOT_ALLOWED = 405;

// Je suis une théière
const HTTP_TEAPOT = 418;