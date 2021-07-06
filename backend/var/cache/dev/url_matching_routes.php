<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/demande' => [[['_route' => 'demande', '_controller' => 'App\\Controller\\DemandeController::index'], null, null, null, false, false, null]],
        '/entreprise' => [[['_route' => 'entreprise', '_controller' => 'App\\Controller\\EntrepriseController::index'], null, null, null, false, false, null]],
        '/projet' => [[['_route' => 'projet', '_controller' => 'App\\Controller\\ProjetController::index'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\RegistrationController::register'], null, ['POST' => 0], null, false, false, null]],
        '/soutenance' => [[['_route' => 'soutenance', '_controller' => 'App\\Controller\\SoutenanceController::index'], null, null, null, false, false, null]],
        '/user' => [[['_route' => 'user', '_controller' => 'App\\Controller\\UserController::index'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/api(?'
                    .'|(.+)(*:18)'
                    .'|/login_check(*:37)'
                .')'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:73)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        18 => [[['_route' => 'api_route', '_controller' => 'App\\Controller\\ApiController::index'], ['params'], null, null, false, true, null]],
        37 => [[['_route' => 'api_login_check'], [], ['POST' => 0], null, false, false, null]],
        73 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
