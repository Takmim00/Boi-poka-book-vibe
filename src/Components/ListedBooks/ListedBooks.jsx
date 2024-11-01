import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  //ideally we will directly get the book list from the database
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList()
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    // worst way
    console.log(storedReadList, storedReadListInt, allBooks);

    // 
    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

    setReadList(readBookList);

}, []);

  return (
    <div>
      <h3 className="text-3xl my-10 text-center">Listed Books </h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Book I read : {readList.length}</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
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
