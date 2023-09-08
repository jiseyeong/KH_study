package kh.spring.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kh.spring.dto.MoviesDTO;

@RestController
@RequestMapping("/data/")
public class DataController {

	private List<MoviesDTO> list = new ArrayList<>();
	private int id = 1001;
	
	@RequestMapping("selectAll")
	public List<MoviesDTO> selectAll() {
		System.out.println("Axios 요청 확인");
		return list;
	}
	
	@RequestMapping("insert")
	public MoviesDTO insert(MoviesDTO dto) {
		dto.setId(id++);
		list.add(dto);
		return dto;
	}
	
	@RequestMapping("delete")
	public int delete(MoviesDTO dto) {
		
	}
}
