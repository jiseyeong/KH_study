package kh.spring.elec;
import kh.spring.interfaces.Speaker;
import kh.spring.interfaces.TV;

public class LGTV implements TV{

	private int price;
	private String brand;
	private Speaker speaker; 
	
	public LGTV() {}

	public LGTV(int price, String brand, Speaker speaker) {
		super();
		this.price = price;
		this.brand = brand;
		this.speaker = speaker;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Speaker getSpeaker() {
		return speaker;
	}

	public void setSpeaker(Speaker speaker) {
		this.speaker = speaker;
	}

	public void powerOn() {
		System.out.println("LG");
	}
	
	public void powerOff() {}
	
	public void volUp() {
		speaker.volumeUp();
	}
	
	public void volDown() {
		speaker.volumeDown();
		
	}
	
}
