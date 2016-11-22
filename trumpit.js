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
    'Braggart',
    'Nazi',
    'Vindictive',
    'Poor Impulse Control'
  ];

  var tooltips = [
    'said he would force the military to commit war crimes.',
    'said about women, “You have to treat ’em like shit.”',
    'proposed creating a database system to track Muslims in the U.S.',
    'said a U.S.-born judge couldn’t be impartial because of his “Mexican heritage.”',
    'advocated assassinating terrorists’ families.',
    'advocated waterboarding as punishment even if it doesn’t help gain information, because “they deserve it anyway.”',
    'said women should be punished for having abortions.',
    'urged supporters to beat up protesters at his rallies.',
    'made fun of a reporter’s physical disability.',
    'promised to deport U.S. citizens whose parents immigrated illegally, in violation of the 14th Amendment.',
    'advocated shutting down mosques.',
    'called for a ban on Muslims entering the U.S.',
    'described global warming as a hoax perpetrated by “the Chinese” for competitive reasons.',
    'responded to the murder of 49 people at Orland’s Pulse nightclub with “Appreciate the congrats for being right on Islamic terrorism.”',
    'suggested the U.S. should reduce its debts by partially defaulting on them.',
    'fraternizes with avowed white supremacists on Twitter.',
    'called Mexican immigrants rapists.',
    'endored torture.',
    'refused to sell any of his more than 500 businesses if he’s elected, creating unprecedented conflicts of interest.',
    'disparaged Senator John McCain’s military service because he was captured by the North Vietnamese.',
    'defended FDR’s internment of Japanese Americans.',
    'refused to release his tax returns during the campaign.',
    'retweeted bogus crime statistics that wildly inflated the rate at which blacks kill whites.',
    'suggested that supporters who attacked a homeless Hispanic man were “very passionate” and “love their country.”',
    'blamed sexual assault in the military on “put[ting] men and women together.”',
    'referred to Tiananmen Square demonstrations as a riot and said the Chinese government’s response “shows you the power of strength.”',
    'repeatedly suggested that President Obama might be a Muslim.',
    'claimed he saw thousands of Muslims in New Jersey celebrating the 9/11 attacks.',
    'doesn’t know how many articles are in the Constitution.',
    'called an attorney who requested a break to pump breast milk “disgusting.”',
    'doesn’t pay his bills.',
    'proposed changing libel laws to make it easier to sue media organizations.',
    'praised North Korean dictator Kim Jong-un.',
    'barred reporters from campaign events for unfavorable coverage.',
    'described Fox debate moderator Megyn Kelly as having “blood coming out of her wherever.”',
    'said, “I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn’t lose voters.”',
    'questioned President Obama’s American citizenship, bringing the “birther” campaign into the mainstream.',
    'named and threatened former students who criticized Trump University.',
    'bragged about the size of his penis during a primary debate.',
    'didn’t immediately disavow an endorsement from KKK leader David Duke.',
    'claimed he’d donated $1 million to veteran’s groups, although none received any money until reporters began investigating.',
    'didn’t know the meaning of the term “Brexit” less than a month before the U.K. referendum on leaving the E.U.',
    'called Elizabeth Warren “the Indian” and “Pocahontas.”',
    'posted a link to Facebook promoting the conspiracy theory that the Obama administration actively supported al-Qaida in Iraq.',
    'founded Trump University, which a salesman called “a fraudulent scheme [that] preyed upon the elderly and uneducated.”',
    'said, “It doesn’t really matter what [the media] write as long as you’ve got a young and beautiful piece of ass.”',
    'advocated plundering oil from Iraq, Libya, and other oil-rish countries invaded by the U.S., in violation of the Geneva Conventions.'
  ];

  var re = /(president(-elect)?(\s+donald(\s+j(\.|ohn)?)?)?|donald(\s+j(\.|ohn)?)?\s+)trump\b/i;
  var body = document.getElementsByTagName("BODY")[0];
  var walk = function(el, parent) {
    if (!el) {
      return;
    }
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
        var pre;
        if (startIndex > 0) {
            pre = document.createTextNode(t.substring(0, startIndex));
        }

        // a node with text from after the match
        var post;
        if (endIndex < t.length) {
            post = document.createTextNode(t.substring(endIndex));
        }

        // a new span with the rewritten text
        var newSpan = document.createElement('SPAN');
        newSpan.className = 'trumpit-cognomen';
        var rewritten = document.createTextNode(m[1] + cognomen);
        newSpan.appendChild(rewritten);

        i = Math.random() * tooltips.length;
        var tooltipText = 'Donald Trump ' + tooltips[Math.floor(i)];

        var tooltipSpan = document.createElement('SPAN');
        tooltipSpan.className = 'trumpit-tooltip';
        var tooltipTextNode = document.createTextNode(tooltipText);
        tooltipSpan.appendChild(tooltipTextNode);
        newSpan.appendChild(tooltipSpan);

        // replace el with pre+newSpan+post
        if (pre) {
          parent.insertBefore(pre, el);
        }
        parent.insertBefore(newSpan, el);
        if (post) {
          parent.insertBefore(post, el);
        }
        parent.removeChild(el);

        walk(post, parent);
      }
    } else {
      var c = el.childNodes;
      for (var i = 0; i < c.length; i++) {
        walk(c[i], el);
      }
    }
  };
  walk(body, null);
  var obs = new MutationObserver(function(mutations) {
    walk(body, null);
  });
  obs.observe(body, {
    childList: true,
    subtree: true,
  });
};
trumpit();
