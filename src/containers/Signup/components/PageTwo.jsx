import React from 'react';
import { Field } from 'redux-form';
import { Row, Col } from 'reactstrap';
import renderSelectField from '../../../shared/components/form/Select';

const PageTwo = ({ setPageNum}) => {
    return (
        <Row>
            <Col md={12}>
                <div className="account__head">
                    <h3 className="account__title">Personal Details</h3>
                    <h4 className="account__subhead subhead">Please enter your personal details, your most recent data.</h4>
                </div>
                <Row>
                    <Col lg={12}>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Home Address</span>
                            <div className="form__form-group-field">
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Enter your home address"
                            />
                            </div>
                        </div>
                    </Col> 
                </Row>
                
                <Row>
                    <Col lg={6}>
                        <div className="form__form-group">
                            <span className="form__form-group-label">State</span>
                            <div className="form__form-group-field">
                            <Field
                                name="state"
                                component={renderSelectField}
                                type="tel"
                                placeholder="Select your state"
                                options={[{value: "Oyo"}, {value: "Lagos"}, {value: "Osun"}]}
                                valueKey="value"
                                labelKey="value"
                            />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form__form-group">
                            <span className="form__form-group-label">City</span>
                            <div className="form__form-group-field">
                            <Field
                                name="city"
                                component={renderSelectField}
                                type="tel"
                                placeholder="Select your city"
                                options={[{value: "Ibadan"}, {value: "Lagos"}, {value: "Osogbo"}]}
                                valueKey="value"
                                labelKey="value"
                            />
                            </div>
                        </div>
                    </Col>  
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Phone Number</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="password"
                                    component="input"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>  
                    </Col> 
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <button className="btn btn-secondary clear-btn account__btn--small" type="button" onClick={()=>setPageNum(1)}>Go Back</button>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <button className="btn last-side btn-primary account__btn--small" type="button" onClick={()=>setPageNum(3)}>Next</button>
                    </Col>
                </Row>
            </Col>
          </Row>
    );
};

export default PageTwo;