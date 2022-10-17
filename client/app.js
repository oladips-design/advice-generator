let para = document.getElementById("para");
let btn = document.getElementById("btn");
let span = document.getElementById("num");

btn.addEventListener("click", async (e) => {
  let adviceObj = await getAdvice();
  const { id, advice } = adviceObj;
  console.log(id, advice);
  span.textContent = "#" + id;
  para.textContent = advice;
});

async function getAdvice() {
  let endpoint = "http://localhost:4000/get";
  // let endpoint = "https://amaranth-clam-kit.cyclic.app/get";
  try {
    let fetchAdvice = await fetch(endpoint);
    let adviceObj = await fetchAdvice.json();
    return adviceObj;
  } catch (error) {
    console.log(error.message);
  }
}
