
var a_bar_walks_into_my_tummy_events = function(){
  var elements = new Elements(wrong_one);  //getElements()
  var lightbulb_in = elements.lightbulb().first_connection()
  var empty_sensors = elements.sensor().empty().elements

  if (empty_sensors && empty_sensors.length == 3) {
    $.each(empty_sensors, function(i, sensor){
//       highlightSection(find_outgoing([sensor], 'empty'), true);
      console.log(sensor)
        highlightSection(Filters.find_connection(sensor,'empty','outgoing'), true)
    })
    createSpeechBubble(empty_sensors[0].connections[0], "Candies can have 3 shapes: round(o), stick(|), and bar(-)");
  }

  else if (elements.sensor('bar').active_connection().exists() &&
            elements.lightbulb().empty().exists()) {
    highlightSection(lightbulb_in, true);
    createSpeechBubble(lightbulb_in, "Good choice!  Now click on the lightbulb just like last time.");
  }

  else if (elements.sensor().active_connection().exists() &&
           elements.lightbulb().empty().exists()){
    createSpeechBubble(lightbulb_in, 'With great power comes great responsibility.');
  }

  else if (elements.lightbulb().input('filled').exists() &&
          elements.sensor('bar').empty().exists()) {
    createSpeechBubble(elements.lightbulb().first_connection(), "You can start the machine if you want, but you've been warned.");

    //hook up click event and timer to eventually say "here, try this instead" while highlighting the bar sensor
  }
}

var test_sensor = function(id, type, connection){
  return {
    id: id,
    type: type + " sensor",
    connections: [
      {
        connection_type: 'outgoing',
        x: 5,
        y: 10,
        width: 50,
        height: 50,
        connected_to: connection
      }
    ]
  }
}

var test_lightbulb = function(connection){
  return {
  id: '1',
  type: 'lightbulb',
  connections: [
    {
      connection_type: 'incoming',
      x: 5,
      y: 10,
      width: 100,
      height: 200,
      connected_to: connection
    }
  ]
  }
}

var start2 = [
    test_lightbulb(''),
    test_sensor(2, 'bar', ''),
    test_sensor(3, 'stick', ''),
    test_sensor(4, 'ball', '')
]

var bar_selected = [
  test_lightbulb(''),
  test_sensor(2, 'bar', 'active'),
  test_sensor(3, 'stick', ''),
  test_sensor(4, 'ball', '')
]

var stick_selected = [
  test_lightbulb(''),
  test_sensor(2, 'bar', ''),
  test_sensor(3, 'stick', 'active'),
  test_sensor(4, 'ball', '')
]


var wrong_one = [
  test_lightbulb('4'),
  test_sensor(2, 'bar', ''),
  test_sensor(3, 'stick', ''),
  test_sensor(4, 'ball', '1')
]