const React = require("react");

const pokenum = [1,2,3,4,5,6,7,8,9,10];
class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          {pokenum.map((num,index) =>{
            return (
                <label key={index}>
                    <input 
                    type="radio"
                    name="img"
                    value={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum[num - 1]}.png`} />
                      <img key={index}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum[num - 1]}.png`} />

                </label>
            );
          })}
          <br />
          Img: <input name="img" /> <br />
          <input type="submit" name="" value="Create Poke" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a href="/pokemon">Back</a>
        </form>
      </div>
   );
  }
}

module.exports = New;
