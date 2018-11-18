package EddaGames.VolvaChronicles;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

	private List<Player> players = new ArrayList<>();

	@RequestMapping(value = "/players", method = RequestMethod.POST)
	public ResponseEntity<Boolean> addPlayer() {
		Player a = new Player();
		players.add(a);
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/players", method = RequestMethod.GET)
	public int getNumPlayers() {
		return players.size();
	}

	// metodos que recogen la info de los jugadores
	@RequestMapping(value = "/players/{id}", method = RequestMethod.GET)
	public Player getPlayer(@PathVariable int id) {
		return players.get(id);
	}

	// metodos que modifican la info de los jugadores
	@RequestMapping(value = "/players/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Player> updatePlayer(@PathVariable int id, @RequestBody Player a) {
		players.set(id, a);
		return new ResponseEntity<>(a, HttpStatus.OK);
	}
	
	//elimina a todos los jugadores de la lista
	@RequestMapping(value = "/players", method = RequestMethod.DELETE)
	public ResponseEntity<Player> clearPlayers() {
		players.clear();
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
