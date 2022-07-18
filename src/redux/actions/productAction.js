function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/lee951109/HnM/products?q=${searchQuery}`;
    // let url = `http://localhost:5000/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();

    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/lee951109/HnM/products/${id}`;
    // let url = `http://localhost:5000/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();

    dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
