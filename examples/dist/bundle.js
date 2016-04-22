require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Fade = (function (_Component) {
	_inherits(Fade, _Component);

	function Fade() {
		_classCallCheck(this, Fade);

		_get(Object.getPrototypeOf(Fade.prototype), 'constructor', this).call(this);
		this._showElement = this._showElement.bind(this);
		this._hideElement = this._hideElement.bind(this);
	}

	_createClass(Fade, [{
		key: 'componentWillAppear',
		value: function componentWillAppear(callback) {
			setTimeout(callback, 1); // need at least one tick to fire transition
		}
	}, {
		key: 'componentDidAppear',
		value: function componentDidAppear() {
			this._showElement();
		}
	}, {
		key: 'componentWillEnter',
		value: function componentWillEnter(callback) {
			setTimeout(callback, 1);
		}
	}, {
		key: 'componentDidEnter',
		value: function componentDidEnter() {
			this._showElement();
		}
	}, {
		key: 'componentWillLeave',
		value: function componentWillLeave(callback) {
			this._hideElement();
			setTimeout(callback, this.props.duration);
		}
	}, {
		key: 'componentDidLeave',
		value: function componentDidLeave() {}
	}, {
		key: '_showElement',
		value: function _showElement() {
			var el = this.refs.element;
			el.style.opacity = 1;
		}
	}, {
		key: '_hideElement',
		value: function _hideElement() {
			var el = this.refs.element;
			el.style.opacity = 0;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = _extends({}, this.props);
			var style = {
				opacity: 0,
				WebkitTransition: 'opacity ' + this.props.duration + 'ms ease-out',
				msTransition: 'opacity ' + this.props.duration + 'ms ease-out',
				transition: 'opacity ' + this.props.duration + 'ms ease-out'
			};
			props.style = _extends(style, this.props.style);
			return _react2['default'].createElement(this.props.component, props, this.props.children);
		}
	}]);

	return Fade;
})(_react.Component);

Fade.propTypes = {
	children: _react.PropTypes.any,
	component: _react.PropTypes.any,
	duration: _react.PropTypes.number,
	style: _react.PropTypes.object
};

Fade.defaultProps = {
	component: 'div',
	duration: 200,
	ref: 'element'
};

exports['default'] = Fade;
module.exports = exports['default'];

},{"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

var Icon = function Icon(props) {
	return _react2['default'].createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: _icons2['default'][props.type] }
	}, props));
};

Icon.propTypes = {
	type: _react.PropTypes.oneOf(Object.keys(_icons2['default']))
};

exports['default'] = Icon;
module.exports = exports['default'];

},{"./icons":8,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _reactDom = require('react-dom');

var Portal = (function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		_get(Object.getPrototypeOf(Portal.prototype), 'constructor', this).call(this);
		this.portalElement = null;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			(0, _reactDom.render)(_react2['default'].createElement(
				_reactAddonsTransitionGroup2['default'],
				_extends({}, this.props, { component: 'div' }),
				this.props.children
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Portal;
})(_react.Component);

exports['default'] = Portal;

Portal.propTypes = {
	children: _react.PropTypes.any
};
module.exports = exports['default'];

},{"react":undefined,"react-addons-transition-group":undefined,"react-dom":undefined}],4:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">' + '<path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"/>' + '</svg>';

},{}],5:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">' + '<path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"/>' + '</svg>';

},{}],6:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' + '<path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>' + '</svg>';

},{}],7:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" fill-rule="evenodd" version="1.1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<path d="M23,7 L21,7 L21,7 L21,5.0048815 C21,3.89761602 20.1041422,3 19.0026083,3 L13.9973917,3 C12.8942627,3 12,3.8938998 12,5.0048815 L12,7 L10,7 L6,7 L6,8 L8,8 L8,26.9931517 C8,28.6537881 9.33396149,30 11.0001262,30 L21.9998738,30 C23.6567977,30 25,28.6640085 25,26.9931517 L25,8 L27,8 L27,7 L23,7 L23,7 L23,7 Z M9,8 L9,27.0054385 C9,28.1070044 9.89339733,29 10.9918842,29 L22.0081158,29 C23.1082031,29 24,28.0976562 24,27.0054385 L24,8 L9,8 L9,8 Z M12,10 L12,27 L13,27 L13,10 L12,10 L12,10 Z M16,10 L16,27 L17,27 L17,10 L16,10 L16,10 Z M20,10 L20,27 L21,27 L21,10 L20,10 L20,10 Z M14.0029293,4 C13.4490268,4 13,4.44266033 13,4.99895656 L13,7 L20,7 L20,4.99895656 C20,4.44724809 19.5621186,4 18.9970707,4 L14.0029293,4 L14.0029293,4 Z" id="trash-can"/>' + '</svg>';

},{}],8:[function(require,module,exports){
'use strict';

module.exports = {
	arrowLeft: require('./arrowLeft'),
	arrowRight: require('./arrowRight'),
	close: require('./close'),
	'delete': require('./delete')
};

},{"./arrowLeft":4,"./arrowRight":5,"./close":6,"./delete":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var CLOSE_SIZE = 20;
var ARROW_HEIGHT = 120;
var GAP_BOTTOM = 50;
var GAP_TOP = 40;

var styles = {
	// SCENE
	container: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		boxSizing: 'border-box',
		height: '100%',
		left: 0,
		padding: '0 10px',
		position: 'fixed',
		textAlign: 'center',
		top: 0,
		width: '100%',
		zIndex: 1001
	},
	content: {
		display: 'inline-block',
		margin: '0 auto',
		maxWidth: '100%',
		position: 'relative',
		verticalAlign: 'middle'
	},
	contentHeightShim: {
		display: 'inline-block',
		height: '100%',
		lineHeight: 0,
		verticalAlign: 'middle'
	},

	// IMAGES
	image: {
		boxSizing: 'border-box',
		display: 'block',
		lineHeight: 0,
		maxWidth: '100%',
		margin: '0 auto',
		paddingBottom: 50,
		paddingTop: 40,
		height: 'auto',
		width: 'auto',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'

	},
	figure: {
		backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDhweCcgaGVpZ2h0PSc0OHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1kZWZhdWx0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjA4MzMzMzMzMzMzMzMzMzMzcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMTY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDkwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4yNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4zMzMzMzMzMzMzMzMzMzMzcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjQxNjY2NjY2NjY2NjY2NjdzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC41ODMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNzVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuODMzMzMzMzMzMzMzMzMzNHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMzMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC45MTY2NjY2NjY2NjY2NjY2cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PC9zdmc+)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		lineHeight: 1,
		minHeight: 200,
		minWidth: 300,
		margin: 0,
		textAlign: 'center'
	},
	figureShadow: {
		bottom: GAP_BOTTOM,
		boxShadow: '0 0 8px -2px rgba(0,0,0,.6)',
		display: 'block',
		height: 'auto',
		left: 0,
		position: 'absolute',
		right: 0,
		top: GAP_TOP,
		width: 'auto',
		zIndex: -1
	},
	footer: {
		color: 'white',
		lineHeight: 1.3,
		height: GAP_BOTTOM,
		marginTop: -GAP_BOTTOM,
		paddingTop: 5,
		position: 'absolute',
		textAlign: 'left',
		top: '100%',
		left: 0,
		width: '100%',
		cursor: 'auto'
	},
	footerCount: {
		float: 'right',
		fontSize: '.85em',
		opacity: 0.75
	},
	footerCaption: {
		paddingRight: 80
	},

	// BUTTONS
	arrow: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		marginTop: ARROW_HEIGHT / -2,
		maxWidth: 80,
		padding: 20,
		position: 'absolute',
		top: '50%',
		height: ARROW_HEIGHT,
		width: '16%',
		zIndex: 1001,

		// disable user select
		WebkitTouchCallout: 'none',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	arrowNext: {
		right: 0
	},
	arrowPrev: {
		left: 0
	},
	closeBar: {
		display: 'inline-block'
	},
	// height: GAP_TOP,
	// left: 0,
	// position: 'absolute',
	// textAlign: 'right',
	// top: 0,
	// width: '100%',
	closeButton: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		height: CLOSE_SIZE + 20,
		outline: 'none',
		padding: 10,
		position: 'relative',
		right: -10,
		top: 0,
		width: CLOSE_SIZE + 20
	},
	deleteBar: {
		display: 'inline-block'
	},
	// height: GAP_TOP,
	// left: 0,
	// position: 'absolute',
	// textAlign: 'right',
	// top: 0,
	// width: '100%',
	deleteButton: {
		color: 'red',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		height: CLOSE_SIZE + 20,
		outline: 'none',
		padding: 10,
		position: 'relative',
		right: -10,
		top: 0,
		width: CLOSE_SIZE + 40
	},
	nav: {
		position: 'absolute',
		width: '100%',
		textAlign: 'right'
	}
};

