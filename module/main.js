import Table from "./library/table.js";

const table = new Table({
    columns: ["Name", "Email", "Phone Number"],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ],
  });
  const app = document.getElementById("app");
  table.render(app);