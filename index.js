let books = [
    {
        name: "You dont know js",
        price: "30"
    },
    {
        name: "You dont know java",
        price: "50"
    },
    {
        name: "You dont know python",
        price: "70"
    }
]


// create a li
function createLi(book){
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.style.transition = '.5s linear';

    // CREATE BOOK NAME WITH STYLE
    let p = document.createElement('p');
    p.className = 'book-name';
    p.innerText = ` ${book.name}`;
    p.style.margin = '0';
    li.append(p);

    // CREATE BOOK PRICE WITH STYLE 
    let price = document.createElement('div');
    price.innerText = `$ ${book.price}`;
    li.append(price);

    //  ----------------------------------------
    //  |  create  Edit icon                 |
    //  ----------------------------------------
    let icondiv = document.createElement('div');
    icondiv.id = 'divIcon';

    let editbutton = document.createElement('button');
    editbutton.className = 'btn btn-default edit';

    let editIcon = document.createElement('span');
    editIcon.className = 'glyphicon glyphicon-edit';

    editbutton.append(editIcon);
    icondiv.append(editbutton)

   //  ----------------------------------------
    //  |  create delete  icon                 |
    //  ----------------------------------------
    let deletebutton = document.createElement('button');
    deletebutton.className = 'btn btn-default delete';
    deletebutton.id = 'deleteBook';
    deletebutton.style.marginLeft = '5px';

    let deleteIcon = document.createElement('span');
    deleteIcon.className = 'glyphicon glyphicon-remove';

    deletebutton.append(deleteIcon);
    icondiv.append(deletebutton)

    //  ----------------------------------------
    //  |  create  Favorite icon                 |
    //  ----------------------------------------

    let favbutton = document.createElement('button');
    favbutton.className = 'btn btn-default favorite';
    favbutton.style.marginLeft = '5px';

    let favIcon = document.createElement('span');
    favIcon.className = 'glyphicon glyphicon-heart';

    favbutton.append(favIcon);
    icondiv.append(favbutton)

    
    li.append(icondiv)

    li.addEventListener('click', editBook);
    li.addEventListener('click', removeBook);
    li.addEventListener('click', favoriteBook)
    return li;
   

    // console.log(`Name: ${book.name} , Price: ${book.price}`)
}
let ul = document.createElement('ul');
ul.className = 'list-group';

window.onload = function(){  
    books.forEach( book => {    
        ul.append(createLi(book))
    });
    // show list on button click
    let showBtn = document.getElementById('showBook');
    showBtn.onclick = function(){
        document.querySelector('#book-list').append(ul);
    };
}

// create a new book
    
let addBtn = document.getElementById('addBtn');
let input = document.createElement('input');
let priceInput = document.createElement('input');
// priceInput.type = 'number';
input.id = 'textInput';

let submit = document.createElement('button');
submit.className = "btn btn-default submit"
submit.textContent = "Submit"

let addedit = document.createElement('button');
addedit.className = "btn btn-default add"
addedit.textContent = "Add"
addedit.disabled = 'disabled';

// show input box onclick
addBtn.onclick = function(){
    document.getElementById('bookname').innerText = "Name: ";
    document.getElementById('bookprice').innerText = "Price: ";
    document.querySelector('#bookname').append(input)
    document.querySelector('#bookprice').append(priceInput)
    document.querySelector('#inputbox').appendChild(submit)
    document.querySelector('#inputbox').appendChild(addedit)
}

// add item to click on submit button

submit.onclick = function(e){       
    if(input.value != ''){
        let book = {
            name: input.value,
            price: priceInput.value
        }      
        ul.appendChild(createLi(book));
    }
    input.value = '';
    priceInput.value = '';       
}

// edit a book

function editBook(e){

    if(e.target.classList.contains('edit')){
        let id = e.target.parentElement.parentElement;
        input.value = id.children[0].innerText;
        priceInput.value = id.children[1].innerText;
        addedit.disabled = '';
        submit.disabled = 'disabled';
        
        addedit.onclick = function(){
            
            id.children[0].innerText = input.value;  
            id.children[1].innerText = priceInput.value;
            input.value = '';
            priceInput.value = '';  
            
        }        
        
    }
}
    
 // delete book item
 function removeBook(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete?')){
            let delItem = e.target.parentElement.parentElement;
            // console.log(delIten)
            ul.removeChild(delItem);
        }
    }
}    

// make it favorite
let favwrapper = document.createElement('div');
favwrapper.className = 'favwrapper';
let favtitle = document.createElement('h3');
favtitle.innerText= "Favorite books list"
let bookslist = document.querySelector('#book-list')
let favul = document.createElement('ul');
favul.className = 'favul'

function favoriteBook(e){
    if(e.target.classList.contains('favorite')){
        bookslist.appendChild(favwrapper);
        favwrapper.appendChild(favtitle);
        favwrapper.appendChild(favul);

        let favItem = e.target.parentElement.parentElement;
        favul.appendChild(favItem);
        

        
        // favul.removeChild(favItem);
           
        
    }
    
}
