import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

import SelectFormat from './SelectFormat';
import Store from "../../middleware/Store";

const renderer = createRenderer();

describe('<Home />', () => {
    it('should render and match the snapshot', () => {
        renderer.render(<Store><SelectFormat/></Store>);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});
