const fetchCardsData = async (path) => {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Data loading error:', error);
    return [];
  }
};

export default fetchCardsData;
