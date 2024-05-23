export async function fetchData() {
  try {
    const response = await fetch('storeData.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}