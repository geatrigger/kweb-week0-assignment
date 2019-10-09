let tmp = new Calc();

let ex = module.exports = {};
ex.calc = function(a, b, op) {
  if(op == "add")
    return tmp.add(a, b);
  else if(op == "sub")
    return tmp.sub(a, b);
  else if(op == "mul")
    return tmp.mul(a, b);
  else if(op == "div")
    return tmp.div(a, b);
  else if(op == "memory")
    return tmp.mem;
};

function Calc()
{
  this.mem = 0;
}

Calc.prototype.add = function(a, b) {
    this.mem = a + b;
    return this.mem;
};

Calc.prototype.sub = function(a, b) {
    this.mem = a - b;
    return this.mem;
};
Calc.prototype.mul = function(a, b) {
    this.mem = a * b;
    return this.mem;
};
Calc.prototype.div = function(a, b) {
    this.mem = a / b;
    return this.mem;
};
