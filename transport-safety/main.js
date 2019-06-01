var w = 1400;
var margin = {"left": 70, "right": 50, "top":30, "bottom":70};
var graphHeight = 300;
var paddingGraphButtons = 20;
var buttonsHeight = 50;
var h = margin.top+graphHeight+paddingGraphButtons+buttonsHeight+margin.bottom;
var buttonsPaddingRight = 800;
var buttonsPaddingInner = 0.1;

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
var multiplier = 1000;
var dataset = {
    "Bus":[ 	4.3, 	11.1, 	0.4*multiplier],
    "Rail":[ 	20, 	30, 	0.6*multiplier],
    "Van":[ 	20, 	60, 	1.2*multiplier],
    "Car":[ 	40, 	130, 	3.1*multiplier],
    "Foot":[ 	40, 	220, 	54.2*multiplier],
    "Water":[ 	90, 	50, 	2.6*multiplier],
    "Air":[ 	117, 	30.8, 	0.05*multiplier],
    "Bicycle":[ 170, 	550 ,	44.6*multiplier],
    "Motorcycle":[1640,4840,108.9*multiplier],
    "Skydiving":[7500,75000,1],
    "Space Shuttle":[17000000,70000,6.6*multiplier ],
    "Paragliding":[ 1,	970, 1]
};
var keys = Object.keys(dataset);
var values = Object.values(dataset);
var barColors = [
    ["#5F504E", "#EE3124"],
    ["#9B59B6", "#CB92DC"],
    ["#628B2C", "#9BBF57"]
];
var viewStates = {
    "Journeys": 0,
    "Hours": 1,
    "Kms": 2
}
var viewStatesList = Object.keys(viewStates);


var yScale = d3.scaleBand()
                .domain(keys)
                .rangeRound([margin.top, margin.top+graphHeight])
                .paddingInner(0.1);

var xScale = d3.scaleLog()
                .range([0, w-margin.right]);


var currentViewState = viewStates.Hours;

function setXScale(viewState){
    xScale.domain([1, d3.max(values, function(d){ return 0+d[viewState]})]);
}
setXScale(currentViewState);

var svgDefs = svg.append("defs");
var gradients = svgDefs.append("linearGradient")
                        .attr("id", "gradient");

var startGrad = gradients.append("stop")
        .attr("stop-color", barColors[currentViewState][0])
        .attr("stop-opacity", "0.3")
        .attr("offset", 0);

var stopGrad = gradients.append("stop")
        .attr("stop-color", barColors[currentViewState][1])
        .attr("stop-opacity", "0.7")
        .attr("offset", 1);

var buttonScale = d3.scaleBand()
                    .domain(viewStatesList)
                    .rangeRound([margin.left, w-margin.right-buttonsPaddingRight])
                    .paddingInner(buttonsPaddingInner);

var modeButtons = svg.selectAll("g.mode-buttons")
                    .data(viewStatesList)
                    .enter()
                    .append("g")
                    .attr("id", function(d){return "mode"+d;})
                    .classed("mode-buttons", true)
                    .attr("transform", function(d,i){
                        var xPos = buttonScale(d);
                        var yPos = (h-margin.bottom-buttonsHeight);
                        return "translate("+xPos+","+yPos+")";
                    });
svg.select("#mode"+viewStatesList[currentViewState])
        .classed("selected", true);

modeButtons.append("rect")
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("y", 0)
            .attr("x", 0)
            .attr("fill", function(d,i){
                return barColors[i][1];
            })
            .attr("width", buttonScale.bandwidth())
            .on("click", changeMode)
            .attr("height", buttonsHeight);

modeButtons.append("text")
            .attr("x", buttonScale.bandwidth()/2)
            .attr("y", buttonsHeight/2 + 5)
            .text(function(d){ return d;});
            

svg.append("g")
    .attr("id", "graph")
    .selectAll("rect")
    .data(values)
    .enter()
    .append("rect")    
    .classed("bars", true)
    .attr("width", function(d){
        return xScale(d[currentViewState]);
    })
    .attr("height", function(d){
        return yScale.bandwidth();
    })
    .attr("x", function(d){
        return margin.left;
    })
    .attr("y", function(d,i){
        return yScale(keys[i]);
    })
    .attr("fill", "url(#gradient)")
    .append("title")
    .text(function(d,i){ return keys[i];});

var yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(5);

var xAxis = d3.axisTop()
                .scale(xScale);

svg.append("g")
    .classed("axis", true)
    .attr("id", "y-axis")
    .attr("transform", "translate("+margin.left+","+0+")")
    .call(yAxis);

svg.append("g")
    .classed("axis", true)
    .attr("id", "x-axis")
    .attr("transform", "translate("+(0+margin.left)+","+(margin.top)+")")
    .call(xAxis);
    

function changeMode(d){
    svg.select("#mode"+viewStatesList[currentViewState])
        .classed("selected", false);
    currentViewState = viewStates[d];
    setXScale(currentViewState);
    svg.select("#mode"+viewStatesList[currentViewState])
        .classed("selected", true);

    svg.selectAll("#graph rect")
        .transition()
        .duration(1000)
        .attr("width", function(d){
            return xScale(d[currentViewState]);
        });
    stop
    svg.select("#x-axis")
        .transition()
        .duration(1000)
        .call(xAxis);

    startGrad.transition()
            .duration(1000)
            .attr("stop-color", barColors[currentViewState][0]);
    stopGrad.transition()
            .duration(1000)
            .attr("stop-color", barColors[currentViewState][1]);
}
    


