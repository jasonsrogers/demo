import { Component, Input, OnInit } from '@angular/core';

export type Item = {
  text: string;
  routerLink: string;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() items: any[];

  ngOnInit(): void {}
}
