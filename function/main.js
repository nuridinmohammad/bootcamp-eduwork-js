alert(
    "Selamat datang di game tebak angka \n kamu diminta untuk menebak angka 1-3 \n dan kamu akan bermain dalam 5 ronde. \n Player yang berhasil mengumpulkan tebakan akan menang \n SELAMAT BERMAIN!!!"
  );

  const winner = [
    { name: "Player 1", point: [] },
    { name: "Player 2", point: [] },
  ];

  for (let i = 1; i <= 5; ) {
    const answer = Math.floor(Math.random() * 3) + 1;
    console.log(answer);
    confirm("Ronde:" + i);

    const player_1 = Number(prompt("Player 1: Masukan Angka"));
    const player_2 = Number(prompt("Player 2: Masukan Angka"));

    if (player_1 === player_2) {
      alert("tebakan Tidak boleh sama");
      confirm("Ulang?");
      i = 1;
    } else if (1 > player_1 || 1 > player_2) {
      alert("Tebakan tidak boleh lebih KECIL dari 1");
      confirm("Ulang?");
      i = 1;
    } else if (3 < player_1 || 3 < player_2) {
      alert("Tebakan tidak boleh lebih BESAR dari 3");
      confirm("Ulang?");
      i = 1;
    } else if (player_1 === answer) {
      alert("Player 1 WIN!!");
      alert(
        `Nilai yang dicari: ${answer} \n =============================\n * Player 1: ` +
          player_1 +
          "\n" +
          " * Player 2: " +
          player_2 +
          "\n"
      );
      winner[0].point.push(1);
    } else if (player_2 === answer) {
      alert("Player 2 WIN!!");
      alert(
        `Nilai yang dicari: ${answer} \n =============================\n * Player 1: ` +
          player_1 +
          "\n" +
          " * Player 2: " +
          player_2 +
          "\n"
      );
      winner[1].point.push(1);
    } else {
      alert("Tidak ada yang benar. hasil SERI.");
      alert(
        `Nilai yang dicari: ${answer} \n =============================\n * Player 1: ` +
          player_1 +
          "\n" +
          " * Player 2: " +
          player_2 +
          "\n"
      );
    }
    i++;
  }

  const pointP1 = winner[0].point.length;
  const pointP2 = winner[1].point.length;

  if (pointP1 > pointP2) {
    alert(
      `Good job ${winner[0].name.toLocaleUpperCase()} - Score Akhir : ${pointP1} points \nDon't Give up ${
        winner[1].name
      } - Score Akhir : ${pointP2} points`
    );
  } else {
    alert(
      `Good job ${winner[1].name.toLocaleUpperCase()} - Score Akhir : ${pointP2} points \nDon't Give up ${
        winner[0].name
      } - Score Akhir : ${pointP1} points`
    );
  }
