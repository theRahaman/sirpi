import React from "react";
import styles from "./Booking.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Booking(){
    return(
        <section className={`${styles['booking_sec']} common_gap`}>
            <div className={'container'}>
                <div className={styles.booking_inner}>
                    <Row>
                      <Col md={3}>
                        <input type="text" className={'form-control'} placeholder="Name" />
                      </Col>
                      <Col md={3}>
                        <input type="datetime-local" className={'form-control'} />
                      </Col>
                      <Col md={3}>
                        <select className={'form-select'}>
                            <option>Exfoliation - $99.0</option>
                            <option>Exfoliation - $99.0</option>
                            <option>Exfoliation - $99.0</option>
                            <option>Exfoliation - $99.0</option>
                        </select>
                      </Col>
                      <Col md={3}>
                        <input type="submit" className={'btn btn-primary submit_btn'} />
                      </Col>
                    </Row>
                    </div>
                </div>
        </section>
    )
}