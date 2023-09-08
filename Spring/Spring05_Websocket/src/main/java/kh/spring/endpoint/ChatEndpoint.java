package kh.spring.endpoint;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpSession;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.springframework.context.ApplicationContext;

import com.google.common.collect.EvictingQueue;
import com.google.gson.Gson;

import kh.spring.config.HttpSessionConfigurator;
import kh.spring.config.SpringProvider;
import kh.spring.dto.ChatDTO;
import kh.spring.service.ChatService;

@ServerEndpoint(value="/chat",configurator = HttpSessionConfigurator.class)
public class ChatEndpoint {

	private static Set<Session> clients = Collections.synchronizedSet(new HashSet<>()); //여러 세션을 저장하기 위해 List로 만듦, 여러세션에서 List를 공유하기 위해 static으로 만듦 
	//동시에 여러명이 접근하지 못하게 하는 List를 만듦 
	//Set -> 입력 순서가 유지되지 않음 
	//    -> 중복 방지

	//@Autowired -> 안됨 
	//endpoint는 스프링영역에 있는게 아니라서 스프링 기능을 못 씀 

	private HttpSession hSession;
	
	private ApplicationContext ctx = SpringProvider.getApplicationContext();
	//Dependency Lookup으로 ChatService bean 을 가져와야 함.//Dependency Lookup으로 ChatService bean 을 가져와야 함.
	
	private static EvictingQueue<ChatDTO> messages = EvictingQueue.create(100);
	
	 
	@OnOpen //최초로 연결되었을 때 하고자하는 행동
	public void onConnect(Session session, EndpointConfig config){ //매개변수 처리방식은 스프링과 같음 
		ChatEndpoint.clients.add(session);
		this.hSession = (HttpSession)config.getUserProperties().get("hSession");
		
		try {
		session.getBasicRemote().sendText(new Gson().toJson(messages));
		}catch(Exception e) {}
	}

	@OnMessage
	public void onMessage(String message) {

		String id = (String)hSession.getAttribute("loginID");
		//ChatService service = ctx.getBean(ChatService.class);
		ChatDTO dto = new ChatDTO(id,message,System.currentTimeMillis());
		messages.add(dto);
		
		synchronized(clients) {
			for(Session session : clients) {
				try {
					session.getBasicRemote().sendText(new Gson().toJson(dto)); //브라우저(클라이언트)로 넘어가는 메세지 
				} catch (Exception e) {}
			}
		}
	}
	@OnClose
	public void onClose(Session session){
		System.out.println("웹 소켓 연결 해제");
		clients.remove(session); //연결이 끊어졌을 때 세션정보 리스트에서 삭제
	}   

	@OnError
	public void onError(Session session, Throwable t) {
		System.out.println("웹 소켓 통신 오류");
		clients.remove(session);
	}
}
