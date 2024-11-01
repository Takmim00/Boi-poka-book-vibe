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

const getStoredWishList = ()=>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList
    }
    else{
        return []
    }
}

const addToStoredWishList =(id)=>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id, 'already exists in the wist list');
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr)
    }
}

export { addTOStoreReadList , addToStoredWishList};
