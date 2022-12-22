# website
A website for Patrick O'Melveny

# local dev

## First time install 
`npm install`

## Watch changes and run local server
`npm start`

Let's you make incremental changes and see the results in your browser

## Just build (dev)
`npm run build`

Like start above, but just does it once. 
Could be useful to someone someday.

## Prod Build
TODO: Make this push/sync website??
`npm run prod:build`

# Getting to AWS

## Copy files

`aws s3 sync ./public/ s3://pvomelveny.com`

