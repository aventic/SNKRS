import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

class Scroll {
    constructor() {
        if (typeof window !== 'undefined') {
            Observable.fromEvent(window, 'scroll').subscribe(() => {
                this.scrollTrigger.next(window.scrollY);
            });
        }
    }

    private scrollTrigger: BehaviorSubject<number> = new BehaviorSubject<number>(
        typeof window !== 'undefined' ? window.scrollY : 0
    );

    scroll$ = this.scrollTrigger.asObservable();
}

export default new Scroll();
