import con from'../../config.js';
import runrem from'./rem.js';
var config = {
    con:con,
    runrem:runrem
};

if(config.con.isrem){
	config.runrem();
}

export default config;