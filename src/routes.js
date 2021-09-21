import Dashboard from "views/Dashboard"
import Placement from "views/placement/Placements"
import User from "views/user/Users"
import Project from "views/project/Projects"
import Payout from "views/payout/Payouts"

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
    name: "Placements",
    icon: "nc-icon nc-single-copy-04",
    component: Placement,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: User,
    layout: "/admin",
  },
  {
    path: "/payout",
    name: "Payouts",
    icon: "nc-icon nc-credit-card",
    component: Payout,
    layout: "/admin",
  },
  {
    path: "/songs",
    name: "Songs",
    icon: "nc-icon nc-note-03",
    component: Project,
    layout: "/admin",
  },
]

export default dashboardRoutes
