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
    popupDetailLocation: function(schedule) {
      return 'Location : ' + schedule.location;
  }
  }
});

const App = {
  plusFun() {
    const plusUl = document.createElement('li');
    plusUl.innerHTML = '<a><i class='nc-icon nc-bank'></i><p>Dashboard</p></a>';
    document.getElementById('a').appendChild(plusUl);
  },
  changeMonth() {
    calendar.changeView('month', true);
  },
  changeWeek() {
    calendar.changeView('week', true);
  },
  changeDay() {
    calendar.changeView('day', true);
  },
  changeCalendar: function() {
    calendar.id[0].render();
  },
  clear: function() {
    calendar.clear();
    calendar.createSchedules(schedules, true);
    // calendar.render();
  },
  changePrev: function() {
    calendar.prev();
  },
  changeNext: function() {
    calendar.next();
  },
  changeHide: function() {
    calendar.render();
  }
};

window.App = App;

calendar.createSchedules([
  {
    id: '1',
    calendarId: 'Major Lecture',
    title: '자료 구조',
    category: 'time',
    start: '2019-06-23T10:30:00',
    end: '2019-06-23T12:30:00'
  },
  {
    id: '2',
    calendarId: 'General Lecture',
    title: '건강과 영양',
    category: 'time',
    dueDateClass: '',
    start: '2019-06-24T14:30:00',
    end: '2019-06-24T16:30:00',
    isReadOnly: true // schedule is read-only
  }
]);

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

//  일정 생성
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

  alert('일정 생성 완료');
});

//  일정 업데이트
calendar.on('beforeUpdateSchedule', scheduleData => {
  const {schedule} = scheduleData;

  calendar.updateSchedule(schedule.id, schedule.calendarId, schedule);
});

//  일정 삭제
calendar.on('beforeDeleteSchedule', scheduleData => {
  const {schedule, start, end} = scheduleData;

  schedule.start = start;
  schedule.end = end;
  calendar.deleteSchedule(schedule.id, schedule.calendarId);
});
