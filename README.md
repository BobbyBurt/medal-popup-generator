# NG Medal Popup Generator
https://www.newgrounds.com/projects/games/1867451/preview


I want to come up with a medal popup audio / visual treatment that anyone can use.

- Visuals must be something easily adaptable to any framework. Sprite sheets seem like the most universal, easily implimented thing, but they're not ideal for smooth UI animation.
- A popup visual, along with optional appear and disappear spritesheets. Appear flashes on screen with MEDAL GET! text, before medal name, icon and pts value appears. Disappear is a quick fadeout. There are appear and disappear sfx too.
- Different difficulty settings can have different audio / visual to distinguish them. Mainly colour coding would be cool
- I could make a program which lets users use their own image and paste the medal's name and stats, then they can download / screenshot the popup visual. Not sure how I'd hook up image uploading... could I use the medal webp url?
- Makes most sense for the medal popup to go in the bottom right corner of the screen where it's closest to the medals sections of the page
- To account for higher game windows and especially hi-res mobile screens, the popup needs to be significantly bigger. After doing a mockup / test, 250 wide is good on desktop even in fullscreen, and 500 wide is good on mobile.
- The background of the medal / surrounding area should be 100% black to account for those who just have black backgrounds. Maybe it's an option to disable a box outline to account for it?