package EddaGames.VolvaChronicles;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

public class PlayerController {

	private List<Player> players = new ArrayList<>();

	public int addPlayer() {
		Player a = new Player();
		int nRandom = (int) (Math.random() * 1000); //si hay 999 jugadores al ultimo jugador costara darle una id
		while (getIndice(nRandom) >= 0) {//Si el id esta en la lista, volvemos a calcular id aleatorio
			nRandom = (int) (Math.random() * 1000);
		}
		a.setId(nRandom);
		players.add(a);
		return nRandom;
	}
	
	public int getNumPlayers() {
		return players.size();
	}

	// metodos que recogen la info del jugador con el que se te ha emparejado
	public Player getOpponent(int id) {
		int matchmaking;
		int indicePlayer = getIndice(id);
		
		if (indicePlayer == -1) {
			System.out.println("Id no encontrado");
			return null;
		}else if (indicePlayer % 2 == 0) {
			matchmaking = indicePlayer + 1;
		}else{
			matchmaking = indicePlayer - 1; 
		}
		
		return players.get(matchmaking);
	}

	// metodos que modifican la info de los jugadores
	public void updatePlayer(int id, JsonNode node) {
		for (int i = 0; i < players.size(); i++) {
			if (players.get(i).getId() == id) {	
				Player a = new Player(node);
				players.set(i,a);
			}
		} 
		System.out.println("Id no encontrado");
	}
	
	//elimina a todos los jugadores de la lista
	public void clearPlayers() {
		players.clear();
	}
	
	private int getIndice (int id) {
		for (int i = 0; i < players.size(); i++) {
			if (players.get(i).getId() == id) {	
				return i;
			}
		}
		System.out.println("Id no encontrado");
		return -1;
	}
}