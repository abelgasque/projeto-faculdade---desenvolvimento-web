<?php 
class Pessoa_model extends CI_Model{

    function getAll() {
        $query = $this->db->query("SELECT * FROM `pessoa` ORDER BY `nome` ASC");
        return $query->result_array();
    }

    function getById($id) {
        $this->db->where('id_pessoa', $id);
        $data = $this->db->get('pessoa');
        return $data->result_array();
    }

    function insert($data) {
        $this->db->insert('pessoa', $data);
        if($this->db->affected_rows() > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function update($id, $data) {
        $this->db->where('id_pessoa', $id);
        $buscarCliente = $this->db->get('pessoa');
        if($buscarCliente->result_array() != []){
            $this->nome = $data['nome'];
            $this->db->update('pessoa',$this,array('id_pessoa' => $id));
            return true;
        }else{
            return false;
        }   
    }
    
    function deleteById($id) {
        $this->db->where('id_pessoa', $id);
        $this->db->delete('pessoa');
        if($this->db->affected_rows() > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}