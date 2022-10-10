function gradingStudents(grades) {
   var  l=[]
    
    for(let i=0;i<grades.length;i++){
        if(grades[i]<38){
            l.push(grades[i])
        }
        else if(grades[i]%5==3){
            l.push(grades[i]+2)
        }
        else if(grades[i]%5==4){
            l.push(grades[i]+1)
        }
        else{
            l.push(grades[i])
        }
    }
    l.forEach(element => {
        console.log(element);
    });
}	  
var s = [73,67,28,57,33,38];
console.log(gradingStudents(s));
