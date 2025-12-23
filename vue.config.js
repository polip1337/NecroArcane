module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/NecroArcane/" : "/",

	assetsDir:'css',

	productionSourceMap:false,

	css:{
		extract:true
	}
	

}