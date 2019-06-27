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
  url: '/', // 클라이언트가 요청을 보낼 서버의 URL 주소
  data: {id: 'jen'},
  type: 'POST', // HTTP 요청 방식(GET, POST)
  dataType: 'json', // 서버에서 보내줄 데이터의 타입
  success(json) {
    let tables = [];

    for (let i = 0; i < json.length; i = i + 1) {
      tables.push({
        id: i + 1,
        name: json[i].gr_name,
        color: '#ffffff',
        bgColor: '#9e5fff',
        dragBgColor: '#9e5fff',
        borderColor: '#9e5fff'
      });
    }

    calendar.setCalendars(tables);
  }
})

$.ajax({
  url: '/initial', // 클라이언트가 요청을 보낼 서버의 URL 주소
  data: {id: 'jen'},
  type: 'GET', // HTTP 요청 방식(GET, POST)
  dataType: 'json', // 서버에서 보내줄 데이터의 타입
  success(json) {
    calendar.createSchedules(json);
  }
})

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

  const tempDate = schedule.start;
  const tempDate2 = schedule.end;

  $.ajax({
    url: '/insert',
    data: {
      calendarId: 'Major Lecture',
      id: String(Math.random() * 100000000000000000),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()} ${tempDate.getHours()}:${tempDate.getMinutes()}:${tempDate.getSeconds()}`,
      end: `${tempDate2.getFullYear()}-${tempDate2.getMonth() + 1}-${tempDate2.getDate()} ${tempDate2.getHours()}:${tempDate2.getMinutes()}:${tempDate2.getSeconds()}`,
      category: scheduleData.isAllDay ? 'allday' : 'time'
    },
    type: 'POST',
    dataType: 'json',
    success() {
      calendar.createSchedules([schedule]);
      alert('일정 생성 완료');
    }
  });
});

// 일정 업데이트
calendar.on('beforeUpdateSchedule', scheduleData => {
  const {schedule} = scheduleData;

  const tempDate = schedule.start;
  const tempDate2 = schedule.end;

  $.ajax({
    url: '/update', // 클라이언트가 요청을 보낼 서버의 URL 주소
    data: {
      calendarId: schedule.calendarId,
      id: schedule.id,
      title: schedule.title,
      start: `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()} ${tempDate.getHours()}:${tempDate.getMinutes()}:${tempDate.getSeconds()}`,
      end: `${tempDate2.getFullYear()}-${tempDate2.getMonth() + 1}-${tempDate2.getDate()} ${tempDate2.getHours()}:${tempDate2.getMinutes()}:${tempDate2.getSeconds()}`
    },
    type: 'POST', // HTTP 요청 방식(GET, POST)
    dataType: 'json', // 서버에서 보내줄 데이터의 타입
    success() {
      calendar.updateSchedule(schedule.id, schedule.calendarId, schedule);
    }
  });
});

// 일정 삭제
calendar.on('beforeDeleteSchedule', scheduleData => {
  const {schedule} = scheduleData;

  $.ajax({
    url: '/delete',
    data: {
      id: schedule.id
    },
    type: 'POST',
    dataType: 'json',
    success() {
      calendar.deleteSchedule(schedule.id, schedule.calendarId);
    }
  });
});
