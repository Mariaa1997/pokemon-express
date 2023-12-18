const React = require("react");

const pokenum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class Edit extends React.Component {
  render() {
    return (
      <div>
        <h1> Edit Pokemon</h1>
        <form
          action={`/pokemon/${this.props.pokemon._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.pokemon.name}
          />{" "}
          <br />
          Image:{" "}
          <input
            type="text"
            name="image"
            defaultValue={this.props.pokemon.img}
          />
          <br />
          <br />
          {pokenum.map((num, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="img"
                  value={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokenum[num - 1]
                  }.png`}
                />
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokenum[num - 1]
                  }.png`}
                />
              </label>
            );
          })}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
