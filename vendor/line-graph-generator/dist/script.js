// Initiate graphs

  var songs = {
  "Mon" : 80,
  "Tues": 40,
  "Wed" : 60,
  "Thu" : 80,
  "Fri": 40,
  "Sat" : 60,

   };

var coffees = {
  "Mon" : 3,
  "Tues": 2,
  "Wed" : 3,
  "Thu" : 2,
  "Fri" : 1.5,
  "Sat" : 1,
  "Sun" : 2
   };

var cats = {
    "10/12" : 1,
    "10/13" : 4,
    "10/14" : 15,
    "10/15" : 27,
    "10/16" : 48,
    "10/17" : 34,
    "10/18" : 12,
}

var reddit = {
    "10/12" : 3.5,
    "10/13" : 2.3,
    "10/14" : 2,
    "10/15" : 1.5,
    "10/16" : 3,
    "10/17" : 4,
    "10/18" : 7,
}

var feature = {
    "1am" : 20,
    "2am" : 15,
    "3am" : 26,
    "4am" : 23,
    "5am" : 36,
    "6am" : 48,
    "7am" : 89,
    "8am" : 109,
    "9am" : 140,
    "10am" : 162,
    "11am" : 173,
    "12pm" : 201
}


$('.graph-songs').graphiq({
    data: songs,
    fluidParent: ".col",
    height: 100,
    xLineCount: 5,
    dotRadius: 4,
    yLines: true,
    xLines: true,
    dots: true,
    fillOpacity: 0.5,
    fill: true,
    colorUnits: "#c3ecf7"
  });

  $('.graph-coffees').graphiq({
    data: coffees,
    fluidParent: ".col",
    height: 100,
    xLineCount: 3,
    dotRadius: 5,
    yLines: true,
    xLines: true,
    dots: true,
    colorLine: "#d3d1b1",
    colorDot: "#726d60",
    colorXGrid: "#634e1b",
    colorUnits: "#d3d1b1",
    colorFill: "#3a2f23",
    dotStrokeWeight: 3,

  });

    $('.graph-cats').graphiq({
    data: cats,
    fluidParent: ".col",
    yLines: false,
    xLines: false,
    dots: false,
    colorLine: "#efede5",
    colorLabels: "#efede5",
    fill: false
  });

      $('.graph-hours').graphiq({
    data: reddit,
    fluidParent: ".col",
    height: 100,
    xLineCount: 2,
    dotRadius: 5,
    yLines: false,
    xLines: true,
    dots: true,
    colorLine: "#2F9C95",
    colorDot: "#A3F7B5",
    colorXGrid: "#788476",
    colorUnits: "#A3F7B5",
    colorFill: "#2a4151"
  });

$('.graph-feature').graphiq({
    data: feature,
    fluidParent: ".col",
    colorFill: "#0B4F6C",
  colorRange: "#0B4F6C",
  colorLabels: "#0B4F6C",
    colorLine: "#145C9E",
    fillOpacity: 0.6,
    yLines: false,
    xLineCount: 2,
    dotRadius: 2,
    colorUnits: "#8ecde2",
    lineWeight: 0,
    dots: false,
    colorDot: "#ffc744",
    colorYGrid: "#041e28",
    colorXGrid: "#eeeeee",
    height: 180
})
