<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Subcategoria extends RestController {
    
    function __construct() {
        parent::__construct();
        $this->load->model('subcategoria_model'); 
    }

    public function listar_get() {
        $id = $this->uri->segment(3);
        $data = $this->subcategoria_model->getCategoriaById($id);
        $this->response($data, 200);
    }
}