# background-styler

A package for applying an assortment of different styles to backgrounds.

## Usage

	npm install background-styler --save

	or

	yarn add background-styler

Then, require the package and use it:

	var backgroundStyler = require('background-styler');

	backgroundStyler(options).run();

Options

	start: enter an array with two rgb values
	[
		[23, 44, 55],
		[66, 33, 77]
	]
	end: enter an array with two rgb target values
	time: (integer) duration of the rgb transition
	cycle: (boolean) whether to back and forth between start and end non-stop

## License

	https://opensource.org/licenses/ISC