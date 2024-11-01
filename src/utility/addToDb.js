const getStoreReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addTOStoreReadList = (id) => {
  const storedList = getStoreReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exists read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("reads-list", storedListStr);
  }
};

export { addTOStoreReadList };
