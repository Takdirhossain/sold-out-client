
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/Route';
import Toaster from 'react-hot-toast'
function App() {
  return (
    <div className="max-w-screen-xl	 m-auto">
      <Toaster/>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
