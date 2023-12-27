const routesList = [
  // ROUTES FOR USERS - START
  {
    path: "/user",
    element: <h1>User Home</h1>,
  },
  {
    path: "/user/resumes",
    element: <h1>User Resumes List</h1>,
  },
  {
    path: "/user/resume/:resume_id/create",
    element: <h1>Create Resume</h1>,
  },
  // ROUTES FOR USERS - END
  // ========================
  // ========================
  // ROUTES FOR ADMIN - START
  {
    path: "/admin",
    element: <h1>User Home</h1>,
  },
  {
    path: "/admin/users/profiles",
    element: <h1>Users Profile List</h1>,
  },
  {
    path: "/admin/user/:user_id/profile",
    element: <h1>Single User Profile</h1>,
  },
  // ROUTES FOR ADMIN - END
];

export default routesList;
