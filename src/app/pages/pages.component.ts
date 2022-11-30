import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';

import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

interface FoodNode {
  name: string;
  key: string;
  disabled?: boolean;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.less'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  private transformer = (node: FoodNode, level: number): ExampleFlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled
  });
  selectListSelection = new SelectionModel<ExampleFlatNode>();

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode): boolean => node.expandable;

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

  nodes = [
    {
      name: '工作台',
      key: '1',
      children: [
        { 
          name: '二级标题', 
          key: '1-1',
          children: [
            { 
              name: '三级标题', 
              key: '1-1-1',
              children: [
                { 
                  name: '四级标题', 
                  key: '1-1-1-1',
                  children: [
                    { name: '五级标题', key: '1-1-1-1-1' },
                    { name: '五级标题', key: '1-1-1-1-2' },
                  ]
                }
              ]
            },
            { name: '三级标题', key: '1-1-2' },
          ]
        },
        { 
          name: '二级标题', 
          key: '1-2',
          children: [
            { name: '三级标题', key: '1-2-1' }
          ]
        }
      ]
    }
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
    this.dataSource.setData(this.nodes);
  }
}
