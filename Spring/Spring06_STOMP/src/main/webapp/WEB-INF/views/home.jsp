<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>STOMP Practice</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.6.1/sockjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
</head>
<body>

	<input type="text" id="message" placeholder="서버로 전송할 메세지 입력">
	<button id="send">전송</button>

	<script>
		const socket = new WebSocket("ws://192.168.50.86/chat"); //Websocket 연결
		const stompClient = Stomp.over(socket); //Websocket 연결위에다가 STOMP 프로토콜을 추가
		
		stompClient.connect({},function(){ //{}-> header 정보 : stomp 연결에 적용할 설정 정보
			//function(){} -> stomp 연결에 성공시 실행 할 콜백함수
			//subscribe 함수의 반환값은 구독정보 객체로, 향후 구독 취소등에 사용될 수 있으므로 변수로 보관,
			//topic/chat 채널을 구독하고, 해당 채널로부터 나오는 데이터를 console에 출력함
			const subscription = stompClient.subscribe("/topic/msg",function(message) {  //첫번째 파라미터 -> 구독할 채널의 이름
					console.log(message);                   //위의 URL로 오는 데이터를 받음 (구독 개념)
					//console.log(JSON.parse(dto.body).message)
				});
			},function(error){ //연결 실패 시 실행될 함수 
				console.log("연결 실패");
				console.log(error);
			});

		
		document.getElementById("send").onclick = function(){
			let message = document.getElementById("message").value;
			const destination = "/app/message"; // 클라이언트가 메세지를 보낼 때 사용할 URL의 prefix 설정을 'app'으로 해놓음
			const header = {};
			const body = JSON.stringify({name:"Ryan",message:message}) //JSON.stringify() <--> JSON.parse()
			stompClient.send(destination, header, body);
		}
	</script>

</body>
</html>