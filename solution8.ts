
// solution 8


const validateAgeAsync = (age: number): Promise<string> => {

  return new Promise((resolve, reject) => {
    if (age < 18) {
        
        reject(new Error("Access Denied: Must be 18 or older"));
        
    } else {

      setTimeout(() => {
          resolve("Access Granted");
          
      }, 1000);
    }
  });
};