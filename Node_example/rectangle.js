// exports.perimeter = (x,y) => {return 2*(x+y);};
// exports.area = (x,y) => {return (x*y);}

module.exports = (x,y,callback) => {
    if(x<=0 || y<=0)
    {
        setTimeout(() => callback(new error("loi"),null), 2000);
    }
    else 
    {
        setTimeout(() => callback(null,{
            perimeter: (x,y) => {return 2*(x+y);},
            area: (x,y) => {return (x*y);}
        }), 2000);
    }
}