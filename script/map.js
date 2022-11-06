let details=new Map([
    ["fname","john"],
    [true,"no arrears"],
    [1982891938,"Aadhar No"]
])
/*details.set("fname","john").set(true,"no arrears").set(1982891938,"Aadhar No")*/
/*details.set("fname","john")
details.set(true,"no arrears")
console.log(details)
console.log(details.get(true))
console.log(details.get(1982891938))
console.log(details.has("city"))*/
let keys=details.keys()
let values=details.values()
console.log(keys.next().value)
console.log(keys.next().value)
console.log(keys.next().value)

console.log(values.next().value)
console.log(details.size)
details.forEach((value,key)=>console.log(value,key))

//delete() , clear()
console.log(details.delete("fname"))
details.clear()