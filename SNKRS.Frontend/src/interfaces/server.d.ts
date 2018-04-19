import { RouteComponentProps } from 'react-router-dom';

export interface ServerProps {
    path: string;
    initialData: { [key: string]: string; };
}

export interface ServerRouteProps {
    route: RouteComponentProps<void>;
    data: ServerProps;
}