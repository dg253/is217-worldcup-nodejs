test("Database response is an object or false", function(){
         var callDBobj2 = new callDB;

         var c1 = "Peru";
         var c2 = "Mexico";
         var c3 = "Brazil";
         var c4 = "hjkg";

        equal(typeof callDBobj2.apicall(c1), "object");
        equal(typeof callDBobj2.apicall(c2), "object");
        equal(typeof callDBobj2.apicall(c3),"object");
        equal(callDBobj2.apicall(c4), false);
});

test("FilterCountry function returns appropriate country name", function(){
         var d1 = "Peru";
         var d2 = "United States";
         var d3 = "Russian Federation";

        equal(FilterCountry(d1), "Peru");
        equal(FilterCountry(d2), "USA");
        equal(FilterCountry(d3),"Russia");
});