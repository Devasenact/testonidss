import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { 
    document.getElementById("login").style.display = 'none';
  }

  ngOnInit(): void {
  }

}
