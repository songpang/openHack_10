import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

<<<<<<< HEAD
let index = 0;

const calendar = new Calendar('#calendar', {
  defaultView: 'month',
=======
var today = new Date();
var countMonth = 0;
const Caver = require('caver-js');
const caver = new Caver(new Caver.providers.HttpProvider('https://api.baobab.klaytn.net:8651/'));
const ERC20ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
]

const myContract = new caver.klay.Contract(ERC20ABI, '0x1a05d6F86dFA69A556780D5800a1fd405EbE44c2', {
  from: '0x72c5f48a39bb3915b8b8699b7182ba933a287288', // default from address
  gasPrice: '25000000000' // default gas price in peb, 25 Gpeb in this case
});
// caver.klay.getBalance('0x72c5f48a39bb3915b8b8699b7182ba933a287288').then(console.log);
console.log(caver.klay.accounts.privateKeyToAccount('0xe699acbd53c7df36787d39b6138eb44a8e916ea3c3f2ab01565e191ab1370c2e'));

const feePayerPrivateKey = "0xe699acbd53c7df36787d39b6138eb44a8e916ea3c3f2ab01565e191ab1370c2e"
caver.klay.accounts.wallet.add(feePayerPrivateKey, '0x72c5f48a39bb3915b8b8699b7182ba933a287288')
caver.klay.defaultAccount = '0x72c5f48a39bb3915b8b8699b7182ba933a287288';
myContract.options.from = '0x72c5f48a39bb3915b8b8699b7182ba933a287288'; // default from address
myContract.options.gasPrice = '25000000000'; // default gas price in peb
myContract.options.gas = 5000000; // provide as fallback always 5M gas

// console.log(myContract.options);
// console.log(myContract.methods.totalSupply().call());

// myContract.methods.transfer('0x036161669e02b74cd9b217fcc277062196dfba52', 10000000000000).call()
//   .then(function(receipt) {
//     console.log(receipt);
//   });

  // // transfer => unknown account
  myContract.methods.transfer('0x036161669e02b74cd9b217fcc277062196dfba52', caver.utils.toPeb('1', 'KLAY')).
  send()
  .then(function(receipt) {
    console.log(receipt);
  });
  

const calendar = new Calendar("#calendar", {
  defaultView: "month",
>>>>>>> origin/frontend
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
<<<<<<< HEAD
=======
  calendars: [
    {
      id: '1',
      name: "Company",
      color: "#ffffff",
      bgColor: "#9e5fff",
      dragBgColor: "#9e5fff",
      borderColor: "#9e5fff"
    },
    {
      id: "2",
      name: "University",
      color: "#00a9ff",
      bgColor: "#00a9ff",
      dragBgColor: "#00a9ff",
      borderColor: "#00a9ff"
    },
    {
      id: "3",
      name: "Friends",
      color: "#00a9ff",
      bgColor: "#00a9ff",
      dragBgColor: "#00a9ff",
      borderColor: "#00a9ff"
    },
    {
      id: "4",
      name: "",
      color: "#00a9ff",
      bgColor: "#00a9ff",
      dragBgColor: "#00a9ff",
      borderColor: "#00a9ff"
    },

  ],
>>>>>>> origin/frontend
  template: {
    popupDetailLocation(schedule) {
      return `Location : ${schedule.location}`;
    }
  }
});

const App = {
<<<<<<< HEAD
  plusFun() {
    const groupname = $('#groupname').val();
    let vcolor = `#${Math.round(Math.random() * 0xFFFFFF).toString(16)}`;

    $.ajax({
      url: '/dataSave', // 클라이언트가 요청을 보낼 서버의 URL 주소
      data: {id: 'jen',
        groupName: groupname,
        color: vcolor}, // HTTP 요청과 함께 서버로 보낼 데이터
      type: 'POST', // HTTP 요청 방식(GET, POST)
      dataType: 'json' // 서버에서 보내줄 데이터의 타입
    });
    const plusUl = document.createElement('li');
    plusUl.innerHTML = `<a style=" display: flex; justify-content: space-between;"><p>${groupname}</p><img src = "/img/자산 7.png"/></a>`;
    document.getElementById('a').appendChild(plusUl);
=======
  plusFun: function() {
    let groupname = $('#groupname').val();
    console.log(groupname);
    const plusUl = document.createElement("li");
    plusUl.innerHTML = '<a style="display: flex; justify-content: space-between;"><p style="font-size: 18px;">'+groupname+'</p><img src = "../assets/img/자산 7.png"/></a>';
    document.getElementById("a").appendChild(plusUl);
>>>>>>> origin/frontend
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
<<<<<<< HEAD
  //   calendar.createSchedules(schedules, true);
    // calendar.render();
  },
  changePrev() {
=======
    calendar.createSchedules(schedules, true);
    calendar.render();
  },
  changePrev: function() {
    countMonth -= 1;
>>>>>>> origin/frontend
    calendar.prev();
    this.nowgetdate(countMonth);
  },
<<<<<<< HEAD
  changeNext() {
=======
  changeNext: function() {
    countMonth += 1;
>>>>>>> origin/frontend
    calendar.next();
    this.nowgetdate(countMonth);
  },
<<<<<<< HEAD
  changeHide() {
    calendar.render();
=======
  changeToday: function() {
    calendar.today();
  },
  destroy: function() {
    calendar.destroy();
  },
  rerender: function() {
    calendar._initialize();
  },
  changeCalendar: function() {
    calendar.toggleSchedules('Major Lecture', true, true);
  },
  nowgetdate: function(add = 0) {
    // let timenow = (calendar.getDate()._date + ' ').split(' ').slice(1, 4).join(' ');
    let mm = String(today.getMonth()+1+add) + '월'; //January is 0!
    let yyyy = String(today.getFullYear()) + '년 ';
    let nowdate = yyyy + mm;
    
    const plusUl = document.createElement("div");
    plusUl.innerHTML = '<p style = "font-size: 50px; text-color: gray">'+nowdate+'</p>';
    const setdateElement = document.getElementById("setdate");

    while (setdateElement.firstChild) {
        setdateElement.removeChild(setdateElement.firstChild);
    }

    setdateElement.appendChild(plusUl);
    console.log(nowdate);

>>>>>>> origin/frontend
  }
  // inputtoval: function() {
  //   let input = document.getElementById("groupname").value; 
  //   let temp = input;
  //   // console.log(temp);
  // }
};

window.App = App;

<<<<<<< HEAD
calendar.render();

$.ajax({
  url: '/', // 클라이언트가 요청을 보낼 서버의 URL 주소
  data: {id: 'jen'},
  type: 'POST', // HTTP 요청 방식(GET, POST)
  dataType: 'json', // 서버에서 보내줄 데이터의 타입
  success(json) {
    let tables = [];
=======
App.nowgetdate();

calendar.createSchedules([
  {
    id: "1",
    calendarId: 'Major Lecture',
    title: "자료 구조",
    location: "한빛관 304호",
    category: "time",
    start: "2019-06-23T10:30:00",
    end: "2019-06-23T12:30:00"
  },
  {
    id: "2",
    calendarId: "General Lecture",
    title: "건강과 영양",
    location: '구리시',
    category: "time",
    start: "2019-06-24T14:30:00",
    end: "2019-06-24T16:30:00",
    isReadOnly: true // schedule is read-only
  }
]);
>>>>>>> origin/frontend

    for (index = 0; index < json.length; index = index + 1) {
      tables.push({
        id: String(json[index].gr_number),
        name: json[index].gr_name,
        color: '#ffffff',
        bgColor: json[index].color,
        dragBgColor: json[index].color,
        borderColor: json[index].color
      });
    }

    calendar.setCalendars(tables);
  }
});

$.ajax({
  url: '/initial', // 클라이언트가 요청을 보낼 서버의 URL 주소
  data: {id: 'jen'},
  type: 'POST', // HTTP 요청 방식(GET, POST)
  dataType: 'json', // 서버에서 보내줄 데이터의 타입
  success(json) {
    calendar.createSchedules(json);
  }
});

// 일정 생성
calendar.on('beforeCreateSchedule', scheduleData => {
  const schedule = {
    calendarId: scheduleData.calendarId,
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
      calendarId: scheduleData.calendarId,
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

// $('#plusModal').on('hidden.bs.modal', function (e) {
//   console.log('modal close');
//   $('#groupname')[0].reset()
// });
