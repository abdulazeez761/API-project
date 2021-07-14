
const productDiv = document.getElementById('product-div')

async function getData(){
    const data = await fetch('http://localhost:5000/data/productsData');
    const data2 = await data.json();
    const booksData = data2['data'];
   const pathnameValue = []
   const idData = []
    const pathname = window.location.pathname
    
    for(let i =0; i <pathname.length; i++){
        
           const pars = parseInt(pathname[i])
           pathnameValue.push(pars)
          
    } 
    for(let i =0; i<booksData.length; i++){
        if(booksData[i] ['id'] ==pathnameValue[9]){
            idData.push(booksData[i])
        }
    } 
   
        productDiv.innerHTML = product()
  
    function product(){
        return `
            <div>
           <p>${idData[0]['title']}</p>
            <div></div>
            <p>${idData[0]['description']} </p>
            <div></div>
            <p>$${idData[0]['pric']}</p>
            </div>
            <img  src="${idData[0]['pic']}"/>
        `
        
    }
}
getData();