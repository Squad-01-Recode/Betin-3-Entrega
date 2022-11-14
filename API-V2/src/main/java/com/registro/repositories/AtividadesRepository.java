package com.registro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.registro.model.Atividades;

@Repository
public interface AtividadesRepository extends JpaRepository <Atividades,Long>{

}
