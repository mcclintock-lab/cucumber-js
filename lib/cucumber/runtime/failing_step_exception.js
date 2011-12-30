var FailingStepException = function FailingStepException(reason) {
  if (!(this instanceof FailingStepException))
    return new FailingStepException(reason);
};
module.exports = FailingStepException;