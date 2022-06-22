function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}


function withTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      console.log("iam here");
      hookEl.innerHTML = template;
    }
  };
}

@Logger("logging")
@withTemplate("<h1>Hello</h1>", "app")
class Per {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}
