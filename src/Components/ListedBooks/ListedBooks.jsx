import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
    //ideally we will directly get the book list from the database

    const allBooks = useLoaderData();

    useEffect(()=>{
        
    },[])
  return (
    <div>
      <h3 className="text-3xl my-10 text-center">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Book I read</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
