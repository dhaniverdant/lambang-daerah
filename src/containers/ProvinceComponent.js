import React from "react";
import { useSelector } from "react-redux";
import './ProvinceComponent.scss';

const ProvinceComponent = () => {
  const provinces = useSelector((state) => state.allProvinces.provinces);
  const renderList = provinces.map((province) => {
    const { index, title, url } = province;

    return (
      <div key={index} className="province-list">
        <div className="province-icon">
          <img
            src={url}
            style={{
              transition: "opacity .15s linear"
            }}
            alt="icon"
          />
        </div>
        <div className="province-name">
          <h3>{title}</h3>
        </div>
      </div>
    );
  });
  return renderList;
};

export default ProvinceComponent;
