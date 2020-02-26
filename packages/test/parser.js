const externalQuotesValue = 'double';

function getQuotes() {
  const double = `"`;
  const single = `'`;

  return {
    level1: externalQuotesValue === 'double' ? double : single,
    level2: externalQuotesValue === 'double' ? single : double
  };
}

function encodeSVG(data) {
  const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
  if (externalQuotesValue === 'double') {
    data = data.replace(/"/g, '\'');
  }
  else {
    data = data.replace(/'/g, '"');
  }

  data = data.replace(/>\s{1,}</g, "><");
  data = data.replace(/\s{2,}/g, " ");

  return data.replace(symbols, encodeURIComponent);
}

function formatAsCSS(escaped, bareValue = true) {
  if (bareValue) {
    return `url("data:image/svg+xml,${escaped}");`;
  } else {
    return `background-image: url("data:image/svg+xml,${escaped}");`;
  }
}

function parse(svg, bareValue = true) {
  return formatAsCSS(encodeSVG(addNameSpace(svg)), bareValue)
}

function addNameSpace(data) {
  if (data.indexOf('http://www.w3.org/2000/svg') < 0) {
    data = data.replace(/<svg/g, `<svg xmlns='http://www.w3.org/2000/svg'`);
  }

  return data;
}

module.exports = (svg, bareValue = true) => parse(svg, bareValue)

module.exports.format = formatAsCSS
