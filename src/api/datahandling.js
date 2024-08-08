const getData = async (apiURL, param) => {
    const urlToLoad = apiURL;
    return fetch(urlToLoad, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      if (!res.ok) {
        return res.json();
      }
      return res.json();
    })
  
  };
  
  const getRequestData = async (apiURL, payload) => {
   const urlToLoad = apiURL;
    return fetch(urlToLoad, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        return res.json();
      }
      return res.json();
    })
  };
  
  const fetchData = async (apiURL, payload) => {
    const urlToLoad = apiURL;
    return fetch(urlToLoad, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        return res.json();
      }
      return res.json();
    })
  
  };
  
  const deleteData = async (apiURL, payload) => {
    const urlToLoad = apiURL;
    return fetch(urlToLoad, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        return res.json();
      }
      return res.json();
    })
  
  };
  
  const putData = async (apiURL, payload) => {
    const urlToLoad =  apiURL;
    return fetch(urlToLoad, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        return res.json();
      }
      return res.json();
    })
      
    };
  
    const patchData = async (apiURL, payload) => {
      const urlToLoad =  apiURL;
      return fetch(urlToLoad, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).then((res) => {
        if (!res.ok) {
          return res.json();
        }
        return res.json();
      })
        
      };
  
  export { getData, fetchData, getRequestData, deleteData, putData,patchData };