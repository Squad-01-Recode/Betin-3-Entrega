package com.registro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.registro.model.Atividades;
import com.registro.service.AtividadesService;

@RestController
@RequestMapping(value = "/betin/atividades/cadastro")
@CrossOrigin("*")
public class AtividadesController {
	
	@Autowired
	private AtividadesService service;
	
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Atividades> findById(@PathVariable long id) { 
		Atividades atividades = service.findById(id);
		return ResponseEntity.ok().body(atividades);
	}
	
	
	@GetMapping
	public ResponseEntity<List<Atividades>> findAll() { 
		List<Atividades> atividades = service.findAll();
		return ResponseEntity.ok().body(atividades);
	}
	

	@PostMapping
	public ResponseEntity<Atividades> save(@RequestBody Atividades atividade) { 
		Atividades obj = service.save(atividade);
		return ResponseEntity.ok().body(obj);
	}
	
	
	@PutMapping("/editarAtividade/{id}")
	    public ResponseEntity<Atividades> updateDestinos(@PathVariable("id") long id, 
	            @RequestBody Atividades atividades){
	        return new ResponseEntity<Atividades>(service.updateAtividades(atividades, id), HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> delete(@PathVariable long id) { 
		service.deleteAtividades(id);
		return ResponseEntity.noContent().build();
	}
	
}