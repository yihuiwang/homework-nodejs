var sum = 0, counter = 0, k=0;
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
        for (let m = 0; m < 20; m++) {
            for (let n = 0; n < 48; n++) {
                sum = 50*i + 25*j + 5*m +n;
                counter = i+j+m+n;
                if (sum === 100 && counter === 48){
                    k+=1;
                    if(k<=2){
                    console.log(" The solution is:")
                    console.log("The number of 50 c is "+i)
                    console.log("The number of 25 c is "+j)
                    console.log("The number of 5 c is "+m)
                    console.log("The number of 1 c is "+n)
                    }    
                }
            }
        }
    }
}