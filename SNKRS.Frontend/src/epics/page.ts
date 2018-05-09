// import { fetchPageDoneAction } from '@src/actions/page';
// import { ajax } from 'rxjs/observable/dom/ajax';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import { AnyAction } from 'redux';
// import { FETCH_PAGE } from '@src/actions/page';
// import { AjaxResponse } from 'rxjs/observable/dom/AjaxObservable';

// const fetchPageEpic = (action$: Observable<AnyAction>): Observable<AnyAction> =>
//     action$.filter(action => action.type === FETCH_PAGE).mergeMap(action =>
//         ajax
//             .get(`/umbraco/api/content/getcontent?url=${action.payload}`)
//             .map(data => fetchPageDoneAction(data.response))
//             .catch((error: AjaxResponse) => Observable.of(fetchPageDoneAction(error.response)))
//     );

// export default fetchPageEpic;
