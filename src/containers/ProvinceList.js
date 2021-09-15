import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProvinces } from "../redux/actions/provinceActions";
import ProvinceComponent from "./ProvinceComponent";

const ProvinceList = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get('https://feriirawan-api.herokuapp.com/list/symbols/province/200')
      .catch((err) => {
        console.log("err", err);
      })
    dispatch(setProvinces(response.data.lambang));
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div>
      <ProvinceComponent />
    </div>
  );
}

export default ProvinceList;
