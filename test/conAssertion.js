import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`
    .before(async t=>  {
        //test setup goes here
        
    })
    .beforeEach (async t => {
        //runs before each test
    })
    .after(async t=> {
        //clean up code 
    })
    .afterEach (async t=> {
        //runs after each test
    })

test('My first test', async t => {
  
    await t
        .setTestSpeed(1)
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .wait(5000)
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
        
});