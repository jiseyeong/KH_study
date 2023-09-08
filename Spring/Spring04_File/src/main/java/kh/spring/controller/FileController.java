package kh.spring.controller;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.UUID;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import kh.spring.dto.FilesDTO;
import kh.spring.repositories.FilesDAO;

@Controller
@RequestMapping("/file/")
public class FileController {

	@Autowired
	private HttpSession session;
	
	@Autowired
	private FilesDAO dao;

	@RequestMapping("upload")
	public String upload(String message, MultipartFile[] files) throws Exception{ //파일을 선택안하고 넘겨도 빈파일이 넘어옴
		
		String realPath = session.getServletContext().getRealPath("upload");
		File realPathFile = new File(realPath);
		if(!realPathFile.exists()) {realPathFile.mkdir();}		

		System.out.println("전송 된 메세지 : " + message);

		if(files != null) {
			for(MultipartFile file : files) {
				
				if(file.isEmpty()) {break;} //그 파일이 비어있는지 확인 비어있으면 break
				String oriName = file.getOriginalFilename();
				String sysName = UUID.randomUUID() + "_" + oriName;
				file.transferTo(new File(realPath+"/"+sysName));
				dao.insert(new FilesDTO(0,oriName,sysName,0));
			}
		}		
		return "redirect:/";
	}
	
	@RequestMapping("download")
	public void download(
			String oriName, // 클라이언트가 다운받는 파일의 이름을 지정하기 위해서 받음.
			String sysName, // 서버쪽에 저장된 target 파일의 이름 
			HttpServletResponse response // Dispatcher를 거치지 않고 stream을 통해 직접 전송하기 위해 
			) throws Exception{
		
		
		String realPath = session.getServletContext().getRealPath("upload");
		File target = new File(realPath+"/"+sysName);
		//다운 받을 파일을 선택하여 File 객체로 생성
		
		
		oriName = new String(oriName.getBytes("utf8"),"ISO-8859-1");//인코딩 방식 
		response.setHeader("content-disposition", "attachment;filename="+oriName);
		//응답 헤더에 보내려는 데이터가 첨부파일임을 밝히고, 적절히 인코딩 된 파일이름을 지정
		//attachment -> 첨부파일 
		
		try(DataInputStream dis = new DataInputStream(new FileInputStream(target)); //File객체를 읽어들임 
			DataOutputStream dos = new DataOutputStream(response.getOutputStream());) { //client로 감 
			byte[] fileContents = dis.readAllBytes(); //읽어들인걸 배열에 담음
			dos.write(fileContents);
			dos.flush();
		}
		//타겟 파일의 내용을 모두 추출해 response stream으로 직접 출력 
	}
	
	//ajax응답은 ResponseBody 어노테이션을 붙혀줘야함 
	@ResponseBody
	@RequestMapping("list")
	public List<FilesDTO> list() {
		List<FilesDTO> list = dao.selectAll();
		return list;
	}

}
