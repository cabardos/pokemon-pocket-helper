const puppeteer = require('puppeteer');

(async () => {
  // Lance le navigateur
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ouvre la page cible
  await page.goto('https://www.pokemon-zone.com/sets/genetic-apex/');

  // Attends que les éléments nécessaires soient chargés
  await page.waitForSelector('.card-container');

  // Extrait les données des cartes
  const pokemonData = await page.$$eval('.card-container', (cards) =>
    cards.map((card) => {
      const name = card.querySelector('.card-name')?.textContent.trim();
      const image = card.querySelector('img')?.src;

      return { name, image };
    })
  );

  // Affiche les données extraites
  console.log(pokemonData);

  // Ferme le navigateur
  await browser.close();
})();
