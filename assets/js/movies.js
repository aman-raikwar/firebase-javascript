/* global database */
/* global firebase */
/* global swal */
/* global $ */

var favMovies = database.ref('movies');

function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) {
        var movieName = document.getElementById('movieName').value.trim();
        if (movieName.length > 0) {
            saveToFB(movieName);
        }
        document.getElementById('movieName').value = '';
        return false;
    }
}

function saveToFB(movieName) {
    favMovies.push({
        name: movieName,
        created: firebase.database.ServerValue.TIMESTAMP
    });
}

function genLinks(key, mvName) {
    var links = '';
    links += '<a href="javascript:edit(\'' + key + '\',\'' + mvName + '\')">Edit</a> | ';
    links += '<a href="javascript:del(\'' + key + '\',\'' + mvName + '\')">Delete</a>';
    return links;
}

function edit(key, mvName) {
    swal({
        title: "Update the movie name!",
        input: 'text',
        inputValue: mvName,
        showCancelButton: true,
        inputValidator: function(value) {
            return new Promise(function(resolve, reject) {
                if (value) {
                    var updateMovieRef = buildEndPoint(key);
                    updateMovieRef.update({
                        name: value,
                        created: firebase.database.ServerValue.TIMESTAMP
                    });
                    resolve();
                }
                else {
                    reject('You need to write something!')
                }
            })
        }
    }).then(function(result) {
        swal({
            type: 'success',
            html: 'You entered: ' + result
        })
    })
}

function del(key, mvName) {
    swal({
        title: "Sure you want to delete this movie '" + mvName + "' ?",
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(function() {
        var deleteMovieRef = buildEndPoint(key);
        deleteMovieRef.remove();
        swal('Deleted!', 'Your record has been deleted.', 'success');
    })
}

function buildEndPoint(key) {
    return database.ref('movies').child(key);
}


function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis += '<tr data-key="' + list[i].key + '">';
        lis += '    <td>' + list[i].name + '</td>';
        lis += '    <td width="200px">' + genLinks(list[i].key, list[i].name) + '</td>';
        lis += '</tr>';
    }
    document.getElementById('favMovies').innerHTML = lis;
}


favMovies.orderByChild("name").on("value", function(snapshot) {
    var list = [];
    snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        //console.log(childData);

        list.push({
            key: key,
            name: childData.name,
            created: childData.created
        });
    });

    refreshUI(list);
});
