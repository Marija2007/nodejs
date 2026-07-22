function analizirajTekst(tekst) {
  const brojKarakteri = tekst.length;

  const paragrafi = tekst
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);
  const brojParagrafi = paragrafi.length;

  const zborovi = tekst
    .split(/\s+/)
    .map(z => z.trim())
    .filter(z => z.length > 0);
  const brojZborovi = zborovi.length;

  const zboroviPomali = zborovi.filter(z => z.length < 5).length;
  const zboroviPogolemi = zborovi.filter(z => z.length > 5).length;
  const zboroviEdnakvi = zborovi.filter(z => z.length === 5).length;

  const samoglaski = ['a', 'o', 'u', 'i', 'e'];
  const brojSoSamoglaska = zborovi.filter(z => {
    const prvaBukva = z.charAt(0).toLowerCase();
    return samoglaski.includes(prvaBukva);
  }).length;

  return {
    brojKarakteri,
    brojParagrafi,
    brojZborovi,
    zboroviPomali,
    zboroviPogolemi,
    zboroviEdnakvi,
    brojSoSamoglaska
  };
}
function getAnalysis(req, res) {
  res.render('get-forma');
}
function postAnalysis(req, res) {
  const tekst = req.body.tekst || '';
  const rezultati = analizirajTekst(tekst);

  res.render('post-forma', { tekst, rezultati });
}

module.exports = { getAnalysis, postAnalysis };