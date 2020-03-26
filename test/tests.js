const test = QUnit.test;

test('time to test a function', function(assert) {

    /* In: 5,3
        Out:2
        */

    function subtract(x,y) {
        return x - y;
    }    
    
    //Arrange
    // Set up your parameters and expectations

    const x = 5;
    const y = 3;
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const difference = subtract (x,y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(difference, expected);
});

// Multiply
// In: 4, 3
    // Out: 12

function multiply (x, y){
    return x * y;
}

test('time to test a function', function(assert) {

    // Arrange
const x = 4;
const y = 3;
const expected = 12;

// Act
const product = multiply (x, y);

// Test
assert.equal(product, expected);

});


/* Divide
    In: 6,2;
    Out: 3;
I also commented out the function here so I could test it below

function divide (x, y){
    return x / y;
}
*/

test('time to test a function', function(assert){

    // Arrange:
    const x = 6;
    const y = 2; 
    const expected = 3;

    // Act
    const dividend = divide (x, y);

    // Test
    assert.equal(dividend, expected);

});

/* Divide
    In: 7, 0;
    Out: Infinity;
*/

function divide (x, y){
    return x / y;
}

test('time to test a function', function(assert){

    // Arrange:
    const x = 7;
    const y = 0; 
    const expected = Infinity;

    // Act
    const dividend = divide (x, y);

    // Test
    assert.equal(dividend, expected);

});

/* Is Even
    In: 6
    Out: True
    */

function isEvenOrOdd(x){
    return x % 2 === 0;
} 



test('time to test a function', function(assert){

    // Arrange
    const x = 6;
    const expected = true;

    // Act
    const isEven = isEvenOrOdd (x);

    // Test
    assert.equal(isEven, expected);


})