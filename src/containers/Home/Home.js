import React, {useContext} from 'react';
import "./styles.scss";
import CourseCard from "../../components/CourseCard";
import {getCardData} from "./data";
import SearchBox from "../../components/SearchBox";
import CardFilter from "../../components/CardFilter";
import {FilterStore} from "../../middleware/Store";

function Home(props) {
    const [state] = useContext(FilterStore)

    return (
        <div className="Home">
            <SearchBox/>
            <CardFilter/>
            {getCardData(state).map((a, i) => <CourseCard data={a} key={i}/>)}
        </div>
    );
}

export default Home;
