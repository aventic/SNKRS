import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import PlatformHelper from '@src/helpers/platform';

class ScrollHelper {
    constructor() {
        if (PlatformHelper.isBrowser) {
            Observable.fromEvent(window, 'scroll').subscribe(() => {
                this.scrollTrigger.next(window.scrollY);
            });
        }
    }

    private scrollTrigger: BehaviorSubject<number> = new BehaviorSubject<number>(
        PlatformHelper.isBrowser ? window.scrollY : 0
    );

    readonly scroll$ = this.scrollTrigger.asObservable();
}

export default new ScrollHelper();
