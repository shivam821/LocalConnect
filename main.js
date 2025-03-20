// document.querySelector('search-input').addEventListener('input',filterList);

// function filterList(){
//     const searchInput = document.querySelector('search-input');
//     const filter = searchInput.value.toLowerCase();
//     const listItems = document.querySelectorAll('list-group');
//     listItems.forEach((item)=>{
//         let text = item.textContent;
//         if (text.toLowerCase().includes(filter.toLowerCase())){
//             item.stlye.display = "";
//         }
//         else {
//             item.stlye.display = "none";
//         }
//     });
// }

document.querySelector('#search-input').addEventListener('input', filterList);

function filterList(){
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase(); // Use `value` here
    const listItems = document.querySelectorAll('.list-group-item'); // Use `.list-group-item` class
    
    listItems.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter)) {
            item.style.display = ""; // Show the item
        } else {
            item.style.display = "none"; // Hide the item
        }
    });
}



// document.querySelector('#search-input').addEventListener('input', filterList);

// function filterList(){
//     const searchInput = document.querySelector('#search-input');
//     const filter = searchInput.value.toLowerCase();
//     const cards = document.querySelectorAll('.card'); // Select all cards
    
//     cards.forEach((card) => {
//         let text = card.textContent.toLowerCase(); // Get text of the card
//         if (text.includes(filter)) {
//             card.style.display = ""; // Show the card
//         } else {
//             card.style.display = "none"; // Hide the card
//         }
//     });
// }

