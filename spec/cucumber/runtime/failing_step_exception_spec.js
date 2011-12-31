require('../../support/spec_helper');

describe("Cucumber.Runtime.FailingStepException", function() {

  var Cucumber = requireLib('cucumber');

  describe("passing no result", function() {
    
    it("should return an object with a preset message and stacktrace", function() {
      var exceptionInstance;
      exceptionInstance = Cucumber.Runtime.FailingStepException();
      expect(exceptionInstance.message).toEqual('(no message provided)');
      expect(exceptionInstance.stack).toEqual('(no stacktrace provided)');
    });
  });

  describe("passing the result as a string", function() {
    
    it("should return an object with a message and preset stacktrace", function() {
      var exceptionInstance, reason;
      reason = "There is a missing file"
      exceptionInstance = Cucumber.Runtime.FailingStepException(reason);
      expect(exceptionInstance.message).toEqual(reason);
      expect(exceptionInstance.stack).toEqual('(no stacktrace provided)');
    });
  });

  describe("passing the result as an object", function() {
    
    it("should return an object with the message and the stacktrace", function() {
      var exceptionInstance, reason;
      reason = {message:"There is a missing file",stack:"line 1\nline 2"};
      exceptionInstance = Cucumber.Runtime.FailingStepException(reason);
      expect(exceptionInstance.message).toEqual(reason.message);
      expect(exceptionInstance.stack).toEqual(reason.stack);
    });
  });  
});
