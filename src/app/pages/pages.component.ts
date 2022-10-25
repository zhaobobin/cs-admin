import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.less'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  constructor(public router: Router) {}

  searchValue?: string;

  currentMenuName: string = '工作台';

  currentUrl: string = this.router.routerState.snapshot.url;

  menus = [
    {
      name: '工作台',
      icon: 'assets/images/common/menu_icon01.png',
      path: '/pages/workbench',
    },
    {
      name: '通讯录',
      icon: 'assets/images/common/menu_icon02.png',
      path: '/pages/members',
    },
    {
      name: '通知消息',
      icon: 'assets/images/common/menu_icon03.png',
      path: '/pages/notice',
    },
    {
      name: '系统管理',
      icon: 'assets/images/common/menu_icon04.png',
      path: '/pages/system',
    },
    {
      name: '居民账户',
      icon: 'assets/images/common/menu_icon05.png',
      path: '/pages/account',
    },
    {
      name: '人社业务',
      icon: 'assets/images/common/menu_icon06.png',
      path: '/pages/service',
    },
    {
      name: '一卡通平台',
      icon: 'assets/images/common/menu_icon07.png',
      path: '/pages/platform',
    },
    {
      name: '服务中台',
      icon: 'assets/images/common/menu_icon08.png',
      path: '/pages/middle-platform',
    },
    {
      name: '决策分析',
      icon: 'assets/images/common/menu_icon09.png',
      path: '/pages/analysis',
    },
  ];

  userInfo = {
    avatar: 'assets/images/common/account.png',
    name: '张明明',
    role: '管理员'
  };

  search = () => {
    console.log(this.searchValue)
  }

  logout() {
    // this.router.navigate(['/auth/login']);
  }

  handleClickMenu(currentUrl: string) {
    this.currentUrl = currentUrl;
  }
}
