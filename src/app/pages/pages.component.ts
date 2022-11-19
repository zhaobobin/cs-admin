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

  menus: any[] = [];

  menusSourceData = [
    {
      navid: '1',
      navtitle: '工作台',
      icon: 'assets/images/common/menu_icon01.png',
      path: '/pages/workbench',
      restype: '2',
    },
    {
      navid: '2',
      navtitle: '统一门户',
      icon: 'assets/images/common/menu_icon02.png',
      path: '/pages/members',
      restype: '1',
    },
    {
      navid: '3',
      navtitle: '用户管理',
      icon: 'assets/images/common/menu_icon03.png',
      path: '/pages/notice',
      restype: '2',
      navparentid: '2',
    },
    {
      navid: '4',
      navtitle: '一卡通管理',
      icon: 'assets/images/common/menu_icon04.png',
      path: '/pages/system',
      restype: '1',
    },
    {
      navid: '5',
      navtitle: '特殊人员管理',
      icon: 'assets/images/common/menu_icon05.png',
      path: '/pages/account',
      restype: '2',
      navparentid: '4',
    },
  ];

  userInfo = {
    avatar: 'assets/images/common/account.png',
    name: '张明明',
    role: '管理员',
  };

  search = () => {
    console.log(this.searchValue);
  };

  logout = () => {
    this.router.navigate(['/auth/login']);
  }

  handleClickMenu(currentUrl: string) {
    this.currentUrl = currentUrl;
  }

  // 构建菜单树
  buildMenuTree(data: any[]) {
    let result: any[] = [];
    if (!Array.isArray(data)) {
      return result;
    }
    let map: any = {};
    data.forEach(item => {
      map[item.navid] = item;
    });
    data.forEach(item => {
      let parent = map[item.navparentid];
      if (parent) {
        (parent.children || (parent.children = [])).push(item);
      } else {
        result.push(item);
      }
    });
    return result;
  }

  ngOnInit() {
    this.menus = this.buildMenuTree(this.menusSourceData);
  }
}
