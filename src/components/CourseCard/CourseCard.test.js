import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

import CourseCard from './CourseCard';
import Store from "../../middleware/Store";

const renderer = createRenderer();

describe('<Home />', () => {
    it('should render and match the snapshot', () => {
        renderer.render(<Store><CourseCard/></Store>);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});
