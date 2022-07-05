// use of jquery ajax
$.ajax({
  type: "get",
  url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian",
  success: function (response) {
    let arr = response.meals;

    for (let i = 0; i < arr.length; i++) {
      let newItem = `<div class="card col-md-3 m-2 shadow p-3 mb-5 bg-white rounded">
            <p>${arr[i].strMeal}</p>
            <img src=${arr[i].strMealThumb} class="img-fluid">
            <p>id:${arr[i].idMeal}</p>
            </div>`;
      $("#myItems").append(newItem);
    }
  },
  error: function () {
    console.log(error);
  },
});


