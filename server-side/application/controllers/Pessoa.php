<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Pessoa extends RestController {
    
    function __construct() {
        parent::__construct();
        $this->load->model('pessoa_model'); 
    }

    public function incluir_post() {   
        $data = [
            'id_pessoa' => $this->put('id_pessoa'),
            'nome' => $this->post('nome'),
            'sobrenome' => $this->post('sobrenome'),
            'cpf' => $this->post('cpf'),
            'tipo' => $this->post('tipo'),
            'genero' => $this->post('genero'),
            'situacao' => $this->post('situacao'),
            'email' => $this->post('email'),
            'celular' => $this->post('celular'),
            'telefone' => $this->post('telefone'),
            'senha' => $this->post('senha'),
        ];
        $resp = $this->pessoa_model->insert($data);
        if($resp === true){
            $this->set_response("Pessoa criada com sucesso", 200);
        }else{
            $this->set_response("Erro ao criar pessoa", 404);
        }
    } 

    public function alterar_put() {   
        $id = $this->uri->segment(3);
        $data = [
            'nome' => $this->put('nome'),
            'sobrenome' => $this->put('sobrenome'),
            'cpf' => $this->put('cpf'),
            'tipo' => $this->put('tipo'),
            'genero' => $this->put('genero'),
            'situacao' => $this->put('situacao'),
            'email' => $this->put('email'),
            'celular' => $this->put('celular'),
            'telefone' => $this->put('telefone'),
            'senha' => $this->put('senha'),
        ];
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

    public function deletar_delete() {   
        $id = $this->uri->segment(3);
        if($id <= 0) {
            $this->response('Insira id da pessoa para deletar', 404);
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

    public function listar_get() {
        $data = $this->pessoa_model->getAll();
        if ($data) {
            $this->response($data, 200);
        } else {
            $this->response([
                'status' => false,
                'message' => 'Sem pessoas para listar'
            ], 204 );
        }
    }

    public function buscar_get() {
        $id = $this->uri->segment(3);
        if ($id != null) {
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