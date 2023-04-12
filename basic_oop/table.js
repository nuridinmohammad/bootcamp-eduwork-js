class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let openTag = "<thead><tr>";
    let closeTag = "</tr></thead>";
    data.forEach((d) => {
      openTag += `<th>${d}</th>`;
    });

    return openTag + closeTag;
  }

  createBody(data) {
    let openTag = "<tbody>";
    let closeTag = "</tbody>";

    data.forEach((d) => {
      const dataItem = d.map((item, index) => {
        return `<td>${d[index]}</td>`
      });

      openTag += `
        <tr>
          ${dataItem}
        </tr>
      `;
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

const table = new Table({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
  ],
});
const app = document.getElementById("app");
table.render(app);
