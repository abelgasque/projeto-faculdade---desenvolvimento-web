<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Categoria extends RestController {
    
    function __construct() {
        parent::__construct();
        $this->load->model('categoria_model'); 
    }

    public function listar_get() {
        $data = $this->categoria_model->getAll();
        $this->response($data, 200);
    }
}