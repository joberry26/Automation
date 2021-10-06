import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll (async function() {
    await driver.get('http://localhost:5500/movieList/index.html');
    await driver.sleep(3000);
});

afterAll(async () =>{
    await driver.quit()
});

test('Add movie to list', async () => {
    let input = await driver.findElement(By.xpath('//form/input'));
    let button = await driver.findElement(By.xpath('//form/button'));
    
    await input.sendKeys('Avengers: Endgame');

    await driver.sleep(3000);
    
    await button.click()
    
    await driver.sleep(3000);
    
});

test('Cross off a movie', async () => {
    let movie = await driver.findElement(By.xpath('(//ul/li)[1]/span'));
      
    await movie.click();
   
    await driver.sleep(3000);
});

test('Delete a movie', async () => {
    let deleteBtn = await driver.findElement(By.xpath('(//ul/li)[1]/button'));
    await deleteBtn.click();
    await driver.sleep(3000);
});
