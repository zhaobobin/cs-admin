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

  currentTodoMenu = '1';
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
  todoList: any[] = [];

  noticeList: any[] = [];

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

  ngOnInit() {
    this.initTodoList();
    this.initNoticeList();
  }
  
}
