const DEFAULT_TYPE = "Type is loading";
const DEFAULT_TITLE = "Title is loading"
const DEFAULT_IMAGE = "https://i.giphy.com/uIJBFZoOaifHf52MER.webp"

const fetchCatData =  async() => {
    try {
      const response = await fetch('http://localhost:8002/get/all');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      data.sort((a, b) => {
        return a[Object.keys(a)["Position"]] - b[Object.keys(b)["Position"]];
    });
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }


  const fetchDefaultData = () => {
    return [
        {
          "Type": DEFAULT_TYPE,
          "Title": DEFAULT_TITLE,
          "Position": "1",
          "Image": DEFAULT_IMAGE
        },
        {
            "Type": DEFAULT_TYPE,
            "Title": DEFAULT_TITLE,
            "Position": "2",
            "Image": DEFAULT_IMAGE
          },
          {
            "Type": DEFAULT_TYPE,
            "Title": DEFAULT_TITLE,
            "Position": "3",
            "Image": DEFAULT_IMAGE
          },
          {
            "Type": DEFAULT_TYPE,
            "Title": DEFAULT_TITLE,
            "Position": "4",
            "Image": DEFAULT_IMAGE
          },
          {
            "Type": DEFAULT_TYPE,
            "Title": DEFAULT_TITLE,
            "Position": "5",
            "Image": DEFAULT_IMAGE
          },
      ]
  }

  export {fetchCatData,fetchDefaultData}