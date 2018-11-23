package EddaGames.VolvaChronicles;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SyncController {

	private Sync syncro = new Sync();

	// comprueba que ambos jugadores se encuentran en el mismo punto
	@RequestMapping(value = "/syncro", method = RequestMethod.GET)
	public boolean isSync() {
		if (syncro.isP1Pulsada() && syncro.isP2Pulsada()) {
			return true;
		} else {
			return false;
		}
	}

	// se modifican los valores de Sync
	@RequestMapping(value = "/syncro/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Sync> updateP1(@PathVariable int id, @RequestBody boolean a) {
		if (id == 0) {
			syncro.setP1Pulsada(a);
			return new ResponseEntity<>(HttpStatus.OK);
		} else if (id == 1) {
			syncro.setP2Pulsada(a);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	@RequestMapping(value = "/syncro", method = RequestMethod.DELETE)
	public ResponseEntity<Player> clearSync() {
		syncro.setP1Pulsada(false);
		syncro.setP2Pulsada(false);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
