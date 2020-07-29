import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "../components/header";
import Loading from "../components/loading";
import Title from "../components/title";
import Hero from "../components/hero";
// import CookieConsent, { Cookies } from "react-cookie-consent";
import localization from "../utils/localization/index"
import { CookieBanner } from '@palmabit/react-cookie-law';
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
   localization.setLanguage(state.theme.lang);
  //  localization._interfaceLanguage = state.theme.lang
  //  localization.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang={state.theme.lang} />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
        {/* <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName22"
          cookieName="myAwesome"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
        </CookieConsent> */}
        <div>
          <CookieBanner
            message="Cookie banner message"
            wholeDomain={true}
            onAccept = {() => {}}
            onAcceptPreferences = {() => {}}
            onAcceptStatistics = {() => {}}
            onAcceptMarketing = {() => {}}
          />
        </div>,
        document.body
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Hero when={data.isReady} />
          <h3>String localizado: {localization.how}</h3>
        </Switch>
      </Main> 
      <h1>El idioma que se esta utilizando: {state.theme.lang}</h1>
      
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
