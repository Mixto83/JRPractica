package EddaGames.VolvaChronicles;

public class Sync {

	private boolean p1Pulsada;
	private boolean p2Pulsada;
	
	public Sync() {
		super();
		this.p1Pulsada = false;
		this.p2Pulsada = false;
	}
	
	public boolean isP1Pulsada() {
		return p1Pulsada;
	}
	public void setP1Pulsada(boolean p1Pulsada) {
		this.p1Pulsada = p1Pulsada;
	}
	public boolean isP2Pulsada() {
		return p2Pulsada;
	}
	public void setP2Pulsada(boolean p2Pulsada) {
		this.p2Pulsada = p2Pulsada;
	}
	
	
}
