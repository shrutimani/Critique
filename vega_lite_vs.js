var vg_1 = "visualization.vg.json";
vegaEmbed("#vg1", vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "int_visualization.vg.json";
vegaEmbed("#vg2", vg_2).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);