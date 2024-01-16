export async function fetchData(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

// "https://raw.githubusercontent.com/sumitkvnegi/test/main/data.json"
