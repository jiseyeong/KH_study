package kh.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

import kh.spring.dto.MessageDTO;

@Controller
public class ChatController {
	
	@Autowired
	private SimpMessagingTemplate writer;
	
	@SubscribeMapping("/topic/msg")
	public String onOpne() {
		return "Hello";
	}
	
	// @SendTo("/topic/test") //구독하는 채널이름 적어주기 (여러개 보낼 수 있음) @SendTo("/topic/A","/topic/B")
	@MessageMapping("/message") 
	public void message(MessageDTO dto, SimpMessageHeaderAccessor smha) {//SimpMessageHeaderAccessor smha -> 세션정보가 담겨있음 
		
		// * GSON 등록해두면 Client(JSON) -> Server(DTO) 변환이나 Server(DTO) -> Client(JSON) 형 변환이 자동으로 이루어진다.
		// * @SendTo 는 전송하고자 하는 구독 채널명이 고정되어 있을 때 편리하게 사용 가능
		//  -> 전송할 채널이 여러 곳일 경우 @SendTo({"채널명","채널명","채널명"...}) 형태로 전송 가능
		// * SimpMessagingTemplate은 전송하고자 하는 구독 채널명이 동적으로 변경될 때 사용 가능
		//  -> 전송할 채널이 여러 곳일 경우 foreach 돌려서 전송 가능 
		
		//String loginID = (String)smha.getSessionAttributes().get("loginID");
		//System.out.println("who am i : " + loginID);
		System.out.println(dto.getName() + " : " + dto.getMessage());
		writer.convertAndSend("/topic/test",dto);
	}
	
	@EventListener
	public void onSubscription(SessionSubscribeEvent e) {
		System.out.println(SimpMessageHeaderAccessor.wrap(e.getMessage()).getDestination());
		
		System.out.println("연결 확인");
		writer.convertAndSend("/topic/msg","Hello STOMP");
	}
	
	
	
	//ws.send("/message","{message:"Hello"}); -> MessageMapping에 도착함 변수이름이랑 키값이랑 같아야 함
}
