package kh.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kh.spring.dto.MoviesDTO;
import kh.spring.repositories.MoviesDAO;

@Service
public class MoviesService {
	
	@Autowired
	private MoviesDAO dao;
	
	@Transactional //트렌젝션이 적용되야하는 곳에 어노테이션을 붙혀줌 
	public void transactionTest(MoviesDTO dto) {
		dao.insert(dto);
		dao.insertHistory(dto);
	}
}
