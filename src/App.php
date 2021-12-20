<?php

namespace Bastien\CalculNotes;

class App
{

    private array $post;

    /**
     * @param array $post
     */
    public function __construct(array $post)
    {
        $this->post = $post;
    }
}