let details=new Set(["john",9.0,"delhi"])
/*details.add("john")
details.add(9.0)
details.add("delhi")
details.add("delhi")
console.log(details)
console.log(details.size)
console.log(details.has("john"))
for(let detail of details){
    console.log(detail)
}
details.forEach((item)=>console.log(item))
let keys=details.keys()
let values=details.values()
console.log(keys.next().value)
console.log(values.next().value)*/
details.delete("john")
console.log(details)
details.clear()
console.log(details)

//destructing , ++ , -- , bitwise operators