import React, {useContext, useState} from 'react';
import "./styles.scss";
import {Button, Input} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import {FilterStore} from "../../middleware/Store";
import {CHANGE_FILTER} from "../../middleware/constants";
import SelectFormat from "../SelectFormat";
import Popover from "react-popover";

function SearchBox(props) {
    const [state, dispatch] = useContext(FilterStore)
    const [popover, setPopover] = useState(false);
    return (
        <div className="SearchBox">
            <h1>Find Classes</h1>
            <Input
                onChange={event => {
                    dispatch({
                        type: CHANGE_FILTER,
                        payload: {
                            query: event.target.value,
                        }
                    })
                }}
                value={state.query}
                prefix={<SearchOutlined className="site-form-item-icon"/>}
                placeholder="Search for classes or teachers"/>
            <div className="actions">
                <Button>Any Day Or Time</Button>
                <Button>Age</Button>
                <Button>Subjects</Button>
                <Popover place="below" enterExitTransitionDurationMs={1} isOpen={popover}
                         body={<SelectFormat setPopover={setPopover}/>}>
                    <Button onClick={() => setPopover(!popover)}>Any Format</Button>
                </Popover>
                <Button>Any Length</Button>
                <Button type="link" onClick={() => {
                    dispatch({
                        type: CHANGE_FILTER,
                        payload: {
                            query: "",
                        }
                    })
                }}>Reset Filters</Button>
            </div>
        </div>
    );
}

export default SearchBox;
