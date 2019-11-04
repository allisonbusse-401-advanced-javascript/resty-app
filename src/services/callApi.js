/* eslint-disable no-console */
export const callApi = (url, method, headers, body) => {  


  try {
    let fetchObject = {
      method,
      headers
    };

    if(body !== '') fetchObject.body = body;


    return fetch(url, fetchObject)
      .then(res => 
        Promise.all([
          [...res.headers.entries()].reduce((acc, entry) => {
            acc[entry[0]] = entry[1];
            return acc;
          }, {}),
          res.json()
        ]))
      .then(([headers, response]) => {
        return {
          headers,
          response
        };
      });
  } 


  catch(error) {
    console.log(error);
  }
};

