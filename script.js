//your JS code here. If required.
const prev=document.getElementsByClassName("prev")[0];
const next=document.getElementsByClassName("next")[0];
const progress=document.querySelectorAll("#circles *");
// console.log(prev);
// console.log(next);
// console.log(progress);
if(next.disabled===false){
	next.addEventListener("click",()=>{
		for(let i=0;i<progress.length;i++){
			// console.log("hii");
			if(progress[i].classList.contains("active")===false && progress[i].classList.contains("active-line")===false){
				// console.log(progress[i]);
				progress[i].classList.add("active");
				i++;
				if(i<progress.length){
					progress[i].classList.add("active-line");
				}
				if(i>=progress.length){
					next.disabled=true;
				}
				prev.disabled=false;
				return;
			}
		}
	})
}
if(prev.disabled===false){
	console.log("prev");
	prev.addEventListener("click",()=>{
		for(let i=progress.length-1;i>=0;i--){
			if(progress[i].classList.contains("active") || progress[i].classList.contains("active-line")){
				if(i!=progress.length-1){
					progress[i].classList.remove("active-line");	
					i--;
				}
				if(i>=0){
					progress[i].classList.remove("active");
				}
				if(i<=0){
					prev.disabled=true;
				}
				return;
			}
		}
	})
}