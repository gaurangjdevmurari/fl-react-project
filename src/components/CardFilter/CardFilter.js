import React from 'react';
import "./styles.scss";
import {Button, Select} from "antd";
import {Option} from "antd/lib/mentions";

function CardFilter(props) {
    return (
        <div className="CardFilter">
            <div className="sort-by">
                Sort By: {" "}
                <Select defaultValue="lucy" style={{width: 120}} onChange={() => {

                }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </div>
            <Button type="link">Show All Classes</Button>
        </div>
    );
}

export default CardFilter;
