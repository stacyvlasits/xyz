# XYZ Extract Tool

See [Demo XYZ extract tool](https://buildrs.github.io/xyz/)

## Install dev
This requires you have a github account and personal access tokens.  See https://stackoverflow.com/questions/58919401/installing-packages-from-github-npm-registry-auth-error-401
```
> npm i
```

## Run dev locally
```
> npm run serve
```

## Build production
```
# First, increase the version number in package.json to the
# next in sequence from the current NPM version.
> npm run build
> npx rollup -c
# Push to demo site:
> git add . ; git ci -m 'Pushing version x.x.x' ; git push
```

## Publish @buildrs/xyz NPM
```
> npm publish
```

# Commandline Tool

## xyz.py
Command for working with .xyz files.
```
~/dbs/xyz> ./xyz.py
usage: xyz.py [-h] [-infile INFILE] [-outfile OUTFILE] [-xmin XMIN] [-ymin YMIN] [-xmax XMAX] [-ymax YMAX]

Extracts regions bounded by the given arguments. By default, reads from stdin and writes to stdout, with infinite
upper and lower bounds.

optional arguments:
  -h, --help        show this help message and exit
  -infile INFILE
  -outfile OUTFILE
  -xmin XMIN
  -ymin YMIN
  -xmax XMAX
  -ymax YMAX
```
