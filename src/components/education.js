import React from 'react'
import { Col, Container, Row } from "react-bootstrap"

export const Education = () => {
  return (
    <section className="skill" id="skillss">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Education
                            </h2>
                            
                            <p><h4>IET,Dr. Shakuntala Misra National University,Lucknow</h4>
                            <h6>Bachelor of Technology 2020 - 2024</h6>
                            </p>

                            <p><h4>Maa Vaishno Modern Public Scool,Robertsganj,Sonebhadra,Uttar Pradesh</h4>
                            <h6>Higher Secondary School Certificate 2018 – 2019</h6>
                            </p>

                            <p><h4>Maa Vaishno Modern Public Scool,Robertsganj,Sonebhadra,Uttar Pradesh</h4>
                            <h6>Secondary School Certificate 2016 – 2017</h6>
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left"/>
            </section>
    );
}
