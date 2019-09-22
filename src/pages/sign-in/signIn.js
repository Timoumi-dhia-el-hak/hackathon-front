import React from 'react';
import { GoogleLogin } from 'react-google-login';
// import { func } from "prop-types";
// import cookie from "react-cookies";

const responseGoogle = async (response) => {
    // cookie.save("Email", response.profileObj.email);
    // cookie.save("Name", response.profileObj.name);
    // cookie.save("Token", response.tokenId);
    // cookie.save("Picture", response.profileObj.imageUrl);
  
  console.log(response);
  }
   const Gmail =  () => {
       return(
           
             
              <GoogleLogin
              clientId="1081990692382-f1ho0n09qs3o7mbkrd3k81vjdrd5cm0n.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Gmail</button>
              )}
              buttonText=""
              onSuccess={response => {responseGoogle(response)
              }}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              icon = {true}
            />
  );
}

  export default  Gmail;