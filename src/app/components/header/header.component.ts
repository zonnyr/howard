import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  // variable
  scrollTop: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  // funcion que captura el scroll para cabiar el tipo de header
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(){
    var y = window.scrollY;
    if(y >= 10){
      this.scrollTop = true;
    }
    else {
      this.scrollTop = false;
    }
  }

}
