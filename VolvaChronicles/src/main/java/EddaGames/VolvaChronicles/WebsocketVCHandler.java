package EddaGames.VolvaChronicles;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketVCHandler extends TextWebSocketHandler {

	private ObjectMapper mapper = new ObjectMapper();
	private PlayerController list = new PlayerController(); // tiene los jugadores no ordenados, por lo tanto el ultimo
															// espera y el nuevo se asocia a el
	private static Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<WebSocketSession>());

	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		sessions.add(session);
	}

	/*public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		sessions.remove(session);
		System.out.println("Sesión eliminada: " + session);
	}*/

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		// System.out.println("Message received: " + message.getPayload());

		synchronized (sessions) {
			// nodo de llegada
			JsonNode node = mapper.readTree(message.getPayload());
			String metodo = node.get("metodo").asText();// nuevo
			// boolean sync = node.get("sync").asBoolean();//nuevo
			int id = node.get("id").asInt(); // nuevo
			int idOpponent = node.get("idOpponent").asInt(); // nuevo
			ObjectNode responseNode = mapper.createObjectNode(); // nodo de respuesta

			// metodos
			switch (metodo) {
			// metodos playercontroller
			case "addPlayer":
				// asocia un id unico al jugador creado, este se devuelve al cliente para que
				// sepa su id
				id = list.addPlayer();

				responseNode.put("id", id);
				session.sendMessage(new TextMessage(responseNode.toString()));
				break;

			case "getNumPlayers":
				int size = list.getNumPlayers();
				responseNode.put("size", size);
				session.sendMessage(new TextMessage(responseNode.toString()));
				break;

			case "getIdFromOpponent":
				idOpponent = list.getIdFromOpponent(id);
				responseNode.put("idOpponent", idOpponent);
				session.sendMessage(new TextMessage(responseNode.toString()));
				break;

			case "getOpponent":
				Player player = list.getOpponent(idOpponent);
				responseNode.put("id", player.getId());
				responseNode.put("sync", player.isSync());
				responseNode.put("estado", player.getEstado());
				responseNode.put("downPulsada", player.isDownPulsada());
				responseNode.put("downToque", player.isDownToque());
				responseNode.put("upPulsada", player.isUpPulsada());
				responseNode.put("upToque", player.isUpToque());
				responseNode.put("leftPulsada", player.isLeftPulsada());
				responseNode.put("rightPulsada", player.isRightPulsada());
				responseNode.put("dashPulsada", player.isDashPulsada());
				responseNode.put("velocidadX", player.getVelocidadX());
				responseNode.put("velocidadY", player.getVelocidadY());
				responseNode.put("posX", player.getPosX());
				responseNode.put("posY", player.getPosY());
				responseNode.put("contStamine", player.getContStamine());
				responseNode.put("contSalto", player.getContSalto());
				responseNode.put("throwRight", player.isThrowRight());
				responseNode.put("throwLeft", player.isThrowLeft());
				responseNode.put("facingRight", player.isFacingRight());
				responseNode.put("dashId", player.getDashId());
				responseNode.put("ratatosk", player.getRatatosk());
				responseNode.put("tir", player.isTir());
				responseNode.put("heimdall", player.isHeimdall());
				responseNode.put("reward", player.getReward());

				session.sendMessage(new TextMessage(responseNode.toString()));
				break;

			case "updatePlayer":
				list.updatePlayer(id, node);
				break;

			case "clearPlayers":
				list.clearPlayers();
				break;

			case "isSyncOpponent":
				boolean isReady = list.getOpponent(idOpponent).isSync();

				responseNode.put("isReady", isReady);
				session.sendMessage(new TextMessage(responseNode.toString()));
				break;

			default:
				System.out.println("Método incorrecto");
				break;
			}
		}
	}
}
