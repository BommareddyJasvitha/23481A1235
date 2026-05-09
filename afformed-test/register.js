const axios = require("axios");

const register = async () => {

  try {

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",

      {
        email: "bommareddyjasvitha123@gmail.com",
        name: "Bommareddy Jasvitha Reddy",
        mobileNo: "9347082953",
        githubUsername: "BommareddyJasvitha",
        rollNo: "23481A1235",
        accessCode: "eJdCuC"
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log(error.response.data);
  }
};

register();