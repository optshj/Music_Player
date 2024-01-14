import React, { createContext, useReducer, useContext } from 'react';

const PlayContext = createContext();

const initialState = {
  playIndex: null,
  pauseIndex: null,
};

const playReducer = (state, action) => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, playIndex: action.index, pauseIndex: null };
    case 'PAUSE':
      return { ...state, pauseIndex: action.index, playIndex: null };
    default:
      return state;
  }
};

const PlayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playReducer, initialState);

  const setPlay = (index) => {
    dispatch({ type: 'PLAY', index });
  };

  const setPause = (index) => {
    dispatch({ type: 'PAUSE', index });
  };

  return (
    <PlayContext.Provider value={{ state, actions: { setPlay, setPause } }}>
      {children}
    </PlayContext.Provider>
  );
};

const usePlayContext = () => {
  const context = useContext(PlayContext);
  if (!context) {
    throw new Error('usePlayContext must be used within a PlayProvider');
  }
  return context;
};

export { PlayProvider, usePlayContext };