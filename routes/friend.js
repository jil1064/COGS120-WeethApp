var data = require("../data/friends.json");
var total_events = require("../data/total.json");

exports.list = function(req, res) {
  var friend = req.params.friend;
  var friends_arr = data.friends;
  var found;

  // look for a specific friend
  for (var i = 0; i < friends_arr.length; i++) {
    if (friends_arr[i].name === friend) {
      found = friends_arr[i];
    }
  }

  
  
  // if found the friend, push all activities of friends
  // into a new array to be rendered
  if (found) {
//     var activites = total_events.events.filter(
//       event => event.weeth === found.name
//     );
    var activites = total_events.events.filter(function (event) {
      return event.weeth === found.name;
    });
    found.activities = [];
//     found.activities.push(...activites);
    found.activities.push(activites);
  }
  console.log(found);
  res.render("friend", found);
};
