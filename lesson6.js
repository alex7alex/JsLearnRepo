// Є масив
// [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null]
// Вивести цей масив без нуль-значень (null, 0, false ....).

let givenArray = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];
for (let i = 0; i < givenArray.length; i++) {
    if (!!givenArray[i]){
        console.log (givenArray[i]);
    }
}


