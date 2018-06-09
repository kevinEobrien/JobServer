
exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE job CASCADE") 
    .then(function () {
      return knex("job").insert([
        { id: 1, 
          customer_id: 1, 
          company: "National Renewable Engery Lab",
          title: "Web Developer",
          location:  "Golden",
          salary: null,
          URL: "https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=Web+developer+National+Renewable+Energy+Lab&sc.keyword=Web+developer+National+Renewable+Energy+Lab&locT=C&locId=1148170&jobType=",
          notes: "",
          deadline: null,
          applied: "[0]6/18/18",
          interview1: null,
          interview2: null,
          offer: ""
        }
      ]);
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE job_id_seq RESTART WITH 2;");
    });
};