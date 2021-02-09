import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const Reorderable = ({ itemPosition, moveItem, children }) => {
    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag({
        item: { type: "item", index: itemPosition },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const [{ isOver }, drop] = useDrop({
        accept: "item",
        drop(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = itemPosition;
            if (dragIndex === hoverIndex) {
                return;
            }
            // Time to actually perform the action
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    drag(drop(ref));

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}

Reorderable.propTypes = {
    itemPosition: PropTypes.number.isRequired,
    moveItem: PropTypes.func.isRequired,
}

export default Reorderable;