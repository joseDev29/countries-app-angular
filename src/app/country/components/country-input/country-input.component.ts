import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: 'country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  query: string = '';

  ngOnInit(): void {
    //El pipe intercepta el llamado al subscribe, y asi evita que
    //el evento subscribe se emita hasta pasados 300 mililisegundos
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  search() {
    const formattedQuery = this.query.trim().toLowerCase();

    if (!formattedQuery.length) return;

    this.onSearch.emit(formattedQuery);
  }

  keyPress(event: any) {
    this.debouncer.next(this.query);
  }
}
