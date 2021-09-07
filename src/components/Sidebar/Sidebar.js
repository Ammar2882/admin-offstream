import React from "react"
import { useLocation, NavLink } from "react-router-dom"

import { Nav } from "react-bootstrap"

function Sidebar({ color, image, routes }) {
  const location = useLocation()
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : ""
  }
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="#" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img src={require("assets/img/logo.png").default} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="#">
            OFFSTREAM
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li className={activeRoute(prop.layout + prop.path)} key={key}>
                  {prop.path === "/user" ? (
                    <>
                      {console.log(prop.path)}
                      <NavLink
                        to="/admin/user"
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </>
                  ) : (
                    <NavLink
                      to="/admin/dashboard"
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  )}
                </li>
              )
            return null
          })}
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar
