<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>File Practice</title>
</head>
 <script src="https://code.jquery.com/jquery-latest.min.js"></script>
<body>
	<fieldset>
	<legend>File upload</legend>
	<form action="/file/upload" method="post" enctype="multipart/form-data">
		<input type="text" name="message"  placeholder="메세지 입력"><br>
		<input type="file" name="files" value="첨부파일" multiple>
		<button>제출</button>
	</form>
	</fieldset>
	
	<fieldset>
		<legend>File List</legend>
		<button id="getFiles">파일목록 불러오기</button>
		<div id=files></div>
	</fieldset>
	<script>
		$("#getFiles").on("click",function(){
			$.ajax({
				url:"/file/list"
			}).done(function(resp){
				
				for(let i = 0; i < resp.length; i++) {
					
					let anker = $("<a>");
					anker.attr("href","/file/download?sysName="+resp[i].sysName+"&oriName="+resp[i].oriName);
					anker.text(resp[i].oriName);
					let line = $("<div>");
					line.append(anker);
					$("#files").append(line);
				}
			})
		});
	</script>
</body>
</html>