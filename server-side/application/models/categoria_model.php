<?php 
class Categoria_model extends CI_Model{
    function getAll() {
        $query = $this->db->query("SELECT * FROM `categoria` ORDER BY `nm` ASC");
        return $query->result_array();
    }
}