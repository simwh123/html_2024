function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  function throwError() {
    return new Promise((resolve) => {
      throw new Error("rewsrwer");
    });
  }
  
  async function testAsync() {
    await delay(3000);
    return "test async";
  }
  
  async function final() {
    const result = await testAsync();
    console.log(result);
    return "result done!";
  }
  
  final().then((res) => {
    console.log(res);
    console.log("성공!");
  });