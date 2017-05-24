// Description of test
QUnit.test("(name) test", function (assert) {
    //clearCurrent(); example from calculator
    //addDigit('1');
    //addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});
