import React from 'react';
import { render } from 'react-testing-library';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Reorderable from '../index';

describe('<Reorderable />', () => {
  it('should have draggable attribute', () => {
    const { container } = render(
        <DndProvider backend={HTML5Backend}>
            <Reorderable itemPosition={0} moveItem={()=>{}}>test</Reorderable>
        </DndProvider>
    );
    const node = container.querySelector('.reorderable');
    expect(node.hasAttribute("draggable")).toBe(true);
  });
});
