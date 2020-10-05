<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Produto extends RestController {

    function __construct() {
        parent::__construct();
        $this->load->model('produto_model'); 
    }

    public function incluir_post() {   
        $data = [
            'id_produto' => $this->post('id_produto'),
            'nm' => $this->post('nm'),
            'vl' => $this->post('vl'),
            'genero' => $this->post('genero'),
            'situacao' => $this->post('situacao'),
            'qtd' => $this->post('qtd'),
            'de' => $this->post('de'),
            'tamanho' => $this->post('tamanho'),
            'cor' => $this->post('cor'),
            'dt_atribuicao' => $this->post('dt_atribuicao'),
            'fk_subcategoria' => $this->post('fk_subcategoria')
        ];
        $resp = $this->produto_model->insert($data);
        if($resp === true){
            $this->set_response("Produto criado com sucesso", 200);
        }else{
            $this->set_response("Erro ao criar produto", 404);
        }
    } 

    public function alterar_put() {   
        $id = $this->uri->segment(3);
        $data = [
            'id_produto' => $this->put('id_produto'),
            'nm' => $this->put('nm'),
            'vl' => $this->put('vl'),
            'genero' => $this->put('genero'),
            'situacao' => $this->put('situacao'),
            'qtd' => $this->put('qtd'),
            'de' => $this->put('de'),
            'tamanho' => $this->put('tamanho'),
            'cor' => $this->put('cor'),
            'dt_atribuicao' => $this->put('dt_atribuicao'),
            'fk_subcategoria' => $this->put('fk_subcategoria')
        ];
        $resp = $this->produto_model->update($id, $data);
        if($resp === true) {
            $this->response("Produto alterado com sucesso", 200 );
        }else {
            $this->response([
                'status' => false,
                'message' => 'Produto inexistente!'
            ], 404);
        }
    }

    public function deletar_delete() {   
        $id = $this->uri->segment(3);
        if($id <= 0) {
            $this->response('Insira id da produto para deletar', 404);
        }
        $resp = $this->produto_model->deleteById($id);
        if($resp === true){
            $this->response("Produto deletado com sucesso", 204);
        }else{
            $this->response([
                'status' => false,
                'message' => 'Produto inexistente!'
            ], 404);
        }
    } 

    public function listar_get() {
        $data = $this->produto_model->getAll();
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
            $lista = $this->produto_model->getById($id);
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