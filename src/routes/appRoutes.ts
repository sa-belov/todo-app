import { FunctionComponent, lazy } from 'react';

interface IRoute {
  id: string;
  path: string;
  name: string;
  component: FunctionComponent;
}

const appRoutes: IRoute[] = [
  { id: 'main', path: '/', name: 'Main', component: lazy(() => import('../Pages/Main/Main')) },
  { id: 'todo', path: '/todo', name: 'Todo', component: lazy(() => import('../Pages/Todo/Todo')) },
];

export default appRoutes;
