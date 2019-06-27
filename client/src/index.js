import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const calendar = new Calendar('#calendar', {
  defaultView: 'month',
  useCreationPopup: true,
  useDetailPopup: true,
  // taskView: false,
  month: {
    daynames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일'
    ],
    startDayOfWeek: 0
  },
  week: {
    daynames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일'
    ],
    startDayOfWeek: 0
  },
  calendars: [
    {
      id: '1',
      name: 'My Calendar',
      color: '#ffffff',
      bgColor: '#9e5fff',
      dragBgColor: '#9e5fff',
      borderColor: '#9e5fff'
    },
    {
      id: '2',
      name: 'Company',
      color: '#00a9ff',
      bgColor: '#00a9ff',
      dragBgColor: '#00a9ff',
      borderColor: '#00a9ff'
    }
  ],
  template: {
    popupDetailLocation(schedule) {
      return `Location : ${schedule.location}`;
    }
  }
});

const App = {
  plusFun() {
    const groupname = $('#groupname').val();

    $.ajax({
      url: '/dataSave', // 클라이언트가 요청을 보낼 서버의 URL 주소
      data: {id: 'jen',
        groupName: groupname}, // HTTP 요청과 함께 서버로 보낼 데이터
      type: 'POST', // HTTP 요청 방식(GET, POST)
      dataType: 'json' // 서버에서 보내줄 데이터의 타입
    });
    const plusUl = document.createElement('li');
    plusUl.innerHTML = `<a style=" display: flex; justify-content: space-between;"><p>${groupname}</p><img src = "./public/assets/img/자산 7.png"/></a>`;
    document.getElementById('a').appendChild(plusUl);
  },
  changeMonth() {
    calendar.changeView('month', true);
  },
  changeDay() {
    calendar.changeView('day', true);
  },
  changeWeek() {
    calendar.changeView('week', true);
  },
  changeCalendar() {
    calendar.id[0].render();
  },
  clear() {
    calendar.clear();
  //   calendar.createSchedules(schedules, true);
    // calendar.render();
  },
  changePrev() {
    calendar.prev();
  },
  changeNext() {
    calendar.next();
  },
  changeHide() {
    calendar.render();
  }
};

window.App = App;

calendar.render();

$.ajax({
  url: '/initial', // 클라이언트가 요청을 보낼 서버의 URL 주소
  data: {id: 'jen'},
  type: 'POST', // HTTP 요청 방식(GET, POST)
  dataType: 'json', // 서버에서 보내줄 데이터의 타입
  success(json) {
    console.log(json);
    calendar.createSchedules(json);
  }
})

calendar.setCalendarColor('Major Lecture', {
  color: '#ffffff',
  bgColor: '#ff5583',
  dragBgColor: '#ff5583',
  borderColor: '#ff5583'
});

calendar.setCalendarColor('General Lecture', {
  color: '#ffffff',
  bgColor: '#dc9656',
  dragBgColor: '#dc9656',
  borderColor: '#dc9656'
});

// 일정 생성
calendar.on('beforeCreateSchedule', scheduleData => {
  const schedule = {
    calendarId: 'Major Lecture',
    id: String(Math.random() * 100000000000000000),
    title: scheduleData.title,
    isAllDay: scheduleData.isAllDay,
    start: scheduleData.start,
    end: scheduleData.end,
    category: scheduleData.isAllDay ? 'allday' : 'time'
  };

  calendar.createSchedules([schedule]);
  console.log(scheduleData.title, scheduleData.location);

  alert('일정 생성 완료');
});

// 일정 업데이트
calendar.on('beforeUpdateSchedule', scheduleData => {
  const {schedule} = scheduleData;

  calendar.updateSchedule(schedule.id, schedule.calendarId, schedule);
});

// 일정 삭제
calendar.on('beforeDeleteSchedule', scheduleData => {
  const {schedule, start, end} = scheduleData;

  schedule.start = start;
  schedule.end = end;
});
