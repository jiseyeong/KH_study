package kh.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.spring.dto.MoviesDTO;
import kh.spring.repositories.MoviesDAO;
import kh.spring.services.MoviesService;

@Controller
public class HomeController {
	
	@Autowired
	private MoviesService service;
	
	@Autowired
	private MoviesDAO dao;
	
	@RequestMapping("/")
	public String home() {
		//아래의 return이 'request.getDispatcher("WEB-INF/views/home.jsp").forward(request, response)'와 같음.
		return "home";
	}
	
	// Transaction - DB oracle
	// 작업의 안전성
	// 작업의 원자성 - 하나의 기능에 연계된 많은 DB 작업은 모두 성공하거나 모두 실패하는 두가지 경우의 수 외엔 존재해선 안 된다. 
	
	
	@RequestMapping("transactional")
	public String transactionTest() {
		MoviesDTO dto = new MoviesDTO(0,"나홀로 집에","코미디");
		service.transactionTest(dto);
		return "home";
	}
//	
//	@RequestMapping("/toInput")
//	public String toInput() {
//		return "inputForm";
//	}
//	
//	@RequestMapping("/toOutput")
//	public String toOutput(Model model) throws Exception {
//		List<MoviesDTO> list = dao.selectAll();
//		model.addAttribute("list", list);
//		return "list";
//	}
//	
//	@RequestMapping("/toMyBatis")
//	public String toMyBatis() throws Exception{
//		return "mybatis";
//	}
//	
//	@RequestMapping("/inputProc")
//	public String inputProc(MoviesDTO dto) throws Exception {
//		int result = dao.insert(dto);
//		System.out.println(dto.getTitle() + " : " + dto.getGenre());
//		return "redirect:/";
//	}
//	
//	@RequestMapping("/deleteProc")
//	public String deleteProc(int id) throws Exception{
//		int result = dao.delete(id);
//		return "redirect:/toOutput";
//	}
//	
//	@RequestMapping("/modifyProc")
//	public String modifyProc(MoviesDTO dto) throws Exception{
//		int result = dao.update(dto);
//		return "redirect:/toOutput";
//	}
//	
//	@RequestMapping("/selectByCon")
//	public String selectByCon(String column, String value) throws Exception {
//		List<MoviesDTO> list = dao.selectByCon(column,value);
//		
//		for(MoviesDTO dto : list) {
//			System.out.println(dto.getId() + " : " + dto.getTitle() + " : " + dto.getGenre());
//		}
//		return "mybatis";
//	}
//	
//	@RequestMapping("/selectByMultiCon")
//	public String selectByMultiCon (MoviesDTO dto) throws Exception {
//		List<MoviesDTO> list = dao.selectByMultiCon(dto);
//		
//		for(MoviesDTO e : list) {
//			System.out.println(e.getId() + " : " + e.getTitle() + " : " + e.getGenre());
//		}
//		return "mybatis";
//	}
//	@RequestMapping("/selectById")
//	public String selectById(int id) {
//		MoviesDTO dto = dao.selectById(id);
//		System.out.println(dto.getId() + " : " + dto.getTitle() + " : " + dto.getGenre());
//		return "redirect:/";
//	}
//	
//	@RequestMapping("/selectCount")
//	public String selectCount() {
//		int result = dao.selectCount();
//		System.out.println(result);
//		return "redirect:/";
//	}
	
	@ExceptionHandler(Exception.class)
	public String exceptionHandler(Exception e) {
		e.printStackTrace();
		return "redirect:/error";
	}
	
	
}
