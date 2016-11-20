function trumpit() {
  var cognomens = [
    'Rapist',
    'Swindler',
    'Thin Skin',
    'Illiterate',
    'Numerous Bankruptcies',
    'Misogynist',
    'Racist',
    'Liar',
    'Inferiority Complex',
    'Authoritarian',
    'Hatred',
    'Cruelty',
    'Narcissist',
    'Ignorant',
    'Corrupt',
    'Penis Talk',
    'Vulgarian',
    'Draft Dodger',
    'Tax Evader'
  ];

  var body = document.getElementsByTagName("BODY")[0];
  var walk = function(el) {
    if (el.nodeType == 3) {
      var t = el.nodeValue;
      el.nodeValue = t.replace(/(president(-elect)?(\s+donald(\s+j(\.|ohn)?)?)?|donald(\s+j(\.|ohn)?)?\s+)trump\b/gi,
                               function(match, p1) {
                                 var i = Math.random() * cognomens.length;
                                 var cognomen = cognomens[Math.floor(i)];
                                 return p1 + cognomen;
                               });
    }
    var c = el.childNodes;
    for (var i = 0; i < c.length; i++) {
      walk(c[i]);
    }
  };
  walk(body);
  var obs = new MutationObserver(function(mutations) {
    walk(body);
  });
  obs.observe(body, {
    childList: true,
    subtree: true,
  });
};
trumpit();
