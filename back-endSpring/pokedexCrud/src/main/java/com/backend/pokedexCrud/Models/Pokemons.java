package com.backend.pokedexCrud.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Pokemons")
public class Pokemons {
		
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@JsonProperty("_id")
		private Long Id;
		@Column(length=15, nullable = false)
		private String nome;
		
		@Column(length=10, nullable = false)
		private String Tipo;
		
		@Column(name="Descrição", length=200, nullable = false)
		private String Descricao;
		
		public Pokemons(){
			
		}
	
		public Pokemons(Long id, String nome, String tipo, String descricao) {
			super();
			Id = id;
			this.nome = nome;
			Tipo = tipo;
			Descricao = descricao;
		}

		public Long getId() {
			return Id;
		}

		public void setId(Long id) {
			Id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getTipo() {
			return Tipo;
		}

		public void setTipo(String tipo) {
			Tipo = tipo;
		}

		public String getDescricao() {
			return Descricao;
		}

		public void setDescricao(String descricao) {
			Descricao = descricao;
		}
		
		
		
		
}
