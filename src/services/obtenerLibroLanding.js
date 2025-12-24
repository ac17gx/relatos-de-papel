export async function obtenerLibroLanding () {
    const response = await fetch("https://openlibrary.org/search.json?title=El+Poder+del+Ahora");

    if (!response.ok) {
        throw new Error("Error al obtener libro de landing page");
    }    

    const data = await response.json();
    return data.docs[0];
}