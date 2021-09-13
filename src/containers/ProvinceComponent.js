import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProvinceComponent.scss';

const ProvinceComponent = () => {
  const provinces = useSelector((state) => state.allProvinces.provinces);
  const renderList = provinces.map((province) => {
    const { index, title } = province;

    return (
      <div key={index} className="province-list">
        <Link to={`/province/${index}`}>
          <h3>{title}</h3>
        </Link>
      </div>
    );
  });
  return renderList;
};

export default ProvinceComponent;
