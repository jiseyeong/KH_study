package kh.spring.scheduler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TestScheduler {
	// 초 : 0 ~ 59
	// 분 : 0 ~ 59
	// 시 : 0 ~ 23
	// 일 : 1 ~ 31
	// 월 : 1 ~ 12
	// 주 :  MON TUE WED THU FRI SAT SUN
	//       1   2   3   4   5   6   0
	// * : 모든 값
				  //  초 분 시 일 월 주
	@Scheduled(cron = "0 0 9 ? * MON") // 매월 오전 9시 되면 아래 메서드를 실행해라 
	public void test() {
		System.out.println("스케쥴러 동작 확인");
	}
}
