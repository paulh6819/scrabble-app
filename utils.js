import { readFileSync} from "fs"; 

export const nbaData = readFileSync ("nba_finals.csv","utf8").split("\r\n");

//console.log(nbaData)


