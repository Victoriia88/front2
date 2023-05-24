function removeElement(array, item) {
  indexItem = array.indexOf(item);
  if (indexItem !== -1) {
    array.splice(indexItem, 1);
  }
}

