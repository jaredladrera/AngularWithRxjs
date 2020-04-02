import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../Services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title$ = this.navbarService.title;
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
  }

}
