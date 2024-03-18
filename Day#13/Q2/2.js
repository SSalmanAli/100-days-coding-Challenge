function describe_city(Name_country, Name_City) {
    if (Name_country === void 0) { Name_country = "pakistan"; }
    if (Name_City === void 0) { Name_City = "Karachi"; }
    console.log("".concat(Name_City, " is in ").concat(Name_country));
}
describe_city();
describe_city("India", "Mumbai");
describe_city("Turkey", "Istanbul");
