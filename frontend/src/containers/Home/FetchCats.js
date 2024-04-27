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

  const updateCatData = async(catData) => {

    if(!arePositionsUnique(catData))
    return;
  
    const response = await fetch('http://localhost:8002/position/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(catData)
    })
    console.log(response)
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

  function arePositionsUnique(arr) {
    let positionsSet = new Set();
    
    for (let obj of arr) {
        if (positionsSet.has(obj.position)) {
            return false;
        } else {
            positionsSet.add(obj.position);
        }
    }
    
    return true;
}

  export {fetchCatData,fetchDefaultData,updateCatData}