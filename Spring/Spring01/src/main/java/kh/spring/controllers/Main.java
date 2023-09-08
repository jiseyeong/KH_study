package kh.spring.controllers;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

import kh.spring.elec.SamsungTV;
import kh.spring.interfaces.TV;

public class Main {
	public static void main(String[] args) {
		
		//Spring -> Spring Container, Bean -> IOC : Inversion Of Control (제어의 역전)
		
		AbstractApplicationContext ctx = new GenericXmlApplicationContext("context.xml");
		//스프링 인스턴스를 로딩했다. context파일안에 bean태그를 만나면 new 함 
		//ctx는 스프링 컨테이너의 주소임 
		
		//TV tv = (SamsungTV)ctx.getBean("tv"); 
		//DL : Dependecy Lookup, DI : Dependecy Injection
		//get instance -> 인스턴스 꺼내기
		TV tv = (TV)ctx.getBean("tv"); // TV형 클래스 꺼내기 캐스팅 필요없음 (자료형으로 꺼냄)
		//bean태그의 id값을 꺼내서 그자리에 리턴시킴
		//Object 타입으로 반환하기 때문에 캐스팅을 해줘야 함
		//instance의 scope도 스프링이 정함 
		//ioc환경 (제어의 역전) 개발자제어에서 스프링으로 넘어감
		//스프링 컨테이너를 다른말로 ioc 컨테이너라고 함 
		
		tv.volDown();
		System.out.println("jj");
	}
}
