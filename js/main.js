const attributes = ['Power', 'Speed', 'Magic'];

function rockPaperScissors(attackingAttribute, defendingAttribute) {
  let i = attributes.indexOf(attackingAttribute);
  if (attackingAttribute === attributes[i] && defendingAttribute === attributes[i+1]) {
    return "Attacking attribute is stronger";
    console.log(attackingAttribute + " versus " + defendingAttribute + ": Attacking attribute is stronger");
  } else if (attackingAttribute === attributes[i] && defendingAttribute === attributes[i+2]) {
    return "Attacking attribute is weaker";
    console.log(attackingAttribute + " versus " + defendingAttribute + ": Attacking attribute is weaker");
  } else if (attackingAttribute === attributes[i] && defendingAttribute === attributes[i-2]) {
    return "Attacking attribute is stronger";
    console.log(attackingAttribute + " versus " + defendingAttribute + ": Attacking attribute is stronger");
  } else if (attackingAttribute === attributes[i] && defendingAttribute === attributes[i-1]) {
    return "Attacking attribute is weaker";
    console.log(attackingAttribute + " versus " + defendingAttribute + ": Attacking attribute is weaker");
  } else if (attackingAttribute === attributes[i] && defendingAttribute === attributes[i]) {
    return "Attacking attribute is neutral";
    console.log(attackingAttribute + " versus " + defendingAttribute + ": Attacking attribute is neutral");
  }
}
