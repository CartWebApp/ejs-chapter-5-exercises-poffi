require('./includes/scripts.js') // include the scripts used by the chapter




function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  })
 
  if (scripts.length == 0) return "ltr";
  
  return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
}

function characterScript(codes) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return codes >= from && codes < to;
    })) {
      return script;
    }
  }
}

function countBy(group, groupName) {
  let counts = [];
  for (let item of group) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
  
}

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
  
  
  