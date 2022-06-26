let arrayVal = [
  { provider: null },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  { provider: null },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  {
    provider: {
      _id: "6299aa0c9d361d0012f45341",
      name: 'Ezugi',
      gameCode: 'kingscasino',
      order: 2,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/56a803a7-351c-45f5-bede-eb5ea9b8d68b.png'
    }
  },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  {
    provider: {
      _id: "6299aa0c9d361d0012f45341",
      name: 'Ezugi',
      gameCode: 'kingscasino',
      order: 2,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/56a803a7-351c-45f5-bede-eb5ea9b8d68b.png'
    }
  },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  { provider: null },
  {
    provider: {
      _id: "6299aa0c9d361d0012f45341",
      name: 'Ezugi',
      gameCode: 'kingscasino',
      order: 2,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/56a803a7-351c-45f5-bede-eb5ea9b8d68b.png'
    }
  },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  },
  {
    provider: {
      _id: "629d804b9d361d0012f4553b",
      name: 'Evolution',
      gameCode: 'Evolution',
      order: 1,
      image: 'https://playexch-sls-bucket.s3.ap-south-1.amazonaws.com/054df8b7-c2d8-4a2b-bb20-8eed76d98955.jpg'
    }
  }
]

function removeDuplicatesFromArray(array) {

    let newArray = [];
    let uniqueObject = {};
    for (let i in array) {
        if (array && array[i] && array[i].provider) {
            console.log("\nINNNN ::::: ", i, array[i].provider);
            
            uniqueObject[array[i].provider._id] = array[i];

        }
    }
    
    for (i in uniqueObject) {
        // console.log("\nOUTT uniqueObject ::::: ", uniqueObject);
        if (uniqueObject && uniqueObject[i]) {
            console.log("\nOUTT ::::: ", uniqueObject[i]);
            newArray.push(uniqueObject[i]);
            console.log("\n\nFINAL ARRAY ::::: ", newArray);
        }
    }

    return {
        data: newArray,
        msg: "Success",
        status: true
    }
}

console.log(removeDuplicatesFromArray(arrayVal));