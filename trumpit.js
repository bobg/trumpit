function trumpit() {
  var cognomens = [
    'Sexual Assault',
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
    'Tax Evader',
    'Bully',
    'Braggart'
  ];

  var re = /(president(-elect)?(\s+donald(\s+j(\.|ohn)?)?)?|donald(\s+j(\.|ohn)?)?\s+)trump\b/i;
  var body = document.getElementsByTagName("BODY")[0];
  var walk = function(el) {
    if (el.className == 'trumpit-cognomen') {
      return;
    }
    if (el.nodeType == 3) {
      var t = el.nodeValue;
      var m = re.exec(t);
      if (m) {
        var i = Math.random() * cognomens.length;
        var cognomen = cognomens[Math.floor(i)];

        var startIndex = m.index;
        var endIndex = startIndex + m[0].length;

        // a node with text from before the match
        var pre = document.createTextNode(t.substring(0, startIndex));

        // a node with text from after the match
        var post = document.createTextNode(t.substring(endIndex));

        // a new span with the rewritten text
        var newSpan = document.createElement('SPAN');
        newSpan.className = 'trumpit-cognomen';
        var rewritten = document.createTextNode(cognomen);
        newSpan.appendChild(rewritten);

        // replace el with pre+newSpan+post
        var parent = el.parentNode;
        parent.insertBefore(pre, el);
        parent.insertBefore(newSpan, el);
        parent.insertBefore(post, el);
        parent.removeChild(el);

        walk(post);
      }
    } else {
      var c = el.childNodes;
      for (var i = 0; i < c.length; i++) {
        walk(c[i]);
      }
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
