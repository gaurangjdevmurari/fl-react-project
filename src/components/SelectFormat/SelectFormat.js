import React, {useContext, useEffect, useState} from 'react';
import "./styles.scss";
import {Button, Radio} from "antd";
import {FilterStore} from "../../middleware/Store";
import {CHANGE_FILTER} from "../../middleware/constants";

export const options = [
    {value: 'private_tutoring', label: 'Private/Tutoring'},
    {value: 'free_live_program', label: 'Free Live Program'},
    {value: 'group_class', label: 'Group Class'},
    {value: 'in_person', label: 'In Person'},
];


const radioStyle = () => {
    return {
        height: '30px',
        lineHeight: '30px',
        marginTop: "5px",
        marginBottom: "5px",
    }
};

function SelectFormat({setPopover}) {
    const [gState, dispatch] = useContext(FilterStore)
    const [state, setState] = useState("");
    useEffect(() => {
        setState(gState.format)
    }, [gState.format])
    return (
        <div className="SelectFormat">
            <Radio.Group onChange={event => setState(event.target.value)} value={state}>
                <div>
                    <Radio style={radioStyle()} value={"private_tutoring"}>
                        Private/Tutoring
                    </Radio>
                    <Radio style={radioStyle()} value={"free_live_program"}>
                        Free Live Program
                    </Radio>
                </div>
                <div>
                    <Radio style={radioStyle()} value={"group_class"}>
                        Group Class
                    </Radio>
                    <Radio style={radioStyle()} value={"in_person"}>
                        In Person
                    </Radio>
                </div>
            </Radio.Group>
            <div className="actions">
                <Button type="primary" onClick={() => {
                    dispatch({type: CHANGE_FILTER, payload: {format: state,}})
                    setPopover(false)
                }}>Apply</Button>
                <Button type="link" onClick={() => setPopover(false)}>Cancel</Button>
            </div>
        </div>
    );
}

export default SelectFormat;
