require("dotenv").config({
  path: ".env.dev",
});

const data = {
  REM_ID: process.env.REM_ID,
  SID: process.env.SID,
  CODE_ID: "",
};

const REM_ID_STR = `remid=${data.REM_ID};`;
const SID_STR = `sid=${data.SID};`;

const COOKIE_STR = `${REM_ID_STR}${SID_STR}`;

const refreshRemIdAndSid = async () => {
  const url =
    "https://accounts.ea.com/connect/auth?client_id=sparta-backend-as-user-pc&response_type=code&release_type=none";

  return await fetch(url, {
    method: "get",
    headers: {
      Cookie: COOKIE_STR,
    },
    redirect: "manual",
  });
};

refreshRemIdAndSid().then((response, error) => {
  let location = response.headers.get("location"); // http://127.0.0.1/success?code=<ID>
  if (location.match("fid=")) {
    throw new Error("remid or sid is invalid!");
  } else {
    data.CODE_ID = location.replace(/.*code=(.*)/, "$1");
    const NEW_COOKIE = response.headers.get("set-cookie").split(";");

    for (let i = 0; i < NEW_COOKIE.length; i++) {
      if (NEW_COOKIE[i].startsWith("remid=")) {
        data.REM_ID = NEW_COOKIE[i].split("=")[1];
        console.log("refresh remid success!");
      } else if (NEW_COOKIE[i].startsWith("sid=")) {
        data.SID = NEW_COOKIE[i].split("=")[1];
        console.log("refresh sid success!");
      }
    }

    console.log(data);
  }
});
