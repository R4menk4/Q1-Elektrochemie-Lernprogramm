/* Chemistry comparison: order within a side is free; direction, species and ratios matter. */
(function(root){
 'use strict';
 function clean(value){return String(value??'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).replace(/⁺/g,'+').replace(/[⁻−–]/g,'-').replace(/(?:=>|->|⟶|→)/g,'>').replace(/[\s^]/g,'').replace(/([A-Za-z][A-Za-z0-9]*)([+-])([23])(?=$|[+>])/g,'$1$3$2');}
 function parts(side){return side.split(/\+(?=[A-Za-z0-9(])/).map(term=>{const m=term.match(/^(\d+(?:\.\d+)?)?(.+)$/);return m?{n:m[1]?Number(m[1]):1,s:m[2]}:null;});}
 function matches(user,expected){
  const ref=clean(expected).split('>'),input=clean(user).split('>');if(ref.length!==2||input.length!==2||input.some(x=>!x))return false;
  const terms=ref.map(parts);if(terms.flat().some(t=>!t||!t.n))return false;
  const species=[...new Set(terms.flat().map(t=>t.s))].sort((a,b)=>b.length-a.length);
  function parse(side){const counts={};let rest=side;while(rest){const coeff=rest.match(/^\d+(?:\.\d+)?/);const n=coeff?Number(coeff[0]):1;if(!Number.isFinite(n)||n<=0||n>1e6)return null;if(coeff)rest=rest.slice(coeff[0].length);const s=species.find(s=>rest.startsWith(s)&&(rest.length===s.length||rest[s.length]==='+'));if(!s)return null;counts[s]=(counts[s]||0)+n;rest=rest.slice(s.length);if(rest){rest=rest.slice(1);if(!rest)return null;}}return counts;}
  let factor;
  for(let i=0;i<2;i++){const actual=parse(input[i]);if(!actual)return false;const wanted={};terms[i].forEach(t=>wanted[t.s]=(wanted[t.s]||0)+t.n);if(Object.keys(actual).length!==Object.keys(wanted).length)return false;for(const [s,n]of Object.entries(wanted)){if(!actual[s])return false;const f=actual[s]/n;if(factor===undefined)factor=f;else if(Math.abs(f-factor)>1e-8)return false;}}
  return true;
 }
 root.ChemEquation={matches,clean,parts};
})(typeof window==='undefined'?globalThis:window);
