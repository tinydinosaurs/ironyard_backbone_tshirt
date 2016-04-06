// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import Backbone from 'backbone';
import $ from 'jquery';

const tshirts = [
  {
    id: 1,
    imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/1_front.png",
    imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/1_back.png",
    title: "Save my Trees",
    price: 29,
    color: "blue"

  },
  {
    id: 2,
    imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/2_front.png",
    imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/2_back.png",
    title: "Nature Lover",
    price: 19,
    color: "pink"

  },
  {
    id: 3,
    imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/3_front.png",
    imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/3_back.png",
    title: "Forrest Walk",
    price: 39,
    color: "orange"

  }
]


// this is like creating a constructor to make html elements
const basicView = Backbone.View.extend({
	// this is how we put stuff inside our section (see below)
	initialize: function(i) {
		this.i  = i;
	},
	template: function() {
		return `
  			<div class = "outer-box">
	  			<span class="arrow"><i class="fa fa-repeat"></i></span>
	  			<div class="inner-box">
		  			<div class="little-container">
		  				<img class="front" src='${tshirts[this.i].imageUrlFront}'>
		  				<img class="back">
		  			</div>	
	  			</div>
		  		<ul class="hover-boxes">
		  			<li><i class="fa fa-exchange"></i></li>
		  			<li><i class="fa fa-heart"></i></li>
		  			<li>XL</li>
		  			<li class="${tshirts[this.i].color}"><i class="fa fa-square"></i></li>
		  			<li><i class="fa fa-shopping-cart"></i></li>
		  		</ul>
	  		</div>
		  	<div class="info-box">
		  		<h3>${tshirts[this.i].title}</h3>
		  		<span>$${tshirts[this.i].price}</span>
		  	</div>
		`
	},
	// this changes the default div at el to be a section instead
	tagName: 'div',
	className: 'flex-item',
	render: function() {
		this.$el.html(this.template());
		$('section').append(this.el);
	}
});

var firstTshirt = new basicView(0);
var secondTshirt = new basicView(1);
var thirdTshirt = new basicView(2);

firstTshirt.render();
secondTshirt.render();
thirdTshirt.render();

