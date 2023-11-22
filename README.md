# Excove Developer Test

Aleksi Lassila

## Section 1

1C. The solution was quite simple, apart from getting the event to fire only when the user stops dragging the slider.
I solved the problem by tracking whether the user is dragging the slider, and then firing the event inside input
onChange function only if the slider isn't being dragged (the keyboard is used). This way we get the wanted result and
maintain keyboard control and accessibility features.

## Section 2

2A. Since there wasn't a lot of requirements defined, decided to keep it simple stupid. I ended up going with simple
carousel that tracks the current picture index in a state and takes the list of image urls as props, and then fades
between two images. Because a comic book might have a lot of images, I added lazy loading so that only 2 adjacent images
are loaded in advance.

## Section 3

3B. I solved the problem with a simple grid of items that show the preview (first image) of the set. Wrapping the active
carousel with a modal seemed like the best solution, taking the user to a new page would've been unnecessary. I
implemented the dark mode toggle using react contexts, to avoid prop drilling as the app grows.

3D. Since the problem seemed so simple, I also did this one. Modern layouts like these are usually done with flexbox or
grid, so those were what I also used. Using tables is almost never a good idea. Using tailwind made the media query
breakpoint easy and clean to implement.
