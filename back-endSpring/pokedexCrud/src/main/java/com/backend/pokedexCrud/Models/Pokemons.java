package com.backend.pokedexCrud.Models;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name="Pokemons")
public class Pokemons {
		
		@Id
		@GeneratedValue(strategy=GenerationType.UUID)
		private UUID Id;
		@Column(length=15, nullable = false)
		private String nome;
		
		@Column(length=10, nullable = false)
		private String Tipo;
		
		@Column(name="Descrição", length=200, nullable = false)
		private String Descricao;
		
		public Pokemons(){
			
		}
	
		public Pokemons(UUID id, String nome, String tipo, String descricao) {
			super();
			Id = id;
			this.nome = nome;
			Tipo = tipo;
			Descricao = descricao;
		}

		public UUID getId() {
			return Id;
		}

		public void setId(UUID id) {
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
