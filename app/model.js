export function changePage(pageID) {

    $.get(`pages/${pageID}.html`, function (data) {
        $("#app").html(data);
    }).fail((error) => {
        if(error.status == "404") {
            alert("Error 404: Page can not be found. Please check your URL");
        }
    });
}