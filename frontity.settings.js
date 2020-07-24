const settings = 
[
{
  "name": "front",
  "match": ["http://localhost:3000/"],
  "state": {
    "frontity": {
      "url": "https://wp.api/",
      "title": "Test Frontity Blog en español",
      "description": "Desarrollo en wordpress con el framework de frontity" 
    },
    "theme":{
      "lang": "es",
    }
  },
  "packages": [
    {
      "name": "test-theme",
      "state": {
        "theme": {
           "menu": [],
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://wp.api/wp-json",
          "homepage": "home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
},
{
  "name": "front-en",
  "match": [".*localhost:3000\/en(\/.*)?$"],
  "state": {
    "frontity": {
      "url": [".*localhost:3000\/en(\/.*)?$"],
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    },
    "theme":{
      "lang": "en",
    }
  },
  "packages": [
    {
      "name": "test-theme",
      "state": {
        "theme": {
          "menu": [],
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://wp.api/en/wp-json",
          "homepage": "home",
          "subdirectory": "/en/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ]
},
]

export default settings;