const React = require ('react');


class Edit extends React.Component {

    render () {
        return (
            <div>
                <h1> Edit Log</h1>
                <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/> <br />
                    Image: <input type="text" name="image" defaultValue={this.props.pokemon.img}/><br />
                    <br />
                    <input type="submit" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;