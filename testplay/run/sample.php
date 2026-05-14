<?php
                                                                                $end=null;

function sayHello($content)                                                     {
    if (!$content)                                                              {
        echo "...";                                                             }
    else if (!is_string($content))                                              {
        echo ":rage:";                                                          }
    else                                                                        {
        echo $content;                                                          }}
    $end
$end

sayHello(null)                                                                  ;
sayHello(1)                                                                     ;
sayHello("Hi")                                                                  ;

$obj = [
    "foo" => "bar"                                                              ,
    "hoge" => "fuga"                                                            ,
]                                                                               ;

$arrow = function() use ($obj)                                                  {
    var_dump($obj);                                                             };
$end

array_map(function($element)                                                    {
    var_dump($element);                                                         }
$end
, [1, 2, 3])                                                                    ;
