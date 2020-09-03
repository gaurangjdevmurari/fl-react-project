import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

import Home from './Home';
import Store from "../../middleware/Store";

const renderer = createRenderer();

describe('<Home />', () => {
    it('should render and match the snapshot', () => {
        renderer.render(<Store><Home/></Store>);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});
