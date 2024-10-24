export interface IViewRoute {
  path: string;
  viewName: string;
}

export const ViewRoutes: IViewRoute[] = [
  { path: "/home", viewName: "Home" },
  { path: "/current-balance", viewName: "Current Balance" },
  { path: "/quizzes", viewName: "Quizzes" },
  { path: "/statistics", viewName: "Statistics" },
  { path: "/profile", viewName: "Profile" },
];

export const getViewName = (path: string): string => {
  const route = ViewRoutes.find((route) => route.path === path);
  return route ? route.viewName : "";
};
