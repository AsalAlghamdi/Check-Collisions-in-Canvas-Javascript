# Canvas Objects Collision
When drawing shaps or images in canvas, alot of times we want to detect any collision that happen from this objects. This script is a function takes **X/Y** position and **Width/height** distances from the two objects and return **boolean** if the collision has occurred or not.

## How Does It Work
The idea is to check each pixle postion of the first object and compare it to all pixles in the other object if they equal. This way will take a long loop, so to make it easer just compare the corners pixles. We have eight corners pixles from both objects so just check if one corner from the first object had fit inside the the second object.

## Rules You Should Pay Attention To
This function is work perfect if the shapes are only square, so methods like arc() (method draw a circle) it wouldn't work fine.

Note that if the image format is PNG, it will consider it as square shape too, so if your image graphics is rounded and not fill the corners then the detection of collision will occure with the empty corners, the only way to improve this is by minimizing the detection to the center of the image, it could show some friction without making any collision event but it is the better way.

## How to Use It
It is a regular Javascript function, just paste the `checkCollisions` function within your code. Then after a new frame draw in the `canvas` call the function and pass its required parameters. 

## Function Parameters
- `obj1X` is X postion of the first Object.
- `obj1Y` is Y postion of the first Object.
- `obj1W` is Width of the first Object.
- `obj1H` is Height of the first Object.
- `obj2X` is X postion of the second Object.
- `obj2Y` is Y postion of the second Object.
- `obj2W` is Width of the second Object.
- `obj2H` is Height of the second Object.
