import './App.css';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';

function App() {
  return (
    <div className="App">
      <section className='header'>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>BOOKS</li>
          <li>CATEGORIES</li>
        </ul>
        <span className='user'>
          u
        </span>
      </section>
      <section className='book-body'>
        <BooksList/>
        <BooksForm/>
      </section>
    </div>
  );
}

export default App;
