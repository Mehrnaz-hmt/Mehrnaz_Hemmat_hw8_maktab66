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




let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());