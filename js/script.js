const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=", "+/-"];
let output = "";

// Mendefinisikan fungsi ke calculate berdasarkan button yg di klik.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    // Jika output "%", replace dengan "/100" sebelum evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "+/-") {
    // Jika "+/-" di klik, output diubah ke number dan dikalikan -1
    output = parseInt(output) * -1;
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "C") {
    // Jika button "C" di klik, hapus karakter terakhir dari output.
    output = output.toString().slice(0, -1);
  } else {
    // Jika output kosong dan button adalah specialShars maka return...
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Menambahkan event listener ke buttons, panggil calculate() on click.
buttons.forEach((button) => {
  //Ketika button di klik memanggil calculate() dengan value sebagai argumen.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
