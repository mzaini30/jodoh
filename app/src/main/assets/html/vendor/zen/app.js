$(".form-control").on("keyup", () => {
  namamu = $(".namamu").val()
  nama_dia = $(".nama-dia").val()
  total = 0
  for (x of namamu){
    total += x.charCodeAt(0)
  }
  for (x of nama_dia){
    total += x.charCodeAt(0)
  }
  total = Math.round(total % 100)
  $(".progress-bar").css("width", `${total}%`)
  $(".kekuatan").html(total)
})

$(".navbar-nav a").click(() => $(".navbar-toggle").click())