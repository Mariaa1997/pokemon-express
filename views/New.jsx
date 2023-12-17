const React = require('react');


class New extends React.Component {
    render () {
        return (
            <div>
                <h1>New Pokemon Page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/pokemon' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Img: < input name="img"/> <br />
                    <input type="submit" name="" value="Create Poke"/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <a href="/pokemon">Back</a>
                </form>
            </div> 
        )
    }
}

module.exports = New;