$(function () {
  const $device = $(".device");
  const $features = $(".features");
  const $location = $(".location");

  var waypoints1 = $device.waypoint(
    function () {
      $device.find("img").addClass("animate");
    },
    {
      offset: "50%",
    }
  );
  var waypoints2 = $features.waypoint(
    function () {
      $features.find("img").addClass("grow-img");
      $features.find("h4").addClass("animate");
    },
    {
      offset: "65%",
    }
  );
  var waypoints3 = $location.waypoint(
    function () {
      $location.find(".stripe").addClass("animate_down");
    },
    {
      offset: "60%",
    }
  );
});
