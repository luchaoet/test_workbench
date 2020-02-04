import React, { Suspense } from 'react';
import path from 'path';
import routes from '@/config/routes';
import PageLoading from '@/components/PageLoading';
import { Router, Switch, Route, Redirect } from 'dva/router';

const RouteItem = (props) => {
  const { redirect, path: routePath, component, key } = props;
  // console.log()
  if (redirect) {
    return (
      <Redirect
        exact
        key={key}
        from={routePath}
        to={redirect}
      />
    );
  }
  return (
    <Route
      key={key}
      component={component}
      path={routePath}
    />
  );
};

let router = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, id) => {
          const { component: RouteComponent, children, ...others } = route;
          return (
            <Route
              key={id}
              {...others}
              component={(props) => {
                return (
                  children ? (
                    <RouteComponent key={id} {...props}>
                      <Suspense fallback={<PageLoading />}>
                        <Switch>
                          {children.map((routeChild, idx) => {
                            const { redirect, path: childPath, component } = routeChild;
                            return RouteItem({
                              key: `${id}-${idx}`,
                              redirect,
                              path: childPath && path.join(route.path, childPath),
                              component
                            });
                          })}
                        </Switch>
                      </Suspense>
                    </RouteComponent>
                  ) : (
                    <Suspense fallback={<PageLoading />}>
                      {
                        RouteItem({
                          key: id,
                          ...route,
                        })
                      }
                    </Suspense>
                  )
                );
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default router;
