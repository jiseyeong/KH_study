package kh.spring.elec;

import kh.spring.interfaces.TV;

public class SamsungTV implements TV{
	
	private int price;
	private String brand;
	
	public void powerOn() {
		System.out.println("Samsung");
	}
	public void powerOff() {}
	
	public void volUp() {}
	
	public void volDown() {}

}
