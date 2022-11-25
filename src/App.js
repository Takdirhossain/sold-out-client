
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/Route';

function App() {
  return (
    <div className="max-w-screen-xl	 m-auto">
      
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
