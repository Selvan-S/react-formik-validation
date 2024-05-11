import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddBookAndEditForm from "./Components/AddBookAndEditForm";
import AddAuthorAndEditForm from "./Components/AddAuthorAndEditForm";
import RenderBooks from "./Components/RenderBooks";
import NavBar from "./Components/NavBar";
import AuthorRecordsAddAndEditForm from "./Components/AuthorRecordsAddAndEditForm";
import RenderAuthors from "./Components/RenderAuthors";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [authorRecords, setAuthorRecords] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBooksData(data);
      })
      .catch((err) => console.log(err));
    fetch(`${import.meta.env.VITE_AUTHOR_API_URL}/author`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthorRecords(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        {/* Book Records */}
        <Route
          path="*"
          element={
            <h1 className="text-blue-600 w-full mx-auto text-2xl mt-4 text-center">
              404 Page Not Found
            </h1>
          }
        />
        <Route
          exact
          path="/"
          element={
            <RenderBooks
              booksData={booksData}
              setBooksData={setBooksData}
              authorRecords={authorRecords}
              setAuthorRecords={setAuthorRecords}
            />
          }
        />
        <Route
          path="/edit/book/:id"
          element={
            <AddBookAndEditForm
              booksData={booksData}
              setBooksData={setBooksData}
            />
          }
        />
        <Route
          path="/add/book"
          element={
            <AddBookAndEditForm
              booksData={booksData}
              setBooksData={setBooksData}
            />
          }
        />
        <Route
          path="/edit/:id/author/:authorId"
          element={
            <AddAuthorAndEditForm
              booksData={booksData}
              setBooksData={setBooksData}
              authorRecords={authorRecords}
              setAuthorRecords={setAuthorRecords}
            />
          }
        />
        <Route
          path="/add/:id/author"
          element={
            <AddAuthorAndEditForm
              booksData={booksData}
              setBooksData={setBooksData}
              authorRecords={authorRecords}
              setAuthorRecords={setAuthorRecords}
            />
          }
        />

        {/* Author Records */}
        <Route
          path="/records/authors"
          element={
            <RenderAuthors
              authorRecords={authorRecords}
              setAuthorRecords={setAuthorRecords}
            />
          }
        />

        <Route
          path="/add/records/author"
          element={
            <AuthorRecordsAddAndEditForm
              authorRecords={authorRecords}
              setAuthorRecords={setAuthorRecords}
            />
          }
        />

        <Route
          path="/edit/records/author/:authorId"
          element={
            <AuthorRecordsAddAndEditForm
              authorRecords={authorRecords}
              setAuthorRecords={setAuthorRecords}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
