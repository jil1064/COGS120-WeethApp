var total_events = require("../data/total.json");
var friends = require("../data/friends");

exports.view = function(req, res) {
    
  if (req.query.weeth) {
    var str = req.query.date.toString();
      var strMonth = str.substr(5, 2);

      if (strMonth == "01") { strMonth = "Jan"; }
        else if (strMonth == "02") { strMonth = "Feb"; }
        else if (strMonth == "03") { strMonth = "Mar"; }
        else if (strMonth == "04") { strMonth = "Apr"; }
        else if (strMonth == "05") { strMonth = "May"; }
        else if (strMonth == "06") { strMonth = "Jun"; }
        else if (strMonth == "07") { strMonth = "Jul"; }
        else if (strMonth == "08") { strMonth = "Aug"; }
        else if (strMonth == "09") { strMonth = "Sep"; }
        else if (strMonth == "10") { strMonth = "Oct"; }
        else if (strMonth == "11") { strMonth = "Nov"; }
        else { strMonth = "Dec"; }  
    
    var new_activity = {
      title: req.query.title,
      location: req.query.location,
      date: req.query.date,
      weeth: req.query.weeth,
      month: strMonth
    };

    console.log(new_activity);

    addEvent(new_activity);
      
    var friends_arr = friends.friends;
    var friend = req.query.weeth;
    for (var i = 0; i < friends_arr.length; i++) {
        if (friends_arr[i] === friend) {
          friends_arr[i].activities.push(new_activity);
        }
      }
  }

//  total_events.events.sort((a, b) => {
//    return Date.parse(b.date) - Date.parse(a.date);
//  });
  res.render("home", total_events);
};

function addEvent(activity) {
  total_events.events.push(activity);
}
