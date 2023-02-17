let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    count++
    const inputText = document.getElementById('input-field').value;
    if (inputText == '') {
        alert('Please Enter Item Name')
    } else {
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = `<th scope="row">${count}</th>
        <td>${inputText}</td>
        <td><Button class="btn btn-danger delete-btn" >Delete</Button><Button class="btn btn-success done-btn">Done</Button></td>`;
        mainContainer.appendChild(tableContainer)
        document.getElementById('input-field').value = ''

        const deleteBtn = document.getElementsByClassName('delete-btn');
        const doneBtn = document.getElementsByClassName('done-btn');

        for (const btn of deleteBtn) {
            btn.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.display = 'none';
            });
        }
        for (const btn of doneBtn) {
            btn.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            });
        }
    }
})
