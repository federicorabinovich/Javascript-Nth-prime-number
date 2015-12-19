//Thia algorithm  prints the Nth prime number whose hexadecimal representation contains CHAIN.
(function(){
	
	function getPrime(position, hexa, searchUntil){
		var hexa = hexa.toLowerCase();
		var count = 0;
		var number=parseInt(hexa, 16);
		if (number%2==0) number++; //just odd numbers to reduce workload
		for (; number<searchUntil ;number +=2){		
			if (number%3!=0 && number%5!=0 && number%7!=0 && number%11!=0 && number%13!=0 && number%17!=0 && number%19!=0){			
				if(number.toString(16).indexOf(hexa)>=0){
					//find if it is prime
					flagPrime = true;
					for (var check = 2; check <= Math.sqrt(number) ; check++){
						if (number%check===0){
							flagPrime = false;
							break;
						}				
					}
					if(flagPrime){
						count++;
						if (count==position){
							return number;
						}
					}
				}
			}
		}
	}
	//use it as: getPrime(Nth, CHAIN, untill which number to look for);
	//Watch out cause setting this last parameter too high will cause your browser to crash
	alert(getPrime(44, "BEEF", 20000000));
})();
