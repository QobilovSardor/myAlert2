import React, { useState, useEffect } from 'react';
import _ from 'lodash'; // lodash kutubxonasini o'rnatish kerak

export const DragDrop = () => {
  const dataStructure = [
    [0, 3, 6, 9],
    [1, 4, 7, 10],
    [2, 5, 8, 11],
  ];

  const reinsert = (array, colFrom, rowFrom, colTo, rowTo) => {
    const _array = array.slice(0);
    const val = _array[colFrom][rowFrom];
    _array[colFrom].splice(rowFrom, 1);
    _array[colTo].splice(rowTo, 0, val);
    calculateVisiblePositions(_array);
    return _array;
  };

  const gutterPadding = 21;
  const clamp = (n, min, max) => Math.max(Math.min(n, max), min);
  const getColumnWidth = () =>
    window.innerWidth / dataStructure.length -
    gutterPadding / dataStructure.length;
  const height = 110;

  let width = getColumnWidth();
  let layout = null;

  const calculateVisiblePositions = (newOrder) => {
    width = getColumnWidth();
    layout = newOrder.map((column, col) => {
      return _.range(column.length + 1).map((item, row) => {
        return [width * col, height * row];
      });
    });
  };

  const [state, setState] = useState({
    mouse: [0, 0],
    delta: [0, 0],
    lastPress: null,
    currentColumn: null,
    isPressed: false,
    order: dataStructure,
    isResizing: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      clearTimeout(this.resizeTimeout);
      applyResizingState(true);
      this.resizeTimeout = setTimeout(() => applyResizingState(false), 100);
    };

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const applyResizingState = (isResizing) => {
    setState((prevState) => ({
      ...prevState,
      isResizing,
    }));
    calculateVisiblePositions(dataStructure);
  };

  const handleTouchStart = (key, currentColumn, pressLocation, e) => {
    handleMouseDown(key, currentColumn, pressLocation, e.touches[0]);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMouseMove(e.touches[0]);
  };

  const handleMouseMove = ({ pageX, pageY }) => {
    const {
      order,
      lastPress,
      currentColumn: colFrom,
      isPressed,
      delta: [dx, dy],
    } = state;
    if (isPressed) {
      const mouse = [pageX - dx, pageY - dy];
      const colTo = clamp(Math.floor((mouse[0] + width / 2) / width), 0, 2);
      const rowTo = clamp(Math.floor((mouse[1] + height / 2) / height), 0, 100);
      const rowFrom = order[colFrom].indexOf(lastPress);
      const newOrder = reinsert(order, colFrom, rowFrom, colTo, rowTo);
      setState((prevState) => ({
        ...prevState,
        mouse,
        order: newOrder,
        currentColumn: colTo,
      }));
    }
  };

  const handleMouseDown = (
    key,
    currentColumn,
    [pressX, pressY],
    { pageX, pageY },
  ) => {
    setState((prevState) => ({
      ...prevState,
      lastPress: key,
      currentColumn,
      isPressed: true,
      delta: [pageX - pressX, pageY - pressY],
      mouse: [pressX, pressY],
    }));
  };

  const handleMouseUp = () => {
    setState((prevState) => ({
      ...prevState,
      isPressed: false,
      delta: [0, 0],
    }));
  };

  return (
    <div className='items'>
      {state.order.map((column, colIndex) =>
        column.map((row) => {
          let style,
            x,
            y,
            visualPosition = state.order[colIndex].indexOf(row),
            isActive =
              row === state.lastPress &&
              colIndex === state.currentColumn &&
              state.isPressed;

          if (isActive) {
            [x, y] = state.mouse;
            style = {
              translateX: x,
              translateY: y,
              scale: 1.1,
            };
          } else if (state.isResizing) {
            [x, y] = layout[colIndex][visualPosition];
            style = {
              translateX: x,
              translateY: y,
              scale: 1,
            };
          } else {
            [x, y] = layout[colIndex][visualPosition];
            style = {
              translateX: x,
              translateY: y,
              scale: 1,
            };
          }

          return (
            <div
              key={row}
              onMouseDown={handleMouseDown.bind(null, row, colIndex, [x, y])}
              onTouchStart={handleTouchStart.bind(null, row, colIndex, [x, y])}
              className={isActive ? 'item is-active' : 'item'}
              style={{
                WebkitTransform: `translate3d(${style.translateX}px, ${style.translateY}px, 0) scale(${style.scale})`,
                transform: `translate3d(${style.translateX}px, ${style.translateY}px, 0) scale(${style.scale})`,
                zIndex:
                  row === state.lastPress && colIndex === state.currentColumn
                    ? 99
                    : visualPosition,
              }}
            >
              Item {row + 1}
            </div>
          );
        }),
      )}
    </div>
  );
};
