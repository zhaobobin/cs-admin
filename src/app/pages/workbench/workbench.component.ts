import { Component } from '@angular/core';

@Component({
  selector: 'workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['../pages.component.less', './workbench.component.less']
})
export class WorkbenchComponent {
  title = '工作台';

  cards = [
    {
      name: '待办数量',
      icon: 'assets/images/workbench/icon_01.png',
      img: 'assets/images/workbench/image_01.png',
      number: 11
    },
    {
      name: '消息数量',
      icon: 'assets/images/workbench/icon_02.png',
      img: 'assets/images/workbench/image_02.png',
      number: 6
    },
    {
      name: '日程数量',
      icon: 'assets/images/workbench/icon_03.png',
      img: 'assets/images/workbench/image_03.png',
      number: 8
    },
  ];

  // 当前激活的代办菜单
  currentTodoMenu = '1';

  // 代办菜单
  todoMenus = [
    {
      key: '1',
      name: '门户',
      number: 12,
      icon: 'assets/images/workbench/todo_01.png'
    },
    {
      key: '2',
      name: '一卡通',
      number: 2,
      icon: 'assets/images/workbench/todo_02.png'
    },
    {
      key: '3',
      name: '居民账户',
      number: 3,
      icon: 'assets/images/workbench/todo_03.png'
    },
    {
      key: '4',
      name: '业务',
      number: 9,
      icon: 'assets/images/workbench/todo_04.png'
    },
    {
      key: '5',
      name: '中台',
      number: 2,
      icon: 'assets/images/workbench/todo_05.png'
    },
  ];

  // 代办工作
  todoList: any[] = [];

  // 通知公告
  noticeList: any[] = [];

  // 常用菜单
  commonMenus: any[] = [
    [
      {
        name: '用户管理',
        icon: 'assets/images/workbench/menu_01.png'
      },
      {
        name: '菜单管理',
        icon: 'assets/images/workbench/menu_02.png'
      },
    ],
    [
      {
        name: '账户管理',
        icon: 'assets/images/workbench/menu_03.png'
      },
      {
        name: '充值管理',
        icon: 'assets/images/workbench/menu_04.png'
      },
      {
        name: '支付管理',
        icon: 'assets/images/workbench/menu_05.png'
      },
    ],
  ];

  // 所有的日程列表
  scheduleList: any[] = [
    {
      date: '2022-10-02',
      event: [
        {
          type: '会议①',
          name: '[会议] 2022年8月第一周工作计划',
          startTime: '09:00',
          endTime: '11:00'
        },
        {
          type: '会议②',
          name: '[会议] 2022年8月第一周工作计划',
          startTime: '15:00',
          endTime: '17:00'
        },
      ]
    },
    {
      date: '2022-10-03',
      event: [
        {
          type: '出差',
          name: '[出差] 2022年8月第一周工作计划',
          startTime: '09:00',
          endTime: '11:00'
        },
      ]
    },
    {
      date: '2022-10-04',
      event: [
        {
          type: '会议①',
          name: '[会议] 2022年8月第一周工作计划',
          startTime: '09:00',
          endTime: '11:00'
        },
        {
          type: '会议②',
          name: '[会议] 2022年8月第一周工作计划',
          startTime: '15:00',
          endTime: '17:00'
        },
      ]
    },
    {
      date: '2022-10-26',
      event: [
        {
          type: '会议①',
          name: '[会议] 2022年8月第一周工作计划',
          startTime: '09:00',
          endTime: '11:00'
        },
        {
          type: '会议②',
          name: '[会议] 2022年8月第一周工作计划',
          startTime: '14:00',
          endTime: '15:00'
        },
      ]
    },
  ];
  // 当前日期的日程事件
  currentScheduleEvent: any[] = [];

  eventTags: any[] = [
    { name: '我的', key: '1' },
    { name: '我安排给他人的', key: '2' },
    { name: '我安排的', key: '3' },
  ];
  currentTag = '1';

  changeCurrentTodoMenu(key: string) {
    this.currentTodoMenu = key;
  }

  initTodoList() {
    const arr = [];
    for (let i = 1; i<=5; i++) {
      arr.push({
        id: i,
        title: '关于新增国谈药定点零售药店名单的公示',
        date: '2022-07-01',
      })
    }
    this.todoList = arr;
  }

  initNoticeList() {
    const arr = [];
    for (let i = 1; i<=5; i++) {
      arr.push({
        id: i,
        title: '关于新增国谈药定点零售药店名单的公示',
        date: '2022-07-01',
      })
    }
    this.noticeList = arr;
  }

  // 初始化数据
  ngOnInit() {
    this.initTodoList();
    this.initNoticeList();
    this.nzSelectChange(new Date());
  }

  // 日期格式化
  dateFormat(value: Date, format = "Y-M-D") {
    const formatNumber = (n: number) => `0${n}`.slice(-2);
    const date = new Date(value);
    const formatList = ["Y", "M", "D", "h", "m", "s"];
    const resultList = [];
    resultList.push(date.getFullYear().toString());
    resultList.push(formatNumber(date.getMonth() + 1));
    resultList.push(formatNumber(date.getDate()));
    resultList.push(formatNumber(date.getHours()));
    resultList.push(formatNumber(date.getMinutes()));
    resultList.push(formatNumber(date.getSeconds()));
    for (let i = 0; i < resultList.length; i++) {
      format = format.replace(formatList[i], resultList[i]);
    }
    return format;
  }

  // 选择日期
  nzSelectChange(date: Date) {
    const currentDate = this.dateFormat(date);
    const currentSchedule = this.scheduleList.find(item => item.date === currentDate);
    this.currentScheduleEvent = currentSchedule ? currentSchedule.event : [];
    console.log(this.currentScheduleEvent)
  }

  // 获取日程的事件
  getScheduleEvent(date: Date) {
    const currentDate = this.dateFormat(date);
    const schedule = this.scheduleList.find(item => item.date === currentDate);
    return schedule ? schedule.event : [];
  }

  changeTag(key: string) {
    this.currentTag = key;
  }
  
}
