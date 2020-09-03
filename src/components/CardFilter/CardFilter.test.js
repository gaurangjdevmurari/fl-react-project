import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

import CardFilter from './CardFilter';
import Store from "../../middleware/Store";

const renderer = createRenderer();

describe('<Home />', () => {
    it('should render and match the snapshot', () => {
        renderer.render(<Store><CardFilter/></Store>);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});
