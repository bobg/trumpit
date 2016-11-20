var trumpit = function() {
  var cognomens = [
    'Rapist',
    'Swindler',
    'Thin-skin',
    'Illiterate',
    'Bankrupt',
    'Misogynist',
    'Racist',
    'Liar',
    'Inferiority complex',
    'Authoritarian',
    'Hatred',
    'Cruelty',
    'Narcissist',
    'Ignorant',
    'Corrupt',
    'Penis',
    'Vulgarian'
  ];

  var body = document.getElementsByTagName("BODY")[0];
  var walk = function(el) {
    if (el.nodeType == 3) {
      var t = el.nodeValue;
      el.nodeValue = t.replace(/(president(-elect)?(\s+donald(\s+j\.?)?)?|donald(\s+j\.?)?\s+)trump\b/gi,
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
