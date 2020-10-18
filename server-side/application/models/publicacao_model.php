<?php 
class Publicacao_model extends CI_Model{

    function getAll() {
        $query = $this->db->query("SELECT id_publicacao, id_pessoa, nome, sobrenome, titulo, dt_publicacao, tipo_publicacao, tipo_pessoa, situacao_publicacao, img_publicacao, img_pessoa, descricao FROM publicacao pu INNER JOIN pessoa pe ON pu. fk_pessoa = pe.id_pessoa ORDER BY pu.dt_publicacao DESC, pe.nome ASC");
        return $query->result_array();
    }

    function getById($id) {
        $query = $this->db->query("SELECT  id_publicacao, img_publicacao, titulo, descricao, dt_publicacao, tipo_publicacao, situacao_publicacao, fk_pessoa, nome FROM publicacao pu INNER JOIN pessoa AS pe ON pu.fk_pessoa = pe.id_pessoa WHERE pu.id_publicacao = $id LIMIT 1;");
        return $query->result_array();
    }

    function getAllByIdPessoa($id) {
        $query = $this->db->query("SELECT  id_publicacao, img_publicacao, titulo, descricao, dt_publicacao, tipo_publicacao, situacao_publicacao, fk_pessoa, nome FROM publicacao pu INNER JOIN pessoa AS pe ON pu.fk_pessoa = $id");
        return $query->result_array();
    }

    function insert($data) {
        $this->db->insert('publicacao', $data);
        if($this->db->affected_rows() > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function update($id, $data) {
        $this->db->where('id_publicacao', $id);
        $buscarCliente = $this->db->get('publicacao');
        if($buscarCliente->result_array() != []){
            $this->db->update('publicacao', $data, array('id_publicacao'=>$id));
            return true;
        }else{
            return false;
        }   
    }
    
    function deleteById($id) {
        $this->db->where('id_publicacao', $id);
        $this->db->delete('publicacao');
        if($this->db->affected_rows() > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}