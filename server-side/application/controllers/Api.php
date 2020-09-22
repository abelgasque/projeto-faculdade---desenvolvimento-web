<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Api extends RestController {
    
    function __construct() {
        parent::__construct();
        $this->load->model('pessoa_model'); 
    }

    public function pessoas_post() {   
        $data = [
            'id_pessoa' => 0,
            'nome' => $this->post('nome'),
            'sobrenome' => $this->post('sobrenome'),
            'cpf' => $this->post('cpf'),
            'tipo' => $this->post('tipo'),
            'genero' => $this->post('genero'),
            'situacao' => $this->post('situacao')
        ];
        $resp = $this->pessoa_model->insert($data);
        if($resp === true){
            $this->set_response("Pessoa criada com sucesso", 200);
        }else{
            $this->set_response("Erro ao criar pessoa", 404);
        }
    } 

    public function pessoas_put() {   
        $id = $this->uri->segment(3);
        $data = array(
            'nome' => $this->input->get('nome'),
        );
        $resp = $this->pessoa_model->update($id, $data);
        if($resp === true) {
            $this->response("Pessoa alterada com sucesso", 200 );
        }else {
            $this->response([
                'status' => false,
                'message' => 'Pessoa inexistente!'
            ], 404);
        }
    }

    public function pessoas_delete() {   
        $id = $this->uri->segment(3);
        if($id <= 0) {
            $this->response(null, 404);
        }
        $resp = $this->pessoa_model->deleteById($id);
        if($resp === true){
            $this->response("Pessoa deletada com sucesso", 204);
        }else{
            $this->response([
                'status' => false,
                'message' => 'Pessoa inexistente!'
            ], 404);
        }
    } 

    public function pessoas_get() {
        $data = $this->pessoa_model->getAll();
        $id = $this->uri->segment(3);
        if ($id === null) {
            if ($data) {
                $this->response($data, 200);
            } else {
                $this->response([
                    'status' => false,
                    'message' => 'Sem pessoas para listar'
                ], 204 );
            }
        } else {
            $lista = $this->pessoa_model->getById($id);
            if($lista != []) {
                $this->response($lista, 200);   
            }else {
                $this->response([
                    'status'=>false,
                    'message'=>'Pessoa não existe'
                ],404);
            }
        }
    }
}