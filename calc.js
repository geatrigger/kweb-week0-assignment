let tmp = new Calc();

let ex = module.exports = {};
ex.calc = function(a, b, op) {
  if(op == "add")
    return tmp.add(a, b);
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