exports['default'] = styles;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports['default'] = {
	canUseDOM: canUseDOM
};
module.exports = exports['default'];

},{}],"react-images":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jss = require('jss');

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssPx = require('jss-px');

var _jssPx2 = _interopRequireDefault(_jssPx);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _stylesDefault = require('./styles/default');

var _stylesDefault2 = _interopRequireDefault(_stylesDefault);

var jss = (0, _jss.create)();
exports.jss = jss;
var useSheet = (0, _reactJss2['default'])(jss);
exports.useSheet = useSheet;
jss.use((0, _jssCamelCase2['default'])());
jss.use((0, _jssNested2['default'])());
jss.use((0, _jssPx2['default'])());
jss.use((0, _jssVendorPrefixer2['default'])());

var Lightbox = (function (_Component) {
	_inherits(Lightbox, _Component);

	_createClass(Lightbox, null, [{
		key: 'theme',
		value: function theme(themeStyles) {
			var extStyles = _extends({}, _stylesDefault2['default']);
			for (var key in extStyles) {
				if (key in themeStyles) {
					extStyles[key] = _extends({}, _stylesDefault2['default'][key], themeStyles[key]);
				}
			}
			return extStyles;
		}
	}]);

	function Lightbox() {
		_classCallCheck(this, Lightbox);

		_get(Object.getPrototypeOf(Lightbox.prototype), 'constructor', this).call(this);

		this.close = this.close.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrev = this.gotoPrev.bind(this);
		this.handleImageClick = this.handleImageClick.bind(this);
		this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
		this.handleResize = this.handleResize.bind(this);

		this.state = {};
	}

	_createClass(Lightbox, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.isOpen && nextProps.enableKeyboardInput) {
				if (_utils2['default'].canUseDOM) window.addEventListener('keydown', this.handleKeyboardInput);
				if (_utils2['default'].canUseDOM) window.addEventListener('resize', this.handleResize);
				this.handleResize();
			} else {
				if (_utils2['default'].canUseDOM) window.removeEventListener('keydown', this.handleKeyboardInput);
				if (_utils2['default'].canUseDOM) window.removeEventListener('resize', this.handleResize);
			}

			if (nextProps.isOpen) {
				if (_utils2['default'].canUseDOM) document.body.style.overflow = 'hidden';
			} else {
				if (_utils2['default'].canUseDOM) document.body.style.overflow = null;
			}
		}
	}, {
		key: 'close',
		value: function close(e) {
			if (e.target.id !== 'react-images-container') return;

			if (this.props.backdropClosesModal && this.props.onClose) {
				this.props.onClose();
			}
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			if (this.props.currentImage === this.props.images.length - 1) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			if (this.props.currentImage === 0) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickPrev();
		}
	}, {
		key: 'handleImageClick',
		value: function handleImageClick(e) {
			if (!this.props.onClickShowNextImage) return;

			this.gotoNext(e);
		}
	}, {
		key: 'handleImageLoad',
		value: function handleImageLoad(e, index) {
			// console.log('image', index, 'loaded', e);
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				this.gotoPrev(event);
				return true;
			} else if (event.keyCode === 39) {
				this.gotoNext(event);
				return true;
			} else if (event.keyCode === 27) {
				this.props.onClose();
				return true;
			}
			return false;
		}
	}, {
		key: 'handleResize',
		value: function handleResize() {
			if (!_utils2['default'].canUseDOM) return;
			this.setState({
				windowHeight: window.innerHeight || 0
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'button',
				{ title: 'Next (Right arrow key)',
					type: 'button',
					className: classes.arrow + ' ' + classes.arrowNext,
					onClick: this.gotoNext,
					onTouchEnd: this.gotoNext
				},
				_react2['default'].createElement(_Icon2['default'], { type: 'arrowRight' })
			);
		}
	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'button',
				{ title: 'Previous (Left arrow key)',
					type: 'button',
					className: classes.arrow + ' ' + classes.arrowPrev,
					onClick: this.gotoPrev,
					onTouchEnd: this.gotoPrev
				},
				_react2['default'].createElement(_Icon2['default'], { type: 'arrowLeft' })
			);
		}
	}, {
		key: 'renderCloseButton',
		value: function renderCloseButton() {
			if (!this.props.showCloseButton) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'div',
				{ className: classes.closeBar },
				_react2['default'].createElement(
					'button',
					{ title: 'Close (Esc)', className: classes.closeButton, onClick: this.props.onClose },
					_react2['default'].createElement(_Icon2['default'], { type: 'close' })
				)
			);
		}
	}, {
		key: 'renderDeleteButton',
		value: function renderDeleteButton() {
			if (!this.props.showDeleteButton) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'div',
				{ className: classes.deleteBar },
				_react2['default'].createElement(
					'button',
					{ title: 'Delete Image', className: classes.deleteButton, onClick: this.props.onDelete },
					_react2['default'].createElement(_Icon2['default'], { type: 'delete' })
				)
			);
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			if (!this.props.isOpen) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				_Fade2['default'],
				{ id: 'react-images-container',
					key: 'dialog',
					duration: 250,
					className: classes.container,
					onClick: this.close,
					onTouchEnd: this.close
				},
				_react2['default'].createElement('span', { className: classes.contentHeightShim }),
				_react2['default'].createElement(
					'div',
					{ className: classes.content },
					_react2['default'].createElement(
						'div',
						{ className: classes.nav },
						this.renderDeleteButton(),
						this.renderCloseButton()
					),
					this.renderImages()
				),
				this.renderArrowPrev(),
				this.renderArrowNext()
			);
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter(caption) {
			var _props = this.props;
			var currentImage = _props.currentImage;
			var images = _props.images;
			var showImageCount = _props.showImageCount;
			var classes = this.props.sheet.classes;

			if (!caption && !showImageCount) return null;

			var imageCount = showImageCount ? _react2['default'].createElement(
				'div',
				{ className: classes.footerCount },
				currentImage + 1,
				' of ',
				images.length
			) : null;
			var figcaption = caption ? _react2['default'].createElement(
				'figcaption',
				{ className: classes.footerCaption },
				caption
			) : null;

			return _react2['default'].createElement(
				'div',
				{ className: classes.footer },
				imageCount,
				figcaption
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _this = this;

			var _props2 = this.props;
			var images = _props2.images;
			var currentImage = _props2.currentImage;
			var classes = this.props.sheet.classes;
			var windowHeight = this.state.windowHeight;

			if (!images || !images.length) return null;

			var image = images[currentImage];

			var srcset = undefined;
			var sizes = undefined;

			if (image.srcset) {
				srcset = image.srcset.join();
				sizes = '100vw';
			}

			return _react2['default'].createElement(
				'figure',
				{ key: 'image ' + currentImage,
					className: classes.figure,
					style: { maxWidth: this.props.width }
				},
				_react2['default'].createElement(
					_reactSwipeable2['default'],
					{ onSwipedLeft: this.gotoNext, onSwipedRight: this.gotoPrev },
					_react2['default'].createElement('img', { className: classes.image,
						onClick: this.handleImageClick,
						onLoad: function (e) {
							return _this.handleImageLoad(e, currentImage);
						},
						sizes: sizes,
						src: image.src,
						srcSet: srcset,
						style: {
							cursor: this.props.onClickShowNextImage ? 'pointer' : 'auto',
							maxHeight: windowHeight
						}
					})
				),
				this.renderFooter(images[currentImage].caption)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				_Portal2['default'],
				null,
				this.renderDialog()
			);
		}
	}]);

	return Lightbox;
})(_react.Component);

