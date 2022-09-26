import React from "react";
import { connect } from "react-redux";
import { removeSuperhero } from "./actions/index";

function TableComponent(props) {
  const removeSuperhero = (superhero) => {
    props.removeSuperhero(superhero);
  };

  return (
    <table className="tableSuperheros" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>img</th>
          <th>Name</th>
          <th>Combat</th>
          <th>Power</th>
          <th>Speed</th>
          <th>Strength</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.superheros.map((superhero) => {
          return (
            <tr>
              {/* <tr key={superhero.id}> */}
              {/* <td>{superhero.id}</td> */}
              <td>
                <img
                  style={{ width: "220px", height: "250px" }}
                  src={superhero.image.url}
                  alt={superhero.name}
                />
              </td>
              <td>{superhero.name}</td>
              <td>{superhero.powerstats.combat}</td>
              <td>{superhero.powerstats.power}</td>
              <td>{superhero.powerstats.speed}</td>
              <td>{superhero.powerstats.strength}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => removeSuperhero(superhero)}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  return {
    superheros: state.superheros,
  };
};

export default connect(mapStateToProps, { removeSuperhero })(TableComponent);
