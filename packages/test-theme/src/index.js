import Theme from "./pages";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import {menuHandler} from "./utils/handlers"
import { fetch } from 'frontity';

// export const fetchToken = async ({ state }) => {
//   const res = await fetch(
//       `${state.source.api}/jwt-auth/v1/token`, {
//           method: 'POST',
//           headers: new Headers({
//             'Content-Type': 'application/json'
//           }),
//           body: JSON.stringify({
//             "username": state.theme.username,
//             "password": state.theme.password
//           }),
//           redirect: 'follow'
//       }
//   );
//   const body = await res.json();
//   state.theme.token = body.token;

// }
const marsTheme = {
  name: "test-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: ({ actions }) => async () => {
        await actions.source.fetch("menus/8");
      },
      beforeCSR: ({ actions }) => async () => {
        await actions.source.fetch("menus/8");
      }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
    source: {
      // Add the custom handler for ACF options defined above.
      handlers: [menuHandler]
    }
  },
};

export default marsTheme;

