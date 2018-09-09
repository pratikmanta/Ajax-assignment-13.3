// created json objects as required
// 4 student objects
var students = [
    {
        "name": "James",
        "age": 21,
        "weight": 65 + "kg",
        "height": 192 + "cm",
        "friends": ["Sally","Sue","Josh"],
        "college": {
            "name": "MIT",
            "city": "California",
            "pincode": 48625
        }
    },

    {
        "name": "Itachi",
        "age": 27,
        "weight": 75 + "kg",
        "height": 182 + "cm",
        "friends": ["Raj","Susan","Jorge"],
        "college": {
            "name": "Cambridge",
            "city": "England",
            "pincode": 48780
        }
    },
    
    {
        "name": "Zoro",
        "age": 28,
        "weight": 63 + "kg",
        "height": 176 + "cm",
        "friends": ["Nami","Sanji","Frank"],
        "college": {
            "name": "Oxford",
            "city": "New York",
            "pincode": 48432
        }
    },

    {
        "name": "Rock",
        "age": 39,
        "weight": 90 + "kg",
        "height": 200 + "cm",
        "friends": ["Vin","Craig","Paul"],
        "college": {
            "name": "F & F University",
            "city": "Los Angeles",
            "pincode": 42132
        }
    }
]

// logging student details 
var count=0;
for(var i=0; i<students.length; i++){
    console.log(students[i]);
    i = count++ ;
}
