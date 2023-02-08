import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CourseListPage from './pages/CourseListPage';
import WishListPage from './pages/WishlistPage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="courses" element={<CourseListPage />} />
          <Route path="/courses/react-frontend-development" element={<CoursePage />} />
          <Route path="wishlist" element={<WishListPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
