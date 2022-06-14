import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  private subject: Subject<string> = new Subject();
  z=[1,2,3];

  ngOnInit() {
    this.subject.debounceTime(2000).subscribe(searchTextValue => {
      this.z.push(...[4,5,6]);
    });
  }

  search(event) {
    this.subject.next(event.target.value);
  }

}