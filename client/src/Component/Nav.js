import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Nav = (props) => {

  return (
    <>
      <div className="fixed-nav">
        <nav>
          <div className="header-row">
            <div className="logoSize">
              <img src="../logo.png" alt='HD Decisions'></img>
            </div>
          </div>
        </nav>
        <div className="header-line"></div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    switchToFormPage: () => dispatch({ type: 'SWITCH_TO_FORM_PAGE' })
  }
}

export default connect(null, mapDispatchToProps)(Nav);

