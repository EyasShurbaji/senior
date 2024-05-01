var editCard;

        function removeItem(card) {
            card.remove();
        }

        function editItem(card) {
    editCard = card;
    var itemName = card.querySelector('h3').textContent;
    var itemDescription = card.querySelector('p').textContent.split(' - Price: ')[0];
    var itemPrice = card.querySelector('p').textContent.split(' - Price: ')[1].trim();
    var imageURL = card.querySelector('img').src;

    document.getElementById('editName').value = itemName;
    document.getElementById('editDescription').value = itemDescription;
    document.getElementById('editPrice').value = itemPrice;
    document.getElementById('editImage').value = imageURL;

    document.querySelector('.edit-screen').style.display = 'flex';
}


        function saveEdit() {
            var itemName = document.getElementById('editName').value;
            var itemDescription = document.getElementById('editDescription').value;
            var itemPrice = document.getElementById('editPrice').value;
            var imageURL = document.getElementById('editImage').value;

            editCard.querySelector('img').src = imageURL;
            editCard.querySelector('img').alt = itemName;
            editCard.querySelector('h3').textContent = itemName;
            editCard.querySelector('p').textContent = itemDescription + ' - Price: ' + itemPrice;

            document.querySelector('.edit-screen').style.display = 'none';
        }

        function cancelEdit() {
            document.querySelector('.edit-screen').style.display = 'none';
        }

        function addItem() {
            var newItem = document.createElement('div');
            newItem.classList.add('card');
            var itemName = 'New Item';
            var itemDescription = 'Description of ' + itemName;
            var itemPrice = '$0.00'; // Default price
            var imageURL = 'https://via.placeholder.com/150'; // Default image URL
            newItem.innerHTML = `
                <img src="${imageURL}" alt="${itemName}" style="max-width: 100%;">
                <h3>${itemName}</h3>
                <p>${itemDescription} - Price: ${itemPrice}</p>
                <div>
                    <button onclick="editItem(this.parentNode.parentNode)">Edit</button>
                    <button onclick="removeItem(this.parentNode.parentNode)">Remove</button>
                </div>
            `;
            document.querySelector('.items').appendChild(newItem);
        }