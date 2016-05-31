(function () {

	var CARD_TYPES = {
		"INVALID": 0,
		"ACE": 1,
		"TWO": 2,
		"THREE": 3,
		"FOUR": 4,
		"FIVE": 5,
		"SIX": 6,
		"SEVEN": 7,
		"EIGHT": 8,
		"NINE": 9,
		"TEN": 10,
		"JACK": 11,
		"QUEEN": 12,
		"KING": 13,
		"JOKER": 14
	};

	var CARD_SUITS = {
		"INVALID": 0,
		"HEARTS": 1,
		"DIAMONDS": 2,
		"CLUBS": 3,
		"SPADE": 4
	};

	function Card () {

		let _type;
		let _suit;
		
		const _print = function () {
			console.log(`type: ${_type}, suit: ${_suit}`);
		};

		const _bind = function () {

		};

		const _render = function () {

		};

		const _init = function (type, suit) {
			_type = type || CARD_TYPES.INVALID;
			_suit = suit || CARD_SUITS.INVALID;
			_render();
			_bind();
		};
		_init.apply(this, arguments);

		return {
			print: _print,
		};
	}

	function Deck () {

		let _cards;

		const _print = function () {
			console.log(`number of cards: ${_cards.length}`);
			_cards.forEach((elem, i) => elem.print());
		};

		const _shuffle = function () {
			let times_to_shuffle = 5; 
			for (let i=0; i<_cards.length*times_to_shuffle; ++i) {
				let a = Math.floor(Math.random() * _cards.length);
				let b = Math.floor(Math.random() * _cards.length);
				let temp = _cards[a];
				_cards[a] = _cards[b];
				_cards[b] = temp;
			}
		};

		const _bind = function () {

		};

		const _render = function () {

		};

		const _init = function () {
			_cards = [];
			for (let i=0; i<13; ++i) {
				for (let j=0; j<4; ++j) {
					_cards.push(new Card(i+1, j+1));
				}
			}
			_shuffle();
			_render();
			_bind();
		};
		_init.apply(this, arguments);

		return {
			shuffle: _shuffle,
			print: _print,
		};
	}

	function Player () {

		let _username;
		let _total_cash;
		let _bet_cash;
		let _hand;

		const _print = function () {
			console.log(`${_username}`);
		};

		const _bind = function () {

		};

		const _render = function () {

		};

		const _init = function (username) {
			_username = username;
			_hand = [];
			_render();
			_bind();
		};
		_init.apply(this, arguments);

		return {
			print: _print,
		};
	}

	function Game () {

		let _deck;
		let _players;
		let _active_player;

		const _print = function () {
			console.log("Deck:");
			_deck.print();

			console.log("Players:");
			for (var i=0; i<_players.length; ++i) {
				_players[i].print();
			}

			console.log("Active Player");
			console.log(_active_player);
		};

		const _add_player = function (username) {
			_players.push(new Player(username));
		};

		const _bind = function () {

		};

		const _render = function () {

		};

		const _init = function () {
			_players = [];
			_active_player = 0;
			_deck = new Deck();
			_render();
			_bind();
		};
		_init.apply(this, arguments);

		return {
			add_player: _add_player,
			print: _print,
		};
	}


	let p1 = "BigKitty75";
	let p2 = "Greedyo0oGrandpa";

	let game = new Game();

	game.add_player(p1);
	game.add_player(p2);

})();