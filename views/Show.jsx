const React = require('react');
class Show extends React.Component {
    render () {
        const poke = this.props.poke;

        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                <h2>Name: {poke.name}</h2>
                <img src={poke.img} alt={`Image of ${poke.name}`}/>
                <a href={`/pokemon/${poke._id}/Index`}></a>
                <p>The {poke.name} is {poke.img}</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a href={`/pokemon`}>Back</a>
            </div>

        )
    }
}

module.exports = Show;