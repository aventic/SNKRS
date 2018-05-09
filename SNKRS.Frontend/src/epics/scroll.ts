// import { SCROLL, scrollAction } from '@src/actions/scroll';
// import { fetchPageDoneAction } from '@src/actions/page';
// import { ajax } from 'rxjs/observable/dom/ajax';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/ignoreElements';
// import 'rxjs/add/observable/of';
// import { AnyAction } from 'redux';
// import { FETCH_PAGE } from '@src/actions/page';
// import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';

// const scrollEpic = (action$: Observable<AnyAction>): Observable<any> =>
//     action$.filter(action => action.type === SCROLL).mergeMap(action => {
//         return new Observable(observer => {
//             Observable.fromEvent(window, 'scroll').subscribe(data => {
//                 observer.next(scrollAction(window.scrollY));
//             });
//         });
//     });

// export default scrollEpic;
