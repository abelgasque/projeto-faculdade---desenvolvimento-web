<?php 
class Produto_model extends CI_Model{

    public bigint $id_produto;
    public string $nm;
    public float $vl;
    public int $qtd;
    public string $de;
    public string $tamanho;
    public string $cor;
    public string $genero;
    public string $situacao;
    public bigint $fk_subcategoria;
    public string $dt_atribuicao;

    function getAll() {
        $query = $this->db->query("SELECT * FROM `produto` ORDER BY `nm` ASC");
        return $query->result_array();
    }

    function getById($id) {
        $this->db->where('id_produto', $id);
        $data = $this->db->get('produto');
        return $data->result_array();
    }

    function insert($data) {
        $this->db->insert('produto', $data);
        if($this->db->affected_rows() > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function update($id, $data) {
        $this->db->where('id_produto', $id);
        $buscarCliente = $this->db->get('produto');
        if($buscarCliente->result_array() != []){
            $this->db->update('produto', $data, array('id_produto'=>$id));
            return true;
        }else{
            return false;
        }   
    }
    
    function deleteById($id) {
        $this->db->where('id_produto', $id);
        $this->db->delete('produto');
        if($this->db->affected_rows() > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}