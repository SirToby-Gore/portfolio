"use strict";
class RandomCoordinates {
    constructor() {
        this.x = Math.random() * 100 + '%';
        this.y = Math.random() * 100 + '%';
    }
}
class ShootingStar {
    constructor(isRandomStars = false, colours = ['lightseagreen']) {
        this.colours = colours;
        this.star = document.createElement('div');
        this.star.classList.add('star');
        this.setStarType(isRandomStars);
        this.start = new RandomCoordinates();
        this.setStyles();
    }
    /**
     * sets the type of star
     * @param isRandomStars {boolean}
     * @returns {void}
     */
    setStarType(isRandomStars) {
        if (!isRandomStars) {
            this.star.classList.add('pointed-star-4');
            return;
        }
        const randFloat = Math.random();
        if (randFloat <= 0.3) {
            this.star.classList.add('pointed-star-4');
        }
        else if (randFloat > 0.3 && randFloat <= 0.6) {
            this.star.classList.add('pointed-star-8');
        }
        else {
            this.star.classList.add('pointed-star-8-skinny');
        }
    }
    /**
     * sets the styles of the star
     */
    setStyles() {
        this.setNewStyleVar('--start-x', this.start.x);
        this.setNewStyleVar('--start-y', this.start.y);
        this.setNewStyleVar('--duration', Math.random() * 6 + 5 + 's');
        this.setNewStyleVar('--delay', Math.random() + 's');
        this.setNewStyleVar('--top', Math.random() * 100 - 30 + '%');
        this.setNewStyleVar('--left', Math.random() * 100 - 30 + '%');
        this.setNewStyleVar('--size', `${Math.random() + 0.5}`);
        this.setNewStyleVar('--angle', Math.random() * 360 + 'deg');
        this.setNewStyleVar('--colour', this.randomColour());
        this.setNewStyleVar('--travel', this.randomTravel());
    }
    setNewStyleVar(styleName, styleValue) {
        this.star.style.setProperty(styleName, styleValue);
    }
    getStar() {
        return this.star;
    }
    /**
     * gets a random colour from an array
     * @returns {string}
     */
    randomColour() {
        const array = this.colours;
        const min = Math.ceil(0);
        const max = Math.floor(array.length - 1);
        return array[Math.floor(Math.random() * (max - min + 1)) + min];
    }
    randomTravel() {
        const travelUnits = {
            'vw': 1,
            'vh': 1,
            'dvh': 1,
            'px': 100,
        };
        const keys = Object.keys(travelUnits);
        const randomIndex = Math.floor(Math.random() * keys.length);
        const key = keys[randomIndex];
        const unitMultiplier = travelUnits[key];
        return `${Math.random() * 100 * unitMultiplier}${key}`;
    }
}
class NightSky {
    constructor(ID) {
        this.nightSky = document.getElementById(ID);
        this.numberOfStars = Number.parseInt(this.nightSky.style.getPropertyValue('--number-of-stars') || '5');
        this.addStars(this.numberOfStars);
        this.nightSky.addEventListener('click', () => {
            playSong(ID);
        });
    }
    /**
     * gets the colours from the night sky's css
     * @returns {Array<string>}
     */
    getColours() {
        let colours = this.nightSky.style.getPropertyValue('--colours') || 'lightseagreen';
        const replaceForBlank = [' ', '\'', '\"'];
        if (typeof colours == 'string') {
            for (let i in replaceForBlank) {
                while (colours.includes(replaceForBlank[i])) {
                    colours = colours.replace(replaceForBlank[i], '');
                }
            }
        }
        return colours.split(',');
    }
    /**
     * adds all the stars to the night sky
     * @param numberOfStars {number}
     */
    addStars(numberOfStars) {
        const isRandomStars = this.nightSky.style.getPropertyValue('--stars') == '0';
        let colours = this.getColours();
        for (let i = 0; i < numberOfStars; i++) {
            this.nightSky.appendChild(new ShootingStar(isRandomStars, colours).getStar());
        }
    }
}
/**
 * sets the ability to play a song on a night sky
 * @param ID {string}
 * @returns {void}
 */
function playSong(ID) {
    const skyBG = document.getElementById(ID);
    if (skyBG == null) {
        return;
    }
    const myAudio = skyBG.getElementsByTagName('audio')[0];
    myAudio.play();
}
/**
 * initialises all night skies
 */
function makeNightSkies() {
    const skies = document.getElementsByClassName('night-sky');
    for (let i = 0; i < skies.length; i++) {
        new NightSky(skies[i].id);
    }
}
/**
 * checks to see if an ID is taken in the DOM.
 * @param ID {string}
 * @returns {boolean}
 */
function isIDTaken(ID) {
    if (document.getElementById(ID) == undefined) {
        return false;
    }
    else {
        return true;
    }
}
/**
 * sets all auto id elements to unique ids
 * auto ID elements are elements with the class [auto-id]
 */
function setAutoID() {
    const autoIDElements = document.getElementsByClassName('[auto-id]');
    let count = 0;
    for (let i = 0; i < autoIDElements.length; i++) {
        while (true) {
            const ID = `ID-${count}`;
            if (!isIDTaken(ID)) {
                autoIDElements[i].id = ID;
                break;
            }
            count += 1;
        }
    }
}
function main() {
    setAutoID();
    makeNightSkies();
}
main();
