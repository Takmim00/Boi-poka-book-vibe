import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  //ideally we will directly get the book list from the database
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // worst way
    console.log(storedReadList, storedReadListInt, allBooks);

    //
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if(sortType === 'No of pages'){

        const sortedReadList = [...readList].sort((a,b) => a.totalPages -b.totalPages)

        setReadList(sortedReadList)
    }
    if (sortType === 'Rating'){
        const sortedReadList = [...readList] .sort((a,b)=>a.rating -b.rating)
        setReadList(sortedReadList)
    }
  };
  return (
    <div>
      <h3 className="text-3xl my-10 text-center">Listed Books </h3>
      <div className="flex items-center justify-center">
        <details className="dropdown ">
          <summary className="btn m-1">{
          sort ?`Sort by :${ sort }` : "Sort by"
          }</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=>handleSort('Rating')}>
              <a>Rating</a>
            </li>
            <li onClick={()=>handleSort('No of pages')}>
              <a>No of page</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Book I read : {readList.length}</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wish List : {readList.length}</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
