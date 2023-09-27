import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

export default function Auth0ProviderWithNavigate({ children }) {
  // your code here...'

  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  // inside our custom coponent, below your domain, clientId, and redirectUri variables

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  // depending on the architecture of your application, this can be used to prevent the application from loading, though a redirect call could navigate a user to an error page.

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);

    // this function will be used by Auth0 Provider to check the component appState prop and determine a redirect location, or will return the current page
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
