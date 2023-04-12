class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let openTag = "<thead><tr>";
    let closeTag = "</tr></thead>";
    data.map((d) => {
      openTag += "<th>" + d + "</th>";
    });

    return openTag + closeTag;
  }

  createBody(data) {
    let openTag = "<tbody>";
    let closeTag = "</tbody>";

    data.map((d) => {
      d.map((item) => {
        const dataItem = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.address.street} - ${item.address.city} </td>
        <td>${item.company.name}</td>
        
        `;
        openTag += `<tr>${dataItem}</tr>`;
      });
    });

    return openTag + closeTag;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";

    element.innerHTML = table;
  }
}

export default Table;
