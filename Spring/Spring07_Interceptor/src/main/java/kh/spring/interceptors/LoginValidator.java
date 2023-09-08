package kh.spring.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

public class LoginValidator implements HandlerInterceptor{

	@Autowired
	private HttpSession session;
	
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handlet) throws Exception {
		
		String id = (String)session.getAttribute("loginID");
		if(id != null) return true; //세션에 id값이 존재한다면 controller로 진행
	
		response.sendRedirect("/error"); //그렇지 않다면 error로 redirect
		return false;
		
	}
}
