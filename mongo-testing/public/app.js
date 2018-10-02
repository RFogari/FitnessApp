function displayResults() {
    $("tbody").empty();


    user32.forEach(function(user) {
        $("tbody").append(<h2>+user.name+</h2> +
                            <h2>+user.age+</h2>);
    });
}

$.getJSON("/user2", function (data) {
    displayResults(data);
    console.log("Data:");
    console.log(data);
});


