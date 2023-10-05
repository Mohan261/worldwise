import React, { createContext, useContext, useReducer } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.payload };
      case "pass":
        return { ...state, pass: action.payload };
      case "user":
        return { ...state, user: action.payload };
      case "cityname":
        return { ...state, cityname: action.payload };
      case "visitdate":
        return { ...state, visitDate: action.payload };
      case "note":
        return { ...state, note: action.payload };
      case "add":
        return { ...state, data: action.payload };
      case "del":
        return { ...state, data: action.payload };
      case "lat":
        return { ...state, lat: action.payload };
      case "lng":
        return { ...state, lng: action.payload };
      default:
        return { ...state };
    }
    // console.log(state, action);
  };
  const handleDelete = (id) => {
    const filter = state.data.filter((list) => list.id !== id);
    dispatch({ type: "del", payload: filter });
  };
  const cityData = [
    {
      id: 1,
      country: "Portugal",
      countryCode: "PT",
      city: "Lisbon",
      date: 31,
      mon: 10,
      year: 2027,
      note: "Portugal is my favorite city so far",
      lat: 38.699217657457716,
      lng: -9.156645659216103,
    },
    {
      id: 2,
      country: "Spain",
      countryCode: "ES",
      city: "Madrid",
      date: 15,
      mon: 7,
      year: 2027,
      note: "Madrid is my favorite city so far",
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    {
      id: 3,
      country: "France",
      countryCode: "FR",
      city: "Paris",
      date: 21,
      mon: 3,
      year: 2027,
      note: "France is my favorite city so far",
      lat: 48.865022093464724,
      lng: 2.3291015625000004,
    },
  ];
  const userData = [
    {
      id: 1,
      username: "Mohan",
      userEmail: "mohan@example.com",
      userPassword: "mohan12345",
    },
    {
      id: 2,
      username: "Jack",
      userEmail: "jack@example.com",
      userPassword: "jack12345",
    },
  ];
  const intData = {
    data: cityData,
    userinfo: userData,
    email: "mohan@example.com",
    pass: "mohan12345",
    user: "Mohan",
    cityname: "london",
    visitDate: "September 20 2028",
    note: "This is my favorite city so far",
    lat: 41.655629354024235,
    lng: -0.8792903699796639,
  };
  const [state, dispatch] = useReducer(reducer, intData);
  const {
    data,
    userinfo,
    email,
    pass,
    user,
    cityname,
    visitDate,
    note,
    lat,
    lng,
  } = state;
  console.log(state);
  return (
    <div>
      <PostContext.Provider
        value={{
          data,
          email,
          pass,
          user,
          userinfo,
          dispatch,
          cityname,
          visitDate,
          note,
          lat,
          lng,
          handleDelete,
        }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
};

const useData = () => {
  const context = useContext(PostContext);
  return context;
};

export { PostProvider, useData };
