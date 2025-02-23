export default async function fetcher(endpoint, then, or, always) {
  try {
    const res = await fetch(`http://localhost:8000/?page=${endpoint}`, {
      headers: { "Access-Control-Allow-Origin": "http://localhost:5173" },
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const json = await res.json();
    
    then(json);
  } catch (err) {
    or(err);
  } finally {
    always();
  }
}
