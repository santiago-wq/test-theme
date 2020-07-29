export const menuHandler = {
    name: "menus",
    priority: 10,
    pattern: "menus/:id",
    func: async ({ route, params, state, libraries }) => {
      const { api } = libraries.source;
      const { id } = params;
  
      // 1. fetch the data you want from the endpoint page
      const response = await api.get({
        endpoint: "menu-items",
        params: {
          menus: id,
          per_page: 100 // To make sure we get all elements
        }
      });
  
      // 2. get an array with each item in json format
      const items = await response.json();
  
      // 3. add data to source
      const currentPageData = state.source.data[route];
  
      Object.assign(currentPageData, {
        id,
        items,
        isMenu: true
      });
    }
  };

  export const cookieList = {
    name: "cookielawinfo",
    priority: 10,
    pattern: "cookielawinfo/",
    func: async ({ route, state, libraries }) => {
      const { api } = libraries.source;
  
      // 1. fetch the data you want from the endpoint page
      const response = await api.get({
        endpoint: "cookielawinfo"
      });
  
      // 2. get an array with each item in json format
      const items = await response.json();
  
      // 3. add data to source
      const currentPageData = state.source.data[route];
  
      Object.assign(currentPageData, {
        items
      });
    }
  };

export const acfOptionsHandler = {
    pattern: "acf-options-page",
    func: async ({ route, state, libraries }) => {
      // 1. Get ACF option page from REST API.
      const response = await libraries.source.api.get({
        endpoint: '/acf/v3/options/options'
      });
      const option = await response.json();
  
      // 2. Add data to `source`.
      const data = state.source.get(route);
      Object.assign(data, { ...option, isAcfOptionsPage: true });
    }
  };