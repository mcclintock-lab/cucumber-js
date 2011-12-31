var FailingStepException = function FailingStepException(reason) {
  if (!(this instanceof FailingStepException)) {
    var instance = new FailingStepException(reason);
    // TODO - nice idea, but how do you test this?
    if (typeof reason == "string") {
      instance.message = reason;
      instance.stack   = "(no stacktrace provided)";
    } else if (typeof reason == "object") {
      instance.message = reason.message;
      instance.stack   = reason.stack; 
    } else {      
      instance.message = "(no message provided)";
      instance.stack   = "(no stacktrace provided)"; 
    };
    return instance;
  };

};

module.exports = FailingStepException;