
const testDiv = document.getElementById('test-div')
const filterdiv = document.getElementById('filter-div')

async function getData(){
    const data = await fetch('http://localhost:5000/data');
    const receivedData = await data.json();
    const booksData = receivedData['data'];
    //const name =[];
    const img =[];
    
   
    for(let i = 0; i < booksData.length; i++){
        testDiv.innerHTML +=values(booksData[i])
         img.push(booksData[i]['pic']['data'])
    }
    //console.log(testDiv.innerHTML)
    console.log()
    //console.log(receivedData['data'])
    function values(booksData){
        return `
            <div id='jsDiv'>
           
            <img  src="${booksData['pic']}">
             <p> ${booksData['name']} <p>
            <a href="/product/${booksData['id']}"><button>Details</button></a>
            <p> ${name} </p>
            </div>
        `
        
    }
    
    //filter code
   
    const params = new URLSearchParams(window.location.search)
    for (const [key, value] of params) {
          //name.push(params.get('category'))
        if(value =='All books'){
            testDiv.innerHTML =testDiv.innerHTML
        } else{
            for(let i =0; i<booksData.length; i++){
                if(booksData[i]['category'] == value){
                    filterdiv.innerHTML+= values(booksData[i])
                    testDiv.style.display = 'none'
                    
                }
            }
        }
    }  //console.log(name)

}


      
getData();
