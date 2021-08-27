import Testing from '@pablo-mayrgundter/testing.js/testing.js';
import {assertEquals} from '@pablo-mayrgundter/testing.js/testing.js';
import Utils from './Utils.js';

const tests = new Testing();

const theUtils = new Utils();

const testData = {
    'CenterPointCoord': { N: 5, E: 10 },
    'XYZDataClean': "10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataCleanWithComment': "#commentline\n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataCleanWithTwoComments': "#commentline\n#commentline\n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataPrecededByText': "klsadflkhsdf\nksdjflds\n\n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataPrecededBySpace': "        \n        \n\n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataPrecededByMixture': "ksdjfldskss34534534djflds\n56546544 654654\nksdjflds\n        \n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataPrecededByMixtureIncludingCommentsAtStart': "#commentline\nksdjfldskss34534534djflds\n56546544 654654\nksdjflds\n        \n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataPrecededByMixtureIncludingCommentsInMiddle': "ksdjfldskss34534534djflds\n56546544 654654\n#commentline\nksdjflds\n        \n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
    'XYZDataPrecededByMixtureIncludingMultipleComments': "ksdjfldskss34534534djflds\n#commentline\n56546544 654654\n#commentline\nksdjflds\n        \n10 10.01 3\n20 10 4\n10 20 5\n20 20 6\n",
}


tests.add('Clean XYZ data should be unchanged after trimming', () => {
    assertEquals(theUtils.trimXYZFileStart(testData.XYZDataClean),testData.XYZDataClean,  'Expected XYZ data, clean after trim === XYZ data, clean' ); 
});

tests.add('XYZ data with text before it should be trimmed', () => {
    assertEquals(theUtils.trimXYZFileStart(testData.XYZDataPrecededByText), testData.XYZDataClean, 'Expected XYZ data preceded by text after trim === XYZ data, clean' );
});

tests.add('XYZ data with space before it should be trimmed', () => {
    assertEquals(theUtils.trimXYZFileStart(testData.XYZDataPrecededBySpace), testData.XYZDataClean, 'Expected XYZ data preceded by space after trim === XYZ data, clean' ); 
});

tests.add('XYZ data with a mixture of text, numbers and space before it should be trimmed', () => {
    assertEquals(theUtils.trimXYZFileStart(testData.XYZDataPrecededByMixture), testData.XYZDataClean, 'Expected XYZ data preceded by mixture of text, numbers and space after trim === XYZ data, clean' );  
});

tests.add('XYZ data with comments, text, numbers and space before it should be trimmed and comments kept', () => {
    assertEquals(theUtils.trimXYZFileStart(testData.XYZDataPrecededByMixtureIncludingCommentsAtStart), testData.XYZDataCleanWithComment, 'Expected XYZ data preceded by mixture of comment, text, numbers and space after trim === XYZ data and comment, clean' );  
});

tests.add('XYZ data with comments, text, numbers and space before it should be trimmed and comments kept', () => {
    assertEquals(theUtils.trimXYZFileStart(testData.XYZDataPrecededByMixtureIncludingMultipleComments), testData.XYZDataCleanWithTwoComments, 'Expected XYZ data preceded by mixture of comments, text, numbers and space after trim === XYZ data and comments, clean' );  
});


tests.add('Original X and Y coords should be reduced by CenterPointCoord ', () => {
    const origData = testData.XYZDataClean;
    const newData = theUtils.recenterXYZToCenterPointCoordinate(testData.XYZDataClean, testData.CenterPointCoord);
    const origFirstXYZ = origData.split('\n')[0];
    const newFirstXYZ = newData.split('\n')[0];
    const centerPointX = testData.CenterPointCoord.E;
    const centerPointY = testData.CenterPointCoord.N;
    const origX = origFirstXYZ.split(' ')[0];
    const origY = origFirstXYZ.split(' ')[1];
    const newX = newFirstXYZ.split(' ')[0];
    const newY = newFirstXYZ.split(' ')[1];
    assertEquals(Number(origX), Number(newX) + Number(centerPointX),  'Expected origX to === newX plus centerPointX' ); 
    assertEquals(Number(origY), Number(newY) + Number(centerPointY),  'Expected origY to === newY plus centerPointY' ); 
});

tests.run();
