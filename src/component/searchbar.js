import React from 'react'

class SearchBar extends React.Component {
    state = { temp: '' }
    submit = event => {
        event.preventDefault()
        this.props.onsubmit(this.state.temp)
    }

    render() {
        return (
            <div className='ui segment'>
                <form className="ui form" onSubmit={this.submit}>
                    <div className='ui field'>
                        <label>Search Image</label>
                        <input type="text" value={this.state.temp} onChange={e => this.setState({ temp: e.target.value })} />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar