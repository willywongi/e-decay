var Word = React.createClass({
		render: function() {
			return (<span>{this.props.text} </span>);
		} 
	}),
	App = React.createClass({
		getInitialState: function() {
			return {message: ''}
		},
		
		handleChangeMessage: function(e) {
			this.setState({message: e.target.value});
		},
		
		render: function() {
			var words = this.props.words.map(function (word) {
				return (
					<Word text={word.text}></Word>
				);
			});
			return (
				<div>
					{words}
				</div>
			);
		}
	});
$(document).ready(function() {
	var words = "ciao come stai?".split(" ").map(function(wt, index) {
		return {'text': wt, key: index};
	});
	console.log(words);
	React.render(<App words={words}/>, document.getElementById('content'));
});
	

