<?php

function sayHello($content) {
    if (!$content) {
        echo "...";
    } else if (!is_string($content)) {
        echo ":rage:";
    } else {
        echo $content;
    }
}

sayHello(null);
sayHello(1);
sayHello("Hi");

$obj = [
    "foo" => "bar",
    "hoge" => "fuga",
];

$arrow = function() use ($obj) {
    var_dump($obj);
};

array_map(function($element) {
    var_dump($element);
}, [1, 2, 3]);
