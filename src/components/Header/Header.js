import React, { useState } from "react";
import { Menu, Segment, Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "../Search/Search";
import TopNews from "../TopNews/TopNews";
import "./Header.scss";
import Single from "../Single/Single";
import { Divide as Hamburger } from "hamburger-react";
import Categories from "../Categories/Categories";
import Category from "../Categories/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Header = ({ category }) => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState("home");
  const hambFunc = (add, remove) => {
    const ab = document.querySelector(".hambMenu");
    ab.classList.add(add);
    ab.classList.remove(remove);
  };
  const handleItemClick = (e) => {
    hambFunc("kapali", "aktif");
    setOpen(false);
  };

  const toggleCan = () => {
    if (!isOpen) {
      hambFunc("aktif", "kapali");
    } else {
      hambFunc("kapali", "aktif");
    }
    setOpen(!isOpen);
  };
  return (
    <div>
      <Router>
        <div>
          <Segment inverted className="mainHeader">
            <Menu inverted secondary>
              <Container>
                <Menu.Item
                  name="topnews"
                  active={item === "home"}
                  onClick={handleItemClick}
                  value=""
                  className="menuItem"
                >
                  <Link to="/">Home </Link>
                </Menu.Item>

                <Categories hambClass="menuItem" />
                <Menu.Item
                  name="search"
                  active={item === "search"}
                  onClick={handleItemClick}
                  className="menuItem"
                >
                  <Link to="/search">
                    Search
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ marginLeft: "5px" }}
                    />
                  </Link>
                </Menu.Item>
              </Container>
              <Hamburger toggled={isOpen} toggle={toggleCan} />
            </Menu>
          </Segment>

          <div className="hambMenu kapali">
            <Link to="/">
              <Menu.Item
                name="topnews"
                onClick={handleItemClick}
                value=""
                className="menuItem hambItem"
              >
                Home
              </Menu.Item>
            </Link>
            <Link to="/search">
              <Menu.Item
                name="search"
                onClick={handleItemClick}
                className="menuItem hambItem"
              >
                Search
              </Menu.Item>
            </Link>
            <Categories
              hambClass="menuItem hambItem"
              isHumb={true}
              handleSon={handleItemClick}
            />
          </div>

          <Switch>
            <Route exact path="/search">
              <Container>
                <Search />
              </Container>
            </Route>
            <Route exact path="/">
              <TopNews />
            </Route>
            <Route exact path="/:singlenews" component={Single} />
            <Route path="/categories/:category" component={Category} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Header;
