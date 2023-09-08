 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>WebSocket Practice</title>
<script src="https://code.jquery.com/jquery-3.6.4.js"></script>
</head>
<style>
	*{box-sizing:border-box}
	div{border:1px solid black;}
	.container{
	 width:400px;
	 height:500px;
	 margin:auto;
	 background-color:rgb(240.240.240);
	}
	.div_message{
		height:90%;
		overflow-y:scroll;
		padding:10px;
	}
	
	.div_message div{
		word-wrap: break-word;
		width:95%;
		margin-bottom:10px;
		display:block;
		
	}
	.div_message>div span{
		display:inline-block;
		height:80%;
		background-color:skyblue;
		border-radius:10px;
		border:none;
		color:white;
		font-size:13px;
		word-wrap: break-word;
		padding:7px;
	}
	.div_message>div p{
		margin:0;
		margin-bottom:3px;
		font-size:13px;
	}
	.div_input{
		height:10%;
	}
	.div_input>input{
		width:100%;
		height:100%;
		font-size:18px;
	}
	
</style>
<body>
	<script>
		$(function(){
			const ws = new WebSocket("ws://192.168.50.86/chat");
			
			$("#chat").on("keyup",function(e){
				
				if(e.key == "Enter") {
					
					let message = $("#chat").val();	
					ws.send(message); //메세지를 보낼 때 
					$("#chat").val("");
					$("#chat").focus();
				}
			});
			
			ws.onmessage = function(e) { //서버로부터 메세지가 도착했을 때 실행되는 함수 
				
				let data = JSON.parse(e.data);
			
				if(!Array.isArray(data)) {
					data = [data];
				}
					for(let i = 0; i<data.length; i++) {
						console.log(typeof data);
						
						let messageBox = $("<div style='border:none'>");
						let pTag = $("<p>");
						let spanTag = $("<span>");
						pTag.append(data[i].sender);
						spanTag.append(data[i].message);
						messageBox.append(pTag);
						messageBox.append(spanTag);
						$(".div_message").append(messageBox);
					}
					scrollUl();
			}	
		});
		
		function scrollUl() {
			  // 채팅창 form 안의 ul 요소, (ul 요소 안에 채팅 내용들이 li 요소로 입력된다.)
			  let chatUl = document.querySelector('.div_message');
			  chatUl.scrollTop = chatUl.scrollHeight; // 스크롤의 위치를 최하단으로
			}
	</script>
	<div class="container">
		<div class="div_message">

		</div>
		<div class="div_input">
			<input type="text" id="chat" style="border:none" placeholder="메세지를 입력하세요">
		</div>
	</div>
</body>
</html>