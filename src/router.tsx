import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import BookList from './pages/BookList';
import BookReport from './pages/BookReport';
import BookResult from './pages/BookResult';
import BookSearch from './pages/BookSearch';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <BookList />,
            },
            {
                path: 'booklist',
                element: <BookList />,
            },
            {
                path: 'booklist/:bookId',
                element: <BookResult />,
            },
            {
                path: 'booksearch',
                element: <BookSearch />,
            },
            {
                path: 'bookreport',
                element: <BookReport />,
            },
        ],
    },
]);

export default router;
