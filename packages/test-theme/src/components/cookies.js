import { React } from "react";
import ReactDOM from "react-dom";
import {
  CookieConsentsProvider,
  useCookieConsents,
} from "@enzsft/react-cookie-consents";
import {connect } from 'frontity'
const CookieBanner = () => {
  const cookieConsents = useCookieConsents();

  if (cookieConsents.get().length > 0) {
    return null;
  }

  return (
    <>
      <span>
        We use cookies to help give you the best experience on our site. By
        continuing you agree to our use of cookies.
      </span>
      <button type="button" onClick={() => cookieConsents.add("analytics")}>
        Accept and close
      </button>
    </>
  );
};

const App = () => {
  return (
    <CookieConsentsProvider cookieName="cookieConsents" expiryInDays={365}>
      <CookieBanner />
    </CookieConsentsProvider>
  );
};



export default connect(CookieBanner);
