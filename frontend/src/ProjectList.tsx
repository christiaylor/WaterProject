import { useEffect, useState } from 'react';
import { Project } from './types/Project';

function BookList() {
  const [books, setBooks] = useState<Project[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://localhost:5000/api/Water/AllProjects?pageLength=${pageSize}&pageNum=${pageNum}`,
        {
          credentials: 'include',
        }
      );
      const data = await response.json();
      setBooks(data.books);
      setTotalItems(data.totalNumProjects);
      setTotalPages(Math.ceil(totalItems / pageSize));
    };

    fetchBooks();
  }, [pageSize, pageNum, totalItems]);

  return (
    <>
      <h1>Water Project</h1>
      <br />
      {books.map((p) => (
        <div id="projectCard">
          <h3>{p.projectName}</h3>

          <ul>
            <li>Project Type: {p.projectType}</li>
            <li>Regional Program: {p.projectRegionalProgram}</li>
            <li>Impact: {p.projectImpact} Individuals Served</li>
            <li>Project Phase {p.projectPhase}</li>
            <li>Project Status: {p.projectFunctionality}</li>
          </ul>
        </div>
      ))}

      <button disabled={pageNum === 1} onClick={() => setPageNum(pageNum - 1)}>
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setPageNum(index + 1)}
          disabled={pageNum === index + 1}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={pageNum === totalPages}
        onClick={() => setPageNum(pageNum + 1)}
      >
        Next
      </button>
      <br />

      <label>
        Results per page:
        <select
          value={pageSize}
          onChange={(p) => {
            setPageSize(Number(p.target.value));
            setPageNum(1);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label>
    </>
  );
}
export default BookList;
