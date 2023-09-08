package kh.spring.endpoint;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer{
	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		registry.enableSimpleBroker("/topic"); // 구독할 수 있는 채널 URL의 prefix [Server -> Client]
		registry.setApplicationDestinationPrefixes("/app"); // 클라이언트가 메세지를 보낼 때 사용할 URL의 prefix [Client -> Server]
	}
	
	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/chat").addInterceptors(new HttpSessionHandshakeInterceptor()).setAllowedOrigins("*"); //setAllowedOrigins("*") -> 모두로부터 접근 허용
		
	}
}


// STOMP - 구독 시스템 