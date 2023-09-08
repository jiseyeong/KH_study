package kh.spring.config;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component //컴포넌트를 만들 때 주소가 주입됨 
public class SpringProvider implements ApplicationContextAware{

	private static ApplicationContext ctx; //스프링 컨테이너의 주소가 주입됨
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
			ctx = applicationContext;
		
	}
	
	public static ApplicationContext getApplicationContext() {
		return ctx;
	}
}
