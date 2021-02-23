import React from "react";

import data from "./data/trainer";

import TrainerCard from "./TrainerCard";

const TrainersList = ({ theme }) => {
  const renderTrainerList = () => {
    return (
      <div className="row">
        {data.map((trainer) => {
          return (
            <div
              key={trainer.id}
              className="col col-xl-3 col-lg-4 col-md-6 col-sm-12"
            >
              <TrainerCard
                img={trainer.img}
                name={trainer.name}
                experience={trainer.experience}
                speciality={trainer.speciality}
                contact={trainer.contact}
                price={trainer.price}
                theme={theme}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="list-container">
      <h1 className="primary-heading">Contact Trainer</h1>
      {renderTrainerList()}
    </div>
  );
};

export default TrainersList;
