<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Publicacao extends RestController {
    
    function __construct() {
        parent::__construct();
        $this->load->model('publicacao_model'); 
    }

    public function inserir_post() {   
        $data = [
            'id_publicacao' => $this->post('id_publicacao'),
            'img_publicacao' => $this->post('img_publicacao'),
            'titulo' => $this->post('titulo'),
            'descricao' => $this->post('descricao'),
            'dt_publicacao' => $this->post('dt_publicacao'),
            'tipo_publicacao' => $this->post('tipo_publicacao'),
            'situacao_publicacao' => $this->post('situacao_publicacao'),
            'fk_pessoa' => $this->post('fk_pessoa')
        ];
        $resp = $this->publicacao_model->insert($data);
        if($resp === true){
            $this->set_response("Publicação inserida com sucesso", 200);
        }else{
            $this->set_response("Erro ao inserir publicação", 404);
        }
    } 

    public function atualizar_put() {   
        $id = $this->uri->segment(3);
        $data = [
            'img_publicacao' => $this->put('img_publicacao'),
            'titulo' => $this->put('titulo'),
            'descricao' => $this->put('descricao'),
            'dt_publicacao' => $this->put('dt_publicacao'),
            'tipo_publicacao' => $this->put('tipo_publicacao'),
            'situacao_publicacao' => $this->put('situacao_publicacao'),
            'fk_pessoa' => $this->put('fk_pessoa')
        ];
        $resp = $this->publicacao_model->update($id, $data);
        if($resp === true) {
            $this->response("Publicação atualizada com sucesso", 200 );
        }else {
            $this->response([
                'status' => false,
                'message' => 'Publicação inexistente!'
            ], 404);
        }
    }
    
    public function listar_get() {
        $data = $this->publicacao_model->getAll();
        if ($data) {
            $this->response($data, 200);
        } else {
            $this->response([
                'status' => false,
                'message' => 'Sem publicações para listar'
            ], 204 );
        }
    }

    public function buscar_get() {
        $id = $this->uri->segment(3);
        if ($id != null) {
            $lista = $this->publicacao_model->getById($id);
            $this->response($lista, 200); 
        }
    }

    public function getallpessoabyid_get() {
        $id = $this->uri->segment(3);
        if ($id != null && $id > 0) {
            $lista = $this->publicacao_model->getAllByIdPessoa($id);
            if($lista != null || $lista != []){
                $this->response($lista, 200);
            }else{
                $this->response([
                    'status'=>false,
                    'message'=>'Sem dados para listar!'
                ],204);
            }   
        }else {
            $this->response([
                'status'=>false,
                'message'=>'Id inválido!'
            ],404);
        }
    }
}