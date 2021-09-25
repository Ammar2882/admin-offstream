import Dashboard from "views/Dashboard"
import Placement from "views/placement/Placements"
import User from "views/user/Users"
import Project from "views/project/Projects"
import Payout from "views/payout/Payouts"

//add new
import AddPlacement from "views/placement/AddPlacement"
import AddUser from "views/user/AddUser"
import AddPayout from "views/payout/AddPayout"
import AddProject from "views/project/AddProject"
import EditProject from "views/project/EditProject"
import EditPayout from "views/payout/EditPayout"
import EditPlacement from "views/placement/EditPlacement"
import EditUser from "views/user/EditUser"

//edit

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
  //add new
  {
    path: "/add-placement",
    name: "AddPlacement",
    icon: "nc-icon nc-single-copy-04",
    component: AddPlacement,
    layout: "/admin",
  },
  {
    path: "/add-user",
    name: "AddUser",
    icon: "nc-icon nc-circle-09",
    component: AddUser,
    layout: "/admin",
  },
  {
    path: "/add-payout",
    name: "AddPayout",
    icon: "nc-icon nc-credit-card",
    component: AddPayout,
    layout: "/admin",
  },
  {
    path: "/add-song",
    name: "AddSong",
    icon: "nc-icon nc-note-03",
    component: AddProject,
    layout: "/admin",
  },
  //edit
  {
    path: "/edit-placement",
    name: "EditPlacement",
    icon: "nc-icon nc-single-copy-04",
    component: EditPlacement,
    layout: "/admin",
  },
  {
    path: "/edit-user",
    name: "EditUser",
    icon: "nc-icon nc-circle-09",
    component: EditUser,
    layout: "/admin",
  },
  {
    path: "/edit-payout",
    name: "EditPayout",
    icon: "nc-icon nc-credit-card",
    component: EditPayout,
    layout: "/admin",
  },
  {
    path: "/edit-song",
    name: "EditSong",
    icon: "nc-icon nc-note-03",
    component: EditProject,
    layout: "/admin",
  },
]

export default dashboardRoutes
