function RemoveStudentByIdViaFetch(Id) {
  //console.log(MongoDB_Id);
  fetch("http://localhost:8081/deleteAStudent", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `ID=${Id}`,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      if (data == "success") {
        //Remove the row of the table via DOM manipulation
        var rowObj = document.getElementById(Id);
        if (rowObj) {
          rowObj.remove();
        }
        //   document.querySelector(`#${MongoDB_Id}`).remove();
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

