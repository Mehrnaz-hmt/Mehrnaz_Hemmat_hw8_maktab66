class Circle {
	constructor(R){
		this.radius = R;
		}
	getArea(){
		return Math.PI*Math.pow(this.radius, 2)
	}
	getPerimeter(){
		return 2*Math.PI*this.radius
	}
}


// unquote and use run to test these cases:

let q = new Circle(11);
console.log(q.getArea());
console.log(q.getPerimeter());