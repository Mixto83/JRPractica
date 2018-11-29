package EddaGames.VolvaChronicles;

import com.fasterxml.jackson.databind.JsonNode;

public class Player {
	//id jugador
	private int id;
	private boolean sync;

	// control estado, control de concurrencia
	private int estado;

	// controles
	private boolean downPulsada;
	private boolean downToque;
	private boolean upPulsada;
	private boolean upToque;
	private boolean leftPulsada;
	private boolean rightPulsada;
	private boolean dashPulsada;
	
	// propiedades
	private float velocidadX;
	private float velocidadY;
	private float posX;
	private float posY;
	private int contStamine;
	private int contSalto;
	private boolean throwRight;
	private boolean throwLeft;
	private boolean facingRight;
	private int dashId;
	private boolean dashBool;
	
	// Powerups
	private int ratatosk;
	private boolean tir;
	private boolean heimdall;
	private String reward;
	
	// constructor
	public Player() {
		super();
		this.id = 0;
		this.sync = false;
		this.estado = 0;
		this.downPulsada = false;
		this.downToque = false;
		this.upPulsada = false;
		this.upToque = false;
		this.leftPulsada = false;
		this.rightPulsada = false;
		this.dashPulsada = false;
		this.velocidadX = 0;
		this.velocidadY = 0;
		this.posX = 0;
		this.posY = 0;
		this.contStamine = 100;
		this.contSalto = 0;
		this.throwRight = false;
		this.throwLeft = false;
		this.facingRight = true;
		this.dashId = 0;
		this.dashBool = false;
		this.ratatosk = 0;
		this.tir = false;
		this.heimdall = false;
		this.setReward("");
	}
	
	public Player (JsonNode node) {
		this.id = node.get("id").asInt();
		this.sync = node.get("sync").asBoolean();
		this.estado = node.get("estado").asInt();
		this.downPulsada = node.get("downPulsada").asBoolean();
		this.downToque = node.get("downToque").asBoolean();
		this.upPulsada = node.get("upPulsada").asBoolean();
		this.upToque = node.get("upToque").asBoolean();
		this.leftPulsada = node.get("leftPulsada").asBoolean();
		this.rightPulsada = node.get("rightPulsada").asBoolean();
		this.dashPulsada = node.get("dashPulsada").asBoolean();
		this.velocidadX = node.get("velocidadX").asInt();
		this.velocidadY = node.get("velocidadY").asInt();
		this.posX = node.get("posX").asInt();
		this.posY = node.get("posY").asInt();
		this.contStamine = node.get("contStamine").asInt();
		this.contSalto = node.get("contSalto").asInt();
		this.throwRight = node.get("throwRight").asBoolean();
		this.throwLeft = node.get("throwLeft").asBoolean();
		this.facingRight = node.get("facingRight").asBoolean();
		this.dashId = node.get("dashId").asInt();
		this.dashBool = node.get("dashBool").asBoolean();
		this.ratatosk = node.get("ratatosk").asInt();
		this.tir = node.get("tir").asBoolean();
		this.heimdall = node.get("heimdall").asBoolean();
		this.reward = node.get("reward").asText();
	}

	// Getters & Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public boolean isSync() {
		return sync;
	}

	public void setSync(boolean sync) {
		this.sync = sync;
	}
	
	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public boolean isDownPulsada() {
		return downPulsada;
	}

	public void setDownPulsada(boolean downPulsada) {
		this.downPulsada = downPulsada;
	}

	public boolean isDownToque() {
		return downToque;
	}

	public void setDownToque(boolean downToque) {
		this.downToque = downToque;
	}

	public boolean isUpPulsada() {
		return upPulsada;
	}

	public void setUpPulsada(boolean upPulsada) {
		this.upPulsada = upPulsada;
	}

	public boolean isUpToque() {
		return upToque;
	}

	public void setUpToque(boolean upToque) {
		this.upToque = upToque;
	}

	public boolean isLeftPulsada() {
		return leftPulsada;
	}

	public void setLeftPulsada(boolean leftPulsada) {
		this.leftPulsada = leftPulsada;
	}

	public boolean isRightPulsada() {
		return rightPulsada;
	}

	public void setRightPulsada(boolean rightPulsada) {
		this.rightPulsada = rightPulsada;
	}

	public boolean isDashPulsada() {
		return dashPulsada;
	}

	public void setDashPulsada(boolean dashPulsada) {
		this.dashPulsada = dashPulsada;
	}

	public float getVelocidadX() {
		return velocidadX;
	}

	public void setVelocidadX(float velocidadX) {
		this.velocidadX = velocidadX;
	}

	public float getVelocidadY() {
		return velocidadY;
	}

	public void setVelocidadY(float velocidadY) {
		this.velocidadY = velocidadY;
	}

	public float getPosX() {
		return posX;
	}

	public void setPosX(float posX) {
		this.posX = posX;
	}

	public float getPosY() {
		return posY;
	}

	public void setPosY(float posY) {
		this.posY = posY;
	}

	public int getContStamine() {
		return contStamine;
	}

	public void setContStamine(int contStamine) {
		this.contStamine = contStamine;
	}

	public int getContSalto() {
		return contSalto;
	}

	public void setContSalto(int contSalto) {
		this.contSalto = contSalto;
	}

	public boolean isThrowRight() {
		return throwRight;
	}

	public void setThrowRight(boolean throwRight) {
		this.throwRight = throwRight;
	}

	public boolean isThrowLeft() {
		return throwLeft;
	}

	public void setThrowLeft(boolean throwLeft) {
		this.throwLeft = throwLeft;
	}

	public int getRatatosk() {
		return ratatosk;
	}

	public void setRatatosk(int ratatosk) {
		this.ratatosk = ratatosk;
	}

	public boolean isTir() {
		return tir;
	}

	public void setTir(boolean tir) {
		this.tir = tir;
	}

	public boolean isHeimdall() {
		return heimdall;
	}

	public void setHeimdall(boolean heimdall) {
		this.heimdall = heimdall;
	}

	public boolean isFacingRight() {
		return facingRight;
	}

	public void setFacingRight(boolean facingRight) {
		this.facingRight = facingRight;
	}

	public int getDashId() {
		return dashId;
	}

	public void setDashId(int dashId) {
		this.dashId = dashId;
	}

	public String getReward() {
		return reward;
	}

	public void setReward(String reward) {
		this.reward = reward;
	}

	public boolean isDashBool() {
		return dashBool;
	}

	public void setDashBool(boolean dashBool) {
		this.dashBool = dashBool;
	}

}
