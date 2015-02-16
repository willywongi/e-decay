	var App = React.createClass({
			getInitialState: function() {
				return {message: ''}
			},
			
			handleChangeMessage: function(e) {
				this.setState({message: e.target.value});
			},
			
			render: function() {
				return <input type="text" value={this.state.message} onChange={this.handleChangeMessage} />
			}
		});
$(document).ready(function() {
	React.render(<App />, document.getElementById('content'));
});
	

