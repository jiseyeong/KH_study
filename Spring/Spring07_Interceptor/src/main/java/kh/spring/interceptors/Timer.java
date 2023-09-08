package kh.spring.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

public class Timer implements HandlerInterceptor{
	
	@Autowired
	private HttpSession session;
		
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		long currentTime = System.currentTimeMillis();
		session.setAttribute("time", currentTime); 
				
		
		return true;
	}
	
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		
		long afterTime = System.currentTimeMillis();
		long processedTime = afterTime - (long)session.getAttribute("time");
		String uri = request.getRequestURI();

		System.out.println(uri + " 요청은 " + processedTime + " ms 걸렸음");
	}
}
