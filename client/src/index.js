import Calendar from "tui-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

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
  useCreationPopup: true,
  useDetailPopup: true,
  // taskView: false,
  month: {
    daynames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    ],
    startDayOfWeek: 0
  },
  week: {
    daynames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    ],
    startDayOfWeek: 0
  },
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
  template: {
    popupDetailLocation: function(schedule) {
      return 'Location : ' + schedule.location;
  }
  }
});

const App = {
  plusFun: function() {
    let groupname = $('#groupname').val();
    console.log(groupname);
    const plusUl = document.createElement("li");
    plusUl.innerHTML = '<a style="display: flex; justify-content: space-between;"><p style="font-size: 18px;">'+groupname+'</p><img src = "../assets/img/자산 7.png"/></a>';
    document.getElementById("a").appendChild(plusUl);
  },
  changeMonth: function() {
    calendar.changeView('month', true);
  },
  changeWeek: function() {
    calendar.changeView('week', true);
  },
  changeDay: function() {
    calendar.changeView('day', true);
  },
  changeCalendar: function() {
    calendar.id[0].render();
  },
  clear: function() {
    calendar.clear();
    calendar.createSchedules(schedules, true);
    calendar.render();
  },
  changePrev: function() {
    countMonth -= 1;
    calendar.prev();
    this.nowgetdate(countMonth);
  },
  changeNext: function() {
    countMonth += 1;
    calendar.next();
    this.nowgetdate(countMonth);
  },
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

  }
  // inputtoval: function() {
  //   let input = document.getElementById("groupname").value; 
  //   let temp = input;
  //   // console.log(temp);
  // }
};

window.App = App;

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

calendar.setCalendarColor("Major Lecture", {
  color: "#ffffff",
  bgColor: "#ff5583",
  dragBgColor: "#ff5583",
  borderColor: "#ff5583"
});

calendar.setCalendarColor("General Lecture", {
  color: "#ffffff",
  bgColor: "#dc9656",
  dragBgColor: "#dc9656",
  borderColor: "#dc9656"
});

//일정 생성
calendar.on("beforeCreateSchedule", scheduleData => {
  const schedule = {
    calendarId: "Major Lecture",
    id: String(Math.random() * 100000000000000000),
    title: scheduleData.title,
    isAllDay: scheduleData.isAllDay,
    start: scheduleData.start,
    end: scheduleData.end,
    category: scheduleData.isAllDay ? "allday" : "time"
  };

  calendar.createSchedules([schedule]);
  console.log(scheduleData.title, scheduleData.location);
  
  alert("일정 생성 완료");
});

//일정 업데이트
calendar.on("beforeUpdateSchedule", scheduleData => {
  const { schedule } = scheduleData;

  calendar.updateSchedule(schedule.id, schedule.calendarId, schedule);
});

//일정 삭제
calendar.on("beforeDeleteSchedule", scheduleData => {
  const { schedule, start, end } = scheduleData;

  schedule.start = start;
  schedule.end = end;
  calendar.deleteSchedule(schedule.id, schedule.calendarId);
});

// $('#plusModal').on('hidden.bs.modal', function (e) {
//   console.log('modal close');
//   $('#groupname')[0].reset()
// });
