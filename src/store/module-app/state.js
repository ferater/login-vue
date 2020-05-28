import routes from '../../router/routes';

export default function () {
  return {
    routes: routes[1].children,
  };
}
