<?php 
class Subcategoria_model extends CI_Model{
    function getCategoriaById($id) {
        $query = $this->db->query("SELECT * FROM `subcategoria` WHERE `fk_categoria` = $id ORDER BY `nm` ASC");
        return $query->result_array();
    }
}