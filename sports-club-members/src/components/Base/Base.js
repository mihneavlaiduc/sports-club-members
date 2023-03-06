import AddMember from "../AddMember/AddMember.js";
import React, { useState } from "react";
import EditMember from "../EditMember/EditMember.js";
import { CardList } from "../CardList/CardList.js";
import { Provider } from "react-redux";

const Base = () => {

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-title">Sport club members</div>
      </nav>
      <div className="main-body" id="main-body">
          <aside id="aside-bar">
            <CardList />
          </aside>
          <main id="content" className="content">
            <AddMember />
            <EditMember />
            <footer>
              <div id="footer-info">
                <ul>
                  <li id="footer-recent-news">Recent News</li>
                  <li id="footer-about-us">About Us</li>
                  <li id="footer-services">Services</li>
                  <li id="footer-contact-us">Contact Us</li>
                  <div></div>
                  <div></div>
                </ul>
              </div>
            </footer>
          </main>
      </div>
    </div>
  );
};

export default Base;
