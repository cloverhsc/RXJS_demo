import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Clover';

  ngOnInit() {

    //  --------- Example 1. ----------
    /* let observable = Rx.Observable.interval(1000).take(5);
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable.subscribe(observer); */

    // ----------- Create operator. fromEvent ------------
    /* let observable1 = Rx.Observable.fromEvent(document.body, 'click');
    let observer = {
      next: (result) => { console.log('click') },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable1.subscribe(observer) */

    // --------- Create operator. interval -------------
    /* let observable2 = Rx.Observable.interval(1000);
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable2.subscribe(observer); */

    // --------- Create operator. timer -------------
    /* let observable3 = Rx.Observable.timer(1000, 3000);
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable3.subscribe(observer); */

    // -------- Transformation. map --------------
    /* let observable4 = Rx.Observable.interval(1000).map(x => x * 3);
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable4.subscribe(observer); */

    // ------ filter. debounce --------------
    /* let input = document.getElementById('keyin');
    let observable5 = Rx.Observable.fromEvent(input, 'keyup').debounceTime(1000);
    let observer = {
      next: (result) => { console.log(result.target.value) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable5.subscribe(observer); */

    // ------ filter. filter ----------------
    /* let observable6 = Rx.Observable.interval(1000).filter(x => x % 2 === 0);
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable6.subscribe(observer); */

    // ------ filter. take --------------
    /* let observable7 = Rx.Observable.interval(1000).take(3);
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable7.subscribe(observer); */

    // ------ filter. takeUntile -----------
    /* let observable8 = Rx.Observable.interval(1000)
    let click = Rx.Observable.fromEvent(document.body, 'click')
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable8.takeUntil(click).subscribe(observer) */

    // ------ combination. concatAll --------
    /* let observable9 = Rx.Observable.fromEvent(document.body, 'click')
                      .map( e => Rx.Observable.interval(1000).take(3))
                      .concatAll();
    let observer = {
      next: (result) => { console.log(result) },
      error: (err) => { console.error(err) },
      complete: () => { console.log('Complete') }
    }
    observable9.subscribe(observer); */

    // --------- simple drag ------------
    const dragDOM = document.getElementById('drag');
    const body = document.body;

    const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown');
    const mouseUp = Rx.Observable.fromEvent(body, 'mouseup');
    const mouseMove = Rx.Observable.fromEvent(body, 'mousemove');

    mouseDown
      .map(event => mouseMove.takeUntil(mouseUp))
      .concatAll()
      .map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY }))
      .subscribe(pos => {
        dragDOM.style.left = pos.x + 'px';
        dragDOM.style.top = pos.y + 'px';
      })

  }
}
