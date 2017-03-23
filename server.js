const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();

app.use(express.static('build'));

/*app.use('*', (req, res) => {
	res.status(404).json({message: 'Not Found'});
});*/
app.use(jsonParser);

const state = {
	fewestGuesses: 20
};

app.get('/fewest-guesses', (req, res) => {
	res.json(state); 
});

app.post('/fewest-guesses', (req, res) => {
	if(req.body.guesses < state.fewestGuesses){
		state.fewestGuesses = req.body.guesses;
		res.json(state);
	}
	else{
		res.json({message: `The fewest guesses is still ${state.fewestGuesses}`});
	}
});

//app.use(express.static('public'));
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});