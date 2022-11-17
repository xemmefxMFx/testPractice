const getTitle = (data) => ({
    title : () => console.log(`title : ${data.title}`)
 });
 const getAuthor = (data) => ({
    author : () => console.log(`author: ${data.author}`)
 });
 const getSummary = () =>  ({
    summary :() => console.log(`book summary need to update.`)
 });
 const Book = (title, author) => {
    const data = { 
       title, 
       author  
    }
    
    return Object.assign({},
              getTitle(data), 
              getAuthor(data), 
              getSummary()
    )
 }
 let book1 = Book('The Alchemist', 'Paulo Coelho');
 book1.title();
 book1.summary();
 book1.author();
 //   "title : The Alchemist"