// variable
var form = document.getElementById('addd-frm');

//Events
form.addEventListener('submit,addNote');

//Functions

//Add Note
function addNote(e) {
    //stop initial behavior
    e.preventDefault();

    //validate input
    if (ntitle.value == '' || nbody.value == '') {
        alert("Please fill all fields!");
    }
    else {
        //Create a new note record

        //New tr
        var tr = document.createElement('tr');
        tr.className = 'item';

        //New td for title and body
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span = document.createElement('span');
        span.className = 'note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);

        //New td for view
        var td2 = document.createElement('td');
        td2.className = 'btcelld';
        var btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('view'));
        btn1.setAttribute('id', 'vw');
        td2.appendChild(btn1);

        //New td for delete
        var td3 = document.createElement('td');
        td3.className = 'btcelld';
        var btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute('id', 'del');
        td2.appendChild(btn2);

        //Add all tds to tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        //Increment note count
        notecount++;

        //set new note
        newNote = tr;

        //Add or Update the note of the table
        updateTable();
    }

    // Reset all
    resetAll();
}