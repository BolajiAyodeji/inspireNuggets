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

### Getting Started

1.  If you are new to Git and Github, it is advisable you go through
    [GitHub For Beginners](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/)
    before moving to the next step.
    
2.  Fork the Repository [here](https://github.com/BolajiAyodeji/inspireNuggets/fork)

3.  Clone the forked Repository <br>
`$ git clone https://github.com/BolajiAyodeji/inspireNuggets.git`

4.  Enter the cloned directory <br>
`cd inspireNuggets`

5.  Open dorectory in your Code Editor <br>
`code .`

6.  Load the extension in Developer's Mode as 'UnPacked'
    - Open your Chrome Browser
    - Click on the three dots at the upper right corner of your tab
    - Select `More Tools`
    - Select `Extensions`
    - Click on the `Load UnPacked` button at the upper left corner
    - Locate the directory you cloned the repository to and Click OK
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
        "author": "Ernest Hemingway",
        "quote": "Write drunk; edit sober."
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
- To add your quote; first add a `,` to the last quote after the curly bracket `}`
- Copy and paste this code after the last quote
```
{
        "number": "1",
        "author": "John Doe",
        "quote": "Loorem ipsum dolor sit amet consectetur adipisicing elit.."
}
```
- Now edit that code snippet to show your own quote; <br>
(Change the number to the last number, add your Author name and Quote)

## STEP TWO
- Navigate to this folder `js/app.js`
- This is what the file would look like
```
console.log(data);
var random = Math.floor(Math.random() * 40);
document.getElementById('quote').innerHTML = data[random].quote;
document.getElementById('author').innerHTML = data[random].author;
```
Now our Script updates with a new quote after every Reload, so you need to update this file to add your quote to the Randon Updates
- In line two, change
`var random = Math.floor(Math.random() * 40);` to `var random = Math.floor(Math.random() * 41);`
- This `* 41` should be the last number in the `quotes.json` file
- If your last added quote is number `90` you should add `* 90` here and not `*40`
- Save the file and the extension should be updated

## STEP THREE
- Push your files <br>
```shell
$ git add --all
$ git commit -m "commit description here"
$ git push -u origin master
```
- Open a Pull Request ( [What is a pull request?](https://yangsu.github.io/pull-request-tutorial/) )
- Add enough description of what you did, changes you made and if possible screenshots
- Wait for Review (Your PR would be reviewed and merged if deemed fit)

## Helpful Resources

- [Pro GIT Book](https://git-scm.com/book/en/v2)

- [Try Git](https://try.github.io/)

- [Git/ Git Hub on Windows](https://www.youtube.com/watch?v=J_Clau1bYco)

<h4> If you are not a Developer and still want to add a/your Quote to this Extension fill this [form](https://goo.gl/forms/kIoWsKNW7osWGXiz2) and it would be added.
</h4>
    
This Guide is Open for Updates, if you feel it is not complete or you have ideas of what should be added, Follow the same format above.
This file is stored in `docs/README.md`
Update as you deem fit and send a Pull Request.

## Author
[Bolaji Ayodeji](https://github.com/BolajiAyodeji)

## Licence
[MIT](https://opensource.org/licenses/MIT)
