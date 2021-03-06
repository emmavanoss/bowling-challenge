# Bowling Challenge

## Setup

```
$ git clone git@github.com:emmavanoss/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```

To open the user interface:
```
$ open index.html
```

## How it works

This is a bowling scorecard. The user inputs the rolls from a bowling game, and
the program counts and sums the scores for that player.

## Comments

This was completed as a weekend challenge while I was doing Maker's.

Bowling is deceptively complex to score, so the challenge was mostly about tackling the business logic of scoring a game. I also had fun making a UI that responds to some extent to the game (e.g. buttons become available/unavailable; new cells are added to the scorecard when needed in the 10th frame).

## Solution

My solution is written in Javascript, with an interactive UI that uses jQuery. I used ESLint to enforce JS conventions, and tests in Jasmine which run in the browser when you open `SpecRunner.html`.

The code works something like this:

![planning-diagram-2](images/planning-diagram-2.png)

_Created on [draw.io](https://www.draw.io/)_

And here's the UI:
![UI-screenshot](images/screenshot.png)

## Background info about bowling

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

