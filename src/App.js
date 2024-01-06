import React from 'react'
import TodoPage from './pages/TodoPage';
import cogoToast from '@successtar/cogo-toast';

function App() {
  cogoToast.loading('Loading your data...')
  return (
      <div className='body'>
        <TodoPage />
      </div>
  );
}

export default App;
