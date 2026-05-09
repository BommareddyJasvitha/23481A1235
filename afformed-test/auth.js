require("dotenv").config();

const axios = require("axios");

const auth = async () => {

  try {

    const response = await axios.post(

      "http://4.224.186.213/evaluation-service/auth",

      {
        email: "bommareddyjasvitha123@gmail.com",
        name: "bommareddy jasvitha reddy",
        rollNo: "23481A1235",
        accessCode: "eJdCuC",
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log(error.response.data);
  }
};

auth();