import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import PlatformHelper from '@src/helpers/platform';

class ScrollHelper {
    constructor() {
        if (PlatformHelper.isBrowser) {
            fromEvent(window, 'scroll').subscribe(() => {
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
