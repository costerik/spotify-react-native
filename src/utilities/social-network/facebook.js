import FBSDK, { LoginManager } from "react-native-fbsdk";
const { AccessToken } = FBSDK;

export const asyncFacebookLogin = async () => {
  try{
    console.log("started login...");
  const response = await LoginManager.logInWithReadPermissions(["public_profile"]);
    if(!response.isCancelled){
      const responseAccesstoken = await AccessToken.getCurrentAccessToken();
      console.log(responseAccesstoken);
    }
    console.log("Finished login...");
  }catch(exception){
    console.warn(`sorry there has been an exception ${exception}`);
  }
}
