import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnDestroy {

  constructor() { }

  private subject: Subject<string> = new Subject();
  z=[1,2,3];

  ngOnInit() {
    this.subject.debounceTime(2000).subscribe(searchTextValue => {
      this.z.push(...[4,5,6]);
    });
  }

  ngOnDestroy(): void {
    this.subject.next(null);
  }

  search(event: string) {
    (event !== '' && event.length>2) && this.subject.next(event);
  }

}