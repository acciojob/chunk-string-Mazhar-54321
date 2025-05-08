function stringChop(str, size) {
  // your code here
	if(str==null){
		return []
	}
	let res=[];
  let maxLength = Math.floor(str.length/size)*size;
  let leftOverLength = str.length-maxLength;
  for(let i=0;i<maxLength;i+=size){
     res.push(str.substring(i,i+size));
  }
  if(leftOverLength>0){
	res.push(str.substring(maxLength))
  }
  return res; 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
