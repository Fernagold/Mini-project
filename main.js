let renderUsers = function(data) {
    const source = $('#miniProject-template').html();
    const template = Handlebars.compile(source)
    const newHTML = template({data})
    console.log(data)
    $("#layout").append(newHTML)
    }

$.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function(result){
    //let newCompany = result.map(ec => { return {email: ec.email, CompanyName: ec.company.name}})
    renderUsers(result)
}
})