Lightbox.displayName = 'Lightbox';

Lightbox.propTypes = {
	backdropClosesModal: _react.PropTypes.bool,
	currentImage: _react.PropTypes.number,
	enableKeyboardInput: _react.PropTypes.bool,
	images: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		src: _react.PropTypes.string.isRequired,
		srcset: _react.PropTypes.array,
		caption: _react.PropTypes.string
	})).isRequired,
	isOpen: _react.PropTypes.bool,
	onClickNext: _react.PropTypes.func.isRequired,
	onClickPrev: _react.PropTypes.func.isRequired,
	onClickShowNextImage: _react.PropTypes.bool,
	onClose: _react.PropTypes.func.isRequired,
	onDelete: _react.PropTypes.func.isRequired,
	sheet: _react.PropTypes.object,
	showCloseButton: _react.PropTypes.bool,
	showDeleteButton: _react.PropTypes.bool,
	showImageCount: _react.PropTypes.bool,
	width: _react.PropTypes.number
};

Lightbox.defaultProps = {
	enableKeyboardInput: true,
	currentImage: 0,
	onClickShowNextImage: true,
	showCloseButton: true,
	showDeleteButton: true,
	showImageCount: true,
	width: 900
};

exports['default'] = useSheet(Lightbox, _stylesDefault2['default']);

},{"./Fade":1,"./Icon":2,"./Portal":3,"./styles/default":9,"./utils":10,"jss":undefined,"jss-camel-case":undefined,"jss-nested":undefined,"jss-px":undefined,"jss-vendor-prefixer":undefined,"react":undefined,"react-jss":undefined,"react-swipeable":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9yZ2FuaGVpbWJlY2svV2Vic3Rvcm1Qcm9qZWN0cy9mb3Jrcy9yZWFjdC1pbWFnZXMvc3JjL0ZhZGUuanMiLCIvVXNlcnMvbW9yZ2FuaGVpbWJlY2svV2Vic3Rvcm1Qcm9qZWN0cy9mb3Jrcy9yZWFjdC1pbWFnZXMvc3JjL0ljb24uanMiLCIvVXNlcnMvbW9yZ2FuaGVpbWJlY2svV2Vic3Rvcm1Qcm9qZWN0cy9mb3Jrcy9yZWFjdC1pbWFnZXMvc3JjL1BvcnRhbC5qcyIsIi9Vc2Vycy9tb3JnYW5oZWltYmVjay9XZWJzdG9ybVByb2plY3RzL2ZvcmtzL3JlYWN0LWltYWdlcy9zcmMvaWNvbnMvYXJyb3dMZWZ0LmpzIiwiL1VzZXJzL21vcmdhbmhlaW1iZWNrL1dlYnN0b3JtUHJvamVjdHMvZm9ya3MvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9hcnJvd1JpZ2h0LmpzIiwiL1VzZXJzL21vcmdhbmhlaW1iZWNrL1dlYnN0b3JtUHJvamVjdHMvZm9ya3MvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9jbG9zZS5qcyIsIi9Vc2Vycy9tb3JnYW5oZWltYmVjay9XZWJzdG9ybVByb2plY3RzL2ZvcmtzL3JlYWN0LWltYWdlcy9zcmMvaWNvbnMvZGVsZXRlLmpzIiwiL1VzZXJzL21vcmdhbmhlaW1iZWNrL1dlYnN0b3JtUHJvamVjdHMvZm9ya3MvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9pbmRleC5qcyIsIi9Vc2Vycy9tb3JnYW5oZWltYmVjay9XZWJzdG9ybVByb2plY3RzL2ZvcmtzL3JlYWN0LWltYWdlcy9zcmMvc3R5bGVzL2RlZmF1bHQuanMiLCIvVXNlcnMvbW9yZ2FuaGVpbWJlY2svV2Vic3Rvcm1Qcm9qZWN0cy9mb3Jrcy9yZWFjdC1pbWFnZXMvc3JjL3V0aWxzLmpzIiwiL1VzZXJzL21vcmdhbmhlaW1iZWNrL1dlYnN0b3JtUHJvamVjdHMvZm9ya3MvcmVhY3QtaW1hZ2Vz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QixTQUFPLEVBQUUsaUJBQVUsTUFBTTtFQUN6QixDQUFDLENBQ0YsQ0FBQyxVQUFVO0FBQ1osT0FBTSxFQUFFLGlCQUFVLElBQUk7QUFDdEIsWUFBVyxFQUFFLGlCQUFVLElBQUksQ0FBQyxVQUFVO0FBQ3RDLFlBQVcsRUFBRSxpQkFBVSxJQUFJLENBQUMsVUFBVTtBQUN0QyxxQkFBb0IsRUFBRSxpQkFBVSxJQUFJO0FBQ3BDLFFBQU8sRUFBRSxpQkFBVSxJQUFJLENBQUMsVUFBVTtBQUNsQyxTQUFRLEVBQUUsaUJBQVUsSUFBSSxDQUFDLFVBQVU7QUFDbkMsTUFBSyxFQUFFLGlCQUFVLE1BQU07QUFDdkIsZ0JBQWUsRUFBRSxpQkFBVSxJQUFJO0FBQy9CLGlCQUFnQixFQUFFLGlCQUFVLElBQUk7QUFDaEMsZUFBYyxFQUFFLGlCQUFVLElBQUk7QUFDOUIsTUFBSyxFQUFFLGlCQUFVLE1BQU07Q0FDdkIsQ0FBQzs7QUFFRixRQUFRLENBQUMsWUFBWSxHQUFHO0FBQ3ZCLG9CQUFtQixFQUFFLElBQUk7QUFDekIsYUFBWSxFQUFFLENBQUM7QUFDZixxQkFBb0IsRUFBRSxJQUFJO0FBQzFCLGdCQUFlLEVBQUUsSUFBSTtBQUNyQixpQkFBZ0IsRUFBRSxJQUFJO0FBQ3RCLGVBQWMsRUFBRSxJQUFJO0FBQ3BCLE1BQUssRUFBRSxHQUFHO0NBQ1YsQ0FBQzs7cUJBRWEsUUFBUSxDQUFDLFFBQVEsNkJBQWdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRmFkZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3Nob3dFbGVtZW50ID0gdGhpcy5fc2hvd0VsZW1lbnQuYmluZCh0aGlzKTtcblx0XHR0aGlzLl9oaWRlRWxlbWVudCA9IHRoaXMuX2hpZGVFbGVtZW50LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsQXBwZWFyIChjYWxsYmFjaykge1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2ssIDEpOyAvLyBuZWVkIGF0IGxlYXN0IG9uZSB0aWNrIHRvIGZpcmUgdHJhbnNpdGlvblxuXHR9XG5cblx0Y29tcG9uZW50RGlkQXBwZWFyICgpIHtcblx0XHR0aGlzLl9zaG93RWxlbWVudCgpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbEVudGVyIChjYWxsYmFjaykge1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2ssIDEpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkRW50ZXIgKCkge1xuXHRcdHRoaXMuX3Nob3dFbGVtZW50KCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTGVhdmUgKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5faGlkZUVsZW1lbnQoKTtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLnByb3BzLmR1cmF0aW9uKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZExlYXZlICgpIHtcblx0fVxuXG5cdF9zaG93RWxlbWVudCAoKSB7XG5cdFx0Y29uc3QgZWwgPSB0aGlzLnJlZnMuZWxlbWVudDtcblx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0fVxuXG5cdF9oaWRlRWxlbWVudCAoKSB7XG5cdFx0Y29uc3QgZWwgPSB0aGlzLnJlZnMuZWxlbWVudDtcblx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gMDtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcblx0XHRjb25zdCBzdHlsZSA9IHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRXZWJraXRUcmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoaXMucHJvcHMuZHVyYXRpb259bXMgZWFzZS1vdXRgLFxuXHRcdFx0bXNUcmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoaXMucHJvcHMuZHVyYXRpb259bXMgZWFzZS1vdXRgLFxuXHRcdFx0dHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGlzLnByb3BzLmR1cmF0aW9ufW1zIGVhc2Utb3V0YCxcblx0XHR9O1xuXHRcdHByb3BzLnN0eWxlID0gT2JqZWN0LmFzc2lnbihzdHlsZSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHR0aGlzLnByb3BzLmNvbXBvbmVudCxcblx0XHRcdHByb3BzLFxuXHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdCk7XG5cdH1cbn1cblxuRmFkZS5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG5cdGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkZhZGUuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdkaXYnLFxuXHRkdXJhdGlvbjogMjAwLFxuXHRyZWY6ICdlbGVtZW50Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhZGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucyc7XG5cbmNvbnN0IEljb24gPSAocHJvcHMpID0+IChcblx0PHNwYW5cblx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGljb25zW3Byb3BzLnR5cGVdIH19XG5cdFx0ey4uLnByb3BzfVxuXHQvPlxuKTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG5cdHR5cGU6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhpY29ucykpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LWFkZG9ucy10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcnRhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucG9ydGFsRWxlbWVudCA9IG51bGw7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHApO1xuXHRcdHRoaXMucG9ydGFsRWxlbWVudCA9IHA7XG5cdFx0dGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG5cdFx0cmVuZGVyKFxuXHRcdFx0PFRyYW5zaXRpb24gey4uLnRoaXMucHJvcHN9IGNvbXBvbmVudD1cImRpdlwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvVHJhbnNpdGlvbj4sXG5cdFx0XHRcdHRoaXMucG9ydGFsRWxlbWVudFxuXHRcdCk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnBvcnRhbEVsZW1lbnQpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChcblx0JzxzdmcgZmlsbD1cIndoaXRlXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPidcblx0XHQrICc8cGF0aCBkPVwiTTIxMy43LDI1NkwyMTMuNywyNTZMMjEzLjcsMjU2TDM4MC45LDgxLjljNC4yLTQuMyw0LjEtMTEuNC0wLjItMTUuOGwtMjkuOS0zMC42Yy00LjMtNC40LTExLjMtNC41LTE1LjUtMC4yTDEzMS4xLDI0Ny45IGMtMi4yLDIuMi0zLjIsNS4yLTMsOC4xYy0wLjEsMywwLjksNS45LDMsOC4xbDIwNC4yLDIxMi43YzQuMiw0LjMsMTEuMiw0LjIsMTUuNS0wLjJsMjkuOS0zMC42YzQuMy00LjQsNC40LTExLjUsMC4yLTE1LjggTDIxMy43LDI1NnpcIi8+J1xuXHQrICc8L3N2Zz4nXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoXG5cdCc8c3ZnIGZpbGw9XCJ3aGl0ZVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj4nXG5cdFx0KyAnPHBhdGggZD1cIk0yOTguMywyNTZMMjk4LjMsMjU2TDI5OC4zLDI1NkwxMzEuMSw4MS45Yy00LjItNC4zLTQuMS0xMS40LDAuMi0xNS44bDI5LjktMzAuNmM0LjMtNC40LDExLjMtNC41LDE1LjUtMC4ybDIwNC4yLDIxMi43IGMyLjIsMi4yLDMuMiw1LjIsMyw4LjFjMC4xLDMtMC45LDUuOS0zLDguMUwxNzYuNyw0NzYuOGMtNC4yLDQuMy0xMS4yLDQuMi0xNS41LTAuMkwxMzEuMyw0NDZjLTQuMy00LjQtNC40LTExLjUtMC4yLTE1LjggTDI5OC4zLDI1NnpcIi8+J1xuXHQrICc8L3N2Zz4nXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoXG5cdCc8c3ZnIGZpbGw9XCJ3aGl0ZVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj4nXG5cdFx0KyAnPHBhdGggZD1cIk00NDMuNiwzODcuMUwzMTIuNCwyNTUuNGwxMzEuNS0xMzBjNS40LTUuNCw1LjQtMTQuMiwwLTE5LjZsLTM3LjQtMzcuNmMtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNCBMMjU2LDE5Ny44TDEyNC45LDY4LjNjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDRMNjgsMTA1LjljLTUuNCw1LjQtNS40LDE0LjIsMCwxOS42bDEzMS41LDEzMEw2OC40LDM4Ny4xIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xIGMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFsMzcuNC0zNy42YzIuNi0yLjYsNC4xLTYuMSw0LjEtOS44QzQ0Ny43LDM5My4yLDQ0Ni4yLDM4OS43LDQ0My42LDM4Ny4xelwiLz4nXG5cdCsgJzwvc3ZnPidcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChcbiAgICAnPHN2ZyBmaWxsPVwid2hpdGVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6c2tldGNoPVwiaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+JyArXG4gICAgJzxwYXRoIGQ9XCJNMjMsNyBMMjEsNyBMMjEsNyBMMjEsNS4wMDQ4ODE1IEMyMSwzLjg5NzYxNjAyIDIwLjEwNDE0MjIsMyAxOS4wMDI2MDgzLDMgTDEzLjk5NzM5MTcsMyBDMTIuODk0MjYyNywzIDEyLDMuODkzODk5OCAxMiw1LjAwNDg4MTUgTDEyLDcgTDEwLDcgTDYsNyBMNiw4IEw4LDggTDgsMjYuOTkzMTUxNyBDOCwyOC42NTM3ODgxIDkuMzMzOTYxNDksMzAgMTEuMDAwMTI2MiwzMCBMMjEuOTk5ODczOCwzMCBDMjMuNjU2Nzk3NywzMCAyNSwyOC42NjQwMDg1IDI1LDI2Ljk5MzE1MTcgTDI1LDggTDI3LDggTDI3LDcgTDIzLDcgTDIzLDcgTDIzLDcgWiBNOSw4IEw5LDI3LjAwNTQzODUgQzksMjguMTA3MDA0NCA5Ljg5MzM5NzMzLDI5IDEwLjk5MTg4NDIsMjkgTDIyLjAwODExNTgsMjkgQzIzLjEwODIwMzEsMjkgMjQsMjguMDk3NjU2MiAyNCwyNy4wMDU0Mzg1IEwyNCw4IEw5LDggTDksOCBaIE0xMiwxMCBMMTIsMjcgTDEzLDI3IEwxMywxMCBMMTIsMTAgTDEyLDEwIFogTTE2LDEwIEwxNiwyNyBMMTcsMjcgTDE3LDEwIEwxNiwxMCBMMTYsMTAgWiBNMjAsMTAgTDIwLDI3IEwyMSwyNyBMMjEsMTAgTDIwLDEwIEwyMCwxMCBaIE0xNC4wMDI5MjkzLDQgQzEzLjQ0OTAyNjgsNCAxMyw0LjQ0MjY2MDMzIDEzLDQuOTk4OTU2NTYgTDEzLDcgTDIwLDcgTDIwLDQuOTk4OTU2NTYgQzIwLDQuNDQ3MjQ4MDkgMTkuNTYyMTE4Niw0IDE4Ljk5NzA3MDcsNCBMMTQuMDAyOTI5Myw0IEwxNC4wMDI5MjkzLDQgWlwiIGlkPVwidHJhc2gtY2FuXCIvPicgK1xuICAgICc8L3N2Zz4nXG4pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRhcnJvd0xlZnQ6IHJlcXVpcmUoJy4vYXJyb3dMZWZ0JyksXG5cdGFycm93UmlnaHQ6IHJlcXVpcmUoJy4vYXJyb3dSaWdodCcpLFxuXHRjbG9zZTogcmVxdWlyZSgnLi9jbG9zZScpLFxuXHRkZWxldGU6IHJlcXVpcmUoJy4vZGVsZXRlJyksXG59O1xuIiwiY29uc3QgQ0xPU0VfU0laRSA9IDIwO1xuY29uc3QgQVJST1dfSEVJR0hUID0gMTIwO1xuY29uc3QgR0FQX0JPVFRPTSA9IDUwO1xuY29uc3QgR0FQX1RPUCA9IDQwO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdC8vIFNDRU5FXG5cdGNvbnRhaW5lcjoge1xuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC44KScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0bGVmdDogMCxcblx0XHRwYWRkaW5nOiAnMCAxMHB4Jyxcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdHRvcDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdHpJbmRleDogMTAwMSxcblx0fSxcblx0Y29udGVudDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpbjogJzAgYXV0bycsXG5cdFx0bWF4V2lkdGg6ICcxMDAlJyxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcblx0Y29udGVudEhlaWdodFNoaW06IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRsaW5lSGVpZ2h0OiAwLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHR9LFxuXG5cdC8vIElNQUdFU1xuXHRpbWFnZToge1xuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0bGluZUhlaWdodDogMCxcblx0XHRtYXhXaWR0aDogJzEwMCUnLFxuXHRcdG1hcmdpbjogJzAgYXV0bycsXG5cdFx0cGFkZGluZ0JvdHRvbTogNTAsXG5cdFx0cGFkZGluZ1RvcDogNDAsXG5cdFx0aGVpZ2h0OiAnYXV0bycsXG5cdFx0d2lkdGg6ICdhdXRvJyxcblxuXHRcdC8vIGRpc2FibGUgdXNlciBzZWxlY3Rcblx0XHRXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcblx0XHR1c2VyU2VsZWN0OiAnbm9uZScsXG5cblx0fSxcblx0ZmlndXJlOiB7XG5cdFx0YmFja2dyb3VuZEltYWdlOiAndXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwbk5EaHdlQ2NnYUdWcFoyaDBQU2MwT0hCNEp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TURBZ01UQXdJaUJ3Y21WelpYSjJaVUZ6Y0dWamRGSmhkR2x2UFNKNFRXbGtXVTFwWkNJZ1kyeGhjM005SW5WcGJDMWtaV1poZFd4MElqNDhjbVZqZENCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU1UQXdJaUJvWldsbmFIUTlJakV3TUNJZ1ptbHNiRDBpYm05dVpTSWdZMnhoYzNNOUltSnJJajQ4TDNKbFkzUStQSEpsWTNRZ0lIZzlKelEyTGpVbklIazlKelF3SnlCM2FXUjBhRDBuTnljZ2FHVnBaMmgwUFNjeU1DY2djbmc5SnpVbklISjVQU2MxSnlCbWFXeHNQU2NqWm1abVptWm1KeUIwY21GdWMyWnZjbTA5SjNKdmRHRjBaU2d3SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1ITW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9NekFnTlRBZ05UQXBJSFJ5WVc1emJHRjBaU2d3SUMwek1Da25QaUFnUEdGdWFXMWhkR1VnWVhSMGNtbGlkWFJsVG1GdFpUMG5iM0JoWTJsMGVTY2dabkp2YlQwbk1TY2dkRzg5SnpBbklHUjFjajBuTVhNbklHSmxaMmx1UFNjd0xqQTRNek16TXpNek16TXpNek16TXpNemN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BISmxZM1FnSUhnOUp6UTJMalVuSUhrOUp6UXdKeUIzYVdSMGFEMG5OeWNnYUdWcFoyaDBQU2N5TUNjZ2NuZzlKelVuSUhKNVBTYzFKeUJtYVd4c1BTY2pabVptWm1abUp5QjBjbUZ1YzJadmNtMDlKM0p2ZEdGMFpTZzJNQ0ExTUNBMU1Da2dkSEpoYm5Oc1lYUmxLREFnTFRNd0tTYytJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTZHZjR0ZqYVhSNUp5Qm1jbTl0UFNjeEp5QjBiejBuTUNjZ1pIVnlQU2N4Y3ljZ1ltVm5hVzQ5SnpBdU1UWTJOalkyTmpZMk5qWTJOalkyTmpaekp5QnlaWEJsWVhSRGIzVnVkRDBuYVc1a1pXWnBibWwwWlNjdlBqd3ZjbVZqZEQ0OGNtVmpkQ0FnZUQwbk5EWXVOU2NnZVQwbk5EQW5JSGRwWkhSb1BTYzNKeUJvWldsbmFIUTlKekl3SnlCeWVEMG5OU2NnY25rOUp6VW5JR1pwYkd3OUp5Tm1abVptWm1ZbklIUnlZVzV6Wm05eWJUMG5jbTkwWVhSbEtEa3dJRFV3SURVd0tTQjBjbUZ1YzJ4aGRHVW9NQ0F0TXpBcEp6NGdJRHhoYm1sdFlYUmxJR0YwZEhKcFluVjBaVTVoYldVOUoyOXdZV05wZEhrbklHWnliMjA5SnpFbklIUnZQU2N3SnlCa2RYSTlKekZ6SnlCaVpXZHBiajBuTUM0eU5YTW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9NVEl3SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1DNHpNek16TXpNek16TXpNek16TXpNemN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BISmxZM1FnSUhnOUp6UTJMalVuSUhrOUp6UXdKeUIzYVdSMGFEMG5OeWNnYUdWcFoyaDBQU2N5TUNjZ2NuZzlKelVuSUhKNVBTYzFKeUJtYVd4c1BTY2pabVptWm1abUp5QjBjbUZ1YzJadmNtMDlKM0p2ZEdGMFpTZ3hOVEFnTlRBZ05UQXBJSFJ5WVc1emJHRjBaU2d3SUMwek1Da25QaUFnUEdGdWFXMWhkR1VnWVhSMGNtbGlkWFJsVG1GdFpUMG5iM0JoWTJsMGVTY2dabkp2YlQwbk1TY2dkRzg5SnpBbklHUjFjajBuTVhNbklHSmxaMmx1UFNjd0xqUXhOalkyTmpZMk5qWTJOalkyTmpkekp5QnlaWEJsWVhSRGIzVnVkRDBuYVc1a1pXWnBibWwwWlNjdlBqd3ZjbVZqZEQ0OGNtVmpkQ0FnZUQwbk5EWXVOU2NnZVQwbk5EQW5JSGRwWkhSb1BTYzNKeUJvWldsbmFIUTlKekl3SnlCeWVEMG5OU2NnY25rOUp6VW5JR1pwYkd3OUp5Tm1abVptWm1ZbklIUnlZVzV6Wm05eWJUMG5jbTkwWVhSbEtERTRNQ0ExTUNBMU1Da2dkSEpoYm5Oc1lYUmxLREFnTFRNd0tTYytJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTZHZjR0ZqYVhSNUp5Qm1jbTl0UFNjeEp5QjBiejBuTUNjZ1pIVnlQU2N4Y3ljZ1ltVm5hVzQ5SnpBdU5YTW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9NakV3SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1DNDFPRE16TXpNek16TXpNek16TXpNMGN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BISmxZM1FnSUhnOUp6UTJMalVuSUhrOUp6UXdKeUIzYVdSMGFEMG5OeWNnYUdWcFoyaDBQU2N5TUNjZ2NuZzlKelVuSUhKNVBTYzFKeUJtYVd4c1BTY2pabVptWm1abUp5QjBjbUZ1YzJadmNtMDlKM0p2ZEdGMFpTZ3lOREFnTlRBZ05UQXBJSFJ5WVc1emJHRjBaU2d3SUMwek1Da25QaUFnUEdGdWFXMWhkR1VnWVhSMGNtbGlkWFJsVG1GdFpUMG5iM0JoWTJsMGVTY2dabkp2YlQwbk1TY2dkRzg5SnpBbklHUjFjajBuTVhNbklHSmxaMmx1UFNjd0xqWTJOalkyTmpZMk5qWTJOalkyTmpaekp5QnlaWEJsWVhSRGIzVnVkRDBuYVc1a1pXWnBibWwwWlNjdlBqd3ZjbVZqZEQ0OGNtVmpkQ0FnZUQwbk5EWXVOU2NnZVQwbk5EQW5JSGRwWkhSb1BTYzNKeUJvWldsbmFIUTlKekl3SnlCeWVEMG5OU2NnY25rOUp6VW5JR1pwYkd3OUp5Tm1abVptWm1ZbklIUnlZVzV6Wm05eWJUMG5jbTkwWVhSbEtESTNNQ0ExTUNBMU1Da2dkSEpoYm5Oc1lYUmxLREFnTFRNd0tTYytJQ0E4WVc1cGJXRjBaU0JoZEhSeWFXSjFkR1ZPWVcxbFBTZHZjR0ZqYVhSNUp5Qm1jbTl0UFNjeEp5QjBiejBuTUNjZ1pIVnlQU2N4Y3ljZ1ltVm5hVzQ5SnpBdU56VnpKeUJ5WlhCbFlYUkRiM1Z1ZEQwbmFXNWtaV1pwYm1sMFpTY3ZQand2Y21WamRENDhjbVZqZENBZ2VEMG5ORFl1TlNjZ2VUMG5OREFuSUhkcFpIUm9QU2MzSnlCb1pXbG5hSFE5SnpJd0p5QnllRDBuTlNjZ2NuazlKelVuSUdacGJHdzlKeU5tWm1abVptWW5JSFJ5WVc1elptOXliVDBuY205MFlYUmxLRE13TUNBMU1DQTFNQ2tnZEhKaGJuTnNZWFJsS0RBZ0xUTXdLU2MrSUNBOFlXNXBiV0YwWlNCaGRIUnlhV0oxZEdWT1lXMWxQU2R2Y0dGamFYUjVKeUJtY205dFBTY3hKeUIwYnowbk1DY2daSFZ5UFNjeGN5Y2dZbVZuYVc0OUp6QXVPRE16TXpNek16TXpNek16TXpNek5ITW5JSEpsY0dWaGRFTnZkVzUwUFNkcGJtUmxabWx1YVhSbEp5OCtQQzl5WldOMFBqeHlaV04wSUNCNFBTYzBOaTQxSnlCNVBTYzBNQ2NnZDJsa2RHZzlKemNuSUdobGFXZG9kRDBuTWpBbklISjRQU2MxSnlCeWVUMG5OU2NnWm1sc2JEMG5JMlptWm1abVppY2dkSEpoYm5ObWIzSnRQU2R5YjNSaGRHVW9Nek13SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1DNDVNVFkyTmpZMk5qWTJOalkyTmpZMmN5Y2djbVZ3WldGMFEyOTFiblE5SjJsdVpHVm1hVzVwZEdVbkx6NDhMM0psWTNRK1BDOXpkbWMrKScsXG5cdFx0YmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG5cdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG5cdFx0bGluZUhlaWdodDogMSxcblx0XHRtaW5IZWlnaHQ6IDIwMCxcblx0XHRtaW5XaWR0aDogMzAwLFxuXHRcdG1hcmdpbjogMCxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHR9LFxuXHRmaWd1cmVTaGFkb3c6IHtcblx0XHRib3R0b206IEdBUF9CT1RUT00sXG5cdFx0Ym94U2hhZG93OiAnMCAwIDhweCAtMnB4IHJnYmEoMCwwLDAsLjYpJyxcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0dG9wOiBHQVBfVE9QLFxuXHRcdHdpZHRoOiAnYXV0bycsXG5cdFx0ekluZGV4OiAtMSxcblx0fSxcblx0Zm9vdGVyOiB7XG5cdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0bGluZUhlaWdodDogMS4zLFxuXHRcdGhlaWdodDogR0FQX0JPVFRPTSxcblx0XHRtYXJnaW5Ub3A6IC1HQVBfQk9UVE9NLFxuXHRcdHBhZGRpbmdUb3A6IDUsXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXG5cdFx0dG9wOiAnMTAwJScsXG5cdFx0bGVmdDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGN1cnNvcjogJ2F1dG8nLFxuXHR9LFxuXHRmb290ZXJDb3VudDoge1xuXHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdGZvbnRTaXplOiAnLjg1ZW0nLFxuXHRcdG9wYWNpdHk6IDAuNzUsXG5cdH0sXG5cdGZvb3RlckNhcHRpb246IHtcblx0XHRwYWRkaW5nUmlnaHQ6IDgwLFxuXHR9LFxuXG5cdC8vIEJVVFRPTlNcblx0YXJyb3c6IHtcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyOiAnbm9uZScsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdG1hcmdpblRvcDogQVJST1dfSEVJR0hUIC8gLTIsXG5cdFx0bWF4V2lkdGg6IDgwLFxuXHRcdHBhZGRpbmc6IDIwLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogJzUwJScsXG5cdFx0aGVpZ2h0OiBBUlJPV19IRUlHSFQsXG5cdFx0d2lkdGg6ICcxNiUnLFxuXHRcdHpJbmRleDogMTAwMSxcblxuXHRcdC8vIGRpc2FibGUgdXNlciBzZWxlY3Rcblx0XHRXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcblx0XHRXZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsXG5cdFx0TW96VXNlclNlbGVjdDogJ25vbmUnLFxuXHRcdG1zVXNlclNlbGVjdDogJ25vbmUnLFxuXHRcdHVzZXJTZWxlY3Q6ICdub25lJyxcblx0fSxcblx0YXJyb3dOZXh0OiB7XG5cdFx0cmlnaHQ6IDAsXG5cdH0sXG5cdGFycm93UHJldjoge1xuXHRcdGxlZnQ6IDAsXG5cdH0sXG5cdGNsb3NlQmFyOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0Ly8gaGVpZ2h0OiBHQVBfVE9QLFxuXHRcdC8vIGxlZnQ6IDAsXG5cdFx0Ly8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0Ly8gdGV4dEFsaWduOiAncmlnaHQnLFxuXHRcdC8vIHRvcDogMCxcblx0XHQvLyB3aWR0aDogJzEwMCUnLFxuXHR9LFxuXHRjbG9zZUJ1dHRvbjoge1xuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRoZWlnaHQ6IENMT1NFX1NJWkUgKyAyMCxcblx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdFx0cGFkZGluZzogMTAsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0cmlnaHQ6IC0xMCxcblx0XHR0b3A6IDAsXG5cdFx0d2lkdGg6IENMT1NFX1NJWkUgKyAyMCxcblx0fSxcblx0ZGVsZXRlQmFyOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0Ly8gaGVpZ2h0OiBHQVBfVE9QLFxuXHRcdC8vIGxlZnQ6IDAsXG5cdFx0Ly8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0Ly8gdGV4dEFsaWduOiAncmlnaHQnLFxuXHRcdC8vIHRvcDogMCxcblx0XHQvLyB3aWR0aDogJzEwMCUnLFxuXHR9LFxuXHRkZWxldGVCdXR0b246IHtcblx0XHRjb2xvcjogJ3JlZCcsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogJ25vbmUnLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdGhlaWdodDogQ0xPU0VfU0laRSArIDIwLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRwYWRkaW5nOiAxMCxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRyaWdodDogLTEwLFxuXHRcdHRvcDogMCxcblx0XHR3aWR0aDogQ0xPU0VfU0laRSArIDQwLFxuXHR9LFxuXHRuYXY6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdHRleHRBbGlnbjogJ3JpZ2h0Jyxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiIsImNvbnN0IGNhblVzZURPTSA9ICEhKFxuXHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXHQmJiB3aW5kb3cuZG9jdW1lbnRcblx0JiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y2FuVXNlRE9NLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2pzcyc7XG5pbXBvcnQgcmVhY3RKc3MgZnJvbSAncmVhY3QtanNzJztcbmltcG9ydCBjYW1lbENhc2UgZnJvbSAnanNzLWNhbWVsLWNhc2UnO1xuaW1wb3J0IHB4IGZyb20gJ2pzcy1weCc7XG5pbXBvcnQgbmVzdGVkIGZyb20gJ2pzcy1uZXN0ZWQnO1xuaW1wb3J0IHZlbmRvclByZWZpeGVyIGZyb20gJ2pzcy12ZW5kb3ItcHJlZml4ZXInO1xuaW1wb3J0IFN3aXBlYWJsZSBmcm9tICdyZWFjdC1zd2lwZWFibGUnO1xuXG5leHBvcnQgbGV0IGpzcyA9IGNyZWF0ZSgpO1xuZXhwb3J0IGxldCB1c2VTaGVldCA9IHJlYWN0SnNzKGpzcyk7XG5qc3MudXNlKGNhbWVsQ2FzZSgpKTtcbmpzcy51c2UobmVzdGVkKCkpO1xuanNzLnVzZShweCgpKTtcbmpzcy51c2UodmVuZG9yUHJlZml4ZXIoKSk7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBGYWRlIGZyb20gJy4vRmFkZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL1BvcnRhbCc7XG5cbmltcG9ydCBkZWZhdWx0U3R5bGVzIGZyb20gJy4vc3R5bGVzL2RlZmF1bHQnO1xuXG5jbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyB0aGVtZSAodGhlbWVTdHlsZXMpIHtcblx0XHRjb25zdCBleHRTdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzKTtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBleHRTdHlsZXMpIHtcblx0XHRcdGlmIChrZXkgaW4gdGhlbWVTdHlsZXMpIHtcblx0XHRcdFx0ZXh0U3R5bGVzW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzW2tleV0sIHRoZW1lU3R5bGVzW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZXh0U3R5bGVzO1xuXHR9XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ290b05leHQgPSB0aGlzLmdvdG9OZXh0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nb3RvUHJldiA9IHRoaXMuZ290b1ByZXYuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUltYWdlQ2xpY2sgPSB0aGlzLmhhbmRsZUltYWdlQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQgPSB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge307XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcblx0XHRpZiAobmV4dFByb3BzLmlzT3BlbiAmJiBuZXh0UHJvcHMuZW5hYmxlS2V5Ym9hcmRJbnB1dCkge1xuXHRcdFx0aWYgKHV0aWxzLmNhblVzZURPTSkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuXHRcdFx0aWYgKHV0aWxzLmNhblVzZURPTSkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcblx0XHRcdHRoaXMuaGFuZGxlUmVzaXplKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh1dGlscy5jYW5Vc2VET00pIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlib2FyZElucHV0KTtcblx0XHRcdGlmICh1dGlscy5jYW5Vc2VET00pIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG5leHRQcm9wcy5pc09wZW4pIHtcblx0XHRcdGlmICh1dGlscy5jYW5Vc2VET00pIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHV0aWxzLmNhblVzZURPTSkgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UgKGUpIHtcblx0XHRpZiAoZS50YXJnZXQuaWQgIT09ICdyZWFjdC1pbWFnZXMtY29udGFpbmVyJykgcmV0dXJuO1xuXG5cdFx0aWYgKHRoaXMucHJvcHMuYmFja2Ryb3BDbG9zZXNNb2RhbCAmJiB0aGlzLnByb3BzLm9uQ2xvc2UpIHtcblx0XHRcdHRoaXMucHJvcHMub25DbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdGdvdG9OZXh0IChldmVudCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gKHRoaXMucHJvcHMuaW1hZ2VzLmxlbmd0aCAtIDEpKSByZXR1cm47XG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGlja05leHQoKTtcblx0fVxuXG5cdGdvdG9QcmV2IChldmVudCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gMCkgcmV0dXJuO1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2tQcmV2KCk7XG5cdH1cblxuXHRoYW5kbGVJbWFnZUNsaWNrIChlKSB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLm9uQ2xpY2tTaG93TmV4dEltYWdlKSByZXR1cm47XG5cblx0XHR0aGlzLmdvdG9OZXh0KGUpO1xuXHR9XG5cblx0aGFuZGxlSW1hZ2VMb2FkIChlLCBpbmRleCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdpbWFnZScsIGluZGV4LCAnbG9hZGVkJywgZSk7XG5cdH1cblxuXHRoYW5kbGVLZXlib2FyZElucHV0IChldmVudCkge1xuXHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuXHRcdFx0dGhpcy5nb3RvUHJldihldmVudCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHR0aGlzLmdvdG9OZXh0KGV2ZW50KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdHRoaXMucHJvcHMub25DbG9zZSgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGhhbmRsZVJlc2l6ZSAoKSB7XG5cdFx0aWYgKCF1dGlscy5jYW5Vc2VET00pIHJldHVybjtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IHx8IDAsXG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXJBcnJvd05leHQgKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gKHRoaXMucHJvcHMuaW1hZ2VzLmxlbmd0aCAtIDEpKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gdGl0bGU9XCJOZXh0IChSaWdodCBhcnJvdyBrZXkpXCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5hcnJvd30gJHtjbGFzc2VzLmFycm93TmV4dH1gfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmdvdG9OZXh0fVxuXHRcdFx0XHRvblRvdWNoRW5kPXt0aGlzLmdvdG9OZXh0fVxuXHRcdFx0PlxuXHRcdFx0XHQ8SWNvbiB0eXBlPVwiYXJyb3dSaWdodFwiIC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyQXJyb3dQcmV2ICgpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5jdXJyZW50SW1hZ2UgPT09IDApIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcy5zaGVldDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIHRpdGxlPVwiUHJldmlvdXMgKExlZnQgYXJyb3cga2V5KVwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9e2Ake2NsYXNzZXMuYXJyb3d9ICR7Y2xhc3Nlcy5hcnJvd1ByZXZ9YH1cblx0XHRcdFx0b25DbGljaz17dGhpcy5nb3RvUHJldn1cblx0XHRcdFx0b25Ub3VjaEVuZD17dGhpcy5nb3RvUHJldn1cblx0XHRcdD5cblx0XHRcdFx0PEljb24gdHlwZT1cImFycm93TGVmdFwiIC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyQ2xvc2VCdXR0b24gKCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5zaG93Q2xvc2VCdXR0b24pIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcy5zaGVldDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJhcn0+XG5cdFx0XHRcdDxidXR0b24gdGl0bGU9XCJDbG9zZSAoRXNjKVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfT5cblx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwiY2xvc2VcIiAvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXJEZWxldGVCdXR0b24oKSB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLnNob3dEZWxldGVCdXR0b24pIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcy5zaGVldDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWxldGVCYXJ9PlxuXHRcdFx0XHQ8YnV0dG9uIHRpdGxlPVwiRGVsZXRlIEltYWdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZUJ1dHRvbn0gb25DbGljaz17dGhpcy5wcm9wcy5vbkRlbGV0ZX0+XG5cdFx0XHRcdFx0PEljb24gdHlwZT1cImRlbGV0ZVwiLz5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyRGlhbG9nICgpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZhZGUgaWQ9XCJyZWFjdC1pbWFnZXMtY29udGFpbmVyXCJcblx0XHRcdFx0a2V5PVwiZGlhbG9nXCJcblx0XHRcdFx0ZHVyYXRpb249ezI1MH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cblx0XHRcdFx0b25DbGljaz17dGhpcy5jbG9zZX1cblx0XHRcdFx0b25Ub3VjaEVuZD17dGhpcy5jbG9zZX1cblx0XHRcdD5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRIZWlnaHRTaGltfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZ9PlxuXHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyRGVsZXRlQnV0dG9uKCl9XG5cdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckltYWdlcygpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3RoaXMucmVuZGVyQXJyb3dQcmV2KCl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlckFycm93TmV4dCgpfVxuXHRcdFx0PC9GYWRlPlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyRm9vdGVyIChjYXB0aW9uKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SW1hZ2UsIGltYWdlcywgc2hvd0ltYWdlQ291bnQgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzLnNoZWV0O1xuXG5cdFx0aWYgKCFjYXB0aW9uICYmICFzaG93SW1hZ2VDb3VudCkgcmV0dXJuIG51bGw7XG5cblx0XHRjb25zdCBpbWFnZUNvdW50ID0gc2hvd0ltYWdlQ291bnRcblx0XHRcdD8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyQ291bnR9PntjdXJyZW50SW1hZ2UgKyAxfSBvZiB7aW1hZ2VzLmxlbmd0aH08L2Rpdj5cblx0XHRcdDogbnVsbDtcblx0XHRjb25zdCBmaWdjYXB0aW9uID0gY2FwdGlvblxuXHRcdFx0PyA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyQ2FwdGlvbn0+e2NhcHRpb259PC9maWdjYXB0aW9uPlxuXHRcdFx0OiBudWxsO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG5cdFx0XHRcdHtpbWFnZUNvdW50fVxuXHRcdFx0XHR7ZmlnY2FwdGlvbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0cmVuZGVySW1hZ2VzICgpIHtcblx0XHRjb25zdCB7IGltYWdlcywgY3VycmVudEltYWdlIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcy5zaGVldDtcblx0XHRjb25zdCB7IHdpbmRvd0hlaWdodCB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGlmICghaW1hZ2VzIHx8ICFpbWFnZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuXHRcdGNvbnN0IGltYWdlID0gaW1hZ2VzW2N1cnJlbnRJbWFnZV07XG5cblx0XHRsZXQgc3Jjc2V0O1xuXHRcdGxldCBzaXplcztcblxuXHRcdGlmIChpbWFnZS5zcmNzZXQpIHtcblx0XHRcdHNyY3NldCA9IGltYWdlLnNyY3NldC5qb2luKCk7XG5cdFx0XHRzaXplcyA9ICcxMDB2dyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxmaWd1cmUga2V5PXtgaW1hZ2UgJHtjdXJyZW50SW1hZ2V9YH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmZpZ3VyZX1cblx0XHRcdFx0c3R5bGU9e3sgbWF4V2lkdGg6IHRoaXMucHJvcHMud2lkdGggfX1cblx0XHRcdD5cblx0XHRcdFx0PFN3aXBlYWJsZSBvblN3aXBlZExlZnQ9e3RoaXMuZ290b05leHR9IG9uU3dpcGVkUmlnaHQ9e3RoaXMuZ290b1ByZXZ9ID5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW1hZ2VDbGlja31cblx0XHRcdFx0XHRcdG9uTG9hZD17ZSA9PiB0aGlzLmhhbmRsZUltYWdlTG9hZChlLCBjdXJyZW50SW1hZ2UpfVxuXHRcdFx0XHRcdFx0c2l6ZXM9e3NpemVzfVxuXHRcdFx0XHRcdFx0c3JjPXtpbWFnZS5zcmN9XG5cdFx0XHRcdFx0XHRzcmNTZXQ9e3NyY3NldH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogdGhpcy5wcm9wcy5vbkNsaWNrU2hvd05leHRJbWFnZSA/ICdwb2ludGVyJyA6ICdhdXRvJyxcblx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiB3aW5kb3dIZWlnaHQsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvU3dpcGVhYmxlPlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJGb290ZXIoaW1hZ2VzW2N1cnJlbnRJbWFnZV0uY2FwdGlvbil9XG5cdFx0XHQ8L2ZpZ3VyZT5cblx0XHQpO1xuXHR9XG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQb3J0YWw+XG5cdFx0XHRcdHt0aGlzLnJlbmRlckRpYWxvZygpfVxuXHRcdFx0PC9Qb3J0YWw+XG5cdFx0KTtcblx0fVxufVxuXG5MaWdodGJveC5kaXNwbGF5TmFtZSA9ICdMaWdodGJveCc7XG5cbkxpZ2h0Ym94LnByb3BUeXBlcyA9IHtcblx0YmFja2Ryb3BDbG9zZXNNb2RhbDogUHJvcFR5cGVzLmJvb2wsXG5cdGN1cnJlbnRJbWFnZTogUHJvcFR5cGVzLm51bWJlcixcblx0ZW5hYmxlS2V5Ym9hcmRJbnB1dDogUHJvcFR5cGVzLmJvb2wsXG5cdGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXG5cdFx0UHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0c3Jjc2V0OiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0XHRjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdH0pXG5cdCkuaXNSZXF1aXJlZCxcblx0aXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblx0b25DbGlja05leHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uQ2xpY2tQcmV2OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRvbkNsaWNrU2hvd05leHRJbWFnZTogUHJvcFR5cGVzLmJvb2wsXG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRzaGVldDogUHJvcFR5cGVzLm9iamVjdCxcblx0c2hvd0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcblx0c2hvd0RlbGV0ZUJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG5cdHNob3dJbWFnZUNvdW50OiBQcm9wVHlwZXMuYm9vbCxcblx0d2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5MaWdodGJveC5kZWZhdWx0UHJvcHMgPSB7XG5cdGVuYWJsZUtleWJvYXJkSW5wdXQ6IHRydWUsXG5cdGN1cnJlbnRJbWFnZTogMCxcblx0b25DbGlja1Nob3dOZXh0SW1hZ2U6IHRydWUsXG5cdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0c2hvd0RlbGV0ZUJ1dHRvbjogdHJ1ZSxcblx0c2hvd0ltYWdlQ291bnQ6IHRydWUsXG5cdHdpZHRoOiA5MDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTaGVldChMaWdodGJveCwgZGVmYXVsdFN0eWxlcyk7XG4iXX0=
