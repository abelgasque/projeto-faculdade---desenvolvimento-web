<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Pessoa extends RestController {
    
    function __construct() {
        parent::__construct();
        $this->load->model('pessoa_model'); 
    }

    public function getbycpf_get() {
        $cpf = $this->uri->segment(3);
        $resp = $this->pessoa_model->getByCpf($cpf);
        if($resp != []) {
            $this->response($resp, 200);   
        }else {
            $this->response([
                'status'=>false,
                'message'=>'CPF não encontrado'
            ],404);
        }
    }

    public function inserir_post() {   
        $data = [
            'id_pessoa' => $this->post('id_pessoa'),
            'img_pessoa' => $this->post('img_pessoa'),
            'img_fundo' => $this->post('img_fundo'),
            'nome' => $this->post('nome'),
            'sobrenome' => $this->post('sobrenome'),
            'cpf' => $this->post('cpf'),
            'tipo_pessoa' => $this->post('tipo_pessoa'),
            'genero' => $this->post('genero'),
            'situacao_pessoa' => $this->post('situacao_pessoa'),
            'email' => $this->post('email'),
            'celular' => $this->post('celular'),
            'telefone' => $this->post('telefone'),
            'senha' => $this->post('senha'),
            'cep' => $this->post('cep'),
            'uf' => $this->post('uf'),
            'cidade' => $this->post('cidade'),
            'bairro' => $this->post('bairro'),
            'logradouro' => $this->post('logradouro'),
            'complemento' => $this->post('complemento'),
            'numero' => $this->post('numero')
        ];
        $resp = $this->pessoa_model->insert($data);
        if($resp === true){
            $this->set_response("Pessoa inserida com sucesso", 200);
        }else{
            $this->set_response("Erro ao inserir pessoa", 404);
        }
    } 

    public function atualizar_put() {   
        $id = $this->uri->segment(3);
        $data = [
            'img_pessoa' => $this->put('img_pessoa'),
            'img_fundo' => $this->put('img_fundo'),
            'nome' => $this->put('nome'),
            'sobrenome' => $this->put('sobrenome'),
            'cpf' => $this->put('cpf'),
            'tipo_pessoa' => $this->put('tipo_pessoa'),
            'genero' => $this->put('genero'),
            'situacao_pessoa' => $this->put('situacao_pessoa'),
            'email' => $this->put('email'),
            'celular' => $this->put('celular'),
            'telefone' => $this->put('telefone'),
            'senha' => $this->put('senha'),
            'cep' => $this->put('cep'),
            'uf' => $this->put('uf'),
            'cidade' => $this->put('cidade'),
            'bairro' => $this->put('bairro'),
            'logradouro' => $this->put('logradouro'),
            'complemento' => $this->put('complemento'),
            'numero' => $this->put('numero')
        ];
        $resp = $this->pessoa_model->update($id, $data);
        if($resp === true) {
            $this->response("Pessoa atualizada com sucesso", 200 );
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