import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import SignupIllustration from '../../../shared/img/signup_completed.svg'

const PageThree = ({ setPageNum}) => {
    return (
        <Row>
            <Col md={12}>
                <Row>
                    <div className="form__form-group">
                        <img src={SignupIllustration} alt="signup illustration" />
                    </div>  
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="form__form-group textCenter">
                            <h2>
                                Registration Complete
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Link to="/app/home" className="btn btn-primary account__btn account__btn--small">Go to learnings</Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default PageThree;