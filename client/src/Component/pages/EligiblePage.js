import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// To render the credit card eligible page with details
const EligiblePage = props => {


    const [imgUrl, setImgUrl] = useState('../' + props.bankName + '.png');
    const [imgAlt, setImgAlt] = useState(props.bankName + ' Card');

    const handleonError = () => {
        setImgUrl('../dummyCard.png');
        setImgAlt(props.bankName + ' Card');
    }

    let uiRender = <div className="section">
        <div className="row txtCenter">
            <h2><b>Congratulations! You are eligible for {props.bankName} {props.cardType} Credit Card</b></h2>
        </div>
        <div className="row"><b>{props.promotionMsg}</b></div>
        <br></br>
        <div className="row imageCenter">
            <img src={imgUrl} alt={imgAlt} onError={handleonError} />
        </div>
        <div className="row">
            <ul >
                <li className="col span-1-of-3">
                    <span>Representative </span>
                    <span><b> {props.reduxCurrentApr}%</b> APR </span>
                    <span>(variable)</span>
                </li>
                <li className="col span-1-of-3">
                    <span>Purchase rate </span>
                    <span><b> {props.purchaseRate}% </b></span>
                    <span>p.a. (variable)</span>
                </li>
                <li className="col span-1-of-3">
                    <span>Credit limits up to </span>
                    <span><b>£ {props.creditLimit} </b></span>
                    <span>and no annual fee</span>
                </li>
            </ul>
        </div>
        <br></br>
        <div className="row"><b>Representative Example:</b>
            <span>Representative {props.reduxCurrentApr}% APR variable. Based on assumed borrowing of £{props.creditLimit}. Rate of interest {props.purchaseRate}% (variable) annual. Credit limit is subject to status.</span>
        </div>
        <div className="row">
            <div className="col span-1-of-3">
                <label>&nbsp;</label>
            </div>
            <div className="col span-3-of-3 btnCenter">
                <input type="submit" value="Go Back" onClick={props.switchToFormPage}></input>
            </div>
        </div>
    </div>

    if (props.renderUiPage === 'Home') {
        uiRender = <Redirect to="/" />
    }

    return (
        uiRender
    );

}

const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
        reduxCurrentApr: state.pageTag.currentApr,
        cardType: state.pageTag.cardType,
        bankName: state.pageTag.bankName,
        promotionMsg: state.pageTag.promotionMsg,
        purchaseRate: state.pageTag.purchaseRate,
        creditLimit: state.pageTag.creditLimit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchToFormPage: () => dispatch({ type: 'SWITCH_TO_FORM_PAGE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EligiblePage);
