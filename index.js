function getAPI() {
  var getAll = `https://jsonplaceholder.typicode.com/posts`;
  document.getElementById("table-api").style.display === "none"
    ? (document.getElementById("table-api").style.display = "block")
    : (document.getElementById("table-api").style.display = "none");
  fetch(getAll)
    .then((response) => {
      return response.json();
    })
    .then((datas) => {
      var htmls = datas.map((data) => {
        var title = data.title;
        var body = data.body;
        var id = data.id;
        if (id <= 10) {
          return `
          <div style="display:block;text-align:left;padding:10px 15px;margin-top:0">
          <p>
      id: ${id} -> title: ${title}
        </p>
        <p> 
        ${body}
        </p>
          </div>`;
        }
        return ``;
      });
      var html = htmls.join("");
      document.getElementById("table-api").innerHTML = html;
    })
    .catch(() => {
      window.alert("get fail");
    });
}
getAPI();
