import React from 'react';

import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { AppContainer } from './styles';

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column key={list.id} text={list.text} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
