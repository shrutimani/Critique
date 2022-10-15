var opt = {
    actions: false
}
var dropout_rates = "new_drop_out.vg.json";
vegaEmbed("#dropout_rates", dropout_rates, opt).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var scatter = "int_visualization.vg.json";
vegaEmbed("#scatter", scatter, opt).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);




var population_zoom = "visualization_zoom_population.vg.json";
vegaEmbed("#population_zoom", population_zoom, opt).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var gender = "visualization_gender.vg.json";
vegaEmbed("#gender", gender, opt).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var categories = "visualization_categories.vg.json";
vegaEmbed("#categories", categories, opt).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


