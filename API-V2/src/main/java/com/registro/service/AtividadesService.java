package com.registro.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registro.model.Atividades;

import com.registro.repositories.AtividadesRepository;
import com.registro.service.exception.ObjectNotFoundException;

@Service
public class AtividadesService {

	@Autowired
	private AtividadesRepository atividadeRepos;
	
	public Atividades findById(long id) {
		Optional<Atividades> atividades = atividadeRepos.findById(id);
		return atividades.orElseThrow(() -> new ObjectNotFoundException("Objeto com id: " + id + " Não foi encontrado. Tipo: " + Atividades.class.getName()));
	}
	
	public List<Atividades> findAll(){
		return atividadeRepos.findAll();
	}
	
	public Atividades save(Atividades atividades) {
		return atividadeRepos.save(atividades);
	}
	
    public Atividades updateAtividades (Atividades atividades, long id) { 
    	Atividades atividadesExistente = atividadeRepos.findById(id).orElseThrow(
                () -> new ObjectNotFoundException("Objeto com id: " + id + " Não foi encontrado. Tipo: " + Atividades.class.getName()));
    	atividadesExistente.setTitulo_atividade(atividades.getTitulo_atividade());
    	atividadeRepos.save(atividadesExistente);
        return atividadesExistente;
    }
	
	public void deleteAtividades(long id) {
    	atividadeRepos.deleteById(id);
    }

	
}
