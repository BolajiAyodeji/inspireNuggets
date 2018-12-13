<div align="center">

![inspireNuggets](https://res.cloudinary.com/iambeejayayo/image/upload/v1544624001/tab-icon.png)

A Chrome Extension that generates random inspiring techie quotes for developers/designers. :fire:
</div>

# Contributors Guide

### Prerequisites
- Git or any equivalent Version Control System (GitKraten, GitHub Desktop e.t.c)
- Code Editor (VsCode, Atom e.t.c)
- Little Bash command line knowledge
- Basic JavaScript knowledge

### Setting on your Local Machine
- Clone the Repository <br>
`$ git clone https://github.com/BolajiAyodeji/inspireNuggets.git`
- Enter the cloned directory <br>
`cd inspireNuggets`
- Open dorectory in your Code Editor <br>
`code .`
- Load the extension in Developer's Mode as 'UnPacked'

All Quotes are stored in a JSON file which can be found here `assets/quotes.json`
Quotes are stored in this format
```
data = [
    {
        "number": "1",
        "author": "Von R. Glitschka",
        "quote": "The client may be king, but he's not the art director."
    },
    {
        "number": "2",
        "author": "Frank Capra",
        "quote": "A hunch is creativity trying to tell you something."
    },
    {
        "number": "3",
        "author": "Steven Heller",
        "quote": "As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment."
    }
    ]
```
To add a new Quote this Extension; First you need to add the Quote to the `JSON file` and then Update our `JavaScript` to add your quote to be randomly calculated.

## Step One
