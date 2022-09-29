var demo = {
  // (A) SUPPORT FUNCTION - AJAX FETCH
  fetch : (data, load) => {
    // (A1) FORM DATA
    var form = new FormData();
    for (let [k,v] of Object.entries(data)) { form.append(k, v); }
    
    // (A2) AJAX FETCH
    fetch("2-lidi-lib.php", { method: "post", body : form })
    .then(res => res.text())
    .then(res => load(res))
    .catch(err => console.error(err))
    console.log(load)
  },

  // (B) INIT
  lidi : null, // like dislike instance
  init : () => {
    // (B1) GET LIKES FROM SERVER
    demo.fetch({ req : "get" }, data => {
      // (B2) DRAW LIKES/DISLIKES BUTTON
      data = JSON.parse(data);
      console.log(data)
      demo.lidi = lidi({
        hWrap : document.getElementById("demo"),
        status : data.user ? data.user : 0,
        count : data.react,
        change : demo.save
      });
    });
  },

  // (C) SAVE LIKE/DISLIKE REACTION
  save : status => {
    demo.fetch({
      req : "save",
      react : status
    }, res => { try {
      res = JSON.parse(res);
      demo.lidi.recount(res.react);
    } catch (e) { console.error(e); }});
  }
};
window.onload = demo.init;