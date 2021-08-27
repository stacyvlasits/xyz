export default class Utils {  
  trimXYZFileStart(text){
    const XYZLineRegex = /(\d+\.?\d*)\s+(\d+\.?\d*)\s+(\d+\.?\d*).*/g; 
    const indexOfFirstXYZLine = text.search(XYZLineRegex);
    let trimmedText = text.substring(indexOfFirstXYZLine);
    const removed = text.substring(0, indexOfFirstXYZLine);
    const preservedCommentLines = removed.split('\n').filter(line => line.charAt( 0 ) === '#').join('\n');
    if (preservedCommentLines){
      trimmedText = preservedCommentLines + "\n" + trimmedText;
    }
    return trimmedText;    
  }  

  recenterXYZToCenterPointCoordinate(xyzData, centerPointCoordinate){
    const lines = xyzData.split('\n');  
    const recenteredLines = [];
    for ( let line of lines ) {
      line = line.trim();
      if (line.charAt( 0 ) === '#' ){
        recenteredLines.push(line); 
      } else {
        let lineValues = line.split( /\s+/ );
        let x = lineValues[0];
        let y = lineValues[1];
        if (!(isNaN(x) || isNaN(y))) {
          lineValues[0] = x - centerPointCoordinate.E;
          lineValues[1] = y - centerPointCoordinate.N;
        }
        const newLine = lineValues.join(' ');
        recenteredLines.push(newLine);
      }
    }
    return recenteredLines.join('\n');
  }
}