function randomRange(a, b) {
	return Math.random() * (b - a) + a
}
var THREE = THREE || {};
self.Int32Array || (self.Int32Array = Array, self.Float32Array = Array), THREE.Color = function (a) {
	return void 0 !== a && this.setHex(a),
	this
}, THREE.Color.prototype = {
	constructor : THREE.Color,
	r : 1,
	g : 1,
	b : 1,
	copy : function (a) {
		return this.r = a.r,
		this.g = a.g,
		this.b = a.b,
		this
	},
	copyGammaToLinear : function (a) {
		return this.r = a.r * a.r,
		this.g = a.g * a.g,
		this.b = a.b * a.b,
		this
	},
	copyLinearToGamma : function (a) {
		return this.r = Math.sqrt(a.r),
		this.g = Math.sqrt(a.g),
		this.b = Math.sqrt(a.b),
		this
	},
	setRGB : function (a, b, c) {
		return this.r = a,
		this.g = b,
		this.b = c,
		this
	},
	setHSV : function (a, b, c) {
		var d,
		e,
		f;
		if (0 === c)
			this.r = this.g = this.b = 0;
		else
			switch (d = Math.floor(6 * a), e = 6 * a - d, a = c * (1 - b), f = c * (1 - b * e), b = c * (1 - b * (1 - e)), d) {
			case 1:
				this.r = f,
				this.g = c,
				this.b = a;
				break;
			case 2:
				this.r = a,
				this.g = c,
				this.b = b;
				break;
			case 3:
				this.r = a,
				this.g = f,
				this.b = c;
				break;
			case 4:
				this.r = b,
				this.g = a,
				this.b = c;
				break;
			case 5:
				this.r = c,
				this.g = a,
				this.b = f;
				break;
			case 6:
			case 0:
				this.r = c,
				this.g = b,
				this.b = a
			}
		return this
	},
	setHex : function (a) {
		return a = Math.floor(a),
		this.r = (a >> 16 & 255) / 255,
		this.g = (a >> 8 & 255) / 255,
		this.b = (255 & a) / 255,
		this
	},
	getHex : function () {
		return ~~(255 * this.r) << 16^~~(255 * this.g) << 8^~~(255 * this.b)
	},
	getContextStyle : function () {
		return "rgb(" + Math.floor(255 * this.r) + "," + Math.floor(255 * this.g) + "," + Math.floor(255 * this.b) + ")"
	},
	clone : function () {
		return (new THREE.Color).setRGB(this.r, this.g, this.b)
	}
}, THREE.Vector2 = function (a, b) {
	this.x = a || 0,
	this.y = b || 0
}, THREE.Vector2.prototype = {
	constructor : THREE.Vector2,
	set : function (a, b) {
		return this.x = a,
		this.y = b,
		this
	},
	copy : function (a) {
		return this.x = a.x,
		this.y = a.y,
		this
	},
	clone : function () {
		return new THREE.Vector2(this.x, this.y)
	},
	add : function (a, b) {
		return this.x = a.x + b.x,
		this.y = a.y + b.y,
		this
	},
	addSelf : function (a) {
		return this.x += a.x,
		this.y += a.y,
		this
	},
	sub : function (a, b) {
		return this.x = a.x - b.x,
		this.y = a.y - b.y,
		this
	},
	subSelf : function (a) {
		return this.x -= a.x,
		this.y -= a.y,
		this
	},
	multiplyScalar : function (a) {
		return this.x *= a,
		this.y *= a,
		this
	},
	divideScalar : function (a) {
		return a ? (this.x /= a, this.y /= a) : this.set(0, 0),
		this
	},
	negate : function () {
		return this.multiplyScalar(-1)
	},
	dot : function (a) {
		return this.x * a.x + this.y * a.y
	},
	lengthSq : function () {
		return this.x * this.x + this.y * this.y
	},
	length : function () {
		return Math.sqrt(this.lengthSq())
	},
	normalize : function () {
		return this.divideScalar(this.length())
	},
	distanceTo : function (a) {
		return Math.sqrt(this.distanceToSquared(a))
	},
	distanceToSquared : function (a) {
		var b = this.x - a.x,
		a = this.y - a.y;
		return b * b + a * a
	},
	setLength : function (a) {
		return this.normalize().multiplyScalar(a)
	},
	equals : function (a) {
		return a.x === this.x && a.y === this.y
	}
}, THREE.Vector3 = function (a, b, c) {
	this.x = a || 0,
	this.y = b || 0,
	this.z = c || 0
}, THREE.Vector3.prototype = {
	constructor : THREE.Vector3,
	set : function (a, b, c) {
		return this.x = a,
		this.y = b,
		this.z = c,
		this
	},
	setX : function (a) {
		return this.x = a,
		this
	},
	setY : function (a) {
		return this.y = a,
		this
	},
	setZ : function (a) {
		return this.z = a,
		this
	},
	copy : function (a) {
		return this.x = a.x,
		this.y = a.y,
		this.z = a.z,
		this
	},
	clone : function () {
		return new THREE.Vector3(this.x, this.y, this.z)
	},
	add : function (a, b) {
		return this.x = a.x + b.x,
		this.y = a.y + b.y,
		this.z = a.z + b.z,
		this
	},
	addSelf : function (a) {
		return this.x += a.x,
		this.y += a.y,
		this.z += a.z,
		this
	},
	addScalar : function (a) {
		return this.x += a,
		this.y += a,
		this.z += a,
		this
	},
	sub : function (a, b) {
		return this.x = a.x - b.x,
		this.y = a.y - b.y,
		this.z = a.z - b.z,
		this
	},
	subSelf : function (a) {
		return this.x -= a.x,
		this.y -= a.y,
		this.z -= a.z,
		this
	},
	multiply : function (a, b) {
		return this.x = a.x * b.x,
		this.y = a.y * b.y,
		this.z = a.z * b.z,
		this
	},
	multiplySelf : function (a) {
		return this.x *= a.x,
		this.y *= a.y,
		this.z *= a.z,
		this
	},
	multiplyScalar : function (a) {
		return this.x *= a,
		this.y *= a,
		this.z *= a,
		this
	},
	divideSelf : function (a) {
		return this.x /= a.x,
		this.y /= a.y,
		this.z /= a.z,
		this
	},
	divideScalar : function (a) {
		return a ? (this.x /= a, this.y /= a, this.z /= a) : this.z = this.y = this.x = 0,
		this
	},
	negate : function () {
		return this.multiplyScalar(-1)
	},
	dot : function (a) {
		return this.x * a.x + this.y * a.y + this.z * a.z
	},
	lengthSq : function () {
		return this.x * this.x + this.y * this.y + this.z * this.z
	},
	length : function () {
		return Math.sqrt(this.lengthSq())
	},
	lengthManhattan : function () {
		return this.x + this.y + this.z
	},
	normalize : function () {
		return this.divideScalar(this.length())
	},
	setLength : function (a) {
		return this.normalize().multiplyScalar(a)
	},
	cross : function (a, b) {
		return this.x = a.y * b.z - a.z * b.y,
		this.y = a.z * b.x - a.x * b.z,
		this.z = a.x * b.y - a.y * b.x,
		this
	},
	crossSelf : function (a) {
		var b = this.x,
		c = this.y,
		d = this.z;
		return this.x = c * a.z - d * a.y,
		this.y = d * a.x - b * a.z,
		this.z = b * a.y - c * a.x,
		this
	},
	distanceTo : function (a) {
		return Math.sqrt(this.distanceToSquared(a))
	},
	distanceToSquared : function (a) {
		return (new THREE.Vector3).sub(this, a).lengthSq()
	},
	setPositionFromMatrix : function (a) {
		this.x = a.n14,
		this.y = a.n24,
		this.z = a.n34
	},
	setRotationFromMatrix : function (a) {
		var b = Math.cos(this.y);
		this.y = Math.asin(a.n13),
		Math.abs(b) > 1e-5 ? (this.x = Math.atan2(-a.n23 / b, a.n33 / b), this.z = Math.atan2(-a.n12 / b, a.n11 / b)) : (this.x = 0, this.z = Math.atan2(a.n21, a.n22))
	},
	isZero : function () {
		return this.lengthSq() < 1e-4
	}
}, THREE.Vector4 = function (a, b, c, d) {
	this.x = a || 0,
	this.y = b || 0,
	this.z = c || 0,
	this.w = void 0 !== d ? d : 1
}, THREE.Vector4.prototype = {
	constructor : THREE.Vector4,
	set : function (a, b, c, d) {
		return this.x = a,
		this.y = b,
		this.z = c,
		this.w = d,
		this
	},
	copy : function (a) {
		this.x = a.x,
		this.y = a.y,
		this.z = a.z,
		this.w = void 0 !== a.w ? a.w : 1
	},
	clone : function () {
		return new THREE.Vector4(this.x, this.y, this.z, this.w)
	},
	add : function (a, b) {
		return this.x = a.x + b.x,
		this.y = a.y + b.y,
		this.z = a.z + b.z,
		this.w = a.w + b.w,
		this
	},
	addSelf : function (a) {
		return this.x += a.x,
		this.y += a.y,
		this.z += a.z,
		this.w += a.w,
		this
	},
	sub : function (a, b) {
		return this.x = a.x - b.x,
		this.y = a.y - b.y,
		this.z = a.z - b.z,
		this.w = a.w - b.w,
		this
	},
	subSelf : function (a) {
		return this.x -= a.x,
		this.y -= a.y,
		this.z -= a.z,
		this.w -= a.w,
		this
	},
	multiplyScalar : function (a) {
		return this.x *= a,
		this.y *= a,
		this.z *= a,
		this.w *= a,
		this
	},
	divideScalar : function (a) {
		return a ? (this.x /= a, this.y /= a, this.z /= a, this.w /= a) : (this.z = this.y = this.x = 0, this.w = 1),
		this
	},
	negate : function () {
		return this.multiplyScalar(-1)
	},
	dot : function (a) {
		return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
	},
	lengthSq : function () {
		return this.dot(this)
	},
	length : function () {
		return Math.sqrt(this.lengthSq())
	},
	normalize : function () {
		return this.divideScalar(this.length())
	},
	setLength : function (a) {
		return this.normalize().multiplyScalar(a)
	},
	lerpSelf : function (a, b) {
		return this.x += (a.x - this.x) * b,
		this.y += (a.y - this.y) * b,
		this.z += (a.z - this.z) * b,
		this.w += (a.w - this.w) * b,
		this
	}
}, THREE.Ray = function (a, b) {
	function c(a, b, c) {
		return w.sub(c, a),
		l = w.dot(b),
		0 >= l ? null : (m = x.add(a, y.copy(b).multiplyScalar(l)), n = c.distanceTo(m))
	}
	function d(a, b, c, d) {
		return w.sub(d, b),
		x.sub(c, b),
		y.sub(a, b),
		o = w.dot(w),
		p = w.dot(x),
		q = w.dot(y),
		r = x.dot(x),
		s = x.dot(y),
		t = 1 / (o * r - p * p),
		u = (r * q - p * s) * t,
		v = (o * s - p * q) * t,
		u >= 0 && v >= 0 && 1 > u + v
	}
	this.origin = a || new THREE.Vector3,
	this.direction = b || new THREE.Vector3,
	this.intersectScene = function (a) {
		return this.intersectObjects(a.children)
	},
	this.intersectObjects = function (a) {
		var b,
		c,
		d = [];
		for (b = 0, c = a.length; c > b; b++)
			Array.prototype.push.apply(d, this.intersectObject(a[b]));
		return d.sort(function (a, b) {
			return a.distance - b.distance
		}),
		d
	};
	var e = new THREE.Vector3,
	f = new THREE.Vector3,
	g = new THREE.Vector3,
	h = new THREE.Vector3,
	a = new THREE.Vector3,
	b = new THREE.Vector3,
	i = new THREE.Vector3,
	j = new THREE.Vector3,
	k = new THREE.Vector3;
	this.intersectObject = function (l) {
		for (var m, n = [], o = 0, p = l.children.length; p > o; o++)
			Array.prototype.push.apply(n, this.intersectObject(l.children[o]));
		if (l instanceof THREE.Particle) {
			if (o = c(this.origin, this.direction, l.matrixWorld.getPosition()), null === o || o > l.scale.x)
				return [];
			m = {
				distance : o,
				point : l.position,
				face : null,
				object : l
			},
			n.push(m)
		} else if (l instanceof THREE.Mesh) {
			if (o = c(this.origin, this.direction, l.matrixWorld.getPosition()), null === o || o > l.geometry.boundingSphere.radius * Math.max(l.scale.x, Math.max(l.scale.y, l.scale.z)))
				return n;
			var q,
			r,
			s = l.geometry,
			t = s.vertices;
			for (l.matrixRotationWorld.extractRotation(l.matrixWorld), o = 0, p = s.faces.length; p > o; o++)
				m = s.faces[o], a.copy(this.origin), b.copy(this.direction), r = l.matrixWorld, i = r.multiplyVector3(i.copy(m.centroid)).subSelf(a), q = i.dot(b), 0 >= q || (e = r.multiplyVector3(e.copy(t[m.a].position)), f = r.multiplyVector3(f.copy(t[m.b].position)), g = r.multiplyVector3(g.copy(t[m.c].position)), m instanceof THREE.Face4 && (h = r.multiplyVector3(h.copy(t[m.d].position))), j = l.matrixRotationWorld.multiplyVector3(j.copy(m.normal)), q = b.dot(j), !l.doubleSided && !(l.flipSided ? q > 0 : 0 > q)) || (q = j.dot(i.sub(e, a)) / q, k.add(a, b.multiplyScalar(q)), m instanceof THREE.Face3 ? d(k, e, f, g) && (m = {
							distance : a.distanceTo(k),
							point : k.clone(),
							face : m,
							object : l
						}, n.push(m)) : m instanceof THREE.Face4 && (d(k, e, f, h) || d(k, f, g, h)) && (m = {
							distance : a.distanceTo(k),
							point : k.clone(),
							face : m,
							object : l
						}, n.push(m)))
		}
		return n
	};
	var l,
	m,
	n,
	o,
	p,
	q,
	r,
	s,
	t,
	u,
	v,
	w = new THREE.Vector3,
	x = new THREE.Vector3,
	y = new THREE.Vector3
}, THREE.Rectangle = function () {
	function a() {
		f = d - b,
		g = e - c
	}
	var b,
	c,
	d,
	e,
	f,
	g,
	h = !0;
	this.getX = function () {
		return b
	},
	this.getY = function () {
		return c
	},
	this.getWidth = function () {
		return f
	},
	this.getHeight = function () {
		return g
	},
	this.getLeft = function () {
		return b
	},
	this.getTop = function () {
		return c
	},
	this.getRight = function () {
		return d
	},
	this.getBottom = function () {
		return e
	},
	this.set = function (f, g, i, j) {
		h = !1,
		b = f,
		c = g,
		d = i,
		e = j,
		a()
	},
	this.addPoint = function (f, g) {
		h ? (h = !1, b = f, c = g, d = f, e = g) : (b = f > b ? b : f, c = g > c ? c : g, d = d > f ? d : f, e = e > g ? e : g),
		a()
	},
	this.add3Points = function (f, g, i, j, k, l) {
		h ? (h = !1, b = i > f ? k > f ? f : k : k > i ? i : k, c = j > g ? l > g ? g : l : l > j ? j : l, d = f > i ? f > k ? f : k : i > k ? i : k, e = g > j ? g > l ? g : l : j > l ? j : l) : (b = i > f ? k > f ? b > f ? f : b : b > k ? k : b : k > i ? b > i ? i : b : b > k ? k : b, c = j > g ? l > g ? c > g ? g : c : c > l ? l : c : l > j ? c > j ? j : c : c > l ? l : c, d = f > i ? f > k ? f > d ? f : d : k > d ? k : d : i > k ? i > d ? i : d : k > d ? k : d, e = g > j ? g > l ? g > e ? g : e : l > e ? l : e : j > l ? j > e ? j : e : l > e ? l : e),
		a()
	},
	this.addRectangle = function (f) {
		h ? (h = !1, b = f.getLeft(), c = f.getTop(), d = f.getRight(), e = f.getBottom()) : (b = b < f.getLeft() ? b : f.getLeft(), c = c < f.getTop() ? c : f.getTop(), d = d > f.getRight() ? d : f.getRight(), e = e > f.getBottom() ? e : f.getBottom()),
		a()
	},
	this.inflate = function (f) {
		b -= f,
		c -= f,
		d += f,
		e += f,
		a()
	},
	this.minSelf = function (f) {
		b = b > f.getLeft() ? b : f.getLeft(),
		c = c > f.getTop() ? c : f.getTop(),
		d = d < f.getRight() ? d : f.getRight(),
		e = e < f.getBottom() ? e : f.getBottom(),
		a()
	},
	this.intersects = function (a) {
		return Math.min(d, a.getRight()) - Math.max(b, a.getLeft()) >= 0 && Math.min(e, a.getBottom()) - Math.max(c, a.getTop()) >= 0
	},
	this.empty = function () {
		h = !0,
		e = d = c = b = 0,
		a()
	},
	this.isEmpty = function () {
		return h
	}
}, THREE.Math = {
	clamp : function (a, b, c) {
		return b > a ? b : a > c ? c : a
	},
	clampBottom : function (a, b) {
		return b > a ? b : a
	},
	mapLinear : function (a, b, c, d, e) {
		return d + (a - b) * (e - d) / (c - b)
	},
	random16 : function () {
		return (65280 * Math.random() + 255 * Math.random()) / 65535
	}
}, THREE.Matrix3 = function () {
	this.m = []
}, THREE.Matrix3.prototype = {
	constructor : THREE.Matrix3,
	transpose : function () {
		var a,
		b = this.m;
		return a = b[1],
		b[1] = b[3],
		b[3] = a,
		a = b[2],
		b[2] = b[6],
		b[6] = a,
		a = b[5],
		b[5] = b[7],
		b[7] = a,
		this
	},
	transposeIntoArray : function (a) {
		var b = this.m;
		return a[0] = b[0],
		a[1] = b[3],
		a[2] = b[6],
		a[3] = b[1],
		a[4] = b[4],
		a[5] = b[7],
		a[6] = b[2],
		a[7] = b[5],
		a[8] = b[8],
		this
	}
}, THREE.Matrix4 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
	this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, e || 0, void 0 !== f ? f : 1, g || 0, h || 0, i || 0, j || 0, void 0 !== k ? k : 1, l || 0, m || 0, n || 0, o || 0, void 0 !== p ? p : 1),
	this.flat = Array(16),
	this.m33 = new THREE.Matrix3
}, THREE.Matrix4.prototype = {
	constructor : THREE.Matrix4,
	set : function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
		return this.n11 = a,
		this.n12 = b,
		this.n13 = c,
		this.n14 = d,
		this.n21 = e,
		this.n22 = f,
		this.n23 = g,
		this.n24 = h,
		this.n31 = i,
		this.n32 = j,
		this.n33 = k,
		this.n34 = l,
		this.n41 = m,
		this.n42 = n,
		this.n43 = o,
		this.n44 = p,
		this
	},
	identity : function () {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
		this
	},
	copy : function (a) {
		return this.set(a.n11, a.n12, a.n13, a.n14, a.n21, a.n22, a.n23, a.n24, a.n31, a.n32, a.n33, a.n34, a.n41, a.n42, a.n43, a.n44),
		this
	},
	lookAt : function (a, b, c) {
		var d = THREE.Matrix4.__v1,
		e = THREE.Matrix4.__v2,
		f = THREE.Matrix4.__v3;
		return f.sub(a, b).normalize(),
		0 === f.length() && (f.z = 1),
		d.cross(c, f).normalize(),
		0 === d.length() && (f.x += 1e-4, d.cross(c, f).normalize()),
		e.cross(f, d).normalize(),
		this.n11 = d.x,
		this.n12 = e.x,
		this.n13 = f.x,
		this.n21 = d.y,
		this.n22 = e.y,
		this.n23 = f.y,
		this.n31 = d.z,
		this.n32 = e.z,
		this.n33 = f.z,
		this
	},
	multiply : function (a, b) {
		var c = a.n11,
		d = a.n12,
		e = a.n13,
		f = a.n14,
		g = a.n21,
		h = a.n22,
		i = a.n23,
		j = a.n24,
		k = a.n31,
		l = a.n32,
		m = a.n33,
		n = a.n34,
		o = a.n41,
		p = a.n42,
		q = a.n43,
		r = a.n44,
		s = b.n11,
		t = b.n12,
		u = b.n13,
		v = b.n14,
		w = b.n21,
		x = b.n22,
		y = b.n23,
		z = b.n24,
		A = b.n31,
		B = b.n32,
		C = b.n33,
		D = b.n34,
		E = b.n41,
		F = b.n42,
		G = b.n43,
		H = b.n44;
		return this.n11 = c * s + d * w + e * A + f * E,
		this.n12 = c * t + d * x + e * B + f * F,
		this.n13 = c * u + d * y + e * C + f * G,
		this.n14 = c * v + d * z + e * D + f * H,
		this.n21 = g * s + h * w + i * A + j * E,
		this.n22 = g * t + h * x + i * B + j * F,
		this.n23 = g * u + h * y + i * C + j * G,
		this.n24 = g * v + h * z + i * D + j * H,
		this.n31 = k * s + l * w + m * A + n * E,
		this.n32 = k * t + l * x + m * B + n * F,
		this.n33 = k * u + l * y + m * C + n * G,
		this.n34 = k * v + l * z + m * D + n * H,
		this.n41 = o * s + p * w + q * A + r * E,
		this.n42 = o * t + p * x + q * B + r * F,
		this.n43 = o * u + p * y + q * C + r * G,
		this.n44 = o * v + p * z + q * D + r * H,
		this
	},
	multiplySelf : function (a) {
		return this.multiply(this, a)
	},
	multiplyToArray : function (a, b, c) {
		return this.multiply(a, b),
		c[0] = this.n11,
		c[1] = this.n21,
		c[2] = this.n31,
		c[3] = this.n41,
		c[4] = this.n12,
		c[5] = this.n22,
		c[6] = this.n32,
		c[7] = this.n42,
		c[8] = this.n13,
		c[9] = this.n23,
		c[10] = this.n33,
		c[11] = this.n43,
		c[12] = this.n14,
		c[13] = this.n24,
		c[14] = this.n34,
		c[15] = this.n44,
		this
	},
	multiplyScalar : function (a) {
		return this.n11 *= a,
		this.n12 *= a,
		this.n13 *= a,
		this.n14 *= a,
		this.n21 *= a,
		this.n22 *= a,
		this.n23 *= a,
		this.n24 *= a,
		this.n31 *= a,
		this.n32 *= a,
		this.n33 *= a,
		this.n34 *= a,
		this.n41 *= a,
		this.n42 *= a,
		this.n43 *= a,
		this.n44 *= a,
		this
	},
	multiplyVector3 : function (a) {
		var b = a.x,
		c = a.y,
		d = a.z,
		e = 1 / (this.n41 * b + this.n42 * c + this.n43 * d + this.n44);
		return a.x = (this.n11 * b + this.n12 * c + this.n13 * d + this.n14) * e,
		a.y = (this.n21 * b + this.n22 * c + this.n23 * d + this.n24) * e,
		a.z = (this.n31 * b + this.n32 * c + this.n33 * d + this.n34) * e,
		a
	},
	multiplyVector4 : function (a) {
		var b = a.x,
		c = a.y,
		d = a.z,
		e = a.w;
		return a.x = this.n11 * b + this.n12 * c + this.n13 * d + this.n14 * e,
		a.y = this.n21 * b + this.n22 * c + this.n23 * d + this.n24 * e,
		a.z = this.n31 * b + this.n32 * c + this.n33 * d + this.n34 * e,
		a.w = this.n41 * b + this.n42 * c + this.n43 * d + this.n44 * e,
		a
	},
	rotateAxis : function (a) {
		var b = a.x,
		c = a.y,
		d = a.z;
		return a.x = b * this.n11 + c * this.n12 + d * this.n13,
		a.y = b * this.n21 + c * this.n22 + d * this.n23,
		a.z = b * this.n31 + c * this.n32 + d * this.n33,
		a.normalize(),
		a
	},
	crossVector : function (a) {
		var b = new THREE.Vector4;
		return b.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w,
		b.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w,
		b.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w,
		b.w = a.w ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1,
		b
	},
	determinant : function () {
		var a = this.n11,
		b = this.n12,
		c = this.n13,
		d = this.n14,
		e = this.n21,
		f = this.n22,
		g = this.n23,
		h = this.n24,
		i = this.n31,
		j = this.n32,
		k = this.n33,
		l = this.n34,
		m = this.n41,
		n = this.n42,
		o = this.n43,
		p = this.n44;
		return d * g * j * m - c * h * j * m - d * f * k * m + b * h * k * m + c * f * l * m - b * g * l * m - d * g * i * n + c * h * i * n + d * e * k * n - a * h * k * n - c * e * l * n + a * g * l * n + d * f * i * o - b * h * i * o - d * e * j * o + a * h * j * o + b * e * l * o - a * f * l * o - c * f * i * p + b * g * i * p + c * e * j * p - a * g * j * p - b * e * k * p + a * f * k * p
	},
	transpose : function () {
		var a;
		return a = this.n21,
		this.n21 = this.n12,
		this.n12 = a,
		a = this.n31,
		this.n31 = this.n13,
		this.n13 = a,
		a = this.n32,
		this.n32 = this.n23,
		this.n23 = a,
		a = this.n41,
		this.n41 = this.n14,
		this.n14 = a,
		a = this.n42,
		this.n42 = this.n24,
		this.n24 = a,
		a = this.n43,
		this.n43 = this.n34,
		this.n43 = a,
		this
	},
	clone : function () {
		var a = new THREE.Matrix4;
		return a.n11 = this.n11,
		a.n12 = this.n12,
		a.n13 = this.n13,
		a.n14 = this.n14,
		a.n21 = this.n21,
		a.n22 = this.n22,
		a.n23 = this.n23,
		a.n24 = this.n24,
		a.n31 = this.n31,
		a.n32 = this.n32,
		a.n33 = this.n33,
		a.n34 = this.n34,
		a.n41 = this.n41,
		a.n42 = this.n42,
		a.n43 = this.n43,
		a.n44 = this.n44,
		a
	},
	flatten : function () {
		return this.flat[0] = this.n11,
		this.flat[1] = this.n21,
		this.flat[2] = this.n31,
		this.flat[3] = this.n41,
		this.flat[4] = this.n12,
		this.flat[5] = this.n22,
		this.flat[6] = this.n32,
		this.flat[7] = this.n42,
		this.flat[8] = this.n13,
		this.flat[9] = this.n23,
		this.flat[10] = this.n33,
		this.flat[11] = this.n43,
		this.flat[12] = this.n14,
		this.flat[13] = this.n24,
		this.flat[14] = this.n34,
		this.flat[15] = this.n44,
		this.flat
	},
	flattenToArray : function (a) {
		return a[0] = this.n11,
		a[1] = this.n21,
		a[2] = this.n31,
		a[3] = this.n41,
		a[4] = this.n12,
		a[5] = this.n22,
		a[6] = this.n32,
		a[7] = this.n42,
		a[8] = this.n13,
		a[9] = this.n23,
		a[10] = this.n33,
		a[11] = this.n43,
		a[12] = this.n14,
		a[13] = this.n24,
		a[14] = this.n34,
		a[15] = this.n44,
		a
	},
	flattenToArrayOffset : function (a, b) {
		return a[b] = this.n11,
		a[b + 1] = this.n21,
		a[b + 2] = this.n31,
		a[b + 3] = this.n41,
		a[b + 4] = this.n12,
		a[b + 5] = this.n22,
		a[b + 6] = this.n32,
		a[b + 7] = this.n42,
		a[b + 8] = this.n13,
		a[b + 9] = this.n23,
		a[b + 10] = this.n33,
		a[b + 11] = this.n43,
		a[b + 12] = this.n14,
		a[b + 13] = this.n24,
		a[b + 14] = this.n34,
		a[b + 15] = this.n44,
		a
	},
	setTranslation : function (a, b, c) {
		return this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1),
		this
	},
	setScale : function (a, b, c) {
		return this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1),
		this
	},
	setRotationX : function (a) {
		var b = Math.cos(a),
		a = Math.sin(a);
		return this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1),
		this
	},
	setRotationY : function (a) {
		var b = Math.cos(a),
		a = Math.sin(a);
		return this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1),
		this
	},
	setRotationZ : function (a) {
		var b = Math.cos(a),
		a = Math.sin(a);
		return this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
		this
	},
	setRotationAxis : function (a, b) {
		var c = Math.cos(b),
		d = Math.sin(b),
		e = 1 - c,
		f = a.x,
		g = a.y,
		h = a.z,
		i = e * f,
		j = e * g;
		return this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, j * g + c, j * h - d * f, 0, i * h - d * g, j * h + d * f, e * h * h + c, 0, 0, 0, 0, 1),
		this
	},
	setPosition : function (a) {
		return this.n14 = a.x,
		this.n24 = a.y,
		this.n34 = a.z,
		this
	},
	getPosition : function () {
		return THREE.Matrix4.__v1.set(this.n14, this.n24, this.n34)
	},
	getColumnX : function () {
		return THREE.Matrix4.__v1.set(this.n11, this.n21, this.n31)
	},
	getColumnY : function () {
		return THREE.Matrix4.__v1.set(this.n12, this.n22, this.n32)
	},
	getColumnZ : function () {
		return THREE.Matrix4.__v1.set(this.n13, this.n23, this.n33)
	},
	getInverse : function (a) {
		var b = a.n11,
		c = a.n12,
		d = a.n13,
		e = a.n14,
		f = a.n21,
		g = a.n22,
		h = a.n23,
		i = a.n24,
		j = a.n31,
		k = a.n32,
		l = a.n33,
		m = a.n34,
		n = a.n41,
		o = a.n42,
		p = a.n43,
		q = a.n44;
		return this.n11 = h * m * o - i * l * o + i * k * p - g * m * p - h * k * q + g * l * q,
		this.n12 = e * l * o - d * m * o - e * k * p + c * m * p + d * k * q - c * l * q,
		this.n13 = d * i * o - e * h * o + e * g * p - c * i * p - d * g * q + c * h * q,
		this.n14 = e * h * k - d * i * k - e * g * l + c * i * l + d * g * m - c * h * m,
		this.n21 = i * l * n - h * m * n - i * j * p + f * m * p + h * j * q - f * l * q,
		this.n22 = d * m * n - e * l * n + e * j * p - b * m * p - d * j * q + b * l * q,
		this.n23 = e * h * n - d * i * n - e * f * p + b * i * p + d * f * q - b * h * q,
		this.n24 = d * i * j - e * h * j + e * f * l - b * i * l - d * f * m + b * h * m,
		this.n31 = g * m * n - i * k * n + i * j * o - f * m * o - g * j * q + f * k * q,
		this.n32 = e * k * n - c * m * n - e * j * o + b * m * o + c * j * q - b * k * q,
		this.n33 = d * i * n - e * g * n + e * f * o - b * i * o - c * f * q + b * g * q,
		this.n34 = e * g * j - c * i * j - e * f * k + b * i * k + c * f * m - b * g * m,
		this.n41 = h * k * n - g * l * n - h * j * o + f * l * o + g * j * p - f * k * p,
		this.n42 = c * l * n - d * k * n + d * j * o - b * l * o - c * j * p + b * k * p,
		this.n43 = d * g * n - c * h * n - d * f * o + b * h * o + c * f * p - b * g * p,
		this.n44 = c * h * j - d * g * j + d * f * k - b * h * k - c * f * l + b * g * l,
		this.multiplyScalar(1 / a.determinant()),
		this
	},
	setRotationFromEuler : function (a, b) {
		var c = a.x,
		d = a.y,
		e = a.z,
		f = Math.cos(c),
		c = Math.sin(c),
		g = Math.cos(d),
		d = Math.sin(d),
		h = Math.cos(e),
		e = Math.sin(e);
		switch (b) {
		case "YXZ":
			var i = g * h,
			j = g * e,
			k = d * h,
			l = d * e;
			this.n11 = i + l * c,
			this.n12 = k * c - j,
			this.n13 = f * d,
			this.n21 = f * e,
			this.n22 = f * h,
			this.n23 = -c,
			this.n31 = j * c - k,
			this.n32 = l + i * c,
			this.n33 = f * g;
			break;
		case "ZXY":
			i = g * h,
			j = g * e,
			k = d * h,
			l = d * e,
			this.n11 = i - l * c,
			this.n12 = -f * e,
			this.n13 = k + j * c,
			this.n21 = j + k * c,
			this.n22 = f * h,
			this.n23 = l - i * c,
			this.n31 = -f * d,
			this.n32 = c,
			this.n33 = f * g;
			break;
		case "ZYX":
			i = f * h,
			j = f * e,
			k = c * h,
			l = c * e,
			this.n11 = g * h,
			this.n12 = k * d - j,
			this.n13 = i * d + l,
			this.n21 = g * e,
			this.n22 = l * d + i,
			this.n23 = j * d - k,
			this.n31 = -d,
			this.n32 = c * g,
			this.n33 = f * g;
			break;
		case "YZX":
			i = f * g,
			j = f * d,
			k = c * g,
			l = c * d,
			this.n11 = g * h,
			this.n12 = l - i * e,
			this.n13 = k * e + j,
			this.n21 = e,
			this.n22 = f * h,
			this.n23 = -c * h,
			this.n31 = -d * h,
			this.n32 = j * e + k,
			this.n33 = i - l * e;
			break;
		case "XZY":
			i = f * g,
			j = f * d,
			k = c * g,
			l = c * d,
			this.n11 = g * h,
			this.n12 = -e,
			this.n13 = d * h,
			this.n21 = i * e + l,
			this.n22 = f * h,
			this.n23 = j * e - k,
			this.n31 = k * e - j,
			this.n32 = c * h,
			this.n33 = l * e + i;
			break;
		default:
			i = f * h,
			j = f * e,
			k = c * h,
			l = c * e,
			this.n11 = g * h,
			this.n12 = -g * e,
			this.n13 = d,
			this.n21 = j + k * d,
			this.n22 = i - l * d,
			this.n23 = -c * g,
			this.n31 = l - i * d,
			this.n32 = k + j * d,
			this.n33 = f * g
		}
		return this
	},
	setRotationFromQuaternion : function (a) {
		var b = a.x,
		c = a.y,
		d = a.z,
		e = a.w,
		f = b + b,
		g = c + c,
		h = d + d,
		a = b * f,
		i = b * g;
		b *= h;
		var j = c * g;
		return c *= h,
		d *= h,
		f *= e,
		g *= e,
		e *= h,
		this.n11 = 1 - (j + d),
		this.n12 = i - e,
		this.n13 = b + g,
		this.n21 = i + e,
		this.n22 = 1 - (a + d),
		this.n23 = c - f,
		this.n31 = b - g,
		this.n32 = c + f,
		this.n33 = 1 - (a + j),
		this
	},
	scale : function (a) {
		var b = a.x,
		c = a.y,
		a = a.z;
		return this.n11 *= b,
		this.n12 *= c,
		this.n13 *= a,
		this.n21 *= b,
		this.n22 *= c,
		this.n23 *= a,
		this.n31 *= b,
		this.n32 *= c,
		this.n33 *= a,
		this.n41 *= b,
		this.n42 *= c,
		this.n43 *= a,
		this
	},
	compose : function (a, b, c) {
		var d = THREE.Matrix4.__m1,
		e = THREE.Matrix4.__m2;
		return d.identity(),
		d.setRotationFromQuaternion(b),
		e.setScale(c.x, c.y, c.z),
		this.multiply(d, e),
		this.n14 = a.x,
		this.n24 = a.y,
		this.n34 = a.z,
		this
	},
	decompose : function (a, b, c) {
		var d = THREE.Matrix4.__v1,
		e = THREE.Matrix4.__v2,
		f = THREE.Matrix4.__v3;
		return d.set(this.n11, this.n21, this.n31),
		e.set(this.n12, this.n22, this.n32),
		f.set(this.n13, this.n23, this.n33),
		a = a instanceof THREE.Vector3 ? a : new THREE.Vector3,
		b = b instanceof THREE.Quaternion ? b : new THREE.Quaternion,
		c = c instanceof THREE.Vector3 ? c : new THREE.Vector3,
		c.x = d.length(),
		c.y = e.length(),
		c.z = f.length(),
		a.x = this.n14,
		a.y = this.n24,
		a.z = this.n34,
		d = THREE.Matrix4.__m1,
		d.copy(this),
		d.n11 /= c.x,
		d.n21 /= c.x,
		d.n31 /= c.x,
		d.n12 /= c.y,
		d.n22 /= c.y,
		d.n32 /= c.y,
		d.n13 /= c.z,
		d.n23 /= c.z,
		d.n33 /= c.z,
		b.setFromRotationMatrix(d),
		[a, b, c]
	},
	extractPosition : function (a) {
		return this.n14 = a.n14,
		this.n24 = a.n24,
		this.n34 = a.n34,
		this
	},
	extractRotation : function (a) {
		var b = THREE.Matrix4.__v1,
		c = 1 / b.set(a.n11, a.n21, a.n31).length(),
		d = 1 / b.set(a.n12, a.n22, a.n32).length(),
		b = 1 / b.set(a.n13, a.n23, a.n33).length();
		return this.n11 = a.n11 * c,
		this.n21 = a.n21 * c,
		this.n31 = a.n31 * c,
		this.n12 = a.n12 * d,
		this.n22 = a.n22 * d,
		this.n32 = a.n32 * d,
		this.n13 = a.n13 * b,
		this.n23 = a.n23 * b,
		this.n33 = a.n33 * b,
		this
	}
}, THREE.Matrix4.makeInvert3x3 = function (a) {
	var b = a.m33,
	c = b.m,
	d = a.n33 * a.n22 - a.n32 * a.n23,
	e = -a.n33 * a.n21 + a.n31 * a.n23,
	f = a.n32 * a.n21 - a.n31 * a.n22,
	g = -a.n33 * a.n12 + a.n32 * a.n13,
	h = a.n33 * a.n11 - a.n31 * a.n13,
	i = -a.n32 * a.n11 + a.n31 * a.n12,
	j = a.n23 * a.n12 - a.n22 * a.n13,
	k = -a.n23 * a.n11 + a.n21 * a.n13,
	l = a.n22 * a.n11 - a.n21 * a.n12,
	a = a.n11 * d + a.n21 * g + a.n31 * j;
	return 0 === a && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible."),
	a = 1 / a,
	c[0] = a * d,
	c[1] = a * e,
	c[2] = a * f,
	c[3] = a * g,
	c[4] = a * h,
	c[5] = a * i,
	c[6] = a * j,
	c[7] = a * k,
	c[8] = a * l,
	b
}, THREE.Matrix4.makeFrustum = function (a, b, c, d, e, f) {
	var g;
	return g = new THREE.Matrix4,
	g.n11 = 2 * e / (b - a),
	g.n12 = 0,
	g.n13 = (b + a) / (b - a),
	g.n14 = 0,
	g.n21 = 0,
	g.n22 = 2 * e / (d - c),
	g.n23 = (d + c) / (d - c),
	g.n24 = 0,
	g.n31 = 0,
	g.n32 = 0,
	g.n33 =  - (f + e) / (f - e),
	g.n34 = -2 * f * e / (f - e),
	g.n41 = 0,
	g.n42 = 0,
	g.n43 = -1,
	g.n44 = 0,
	g
}, THREE.Matrix4.makePerspective = function (a, b, c, d) {
	var e,
	a = c * Math.tan(a * Math.PI / 360);
	return e = -a,
	THREE.Matrix4.makeFrustum(e * b, a * b, e, a, c, d)
}, THREE.Matrix4.makeOrtho = function (a, b, c, d, e, f) {
	var g,
	h,
	i,
	j;
	return g = new THREE.Matrix4,
	h = b - a,
	i = c - d,
	j = f - e,
	g.n11 = 2 / h,
	g.n12 = 0,
	g.n13 = 0,
	g.n14 =  - ((b + a) / h),
	g.n21 = 0,
	g.n22 = 2 / i,
	g.n23 = 0,
	g.n24 =  - ((c + d) / i),
	g.n31 = 0,
	g.n32 = 0,
	g.n33 = -2 / j,
	g.n34 =  - ((f + e) / j),
	g.n41 = 0,
	g.n42 = 0,
	g.n43 = 0,
	g.n44 = 1,
	g
}, THREE.Matrix4.__v1 = new THREE.Vector3, THREE.Matrix4.__v2 = new THREE.Vector3, THREE.Matrix4.__v3 = new THREE.Vector3, THREE.Matrix4.__m1 = new THREE.Matrix4, THREE.Matrix4.__m2 = new THREE.Matrix4, THREE.Object3D = function () {
	this.name = "",
	this.id = THREE.Object3DCount++,
	this.parent = void 0,
	this.children = [],
	this.up = new THREE.Vector3(0, 1, 0),
	this.position = new THREE.Vector3,
	this.rotation = new THREE.Vector3,
	this.eulerOrder = "XYZ",
	this.scale = new THREE.Vector3(1, 1, 1),
	this.flipSided = this.doubleSided = this.dynamic = !1,
	this.renderDepth = null,
	this.rotationAutoUpdate = !0,
	this.matrix = new THREE.Matrix4,
	this.matrixWorld = new THREE.Matrix4,
	this.matrixRotationWorld = new THREE.Matrix4,
	this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0,
	this.quaternion = new THREE.Quaternion,
	this.useQuaternion = !1,
	this.boundRadius = 0,
	this.boundRadiusScale = 1,
	this.visible = !0,
	this.receiveShadow = this.castShadow = !1,
	this.frustumCulled = !0,
	this._vector = new THREE.Vector3
}, THREE.Object3D.prototype = {
	constructor : THREE.Object3D,
	translate : function (a, b) {
		this.matrix.rotateAxis(b),
		this.position.addSelf(b.multiplyScalar(a))
	},
	translateX : function (a) {
		this.translate(a, this._vector.set(1, 0, 0))
	},
	translateY : function (a) {
		this.translate(a, this._vector.set(0, 1, 0))
	},
	translateZ : function (a) {
		this.translate(a, this._vector.set(0, 0, 1))
	},
	lookAt : function (a) {
		this.matrix.lookAt(a, this.position, this.up),
		this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
	},
	add : function (a) {
		if (-1 === this.children.indexOf(a)) {
			void 0 !== a.parent && a.parent.remove(a),
			a.parent = this,
			this.children.push(a);
			for (var b = this; void 0 !== b.parent; )
				b = b.parent;
			void 0 !== b && b instanceof THREE.Scene && b.addObject(a)
		}
	},
	remove : function (a) {
		var b = this.children.indexOf(a);
		if (-1 !== b) {
			for (a.parent = void 0, this.children.splice(b, 1), b = this; void 0 !== b.parent; )
				b = b.parent;
			void 0 !== b && b instanceof THREE.Scene && b.removeObject(a)
		}
	},
	getChildByName : function (a, b) {
		var c,
		d,
		e;
		for (c = 0, d = this.children.length; d > c; c++) {
			if (e = this.children[c], e.name === a)
				return e;
			if (b && (e = e.getChildByName(a, b), void 0 !== e))
				return e
		}
	},
	updateMatrix : function () {
		this.matrix.setPosition(this.position),
		this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder),
		(1 !== this.scale.x || 1 !== this.scale.y || 1 !== this.scale.z) && (this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))),
		this.matrixWorldNeedsUpdate = !0
	},
	updateMatrixWorld : function (a) {
		this.matrixAutoUpdate && this.updateMatrix(),
		(this.matrixWorldNeedsUpdate || a) && (this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0);
		for (var b = 0, c = this.children.length; c > b; b++)
			this.children[b].updateMatrixWorld(a)
	}
}, THREE.Object3DCount = 0, THREE.Projector = function () {
	function a() {
		var a = p[f] = p[f] || new THREE.RenderableObject;
		return f++,
		a
	}
	function b() {
		var a = q[h] = q[h] || new THREE.RenderableVertex;
		return h++,
		a
	}
	function c(a, b) {
		return b.z - a.z
	}
	function d(a, b) {
		var c = 0,
		d = 1,
		e = a.z + a.w,
		f = b.z + b.w,
		g = -a.z + a.w,
		h = -b.z + b.w;
		return e >= 0 && f >= 0 && g >= 0 && h >= 0 ? !0 : 0 > e && 0 > f || 0 > g && 0 > h ? !1 : (0 > e ? c = Math.max(c, e / (e - f)) : 0 > f && (d = Math.min(d, e / (e - f))), 0 > g ? c = Math.max(c, g / (g - h)) : 0 > h && (d = Math.min(d, g / (g - h))), c > d ? !1 : (a.lerpSelf(b, c), b.lerpSelf(a, 1 - d), !0))
	}
	var e,
	f,
	g,
	h,
	i,
	j,
	k,
	l,
	m,
	n,
	o,
	p = [],
	q = [],
	r = [],
	s = [],
	t = [],
	u = [],
	v = {
		objects : [],
		sprites : [],
		lights : [],
		elements : []
	},
	w = new THREE.Vector3,
	x = new THREE.Vector4,
	y = new THREE.Matrix4,
	z = new THREE.Matrix4,
	A = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
	B = new THREE.Vector4,
	C = new THREE.Vector4;
	this.computeFrustum = function (a) {
		for (A[0].set(a.n41 - a.n11, a.n42 - a.n12, a.n43 - a.n13, a.n44 - a.n14), A[1].set(a.n41 + a.n11, a.n42 + a.n12, a.n43 + a.n13, a.n44 + a.n14), A[2].set(a.n41 + a.n21, a.n42 + a.n22, a.n43 + a.n23, a.n44 + a.n24), A[3].set(a.n41 - a.n21, a.n42 - a.n22, a.n43 - a.n23, a.n44 - a.n24), A[4].set(a.n41 - a.n31, a.n42 - a.n32, a.n43 - a.n33, a.n44 - a.n34), A[5].set(a.n41 + a.n31, a.n42 + a.n32, a.n43 + a.n33, a.n44 + a.n34), a = 0; 6 > a; a++) {
			var b = A[a];
			b.divideScalar(Math.sqrt(b.x * b.x + b.y * b.y + b.z * b.z))
		}
	},
	this.projectVector = function (a, b) {
		return b.matrixWorldInverse.getInverse(b.matrixWorld),
		y.multiply(b.projectionMatrix, b.matrixWorldInverse),
		y.multiplyVector3(a),
		a
	},
	this.unprojectVector = function (a, b) {
		return b.projectionMatrixInverse.getInverse(b.projectionMatrix),
		y.multiply(b.matrixWorld, b.projectionMatrixInverse),
		y.multiplyVector3(a),
		a
	},
	this.pickingRay = function (a, b) {
		var c;
		return a.z = -1,
		c = new THREE.Vector3(a.x, a.y, 1),
		this.unprojectVector(a, b),
		this.unprojectVector(c, b),
		c.subSelf(a).normalize(),
		new THREE.Ray(a, c)
	},
	this.projectGraph = function (b, d) {
		f = 0,
		v.objects.length = 0,
		v.sprites.length = 0,
		v.lights.length = 0;
		var g = function (b) {
			if (b.visible !== !1) {
				var c;
				if ((c = b instanceof THREE.Mesh || b instanceof THREE.Line) && !(c = b.frustumCulled === !1))
					a : {
						for (var d = b.matrixWorld, f = -b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)), h = 0; 6 > h; h++)
							if (c = A[h].x * d.n14 + A[h].y * d.n24 + A[h].z * d.n34 + A[h].w, f >= c) {
								c = !1;
								break a
							}
						c = !0
					}
				for (c ? (y.multiplyVector3(w.copy(b.position)), e = a(), e.object = b, e.z = w.z, v.objects.push(e)) : b instanceof THREE.Sprite || b instanceof THREE.Particle ? (y.multiplyVector3(w.copy(b.position)), e = a(), e.object = b, e.z = w.z, v.sprites.push(e)) : b instanceof THREE.Light && v.lights.push(b), c = 0, d = b.children.length; d > c; c++)
					g(b.children[c])
			}
		};
		return g(b),
		d && v.objects.sort(c),
		v
	},
	this.projectScene = function (a, e, f) {
		var p,
		w,
		A,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N,
		O,
		P,
		Q = e.near,
		R = e.far;
		for (o = m = k = j = 0, v.elements.length = 0, void 0 === e.parent && (console.warn("DEPRECATED: Camera hasn't been added to a Scene. Adding it..."), a.add(e)), a.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), y.multiply(e.projectionMatrix, e.matrixWorldInverse), this.computeFrustum(y), v = this.projectGraph(a, !1), a = 0, p = v.objects.length; p > a; a++)
			if (I = v.objects[a].object, J = I.matrixWorld, L = I.material, h = 0, I instanceof THREE.Mesh) {
				for (K = I.geometry, M = I.geometry.materials, D = K.vertices, N = K.faces, O = K.faceVertexUvs, K = I.matrixRotationWorld.extractRotation(J), w = 0, A = D.length; A > w; w++)
					g = b(), g.positionWorld.copy(D[w].position), J.multiplyVector3(g.positionWorld), g.positionScreen.copy(g.positionWorld), y.multiplyVector4(g.positionScreen), g.positionScreen.x /= g.positionScreen.w, g.positionScreen.y /= g.positionScreen.w, g.visible = g.positionScreen.z > Q && g.positionScreen.z < R;
				for (D = 0, w = N.length; w > D; D++) {
					if (A = N[D], A instanceof THREE.Face3) {
						if (E = q[A.a], F = q[A.b], G = q[A.c], !(E.visible && F.visible && G.visible) || !I.doubleSided && I.flipSided == (G.positionScreen.x - E.positionScreen.x) * (F.positionScreen.y - E.positionScreen.y) - (G.positionScreen.y - E.positionScreen.y) * (F.positionScreen.x - E.positionScreen.x) < 0)
							continue;
						H = r[j] = r[j] || new THREE.RenderableFace3,
						j++,
						i = H,
						i.v1.copy(E),
						i.v2.copy(F),
						i.v3.copy(G)
					} else if (A instanceof THREE.Face4) {
						if (E = q[A.a], F = q[A.b], G = q[A.c], H = q[A.d], !(E.visible && F.visible && G.visible && H.visible) || !I.doubleSided && I.flipSided == ((H.positionScreen.x - E.positionScreen.x) * (F.positionScreen.y - E.positionScreen.y) - (H.positionScreen.y - E.positionScreen.y) * (F.positionScreen.x - E.positionScreen.x) < 0 || (F.positionScreen.x - G.positionScreen.x) * (H.positionScreen.y - G.positionScreen.y) - (F.positionScreen.y - G.positionScreen.y) * (H.positionScreen.x - G.positionScreen.x) < 0))
							continue;
						P = s[k] = s[k] || new THREE.RenderableFace4,
						k++,
						i = P,
						i.v1.copy(E),
						i.v2.copy(F),
						i.v3.copy(G),
						i.v4.copy(H)
					}
					for (i.normalWorld.copy(A.normal), K.multiplyVector3(i.normalWorld), i.centroidWorld.copy(A.centroid), J.multiplyVector3(i.centroidWorld), i.centroidScreen.copy(i.centroidWorld), y.multiplyVector3(i.centroidScreen), G = A.vertexNormals, E = 0, F = G.length; F > E; E++)
						H = i.vertexNormalsWorld[E], H.copy(G[E]), K.multiplyVector3(H);
					for (E = 0, F = O.length; F > E; E++)
						if (P = O[E][D])
							for (G = 0, H = P.length; H > G; G++)
								i.uvs[E][G] = P[G];
					i.material = L,
					i.faceMaterial = null !== A.materialIndex ? M[A.materialIndex] : null,
					i.z = i.centroidScreen.z,
					v.elements.push(i)
				}
			} else if (I instanceof THREE.Line)
				for (z.multiply(y, J), D = I.geometry.vertices, E = b(), E.positionScreen.copy(D[0].position), z.multiplyVector4(E.positionScreen), w = 1, A = D.length; A > w; w++)
					E = b(), E.positionScreen.copy(D[w].position), z.multiplyVector4(E.positionScreen), F = q[h - 2], B.copy(E.positionScreen), C.copy(F.positionScreen), d(B, C) && (B.multiplyScalar(1 / B.w), C.multiplyScalar(1 / C.w), I = t[m] = t[m] || new THREE.RenderableLine, m++, l = I, l.v1.positionScreen.copy(B), l.v2.positionScreen.copy(C), l.z = Math.max(B.z, C.z), l.material = L, v.elements.push(l));
		for (a = 0, p = v.sprites.length; p > a; a++)
			I = v.sprites[a].object, J = I.matrixWorld, I instanceof THREE.Particle && (x.set(J.n14, J.n24, J.n34, 1), y.multiplyVector4(x), x.z /= x.w, x.z > 0 && x.z < 1) && (Q = u[o] = u[o] || new THREE.RenderableParticle, o++, n = Q, n.x = x.x / x.w, n.y = x.y / x.w, n.z = x.z, n.rotation = I.rotation.z, n.scale.x = I.scale.x * Math.abs(n.x - (x.x + e.projectionMatrix.n11) / (x.w + e.projectionMatrix.n14)), n.scale.y = I.scale.y * Math.abs(n.y - (x.y + e.projectionMatrix.n22) / (x.w + e.projectionMatrix.n24)), n.material = I.material, v.elements.push(n));
		return f && v.elements.sort(c),
		v
	}
}, THREE.Quaternion = function (a, b, c, d) {
	this.set(a || 0, b || 0, c || 0, void 0 !== d ? d : 1)
}, THREE.Quaternion.prototype = {
	constructor : THREE.Quaternion,
	set : function (a, b, c, d) {
		return this.x = a,
		this.y = b,
		this.z = c,
		this.w = d,
		this
	},
	copy : function (a) {
		return this.x = a.x,
		this.y = a.y,
		this.z = a.z,
		this.w = a.w,
		this
	},
	setFromEuler : function (a) {
		var b = Math.PI / 360,
		c = a.x * b,
		d = a.y * b,
		e = a.z * b,
		a = Math.cos(d),
		d = Math.sin(d),
		b = Math.cos(-e),
		e = Math.sin(-e),
		f = Math.cos(c),
		c = Math.sin(c),
		g = a * b,
		h = d * e;
		return this.w = g * f - h * c,
		this.x = g * c + h * f,
		this.y = d * b * f + a * e * c,
		this.z = a * e * f - d * b * c,
		this
	},
	setFromAxisAngle : function (a, b) {
		var c = b / 2,
		d = Math.sin(c);
		return this.x = a.x * d,
		this.y = a.y * d,
		this.z = a.z * d,
		this.w = Math.cos(c),
		this
	},
	setFromRotationMatrix : function (a) {
		var b = Math.pow(a.determinant(), 1 / 3);
		return this.w = Math.sqrt(Math.max(0, b + a.n11 + a.n22 + a.n33)) / 2,
		this.x = Math.sqrt(Math.max(0, b + a.n11 - a.n22 - a.n33)) / 2,
		this.y = Math.sqrt(Math.max(0, b - a.n11 + a.n22 - a.n33)) / 2,
		this.z = Math.sqrt(Math.max(0, b - a.n11 - a.n22 + a.n33)) / 2,
		this.x = a.n32 - a.n23 < 0 ? -Math.abs(this.x) : Math.abs(this.x),
		this.y = a.n13 - a.n31 < 0 ? -Math.abs(this.y) : Math.abs(this.y),
		this.z = a.n21 - a.n12 < 0 ? -Math.abs(this.z) : Math.abs(this.z),
		this.normalize(),
		this
	},
	calculateW : function () {
		return this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z)),
		this
	},
	inverse : function () {
		return this.x *= -1,
		this.y *= -1,
		this.z *= -1,
		this
	},
	length : function () {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
	},
	normalize : function () {
		var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		return 0 === a ? this.w = this.z = this.y = this.x = 0 : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a),
		this
	},
	multiplySelf : function (a) {
		var b = this.x,
		c = this.y,
		d = this.z,
		e = this.w,
		f = a.x,
		g = a.y,
		h = a.z,
		a = a.w;
		return this.x = b * a + e * f + c * h - d * g,
		this.y = c * a + e * g + d * f - b * h,
		this.z = d * a + e * h + b * g - c * f,
		this.w = e * a - b * f - c * g - d * h,
		this
	},
	multiply : function (a, b) {
		return this.x = a.x * b.w + a.y * b.z - a.z * b.y + a.w * b.x,
		this.y = -a.x * b.z + a.y * b.w + a.z * b.x + a.w * b.y,
		this.z = a.x * b.y - a.y * b.x + a.z * b.w + a.w * b.z,
		this.w = -a.x * b.x - a.y * b.y - a.z * b.z + a.w * b.w,
		this
	},
	multiplyVector3 : function (a, b) {
		b || (b = a);
		var c = a.x,
		d = a.y,
		e = a.z,
		f = this.x,
		g = this.y,
		h = this.z,
		i = this.w,
		j = i * c + g * e - h * d,
		k = i * d + h * c - f * e,
		l = i * e + f * d - g * c,
		c = -f * c - g * d - h * e;
		return b.x = j * i + c * -f + k * -h - l * -g,
		b.y = k * i + c * -g + l * -f - j * -h,
		b.z = l * i + c * -h + j * -g - k * -f,
		b
	}
}, THREE.Quaternion.slerp = function (a, b, c, d) {
	var e = a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z;
	if (0 > e ? (c.w = -b.w, c.x = -b.x, c.y = -b.y, c.z = -b.z, e = -e) : c.copy(b), Math.abs(e) >= 1)
		return c.w = a.w, c.x = a.x, c.y = a.y, c.z = a.z, c;
	var f = Math.acos(e),
	e = Math.sqrt(1 - e * e);
	return Math.abs(e) < .001 ? (c.w = .5 * (a.w + b.w), c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y), c.z = .5 * (a.z + b.z), c) : (b = Math.sin((1 - d) * f) / e, d = Math.sin(d * f) / e, c.w = a.w * b + c.w * d, c.x = a.x * b + c.x * d, c.y = a.y * b + c.y * d, c.z = a.z * b + c.z * d, c)
}, THREE.Vertex = function (a) {
	this.position = a || new THREE.Vector3
}, THREE.Face3 = function (a, b, c, d, e, f) {
	this.a = a,
	this.b = b,
	this.c = c,
	this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3,
	this.vertexNormals = d instanceof Array ? d : [],
	this.color = e instanceof THREE.Color ? e : new THREE.Color,
	this.vertexColors = e instanceof Array ? e : [],
	this.vertexTangents = [],
	this.materialIndex = f,
	this.centroid = new THREE.Vector3
}, THREE.Face4 = function (a, b, c, d, e, f, g) {
	this.a = a,
	this.b = b,
	this.c = c,
	this.d = d,
	this.normal = e instanceof THREE.Vector3 ? e : new THREE.Vector3,
	this.vertexNormals = e instanceof Array ? e : [],
	this.color = f instanceof THREE.Color ? f : new THREE.Color,
	this.vertexColors = f instanceof Array ? f : [],
	this.vertexTangents = [],
	this.materialIndex = g,
	this.centroid = new THREE.Vector3
}, THREE.UV = function (a, b) {
	this.u = a || 0,
	this.v = b || 0
}, THREE.UV.prototype = {
	constructor : THREE.UV,
	set : function (a, b) {
		return this.u = a,
		this.v = b,
		this
	},
	copy : function (a) {
		return this.u = a.u,
		this.v = a.v,
		this
	},
	clone : function () {
		return new THREE.UV(this.u, this.v)
	}
}, THREE.Geometry = function () {
	this.id = THREE.GeometryCount++,
	this.vertices = [],
	this.colors = [],
	this.materials = [],
	this.faces = [],
	this.faceUvs = [[]],
	this.faceVertexUvs = [[]],
	this.morphTargets = [],
	this.morphColors = [],
	this.skinWeights = [],
	this.skinIndices = [],
	this.boundingSphere = this.boundingBox = null,
	this.dynamic = this.hasTangents = !1
}, THREE.Geometry.prototype = {
	constructor : THREE.Geometry,
	applyMatrix : function (a) {
		var b = new THREE.Matrix4;
		b.extractRotation(a, new THREE.Vector3(1, 1, 1));
		for (var c = 0, d = this.vertices.length; d > c; c++)
			a.multiplyVector3(this.vertices[c].position);
		for (c = 0, d = this.faces.length; d > c; c++) {
			var e = this.faces[c];
			b.multiplyVector3(e.normal);
			for (var f = 0, g = e.vertexNormals.length; g > f; f++)
				b.multiplyVector3(e.vertexNormals[f]);
			a.multiplyVector3(e.centroid)
		}
	},
	computeCentroids : function () {
		var a,
		b,
		c;
		for (a = 0, b = this.faces.length; b > a; a++)
			c = this.faces[a], c.centroid.set(0, 0, 0), c instanceof THREE.Face3 ? (c.centroid.addSelf(this.vertices[c.a].position), c.centroid.addSelf(this.vertices[c.b].position), c.centroid.addSelf(this.vertices[c.c].position), c.centroid.divideScalar(3)) : c instanceof THREE.Face4 && (c.centroid.addSelf(this.vertices[c.a].position), c.centroid.addSelf(this.vertices[c.b].position), c.centroid.addSelf(this.vertices[c.c].position), c.centroid.addSelf(this.vertices[c.d].position), c.centroid.divideScalar(4))
	},
	computeFaceNormals : function () {
		var a,
		b,
		c,
		d,
		e,
		f,
		g = new THREE.Vector3,
		h = new THREE.Vector3;
		for (a = 0, b = this.faces.length; b > a; a++)
			c = this.faces[a], d = this.vertices[c.a], e = this.vertices[c.b], f = this.vertices[c.c], g.sub(f.position, e.position), h.sub(d.position, e.position), g.crossSelf(h), g.isZero() || g.normalize(), c.normal.copy(g)
	},
	computeVertexNormals : function () {
		var a,
		b,
		c,
		d;
		if (void 0 === this.__tmpVertices) {
			for (d = this.__tmpVertices = Array(this.vertices.length), a = 0, b = this.vertices.length; b > a; a++)
				d[a] = new THREE.Vector3;
			for (a = 0, b = this.faces.length; b > a; a++)
				c = this.faces[a], c instanceof THREE.Face3 ? c.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3] : c instanceof THREE.Face4 && (c.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3])
		} else
			for (d = this.__tmpVertices, a = 0, b = this.vertices.length; b > a; a++)
				d[a].set(0, 0, 0);
		for (a = 0, b = this.faces.length; b > a; a++)
			c = this.faces[a], c instanceof THREE.Face3 ? (d[c.a].addSelf(c.normal), d[c.b].addSelf(c.normal), d[c.c].addSelf(c.normal)) : c instanceof THREE.Face4 && (d[c.a].addSelf(c.normal), d[c.b].addSelf(c.normal), d[c.c].addSelf(c.normal), d[c.d].addSelf(c.normal));
		for (a = 0, b = this.vertices.length; b > a; a++)
			d[a].normalize();
		for (a = 0, b = this.faces.length; b > a; a++)
			c = this.faces[a], c instanceof THREE.Face3 ? (c.vertexNormals[0].copy(d[c.a]), c.vertexNormals[1].copy(d[c.b]), c.vertexNormals[2].copy(d[c.c])) : c instanceof THREE.Face4 && (c.vertexNormals[0].copy(d[c.a]), c.vertexNormals[1].copy(d[c.b]), c.vertexNormals[2].copy(d[c.c]), c.vertexNormals[3].copy(d[c.d]))
	},
	computeTangents : function () {
		function a(a, b, c, d, e, f, y) {
			h = a.vertices[b].position,
			i = a.vertices[c].position,
			j = a.vertices[d].position,
			k = g[e],
			l = g[f],
			m = g[y],
			n = i.x - h.x,
			o = j.x - h.x,
			p = i.y - h.y,
			q = j.y - h.y,
			r = i.z - h.z,
			s = j.z - h.z,
			t = l.u - k.u,
			u = m.u - k.u,
			v = l.v - k.v,
			w = m.v - k.v,
			x = 1 / (t * w - u * v),
			B.set((w * n - v * o) * x, (w * p - v * q) * x, (w * r - v * s) * x),
			C.set((t * o - u * n) * x, (t * q - u * p) * x, (t * s - u * r) * x),
			z[b].addSelf(B),
			z[c].addSelf(B),
			z[d].addSelf(B),
			A[b].addSelf(C),
			A[c].addSelf(C),
			A[d].addSelf(C)
		}
		var b,
		c,
		d,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l,
		m,
		n,
		o,
		p,
		q,
		r,
		s,
		t,
		u,
		v,
		w,
		x,
		y,
		z = [],
		A = [],
		B = new THREE.Vector3,
		C = new THREE.Vector3,
		D = new THREE.Vector3,
		E = new THREE.Vector3,
		F = new THREE.Vector3;
		for (b = 0, c = this.vertices.length; c > b; b++)
			z[b] = new THREE.Vector3, A[b] = new THREE.Vector3;
		for (b = 0, c = this.faces.length; c > b; b++)
			f = this.faces[b], g = this.faceVertexUvs[0][b], f instanceof THREE.Face3 ? a(this, f.a, f.b, f.c, 0, 1, 2) : f instanceof THREE.Face4 && (a(this, f.a, f.b, f.c, 0, 1, 2), a(this, f.a, f.b, f.d, 0, 1, 3));
		var G = ["a", "b", "c", "d"];
		for (b = 0, c = this.faces.length; c > b; b++)
			for (f = this.faces[b], d = 0; d < f.vertexNormals.length; d++)
				F.copy(f.vertexNormals[d]), e = f[G[d]], y = z[e], D.copy(y), D.subSelf(F.multiplyScalar(F.dot(y))).normalize(), E.cross(f.vertexNormals[d], y), e = E.dot(A[e]), e = 0 > e ? -1 : 1, f.vertexTangents[d] = new THREE.Vector4(D.x, D.y, D.z, e);
		this.hasTangents = !0
	},
	computeBoundingBox : function () {
		var a;
		if (this.vertices.length > 0) {
			this.boundingBox = {
				x : [this.vertices[0].position.x, this.vertices[0].position.x],
				y : [this.vertices[0].position.y, this.vertices[0].position.y],
				z : [this.vertices[0].position.z, this.vertices[0].position.z]
			};
			for (var b = 1, c = this.vertices.length; c > b; b++)
				a = this.vertices[b], a.position.x < this.boundingBox.x[0] ? this.boundingBox.x[0] = a.position.x : a.position.x > this.boundingBox.x[1] && (this.boundingBox.x[1] = a.position.x), a.position.y < this.boundingBox.y[0] ? this.boundingBox.y[0] = a.position.y : a.position.y > this.boundingBox.y[1] && (this.boundingBox.y[1] = a.position.y), a.position.z < this.boundingBox.z[0] ? this.boundingBox.z[0] = a.position.z : a.position.z > this.boundingBox.z[1] && (this.boundingBox.z[1] = a.position.z)
		}
	},
	computeBoundingSphere : function () {
		for (var a = 0, b = 0, c = this.vertices.length; c > b; b++)
			a = Math.max(a, this.vertices[b].position.length());
		this.boundingSphere = {
			radius : a
		}
	},
	mergeVertices : function () {
		var a,
		b,
		c,
		d = {},
		e = [],
		f = [],
		g = Math.pow(10, 4);
		for (b = 0, c = this.vertices.length; c > b; b++)
			a = this.vertices[b].position, a = [Math.round(a.x * g), Math.round(a.y * g), Math.round(a.z * g)].join("_"), void 0 === d[a] ? (d[a] = b, e.push(this.vertices[b]), f[b] = e.length - 1) : f[b] = f[d[a]];
		for (b = 0, c = this.faces.length; c > b; b++)
			d = this.faces[b], d instanceof THREE.Face3 ? (d.a = f[d.a], d.b = f[d.b], d.c = f[d.c]) : d instanceof THREE.Face4 && (d.a = f[d.a], d.b = f[d.b], d.c = f[d.c], d.d = f[d.d]);
		this.vertices = e
	}
}, THREE.GeometryCount = 0, THREE.Camera = function () {
	return arguments.length ? (console.warn("DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."), new THREE.PerspectiveCamera(arguments[0], arguments[1], arguments[2], arguments[3])) : (THREE.Object3D.call(this), this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4, void(this.projectionMatrixInverse = new THREE.Matrix4))
}, THREE.Camera.prototype = new THREE.Object3D, THREE.Camera.prototype.constructor = THREE.Camera, THREE.Camera.prototype.lookAt = function (a) {
	this.matrix.lookAt(this.position, a, this.up),
	this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
}, THREE.OrthographicCamera = function (a, b, c, d, e, f) {
	THREE.Camera.call(this),
	this.left = a,
	this.right = b,
	this.top = c,
	this.bottom = d,
	this.near = void 0 !== e ? e : .1,
	this.far = void 0 !== f ? f : 2e3,
	this.updateProjectionMatrix()
}, THREE.OrthographicCamera.prototype = new THREE.Camera, THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera, THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
	this.projectionMatrix = THREE.Matrix4.makeOrtho(this.left, this.right, this.top, this.bottom, this.near, this.far)
}, THREE.PerspectiveCamera = function (a, b, c, d) {
	THREE.Camera.call(this),
	this.fov = void 0 !== a ? a : 50,
	this.aspect = void 0 !== b ? b : 1,
	this.near = void 0 !== c ? c : .1,
	this.far = void 0 !== d ? d : 2e3,
	this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype = new THREE.Camera, THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera, THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
	this.fov = 2 * Math.atan((void 0 !== b ? b : 43.25) / (2 * a)),
	this.fov *= 180 / Math.PI,
	this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) {
	this.fullWidth = a,
	this.fullHeight = b,
	this.x = c,
	this.y = d,
	this.width = e,
	this.height = f,
	this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
	if (this.fullWidth) {
		var a = this.fullWidth / this.fullHeight,
		b = Math.tan(this.fov * Math.PI / 360) * this.near,
		c = -b,
		d = a * c,
		a = Math.abs(a * b - d),
		c = Math.abs(b - c);
		this.projectionMatrix = THREE.Matrix4.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far)
	} else
		this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
}, THREE.Light = function (a) {
	THREE.Object3D.call(this),
	this.color = new THREE.Color(a)
}, THREE.Light.prototype = new THREE.Object3D, THREE.Light.prototype.constructor = THREE.Light, THREE.Light.prototype.supr = THREE.Object3D.prototype, THREE.AmbientLight = function (a) {
	THREE.Light.call(this, a)
}, THREE.AmbientLight.prototype = new THREE.Light, THREE.AmbientLight.prototype.constructor = THREE.AmbientLight, THREE.DirectionalLight = function (a, b, c) {
	THREE.Light.call(this, a),
	this.position = new THREE.Vector3(0, 1, 0),
	this.intensity = void 0 !== b ? b : 1,
	this.distance = void 0 !== c ? c : 0
}, THREE.DirectionalLight.prototype = new THREE.Light, THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight, THREE.PointLight = function (a, b, c) {
	THREE.Light.call(this, a),
	this.position = new THREE.Vector3(0, 0, 0),
	this.intensity = void 0 !== b ? b : 1,
	this.distance = void 0 !== c ? c : 0
}, THREE.PointLight.prototype = new THREE.Light, THREE.PointLight.prototype.constructor = THREE.PointLight, THREE.Material = function (a) {
	this.name = "",
	this.id = THREE.MaterialCount++,
	a = a || {},
	this.opacity = void 0 !== a.opacity ? a.opacity : 1,
	this.transparent = void 0 !== a.transparent ? a.transparent : !1,
	this.blending = void 0 !== a.blending ? a.blending : THREE.NormalBlending,
	this.depthTest = void 0 !== a.depthTest ? a.depthTest : !0,
	this.depthWrite = void 0 !== a.depthWrite ? a.depthWrite : !0,
	this.polygonOffset = void 0 !== a.polygonOffset ? a.polygonOffset : !1,
	this.polygonOffsetFactor = void 0 !== a.polygonOffsetFactor ? a.polygonOffsetFactor : 0,
	this.polygonOffsetUnits = void 0 !== a.polygonOffsetUnits ? a.polygonOffsetUnits : 0,
	this.alphaTest = void 0 !== a.alphaTest ? a.alphaTest : 0,
	this.overdraw = void 0 !== a.overdraw ? a.overdraw : !1
}, THREE.MaterialCount = 0, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NormalBlending = 0, THREE.AdditiveBlending = 1, THREE.SubtractiveBlending = 2, THREE.MultiplyBlending = 3, THREE.AdditiveAlphaBlending = 4, THREE.LineBasicMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215),
	this.linewidth = void 0 !== a.linewidth ? a.linewidth : 1,
	this.linecap = void 0 !== a.linecap ? a.linecap : "round",
	this.linejoin = void 0 !== a.linejoin ? a.linejoin : "round",
	this.vertexColors = a.vertexColors ? a.vertexColors : !1,
	this.fog = void 0 !== a.fog ? a.fog : !0
}, THREE.LineBasicMaterial.prototype = new THREE.Material, THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial, THREE.MeshBasicMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215),
	this.map = void 0 !== a.map ? a.map : null,
	this.lightMap = void 0 !== a.lightMap ? a.lightMap : null,
	this.envMap = void 0 !== a.envMap ? a.envMap : null,
	this.combine = void 0 !== a.combine ? a.combine : THREE.MultiplyOperation,
	this.reflectivity = void 0 !== a.reflectivity ? a.reflectivity : 1,
	this.refractionRatio = void 0 !== a.refractionRatio ? a.refractionRatio : .98,
	this.fog = void 0 !== a.fog ? a.fog : !0,
	this.shading = void 0 !== a.shading ? a.shading : THREE.SmoothShading,
	this.wireframe = void 0 !== a.wireframe ? a.wireframe : !1,
	this.wireframeLinewidth = void 0 !== a.wireframeLinewidth ? a.wireframeLinewidth : 1,
	this.wireframeLinecap = void 0 !== a.wireframeLinecap ? a.wireframeLinecap : "round",
	this.wireframeLinejoin = void 0 !== a.wireframeLinejoin ? a.wireframeLinejoin : "round",
	this.vertexColors = void 0 !== a.vertexColors ? a.vertexColors : !1,
	this.skinning = void 0 !== a.skinning ? a.skinning : !1,
	this.morphTargets = void 0 !== a.morphTargets ? a.morphTargets : !1
}, THREE.MeshBasicMaterial.prototype = new THREE.Material, THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial, THREE.MeshLambertMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215),
	this.ambient = void 0 !== a.ambient ? new THREE.Color(a.ambient) : new THREE.Color(328965),
	this.map = void 0 !== a.map ? a.map : null,
	this.lightMap = void 0 !== a.lightMap ? a.lightMap : null,
	this.envMap = void 0 !== a.envMap ? a.envMap : null,
	this.combine = void 0 !== a.combine ? a.combine : THREE.MultiplyOperation,
	this.reflectivity = void 0 !== a.reflectivity ? a.reflectivity : 1,
	this.refractionRatio = void 0 !== a.refractionRatio ? a.refractionRatio : .98,
	this.fog = void 0 !== a.fog ? a.fog : !0,
	this.shading = void 0 !== a.shading ? a.shading : THREE.SmoothShading,
	this.wireframe = void 0 !== a.wireframe ? a.wireframe : !1,
	this.wireframeLinewidth = void 0 !== a.wireframeLinewidth ? a.wireframeLinewidth : 1,
	this.wireframeLinecap = void 0 !== a.wireframeLinecap ? a.wireframeLinecap : "round",
	this.wireframeLinejoin = void 0 !== a.wireframeLinejoin ? a.wireframeLinejoin : "round",
	this.vertexColors = void 0 !== a.vertexColors ? a.vertexColors : !1,
	this.skinning = void 0 !== a.skinning ? a.skinning : !1,
	this.morphTargets = void 0 !== a.morphTargets ? a.morphTargets : !1
}, THREE.MeshLambertMaterial.prototype = new THREE.Material, THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial, THREE.MeshPhongMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215),
	this.ambient = void 0 !== a.ambient ? new THREE.Color(a.ambient) : new THREE.Color(328965),
	this.specular = void 0 !== a.specular ? new THREE.Color(a.specular) : new THREE.Color(1118481),
	this.shininess = void 0 !== a.shininess ? a.shininess : 30,
	this.metal = void 0 !== a.metal ? a.metal : !1,
	this.perPixel = void 0 !== a.perPixel ? a.perPixel : !1,
	this.map = void 0 !== a.map ? a.map : null,
	this.lightMap = void 0 !== a.lightMap ? a.lightMap : null,
	this.envMap = void 0 !== a.envMap ? a.envMap : null,
	this.combine = void 0 !== a.combine ? a.combine : THREE.MultiplyOperation,
	this.reflectivity = void 0 !== a.reflectivity ? a.reflectivity : 1,
	this.refractionRatio = void 0 !== a.refractionRatio ? a.refractionRatio : .98,
	this.fog = void 0 !== a.fog ? a.fog : !0,
	this.shading = void 0 !== a.shading ? a.shading : THREE.SmoothShading,
	this.wireframe = void 0 !== a.wireframe ? a.wireframe : !1,
	this.wireframeLinewidth = void 0 !== a.wireframeLinewidth ? a.wireframeLinewidth : 1,
	this.wireframeLinecap = void 0 !== a.wireframeLinecap ? a.wireframeLinecap : "round",
	this.wireframeLinejoin = void 0 !== a.wireframeLinejoin ? a.wireframeLinejoin : "round",
	this.vertexColors = void 0 !== a.vertexColors ? a.vertexColors : !1,
	this.skinning = void 0 !== a.skinning ? a.skinning : !1,
	this.morphTargets = void 0 !== a.morphTargets ? a.morphTargets : !1
}, THREE.MeshPhongMaterial.prototype = new THREE.Material, THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial, THREE.MeshDepthMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.shading = void 0 !== a.shading ? a.shading : THREE.SmoothShading,
	this.wireframe = void 0 !== a.wireframe ? a.wireframe : !1,
	this.wireframeLinewidth = void 0 !== a.wireframeLinewidth ? a.wireframeLinewidth : 1
}, THREE.MeshDepthMaterial.prototype = new THREE.Material, THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial, THREE.MeshNormalMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.shading = a.shading ? a.shading : THREE.FlatShading,
	this.wireframe = a.wireframe ? a.wireframe : !1,
	this.wireframeLinewidth = a.wireframeLinewidth ? a.wireframeLinewidth : 1
}, THREE.MeshNormalMaterial.prototype = new THREE.Material, THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial, THREE.MeshFaceMaterial = function () {}, THREE.ParticleBasicMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215),
	this.map = void 0 !== a.map ? a.map : null,
	this.size = void 0 !== a.size ? a.size : 1,
	this.sizeAttenuation = void 0 !== a.sizeAttenuation ? a.sizeAttenuation : !0,
	this.vertexColors = void 0 !== a.vertexColors ? a.vertexColors : !1,
	this.fog = void 0 !== a.fog ? a.fog : !0
}, THREE.ParticleBasicMaterial.prototype = new THREE.Material, THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial, THREE.ParticleCanvasMaterial = function (a) {
	THREE.Material.call(this, a),
	a = a || {},
	this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215),
	this.program = void 0 !== a.program ? a.program : function () {}

}, THREE.ParticleCanvasMaterial.prototype = new THREE.Material, THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial, THREE.Texture = function (a, b, c, d, e, f) {
	this.id = THREE.TextureCount++,
	this.image = a,
	this.mapping = void 0 !== b ? b : new THREE.UVMapping,
	this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping,
	this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping,
	this.magFilter = void 0 !== e ? e : THREE.LinearFilter,
	this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter,
	this.offset = new THREE.Vector2(0, 0),
	this.repeat = new THREE.Vector2(1, 1),
	this.needsUpdate = !1,
	this.onUpdate = null
}, THREE.Texture.prototype = {
	constructor : THREE.Texture,
	clone : function () {
		var a = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
		return a.offset.copy(this.offset),
		a.repeat.copy(this.repeat),
		a
	}
}, THREE.TextureCount = 0, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.CubeReflectionMapping = function () {}, THREE.CubeRefractionMapping = function () {}, THREE.LatitudeReflectionMapping = function () {}, THREE.LatitudeRefractionMapping = function () {}, THREE.SphericalReflectionMapping = function () {}, THREE.SphericalRefractionMapping = function () {}, THREE.UVMapping = function () {}, THREE.RepeatWrapping = 0, THREE.ClampToEdgeWrapping = 1, THREE.MirroredRepeatWrapping = 2, THREE.NearestFilter = 3, THREE.NearestMipMapNearestFilter = 4, THREE.NearestMipMapLinearFilter = 5, THREE.LinearFilter = 6, THREE.LinearMipMapNearestFilter = 7, THREE.LinearMipMapLinearFilter = 8, THREE.ByteType = 9, THREE.UnsignedByteType = 10, THREE.ShortType = 11, THREE.UnsignedShortType = 12, THREE.IntType = 13, THREE.UnsignedIntType = 14, THREE.FloatType = 15, THREE.AlphaFormat = 16, THREE.RGBFormat = 17, THREE.RGBAFormat = 18, THREE.LuminanceFormat = 19, THREE.LuminanceAlphaFormat = 20, THREE.Particle = function (a) {
	THREE.Object3D.call(this),
	this.material = a
}, THREE.Particle.prototype = new THREE.Object3D, THREE.Particle.prototype.constructor = THREE.Particle, THREE.Line = function (a, b, c) {
	THREE.Object3D.call(this),
	this.geometry = a,
	this.material = b,
	this.type = void 0 !== c ? c : THREE.LineStrip,
	this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
}, THREE.LineStrip = 0, THREE.LinePieces = 1, THREE.Line.prototype = new THREE.Object3D, THREE.Line.prototype.constructor = THREE.Line, THREE.Mesh = function (a, b) {
	if (THREE.Object3D.call(this), this.geometry = a, this.material = b, b instanceof Array && (console.warn("DEPRECATED: Mesh material can no longer be an Array. Using material at index 0..."), this.material = b[0]), this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = a.boundingSphere.radius, this.geometry.morphTargets.length)) {
		this.morphTargetBase = -1,
		this.morphTargetForcedOrder = [],
		this.morphTargetInfluences = [],
		this.morphTargetDictionary = {};
		for (var c = 0; c < this.geometry.morphTargets.length; c++)
			this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[c].name] = c
	}
}, THREE.Mesh.prototype = new THREE.Object3D, THREE.Mesh.prototype.constructor = THREE.Mesh, THREE.Mesh.prototype.supr = THREE.Object3D.prototype, THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
	return void 0 !== this.morphTargetDictionary[a] ? this.morphTargetDictionary[a] : (console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0."), 0)
}, THREE.Bone = function (a) {
	THREE.Object3D.call(this),
	this.skin = a,
	this.skinMatrix = new THREE.Matrix4
}, THREE.Bone.prototype = new THREE.Object3D, THREE.Bone.prototype.constructor = THREE.Bone, THREE.Bone.prototype.supr = THREE.Object3D.prototype, THREE.Bone.prototype.update = function (a, b) {
	this.matrixAutoUpdate && (b |= this.updateMatrix()),
	(b || this.matrixWorldNeedsUpdate) && (a ? this.skinMatrix.multiply(a, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, b = !0);
	var c,
	d = this.children.length;
	for (c = 0; d > c; c++)
		this.children[c].update(this.skinMatrix, b)
}, THREE.Sprite = function (a) {
	THREE.Object3D.call(this),
	this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215),
	this.map = a.map instanceof THREE.Texture ? a.map : THREE.ImageUtils.loadTexture(a.map),
	this.blending = void 0 !== a.blending ? a.blending : THREE.NormalBlending,
	this.useScreenCoordinates = void 0 !== a.useScreenCoordinates ? a.useScreenCoordinates : !0,
	this.mergeWith3D = void 0 !== a.mergeWith3D ? a.mergeWith3D : !this.useScreenCoordinates,
	this.affectedByDistance = void 0 !== a.affectedByDistance ? a.affectedByDistance : !this.useScreenCoordinates,
	this.scaleByViewport = void 0 !== a.scaleByViewport ? a.scaleByViewport : !this.affectedByDistance,
	this.alignment = a.alignment instanceof THREE.Vector2 ? a.alignment : THREE.SpriteAlignment.center,
	this.rotation3d = this.rotation,
	this.rotation = 0,
	this.opacity = 1,
	this.uvOffset = new THREE.Vector2(0, 0),
	this.uvScale = new THREE.Vector2(1, 1)
}, THREE.Sprite.prototype = new THREE.Object3D, THREE.Sprite.prototype.constructor = THREE.Sprite, THREE.Sprite.prototype.updateMatrix = function () {
	this.matrix.setPosition(this.position),
	this.rotation3d.set(0, 0, this.rotation),
	this.matrix.setRotationFromEuler(this.rotation3d),
	(1 !== this.scale.x || 1 !== this.scale.y) && (this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y)),
	this.matrixWorldNeedsUpdate = !0
}, THREE.SpriteAlignment = {}, THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1), THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1), THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1), THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0), THREE.SpriteAlignment.center = new THREE.Vector2(0, 0), THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0), THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1), THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1), THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1), THREE.Scene = function () {
	THREE.Object3D.call(this),
	this.overrideMaterial = this.fog = null,
	this.matrixAutoUpdate = !1,
	this.objects = [],
	this.lights = [],
	this.__objectsAdded = [],
	this.__objectsRemoved = []
}, THREE.Scene.prototype = new THREE.Object3D, THREE.Scene.prototype.constructor = THREE.Scene, THREE.Scene.prototype.addObject = function (a) {
	if (a instanceof THREE.Light)
		 - 1 === this.lights.indexOf(a) && this.lights.push(a);
	else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone) && -1 === this.objects.indexOf(a)) {
		this.objects.push(a),
		this.__objectsAdded.push(a);
		var b = this.__objectsRemoved.indexOf(a);
		-1 !== b && this.__objectsRemoved.splice(b, 1)
	}
	for (b = 0; b < a.children.length; b++)
		this.addObject(a.children[b])
}, THREE.Scene.prototype.removeObject = function (a) {
	if (a instanceof THREE.Light) {
		var b = this.lights.indexOf(a);
		-1 !== b && this.lights.splice(b, 1)
	} else
		a instanceof THREE.Camera || (b = this.objects.indexOf(a), -1 !== b && (this.objects.splice(b, 1), this.__objectsRemoved.push(a), b = this.__objectsAdded.indexOf(a), -1 !== b && this.__objectsAdded.splice(b, 1)));
	for (b = 0; b < a.children.length; b++)
		this.removeObject(a.children[b])
}, THREE.CanvasRenderer = function (a) {
	function b(a) {
		Y != a && (V.globalAlpha = Y = a)
	}
	function c(a) {
		if (Z != a) {
			switch (a) {
			case THREE.NormalBlending:
				V.globalCompositeOperation = "source-over";
				break;
			case THREE.AdditiveBlending:
				V.globalCompositeOperation = "lighter";
				break;
			case THREE.SubtractiveBlending:
				V.globalCompositeOperation = "darker"
			}
			Z = a
		}
	}
	function d(a) {
		$ != a && (V.strokeStyle = $ = a)
	}
	function e(a) {
		_ != a && (V.fillStyle = _ = a)
	}
	var f,
	g,
	h,
	i,
	j,
	k,
	l,
	m,
	n,
	o,
	p,
	q,
	r,
	s,
	t,
	u,
	v,
	w,
	x,
	y,
	z,
	A,
	B,
	C,
	D,
	E,
	F,
	G,
	H,
	I,
	J,
	K,
	L,
	M,
	N,
	O,
	P,
	Q,
	R,
	S = this,
	T = new THREE.Projector,
	a = a || {},
	U = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
	V = U.getContext("2d"),
	W = new THREE.Color(0),
	X = 0,
	Y = 1,
	Z = 0,
	$ = null,
	_ = null,
	aa = null,
	ba = null,
	ca = null,
	da = new THREE.RenderableVertex,
	ea = new THREE.RenderableVertex,
	fa = new THREE.Color,
	ga = new THREE.Color,
	ha = new THREE.Color,
	ia = new THREE.Color,
	ja = new THREE.Color,
	ka = [],
	la = [],
	ma = new THREE.Rectangle,
	na = new THREE.Rectangle,
	oa = new THREE.Rectangle,
	pa = !1,
	qa = new THREE.Color,
	ra = new THREE.Color,
	sa = new THREE.Color,
	ta = new THREE.Vector3,
	a = 16;
	M = document.createElement("canvas"),
	M.width = M.height = 2,
	N = M.getContext("2d"),
	N.fillStyle = "rgba(0,0,0,1)",
	N.fillRect(0, 0, 2, 2),
	O = N.getImageData(0, 0, 2, 2),
	P = O.data,
	Q = document.createElement("canvas"),
	Q.width = Q.height = a,
	R = Q.getContext("2d"),
	R.translate(-a / 2, -a / 2),
	R.scale(a, a),
	a--,
	this.domElement = U,
	this.sortElements = this.sortObjects = this.autoClear = !0,
	this.info = {
		render : {
			vertices : 0,
			faces : 0
		}
	},
	this.setSize = function (a, b) {
		i = a,
		j = b,
		k = Math.floor(i / 2),
		l = Math.floor(j / 2),
		U.width = i,
		U.height = j,
		ma.set(-k, -l, k, l),
		na.set(-k, -l, k, l),
		Y = 1,
		Z = 0,
		ca = ba = aa = _ = $ = null
	},
	this.setClearColor = function (a, b) {
		W.copy(a),
		X = b,
		na.set(-k, -l, k, l)
	},
	this.setClearColorHex = function (a, b) {
		W.setHex(a),
		X = b,
		na.set(-k, -l, k, l)
	},
	this.clear = function () {
		V.setTransform(1, 0, 0, -1, k, l),
		na.isEmpty() || (na.minSelf(ma), na.inflate(2), 1 > X && V.clearRect(Math.floor(na.getX()), Math.floor(na.getY()), Math.floor(na.getWidth()), Math.floor(na.getHeight())), X > 0 && (c(THREE.NormalBlending), b(1), e("rgba(" + Math.floor(255 * W.r) + "," + Math.floor(255 * W.g) + "," + Math.floor(255 * W.b) + "," + X + ")"), V.fillRect(Math.floor(na.getX()), Math.floor(na.getY()), Math.floor(na.getWidth()), Math.floor(na.getHeight()))), na.empty())
	},
	this.render = function (a, i) {
		function j(a) {
			var b,
			c,
			d,
			e;
			for (qa.setRGB(0, 0, 0), ra.setRGB(0, 0, 0), sa.setRGB(0, 0, 0), b = 0, c = a.length; c > b; b++)
				d = a[b], e = d.color, d instanceof THREE.AmbientLight ? (qa.r += e.r, qa.g += e.g, qa.b += e.b) : d instanceof THREE.DirectionalLight ? (ra.r += e.r, ra.g += e.g, ra.b += e.b) : d instanceof THREE.PointLight && (sa.r += e.r, sa.g += e.g, sa.b += e.b)
		}
		function U(a, b, c, d) {
			var e,
			f,
			g,
			h,
			i,
			j;
			for (e = 0, f = a.length; f > e; e++)
				g = a[e], h = g.color, g instanceof THREE.DirectionalLight ? (i = g.matrixWorld.getPosition(), j = c.dot(i), 0 >= j || (j *= g.intensity, d.r += h.r * j, d.g += h.g * j, d.b += h.b * j)) : g instanceof THREE.PointLight && (i = g.matrixWorld.getPosition(), j = c.dot(ta.sub(i, b).normalize()), 0 >= j || (j *= 0 == g.distance ? 1 : 1 - Math.min(b.distanceTo(i) / g.distance, 1), 0 != j && (j *= g.intensity, d.r += h.r * j, d.g += h.g * j, d.b += h.b * j)))
		}
		function W(a, f, g) {
			b(g.opacity),
			c(g.blending);
			var h,
			i,
			j,
			m,
			n,
			o;
			g instanceof THREE.ParticleBasicMaterial ? g.map && (m = g.map.image, n = m.width >> 1, o = m.height >> 1, g = f.scale.x * k, j = f.scale.y * l, h = g * n, i = j * o, oa.set(a.x - h, a.y - i, a.x + h, a.y + i), ma.intersects(oa) && (V.save(), V.translate(a.x, a.y), V.rotate(-f.rotation), V.scale(g, -j), V.translate(-n, -o), V.drawImage(m, 0, 0), V.restore())) : g instanceof THREE.ParticleCanvasMaterial && (h = f.scale.x * k, i = f.scale.y * l, oa.set(a.x - h, a.y - i, a.x + h, a.y + i), ma.intersects(oa) && (d(g.color.getContextStyle()), e(g.color.getContextStyle()), V.save(), V.translate(a.x, a.y), V.rotate(-f.rotation), V.scale(h, i), g.program(V), V.restore()))
		}
		function X(a, e, f, g) {
			b(g.opacity),
			c(g.blending),
			V.beginPath(),
			V.moveTo(a.positionScreen.x, a.positionScreen.y),
			V.lineTo(e.positionScreen.x, e.positionScreen.y),
			V.closePath(),
			g instanceof THREE.LineBasicMaterial && (a = g.linewidth, aa != a && (V.lineWidth = aa = a), a = g.linecap, ba != a && (V.lineCap = ba = a), a = g.linejoin, ca != a && (V.lineJoin = ca = a), d(g.color.getContextStyle()), V.stroke(), oa.inflate(2 * g.linewidth))
		}
		function Y(a, d, e, f, g, j, k, l) {
			S.info.render.vertices += 3,
			S.info.render.faces++,
			b(l.opacity),
			c(l.blending),
			q = a.positionScreen.x,
			r = a.positionScreen.y,
			s = d.positionScreen.x,
			t = d.positionScreen.y,
			u = e.positionScreen.x,
			v = e.positionScreen.y,
			$(q, r, s, t, u, v),
			l instanceof THREE.MeshBasicMaterial ? l.map ? l.map.mapping instanceof THREE.UVMapping && (F = k.uvs[0], wa(q, r, s, t, u, v, F[f].u, F[f].v, F[g].u, F[g].v, F[j].u, F[j].v, l.map)) : l.envMap ? l.envMap.mapping instanceof THREE.SphericalReflectionMapping && (a = i.matrixWorldInverse, ta.copy(k.vertexNormalsWorld[f]), G = .5 * (ta.x * a.n11 + ta.y * a.n12 + ta.z * a.n13) + .5, H = .5 *  - (ta.x * a.n21 + ta.y * a.n22 + ta.z * a.n23) + .5, ta.copy(k.vertexNormalsWorld[g]), I = .5 * (ta.x * a.n11 + ta.y * a.n12 + ta.z * a.n13) + .5, J = .5 *  - (ta.x * a.n21 + ta.y * a.n22 + ta.z * a.n23) + .5, ta.copy(k.vertexNormalsWorld[j]), K = .5 * (ta.x * a.n11 + ta.y * a.n12 + ta.z * a.n13) + .5, L = .5 *  - (ta.x * a.n21 + ta.y * a.n22 + ta.z * a.n23) + .5, wa(q, r, s, t, u, v, G, H, I, J, K, L, l.envMap)) : l.wireframe ? ua(l.color, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(l.color) : l instanceof THREE.MeshLambertMaterial ? (l.map && !l.wireframe && (l.map.mapping instanceof THREE.UVMapping && (F = k.uvs[0], wa(q, r, s, t, u, v, F[f].u, F[f].v, F[g].u, F[g].v, F[j].u, F[j].v, l.map)), c(THREE.SubtractiveBlending)), pa ? l.wireframe || l.shading != THREE.SmoothShading || 3 != k.vertexNormalsWorld.length ? (fa.r = qa.r, fa.g = qa.g, fa.b = qa.b, U(h, k.centroidWorld, k.normalWorld, fa), fa.r = Math.max(0, Math.min(l.color.r * fa.r, 1)), fa.g = Math.max(0, Math.min(l.color.g * fa.g, 1)), fa.b = Math.max(0, Math.min(l.color.b * fa.b, 1)), l.wireframe ? ua(fa, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(fa)) : (ga.r = ha.r = ia.r = qa.r, ga.g = ha.g = ia.g = qa.g, ga.b = ha.b = ia.b = qa.b, U(h, k.v1.positionWorld, k.vertexNormalsWorld[0], ga), U(h, k.v2.positionWorld, k.vertexNormalsWorld[1], ha), U(h, k.v3.positionWorld, k.vertexNormalsWorld[2], ia), ga.r = Math.max(0, Math.min(l.color.r * ga.r, 1)), ga.g = Math.max(0, Math.min(l.color.g * ga.g, 1)), ga.b = Math.max(0, Math.min(l.color.b * ga.b, 1)), ha.r = Math.max(0, Math.min(l.color.r * ha.r, 1)), ha.g = Math.max(0, Math.min(l.color.g * ha.g, 1)), ha.b = Math.max(0, Math.min(l.color.b * ha.b, 1)), ia.r = Math.max(0, Math.min(l.color.r * ia.r, 1)), ia.g = Math.max(0, Math.min(l.color.g * ia.g, 1)), ia.b = Math.max(0, Math.min(l.color.b * ia.b, 1)), ja.r = .5 * (ha.r + ia.r), ja.g = .5 * (ha.g + ia.g), ja.b = .5 * (ha.b + ia.b), E = ya(ga, ha, ia, ja), xa(q, r, s, t, u, v, 0, 0, 1, 0, 0, 1, E)) : l.wireframe ? ua(l.color, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(l.color)) : l instanceof THREE.MeshDepthMaterial ? (C = i.near, D = i.far, ga.r = ga.g = ga.b = 1 - za(a.positionScreen.z, C, D), ha.r = ha.g = ha.b = 1 - za(d.positionScreen.z, C, D), ia.r = ia.g = ia.b = 1 - za(e.positionScreen.z, C, D), ja.r = .5 * (ha.r + ia.r), ja.g = .5 * (ha.g + ia.g), ja.b = .5 * (ha.b + ia.b), E = ya(ga, ha, ia, ja), xa(q, r, s, t, u, v, 0, 0, 1, 0, 0, 1, E)) : l instanceof THREE.MeshNormalMaterial && (fa.r = Aa(k.normalWorld.x), fa.g = Aa(k.normalWorld.y), fa.b = Aa(k.normalWorld.z), l.wireframe ? ua(fa, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(fa))
		}
		function Z(a, d, e, f, g, j, k, l, m) {
			S.info.render.vertices += 4,
			S.info.render.faces++,
			b(l.opacity),
			c(l.blending),
			l.map || l.envMap ? (Y(a, d, f, 0, 1, 3, k, l, m), Y(g, e, j, 1, 2, 3, k, l, m)) : (q = a.positionScreen.x, r = a.positionScreen.y, s = d.positionScreen.x, t = d.positionScreen.y, u = e.positionScreen.x, v = e.positionScreen.y, w = f.positionScreen.x, x = f.positionScreen.y, y = g.positionScreen.x, z = g.positionScreen.y, A = j.positionScreen.x, B = j.positionScreen.y, l instanceof THREE.MeshBasicMaterial ? (_(q, r, s, t, u, v, w, x), l.wireframe ? ua(l.color, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(l.color)) : l instanceof THREE.MeshLambertMaterial ? pa ? l.wireframe || l.shading != THREE.SmoothShading || 4 != k.vertexNormalsWorld.length ? (fa.r = qa.r,
					fa.g = qa.g, fa.b = qa.b, U(h, k.centroidWorld, k.normalWorld, fa), fa.r = Math.max(0, Math.min(l.color.r * fa.r, 1)), fa.g = Math.max(0, Math.min(l.color.g * fa.g, 1)), fa.b = Math.max(0, Math.min(l.color.b * fa.b, 1)), _(q, r, s, t, u, v, w, x), l.wireframe ? ua(fa, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(fa)) : (ga.r = ha.r = ia.r = ja.r = qa.r, ga.g = ha.g = ia.g = ja.g = qa.g, ga.b = ha.b = ia.b = ja.b = qa.b, U(h, k.v1.positionWorld, k.vertexNormalsWorld[0], ga), U(h, k.v2.positionWorld, k.vertexNormalsWorld[1], ha), U(h, k.v4.positionWorld, k.vertexNormalsWorld[3], ia), U(h, k.v3.positionWorld, k.vertexNormalsWorld[2], ja), ga.r = Math.max(0, Math.min(l.color.r * ga.r, 1)), ga.g = Math.max(0, Math.min(l.color.g * ga.g, 1)), ga.b = Math.max(0, Math.min(l.color.b * ga.b, 1)), ha.r = Math.max(0, Math.min(l.color.r * ha.r, 1)), ha.g = Math.max(0, Math.min(l.color.g * ha.g, 1)), ha.b = Math.max(0, Math.min(l.color.b * ha.b, 1)), ia.r = Math.max(0, Math.min(l.color.r * ia.r, 1)), ia.g = Math.max(0, Math.min(l.color.g * ia.g, 1)), ia.b = Math.max(0, Math.min(l.color.b * ia.b, 1)), ja.r = Math.max(0, Math.min(l.color.r * ja.r, 1)), ja.g = Math.max(0, Math.min(l.color.g * ja.g, 1)), ja.b = Math.max(0, Math.min(l.color.b * ja.b, 1)), E = ya(ga, ha, ia, ja), $(q, r, s, t, w, x), xa(q, r, s, t, w, x, 0, 0, 1, 0, 0, 1, E), $(y, z, u, v, A, B), xa(y, z, u, v, A, B, 1, 0, 1, 1, 0, 1, E)) : (_(q, r, s, t, u, v, w, x), l.wireframe ? ua(l.color, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(l.color)) : l instanceof THREE.MeshNormalMaterial ? (fa.r = Aa(k.normalWorld.x), fa.g = Aa(k.normalWorld.y), fa.b = Aa(k.normalWorld.z), _(q, r, s, t, u, v, w, x), l.wireframe ? ua(fa, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : va(fa)) : l instanceof THREE.MeshDepthMaterial && (C = i.near, D = i.far, ga.r = ga.g = ga.b = 1 - za(a.positionScreen.z, C, D), ha.r = ha.g = ha.b = 1 - za(d.positionScreen.z, C, D), ia.r = ia.g = ia.b = 1 - za(f.positionScreen.z, C, D), ja.r = ja.g = ja.b = 1 - za(e.positionScreen.z, C, D), E = ya(ga, ha, ia, ja), $(q, r, s, t, w, x), xa(q, r, s, t, w, x, 0, 0, 1, 0, 0, 1, E), $(y, z, u, v, A, B), xa(y, z, u, v, A, B, 1, 0, 1, 1, 0, 1, E)))
		}
		function $(a, b, c, d, e, f) {
			V.beginPath(),
			V.moveTo(a, b),
			V.lineTo(c, d),
			V.lineTo(e, f),
			V.lineTo(a, b),
			V.closePath()
		}
		function _(a, b, c, d, e, f, g, h) {
			V.beginPath(),
			V.moveTo(a, b),
			V.lineTo(c, d),
			V.lineTo(e, f),
			V.lineTo(g, h),
			V.lineTo(a, b),
			V.closePath()
		}
		function ua(a, b, c, e) {
			aa != b && (V.lineWidth = aa = b),
			ba != c && (V.lineCap = ba = c),
			ca != e && (V.lineJoin = ca = e),
			d(a.getContextStyle()),
			V.stroke(),
			oa.inflate(2 * b)
		}
		function va(a) {
			e(a.getContextStyle()),
			V.fill()
		}
		function wa(a, b, c, d, f, g, h, i, j, k, l, m, n) {
			if (0 != n.image.width) {
				if (1 == n.needsUpdate || void 0 == ka[n.id]) {
					var o = n.wrapS == THREE.RepeatWrapping,
					p = n.wrapT == THREE.RepeatWrapping;
					ka[n.id] = V.createPattern(n.image, o && p ? "repeat" : o && !p ? "repeat-x" : !o && p ? "repeat-y" : "no-repeat"),
					n.needsUpdate = !1
				}
				e(ka[n.id]);
				var o = n.offset.x / n.repeat.x,
				p = n.offset.y / n.repeat.y,
				q = n.image.width * n.repeat.x,
				r = n.image.height * n.repeat.y,
				h = (h + o) * q,
				i = (i + p) * r,
				j = (j + o) * q,
				k = (k + p) * r,
				l = (l + o) * q,
				m = (m + p) * r;
				c -= a,
				d -= b,
				f -= a,
				g -= b,
				j -= h,
				k -= i,
				l -= h,
				m -= i,
				o = j * m - l * k,
				0 == o ? (void 0 == la[n.id] && (b = document.createElement("canvas"), b.width = n.image.width, b.height = n.image.height, a = b.getContext("2d"), a.drawImage(n.image, 0, 0), la[n.id] = a.getImageData(0, 0, n.image.width, n.image.height).data, delete b), b = la[n.id], h = 4 * (Math.floor(h) + Math.floor(i) * n.image.width), fa.setRGB(b[h] / 255, b[h + 1] / 255, b[h + 2] / 255), va(fa)) : (o = 1 / o, n = (m * c - k * f) * o, k = (m * d - k * g) * o, c = (j * f - l * c) * o, d = (j * g - l * d) * o, a = a - n * h - c * i, h = b - k * h - d * i, V.save(), V.transform(n, k, c, d, a, h), V.fill(), V.restore())
			}
		}
		function xa(a, b, c, d, e, f, g, h, i, j, k, l, m) {
			var n,
			o;
			n = m.width - 1,
			o = m.height - 1,
			g *= n,
			h *= o,
			i *= n,
			j *= o,
			k *= n,
			l *= o,
			c -= a,
			d -= b,
			e -= a,
			f -= b,
			i -= g,
			j -= h,
			k -= g,
			l -= h,
			o = 1 / (i * l - k * j),
			n = (l * c - j * e) * o,
			j = (l * d - j * f) * o,
			c = (i * e - k * c) * o,
			d = (i * f - k * d) * o,
			a = a - n * g - c * h,
			b = b - j * g - d * h,
			V.save(),
			V.transform(n, j, c, d, a, b),
			V.clip(),
			V.drawImage(m, 0, 0),
			V.restore()
		}
		function ya(a, b, c, d) {
			var e = ~~(255 * a.r),
			f = ~~(255 * a.g),
			a = ~~(255 * a.b),
			g = ~~(255 * b.r),
			h = ~~(255 * b.g),
			b = ~~(255 * b.b),
			i = ~~(255 * c.r),
			j = ~~(255 * c.g),
			c = ~~(255 * c.b),
			k = ~~(255 * d.r),
			l = ~~(255 * d.g),
			d = ~~(255 * d.b);
			return P[0] = 0 > e ? 0 : e > 255 ? 255 : e,
			P[1] = 0 > f ? 0 : f > 255 ? 255 : f,
			P[2] = 0 > a ? 0 : a > 255 ? 255 : a,
			P[4] = 0 > g ? 0 : g > 255 ? 255 : g,
			P[5] = 0 > h ? 0 : h > 255 ? 255 : h,
			P[6] = 0 > b ? 0 : b > 255 ? 255 : b,
			P[8] = 0 > i ? 0 : i > 255 ? 255 : i,
			P[9] = 0 > j ? 0 : j > 255 ? 255 : j,
			P[10] = 0 > c ? 0 : c > 255 ? 255 : c,
			P[12] = 0 > k ? 0 : k > 255 ? 255 : k,
			P[13] = 0 > l ? 0 : l > 255 ? 255 : l,
			P[14] = 0 > d ? 0 : d > 255 ? 255 : d,
			N.putImageData(O, 0, 0),
			R.drawImage(M, 0, 0),
			Q
		}
		function za(a, b, c) {
			return a = (a - b) / (c - b),
			a * a * (3 - 2 * a)
		}
		function Aa(a) {
			return a = .5 * (a + 1),
			0 > a ? 0 : a > 1 ? 1 : a
		}
		function Ba(a, b) {
			var c = b.x - a.x,
			d = b.y - a.y,
			e = c * c + d * d;
			0 != e && (e = 1 / Math.sqrt(e), c *= e, d *= e, b.x += c, b.y += d, a.x -= c, a.y -= d)
		}
		var Ca,
		Da,
		Ea,
		Fa;
		for (this.autoClear ? this.clear() : V.setTransform(1, 0, 0, -1, k, l), S.info.render.vertices = 0, S.info.render.faces = 0, f = T.projectScene(a, i, this.sortElements), g = f.elements, h = f.lights, (pa = h.length > 0) && j(h), Ca = 0, Da = g.length; Da > Ca; Ca++)
			Ea = g[Ca], Fa = Ea.material, Fa = Fa instanceof THREE.MeshFaceMaterial ? Ea.faceMaterial : Fa, null == Fa || 0 == Fa.opacity || (oa.empty(), Ea instanceof THREE.RenderableParticle ? (m = Ea, m.x *= k, m.y *= l, W(m, Ea, Fa, a)) : Ea instanceof THREE.RenderableLine ? (m = Ea.v1, n = Ea.v2, m.positionScreen.x *= k, m.positionScreen.y *= l, n.positionScreen.x *= k, n.positionScreen.y *= l, oa.addPoint(m.positionScreen.x, m.positionScreen.y), oa.addPoint(n.positionScreen.x, n.positionScreen.y), ma.intersects(oa) && X(m, n, Ea, Fa, a)) : Ea instanceof THREE.RenderableFace3 ? (m = Ea.v1, n = Ea.v2, o = Ea.v3, m.positionScreen.x *= k, m.positionScreen.y *= l, n.positionScreen.x *= k, n.positionScreen.y *= l, o.positionScreen.x *= k, o.positionScreen.y *= l, Fa.overdraw && (Ba(m.positionScreen, n.positionScreen), Ba(n.positionScreen, o.positionScreen), Ba(o.positionScreen, m.positionScreen)), oa.add3Points(m.positionScreen.x, m.positionScreen.y, n.positionScreen.x, n.positionScreen.y, o.positionScreen.x, o.positionScreen.y), ma.intersects(oa) && Y(m, n, o, 0, 1, 2, Ea, Fa, a)) : Ea instanceof THREE.RenderableFace4 && (m = Ea.v1, n = Ea.v2, o = Ea.v3, p = Ea.v4, m.positionScreen.x *= k, m.positionScreen.y *= l, n.positionScreen.x *= k, n.positionScreen.y *= l, o.positionScreen.x *= k, o.positionScreen.y *= l, p.positionScreen.x *= k, p.positionScreen.y *= l, da.positionScreen.copy(n.positionScreen), ea.positionScreen.copy(p.positionScreen), Fa.overdraw && (Ba(m.positionScreen, n.positionScreen), Ba(n.positionScreen, p.positionScreen), Ba(p.positionScreen, m.positionScreen), Ba(o.positionScreen, da.positionScreen), Ba(o.positionScreen, ea.positionScreen)), oa.addPoint(m.positionScreen.x, m.positionScreen.y), oa.addPoint(n.positionScreen.x, n.positionScreen.y), oa.addPoint(o.positionScreen.x, o.positionScreen.y), oa.addPoint(p.positionScreen.x, p.positionScreen.y), ma.intersects(oa) && Z(m, n, o, p, da, ea, Ea, Fa, a)), na.addRectangle(oa));
		V.setTransform(1, 0, 0, 1, 0, 0)
	}
}, THREE.RenderableVertex = function () {
	this.positionWorld = new THREE.Vector3,
	this.positionScreen = new THREE.Vector4,
	this.visible = !0
}, THREE.RenderableVertex.prototype.copy = function (a) {
	this.positionWorld.copy(a.positionWorld),
	this.positionScreen.copy(a.positionScreen)
}, THREE.RenderableFace3 = function () {
	this.v1 = new THREE.RenderableVertex,
	this.v2 = new THREE.RenderableVertex,
	this.v3 = new THREE.RenderableVertex,
	this.centroidWorld = new THREE.Vector3,
	this.centroidScreen = new THREE.Vector3,
	this.normalWorld = new THREE.Vector3,
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3],
	this.faceMaterial = this.material = null,
	this.uvs = [[]],
	this.z = null
}, THREE.RenderableFace4 = function () {
	this.v1 = new THREE.RenderableVertex,
	this.v2 = new THREE.RenderableVertex,
	this.v3 = new THREE.RenderableVertex,
	this.v4 = new THREE.RenderableVertex,
	this.centroidWorld = new THREE.Vector3,
	this.centroidScreen = new THREE.Vector3,
	this.normalWorld = new THREE.Vector3,
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3],
	this.faceMaterial = this.material = null,
	this.uvs = [[]],
	this.z = null
}, THREE.RenderableObject = function () {
	this.z = this.object = null
}, THREE.RenderableParticle = function () {
	this.rotation = this.z = this.y = this.x = null,
	this.scale = new THREE.Vector2,
	this.material = null
}, THREE.RenderableLine = function () {
	this.z = null,
	this.v1 = new THREE.RenderableVertex,
	this.v2 = new THREE.RenderableVertex,
	this.material = null
}, Particle3D = function (a) {
	THREE.Particle.call(this, a),
	this.velocity = new THREE.Vector3(0, -8, 0),
	this.velocity.rotateX(randomRange(-45, 45)),
	this.velocity.rotateY(randomRange(0, 360)),
	this.gravity = new THREE.Vector3(0, 0, 0),
	this.drag = 1
}, Particle3D.prototype = new THREE.Particle, Particle3D.prototype.constructor = Particle3D, Particle3D.prototype.updatePhysics = function () {
	this.velocity.multiplyScalar(this.drag),
	this.velocity.addSelf(this.gravity),
	this.position.addSelf(this.velocity)
};
var TO_RADIANS = Math.PI / 180;
THREE.Vector3.prototype.rotateY = function (a) {
	cosRY = Math.cos(a * TO_RADIANS),
	sinRY = Math.sin(a * TO_RADIANS);
	var b = this.z,
	c = this.x;
	this.x = c * cosRY + b * sinRY,
	this.z = c * -sinRY + b * cosRY
}, THREE.Vector3.prototype.rotateX = function (a) {
	cosRY = Math.cos(a * TO_RADIANS),
	sinRY = Math.sin(a * TO_RADIANS);
	var b = this.z,
	c = this.y;
	this.y = c * cosRY + b * sinRY,
	this.z = c * -sinRY + b * cosRY
}, THREE.Vector3.prototype.rotateZ = function (a) {
	cosRY = Math.cos(a * TO_RADIANS),
	sinRY = Math.sin(a * TO_RADIANS);
	var b = this.x,
	c = this.y;
	this.y = c * cosRY + b * sinRY,
	this.x = c * -sinRY + b * cosRY
};
