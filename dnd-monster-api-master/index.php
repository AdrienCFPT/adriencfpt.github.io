<?php
const ROOT = ".";
require_once ROOT . '/php/HTTP_ERROR_CODE.php';

switch ($_SERVER["REQUEST_METHOD"]) {
    case 'GET':
        $response = MethodGetForMonster();
        break;

    default:
        $response = MethodNotAllowed();
        break;
}

http_response_code($response['code']);
header('Content-Type: application/json');
header("Access-Control-Allow_Origin: *");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");

echo json_encode($response['data']);

exit;

/**
 * Traiter les requètes de type POST pour le login
 * @return array Le tableau de réponse [code et data]
 */
function MethodGetForMonster(): array
{
    // Préparer La réponse
    $response = [
        'code' => HTTP_OK,
        'data' => []
    ];

    $data = array();
    $dirPath = "./data/DndMonster";

    $files = scandir($dirPath);
    foreach ($files/*array_slice($files, 0, 5)*/ as $file) {
        $filePath = $dirPath . '/' . $file;

        if (is_file($filePath)) {
            $jsonData = json_decode(file_get_contents($filePath));
            $isInFilter = true;

            if ($isInFilter) {
                array_push($data, $jsonData);
            }
        }
    }

    array_push($response['data'], $data);

    return $response;
}

function MethodNotAllowed(): array
{
    $method = $_SERVER['REQUEST_METHOD'];
    $script = basename($_SERVER['SCRIPT_NAME']);

    return [
        'code' => HTTP_METHOD_NOT_ALLOWED,
        'data' => [
            'error' => "Method '{$method}' is not supported by {$script}"
        ],
    ];
}