<?php
$context = stream_context_create(
    array(
        'http' =>
            array(
                'method' => "GET",
                'header' => "X-AUTH-TOKEN: 68874e7171a98129f5640d2550f8783c345c97c7206509f2899a90f4ba7ed10c\r\n"
                    . "Accept: application/json\r\n",
            )
    )
);


$handle = fopen("https://api.meteo-concept.com/api/ephemeride/1?latlng=48.086,-2.635", "r", false, $context);
if ($handle !== false) {
    $data = stream_get_contents($handle);
    fclose($handle);

    if ($data !== false) {
        $cityEph = json_decode($data);
        print("Demain, à {$cityEph->city->name}, le soleil se lèvera à {$cityEph->ephemeride->sunrise} et se couchera à {$cityEph->ephemeride->sunset}.\n");
        print("On comptera ".abs($cityEph->ephemeride->diff_duration_day)." minutes de jour de ".($cityEph->ephemeride->diff_duration_day <= 0 ? "moins" : "plus")." qu'aujourd'hui.\n");
    }
}
