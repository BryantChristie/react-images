require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var _componentsGallery = require('./components/Gallery');

var _componentsGallery2 = _interopRequireDefault(_componentsGallery);

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var IMAGE_NAMES = ['cat', 'cats', 'chameleon', 'dog', 'ducks', 'goat', 'ostrich', 'pigeon', 'pigs', 'seagulls', 'wasp', 'yawn'];
var IMAGE_MAP = IMAGE_NAMES.map(function (img) {
	return {
		src: './images/800-' + img + '.jpg',
		thumbnail: './images/thumbnail-' + img + '.jpg',
		srcset: ['./images/1024-' + img + '.jpg 1024w', './images/800-' + img + '.jpg 800w', './images/500-' + img + '.jpg 500w', './images/320-' + img + '.jpg 320w'],
		caption: capitalizeFirstLetter(img)
	};
});
var IMAGES_PRELOAD = IMAGE_MAP.map(function (img) {
	return _react2['default'].createElement('img', { key: img.caption, src: './images/1024-' + img + '.jpg' });
});

(0, _reactDom.render)(_react2['default'].createElement(
	'div',
	null,
	_react2['default'].createElement(
		'p',
		{ style: { marginBottom: 40 } },
		'Use your keyboard to navigate ',
		_react2['default'].createElement(
			'kbd',
			null,
			'left'
		),
		' ',
		_react2['default'].createElement(
			'kbd',
			null,
			'right'
		),
		' ',
		_react2['default'].createElement(
			'kbd',
			null,
			'esc'
		),
		' — Also, try resizing your browser window.'
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: IMAGE_MAP }),
	_react2['default'].createElement(
		'p',
		null,
		'Images courtesy of ',
		_react2['default'].createElement(
			'a',
			{ href: 'http://gratisography.com/', target: '_blank' },
			'Gratisography'
		)
	),
	_react2['default'].createElement(
		'div',
		{ style: { display: 'none' } },
		IMAGES_PRELOAD
	)
), document.getElementById('example'));

},{"./components/Gallery":2,"react":undefined,"react-dom":undefined,"react-images":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var Gallery = (function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery() {
		_classCallCheck(this, Gallery);

		_get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this);

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.deleteImage = this.deleteImage.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}

	_createClass(Gallery, [{
		key: 'openLightbox',
		value: function openLightbox(index, event) {
			event.preventDefault();
			this.setState({
				currentImage: index,
				lightboxIsOpen: true
			});
		}
	}, {
		key: 'closeLightbox',
		value: function closeLightbox() {
			this.setState({
				currentImage: 0,
				lightboxIsOpen: false
			});
		}
	}, {
		key: 'deleteImage',
		value: function deleteImage() {
			console.log('do something to handle deleting image');
		}
	}, {
		key: 'gotoPrevious',
		value: function gotoPrevious() {
			this.setState({
				currentImage: this.state.currentImage - 1
			});
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext() {
			this.setState({
				currentImage: this.state.currentImage + 1
			});
		}
	}, {
		key: 'renderGallery',
		value: function renderGallery() {
			var _this = this;

			if (!this.props.images) return;
			var gallery = this.props.images.map(function (obj, i) {
				return _react2['default'].createElement(
					'a',
					{ key: i, href: obj.src, onClick: function (event) {
							return _this.openLightbox(i, event);
						}, style: styles.thumbnail },
					_react2['default'].createElement('img', { src: obj.thumbnail, style: styles.thumbnailImage, width: styles.thumbnail.size, height: styles.thumbnail.size })
				);
			});

			return _react2['default'].createElement(
				'div',
				{ style: styles.gallery },
				gallery
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'section' },
				this.props.heading && _react2['default'].createElement(
					'h2',
					null,
					this.props.heading
				),
				this.props.subheading && _react2['default'].createElement(
					'p',
					null,
					this.props.subheading
				),
				this.renderGallery(),
				_react2['default'].createElement(_reactImages2['default'], {
					currentImage: this.state.currentImage,
					images: this.props.images,
					isOpen: this.state.lightboxIsOpen,
					onClickPrev: this.gotoPrevious,
					onClickNext: this.gotoNext,
					onClose: this.closeLightbox,
					onDelete: this.deleteImage,
					theme: this.props.theme
				})
			);
		}
	}]);

	return Gallery;
})(_react.Component);

;

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	images: _react.PropTypes.array,
	heading: _react.PropTypes.string,
	subheading: _react.PropTypes.string,
	sepia: _react.PropTypes.bool
};

