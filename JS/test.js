let length, minimum, maximum;
function ascendDescend(length, minimum, maximum) {
let s = ""
let c = minimum-1;
let min = minimum
let max = maximum
let len = length
while (len !== s.length){
    for (min; min<=max && min<=len; min++){
        if ((s.length === len)) {break;}
        c++
        s += c.toString()
        console.log(c, s)
        }
    for (max;min>=max && min<=len; max--){
        if ((s.length === len) || (max <= minimum)) {break;}
        c--
        s += c.toString()
        console.log(c, s)
        }
}
return s
}
ascendDescend(7, 3, 9)