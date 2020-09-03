import React from 'react';

import "./styles.scss";
import {Button, Col, Row} from "antd";

function CourseCard({data}) {
    return (
        <div className="CourseCard">
            <Row>
                <Col span={4} className="poster-container">
                    <img
                        src={data.poster}
                        alt={data.title}/>
                </Col>
                <Col span={14} className="info-container">
                    <p className="light-text">{data.section}</p>
                    <p className="title-text">{data.title}</p>

                    <div className="mb-05">
                        <span className="key-value">
                            <span className="key">Date:</span> <span className="value">{data.date}</span>
                        </span>
                        <span className="key-value">
                            <span className="key">Time:</span> <span className="value">{data.time}</span>
                        </span>
                    </div>
                    <div className="mb-05">
                       <span className="key-value">
                            <span className="key">Duration:</span> <span className="value">{data.duration}</span>
                        </span>
                    </div>
                    <div className="mb-05">
                       <span className="key-value">
                            <span className="key">Teacher:</span> <span className="value">{data.teacher}</span>
                        </span>
                    </div>
                    <p className="info">
                        {data.info}
                    </p>
                </Col>
                <Col span={6} className="action-container">
                    <div className="key-value">
                        <span className="key">Age:</span> <span className="value"> {data.age}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">Class Size:</span> <span className="value"> {data.class_size}</span>
                    </div>
                    <div className="key-value">
                        <span className="key">Price:</span> <span className="value"> {data.price}</span>
                    </div>
                    <Button type="primary" shape="round" size="large" block>
                        Watch Now
                    </Button>
                    <Button type="danger" shape="round" size="large" block>
                        Cancel
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default CourseCard;
