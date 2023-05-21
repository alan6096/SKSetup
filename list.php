<?php

header('Content-Type: application/json');

$data = [

    "Result" => "OK",

    "Records" => [

        ["Column1" => "Value1", "Column2" => "Value2"],

        ["Column1" => "Value3", "Column2" => "Value4"]

    ]

];

echo json_encode($data);

?>
