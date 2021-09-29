const db = require('../config/connection');
const {User, Cocktail} = require('../models');

db.once('open', async () => {
    await Cocktail.deleteMany();
    
    const cocktail = await Cocktail.insertMany([
        {
            name: 'Aviation Cocktail [1910-1920]',
            description: 'Invented in New York in the days right before prohibition, this is one the internet has broght back in a big way. The original added a dash of creme de violette for a sky-blue color which helps explain the name(you can use Monin violet syrup if creme de violette isnt avaiable)',
            ingredients: '2 oz. Beefeater gin, ½ oz. Maraschino Liqueur, ½ oz. fresh lemon juice',
            preperation: 'Shake all ingredients with ice and strain into a chilled cocktail glass.',
            optional: 'reduce the maraschino to 2 teaspoons and add 1 teaspoon crème de violette.'

        },
        {
            name: 'Bellini [1940-1950]',
            description: 'The Italian summertime classic from Harry’s Bar in Venice.',
            ingredients: '1½ oz. white peach puree (For 1 quart of peach puree add 4 ounces of simple syrup and couple of dashes of Grenadine for color), 4 oz. Perrier-Jouët Champagne',
            preperation: 'Put peach puree in bottom of mixing glass, no ice. Slowly pour Champagne while gently stirring, so as not to lose the effervescence. Strain into a Champagne flute.',
            optional: 'float a ½ ounce of imported peach liqueur.',
            note: 'For a group, use a 32-48 ounce pitcher and a long barspoon. Add 8 ounces of puree to the bottom of the pitcher filled half way with ice and slowly pour the Champagne while dragging the puree up the side with a spoon in order to mix. Be gentle to retain the bubbles in the champagne. Serve.'
        },
        {
            name: 'Blood and Sand [1920-1930] ',
            ingredients: '¾ oz. Chivas Regal Scotch Whisky, ¾ oz. Cherry Heering, ¾ oz. Italian Sweet Vermouth, ¾ oz. fresh-squeezed orange juice',
            preperation: 'Shake and strain into a cocktail glass. Garnish with an orange peel.'
    
        },
        {
            name: 'Bloody Mary (Original Recipe) [1920-1930]',
            description: 'As the story goes, the Bloody Mary was invented at the legendary (and still-standing) Harry’s New York Bar in Paris in the early 1920s, when bartender Ferdinand “Pete” Petiot poured vodka (popular in Paris due to the large number of Russians taking refuge there from the Bolshevik Revolution) into a glass of tomato juice, newly imported in cans from the United States. In 1934, the story continues, Petiot brought the drink to America, when—Prohibition having just been repealed—he became head bartender at New York’s St. Regis Hotel. It was at this point that he added the spices the drink contains today—the lemon juice, the Worcestershire, the Tabasco, the salt and pepper; in fact, the only thing to distinguish it from the modern Bloody Mary is the name, which had to be changed to Red Snapper (the other was thought vulgar) and the fact that it had to be made with gin, as vodka wasn’t yet available in the US Well, at least some of this is true. Pete Petiot did work at Harry’s in the early 1920s and at the St. Regis in the 1930s (and 40s, 50s and 60s) You could get both vodka and tomato juice in Paris at some point in the 1920s, anyway. But tomato juice had been a popular hangover cure in America for a long time. What’s more, in the late 1920s, the people responsible for marketing the stuff began widely publicizing an alcohol-free “Tomato Juice Cocktail” designed to give a bit of the bite of an alcoholic drink,without anything illegal in it. Its ingredients? Tomato juice, lemon juice, Worcestershire sauce, Tabasco sauce, salt and pepper.It didn’t take much inventing to add a little alcohol to that. Add a number of other claimants to the invention and some later hedging and hemming and hawing from Petiot, and a clear story turns very murky. One thing we do know for sure is that the combination of vodka and tomato juice, however you named it and whatever else you added to it, was well-established as a hangover drink by the late 1930s. One other thing we also know is that Pete Petiot was one hell of a great bartender, whether he invented the Bloody Mary or merely facilitated its acceptance.',
            ingredients: '1½ oz. Absolut vodka, 2 dashes Worcestershire sauce, 4 dashes Tabasco sauce, Pinch of salt and pepper, ¼ oz. fresh lemon juice, 4 oz. tomato juice',
            preperation: 'Combine all ingredients in mixing glass and roll back and forth into tin to mix (that will prevent the tomato juice from foaming). Strain into an iced goblet. Garnish with wedge of lemon and lime on a side plate. A dash of celery salt is a nice touch and New Yorkers traditionally add horseradish. Bloody Marys offer rich ground for improvisation both in garnish and ingredients. Have fun.'
        },
        {
            name: 'Caipirinha [1930-1940], Caipirissima, Caipiroska [1960-1970]',
            description: 'The national drink of Brazil, and party animals everywhere.',
            ingredients: '2 oz. Janeiro cachaça, 1½ barspoons of sugar or ¾ oz. simple syrup,½ lime, quartered ',
            preperation: 'Place lime quarters in the bottom of mixing glass, add the sugar or syrup and muddle, extracting the juice and the oil in the skin from the lime quarters.Chill a rocks glass with cracked ice. Add cachaça (or white rum, for a Caipirissima, or Absolut vodka, for a Caipiroska) to the mixture in the glass, toss in the ice and shake well. Pour the entire contents of the mixing glass back into the chilled rocks glass and serve. Another method is to build the whole drink in the glass that will receive it, omitting the shaking.'
        },
        {
            name: 'Collins (Tom, John or Vodka) [1820-1830]',
            description: 'The Collins goes back to London in the early nineteenth century, where places like the Garrick Club (for actors and other sporty types) and Limmer’s Hotel (patronized by dukes and bookies in equal proportion) began serving a Gin Punch that was stretched out with iced soda water. It takes its surname from John Collins, headwaiter at Limmer’s. Eventually, the John Collins changed from a drink made with Dutch genever or English Old Tom gin to one with American whiskey, while the gin version took on the name Tom Collins, due to both to the rise in popularity of Old Tom gin and a joke that was going around America in the 1870s about one Tom Collins who went around saying terrible things about people.',
            ingredients: '1½ oz. Beefeater Gin, genever gin, bourbon or Absolut vodka, ¾ oz. fresh lemon juice,¾ oz. simple syrup, Club soda ',
            preperation: ' Shake spirits, lemon juice and simple syrup with ice, strain into an iced Collins glass and fill with soda. Garnish with a cherry and an orange slice. For a Vodka Collins, replace the gin with Absolut vodka. For an old-style John Collins, use a Dutch genever or a good American bourbon whiskey.'
        },
        {
            name: 'Cosmopolitan [1980-1990]',
            description: '“The modern classic has conquered the world; I was given credit for inventing the Cosmo by New York magazine. I was not the inventor but I standardized the recipe and printed it on my cocktail menu at the Rainbow Room, where Madonna was spotted drinking one. That was all the rest of the world needed. The actual inventor is Cheryl Cook from South Beach in Miami, who recently surfaced to claim her invention.” —Dale DeGroff',
            ingredients: '1½ oz. Absolut Citron vodka, ¾ oz. Cointreau, ¼ oz. fresh lime juice,  1 oz. Ocean Spray Cranberry Juice Cocktail',
            preperation: 'Shake all ingredients with ice. Strain into a chilled cocktail glass. Garnish with an orange peel.'
        },
        {
            name: 'Daiquiri [1900-1910]',
            description: 'This Cuban drink derives its name from a town on the island’s southeastern coast. It’s the first classic straight-up cocktail to be invented outside the United States.',
            ingredients: '1½ oz. white rum, ¾ oz. simple syrup, ¾ oz. fresh lime juice',
            preperation: ' Shake all ingredients with ice and strain into a small cocktail glass. Garnish with a lime wheel. Note: Purists will hold out for the original 1910s recipe:juice of half a lime, half a teaspoon superfine sugar, 2 oz. rum (assembled in that order, stirring the sugar into the lime juice before adding the rum). '
        },
        {
            name: 'Gimlet [1890-1900]',
            description: 'In the late nineteenth century, the British Navy issued all sailors a ration of preserved lime juice to prevent scurvy. The officers, who did not receive the standard rum ration, mixed theirs with their preferred Plymouth gin. The ice came later.',
            ingredients: '2½ oz. Beefeater gin, ½ oz. preserved lime juice (Rose’s or Angostura)',
            preperation: ' Shake ingredients well with ice and strain into a chilled martini glass or serve over ice in an old-fashioned glass. Garnish with lime wedge.'
        },
        {
            name: 'Gin Fizz [1870-1880]',
            description: 'The fab drink of the 1870s, the Gin Fizz is simple, refreshing and endlessly adaptable (one of the most popular wrinkles calls for it to be made with an egg white, in which case it is a Silver Fizz; others involve adding six or eight raspberries or a lightly-muddled strawberry or two, when such things are in season).',
            ingredients: '1½ oz. Beefeater gin, ¾ oz. fresh lemon juice, ¾ oz. simple syrup (or 1 teaspoon superfine sugar),Club soda ',
            preperation: 'Shake the gin, lemon juice and simple syrup and strain into a highball glass. Fill with club soda. No garnish.',
            note: 'The difference between the Fizz and a Collins is glass size, garnish and ice: a proper Fizz is served without ice in the glass, a Collins has it. The Collins goes in an extra-tall or “Collins” glass, with a cherry and orange slice garnish.'
        },
        {
            name:'Hot Toddy [1750-1760]',
            description:'This simple drink is one of the oldest in the world’s drink vocabulary, dating back to Scotland in the middle of the 1700s. It’s also one of the best, whether made simply as below or fancied up with cider instead of the water and cloves, cinnamon sticks and other spices. (No video available)',
            ingredients: '2 oz. The Glenlivet single-malt Scotch whisky or Redbreast Irish whiskey, 1 well-filled barspoon demerara sugar or ¼ oz. honey, 1 strip of thin-cut lemon peel, 2-4 oz. boiling water',
            preperation: 'Rinse out a mug or hot whiskey glass with boiling water, to warm it. This is as essential a step with hot drinks as chilling the glass is with cold ones. Add the sugar or honey, the lemon peel and half an oz. or so boiling water. Stir until sugar or honey has dissolved. Add the whisky and another 1½ to 2½ ounces water, depending on how stiff a drink is required.'
        },
        {
            name: 'Irish Coffee [1940-1950]',
            description: 'Originally prepared at Shannon Airport in Dublin by Joe Sheridan the Irish Coffee found a home in the ',
            ingredients: '1½ oz. Jameson Irish whiskey. 1 oz. simple or brown sugar syrup (equal parts of water and brown sugar, dissolved), 4 oz. brewed coffee, Lightly whipped unsweetened cream',
            preperation: 'Combine whiskey, coffee and syrup in an Irish coffee glass. Ladle a layer 1 inch (2.5 mm) thick of cream on top.'
        },
        {
            name: 'Mai Tai [1940-1950]',
            description: 'This, the dean of all Tiki drinks, was invented by Victor “Trader Vic” Bergeron in Oakland, California.',
            ingredients: '2 oz. aged rum (Jamaican if possible), ¾ oz. fresh lime juice , ¾ oz. orange curaçao ,1 teaspoon orgeat syrup ',
            preperation: 'Shake well with ice and strain into an old-fashioned glass filled with ice. Garnish with a wheel of lime, a mint sprig and if possible a Sonya orchid.'
        },
        {
            name: 'Manhattan [1870-1880]/Rob Roy [1890- 1900]/Emerald [1900-1910]',
            description: 'The Manhattan story is told in Module III. Make it with Scotch, and you’ve got a Rob Roy,first introduced in 1895, probably at New York’s Fifth-Avenue Hotel. Make it with Irish whiskey, and it’s an Emerald (there are other names as well), which was a specialty of the Irish-staffed bar of the Waldorf-Astoria Hotel, just a few blocks up the street. ',
            ingredients: '2 oz. Lot 40 Canadian Rye whisky or bourbon whiskey , 1 oz. Italian sweet vermouth, 2-3 dashes Angostura bitters ',
            preperation: 'Pour all ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass. Garnish with a cherry, although many discriminating drinkers prefer theirs with a twist. Note: If you prefer a dry Manhattan, use dry vermouth and garnish with a lemon peel. For a Perfect Manhattan, use ½ oz. each of dry and sweet vermouth and, again, deploy the peel.',
            note: 'For a Rob Roy, replace the bourbon or rye with a good blended Scotch whiskey, such as Chivas Regal. Many prefer orange bitters in this, with an orange twist at the end. For an Emerald, replace the American whiskey with a rich Irish one, such as John Powers or Redbreast. Many prefer orange bitters and an orange twist here, too.'
        },
        {
            name: 'Margarita [1930-1940]',
            description: 'There aren’t a lot of essential tequila cocktails, but this one more than makes up for it. A child of the 1930s, the Margarita has grown up into one of the most popular cocktails of them all, and not without reason.',
            ingredients: '2 oz. Olmeca Altos Plata or Tequila Avión Silver, ¾ oz. fresh lime juice, ½ oz. agave nectar, ( ½ oz. simple syrup is optional but necessary for many guests.),Coarse salt ',
            preperation: 'Combine first three ingredients in a mixing glass with ice. Shake well and strain into a chilled salt- rimmed cocktail glass. Garnish with a lime wedge. Salting the rim: Frost the edge of the cocktail glass by rubbing a lime wedge on the outside rim of the glass, then dipping it into a saucer of coarse salt. Salt inside the glass is not a desirable outcome of this process. Note: Never use iodized salt on the rim of the glass.'
        },
        {
            name: 'Dry Martini [1890-1900]',
            description: 'Nothing needs to be said for the Martini: it speaks for itself. The standard recipe from about 1895 to 1915.',
            ingredients: '1½ oz. Beefeater London dry gin ,1½ oz. French dry vermouth,  1 or 2 dashes orange bitters',
            preperation: 'Stir all ingredients with ice to chill and twist orange peel or lemon peel over the top'
            
        },
        {
            name: 'Classic Extra Dry Martini (as it was made from 1950 on) [1950-1960]',
           ingredients: '3 oz. Beefeater London dry gin or Absolut vodka ,1/8 oz. dry French vermouth '
        }
    ]);
});