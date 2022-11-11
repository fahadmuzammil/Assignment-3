function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
  console.log(countWords('Walk the dog')); 
  console.log(countWords('Buy   groceries')); 
  