import { createBrowserRouter } from "react-router-dom";

// LIST OF ROUTES ASSOCIATED WITH THEIR RESPECTIVE COMPONENTS
export const routesList = [
  // ROUTES FOR USERS - START
  {
    // THIS KEY WILL BE USED WHEN THE LIST IS MAPPED
    // TO POPULATE DYNAMIC SIDE-NAV-LINKS
    routeName: "User - Dashboard",
    path: "/user",
    element: <h1>User Home</h1>,
  },
  {
    routeName: "CVs",
    path: "/user/resumes",
    element: <h1>User Resumes List</h1>,
  },
  {
    routeName: "Create Resumes",
    path: "/user/resume/:resume_id/create",
    element: <h1>Create Resume</h1>,
  },
  // ROUTES FOR USERS - END
  // ========================
  // ========================
  // ROUTES FOR ADMIN - START
  {
    path: "/admin",
    routeName: "Admin - Dashboard",
    element: <h1>Admin Home</h1>,
  },
  {
    path: "/admin/users/profiles",
    routeName: "Profiles",
    element: <h1>Users Profile List</h1>,
  },
  {
    path: "/admin/user/:user_id/profile",
    element: <h1>Single User Profile</h1>,
  },
  // ROUTES FOR ADMIN - END
];

// CREATING BROWSER ROUTER TO PROVIDE IT TO THE APP
const browserRouter = createBrowserRouter(routesList);

export default browserRouter;
