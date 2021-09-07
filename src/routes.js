import Dashboard from "views/Dashboard"
import AddPlacement from "views/AddPlacement"
import AddUser from "views/AddUser"
import AddProject from "views/AddProject"
import AddPayout from "views/AddPayout"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/placement",
    name: "Add Placement",
    icon: "nc-icon nc-credit-card",
    component: AddPlacement,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Add User",
    icon: "nc-icon nc-circle-09",
    component: AddUser,
    layout: "/admin",
  },
  {
    path: "/payout",
    name: "Add Payout",
    icon: "nc-icon nc-note-03",
    component: AddPayout,
    layout: "/admin",
  },
  {
    path: "/project",
    name: "Add Project",
    icon: "nc-icon nc-single-copy-04",
    component: AddProject,
    layout: "/admin",
  },
]

export default dashboardRoutes
