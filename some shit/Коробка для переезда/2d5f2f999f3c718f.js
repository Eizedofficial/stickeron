(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABQAAQAAAhgXAYQgYAXghAAQggAAgYgXQgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");
	this.shape.setTransform(8,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_1.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-1,-1,18,18), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC600").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,19,19), null);


// stage content:
(lib.анимациясырая = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKQgEgDAAgHQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFADQgEAFgGAAQgFAAgFgFg");
	this.shape.setTransform(308.9,324.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAvIgDgLIghAAIgDALIggAAIAihdIAjAAIAiBdgAgIALIARAAIgJgdg");
	this.shape_1.setTransform(296.3,321.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAvIgUghIgFAHIAAAaIgcAAIAAhdIAcAAIAAAjIAXgjIAjAAIgkAsIAlAxg");
	this.shape_2.setTransform(287.1,321.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAsQgLgEgGgHIAOgSQAFADAIADQAIACAGABQAGAAAEgCQAEgCAAgDQAAgDgEgBIgLgBIgTAAIAAgXIATAAQANAAAAgGQAAgFgOAAQgHAAgGACQgHACgEAEIgNgSQAGgHALgEQAKgEAMAAQATAAAKAHQAMAHAAAMQgBAHgGAGQgFAGgJABQAIABAHAFQAHAGAAAJQAAAMgMAJQgMAHgSAAQgMAAgMgEg");
	this.shape_3.setTransform(277.4,321.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwAoIAMgVQAFAEAGAAQAHAAADgEIghhBIAgAAIAQAmIARgmIAgAAIgmBKQgKATgXAAQgQAAgKgHg");
	this.shape_4.setTransform(268.4,321.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpAvIAAhdIAxAAQAQAAAJAKQAJAJAAANQAAAOgJAIQgJAJgQAAIgUAAIAAAegAgMgGIAQAAQAEAAADgCQACgCAAgEQAAgDgCgCQgDgCgEAAIgQAAg");
	this.shape_5.setTransform(259.4,321.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIBGAAIAAAZIgpAAIAABEg");
	this.shape_6.setTransform(250.5,321.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAvIgDgLIghAAIgDALIggAAIAihdIAjAAIAiBdgAgIALIARAAIgJgdg");
	this.shape_7.setTransform(241.2,321.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAsQgMgEgGgHIAOgSQAFADAIADQAHACAHABQAGAAAEgCQAEgCAAgDQAAgDgDgBIgMgBIgTAAIAAgXIATAAQANAAAAgGQAAgFgOAAQgGAAgHACQgGACgFAEIgNgSQAGgHALgEQAKgEAMAAQATAAALAHQAKAHABAMQAAAHgHAGQgFAGgJABQAIABAHAFQAHAGAAAJQAAAMgMAJQgMAHgSAAQgNAAgKgEg");
	this.shape_8.setTransform(231.7,321.1);

	this.text = new cjs.Text("", "14px 'ProximaNova-Black'", "#FFFFFF");
	this.text.lineHeight = 19;
	this.text.parent = this;
	this.text.setTransform(312.6,308.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKAvIgUghIgFAHIAAAaIgcAAIAAhdIAcAAIAAAjIAYgjIAiAAIgjAsIAlAxg");
	this.shape_9.setTransform(287.4,321);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAsQgMgEgGgHIAOgTQAFAEAIADQAHACAHAAQAGAAAEgCQAEgCAAgCQAAgCgDgCIgMgBIgTAAIAAgYIATAAQANAAAAgEQAAgHgOAAQgGABgHACQgHACgEAEIgNgSQAGgHALgEQAKgEAMAAQATAAALAHQALAHgBALQABAIgHAGQgFAGgJACQAIAAAHAFQAHAGAAAJQAAANgMAHQgMAIgSAAQgMAAgLgEg");
	this.shape_10.setTransform(277.7,321.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwAoIALgWQAHAFAGAAQAGAAADgFIghhAIAgAAIAQAlIARglIAgAAIglBJQgLAVgXAAQgQAAgKgIg");
	this.shape_11.setTransform(268.7,321.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAvIAAhdIBGAAIAAAZIgqAAIAABEg");
	this.shape_12.setTransform(250.8,321);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAsQgMgEgGgHIAOgTQAFAEAIADQAIACAGAAQAGAAAEgCQAEgCAAgCQAAgCgDgCIgMgBIgTAAIAAgYIATAAQANAAAAgEQAAgHgOAAQgHABgGACQgGACgFAEIgOgSQAHgHAKgEQALgEAMAAQATAAAKAHQAMAHgBALQAAAIgFAGQgGAGgJACQAJAAAGAFQAHAGAAAJQAAANgMAHQgMAIgSAAQgMAAgLgEg");
	this.shape_13.setTransform(232,321.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKAvIgUghIgFAHIAAAaIgdAAIAAhdIAdAAIAAAjIAXgjIAjAAIgjAsIAkAxg");
	this.shape_14.setTransform(287.3,321.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAsQgLgEgGgHIAOgSQAFADAIADQAHACAHABQAGAAAEgCQAEgCAAgDQAAgDgEgBIgLgBIgTAAIAAgXIATAAQANAAAAgGQAAgFgOAAQgGAAgHACQgGACgFAEIgOgSQAHgHAKgEQALgEAMAAQATAAAKAHQALAHAAAMQAAAHgFAGQgGAGgJABQAIABAHAFQAHAGAAAJQAAAMgMAJQgMAHgSAAQgNAAgLgEg");
	this.shape_15.setTransform(277.5,321.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwAoIAMgVQAGAEAFAAQAHAAADgEIghhBIAgAAIAQAmIASgmIAfAAIgmBKQgKATgXAAQgQAAgKgHg");
	this.shape_16.setTransform(268.5,321.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAsQgLgEgGgHIAOgSQAFADAIADQAHACAHABQAGAAAEgCQAEgCAAgDQAAgDgEgBIgLgBIgTAAIAAgXIATAAQANAAAAgGQAAgFgOAAQgHAAgGACQgHACgEAEIgNgSQAGgHAKgEQALgEAMAAQATAAAKAHQAMAHAAAMQgBAHgFAGQgGAGgJABQAIABAHAFQAHAGAAAJQAAAMgMAJQgMAHgSAAQgMAAgMgEg");
	this.shape_17.setTransform(231.8,321.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgwAoIALgVQAHAEAGAAQAGAAADgEIghhBIAgAAIAQAmIARgmIAgAAIglBKQgLATgXAAQgQAAgKgHg");
	this.shape_18.setTransform(268.6,321.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiAvIAAhdIBFAAIAAAZIgpAAIAABEg");
	this.shape_19.setTransform(250.7,321.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAsQgMgEgGgHIAOgSQAFADAIADQAIACAGABQAGAAAEgCQAEgCAAgDQAAgDgDgBIgMgBIgTAAIAAgXIATAAQANAAAAgGQAAgFgOAAQgHAAgGACQgHACgEAEIgOgSQAHgHAKgEQALgEAMAAQATAAALAHQALAHgBAMQABAHgHAGQgFAGgJABQAJABAGAFQAHAGAAAJQAAAMgMAJQgMAHgSAAQgMAAgLgEg");
	this.shape_20.setTransform(231.9,321.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{x:231.7}},{t:this.shape_7,p:{x:241.2,y:321.1}},{t:this.shape_6},{t:this.shape_5,p:{x:259.4,y:321.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:296.3,y:321.1}},{t:this.shape,p:{x:308.9}}]}).to({state:[{t:this.shape_13},{t:this.shape_7,p:{x:241.5,y:321}},{t:this.shape_12,p:{x:250.8,y:321}},{t:this.shape_5,p:{x:259.7,y:321}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:287.4,y:321}},{t:this.shape_1,p:{x:296.6,y:321}},{t:this.text}]},13).to({state:[{t:this.shape_17},{t:this.shape_7,p:{x:241.3,y:321.1}},{t:this.shape_12,p:{x:250.6,y:321.1}},{t:this.shape_5,p:{x:259.5,y:321.1}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_1,p:{x:296.4,y:321.1}},{t:this.shape,p:{x:309.5}}]},34).to({state:[{t:this.shape_20},{t:this.shape_7,p:{x:241.4,y:321.1}},{t:this.shape_19},{t:this.shape_5,p:{x:259.6,y:321.1}},{t:this.shape_18},{t:this.shape_8,p:{x:277.6}},{t:this.shape_9,p:{x:287.3,y:321.1}},{t:this.shape_1,p:{x:296.5,y:321.1}},{t:this.shape,p:{x:308.9}}]},96).wait(13));

	// Слой 7
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAKQgEgDAAgHQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFADQgEAFgGAAQgFAAgFgFg");
	this.shape_21.setTransform(314.6,324.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).to({_off:true},13).wait(67).to({_off:false},0).wait(76));

	// точка
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAKQgEgDAAgHQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFADQgEAFgGAAQgFAAgFgFg");
	this.shape_22.setTransform(319.7,324.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).to({_off:true},13).wait(104).to({_off:false},0).wait(39));

	// Оранджевый шарик
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FAB900","#F29100"],[0,0.996],-28.3,0,28.4,0).s().p("AjIDJQhShTAAh3QAAh2BShSQBThTB1AAQB2AABTBTQBSBSAAB2QAAB3hSBTQhTBUh2AAQh1AAhThUg");
	this.shape_23.setTransform(144.6,179.3,0.362,0.362);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FAB900","#F29100"],[0,0.996],-10.3,0,10.2,0).s().p("AhIBJQgegeABgrQgBgqAegeQAegeAqAAQAqAAAeAeQAfAeAAAqQAAArgfAeQgeAegqAAQgqAAgegeg");
	this.shape_24.setTransform(144.7,173.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FAB900","#F29100"],[0,0.996],-10.3,0,10.2,0).s().p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQAqAAAfAeQAdAeAAAqQAAArgdAeQgfAegqAAQgqAAgegeg");
	this.shape_25.setTransform(144.8,162.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FAB900","#F29100"],[0,0.996],-10.3,0,10.2,0).s().p("AhIBJQgdgeAAgrQAAgqAdgeQAegeAqAAQAqAAAeAeQAfAeAAAqQAAArgfAeQgeAegqAAQgqAAgegeg");
	this.shape_26.setTransform(144.8,157.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FAB900","#F29100"],[0,0.996],-10.3,0,10.2,0).s().p("AhIBJQgdgeAAgrQAAgqAdgeQAegeAqAAQArAAAdAeQAeAeAAAqQAAArgeAeQgdAegrAAQgqAAgegeg");
	this.shape_27.setTransform(144.9,151.6);
	this.shape_27._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23}]},13).to({state:[{t:this.shape_24,p:{y:173.8}}]},1).to({state:[{t:this.shape_24,p:{y:168.2}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{y:157.1}}]},1).to({state:[{t:this.shape_26,p:{y:151.5}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},13).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},13).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},13).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},13).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},13).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_23}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(13).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:144.8,y:145.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,y:178.9},0).to({_off:true},1).wait(5).to({_off:false,y:145.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,y:178.9},0).to({_off:true},1).wait(5).to({_off:false,y:145.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,y:178.9},0).to({_off:true},1).wait(5).to({_off:false,y:145.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,y:178.9},0).to({_off:true},1).wait(5).to({_off:false,y:145.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,y:178.9},0).to({_off:true},1).wait(5).to({_off:false,y:145.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(20).to({_off:false},0).wait(1).to({y:157.3},0).wait(1).to({y:162.9},0).wait(1).to({y:168.6},0).wait(1).to({y:174.3},0).to({_off:true},1).wait(15).to({_off:false,y:173.4},0).wait(1).to({y:167.9},0).wait(1).to({y:162.4},0).wait(1).to({y:156.9},0).wait(1).to({y:151.4},0).to({_off:true},1).wait(1).to({_off:false,y:151.6},0).wait(1).to({y:157.3},0).wait(1).to({y:162.9},0).wait(1).to({y:168.6},0).wait(1).to({y:174.3},0).to({_off:true},1).wait(15).to({_off:false,y:173.4},0).wait(1).to({y:167.9},0).wait(1).to({y:162.4},0).wait(1).to({y:156.9},0).wait(1).to({y:151.4},0).to({_off:true},1).wait(1).to({_off:false,y:151.6},0).wait(1).to({y:157.3},0).wait(1).to({y:162.9},0).wait(1).to({y:168.6},0).wait(1).to({y:174.3},0).to({_off:true},1).wait(15).to({_off:false,y:173.4},0).wait(1).to({y:167.9},0).wait(1).to({y:162.4},0).wait(1).to({y:156.9},0).wait(1).to({y:151.4},0).to({_off:true},1).wait(1).to({_off:false,y:151.6},0).wait(1).to({y:157.3},0).wait(1).to({y:162.9},0).wait(1).to({y:168.6},0).wait(1).to({y:174.3},0).to({_off:true},1).wait(15).to({_off:false,y:173.4},0).wait(1).to({y:167.9},0).wait(1).to({y:162.4},0).wait(1).to({y:156.9},0).wait(1).to({y:151.4},0).to({_off:true},1).wait(1).to({_off:false,y:151.6},0).wait(1).to({y:157.3},0).wait(1).to({y:162.9},0).wait(1).to({y:168.6},0).wait(1).to({y:174.3},0).to({_off:true},1).wait(15).to({_off:false,y:173.4},0).wait(1).to({y:167.9},0).wait(1).to({y:162.4},0).wait(1).to({y:156.9},0).wait(1).to({y:151.4},0).to({_off:true},1).wait(1).to({_off:false,y:151.6},0).wait(1).to({y:157.3},0).wait(1).to({y:162.9},0).wait(1).to({y:168.6},0).wait(1).to({y:174.3},0).to({_off:true},1).wait(1));

	// Чёрный шарик
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#292929","#000000"],[0,1],-28.3,0,28.4,0).s().p("AjIDJQhShTAAh3QAAh2BShSQBThTB1AAQB2AABTBTQBSBSAAB2QAAB3hSBTQhTBUh2AAQh1AAhThUg");
	this.shape_28.setTransform(144.3,178.7,0.362,0.362);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#292929","#000000"],[0,1],-10.3,0,10.2,0).s().p("AhIBJQgdgeAAgrQAAgqAdgeQAegeAqAAQArAAAdAeQAeAeAAAqQAAArgeAeQgdAegrAAQgqAAgegeg");
	this.shape_29.setTransform(144.4,173.4);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#292929","#000000"],[0,1],-10.3,0,10.2,0).s().p("AhIBJQgegeABgrQgBgqAegeQAegeAqAAQArAAAdAeQAeAeABAqQgBArgeAeQgdAegrAAQgqAAgegeg");
	this.shape_30.setTransform(144.6,162.8);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#292929","#000000"],[0,1],-10.3,0,10.2,0).s().p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAdAeAAAqQAAArgdAeQgeAegrAAQgqAAgegeg");
	this.shape_31.setTransform(144.7,157.5);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#292929","#000000"],[0,1],-10.3,0,10.2,0).s().p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQAqAAAfAeQAdAeAAAqQAAArgdAeQgfAegqAAQgqAAgegeg");
	this.shape_32.setTransform(144.8,152.2);
	this.shape_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_28).to({_off:true},1).wait(5).to({_off:false,x:144.8,y:146.9},0).to({_off:true},1).wait(5).to({_off:false,y:178.8},0).to({_off:true},1).wait(13).to({_off:false,x:144.3,y:178.2},0).to({_off:true},1).wait(5).to({_off:false,x:144.8,y:146.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,x:144.3,y:178.7},0).to({_off:true},1).wait(5).to({_off:false,x:144.8,y:146.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,x:144.3,y:178.7},0).to({_off:true},1).wait(5).to({_off:false,x:144.8,y:146.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,x:144.3,y:178.7},0).to({_off:true},1).wait(5).to({_off:false,x:144.8,y:146.9},0).to({_off:true},1).wait(5).to({_off:false,y:179.9},0).to({_off:true},1).wait(13).to({_off:false,x:144.3,y:178.7},0).to({_off:true},1).wait(5).to({_off:false,x:144.8,y:146.9},0).to({_off:true},1).wait(5).to({_off:false,y:178.8},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(1).to({x:144.5,y:168.1},0).to({_off:true},1).wait(4).to({_off:false,x:144.9,y:152.2},0).wait(1).to({y:157.5},0).wait(1).to({y:162.9},0).wait(1).to({y:168.2},0).wait(1).to({y:173.5},0).to({_off:true},1).wait(15).to({_off:false,x:144.4,y:173},0).wait(1).to({x:144.5,y:167.8},0).to({_off:true},1).wait(4).to({_off:false,x:144.9,y:152.4},0).wait(1).to({y:157.9},0).wait(1).to({y:163.4},0).wait(1).to({y:168.9},0).wait(1).to({y:174.4},0).to({_off:true},1).wait(15).to({_off:false,x:144.4,y:173.4},0).wait(1).to({x:144.5,y:168.1},0).to({_off:true},1).wait(4).to({_off:false,x:144.9,y:152.4},0).wait(1).to({y:157.9},0).wait(1).to({y:163.4},0).wait(1).to({y:168.9},0).wait(1).to({y:174.4},0).to({_off:true},1).wait(15).to({_off:false,x:144.4,y:173.4},0).wait(1).to({x:144.5,y:168.1},0).to({_off:true},1).wait(4).to({_off:false,x:144.9,y:152.4},0).wait(1).to({y:157.9},0).wait(1).to({y:163.4},0).wait(1).to({y:168.9},0).wait(1).to({y:174.4},0).to({_off:true},1).wait(15).to({_off:false,x:144.4,y:173.4},0).wait(1).to({x:144.5,y:168.1},0).to({_off:true},1).wait(4).to({_off:false,x:144.9,y:152.4},0).wait(1).to({y:157.9},0).wait(1).to({y:163.4},0).wait(1).to({y:168.9},0).wait(1).to({y:174.4},0).to({_off:true},1).wait(15).to({_off:false,x:144.4,y:173.4},0).wait(1).to({x:144.5,y:168.1},0).to({_off:true},1).wait(4).to({_off:false,x:144.9,y:152.2},0).wait(1).to({y:157.5},0).wait(1).to({y:162.9},0).wait(1).to({y:168.2},0).wait(1).to({y:173.5},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(3).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false,y:162.6},0).to({_off:true},1).wait(25).to({_off:false,y:162.8},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(4).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false,y:157.3},0).to({_off:true},1).wait(25).to({_off:false,y:157.5},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(5).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false,y:152.1},0).to({_off:true},1).wait(25).to({_off:false,y:152.2},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(20));

	// STICKERON
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACvP8IAAAAQjtgFh0hkQh7hqAAjcIAArWIkJAAIAAm8IEJAAIAAm2IH7AAIAAG2IFFAAIAAG8IlFAAIAAJHQAAA9AgAcQAcAYA/AIIDuAAIAAHFg");
	this.shape_33.setTransform(109.9,210.9,0.362,0.362);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AEfM1IAAudQAAiMhHhCQhBg7h/AAQi2AAiACcIAAQKIn/AAIAA5BIH/AAIAADDQBThiCBg+QCbhLC6AAQEIAACLCPQCACFAADnIAARug");
	this.shape_34.setTransform(485.5,218.1,0.362,0.362);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AqBJNQhwh0g8iYQg8iZAAioQAAiqA8iYQA8iZBwhzQD1j6GLAAQGPAAD1D6QBwBzA8CZQA7CXAACrQAACog7CZQg8CYhwB0Qj1D8mPAAQmLAAj1j8gAkAkTQhaBsAACnQAACnBaBsQBeBzChAAQCjAABhhzQBbhtAAimQAAinhbhsQhhhyijAAQihAAheByg");
	this.shape_35.setTransform(418,218.8,0.362,0.362);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("An5M3IAA5CIH+AAIAADEQBThlCIhDQCOhHCMAAIAAHrQg7gNhDAAQhpAAhrAnQhzArgwBAIAAP9g");
	this.shape_36.setTransform(366.2,218,0.362,0.362);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ApHJnQj8jqAAl9QAAitA/ibQA9iYBzhyQBzh1Cag/QCghCC3AAQFpAADjDyQDoD4AAGSIAABtIx0AAQAYB4BkBPQBwBXCkAAQBeAABygkQCAgoA+g9IDYE/QhzBni7A5QivA0jBAAQl7AAj0jigAFdiqQgNhqhGhKQhahfigAAQiUAAhbBeQhGBJgSBsIKUAAIAAAAg");
	this.shape_37.setTransform(311.3,218.8,0.362,0.362);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ADBRTIlfo4IiZC3IAAGBIn/AAMAAAgilIH/AAIAATiIHnp/IJpAAIpOLZIJsNpg");
	this.shape_38.setTransform(251.8,207.7,0.362,0.362);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AoEJhQj5jsAAl1QAAl1D5jrQD3joF6AAQDvAAC4BeQCYBOBTB7IlNE1QgxhIhKgoQhPgphjAAQiiAAhoBnQhsBsAACyQAACwBsBtQBoBpCiAAQBhAABRgtQBJgoAyhHIFNE4QhUB6iXBOQi5BfjuAAQl6AAj3jog");
	this.shape_39.setTransform(188.7,218.8,0.362,0.362);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Aj+MhIAA5BIH+AAIAAZBg");
	this.shape_40.setTransform(144.8,218.8,0.362,0.362);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Au3MXIEtmrQCDCCCpBLQDCBXDVgBQCQABBWg0QBUgyABhRQgBhfjDg3Qg6gQiPgfQiWgghPgVQkdhMiSh+QjFiqAAkhQAAiNA7h+QA7iABvhhQD2jUGXAAQEKAADkBOQDlBOCwCZIk4GYQiIhwivg8Qimg5ipAAQh4AAg+AtQg5ApAABJQABBYDDA4QA3APCQAhQCVAhBRAWQEcBPCRB9QDECnAAEYQAAFUjuDFQj2DLm2AAQpmAAlvlgg");
	this.shape_41.setTransform(54.3,207.8,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},13).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},39).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},91).wait(13));

	// орандревый круг
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(146.1,180.2,1,1,0,0,0,8,8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({scaleX:5.46,scaleY:5.46,y:180.1},0).wait(1).to({scaleX:9.92,scaleY:9.92,y:180.2},0).wait(1).to({scaleX:14.38,scaleY:14.38,y:180.1},0).wait(1).to({scaleX:18.84,scaleY:18.84,y:180.2},0).wait(1).to({scaleX:23.3,scaleY:23.3,x:146.2},0).wait(1).to({scaleX:27.76,scaleY:27.76,x:146.1},0).wait(1).to({scaleX:32.22,scaleY:32.22},0).wait(1).to({scaleX:36.67,scaleY:36.67},0).wait(1).to({scaleX:41.13,scaleY:41.13},0).wait(1).to({scaleX:45.59,scaleY:45.59},0).wait(1).to({scaleX:50.05,scaleY:50.05},0).wait(1).to({scaleX:54.51,scaleY:54.51},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1},0).wait(1).to({scaleX:5.46,scaleY:5.46,y:180.1},0).wait(1).to({scaleX:9.92,scaleY:9.92,y:180.2},0).wait(1).to({scaleX:14.38,scaleY:14.38,y:180.1},0).wait(1).to({scaleX:18.84,scaleY:18.84,y:180.2},0).wait(1).to({scaleX:23.3,scaleY:23.3,x:146.2},0).wait(1).to({scaleX:27.76,scaleY:27.76,x:146.1},0).wait(1).to({scaleX:32.22,scaleY:32.22},0).wait(1).to({scaleX:36.67,scaleY:36.67},0).wait(1).to({scaleX:41.13,scaleY:41.13},0).wait(1).to({scaleX:45.59,scaleY:45.59},0).wait(1).to({scaleX:50.05,scaleY:50.05},0).wait(1).to({scaleX:54.51,scaleY:54.51},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1},0).wait(1).to({scaleX:5.46,scaleY:5.46,y:180.1},0).wait(1).to({scaleX:9.92,scaleY:9.92,y:180.2},0).wait(1).to({scaleX:14.38,scaleY:14.38,y:180.1},0).wait(1).to({scaleX:18.84,scaleY:18.84,y:180.2},0).wait(1).to({scaleX:23.3,scaleY:23.3,x:146.2},0).wait(1).to({scaleX:27.76,scaleY:27.76,x:146.1},0).wait(1).to({scaleX:32.22,scaleY:32.22},0).wait(1).to({scaleX:36.67,scaleY:36.67},0).wait(1).to({scaleX:41.13,scaleY:41.13},0).wait(1).to({scaleX:45.59,scaleY:45.59},0).wait(1).to({scaleX:50.05,scaleY:50.05},0).wait(1).to({scaleX:54.51,scaleY:54.51},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1},0).wait(1).to({scaleX:5.46,scaleY:5.46,y:180.1},0).wait(1).to({scaleX:9.92,scaleY:9.92,y:180.2},0).wait(1).to({scaleX:14.38,scaleY:14.38,y:180.1},0).wait(1).to({scaleX:18.84,scaleY:18.84,y:180.2},0).wait(1).to({scaleX:23.3,scaleY:23.3,x:146.2},0).wait(1).to({scaleX:27.76,scaleY:27.76,x:146.1},0).wait(1).to({scaleX:32.22,scaleY:32.22},0).wait(1).to({scaleX:36.67,scaleY:36.67},0).wait(1).to({scaleX:41.13,scaleY:41.13},0).wait(1).to({scaleX:45.59,scaleY:45.59},0).wait(1).to({scaleX:50.05,scaleY:50.05},0).wait(1).to({scaleX:54.51,scaleY:54.51},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1},0).wait(1).to({scaleX:5.46,scaleY:5.46,y:180.1},0).wait(1).to({scaleX:9.92,scaleY:9.92,y:180.2},0).wait(1).to({scaleX:14.38,scaleY:14.38,y:180.1},0).wait(1).to({scaleX:18.84,scaleY:18.84,y:180.2},0).wait(1).to({scaleX:23.3,scaleY:23.3,x:146.2},0).wait(1).to({scaleX:27.76,scaleY:27.76,x:146.1},0).wait(1).to({scaleX:32.22,scaleY:32.22},0).wait(1).to({scaleX:36.67,scaleY:36.67},0).wait(1).to({scaleX:41.13,scaleY:41.13},0).wait(1).to({scaleX:45.59,scaleY:45.59},0).wait(1).to({scaleX:50.05,scaleY:50.05},0).wait(1).to({scaleX:54.51,scaleY:54.51},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1},0).wait(1).to({scaleX:5.46,scaleY:5.46,y:180.1},0).wait(1).to({scaleX:9.92,scaleY:9.92,y:180.2},0).wait(1).to({scaleX:14.38,scaleY:14.38,y:180.1},0).wait(1).to({scaleX:18.84,scaleY:18.84,y:180.2},0).wait(1).to({scaleX:23.3,scaleY:23.3,x:146.2},0).wait(1).to({scaleX:27.76,scaleY:27.76,x:146.1},0).wait(1).to({scaleX:32.22,scaleY:32.22},0).wait(1).to({scaleX:36.67,scaleY:36.67},0).wait(1).to({scaleX:41.13,scaleY:41.13},0).wait(1).to({scaleX:45.59,scaleY:45.59},0).wait(1).to({scaleX:50.05,scaleY:50.05},0).wait(1).to({scaleX:54.51,scaleY:54.51},0).wait(1));

	// чёрный фон
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.2,178.2,1,1,0,0,0,9.5,9.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("EgrHgfQMBWQAAAMAAAA+hMhWQAAAg");
	this.shape_42.setTransform(275.1,200.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFC600").s().p("EgrIAfRMAAAg+hMBWRAAAMAAAA+hg");
	this.shape_43.setTransform(275.1,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:5.21,scaleY:5.21,x:143.9,y:177.5},0).wait(1).to({scaleX:9.42,scaleY:9.42,x:143.6,y:176.9},0).wait(1).to({scaleX:13.63,scaleY:13.63,x:143.4,y:176.3},0).wait(1).to({scaleX:17.83,scaleY:17.83,x:143.2,y:175.6},0).wait(1).to({scaleX:22.04,scaleY:22.04,x:143,y:175.1},0).wait(1).to({scaleX:26.25,scaleY:26.25,x:142.7,y:174.5},0).wait(1).to({scaleX:30.46,scaleY:30.46,x:142.5,y:173.8},0).wait(1).to({scaleX:34.67,scaleY:34.67,x:142.2,y:173.2},0).wait(1).to({scaleX:38.88,scaleY:38.88,x:142,y:172.6},0).wait(1).to({scaleX:43.09,scaleY:43.09,x:141.7,y:172},0).wait(1).to({scaleX:47.29,scaleY:47.29,x:143.8,y:171.4},0).wait(1).to({scaleX:51.5,scaleY:51.5,x:145.7,y:170.7},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:143.6,y:178.2},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:143.7,y:177.5},0).wait(1).to({scaleX:9.42,scaleY:9.42,x:143.9,y:176.9},0).wait(1).to({scaleX:13.63,scaleY:13.63,x:144.1,y:176.3},0).wait(1).to({scaleX:17.83,scaleY:17.83,x:144.3,y:175.6},0).wait(1).to({scaleX:22.04,scaleY:22.04,x:144.5,y:175.1},0).wait(1).to({scaleX:26.25,scaleY:26.25,x:144.7,y:174.5},0).wait(1).to({scaleX:30.46,scaleY:30.46,x:144.8,y:173.8},0).wait(1).to({scaleX:34.67,scaleY:34.67,x:145,y:173.2},0).wait(1).to({scaleX:38.88,scaleY:38.88,x:145.2,y:172.6},0).wait(1).to({scaleX:43.09,scaleY:43.09,x:145.4,y:172},0).wait(1).to({scaleX:47.29,scaleY:47.29,x:145.6,y:171.4},0).wait(1).to({scaleX:51.5,scaleY:51.5,x:145.7,y:170.7},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:144.2,y:178.2},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:144.3,y:177.5},0).wait(1).to({scaleX:9.42,scaleY:9.42,x:144.4,y:176.9},0).wait(1).to({scaleX:13.63,scaleY:13.63,x:144.5,y:176.3},0).wait(1).to({scaleX:17.83,scaleY:17.83,x:144.7,y:175.6},0).wait(1).to({scaleX:22.04,scaleY:22.04,x:144.8,y:175.1},0).wait(1).to({scaleX:26.25,scaleY:26.25,x:145,y:174.5},0).wait(1).to({scaleX:30.46,scaleY:30.46,x:145.1,y:173.8},0).wait(1).to({scaleX:34.67,scaleY:34.67,x:145.2,y:173.2},0).wait(1).to({scaleX:38.88,scaleY:38.88,x:145.4,y:172.6},0).wait(1).to({scaleX:43.09,scaleY:43.09,x:145.5,y:172},0).wait(1).to({scaleX:47.29,scaleY:47.29,x:145.6,y:171.4},0).wait(1).to({scaleX:51.5,scaleY:51.5,x:145.7,y:170.7},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:143.6,y:178.8},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:143.7,y:178.1},0).wait(1).to({scaleX:9.42,scaleY:9.42,x:143.9,y:177.4},0).wait(1).to({scaleX:13.63,scaleY:13.63,x:144.1,y:176.7},0).wait(1).to({scaleX:17.83,scaleY:17.83,x:144.3,y:176},0).wait(1).to({scaleX:22.04,scaleY:22.04,x:144.5,y:175.4},0).wait(1).to({scaleX:26.25,scaleY:26.25,x:144.7,y:174.8},0).wait(1).to({scaleX:30.46,scaleY:30.46,x:144.8,y:174.1},0).wait(1).to({scaleX:34.67,scaleY:34.67,x:145,y:173.4},0).wait(1).to({scaleX:38.88,scaleY:38.88,x:145.2,y:172.8},0).wait(1).to({scaleX:43.09,scaleY:43.09,x:145.4,y:172.1},0).wait(1).to({scaleX:47.29,scaleY:47.29,x:145.6,y:171.4},0).wait(1).to({scaleX:51.5,scaleY:51.5,x:145.7,y:170.7},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:144.2,y:178.2},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:144.3,y:177.5},0).wait(1).to({scaleX:9.42,scaleY:9.42,x:144.4,y:176.9},0).wait(1).to({scaleX:13.63,scaleY:13.63,x:144.5,y:176.3},0).wait(1).to({scaleX:17.83,scaleY:17.83,x:144.7,y:175.6},0).wait(1).to({scaleX:22.04,scaleY:22.04,x:144.8,y:175.1},0).wait(1).to({scaleX:26.25,scaleY:26.25,x:145,y:174.5},0).wait(1).to({scaleX:30.46,scaleY:30.46,x:145.1,y:173.8},0).wait(1).to({scaleX:34.67,scaleY:34.67,x:145.2,y:173.2},0).wait(1).to({scaleX:38.88,scaleY:38.88,x:145.4,y:172.6},0).wait(1).to({scaleX:43.09,scaleY:43.09,x:145.5,y:172},0).wait(1).to({scaleX:47.29,scaleY:47.29,x:145.6,y:171.4},0).wait(1).to({scaleX:51.5,scaleY:51.5,x:145.7,y:170.7},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:144.2,y:178.2},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:144.3,y:177.5},0).wait(1).to({scaleX:9.42,scaleY:9.42,x:144.4,y:176.9},0).wait(1).to({scaleX:13.63,scaleY:13.63,x:144.5,y:176.3},0).wait(1).to({scaleX:17.83,scaleY:17.83,x:144.7,y:175.6},0).wait(1).to({scaleX:22.04,scaleY:22.04,x:144.8,y:175.1},0).wait(1).to({scaleX:26.25,scaleY:26.25,x:145,y:174.5},0).wait(1).to({scaleX:30.46,scaleY:30.46,x:145.1,y:173.8},0).wait(1).to({scaleX:34.67,scaleY:34.67,x:145.2,y:173.2},0).wait(1).to({scaleX:38.88,scaleY:38.88,x:145.4,y:172.6},0).wait(1).to({scaleX:43.09,scaleY:43.09,x:145.5,y:172},0).wait(1).to({scaleX:47.29,scaleY:47.29,x:145.6,y:171.4},0).wait(1).to({scaleX:51.5,scaleY:51.5,x:145.7,y:170.7},0).to({_off:true},1).wait(13));

	// чёрный фон
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("EgrCAfQMAAAg+fMBWFAAAMAAAA+fg");
	this.shape_44.setTransform(275.5,200);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFC600").s().p("EgrHAfZMAAAg+xMBWOAAAMAAAA+xg");
	this.shape_45.setTransform(274.8,199.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_45}]},13).to({state:[{t:this.shape_44}]},13).to({state:[{t:this.shape_44}]},117).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275.1,200.1,551,400);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;