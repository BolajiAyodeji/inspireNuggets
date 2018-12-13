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
    - Open your Chrome Browser
    - Click on the three dots at the upper right corner of your tab
    - Select `More Tools`
    - Select `Extensions`
    - Click on the `Load UnPacked` button at the upper left corner
    - Locate the directory you cloned the repository to
    - Click OK
    - Now the Extension should be added to the list in Developer's Mode
    - Open a `New Tab` to preview the extension
    - Now when you make changes to the cloned repository, this Unpacked Extension would be updated

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

## STEP ONE
- Every Quote has a designated number, so check the number of the last quote before we proceed (For this guide the last number is `40`, this would change always, so use your's)
- You should have your quote and author name already
- Quotes are in this format
```
{
        "number": "1",
        "author": "John Doe",
        "quote": "Loorem ipsum dolor sit amet consectetur adipisicing elit.."
},
 ```
- The last quote does not end with a `,` after the curly brackets `}`
- Any quote before the last quote ends with a `,`
- To add your quote; first add a `,` to the last quote
- Copy and paste this code after the last quote
```
{
        "number": "1",
        "author": "John Doe",
        "quote": "Loorem ipsum dolor sit amet consectetur adipisicing elit.."
}
```
- Now edit that code snippet to show your own quote; (Change the number to the last number, add your Author name and Quote)

## STEP TWO
