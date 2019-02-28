# pharaoh-idle

## Change Log
v0.2 - 2019-02-28   - Sectioned 'God branches' into columns (CSS Grid)
                    - Added Amon-Ra branch
v0.1 - 2019-02-20   - Initial commit, creating repository and ability to fork for development.
                    - Changed format from a machines-build-machines structure to individual but more powerful machines (see notes below).

## Ideas and Tasks

### Ideas
Initially this game was intended to be of the form where higher tier elements automated the lower tier elements, but the game scaled far too fast.
Instead, there will be more expensive options, which produce a lot more of an element instead.

A general theme of these type of games is a master reset, think the Angel Investors in Adventure Capitalist. Although this will be a feature, it will be possible to utilise 'God' spefific mini-resets, upgrading each channel (i.e. Thoth will just reset the scribe channel).

#### Cats
Cats were worshipped and sacred in Egypt, and as such must function thus within the game. 

##### Generation
Now as we know cats are a world unto themselves, however they will generate at random, although this will have various multipliers which will increase their spawn rates based both on specifically purchased upgrades (see Ankhs), or as a player gains more higher level items.

##### Uses
Cats can be used in two ways: Firstly, they can be spent as part of the 'God' specific resets. Secondly, they can be used to create amulets, which can be moveable amulets to enhance or upgrade specific 'machines'.

#### Ankhs
Ankhs are a tertiary currency behind Slaves and Gold. Ankhs are generated by the Amun-Ra branch, in a much lesser and slower quantity than Gold. Once a player is able to afford the machines within the Anubis Branch, then the machines within this branch will auto-produce elements of the Amon-Ra branch, thus speeding up Ankh production.

##### Useage
Ankhs are used to purchase permanent upgrades for a variety of things, in the same way that science can be spent in Adventure Communist.


### General to-do list
- [ ] Create a multiplier MD, to explain what all of the multipliers are, and how they are used in the code.
- [ ] Add a slave/second, gold/second and ankhs/second
- [ ] Add seconds (ms) per tick display in one of placeholder locations
- [ ] Add an advancement system, which speeds up Slave production and/or tick-speed based on certain triggers
- [ ] Add a game-save and game-load option
- [ ] Format numbers so that they scale better as they get larger (commas for 000s, and also exponent styling/abbreviation i.e. m, bn, tn, qu etc...)
- [x] Display god branches in columns

#### Thoth to-do
- [ ] Add god functionality

#### Amun-Ra to-do
- [x] Add machines
- [ ] Add god functionality

#### Seshet to-do
- [ ] Add machines
- [ ] Add god functionality

#### Anubis to-do
- [ ] Add machines
- [ ] Add god functionality
