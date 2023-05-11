# Pokedex

# Tech specs

This App is powered by React.js library with Typescript setup.

# How to install app

To install this app locally you have to run next commands:

1. Clone repo: <br>
   `git clone https://github.com/HashDev123/pokedex.git`
2. Install Node.js packages (Node 16 is preferable)
   To change your Node version using NVM
   `nvm use 16 //if you're using nvm` <br>
   then <br>
   `npm i`

# How to use this App

This app is deployed at the GitHub Pages. You can open it here: https://hashdev123.github.io/pokedex/
This app is designed to show all available Pokemons and their stats. Pokemons list divided by entries of 12 creatures. <br>
If you need to see more - press the blue button with `Load More` text at the bottom of the list. <br>
In order to see the stats of Pokemon you can click on this Pokemon and info will be displayed at the right side of the Pokemons list. <br>
If you need to filter Pokemons by their type - just use `select` input at the top of the list and pick needed type. If you want to disable filtration - just pick the `off` option in the filter menu. <br>
NOTE: Filtration will be applied only to already downloaded pockemons. If you will apply a filter and then press the `Load more` button - system will upload Pokemons without this filter.
