const bodyParser = require('body-parser');
const express = require('express');
var routes = require("./routes.js");
const cors = require('cors');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */

/* ---- (Test) ---- */
app.get('/mapChart', routes.getMapChartData);
app.get('/areaChart', routes.getAreaChartData);
app.get('/commodity_groups', routes.getAllCommodityGroups);
app.get('/commodities/:entAndSector', routes.getCommodityList);
app.get('/entities/:entAndCom', routes.getEntityList);
app.get('/histData/:searchTerms', routes.getHistData);
app.get('/weatherData/:state', routes.getWeatherData);

/* ---- Server ---- */
app.listen(5000, () => {
	console.log(`Server listening on PORT 5000`);
});