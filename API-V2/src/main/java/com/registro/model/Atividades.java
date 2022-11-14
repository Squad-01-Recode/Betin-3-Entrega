package com.registro.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "atividades")
public class Atividades implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_atividade;
	
	@Column
	private String tituloAtividade;

	@Column
	private String infoAtividade;

	@Column
	private String conteudoAtividade;
	
	

	public Atividades(long id_atividade, String titulo_atividade, String info_atividade,  String conteudo_atividade) {
		super();
		this.id_atividade = id_atividade;
		this.tituloAtividade = titulo_atividade;
		this.infoAtividade = info_atividade;
		this.conteudoAtividade = conteudo_atividade;
	}

	public long getId_atividade() {
		return id_atividade;
	}

	public void setId_atividade(long id_atividade) {
		this.id_atividade = id_atividade;
	}

	public String getTitulo_atividade() {
		return tituloAtividade;
	}

	public void setTitulo_atividade(String titulo_atividade) {
		this.tituloAtividade = titulo_atividade;
	}
	
	public String getInfo_atividade() {
		return tituloAtividade;
	}

	public void setInfo_atividade(String info_atividade) {
		this.infoAtividade = info_atividade;
	}
	
	public String getConteudo_Atividade() {
		return conteudoAtividade;
	}

	public void setConteudo_atividade(String conteudo_atividade) {
		this.conteudoAtividade = conteudo_atividade;
	}
	
	public Atividades(){
		   super();
		}



	@Override
	public int hashCode() {
		return Objects.hash(id_atividade);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Atividades other = (Atividades) obj;
		return id_atividade == other.id_atividade;
	}

	@Override
	public String toString() {
		return "Destinos [id_atividade=" + id_atividade + ", titulo_atividade=" + infoAtividade + "]";
	}
	
	
}