var THUMBNAIL_SIZE = 72;

var styles = {
	gallery: {
		marginLeft: -5,
		marginRight: -5,
		overflow: 'hidden'
	},
	thumbnail: {
		backgroundSize: 'cover',
		borderRadius: 3,
		float: 'left',
		height: THUMBNAIL_SIZE,
		margin: 5,
		overflow: 'hidden',
		width: THUMBNAIL_SIZE
	},
	thumbnailImage: {
		display: 'block',
		height: 'auto',
		maxWidth: '100%'
	}
};

// height: THUMBNAIL_SIZE,
// left: '50%',
// position: 'relative',
//
// WebkitTransform: 'translateX(-50%)',
// MozTransform:    'translateX(-50%)',
// msTransform:     'translateX(-50%)',
// transform:       'translateX(-50%)',
exports['default'] = Gallery;
module.exports = exports['default'];

},{"react":undefined,"react-images":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9yZ2FuaGVpbWJlY2svV2Vic3Rvcm1Qcm9qZWN0cy9mb3Jrcy9yZWFjdC1pbWFnZXMvZXhhbXBsZXMvc3JjL2FwcC5qcyIsIi9Vc2Vycy9tb3JnYW5oZWltYmVjay9XZWJzdG9ybVByb2plY3RzL2ZvcmtzL3JlYWN0LWltYWdlcy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9HYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztxQkNBa0IsT0FBTzs7Ozt3QkFDRixXQUFXOzsyQkFDYixjQUFjOzs7O2lDQUNmLHNCQUFzQjs7OztBQUUxQyxTQUFTLHFCQUFxQixDQUFDLEdBQUcsRUFBRTtBQUNuQyxRQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNsRDs7QUFFRCxJQUFNLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbEksSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7UUFBSztBQUN6QyxLQUFHLG9CQUFrQixHQUFHLFNBQU07QUFDOUIsV0FBUywwQkFBd0IsR0FBRyxTQUFNO0FBQzFDLFFBQU0sRUFBRSxvQkFDVSxHQUFHLG1DQUNKLEdBQUcsa0NBQ0gsR0FBRyxrQ0FDSCxHQUFHLGVBQ25CO0FBQ0QsU0FBTyxFQUFFLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztFQUNuQztDQUFDLENBQUMsQ0FBQztBQUNKLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFH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LENBQUMsS0FBSyxBQUFDO01BQ3ZCO0lBQ0csQ0FDTDtHQUNGOzs7UUEzRUksT0FBTzs7O0FBNEVaLENBQUM7O0FBRUYsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDaEMsT0FBTyxDQUFDLFNBQVMsR0FBRztBQUNuQixPQUFNLEVBQUUsaUJBQVUsS0FBSztBQUN2QixRQUFPLEVBQUUsaUJBQVUsTUFBTTtBQUN6QixXQUFVLEVBQUUsaUJBQVUsTUFBTTtBQUM1QixNQUFLLEVBQUUsaUJBQVUsSUFBSTtDQUNyQixDQUFDOztBQUVGLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQzs7QUFFMUIsSUFBTSxNQUFNLEdBQUc7QUFDZCxRQUFPLEVBQUU7QUFDUixZQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2QsYUFBVyxFQUFFLENBQUMsQ0FBQztBQUNmLFVBQVEsRUFBRSxRQUFRO0VBQ2xCO0FBQ0QsVUFBUyxFQUFFO0FBQ1YsZ0JBQWMsRUFBRSxPQUFPO0FBQ3ZCLGNBQVksRUFBRSxDQUFDO0FBQ2YsT0FBSyxFQUFFLE1BQU07QUFDYixRQUFNLEVBQUUsY0FBYztBQUN0QixRQUFNLEVBQUUsQ0FBQztBQUNULFVBQVEsRUFBRSxRQUFRO0FBQ2xCLE9BQUssRUFBRSxjQUFjO0VBQ3JCO0FBQ0QsZUFBYyxFQUFFO0FBQ2YsU0FBTyxFQUFFLE9BQU87QUFDaEIsUUFBTSxFQUFFLE1BQU07QUFDZCxVQUFRLEVBQUUsTUFBTTtFQVNoQjtDQUNELENBQUM7Ozs7Ozs7Ozs7cUJBRWEsT0FBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZXMnO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9jb21wb25lbnRzL0dhbGxlcnknO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG5cdHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmNvbnN0IElNQUdFX05BTUVTID0gWydjYXQnLCAnY2F0cycsICdjaGFtZWxlb24nLCAnZG9nJywgJ2R1Y2tzJywgJ2dvYXQnLCAnb3N0cmljaCcsICdwaWdlb24nLCAncGlncycsICdzZWFndWxscycsICd3YXNwJywgJ3lhd24nXTtcbmNvbnN0IElNQUdFX01BUCA9IElNQUdFX05BTUVTLm1hcChpbWcgPT4gKHtcblx0c3JjOiBgLi9pbWFnZXMvODAwLSR7aW1nfS5qcGdgLFxuXHR0aHVtYm5haWw6IGAuL2ltYWdlcy90aHVtYm5haWwtJHtpbWd9LmpwZ2AsXG5cdHNyY3NldDogW1xuXHRcdGAuL2ltYWdlcy8xMDI0LSR7aW1nfS5qcGcgMTAyNHdgLFxuXHRcdGAuL2ltYWdlcy84MDAtJHtpbWd9LmpwZyA4MDB3YCxcblx0XHRgLi9pbWFnZXMvNTAwLSR7aW1nfS5qcGcgNTAwd2AsXG5cdFx0YC4vaW1hZ2VzLzMyMC0ke2ltZ30uanBnIDMyMHdgLFxuXHRdLFxuXHRjYXB0aW9uOiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoaW1nKVxufSkpO1xuY29uc3QgSU1BR0VTX1BSRUxPQUQgPSBJTUFHRV9NQVAubWFwKGltZyA9PiB7XG5cdHJldHVybiA8aW1nIGtleT17aW1nLmNhcHRpb259IHNyYz17YC4vaW1hZ2VzLzEwMjQtJHtpbWd9LmpwZ2B9IC8+O1xufSk7XG5cbnJlbmRlciAoXG5cdDxkaXY+XG5cdFx0PHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5Vc2UgeW91ciBrZXlib2FyZCB0byBuYXZpZ2F0ZSA8a2JkPmxlZnQ8L2tiZD4gPGtiZD5yaWdodDwva2JkPiA8a2JkPmVzYzwva2JkPiAmbWRhc2g7IEFsc28sIHRyeSByZXNpemluZyB5b3VyIGJyb3dzZXIgd2luZG93LjwvcD5cblx0XHQ8R2FsbGVyeSBpbWFnZXM9e0lNQUdFX01BUH0gLz5cblx0XHQ8cD5JbWFnZXMgY291cnRlc3kgb2YgPGEgaHJlZj1cImh0dHA6Ly9ncmF0aXNvZ3JhcGh5LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HcmF0aXNvZ3JhcGh5PC9hPjwvcD5cblx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT57SU1BR0VTX1BSRUxPQUR9PC9kaXY+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZXMnO1xuXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsaWdodGJveElzT3BlbjogZmFsc2UsXG5cdFx0XHRjdXJyZW50SW1hZ2U6IDAsXG5cdFx0fTtcblxuXHRcdHRoaXMuY2xvc2VMaWdodGJveCA9IHRoaXMuY2xvc2VMaWdodGJveC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGVsZXRlSW1hZ2UgPSB0aGlzLmRlbGV0ZUltYWdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nb3RvTmV4dCA9IHRoaXMuZ290b05leHQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdvdG9QcmV2aW91cyA9IHRoaXMuZ290b1ByZXZpb3VzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTGlnaHRib3ggPSB0aGlzLm9wZW5MaWdodGJveC5iaW5kKHRoaXMpO1xuXHR9XG5cdG9wZW5MaWdodGJveCAoaW5kZXgsIGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnRJbWFnZTogaW5kZXgsXG5cdFx0XHRsaWdodGJveElzT3BlbjogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXHRjbG9zZUxpZ2h0Ym94ICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnRJbWFnZTogMCxcblx0XHRcdGxpZ2h0Ym94SXNPcGVuOiBmYWxzZSxcblx0XHR9KTtcblx0fVxuXHRkZWxldGVJbWFnZSAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2RvIHNvbWV0aGluZyB0byBoYW5kbGUgZGVsZXRpbmcgaW1hZ2UnKTtcblx0fVxuXHRnb3RvUHJldmlvdXMgKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudEltYWdlOiB0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZSAtIDEsXG5cdFx0fSk7XG5cdH1cblx0Z290b05leHQgKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudEltYWdlOiB0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZSArIDEsXG5cdFx0fSk7XG5cdH1cblx0cmVuZGVyR2FsbGVyeSAoKSB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLmltYWdlcykgcmV0dXJuO1xuXHRcdGNvbnN0IGdhbGxlcnkgPSB0aGlzLnByb3BzLmltYWdlcy5tYXAoKG9iaiwgaSkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGEga2V5PXtpfSBocmVmPXtvYmouc3JjfSBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMub3BlbkxpZ2h0Ym94KGksIGV2ZW50KX0gc3R5bGU9e3N0eWxlcy50aHVtYm5haWx9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtvYmoudGh1bWJuYWlsfSBzdHlsZT17c3R5bGVzLnRodW1ibmFpbEltYWdlfSB3aWR0aD17c3R5bGVzLnRodW1ibmFpbC5zaXplfSBoZWlnaHQ9e3N0eWxlcy50aHVtYm5haWwuc2l6ZX0gLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuZ2FsbGVyeX0+XG5cdFx0XHRcdHtnYWxsZXJ5fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cblx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGluZyAmJiA8aDI+e3RoaXMucHJvcHMuaGVhZGluZ308L2gyPn1cblx0XHRcdFx0e3RoaXMucHJvcHMuc3ViaGVhZGluZyAmJiA8cD57dGhpcy5wcm9wcy5zdWJoZWFkaW5nfTwvcD59XG5cdFx0XHRcdHt0aGlzLnJlbmRlckdhbGxlcnkoKX1cblx0XHRcdFx0PExpZ2h0Ym94XG5cdFx0XHRcdFx0Y3VycmVudEltYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZX1cblx0XHRcdFx0XHRpbWFnZXM9e3RoaXMucHJvcHMuaW1hZ2VzfVxuXHRcdFx0XHRcdGlzT3Blbj17dGhpcy5zdGF0ZS5saWdodGJveElzT3Blbn1cblx0XHRcdFx0XHRvbkNsaWNrUHJldj17dGhpcy5nb3RvUHJldmlvdXN9XG5cdFx0XHRcdFx0b25DbGlja05leHQ9e3RoaXMuZ290b05leHR9XG5cdFx0XHRcdFx0b25DbG9zZT17dGhpcy5jbG9zZUxpZ2h0Ym94fVxuXHRcdFx0XHRcdG9uRGVsZXRlPXt0aGlzLmRlbGV0ZUltYWdlfVxuXHRcdFx0XHRcdHRoZW1lPXt0aGlzLnByb3BzLnRoZW1lfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuR2FsbGVyeS5kaXNwbGF5TmFtZSA9ICdHYWxsZXJ5JztcbkdhbGxlcnkucHJvcFR5cGVzID0ge1xuXHRpbWFnZXM6IFByb3BUeXBlcy5hcnJheSxcblx0aGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcblx0c3ViaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcblx0c2VwaWE6IFByb3BUeXBlcy5ib29sLFxufTtcblxuY29uc3QgVEhVTUJOQUlMX1NJWkUgPSA3MjtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRnYWxsZXJ5OiB7XG5cdFx0bWFyZ2luTGVmdDogLTUsXG5cdFx0bWFyZ2luUmlnaHQ6IC01LFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0fSxcblx0dGh1bWJuYWlsOiB7XG5cdFx0YmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG5cdFx0Ym9yZGVyUmFkaXVzOiAzLFxuXHRcdGZsb2F0OiAnbGVmdCcsXG5cdFx0aGVpZ2h0OiBUSFVNQk5BSUxfU0laRSxcblx0XHRtYXJnaW46IDUsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdHdpZHRoOiBUSFVNQk5BSUxfU0laRSxcblx0fSxcblx0dGh1bWJuYWlsSW1hZ2U6IHtcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdG1heFdpZHRoOiAnMTAwJScsXG5cdFx0Ly8gaGVpZ2h0OiBUSFVNQk5BSUxfU0laRSxcblx0XHQvLyBsZWZ0OiAnNTAlJyxcblx0XHQvLyBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHQvL1xuXHRcdC8vIFdlYmtpdFRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHRcdC8vIE1velRyYW5zZm9ybTogICAgJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHRcdC8vIG1zVHJhbnNmb3JtOiAgICAgJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHRcdC8vIHRyYW5zZm9ybTogICAgICAgJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdfQ==
