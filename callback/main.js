import Table from "./library/table.js";
import { fetchData } from "./library/getData.js";

const data = await fetchData(
  "https://jsonplaceholder.typicode.com/users",
  function (data) {
    return data.json();
  }
);

const table = new Table({
  columns: ["ID", "Name", "Username", "Email", "Address", "Company"],
  data: [data],
});

const app = document.getElementById("app");
table.render(app);
