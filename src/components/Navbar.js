import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/tpc-horizontal-green.png";
import { Box, Container, Stack } from "@mui/material";

const menuItems = [
  {
    title: "Programs",
    href: "/programs",
    submenu: [
      {
        title: "Kids w/ Internal Filters",
        href: "/kids-with-internal-filters-mini"
      }
    ]
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Contact",
    href: "/contact"
  },
]

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState(false);

  useEffect(() => {
    // after state has been updated,
    // set the class in state for the navbar accordingly
    if (active) {
      setNavBarActiveClass("is-active");
    } else {
      setNavBarActiveClass("");
    }
  }, [active, setNavBarActiveClass])

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
  }

  const Brand = () => {
    return (
      <div className="navbar-brand">
        <Link to="/" title="Logo">
          <img src={logo} alt="Kaldi" style={{ width: "240px" }} />
        </Link>
        {/* Hamburger menu */}
        <div
          className={`navbar-burger burger ${navBarActiveClass}`}
          data-target="navMenu"
          role="menuitem"
          tabIndex={0}
          onKeyPress={() => toggleHamburger()}
          onClick={() => toggleHamburger()}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }

  const MenuItem = ({ title, href }) => {
    return (
      <Link className="navbar-item" to={href}>
        {title}
      </Link>
    )
  }

  const Profile = () => {
    return (
      <Box className="profile">
        <a
          className="navbar-item"
          href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </Box>
    )
  }

  const Menu = () => {
    return (
      <Box
        id="navMenu"
        className={`nav-menu ${navBarActiveClass}`}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Box
          className="menu-items"
          sx={{
            display: "flex",
          }}
        >
          {menuItems.map((i, key) => <MenuItem title={i.title} href={i.title} key={key} />)}
        </Box>
        <Profile />
      </Box>
    )
  }

  return (
    <Container
      component="nav"
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: ["lg", "xl"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Brand />
        <Menu />
      </Box>

    </Container>
  );
};

export default Navbar;
